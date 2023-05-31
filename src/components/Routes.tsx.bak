import { Rocon, useRoutes } from 'rocon/react';
import { TopPage } from '~/components/TopPage';
import { ProductComponent } from './pages/ProductPage';

const docsRoutes = Rocon.SingleHash("hash", { optional: true })
  .attach(Rocon.Path())
  .exact({
    action: () => <p>It's root page.</p>,
  })
  .route("products");

export const productPageBuilder = docsRoutes._.products
  .attach(Rocon.Search("page"))
  .action(({page}) => <ProductComponent pageNum={Number(page)} />);

const topLevelRoutes = Rocon.Path()
  .exact({
    action: () => <TopPage />,
  })
  .route("docs", (p) => p.attach(docsRoutes));

export const Routes = () => {
  return useRoutes(topLevelRoutes);
};
