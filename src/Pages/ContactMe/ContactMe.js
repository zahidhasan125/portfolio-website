import React from 'react';

const ContactMe = () => {
    // const handleSubmit = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const message = form.message.value;
    //     console.log(name, email, message);
    //     toast.success('Thanks for contacting with me!')
    // }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form action="https://formsubmit.co/ec800897fbc462f27d271361f47927eb" method="POST" className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Your Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea name='message' className="textarea textarea-bordered" placeholder="Your message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-sky-600" type='submit'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;