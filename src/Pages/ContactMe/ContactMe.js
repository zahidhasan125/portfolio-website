import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

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
        <div id='contact' className="hero max-w-screen-md mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 border-t">
                    <h3 className='text-3xl lg:text-4xl text-center pt-4'>Feel Free to Contact With Me</h3>
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
                            <textarea name='message' className="textarea textarea-bordered h-28" placeholder="Your message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-sky-800" type='submit'>Send<AiOutlineSend className='text-lg ml-2' /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;