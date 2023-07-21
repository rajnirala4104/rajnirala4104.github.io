import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
   {
      path: "/",
      async lazy() {
         let { Root } = await import("../pages/Root");
         return { Component: Root };
      },
      children: [
         {
            path: "/",
            async lazy() {
               let { Home } = await import("../pages/Home");
               return { Component: Home };
            },
         },
         {
            path: "/whoami",
            async lazy() {
               let { WhoAmI } = await import("../pages/WhoAmI");
               return { Component: WhoAmI };
            },
         },
         {
            path: "/moreaboutme",
            async lazy() {
               let { MoreAboutMe } = await import("../pages/MoreAboutMe");
               return { Component: MoreAboutMe };
            },
         },
         {
            path: "/education",
            async lazy() {
               let { Education } = await import("../pages/Education");
               return { Component: Education };
            },
         },
         {
            path: "/expertise",
            async lazy() {
               let { Expertise } = await import("../pages/Expertise");
               return { Component: Expertise };
            },
         },
         {
            path: "/contact",
            async lazy() {
               let { Contact } = await import("../pages/Contact");
               return { Component: Contact };
            },
         },
         {
            path: "/projects",
            async lazy() {
               let { Projects } = await import("../pages/Projects");
               return { Component: Projects };
            },
         },
         {
            path: "/*",
            async lazy() {
               let { noPage } = await import("../pages/noPage");
               return { Component: noPage };
            },
         },
      ],
   },
]);
