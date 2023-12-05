import React from 'react'
import { Link } from 'react-router-dom'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <div className="container-main">

        <footer className="footer-upper p-4 m-2 ">

          <div className="row mx-5 align-items-center ">
            <div className="col-6 d-flex gap-15">
              <img src="/images/newsletter.png" alt="send" />
              <h2 className='text-white'>Sign Up for Newsletter</h2>
            </div>
            <div className="col-6">
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                <span className="input-group-text text-white bg-transparent" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>

        </footer>
        <footer className="footer-middle my-4">
          <div className="row mx-5 ">
            <div className="col-3">
              <div className='mx-4'>
                <h3>Contact Us</h3>
                <address className='mt-3'>Hno : 277 Near
                  <br></br> Vill chopal,
                  Sonipat, Haryana <br />
                  PinCode: 131103</address>
                <a href="tel:+91 8264954234">+91 8264954234
                </a>
                <a href="mailto:mildredy114@gmail.com">mildredy114@gmail.com</a>
              </div>
              <div className='social-links d-flex gap-10 m-4 fs-5  align-items-center'>
                <a href=""><BsLinkedin/></a>
                <a href=""><BsInstagram/></a>
                <a href=""><BsGithub/></a>
                <a href=""><BsYoutube/></a>
              </div>
            </div>
            <div className="col-3">
              <h3>Information</h3>
              <div className='footer-links'>
                <Link>Privacy Policy</Link>
                <Link>Refund Policy</Link>
                <Link>Shipping Policy</Link>
                <Link>Terms & Conditions</Link>
                <Link>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h3>Account</h3>
              <div className='footer-links'>
                <Link>About Us</Link>
                <Link>Faq</Link>
                <Link>Contact</Link>
              </div>
            </div>
            <div className="col-3">
              <h3>Quick Links
              </h3>
              <div className='footer-links'>
                <Link>Laptop</Link>
                <Link>HeadPhone</Link>
                <Link>Tablets</Link>
                <Link>Watch</Link>
              </div>
            </div>
          </div>
        </footer>
        <footer className="foorter-bottom text-white align-items-center m-3 p-2">
          <div className='m-2 p-2 d-flex justify-content-center'>
            <p>&copy; {new Date().getFullYear()} Powered by Developer's Corner</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
