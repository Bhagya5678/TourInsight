import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark-blue p-6 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Material Tailwind</h2>
          <p className="text-sm">© 2024 Material Tailwind. All Rights Reserved.</p>
        </div>

        <div className="flex space-x-10">
          <div>
            <h3 className="font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Tutorials</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>News</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Resource</h3>
            <ul className="space-y-2 text-sm">
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Events</li>
              <li>Help center</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Follow us</h3>
            <div className="flex space-x-4">
              <a href="#">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#">
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer