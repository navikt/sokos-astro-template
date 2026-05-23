/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "@navikt/ds-css";

declare namespace App {
	interface Locals {
		token: string;
	}
}
