import React from 'react'
import { AppContent, AppSidebar } from '../components/index'
import { AppFooter } from '../components/footer/index'
import { AppHeader } from '../components/header/index'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
