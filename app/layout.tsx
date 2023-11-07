import UIProvider from "@/src/components/providers/ui-provider";
import "@/src/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "0ne Connect",
	description: "Generated by 0ne Connect",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<UIProvider>{children}</UIProvider>
			</body>
		</html>
	);
}
