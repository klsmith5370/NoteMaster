"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function LogoutButton() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogOut = async () => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const errorMessage = null;

        if (!errorMessage) {
            toast.success("Logged out", {
                description: "You've been logged out",
                // variant: "success",

            });
            router.push("/");
        } else (
            toast.message({
                description: errorMessage,
            })
        )

        setLoading(false);
        console.log("Logging out...");
    };

    return (
        <Button 
        className="w-24" 
        variant="outline" 
        onClick={handleLogOut}
        disabled={loading}
        >
            {loading ? <Loader2 className="animate-spin" /> : "Logout"}
        </Button>
    );
}

export default LogoutButton;