import LogOutButton from "@/src/components/auth/logout-button";
import { createClient } from "@/src/utils/supabase/server";
import { cookies } from "next/headers";

const UserProfile = async ({ params }: { params: { id: string } }) => {
	const cookiesStore = cookies();
	const supabase = createClient(cookiesStore);

	const { data: user, error } = await supabase
		.from("profiles")
		.select("*")
		.eq("id", params.id)
		.single();

	return (
		<div>
			<h1>Profile</h1>
			<p>{user.name}</p>
			<img src={user.user_avatar} alt={user.name} />
			<LogOutButton />
		</div>
	);
};

export default UserProfile;
