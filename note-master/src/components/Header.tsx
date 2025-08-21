import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8>
            <Link href="/">
                <Image 
                src="/NoteMaster-logo.png" 
                height={60} 
                width={60} 
                alt="logo" 
                className="rounded-full" 
                priority
                />
            </Link>
        </header>
    );
};

export default Header;