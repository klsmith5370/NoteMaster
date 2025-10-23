"use client"

import { useRouter } from "next/navigation";

type Props = {
    type: "login" | "signUp";
};

function AuthForm({type}: Props) {
    const isLoginForm = type === "login";
    const router = useRouter();
    // const { toast } = useToast();

    return <div></div>
}

export default AuthForm;