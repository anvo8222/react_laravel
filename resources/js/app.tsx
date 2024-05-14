import React from 'react';
import { createRoot } from "react-dom/client";
import { RouterProvider,createBrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root")!);

const routes=[
    {
        path:'/',
        element: <div>Install laravel 11 + react</div>,
    }
]
root.render(
    <RouterProvider router={createBrowserRouter(routes)}/>
);
