import * as home from './home.js';
import * as legal from './legal.js';
import ui from './ui.js';

/** Complete dictionary for this language: interface text, page content and legal pages. */
export default {
  ...ui,
  home,
  legal: {
    draftNotice: legal.DRAFT_NOTICE,
    privacy: legal.privacyPolicy,
    terms: legal.termsOfUse,
  },
};
