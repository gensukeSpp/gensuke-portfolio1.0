import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CodeProps } from "react-markdown/lib/ast-to-react";

import { Product } from './portfolio_type';
import { action, boundary, item, language } from './ProductPage.css';

import { callSource } from './SourceContents';

// https://www.choge-blog.com/programming/typescriptelement-implicitly-has-an-any-type-because-expression-of-type-string-cant-be-used-to-index-typeerrorsolution/
type Prop = {
  [pageNum: string]: number
}

const fetchData: Promise<Product[]> = fetch('http://my-json-server.typicode.com/gensukeSpp/sunkit-portfolio/products').then((res) =>
  res.json()
);

export const ProductComponent = (page: Prop) => {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const f = async () => {
      const json = await fetchData;
      setProducts(json);
    };
    f();
  }, []);

  const key: keyof string = page.pageNum;

  return (
    <>
      {products.map((product: Product, i) => {
        if(i === key){
          return (
            <div key={i}>{i}:KEY={key}
              <img src="" alt={`${product.title}` + "のスクリーンショット"} />
              <dl className={boundary}>
                <dt className={item.title}>タイトル：{product.title}</dt>
                <dd>制作・更新期間{product.term}</dd>
                <dd>{product.presentation}</dd>
                  {product.language.map((lang, j) => {
                    return (
                      <div key={j}>
                        <dl className={boundary}>
                          <dt className={language.name}>使用言語：{lang.program}</dt>
                          <dl className={boundary}>
                            {lang.library?.map((lib, k) => {
                              return (
                                <div key={k}>
                                  <dt className={language.name}>{lib.name}</dt>
                                  <dd>{lib.description}</dd>
                                  <dl className={boundary}>
                                    {lib.action.map((act, l) => {
                                      //  ! is non-null assertion operator.
                                      // Otherwise callSource method can't return to be undefined potential.
                                      const caller = callSource(act.source)!;
                                      return (
                                        <div key={l}>
                                        <dd className={action.summary}>{act.summary}</dd>
                                        <dd className={action.explain}>{act.explanation}</dd>
                                        {/* From https://www.copycat.dev/blog/react-markdown/ */}
                                        <ReactMarkdown
                                          children={caller}
                                          components={{
                                            code({ node, inline, className, children, style, ...props }: CodeProps) {
                                              const match = /language-(\w+)/.exec(className || "");
                                              return !inline && match ? (
                                                <SyntaxHighlighter
                                                  children={String(children).replace(/\n$/, "")}
                                                  language={match[1]}
                                                  {...props}
                                                />
                                              ) : (
                                                <code className={className} {...props}>
                                                  {children}
                                                </code>
                                              );
                                            },
                                          }}
                                        />
                                        </div>
                                      );
                                    })}
                                  </dl>
                                </div>
                              );
                          })}
                        </dl>
                      </dl>
                    </div>
                    );
                  })}
                <a href={`${product.link}`}>作品ページ</a>
              </dl>
            </div>
          ); 
        }
      })}
    </>
  );
}
