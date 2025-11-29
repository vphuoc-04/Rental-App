import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from "@/contexts/ThemeContext"

import './App.css'
import './index.css'

// Layouts
import Layout from './components/Layout'

// Modules
import Login from './modules/Login'
import Dashboard from './modules/Dashboard'

const router = createBrowserRouter([
    {
        path: '/admin/login',
        element: <Login />
    },
    {
        path: '/admin',
        element: <Layout />,
        children: [
            {
                path: 'bao-cao',
                element: <Dashboard />
            },
            {
            },
        ]
    }
])

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
            <ThemeProvider>
                <RouterProvider router={router} />
            </ThemeProvider>
    </React.StrictMode>,
)
