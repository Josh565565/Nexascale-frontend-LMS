import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Index from './pages/landing/Index';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Index />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
