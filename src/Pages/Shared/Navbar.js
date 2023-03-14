import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const userTheme = localStorage.getItem("theme")
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const [isDark, setIsDark] = useState(userTheme);
    const themeCheck = () => {
        if (userTheme === "dark" || (!userTheme && systemTheme)) {
            document.documentElement.classList.add("dark");
            return;
        }
    }

    const themeSwitch = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
            return;
        }
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }

    const handleDarkMode = () => {
        setIsDark(!isDark)
        console.log(isDark);
        themeSwitch();
    }
    themeCheck();

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About Me</Link></li>
        <li><Link to='/skills'>Skills</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/'>Experience</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact Me</Link></li>
        {/* <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text text-white pr-2">Dark</span>
                <input onClick={handleDarkMode} type="checkbox" className="toggle toggle-sm" defaultChecked={isDark==='dark' ? 'false' : 'true'} />
            </label>
        </div> */}
    </>
    return (
        <div className="navbar bg-sky-800 text-white justify-between sticky top-0 z-40">
            <div className="navbar-start w-full justify-between">
                <Link to='/' className="btn btn-ghost normal-case text-xl">MD. ZAHID HASAN</Link>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-sky-800 rounded-box w-52 font-bold">
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