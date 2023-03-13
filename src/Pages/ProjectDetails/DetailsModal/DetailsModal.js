import React from 'react';

const DetailsModal = () => {
    return (
        <div>
            <input type="checkbox" id="project-details-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="project-details-modal" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;