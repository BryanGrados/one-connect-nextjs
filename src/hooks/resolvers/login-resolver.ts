import { SignInSchemaType } from "@/src/schemas/sign-in";
import { useForm } from "react-hook-form";

export const useSignFormResolver = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInSchemaType>();

	return {
		register,
		handleSubmit,
		errors,
	};
};
