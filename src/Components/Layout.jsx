import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import CursorFollower from './CursorFollower'
function Layout() {
  return (
    <main>
      <Header/>
      <CursorFollower/>
      <Outlet/>
    </main>
  )
}

export default Layout
