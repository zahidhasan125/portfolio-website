import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/animation/40238-happy-coding.gif';

const AboutMe = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col justify-around lg:flex-row-reverse">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='w-1/2 text-center'>
                    <h1 className="text-5xl font-bold">Hi I'm ZAHID</h1>
                    <p className="py-6"> I’m a passionate and dedicated web developer. Looking to join an organization where I can utilize my skills in web development. I am a fast-building developer who works well in a team. I am really interested in cybersecurity and high-level technologies. I have very good visual thinking skills also a very organized developer. I have worked with real clients in real-time directly speaking to them and getting the work done as per requirement. Overall my development skills and my personality are very stable. I can code very efficiently and I like to bring creativity to my work. I want to be an expert programmer with various kinds of skills and hope to join one of the leading tech companies.</p>
                    <Link to='/contact'><button className="btn bg-sky-800">Hire Me</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;