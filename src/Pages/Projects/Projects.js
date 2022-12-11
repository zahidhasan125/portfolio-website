import React from 'react';
import { motion } from 'framer-motion'
import projectImg1 from '../../assets/images/projects/buy-sell.png';
import projectImg2 from '../../assets/images/projects/php-dev.png';
import projectImg3 from '../../assets/images/projects/fit-with-me.png';
import projectImg4 from '../../assets/images/projects/quiz-crackers.png';
import projectImg5 from '../../assets/images/projects/portfolio.png';

const Projects = () => {
    return (
        <div id='projects' className='my-20'>
            <h2 className='text-5xl text-white bg-sky-600 py-1 px-2 inline-block rounded-lg'>&lt;projects&gt;</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center my-8'>
                <motion.div className="card card-compact bg-base-100 shadow-xl" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <figure><img className='max-h-36' src={projectImg1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center">Power Tools Buy Sell</h2>
                        <p>A reselling app for used products, Admin, seller & buyer have dashboard of different authorization.</p>
                        <div className="card-actions justify-center">
                            <a href='https://my-power-tools-buy-sell.web.app' className="btn bg-sky-600 btn-sm">Live Demo</a>
                            <a href='https://github.com/zahidhasan125/a12-power-tools-buy-sell-client' className="btn bg-sky-600 btn-sm">Client Code</a>
                            <a href='https://github.com/zahidhasan125/a12-power-tools-buy-sell-server' className="btn bg-sky-600 btn-sm">Server Code</a>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="card card-compact bg-base-100 shadow-xl" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <figure><img className='max-h-36' src={projectImg2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center">PHP-DEV</h2>
                        <p>A learning app, user login, registration, email verification & password reset integrated with firebase.</p>
                        <div className="card-actions justify-center">
                            <a href='https://php-dev-auth.web.app' className="btn bg-sky-600 btn-sm">Live Demo</a>
                            <a href='https://github.com/zahidhasan125/php-dev-learning-platform-client' className="btn bg-sky-600 btn-sm">Client Code</a>
                            <a href='https://github.com/zahidhasan125/php-dev-learning-platform-server' className="btn bg-sky-600 btn-sm">Server Code</a>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="card card-compact bg-base-100 shadow-xl" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <figure><img className='max-h-36' src={projectImg3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center">FIT WITH ME</h2>
                        <p>A service review app. Responsive on mobile & desktop devices, Real user can post review on services. User login, registration, email verification & password reset integrated with firebase. Reviews can be update or delete by the user from Database.</p>
                        <div className="card-actions justify-center">
                            <a href='https://service-review-auth.web.app' className="btn bg-sky-600 btn-sm">Live Demo</a>
                            <a href='https://github.com/zahidhasan125/fit-with-me-service-review-client' className="btn bg-sky-600 btn-sm">Client Code</a>
                            <a href='https://github.com/zahidhasan125/fit-with-me-service-review-server' className="btn bg-sky-600 btn-sm">Server Code</a>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="card card-compact bg-base-100 shadow-xl" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <figure><img className='max-h-36' src={projectImg4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center">Quiz Crackers</h2>
                        <p>Apps to take a test or quiz on coding. Flowbite components used for creating the UI.Context API used, React hot toast used for showing if the result is right or wrong. Responsive UI for mobile, tablet & desktop devices.</p>
                        <div className="card-actions justify-center">
                            <a href='https://symphonious-bombolone-7c47ee.netlify.app/' className="btn bg-sky-600 btn-sm">Live Demo</a>
                            <a href='https://github.com/zahidhasan125/quiz-crackers-assignment' className="btn bg-sky-600 btn-sm">Code</a>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="card card-compact bg-base-100 shadow-xl" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <figure><img className='max-h-36' src={projectImg5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center">My Portfolio</h2>
                        <p>This is created with react, daisyUi, tailwindCss and for the first time I used Framer motion. It was really fun. </p>
                        <div className="card-actions justify-center">
                            <a href='https://mdzahidhasan-portfolio.web.app' className="btn bg-sky-600 btn-sm">Live Demo</a>
                            <a href='https://github.com/zahidhasan125/portfolio-website' className="btn bg-sky-600 btn-sm">Code</a>
                        </div>
                    </div>
                </motion.div>

            </div>
            <h2 className='text-5xl text-white bg-sky-600 py-1 px-2 inline-block rounded-lg'>&lt;/projects&gt;</h2>
        </div>
    );
};

export default Projects;