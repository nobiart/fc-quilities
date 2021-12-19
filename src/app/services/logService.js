import * as Sentry from "@sentry/react";
import {Integrations} from "@sentry/tracing";

function init() {
    Sentry.init({
        dsn: "https://0f745d0e3b97443aa7cf261e5586fef1@o1093402.ingest.sentry.io/6112653",
        integrations: [new Integrations.BrowserTracing()],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });
}

function log(error) {
    Sentry.captureException(error);
}

const logger = {
    init,
    log
}

export default logger;
