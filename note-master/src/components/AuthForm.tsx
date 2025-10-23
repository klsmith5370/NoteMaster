"use client"

import { useRouter } from "next/navigation";
import { CardContent } from "./ui/card";

type Props = {
    type: "login" | "signUp";
};

function AuthForm({type}: Props) {
    const isLoginForm = type === "login";
    const router = useRouter();
    // const { toast } = useToast();

    const handleSubmit = (FormData: FormData) => {
        console.log("form submitted")
    }

    return <form action={handleSubmit}>
        <CardContent>
            <div>
                
            </div>
        </CardContent>
    </form>
}

export default AuthForm;