import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
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
                path: '/skills',
                element: <Skills />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/contact',
                element: <ContactMe />
            }
        ]
    }
])
