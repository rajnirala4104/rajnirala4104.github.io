import './App.css';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, WhoAmI, MoreAboutMe, Education, Expertise, Contact, Projects, NoPage } from './pages/index'
import NavBar from './shared/components/NavBar';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/whoami',
      element: <WhoAmI />
    },
    {
      path: '/moreaboutme',
      element: <MoreAboutMe />
    },
    {
      path: '/education',
      element: <Education />
    },
    {
      path: '/expertise',
      element: <Expertise />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/projects',
      element: <Projects />
    },
    {
      path: '/*',
      element: <NoPage />
    }
  ])

  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
