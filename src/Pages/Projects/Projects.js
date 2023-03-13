import React, { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem';

const Projects = () => {
    const [projectsData, setProjectsData] = useState([])

    useEffect(() => {
        fetch('projectData.json')
            .then(res => res.json())
            .then(data => setProjectsData(data))
    }, [])
    return (
        <div id='projects' className='my-20 max-w-screen-xl mx-auto'>
            <h2 className='text-5xl text-white bg-sky-800 py-1 px-2 inline-block rounded-lg'>&lt;projects&gt;</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center my-8'>
                {
                    projectsData.map(project=><ProjectItem key={project.id} project={project} />)
                }
            </div>
            {/* <h2 className='text-5xl text-white bg-sky-800 py-1 px-2 inline-block rounded-lg'>&lt;/projects&gt;</h2> */}
        </div>
    );
};

export default Projects;