import { createBrowserHistory } from "history";
import Debug from "debug";

const debug = Debug("sa:history");

/**
 * browserHistory provides shared access to manipulate the current url, allowing components to
 * navigate dynamically when needed.
 */
// eslint-disable-next-line import/prefer-default-export
export const browserHistory = createBrowserHistory();

browserHistory.listen((location) => debug(`Navigated to ${location.pathname}`));
