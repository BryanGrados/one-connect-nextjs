import { createClient } from "@/src/utils/supabase/server";
import { Button } from "@nextui-org/react";
import { cookies } from "next/headers";

const LoginPage = async () => {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	return <Button>LoginPage</Button>;
};

export default LoginPage;
