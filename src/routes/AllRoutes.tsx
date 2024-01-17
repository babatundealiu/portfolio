import { createBrowserRouter } from 'react-router-dom'
// import App from '../../src/App'
import About from '../app/pages/About'
import Skills from '../app/pages/Skills'
import Portfolios from '../app/pages/Portfolios'
// import WebLayout from '../layout/WebLayout'
import Contact from '../app/pages/Contact'
import Homepage from '../app/pages/Homepage'
// import Homepage from '../app/pages/Homepage'


const Index= createBrowserRouter ([
    {
        path: "/",
        element: <Homepage />,
        children: [
            // {
            //     index: true, 
            //     element: <Homepage />
            // },
            // {
            //     path:"/home",
            //     element:<Homepage />
            // }, 
            // {
            //     path: "/about",
            //     element: <About />
            // },
            // {
            //     path: "/work",
            //     element: <Portfolios />
            // },
            // {
            //     path: "/skills",
            //     element: <Skills />
            // },
            // {
            //     path:'/contact',
            //     element: <Contact />
            // }
        ]
    }
])

export default Index
