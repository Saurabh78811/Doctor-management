import React from 'react'
import Logo from './assets/logo.png'


const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <img
          src={Logo}
          alt="Logo"
          className="w-32 h-32 mx-auto mb-6 animate-bounce"
        />
        <h1 className="text-2xl font-semibold">
          This page is under development
        </h1>
      </div>
    </div>
  )
}

export default App