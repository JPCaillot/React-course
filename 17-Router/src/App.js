import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import { createRoutesFromElements, Route } from 'react-router-dom';

import Homepage from './pages/Home';
import ProductsPage from './pages/Products';
import ErrorPage from './pages/Error';
import RootLayout from './pages/Root';
import ProductDetailPage from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/', //absolute path vs. relative (without beginning slash /)
    element: <RootLayout />,
    errorElement: <ErrorPage />, // this root '/' route will be the one to activate address errors
    children: [
      { index:true, element: <Homepage /> }, // alternative to path:''
      { path: 'products', element: <ProductsPage /> }, //every object = 1 route (part after the domain)
      { path: 'products/:productId', element: <ProductDetailPage /> }
      //this colon : signals react for a dynamic route
    ],
  },
]);

//ALTERNATIVE METHOD (OLDER)
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Homepage />} />
//     <Route path='/products' element={<ProductsPage />} />
//   </Route>
// );

// const altRouter = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
};

export default App;
