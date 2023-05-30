import { Rocon, useRoutes } from 'rocon/react';
import { TopPage } from '~/components/TopPage';
import { ProductComponent } from './pages/ProductPage';

const topLevelRoutes = Rocon.Path()
  .exact({ action: () => <p>I am root</p> })
  // .route("sunkit", (route) => route.action(() => <ProductPage page={page} />)
  // .route("products");

// export const productPageBuilder = topLevelRoutes._.products
//   .attach(Rocon.Search("page"))
//   .action(({page}) => <ProductComponent pageNum={Number(page)} />);

export const Routes = () => {
  return useRoutes(topLevelRoutes);
};
