import { Link, NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
  
    const navbar = <>
        <NavLink to='/' className='px-4 py-2'>Home</NavLink>
        <NavLink to='/listedBook' className='px-4 py-1'>Listed Book</NavLink>
        <NavLink to='/pagesToRead' className='px-4 py-1'>Pages To Read</NavLink>
        <NavLink to='/reviews' className='px-4 py-1'>Reviews</NavLink>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <Link className="text-2xl font-bold">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold gap-5">
                    {navbar}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <a className="btn bg-green-500  text-white">Sign in</a>
                <a className="btn btn-accent">Sign up</a>
            </div>
        </div>
    );
};

export default Header;