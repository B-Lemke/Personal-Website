// Import utilities
import './utilities/random.js';

// Import modules
import {ReplaceCurrentYear} from './misc/replaceCurrentYear.js';
import {ReplacePlaceholderEmails} from './misc/replacePlaceholderEmails.js';
import {LoadHeadScriptsAndLinks} from './utilities/importFiles.js'

//Load in CSS and JS files
LoadHeadScriptsAndLinks();

// Footer utilities
ReplacePlaceholderEmails();
ReplaceCurrentYear();

