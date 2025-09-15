import Image from "next/image";
import Link from "next/link";
import { shadow } from "@/styles/utils";
import { Button } from "@/components/ui/button";
import DarkModeToggle from "./DarkModeToggle";


function Header() {
    const user = null;

    return (
        <header className="relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8"
        style={{ boxShadow: shadow }}
        >
            <Link className="flex items-end gap-2" href="/">
                <Image 
                src="/NoteMaster-logo.png" 
                height={60} 
                width={60} 
                alt="logo" 
                className="rounded-full" 
                priority
                />
                <h1 className="flex flex-col pb-1 text-2xl font-semibold loading-6">
                    <span>NoteMaster</span>
                </h1>
            </Link>

            <div className="flex gap-4">
                {user ? (
                    "Logout"
                ) : (
                    <>
                        <Button asChild className="hidden sm:block">
                            <Link href="/login">Login</Link>
                        </Button>

                        <Button asChild variant="outline">
                            <Link href="/sign-up">Sign Up</Link>
                        </Button>
                    </>
                )}
                <DarkModeToggle />
            </div>
        </header>
    );
};

export default Header;