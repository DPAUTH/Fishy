import React from 'react'
import {Button} from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className = 'footer-container'>
            <section className='footer-sub'>
                <p className='footer-sub-heading'>
                    Join our Newsletter
                </p>
                <div className='sub-input'>
                    <form>
                        <input
                            type='email'
                            name='email'
                            placeholder='Your Email'
                            className='footer-input'
                        />
                        <Button
                        buttonStyle='btn--outline'>Subscribe
                        </Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div classname='footer-link-wrapper'>
                    <h2>Contact us</h2>
                    <Link to='/'>Address</Link>
                    <h3>fishyproject.auth@gmail.com</h3>
                    <Link to='/'>Contact Form</Link>

                </div>
            </div>
        </div>
    )
}

export default Footer;

