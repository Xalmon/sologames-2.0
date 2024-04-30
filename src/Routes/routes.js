import React from 'react';
import Layout from "../Layout/Layout";
import Games from "../Pages/Games/games"


export const ROUTES = [
    {
        path: "/",
        element: <Layout />,
        children: [
            // {
            //     path: "/",
            //     element: <Home/>
            // },
            {
                path: "/",
                element: <Games/>
            },
 
        ]
    },
]