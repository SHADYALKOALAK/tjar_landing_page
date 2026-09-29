import * as homeModule from './home.js';
import * as legalModule from './legal.js';
import ui from './ui.js';

/**
 * Complete dictionary for this language: interface text, page content and legal pages.
 *
 * The spreads matter: `import * as ns` produces a Module Namespace Object, and
 * React refuses to pass those across the server/client boundary (it is not a
 * plain object). Copying the exports into plain objects keeps the whole
 * dictionary serialisable, which is what lets the root layout hand the active
 * language straight to the client provider.
 */
export default {
  ...ui,
  home: { ...homeModule },
  legal: {
    draftNotice: legalModule.DRAFT_NOTICE,
    privacy: { ...legalModule.privacyPolicy },
    terms: { ...legalModule.termsOfUse },
  },
};