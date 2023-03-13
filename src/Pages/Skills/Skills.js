import React from 'react';
import { motion } from 'framer-motion'
import { SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress, SiGithub, SiVisualstudiocode, SiNextdotjs, SiTypescript } from 'react-icons/si'

const Skills = () => {
    return (
        <div id='skills' className='my-20 max-w-screen-xl mx-auto'>
            <h2 className='text-5xl text-white bg-sky-800 py-1 px-2 inline-block rounded-lg'>&lt;skills&gt;</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center my-8'>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='flex justify-center items-center flex-col'><SiHtml5 className='text-6xl border border-black w-32 h-32 p-2 rounded-lg text-orange-600' /><span>HTML</span></motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='flex justify-center items-center flex-col'><SiCss3 className='text-6xl border border-black w-32 h-32 p-2 rounded-lg text-blue-600' /><span>CSS</span></motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='flex justify-center items-center flex-col'><SiTailwindcss className='text-6xl border border-black w-32 h-32 p-2 rounded-lg text-blue-800' /><span>Tailwind</span></motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='flex justify-center items-center flex-col'><SiBootstrap className='text-6xl border border-black w-32 h-32 p-2 rounded-lg text-purple-700' /><span>BootStrap</span></motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='flex justify-center items-center flex-col'><SiJavascript className='text-6xl border border-black w-32 h-32 p-2 rounded-lg text-yellow-500' /><span>JavaScript</span></motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='flex justify-center items-center flex-col'><SiReact className='text-6xl border border-black w-32 h-32 p-2 rounded-lg text-blue-600' /><span>React.js</span></motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='flex justify-center items-center flex-col'><SiNodedotjs className='text-6xl border border-black w-32 h-32 p-2 rounded-lg text-green-800' /><span>Node.js</span></motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='flex justify-center items-center flex-col'><SiMongodb className='text-6xl border border-black w-32 h-32 p-2 rounded-lg text-green-600' /><span>MongoDB</span></motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='flex justify-center items-center flex-col'><SiExpress className='text-6xl border border-black w-32 h-32 p-2 rounded-lg' /><span>Express.js</span></motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='flex justify-center items-center flex-col'><SiGithub className='text-6xl border border-black w-32 h-32 p-2 rounded-lg' /><span>Github</span></motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='flex justify-center items-center flex-col'><SiVisualstudiocode className='text-6xl border border-black w-32 h-32 p-2 rounded-lg text-blue-600' /><span>VS Code</span></motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='flex justify-center items-center flex-col'><SiNextdotjs className='text-6xl border border-black w-32 h-32 p-2 rounded-lg text-slate-900' /><span>Next.js</span></motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='flex justify-center items-center flex-col'><SiTypescript className='text-6xl border border-black w-32 h-32 p-2 rounded-lg text-sky-700' /><span>TypeScript</span></motion.div>
            </div>
            {/* <h2 className='text-5xl text-white bg-sky-800 py-1 px-2 inline-block rounded-lg'>&lt;/skills&gt;</h2> */}
        </div>
    );
};

export default Skills;