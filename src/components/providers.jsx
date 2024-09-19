"use client";

import { Toaster } from "react-hot-toast";

export const Providers = ({ children }) => {
	return (
		<div>
			<div>{children}</div>
			<Toaster />
		</div>
	);
};
