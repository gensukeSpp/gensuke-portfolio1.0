import { Rocon, Link } from 'rocon/react';

import { productPageBuilder } from '../Routes';
import { TopPage } from '../TopPage';

const searchNum = window.location.search;

let productPageArray: (string | null)[] = ["0", "1", "2"];
productPageArray[Number(searchNum)] = null;

const rootPath = Rocon.Path()
  .route("top", (route) => route.action(() => <TopPage />));

const ProductPageMenu = () => {
	return (
		<ul>
			<li>
				<Link route={rootPath._.top} className={menuItem.anchor}>戻る</Link>
			</li>
			<li>
				<Link route={productPageBuilder.route} match={{"page": "1"}} className={menuItem.anchor}>作品２</Link>
			</li>
			<li>
				<Link route={productPageBuilder.route} match={{"page": "2"}} className={menuItem.anchor}>作品３</Link>
			</li>
		</ul>
	)
}