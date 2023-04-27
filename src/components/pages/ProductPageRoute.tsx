import { Rocon, Link } from 'rocon/react';

import { productPageBuilder } from '../Routes';
import { TopPage } from '../TopPage';

const rootPath = Rocon.Path()
  .route("top", (route) => route.action(() => <TopPage />));

type ProductPageType = "0" | "1" | "2";
// let productPageArray: (string | null)[] = ["0", "1", "2"];
// productPageArray[Number(searchNum)] = null;

let omitNum: string;
type OmitPageIfSearch<T extends (string | null)> = T extends typeof omitNum ? null : T;
type MenuItemArray = OmitPageIfSearch<ProductPageType>;

const ProductPageMenu = (searchNumber: string, menuDisplay: MenuItemArray) => {
	// const searchNum = window.location.search;

	return (
		<ul>
			<li>
				<Link route={rootPath._.top} className={menuItem.anchor}>戻る</Link>
			</li>
			{menuDisplay.flatMap(() => {
				
			})}
			<li>
				<Link route={productPageBuilder.route} match={{"page": "1"}} className={menuItem.anchor}>作品２</Link>
			</li>
			<li>
				<Link route={productPageBuilder.route} match={{"page": "2"}} className={menuItem.anchor}>作品３</Link>
			</li>
		</ul>
	)
}