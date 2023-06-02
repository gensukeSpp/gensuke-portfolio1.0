import { Rocon, useRoutes } from 'rocon/react';

import { ProductComponent } from './pages/ProductPage';
import { HomePageTemp } from './templates/HomePage';

const topLevelRoutes = Rocon.Path()
  .exact({ action: () => <HomePageTemp /> })
  // .route("sunkit", (route) => route.action(() => <ProductPage page={page} />)
  .route("products");

export const productPageBuilder = topLevelRoutes._.products
  .attach(Rocon.Search("page"))
  .action(({page}) => <ProductComponent pageNum={Number(page)} />);

export const Routes = () => {
  return useRoutes(productPageBuilder);
};
