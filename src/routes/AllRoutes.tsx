import { createBrowserRouter } from 'react-router-dom'

import Homepage from '../app/pages/Homepage'


const Index= createBrowserRouter ([
    {
        path: "/",
        element: <Homepage />,
        children: [

        ]
    }
])

export default Index
