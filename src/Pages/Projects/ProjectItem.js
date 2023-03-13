import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const ProjectItem = ({ project }) => {
    const {id, name, about, img } = project;
    return (
        <motion.div className="card card-compact bg-base-100 shadow-xl" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <figure><img className='max-h-36' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-3xl font-bold text-center">{name}</h2>
                <p>{about}</p>
                <div className="card-actions justify-center">
                    <Link to={`/project/${id}`} className="btn bg-sky-800 border-none">Project Details</Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectItem;