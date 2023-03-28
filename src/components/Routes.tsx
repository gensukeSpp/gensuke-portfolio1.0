import { Rocon, useRoutes } from 'rocon/react';
import { TopPage } from '~/components/TopPage';
import { ProductComponent } from './pages/ProductPage';

export const topLevelRoutes = Rocon.Path()
  .exact({ action: () => <TopPage /> })
  // .route("sunkit", (route) => route.action(() => <ProductPage page={page} />)
  .route("products");

export const productPageBuilder = topLevelRoutes._.products
  .attach(Rocon.Search("page"))
  .action(({page}) => <ProductComponent pageNum={page} />);

export const Routes = () => {
  return useRoutes(productPageBuilder);
};
