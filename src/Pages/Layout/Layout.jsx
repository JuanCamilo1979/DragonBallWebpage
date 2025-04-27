import React from 'react'
import Nav from '../../Components/Nav/Nav'
import { Outlet } from 'react-router-dom'
import './Layout.css';

const Layout = () => {
    return (
        <>
            <Nav />
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout