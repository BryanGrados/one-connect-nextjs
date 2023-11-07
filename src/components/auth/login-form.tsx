"use client";

import { useSignIn } from "@/src/hooks/auth/use-sign";
import { useSignFormResolver } from "@/src/hooks/resolvers/login-resolver";
import { SignInSchemaType } from "@/src/schemas/sign-in";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const LoginForm = () => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const { handleSubmit, register, errors } = useSignFormResolver();

	const onSubmit: SubmitHandler<SignInSchemaType> = async (formData) => {
		setLoading(true);
		toast.promise(useSignIn(formData), {
			loading: "Iniciando sesión...",
			success: ({ user }) => {
				setLoading(false);
				router.push(`/profile/${user.id}`);
				router.refresh();
				return "Sesión iniciada correctamente";
			},
			error: (err) => {
				setLoading(false);
				return "Error al iniciar sesión";
			},
		});
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col items-center justify-center gap-5"
		>
			<Input
				type="text"
				labelPlacement="outside"
				label="Email"
				errorMessage={errors.email?.message}
				{...register("email")}
			/>
			<Input
				type="password"
				labelPlacement="outside"
				label="Contraseña"
				errorMessage={errors.password?.message}
				{...register("password")}
			/>
			<Button type="submit" color="primary" className="mt-5" isLoading={loading}>
				Iniciar sesión
			</Button>
		</form>
	);
};

export default LoginForm;
