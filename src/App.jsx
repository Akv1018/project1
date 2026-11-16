import ReactDOM from 'react-dom/client';
import AppLayout from './components/AppLayout';
import Body from './components/Body';
import './index.css';
import About from './components/About'; 
import{createBrowserRouter,RouterProvider} from 'react-router-dom';

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
  {
    path: "about",
    element: <About />,
  },
  { 
    index: true,
    element: <Body />,
  },
  {
    path: "contact",
    element: <h1>Contact Us</h1>
  }]
}
]);

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />);