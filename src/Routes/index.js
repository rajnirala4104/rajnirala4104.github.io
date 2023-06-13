import { Home, WhoAmI, MoreAboutMe, Education, Expertise, Contact, Projects, NoPage, Root } from "../pages"
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([

    {
        path: '/',
        element: <Root />,
        children: [
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
        ]
    }
])
