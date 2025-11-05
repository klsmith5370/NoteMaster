"use client"

import { useRouter } from "next/navigation";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useTransition } from "react";
import { Button } from "./ui/button";

type Props = {
    type: "login" | "signUp";
};

function AuthForm({type}: Props) {
    const isLoginForm = type === "login";
    const router = useRouter();
    // const { toast } = useToast();

    const [isPending, startTransaction] = useTransition();

    const handleSubmit = (FormData: FormData) => {
        console.log("form submitted")
    }

    return <form action={handleSubmit}>
        <CardContent className="grid w-full items-center gap-4">
            <div className= "flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                
                <Input 
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
                required
                disabled={isPending}
                />
            </div>
            <div className= "flex flex-col space-y-1.5">
                <Label htmlFor="email">Password</Label>
                
                <Input 
                id="password"
                name="password"
                placeholder="Enter your password"
                type="password"
                required
                disabled={isPending}
                />
            </div>
        </CardContent>
        <CardFooter>
            <Button></Button>
        </CardFooter>
    </form>
}

export default AuthForm;