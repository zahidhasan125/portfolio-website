import React from 'react';
import image from '../../assets/images/NewPassportSize.png';
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin , FaCloudDownloadAlt } from 'react-icons/fa';
import { motion } from "framer-motion"

const Home = () => {
    return (
        <div className='mt-24 flex flex-col justify-center items-center'>
            <div className="avatar mb-4">
                <div className="w-36 rounded-full ring ring-sky-600 ring-offset-base-100 ring-offset-2">
                    <img src={image} alt='' />
                </div>
            </div>
            <div className='leading-loose text-center'>
                <h3 className='text-4xl font-bold'> Hi I'm, Md. Zahid Hasan</h3>
                <h4 className='text-3xl my-4'>&lt;A Developer who loves to build cool things /&gt;</h4>
                <h4 className='text-3xl'>&lt;MERN Stack Developer And Web Designer /&gt;</h4>
            </div>
            <div className='grid grid-cols-2 md:flex gap-4 mt-8'>
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className='w-16 h-16 border-2 rounded-md flex justify-center items-center'>
                    <a href='https://github.com/zahidhasan125'><FaGithub className='text-4xl' /></a>
                </motion.div>
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className='w-16 h-16 border-2 rounded-md flex justify-center items-center'>
                    <a href='https://www.linkedin.com/in/zahid-hasan-skat/'><FaLinkedin className='text-4xl' /></a>
                </motion.div>
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className='w-16 h-16 border-2 rounded-md flex justify-center items-center'>
                    <a href='https://www.facebook.com/imran.skat'><FaFacebook className='text-4xl' /></a>
                </motion.div>
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className='w-16 h-16 border-2 rounded-md flex justify-center items-center'>
                    <a href='https://twitter.com/zahidhasan125'><FaTwitter className='text-4xl' /></a>
                </motion.div>
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className='h-16 border-2 rounded-md flex justify-center items-center px-2'>
                    <a href='https://drive.google.com/file/d/1MWdQ4Vu0S7QjyGT3dDx5eHhPf9Xf2Dvo/view?usp=sharing' className='flex font-bold items-center'>RESUME<FaCloudDownloadAlt className='text-4xl pl-2' /></a>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;