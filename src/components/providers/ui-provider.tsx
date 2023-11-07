"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";

const UIProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<NextUIProvider>
			<NextThemesProvider attribute="class" defaultTheme="dark">
				<Toaster />
				{children}
			</NextThemesProvider>
		</NextUIProvider>
	);
};

export default UIProvider;
