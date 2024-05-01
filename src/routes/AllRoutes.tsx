import { createBrowserRouter } from 'react-router-dom'

import LandingPage from '../pages/LandingPage'
import WebLayout from '../layout/WebLayout'


const Index= createBrowserRouter ([
    {
        path: "/",
        element: <WebLayout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path: '/about',
                element: <LandingPage/>
            }
        ]
    }
])

export default Index
