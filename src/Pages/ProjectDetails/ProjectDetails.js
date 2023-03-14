import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ProjectDetails = () => {
    const projectsData = useLoaderData();
    const location = useLocation()
    const projectId = parseInt(location.pathname.split('/')[2])
    const selectedProject = projectsData?.find(project => project.id === projectId);
    const { name, img, about, details, screenshots, live, code } = selectedProject;

    return (
        <div className='mb-12'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{name}</h1>
                        <p className="mb-5">{about}</p>
                        <div className="card-actions justify-center">
                            <a href={live} className="btn bg-sky-800 btn-md">Live Demo</a>
                            <a href={code?.client} className="btn bg-sky-800 btn-md">Client Code</a>
                            {code?.server &&
                                <a href={code?.server} className="btn bg-sky-800 btn-md">Server Code</a>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='text-3xl lg:text-4xl text-center py-12'>Screenshots</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                    screenshots.map((image, idx) => <div key={idx} className="card w-96 glass cursor-pointer">
                        <PhotoProvider>
                            <PhotoView src={image}>
                                <figure><img src={image} alt="car!" /></figure>
                            </PhotoView>
                        </PhotoProvider>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ProjectDetails;