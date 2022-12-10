import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/skills'>Skills</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/'>Experience</Link></li>
        <li><Link to='/contact'>Contact Me</Link></li>
    </>
    return (
        <div className="navbar bg-sky-600 rounded-lg text-white justify-between">
            <div className="navbar-start w-full justify-between">
                <a href='/' className="btn btn-ghost normal-case text-xl">Portfolio</a>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-sky-600 rounded-box w-52 font-bold">
                        {
                            menuItems
                        }
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    {
                        menuItems
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;