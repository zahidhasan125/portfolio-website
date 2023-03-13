import React from 'react';
import image from '../../assets/images/NewPassportSize.png';
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaCloudDownloadAlt } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div id='home' className='my-12 flex flex-col justify-center items-center'>
                <PhotoProvider>
                    <div className="avatar mb-4 cursor-pointer">
                        <div className="w-36 rounded-full ring ring-sky-800 ring-offset-base-100 ring-offset-2">
                            <PhotoView src={image}>
                                <img src={image} alt='' />
                            </PhotoView>
                        </div>
                    </div>
                </PhotoProvider>
                <div className='leading-loose text-center'>
                    <h3 className='text-4xl font-bold'> Hi I'm, Md. Zahid Hasan</h3>
                    <p className='flex flex-col md:flex-row items-center'>
                        <span className='flex items-center gap-1'>
                            <FiPhone />+88-01741-189110
                        </span>
                        <a href='mailto:zahidhasan125@gmail.com' className='flex items-center px-4 gap-1'>
                            <FiMail />zahidhasan125@gmail.com
                        </a>
                        <span className='flex items-center gap-1'>
                            <FiMapPin />Dhaka, Bangladesh
                        </span>
                    </p>
                    <h4 className='text-3xl my-4'>&lt;A Developer who loves to build cool things /&gt;</h4>
                    <h4 className='text-3xl'>&lt;MERN Stack Developer And Web Designer /&gt;</h4>
                </div>
                <div className='grid grid-cols-2 md:flex gap-4 mt-8'>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-16 h-16 border-2 rounded-md flex justify-center items-center'>
                        <a href='https://github.com/zahidhasan125'><FaGithub className='text-4xl' /></a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-16 h-16 border-2 rounded-md flex justify-center items-center'>
                        <a href='https://www.linkedin.com/in/zahid-hasan-skat/'><FaLinkedin className='text-4xl' /></a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-16 h-16 border-2 rounded-md flex justify-center items-center'>
                        <a href='https://www.facebook.com/imran.skat'><FaFacebook className='text-4xl' /></a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-16 h-16 border-2 rounded-md flex justify-center items-center'>
                        <a href='https://twitter.com/zahidhasan125'><FaTwitter className='text-4xl' /></a>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='h-16 border-2 rounded-md flex justify-center items-center px-2'>
                        <a href='https://drive.google.com/uc?export=download&id=1MWdQ4Vu0S7QjyGT3dDx5eHhPf9Xf2Dvo' className='flex font-bold items-center'>RESUME<FaCloudDownloadAlt className='text-4xl pl-2' /></a>
                    </motion.div>
                </div>
            </div>
            <Skills />
            <Projects />
            <ContactMe />
        </div>
    );
};

export default Home;