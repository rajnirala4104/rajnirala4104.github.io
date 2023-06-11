import './App.css';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, WhoAmI, MoreAboutMe, Education, Expertise, Contact, Projects, NoPage } from './pages/index'
import NavBar from './shared/NavBar';

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
      path: '/**',
      element: <NoPage />
    }
  ])

  return (
    // <Routes>
    //   <Route exact path="/" Component={Home} />
    //   <Route exact path="/**" Component={NoPage} />
    //   <Route exact path="/whoami" Component={WhoAmI} />
    //   <Route exact path="/moreaboutme" Component={MoreAboutMe} />
    //   <Route exact path="/education" Component={Education} />
    //   <Route exact path="/expertise" Component={Expertise} />
    //   <Route exact path="/projects" Component={Projects} />
    //   <Route exact path="/contact" Component={Contact} />
    // </Routes>
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
