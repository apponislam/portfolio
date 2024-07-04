import { Link } from "react-router-dom";

const Navbar = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    const navlinks = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link onClick={() => scrollToSection("experiencesection")}>Experience</Link>
            </li>
            <li>
                <Link>Home</Link>
            </li>
            <li>
                <Link onClick={() => scrollToSection("contactus")}>Contact Us</Link>
            </li>
        </>
    );

    return (
        <div className="container mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navlinks}
                        </ul>
                    </div>
                    <Link to="/" className=" text-2xl font-bold">
                        Appon<span className="text-red-600 font-semibold">Islam</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navlinks}</ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn bg-[#00203f] hover:bg-[#00203f] text-white ">Download CV</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
