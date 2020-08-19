import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';
import searchTriggered from './search-triggered';

import { handleSearch, resultClicked } from './search-results';
import { displayLightbox, closeLightbox } from './lightbox.js';

searchTriggered(handleSearch);
resultClicked(displayLightbox);
closeLightbox();












