import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';
import fishylogoblue from '../images/fishylogoblue.png';

function Footer() {
    return (
        <div className = 'footer-container'>
             <div className="footer-links">
                {/*Short paragraph about our team */}
                <div className= 'footer-link-items'>
                    <h2>About us</h2> 
                    <p>We are a student project from the Aristotle University of
                    Greece. Our mission is to spread awareness on overfishing and its 
                    impact on the environment. </p>
                </div>
                <div className= 'footer-link-items'>
                    {/*A map to all the pages on our website*/}
                    <h2>Sitemap</h2>
                    <div className= 'footer-button-wrap'>
                        <div className= 'footer-buttons'>
                            <Link to='/'>
                                <Button
                                    className='btns'
                                    buttoonStyle='btn--outline'
                                    buttonSize='btn--medium'>Home 
                                </Button>
                            </Link>
                            <Link to='/causes'>
                                <Button
                                    className='btns'
                                    buttoonStyle='btn--outline'
                                    buttonSize='btn--medium'>Causes
                                </Button>
                            </Link>
                            <Link to='/effects'>
                                <Button
                                    className='btns'
                                    buttoonStyle='btn--outline'
                                    buttonSize='btn--medium'>Effects
                                </Button>
                            </Link>
                            <Link to='/solutions'>
                                <Button
                                    className='btns'
                                    buttoonStyle='btn--outline'
                                    buttonSize='btn--medium'>Solutions
                                </Button>
                            </Link>
                            
                        </div>
                    </div>
                       
                </div>
                {/*this second class of buttons is so they show up in two columns */}
                <div className= 'footer-link-items'>
                    {/*blank header so the buttons align */}
                    <h1>­</h1>
                    <div className= 'footer-buttons'>
                        <Link to='/fish-index'>
                            <Button
                                className='btns'
                                buttoonStyle='btn--outline'
                                buttonSize='btn--medium'>Fish-Index
                            </Button>
                        </Link>
                        <Link to='/contact-form'>
                            <Button
                                className='btns'
                                buttoonStyle='btn--outline'
                                buttonSize='btn--medium'>Contact Form
                            </Button>
                        </Link>
                        <Link to='/about-us'>
                            <Button
                                className='btns'
                                buttoonStyle='btn--outline'
                                buttonSize='btn--medium'>About us
                            </Button>
                        </Link>
                        <Link to='/sign-up'>
                            <Button
                                className='btns'
                                buttoonStyle='btn--outline'
                                buttonSize='btn--medium'>Sign up
                            </Button>
                        </Link>
                    </div>         
                </div>
                {/*Subscription to the websites newsletter*/}
                <div className= 'footer-sub'>
                        <h2 className='footer-sub-heading'>
                            Join our Newsletter
                        </h2>
                        <div className='sub-input'>
                            <form>
                                {/*this is so if the user presses enter it automatically stores their email in the database */}
                                <input 
                                    type='email'
                                    name='email'
                                    placeholder='Your Email'
                                    className='footer-input'
                                />
                                <div className= 'footer-buttons'>
                                    <Button
                                        className='btns'
                                        buttoonStyle='btn--outline'
                                        buttonSize='btn--medium'>Subscribe
                                    </Button>
                                </div>
                            </form>
                        </div>
                </div>
                <div className= 'footer-link-items'>
                    {/*contact information links */}
                    <h2>Contact us</h2>
                    <a href='https://goo.gl/maps/Gweuqs6mKni2UHod8'>Address: Aristotle University Faculty of Sciences</a>
                    <a href='mailto: fishyproject.auth@gmail.com'>Email: fishyproject.auth@gmail.com</a>
                    <Link to='/contact-form'>Contact Form</Link>
                </div>        
            </div>
            {/*logo, copyright, and social media icons */}
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                            <img
                                src={fishylogoblue}
                                alt="logo"
                                style={{
                                  width: 80,
                                  height: 60,
                                  borderRadius: 40 / 2,
                                  marginLeft: 15
                                }}
                             />
                    </div>
                    <small class='website-rights'>FISHY © 2021</small>
                    <div class='social-icons'>
                        <a
                            class='social-icon-link facebook'
                            href='https://www.facebook.com/FishyProjectAuth'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </a>
                        <a
                            class='social-icon-link instagram'
                            href='https://www.instagram.com/fishyproject.auth/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </a>
                        <a
                            class='social-icon-link twitter'
                            href='https://twitter.com/project_fishy'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </a>   
                    </div>
                </div>
            </section>



        </div>
    )
}

export default Footer;

