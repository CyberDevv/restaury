import React from "react"

const Footer = () => {
  return (
    <footer className="uppercase text-xs text-gray-400 text-center tracking-widest px-10 py-8">
      © {new Date().getFullYear()}, Restaury. All rights reserved. Built by
          CyberDevv
          <ul className= "flex space-x-6 mt-8 justify-center">
              <li><a className= "socialLinks" href= "https://twitter.com">Twitter</a></li>
              <li><a className= "socialLinks" href= "https://instagram.com">Instagram</a></li>
              <li><a className= "socialLinks" href= "https://facebook.com">Facebook</a></li>
              <li><a className= "socialLinks" href= "https://gmail.com">Mail</a></li>
            <li><a className= "socialLinks" href= "https://portfolio.com">Portfolio</a></li>
          </ul>
    </footer>
  )
}

export default Footer
