import { defineMiddleware } from "astro/middleware";
import { isInternal, isLocal } from "../utils/environment";
import { getToken, validateAzureToken } from "@navikt/oasis";
import logger from "@src/utils/logger.ts";

export const onRequest = defineMiddleware(async (context, next) => {
  const token = getToken(context.request.headers);

  logger.info(token);

  if (isLocal) {
    return next();
  }

  if (isInternal(context)) {
    return next();
  }

  if (!token) {
    return new Response(null, { status: 401 });
  }

  const validation = await validateAzureToken(token);

  if (!validation.ok) {
    const error = new Error(
      `Invalid JWT token found (cause: ${validation.errorType} ${validation.error}.`,
    );
    logger.error(error);
    return new Response(null, { status: 401 });
  }

  context.locals.token = token;

  return next();
});
