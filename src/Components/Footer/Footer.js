import React from 'react'

const Footer = () => {
  return (
    <div className="text-center p-2 bg-light border fixed-bottom">
      &copy; Sina Ghaffari / {new Date().getFullYear()}
    </div>
  )
}

export default Footer
