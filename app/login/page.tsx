import LoginForm from "@/src/components/auth/login-form";
import { createClient } from "@/src/utils/supabase/server";
import { cookies } from "next/headers";

const LoginPage = async () => {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	return (
		<div className="flex flex-col items-center justify-center h-screen gap-5">
			<h1 className="text-4xl font-bold">Iniciar sesión</h1>
			<LoginForm />
		</div>
	);
};

export default LoginPage;
