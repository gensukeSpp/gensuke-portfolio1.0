import { Link } from 'rocon/react';

import { productPageBuilder } from '../Routes';

// type Prop = {
//   [pageNum: string]: number
// }

const searchNum = window.location.search;
let menuItemLinks: string[] = ["0", "1", "2"];
menuItemLinks[searchNum] = null;

const ProductPageMenu = () => {
	return (
		<ul>
			<li>
				<Link route={productPageBuilder.route} match={{"page": "0"}} className={menuItem.anchor}>作品１</Link>
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