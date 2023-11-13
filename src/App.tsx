import './App.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePageView from './components/home_page/view/home_page_view'
import { ProjectsPageView } from './components/projects/view/projects_page_view';
import { RootLayout } from './components/root/root_layout';
import ErrorView from './components/root/error_view';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorView />,
    children: [
      { path: '/', element: <HomePageView /> },
      { path: '/projects', element: <ProjectsPageView /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
