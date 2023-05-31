import { Rocon, Link } from 'rocon/react';

import { productPageBuilder } from '../Routes';
import { menuLink } from './ProductPage.css';

const builder = Rocon.Root({
	root: {
		pathname: "/",
		state: null
	}
});
  // .routes({top: {action: (() => <TopPage />)}});
	// .exact({action: () => <TopPage /> });

// const RootPath = () => {
// 	return useRoutes(builder);
// };

type Prop = {
	searchNumber: number
}

export const ProductPageMenu = (prop: Prop) => {
	// const searchNum = window.location.search;
	let productPageArray: (string | null)[] = ["0", "1", "2"];
	productPageArray[prop.searchNumber] = null;

	const necessaryPage = productPageArray.flatMap((productPage) => {
		return productPage ?? [];
	});

	return (
		<ul className={menuLink.wrap}>
			<li>
				<Link route={builder.route} className={menuLink.link}>戻る</Link>
			</li>
			{necessaryPage.map((page) => {
				return (
				<li>
					<Link route={productPageBuilder.route} match={{"page": page}} className={menuLink.link}>{`作品${Number(page) + 1}`}</Link>
				</li>
				);
			})}
		</ul>
	)
}