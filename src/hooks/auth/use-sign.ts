import { SignInSchemaType } from "@/src/schemas/sign-in";
import { createClient } from "@/src/utils/supabase/client";

const supabase = createClient();

export const useSignIn = async (formData: SignInSchemaType) => {
	const { data, error } = await supabase.auth.signInWithPassword(formData);

	if (error) throw error;

	return data;
};

export const useSignOut = async () => {
	const { error } = await supabase.auth.signOut();

	if (error) throw error;
};
