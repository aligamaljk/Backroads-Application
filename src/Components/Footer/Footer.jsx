import "./Footer.scss"
import {  socialLinks } from '../../Data/Data'
import PageLinks from "../Content/PageLinks/PageLinks"
import SocialLink from "./SocialLink"
const Footer = () => {
  return (
    <section className=' footer'>
    <PageLinks parentClass='footer-links' itemClass='footer-link' />
    <ul className='footer-icons'>
      {socialLinks.map((link) => {
        return <SocialLink key={link.id} {...link} itemClass='footer-icon' />
      })}
    </ul>
    <p className='copyright'>
      copyright &copy; Backroads travel tours company
      <span id='date'>{new Date().getFullYear()}</span>. all rights reserved
    </p>
  </section>
  )
}

export default Footer