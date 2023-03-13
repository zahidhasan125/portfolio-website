import React from 'react';
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai';
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content mt-6">
            <ul className='grid grid-cols-3 md:grid-cols-2 lg:grid-flow-col mx-auto'>
                <li className='btn'><Link to='/'>Home</Link></li>
                <li className='btn'><Link to='/about'>About Me</Link></li>
                <li className='btn'><Link to='/skills'>Skills</Link></li>
                <li className='btn'><Link to='/projects'>Projects</Link></li>
                <li className='btn'><Link to='/'>Experience</Link></li>
                <li className='btn'><Link to='/blog'>Blog</Link></li>
                <li className='btn'><Link to='/contact'>Contact Me</Link></li>
            </ul>
            <div className='mx-auto'>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/zahid-hasan-skat/"><BsLinkedin /></a>
                    <a href="https://github.com/zahidhasan125/"><AiFillGithub /></a>
                    <a href="https://www.facebook.com/imran.skat"><AiFillFacebook /></a>
                    <a href="https://twitter.com/zahidhasan125"><BsTwitter /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;