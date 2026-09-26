import { init } from "@nais/apm";
import { useEffect } from "react";

export default function NaisApm() {
	useEffect(() => {
		init({
			namespace: "okonomi",
			app: "sokos-astro-template",
			tracing: true,
			devConsoleEcho: false,
			beforeSend: (item) => {
				if (item.meta?.page?.url) {
					try {
						const url = new URL(item.meta.page.url);
						url.search = "";
						item.meta.page.url = url.toString();
					} catch {
						return item;
					}
				}
				return item;
			},
		});
	}, []);

	return null;
}
