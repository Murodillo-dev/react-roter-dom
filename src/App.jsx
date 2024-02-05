import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Mainlayout from "./Layout/Mainlayout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import ReactInfo from "./Pages/About/ReactInfo";
import TailwindcssInfo from "./Pages/About/TailwindcssInfo";
import Vanilla from "./Pages/About/VanillaInfo";
import TypeScriptInfo from "./Pages/About/TypeScriptInfo";
import VueInfo from "./Pages/About/VueInfo";
import Error from "./Pages/Error/Error";

const App = () => {
  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <Mainlayout />,
        children: [
          {
            path: '/',
            element: <Home />
          },
          {
            path: 'about',
            element: <About />,
            children: [
              {
                path: 'react',
                element: <ReactInfo />
              },
              {
                path: 'vanilla',
                element: <Vanilla />
              },
              {
                path: 'vue',
                element: <VueInfo />
              },
              {
                path: 'typescript',
                element: <TypeScriptInfo />
              },
              {
                path: 'tailwind',
                element: <TailwindcssInfo />
              },

            ]
          },
          {
            path: 'portfolio',
            element: <Portfolio />
          },
          {
            path: 'services',
            element: <Services />
          },
          {
            path: 'contact',
            element: <Contact />
          },
          {
            path: '*',
            element: <Error />
          }
        ]
      }
    ]
  );
  return <RouterProvider router={routes} />;
};

export default App;
