import React from 'react';
import { motion } from 'framer-motion'
import { SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress, SiGithub, SiVisualstudiocode } from 'react-icons/si'

const Skills = () => {
    return (
        <div id='skills' className='my-20'>
            <h2 className='text-5xl text-white bg-sky-600 py-1 px-2 inline-block rounded-lg'>&lt;skills&gt;</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 text-center my-8'>
                <motion.div  whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className='flex justify-center'><SiHtml5 className='text-6xl border border-black w-32 h-32 p-2 rounded-lg hover:text-orange-600'  /></motion.div>
                <motion.div  whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className='flex justify-center'><SiCss3 className='text-6xl border border-black w-32 h-32 p-2 rounded-lg hover:text-blue-600'  /></motion.div>
                <motion.div  whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className='flex justify-center'><SiTailwindcss className='text-6xl border border-black w-32 h-32 p-2 rounded-lg hover:text-blue-800'  /></motion.div>
                <motion.div  whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className='flex justify-center'><SiBootstrap className='text-6xl border border-black w-32 h-32 p-2 rounded-lg hover:text-purple-700'  /></motion.div>
                <motion.div  whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className='flex justify-center'><SiJavascript className='text-6xl border border-black w-32 h-32 p-2 rounded-lg hover:text-yellow-500'  /></motion.div>
                <motion.div  whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className='flex justify-center hover:text-blue-600'><SiReact className='text-6xl border border-black w-32 h-32 p-2 rounded-lg'  /></motion.div>
                <motion.div  whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className='flex justify-center'><SiNodedotjs className='text-6xl border border-black w-32 h-32 p-2 rounded-lg hover:text-green-800'  /></motion.div>
                <motion.div  whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className='flex justify-center hover:text-green-600'><SiMongodb className='text-6xl border border-black w-32 h-32 p-2 rounded-lg'  /></motion.div>
                <motion.div  whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className='flex justify-center'><SiExpress className='text-6xl border border-black w-32 h-32 p-2 rounded-lg'  /></motion.div>
                <motion.div  whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className='flex justify-center'><SiGithub className='text-6xl border border-black w-32 h-32 p-2 rounded-lg'  /></motion.div>
                <motion.div  whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className='flex justify-center hover:text-blue-600'><SiVisualstudiocode className='text-6xl border border-black w-32 h-32 p-2 rounded-lg'  /></motion.div>
            </div>
            <h2 className='text-5xl text-white bg-sky-600 py-1 px-2 inline-block rounded-lg'>&lt;/skills&gt;</h2>
        </div>
    );
};

export default Skills;