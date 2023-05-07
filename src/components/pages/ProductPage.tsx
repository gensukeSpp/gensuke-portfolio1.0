import * as React from 'react';
import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CodeProps } from "react-markdown/lib/ast-to-react";

import { Library, Product } from './portfolio_type';
import { boundaryY, boundaryTop, boundaryBottom } from '../sprinkles.boundary.css';
import { action, item, language, library } from './ProductPage.css';

import { callSource } from './SourceContents';
import { TopCaptureComponent, TopImageKey } from './RetrieveCapture';
import { ProductPageMenu } from './ProductPageRoute';
// import { ReactElement } from 'react-markdown/lib/react-markdown';

/**
  * Element implicitly has an 'any' type because index expression is not of type 'number'
  * solution ↓
  * https://www.choge-blog.com/programming/typescriptelement-implicitly-has-an-any-type-because-expression-of-type-string-cant-be-used-to-index-typeerrorsolution/
*/
type Prop = {
  [pageNum: string]: number
}

const fetchData: Promise<Product[]> = fetch('http://my-json-server.typicode.com/gensukeSpp/sunkit-portfolio/products').then((res) =>
  res.json()
);

let newKey: TopImageKey;
const getImageKey = (innerKeyNumber: number | TopImageKey) => {
  const isImageKey = (innerKeyNumber: number): innerKeyNumber is TopImageKey => typeof innerKeyNumber === 'number';
  if(isImageKey(innerKeyNumber)){
    return innerKeyNumber;
  } else {
    throw new Error("None displayed image.");
  }
}

export const ProductComponent = (page: Prop) => {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const f = async () => {
      const json = await fetchData;
      setProducts(json);
    };
    f();
  }, []);
  console.log(products);

  const key/*: keyof string*/ = page.pageNum;
  newKey = getImageKey(key);
  console.log("key: " + key + "newKey: " + newKey);

  return (
    <>
      {products.map((product: Product, i) => {
        if (i === key)
          return (
            <div key={i}>
              <ProductPageMenu searchNumber={key} />
              {/* <img src={product.screen} alt={`${product.title}` + "のスクリーンショット"} /> */}
              <TopCaptureComponent imageKeyNumber={newKey} title={product.title} />
              <dl className={boundaryY}>
                <dt className={item.title}>{product.title}</dt>
                <dd>制作・更新期間{product.term}</dd>
                <dd>{product.presentation}</dd>
                  {product.language.map((lang, j) => {
                    return (
                      <div key={j}>
                        <dl className={boundaryTop}>
                          <dt className={language.name}>使用言語：{lang.program}</dt>
                          <dl className={boundaryTop}>
                            {lang.library?.map((lib, k) => {
                              return (
                                <div key={k}>
                                  <dt className={library.name}>{lib.name}</dt>
                                  <dd className={library.description}>{lib.description}</dd>
                                  <dl className={boundaryY}>
                                  {lib.action.map((act, l) => {
                                    //  ! is non-null assertion operator.
                                    // Otherwise callSource method can't return to be undefined potential.
                                    // const caller = callSource(act.source)!;
                                    const caller = callSource(act.source);
                                    return (
                                      <div key={l} className={boundaryBottom}>
                                        <dd className={action.summary}>{act.summary}</dd>
                                        <dd className={action.explain}>{act.explanation}</dd>
                                        {/* From https://www.copycat.dev/blog/react-markdown/ */}
                                        <ReactMarkdown
                                          className={action.source}
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
      })}
    </>
  );
}

const ActionComponent = (lib: Library) => {
}