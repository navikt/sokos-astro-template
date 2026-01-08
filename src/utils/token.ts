import { requestOboToken } from "@navikt/oasis";
import { isLocal } from "./environment";
import logger from "./logger";

const audience = `${process.env.NAIS_CLUSTER_NAME}:okonomi:example-api`;

export const getOboToken = async (token: string): Promise<string> => {
	const oboResult = await requestOboToken(token, audience);

	if (isLocal) {
		return "Fake token";
	}

	if (!oboResult.ok) {
		logger.error(`Error getting access token: ${oboResult.error}`);
		throw new Error("Request oboToken for example-api failed ");
	}

	return oboResult.token;
};
