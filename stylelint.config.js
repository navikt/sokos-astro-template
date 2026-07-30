export default {
	extends: ["stylelint-config-standard", "@navikt/aksel-stylelint/recommended"],
	rules: {
		"selector-class-pattern":
			"^[a-z][a-z0-9-]*(__[a-z][a-z0-9-]*)*(--[a-z][a-z0-9-]*)?$",
		"custom-property-pattern": "[a-z][a-zA-Z0-9-]+",
		"selector-pseudo-class-no-unknown": [
			true,
			{
				ignorePseudoClasses: ["global"],
			},
		],
	},
	ignoreFiles: "dist/**/*",
};
