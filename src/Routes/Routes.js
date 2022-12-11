import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import AboutMe from '../Pages/AboutMe/AboutMe';
import Blog from '../Pages/Blog/Blog';
import ContactMe from '../Pages/ContactMe/ContactMe';
import Home from '../Pages/Home/Home';
import Projects from '../Pages/Projects/Projects';
import Skills from '../Pages/Skills/Skills';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <AboutMe />
            },
            {
                path: '/skills',
                element: <Skills />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/contact',
                element: <ContactMe />
            }
        ]
    }
])
