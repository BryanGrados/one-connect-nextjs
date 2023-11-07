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

	console.log(user);

	return (
		<div>
			<h1>Profile</h1>
			<p>{user.name}</p>
			<img src={user.user_avatar} alt={user.name} />
		</div>
	);
};

export default UserProfile;
