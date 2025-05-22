import React from "react";
import Link from "next/link";
type NavBarProps = {};

const Navbar : React.FC<NavBarProps> = () => {
    return <div className="flex items-center justify-between sm:px-12 px-2 md:px-24"> 
        <Link href="/test" className="flex items-center justify-center h-20">
            <img src="/logo.png" alt="LeectClone image" className="h-full" />
        </Link>
        <div className="flex items center">
            <Link href="/test" className="flex items-center justify-center h-20">
            <button 
                className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange
                "
                >Sign In
            </button>
            </Link>
        </div>
    </div>
};

export default Navbar;