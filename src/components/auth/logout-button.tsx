"use client";

import { useSignOut } from "@/src/hooks/auth/use-sign";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const LogOutButton = () => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleLogOut = async () => {
		setLoading(true);

		toast.promise(useSignOut, {
			loading: "Cerrando sesión...",
			success: () => {
				setLoading(false);
				router.push("/login");
				router.refresh();
				return "Sesión cerrada correctamente";
			},
			error: (err) => {
				setLoading(false);
				return "Error al cerrar sesión";
			},
		});
	};

	return (
		<Button onClick={handleLogOut} color="warning">
			Cerrar sesión
		</Button>
	);
};

export default LogOutButton;
