"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

function LogoutButton() {
    const [loading, setLoading] = useState(false);

    const handleLogOut = () => {
        console.log("Logging out...");
    };

    return (
        <Button className="w-24" variant="outline" onClick={handleLogOut}>
            {loading ? <Loader2 className="animate-spin" /> : "Logout"}
        </Button>
    );
}

export default LogoutButton;