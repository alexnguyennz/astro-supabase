export const tailwind = `
<style>
/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: theme('borderColor.DEFAULT', currentColor); /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  tab-size: 4; /* 3 */
  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"); /* 4 */
  font-feature-settings: theme('fontFamily.sans[1].fontFeatureSettings', normal); /* 5 */
  font-variation-settings: theme('fontFamily.sans[1].fontVariationSettings', normal); /* 6 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace); /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: theme('colors.gray.400', #9ca3af); /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #E5E7EB; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: Mulish, system-ui; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

[data-tooltip-style^='light'] + .tooltip > .tooltip-arrow:before {
  border-style: solid;
  border-color: #e5e7eb;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='top'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-right-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='right'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='bottom'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='left'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-right-width: 1px;
}

.tooltip[data-popper-placement^='top'] > .tooltip-arrow {
  bottom: -4px;
}

.tooltip[data-popper-placement^='bottom'] > .tooltip-arrow {
  top: -4px;
}

.tooltip[data-popper-placement^='left'] > .tooltip-arrow {
  right: -4px;
}

.tooltip[data-popper-placement^='right'] > .tooltip-arrow {
  left: -4px;
}

.tooltip.invisible > .tooltip-arrow:before {
  visibility: hidden;
}

[data-popper-arrow],[data-popper-arrow]:before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

[data-popper-arrow] {
  visibility: hidden;
}

[data-popper-arrow]:before {
  content: "";
  visibility: visible;
  transform: rotate(45deg);
}

[data-popper-arrow]:after {
  content: "";
  visibility: visible;
  transform: rotate(45deg);
  position: absolute;
  width: 9px;
  height: 9px;
  background: inherit;
}

[role="tooltip"] > [data-popper-arrow]:before {
  border-style: solid;
  border-color: #e5e7eb;
}

.dark [role="tooltip"] > [data-popper-arrow]:before {
  border-style: solid;
  border-color: #4b5563;
}

[role="tooltip"] > [data-popper-arrow]:after {
  border-style: solid;
  border-color: #e5e7eb;
}

.dark [role="tooltip"] > [data-popper-arrow]:after {
  border-style: solid;
  border-color: #4b5563;
}

[data-popover][role="tooltip"][data-popper-placement^='top'] > [data-popper-arrow]:before {
  border-bottom-width: 1px;
  border-right-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='top'] > [data-popper-arrow]:after {
  border-bottom-width: 1px;
  border-right-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='right'] > [data-popper-arrow]:before {
  border-bottom-width: 1px;
  border-left-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='right'] > [data-popper-arrow]:after {
  border-bottom-width: 1px;
  border-left-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='bottom'] > [data-popper-arrow]:before {
  border-top-width: 1px;
  border-left-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='bottom'] > [data-popper-arrow]:after {
  border-top-width: 1px;
  border-left-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='left'] > [data-popper-arrow]:before {
  border-top-width: 1px;
  border-right-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='left'] > [data-popper-arrow]:after {
  border-top-width: 1px;
  border-right-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='top'] > [data-popper-arrow] {
  bottom: -5px;
}

[data-popover][role="tooltip"][data-popper-placement^='bottom'] > [data-popper-arrow] {
  top: -5px;
}

[data-popover][role="tooltip"][data-popper-placement^='left'] > [data-popper-arrow] {
  right: -5px;
}

[data-popover][role="tooltip"][data-popper-placement^='right'] > [data-popper-arrow] {
  left: -5px;
}

[role="tooltip"].invisible > [data-popper-arrow]:before {
  visibility: hidden;
}

[role="tooltip"].invisible > [data-popper-arrow]:after {
  visibility: hidden;
}

[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #1C64F2;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6B7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: #6B7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
}

select:not([size]) {
  background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3e %3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 0.75em 0.75em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
}

:is([dir=rtl]) select:not([size]) {
  background-position: left 0.75rem center;
  padding-right: 0.75rem;
  padding-left: 0;
}

[multiple] {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #1C64F2;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked,.dark [type='checkbox']:checked,.dark [type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 0.55em 0.55em;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 0.55em 0.55em;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
  background-size: 1em 1em;
}

.dark [type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
  background-size: 1em 1em;
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e");
  background-color: currentColor;
  border-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 0.55em 0.55em;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px auto inherit;
}

input[type=file]::file-selector-button {
  color: white;
  background: #1F2937;
  border: 0;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 2rem;
  padding-right: 1rem;
  margin-inline-start: -1rem;
  margin-inline-end: 1rem;
}

input[type=file]::file-selector-button:hover {
  background: #374151;
}

:is([dir=rtl]) input[type=file]::file-selector-button {
  padding-right: 2rem;
  padding-left: 1rem;
}

.dark input[type=file]::file-selector-button {
  color: white;
  background: #4B5563;
}

.dark input[type=file]::file-selector-button:hover {
  background: #6B7280;
}

input[type="range"]::-webkit-slider-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-webkit-slider-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-webkit-slider-thumb {
  background: #6B7280;
}

input[type="range"]:focus::-webkit-slider-thumb {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity: 1px;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}

input[type="range"]::-moz-range-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-moz-range-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-moz-range-thumb {
  background: #6B7280;
}

input[type="range"]::-moz-range-progress {
  background: #3F83F8;
}

input[type="range"]::-ms-fill-lower {
  background: #3F83F8;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}
.collapse {
  visibility: collapse;
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.inset-0 {
  inset: 0px;
}
.inset-x-0 {
  left: 0px;
  right: 0px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-5 {
  bottom: 1.25rem;
}
.bottom-\\[60px\\] {
  bottom: 60px;
}
.left-0 {
  left: 0px;
}
.left-1\\/2 {
  left: 50%;
}
.left-2 {
  left: 0.5rem;
}
.left-\\[50\\%\\] {
  left: 50%;
}
.right-0 {
  right: 0px;
}
.right-4 {
  right: 1rem;
}
.right-8 {
  right: 2rem;
}
.top-0 {
  top: 0px;
}
.top-1\\/2 {
  top: 50%;
}
.top-4 {
  top: 1rem;
}
.top-8 {
  top: 2rem;
}
.top-\\[50\\%\\] {
  top: 50%;
}
.top-\\[60\\%\\] {
  top: 60%;
}
.top-full {
  top: 100%;
}
.z-10 {
  z-index: 10;
}
.z-20 {
  z-index: 20;
}
.z-30 {
  z-index: 30;
}
.z-40 {
  z-index: 40;
}
.z-50 {
  z-index: 50;
}
.z-\\[1\\] {
  z-index: 1;
}
.order-last {
  order: 9999;
}
.-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.my-5 {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}
.mb-0 {
  margin-bottom: 0px;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.ml-4 {
  margin-left: 1rem;
}
.mr-0 {
  margin-right: 0px;
}
.mr-0\\.5 {
  margin-right: 0.125rem;
}
.mt-1 {
  margin-top: 0.25rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mt-3 {
  margin-top: 0.75rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-6 {
  margin-top: 1.5rem;
}
.mt-\\[1px\\] {
  margin-top: 1px;
}
.mt-auto {
  margin-top: auto;
}
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.\\!block {
  display: block !important;
}
.block {
  display: block;
}
.inline-block {
  display: inline-block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.table {
  display: table;
}
.grid {
  display: grid;
}
.hidden {
  display: none;
}
.h-1 {
  height: 0.25rem;
}
.h-1\\.5 {
  height: 0.375rem;
}
.h-10 {
  height: 2.5rem;
}
.h-2 {
  height: 0.5rem;
}
.h-20 {
  height: 5rem;
}
.h-3 {
  height: 0.75rem;
}
.h-3\\.5 {
  height: 0.875rem;
}
.h-4 {
  height: 1rem;
}
.h-5 {
  height: 1.25rem;
}
.h-56 {
  height: 14rem;
}
.h-6 {
  height: 1.5rem;
}
.h-8 {
  height: 2rem;
}
.h-9 {
  height: 2.25rem;
}
.h-96 {
  height: 24rem;
}
.h-\\[170px\\] {
  height: 170px;
}
.h-\\[36px\\] {
  height: 36px;
}
.h-\\[540px\\] {
  height: 540px;
}
.h-\\[56px\\] {
  height: 56px;
}
.h-\\[574px\\] {
  height: 574px;
}
.h-\\[var\\(--radix-navigation-menu-viewport-height\\)\\] {
  height: var(--radix-navigation-menu-viewport-height);
}
.h-\\[var\\(--radix-select-trigger-height\\)\\] {
  height: var(--radix-select-trigger-height);
}
.h-auto {
  height: auto;
}
.h-full {
  height: 100%;
}
.h-px {
  height: 1px;
}
.min-h-\\[80px\\] {
  min-height: 80px;
}
.min-h-screen {
  min-height: 100vh;
}
.w-1\\/2 {
  width: 50%;
}
.w-10 {
  width: 2.5rem;
}
.w-2 {
  width: 0.5rem;
}
.w-20 {
  width: 5rem;
}
.w-3 {
  width: 0.75rem;
}
.w-3\\.5 {
  width: 0.875rem;
}
.w-3\\/4 {
  width: 75%;
}
.w-4 {
  width: 1rem;
}
.w-5 {
  width: 1.25rem;
}
.w-6 {
  width: 1.5rem;
}
.w-60 {
  width: 15rem;
}
.w-64 {
  width: 16rem;
}
.w-8 {
  width: 2rem;
}
.w-\\[200px\\] {
  width: 200px;
}
.w-\\[400px\\] {
  width: 400px;
}
.w-\\[56px\\] {
  width: 56px;
}
.w-full {
  width: 100%;
}
.w-max {
  width: -moz-max-content;
  width: max-content;
}
.min-w-\\[8rem\\] {
  min-width: 8rem;
}
.min-w-\\[var\\(--radix-select-trigger-width\\)\\] {
  min-width: var(--radix-select-trigger-width);
}
.max-w-2xl {
  max-width: 42rem;
}
.max-w-6xl {
  max-width: 72rem;
}
.max-w-max {
  max-width: -moz-max-content;
  max-width: max-content;
}
.max-w-xl {
  max-width: 36rem;
}
.flex-1 {
  flex: 1 1 0%;
}
.grow {
  flex-grow: 1;
}
.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-x-full {
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-full {
  --tw-translate-y: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-0 {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-\\[-50\\%\\] {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-full {
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\\[-50\\%\\] {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-full {
  --tw-translate-y: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-180 {
  --tw-rotate: -180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform-none {
  transform: none;
}
@keyframes show {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 100;
  }
}
.animate-show {
  animation: show 1s 0s forwards;
}
.cursor-default {
  cursor: default;
}
.cursor-pointer {
  cursor: pointer;
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.resize {
  resize: both;
}
.list-none {
  list-style-type: none;
}
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.grid-cols-7 {
  grid-template-columns: repeat(7, minmax(0, 1fr));
}
.flex-col {
  flex-direction: column;
}
.flex-col-reverse {
  flex-direction: column-reverse;
}
.flex-wrap {
  flex-wrap: wrap;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-1\\.5 {
  gap: 0.375rem;
}
.gap-10 {
  gap: 2.5rem;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-20 {
  gap: 5rem;
}
.gap-3 {
  gap: 0.75rem;
}
.gap-4 {
  gap: 1rem;
}
.gap-5 {
  gap: 1.25rem;
}
.gap-6 {
  gap: 1.5rem;
}
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));
}
.space-y-10 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2.5rem * var(--tw-space-y-reverse));
}
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.space-y-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
}
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}
.place-self-start {
  place-self: start;
}
.place-self-center {
  place-self: center;
}
.self-center {
  align-self: center;
}
.justify-self-center {
  justify-self: center;
}
.overflow-hidden {
  overflow: hidden;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-sm {
  border-radius: 0.125rem;
}
.rounded-e-lg {
  border-start-end-radius: 0.5rem;
  border-end-end-radius: 0.5rem;
}
.rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.rounded-s-lg {
  border-start-start-radius: 0.5rem;
  border-end-start-radius: 0.5rem;
}
.rounded-tl-sm {
  border-top-left-radius: 0.125rem;
}
.border {
  border-width: 1px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-l {
  border-left-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-black {
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
}
.border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}
.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}
.border-slate-200 {
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
}
.border-transparent {
  border-color: transparent;
}
.bg-amber-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 251 235 / var(--tw-bg-opacity));
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}
.bg-black\\/50 {
  background-color: rgb(0 0 0 / 0.5);
}
.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}
.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}
.bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}
.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}
.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
.bg-orange-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 138 76 / var(--tw-bg-opacity));
}
.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}
.bg-slate-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}
.bg-slate-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity));
}
.bg-slate-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.bg-white\\/30 {
  background-color: rgb(255 255 255 / 0.3);
}
.bg-white\\/50 {
  background-color: rgb(255 255 255 / 0.5);
}
.bg-white\\/80 {
  background-color: rgb(255 255 255 / 0.8);
}
.bg-opacity-20 {
  --tw-bg-opacity: 0.2;
}
.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}
.bg-opacity-60 {
  --tw-bg-opacity: 0.6;
}
.bg-cover {
  background-size: cover;
}
.bg-center {
  background-position: center;
}
.object-contain {
  -o-object-fit: contain;
     object-fit: contain;
}
.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}
.\\!p-1 {
  padding: 0.25rem !important;
}
.\\!p-1\\.5 {
  padding: 0.375rem !important;
}
.p-1 {
  padding: 0.25rem;
}
.p-3 {
  padding: 0.75rem;
}
.p-4 {
  padding: 1rem;
}
.p-6 {
  padding: 1.5rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.pl-8 {
  padding-left: 2rem;
}
.pr-2 {
  padding-right: 0.5rem;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.font-bold {
  font-weight: 700;
}
.font-extrabold {
  font-weight: 800;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.italic {
  font-style: italic;
}
.leading-6 {
  line-height: 1.5rem;
}
.leading-9 {
  line-height: 2.25rem;
}
.leading-none {
  line-height: 1;
}
.tracking-tight {
  letter-spacing: -0.025em;
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}
.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
.text-red-50 {
  --tw-text-opacity: 1;
  color: rgb(253 242 242 / var(--tw-text-opacity));
}
.text-slate-400 {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}
.text-slate-950 {
  --tw-text-opacity: 1;
  color: rgb(2 6 23 / var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.no-underline {
  text-decoration-line: none;
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.opacity-70 {
  opacity: 0.7;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.ring-offset-white {
  --tw-ring-offset-color: #ffffff;
}
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.delay-100 {
  transition-delay: 100ms;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.duration-700 {
  transition-duration: 700ms;
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
@keyframes enter {

  from {
    opacity: var(--tw-enter-opacity, 1);
    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));
  }
}
@keyframes exit {

  to {
    opacity: var(--tw-exit-opacity, 1);
    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));
  }
}
.duration-200 {
  animation-duration: 200ms;
}
.duration-300 {
  animation-duration: 300ms;
}
.duration-700 {
  animation-duration: 700ms;
}
.delay-100 {
  animation-delay: 100ms;
}
.ease-in-out {
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-out {
  animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.running {
  animation-play-state: running;
}

@font-face {
  font-family: "Mulish";
  font-display: swap;
  src: url("/fonts/Mulish.woff2") format("woff2");
}

/*body {
  font-family: "Mulish", sans-serif;
}*/

h1 {
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 800;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

h2 {
  text-align: center;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 800;
}

h2,
p,
main ul {
  margin-bottom: 1rem;
}

main ul {
  margin-left: 1.5rem;
  list-style-type: disc;
}

main a:hover,
footer a:hover {
  -webkit-text-decoration: underline 2px;
          text-decoration: underline 2px;
  text-underline-offset: 3px;
}

.section-container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 640px) {

  .section-container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {

  .section-container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {

  .section-container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {

  .section-container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {

  .section-container {
    max-width: 1536px;
  }
}

.section-container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

/* Misc */
.shadow-border {
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
  --tw-shadow: 1px 1px 0 0 black, 2px 2px 0 0 black, 3px 3px 0 0 black, 4px 4px 0 0 black, 5px 5px 0 0 black;
  --tw-shadow-colored: 1px 1px 0 0 var(--tw-shadow-color), 2px 2px 0 0 var(--tw-shadow-color), 3px 3px 0 0 var(--tw-shadow-color), 4px 4px 0 0 var(--tw-shadow-color), 5px 5px 0 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-text {
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}

.shadow-button {
  position: relative;
  display: inline-block;
  border-radius: 0.375rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 800;
  letter-spacing: 0.025em;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  text-decoration-line: none;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
  --tw-shadow: 1px 1px 0 0 black, 2px 2px 0 0 black, 3px 3px 0 0 black, 4px 4px 0 0 black, 5px 5px 0 0 black;
  --tw-shadow-colored: 1px 1px 0 0 var(--tw-shadow-color), 2px 2px 0 0 var(--tw-shadow-color), 3px 3px 0 0 var(--tw-shadow-color), 4px 4px 0 0 var(--tw-shadow-color), 5px 5px 0 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}

.shadow-button:hover {
  text-decoration-line: none;
}

.shadow-button:active {
  left: 0.25rem;
  top: 0.25rem;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.file\\:border-0::file-selector-button {
  border-width: 0px;
}

.file\\:bg-transparent::file-selector-button {
  background-color: transparent;
}

.file\\:text-sm::file-selector-button {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.file\\:font-medium::file-selector-button {
  font-weight: 500;
}

.placeholder\\:text-slate-500::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(100 116 139 / var(--tw-text-opacity));
}

.placeholder\\:text-slate-500::placeholder {
  --tw-text-opacity: 1;
  color: rgb(100 116 139 / var(--tw-text-opacity));
}

.hover\\:translate-y-1:hover {
  --tw-translate-y: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.hover\\:scale-105:hover {
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.hover\\:border-gray-300:hover {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.hover\\:bg-gray-900:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

.hover\\:bg-white:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.hover\\:text-blue-600:hover {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}

.hover\\:text-gray-600:hover {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}

.hover\\:text-red-50:hover {
  --tw-text-opacity: 1;
  color: rgb(253 242 242 / var(--tw-text-opacity));
}

.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.hover\\:opacity-100:hover {
  opacity: 1;
}

.focus\\:border-black:focus {
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
}

.focus\\:bg-gray-900:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

.focus\\:bg-slate-100:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}

.focus\\:text-black:focus {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.focus\\:text-red-50:focus {
  --tw-text-opacity: 1;
  color: rgb(253 242 242 / var(--tw-text-opacity));
}

.focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-slate-950:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(2 6 23 / var(--tw-ring-opacity));
}

.focus\\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}

.focus-visible\\:outline-none:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus-visible\\:ring-2:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus-visible\\:ring-slate-950:focus-visible {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(2 6 23 / var(--tw-ring-opacity));
}

.focus-visible\\:ring-offset-2:focus-visible {
  --tw-ring-offset-width: 2px;
}

.disabled\\:pointer-events-none:disabled {
  pointer-events: none;
}

.disabled\\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}

.disabled\\:opacity-50:disabled {
  opacity: 0.5;
}

.group:hover .group-hover\\:scale-105 {
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\\:scale-110 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\\:bg-white\\/50 {
  background-color: rgb(255 255 255 / 0.5);
}

.group:focus .group-focus\\:outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.group:focus .group-focus\\:ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.group:focus .group-focus\\:ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}

.peer:disabled ~ .peer-disabled\\:cursor-not-allowed {
  cursor: not-allowed;
}

.peer:disabled ~ .peer-disabled\\:opacity-70 {
  opacity: 0.7;
}

.data-\\[disabled\\]\\:pointer-events-none[data-disabled] {
  pointer-events: none;
}

.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom] {
  --tw-translate-y: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left] {
  --tw-translate-x: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[side\\=right\\]\\:translate-x-1[data-side=right] {
  --tw-translate-x: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top] {
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[state\\=open\\]\\:bg-slate-100[data-state=open] {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}

.data-\\[disabled\\]\\:opacity-50[data-disabled] {
  opacity: 0.5;
}

.data-\\[state\\=closed\\]\\:duration-300[data-state=closed] {
  transition-duration: 300ms;
}

.data-\\[state\\=open\\]\\:duration-500[data-state=open] {
  transition-duration: 500ms;
}

.data-\\[motion\\^\\=from-\\]\\:animate-in[data-motion^=from-] {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}

.data-\\[state\\=open\\]\\:animate-in[data-state=open] {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}

.data-\\[state\\=visible\\]\\:animate-in[data-state=visible] {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}

.data-\\[motion\\^\\=to-\\]\\:animate-out[data-motion^=to-] {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}

.data-\\[state\\=closed\\]\\:animate-out[data-state=closed] {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}

.data-\\[state\\=hidden\\]\\:animate-out[data-state=hidden] {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}

.data-\\[motion\\^\\=from-\\]\\:fade-in[data-motion^=from-] {
  --tw-enter-opacity: 0;
}

.data-\\[motion\\^\\=to-\\]\\:fade-out[data-motion^=to-] {
  --tw-exit-opacity: 0;
}

.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed] {
  --tw-exit-opacity: 0;
}

.data-\\[state\\=hidden\\]\\:fade-out[data-state=hidden] {
  --tw-exit-opacity: 0;
}

.data-\\[state\\=open\\]\\:fade-in-0[data-state=open] {
  --tw-enter-opacity: 0;
}

.data-\\[state\\=visible\\]\\:fade-in[data-state=visible] {
  --tw-enter-opacity: 0;
}

.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed] {
  --tw-exit-scale: .95;
}

.data-\\[state\\=open\\]\\:zoom-in-90[data-state=open] {
  --tw-enter-scale: .9;
}

.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open] {
  --tw-enter-scale: .95;
}

.data-\\[motion\\=from-end\\]\\:slide-in-from-right-52[data-motion=from-end] {
  --tw-enter-translate-x: 13rem;
}

.data-\\[motion\\=from-start\\]\\:slide-in-from-left-52[data-motion=from-start] {
  --tw-enter-translate-x: -13rem;
}

.data-\\[motion\\=to-end\\]\\:slide-out-to-right-52[data-motion=to-end] {
  --tw-exit-translate-x: 13rem;
}

.data-\\[motion\\=to-start\\]\\:slide-out-to-left-52[data-motion=to-start] {
  --tw-exit-translate-x: -13rem;
}

.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom] {
  --tw-enter-translate-y: -0.5rem;
}

.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left] {
  --tw-enter-translate-x: 0.5rem;
}

.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right] {
  --tw-enter-translate-x: -0.5rem;
}

.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top] {
  --tw-enter-translate-y: 0.5rem;
}

.data-\\[state\\=closed\\]\\:slide-out-to-bottom[data-state=closed] {
  --tw-exit-translate-y: 100%;
}

.data-\\[state\\=closed\\]\\:slide-out-to-left[data-state=closed] {
  --tw-exit-translate-x: -100%;
}

.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=closed] {
  --tw-exit-translate-x: -50%;
}

.data-\\[state\\=closed\\]\\:slide-out-to-right[data-state=closed] {
  --tw-exit-translate-x: 100%;
}

.data-\\[state\\=closed\\]\\:slide-out-to-top[data-state=closed] {
  --tw-exit-translate-y: -100%;
}

.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=closed] {
  --tw-exit-translate-y: -48%;
}

.data-\\[state\\=open\\]\\:slide-in-from-bottom[data-state=open] {
  --tw-enter-translate-y: 100%;
}

.data-\\[state\\=open\\]\\:slide-in-from-left[data-state=open] {
  --tw-enter-translate-x: -100%;
}

.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=open] {
  --tw-enter-translate-x: -50%;
}

.data-\\[state\\=open\\]\\:slide-in-from-right[data-state=open] {
  --tw-enter-translate-x: 100%;
}

.data-\\[state\\=open\\]\\:slide-in-from-top[data-state=open] {
  --tw-enter-translate-y: -100%;
}

.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=open] {
  --tw-enter-translate-y: -48%;
}

.data-\\[state\\=closed\\]\\:duration-300[data-state=closed] {
  animation-duration: 300ms;
}

.data-\\[state\\=open\\]\\:duration-500[data-state=open] {
  animation-duration: 500ms;
}

.group[data-state=open] .group-data-\\[state\\=open\\]\\:rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

:is(.dark .dark\\:border-blue-500) {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}

:is(.dark .dark\\:border-gray-700) {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}

:is(.dark .dark\\:border-slate-800) {
  --tw-border-opacity: 1;
  border-color: rgb(30 41 59 / var(--tw-border-opacity));
}

:is(.dark .dark\\:border-transparent) {
  border-color: transparent;
}

:is(.dark .dark\\:bg-gray-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:bg-gray-800\\/30) {
  background-color: rgb(31 41 55 / 0.3);
}

:is(.dark .dark\\:bg-gray-800\\/50) {
  background-color: rgb(31 41 55 / 0.5);
}

:is(.dark .dark\\:bg-slate-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:bg-slate-950) {
  --tw-bg-opacity: 1;
  background-color: rgb(2 6 23 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:bg-slate-950\\/80) {
  background-color: rgb(2 6 23 / 0.8);
}

:is(.dark .dark\\:bg-opacity-80) {
  --tw-bg-opacity: 0.8;
}

:is(.dark .dark\\:text-blue-500) {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}

:is(.dark .dark\\:text-gray-400) {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

:is(.dark .dark\\:text-gray-800) {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}

:is(.dark .dark\\:text-slate-50) {
  --tw-text-opacity: 1;
  color: rgb(248 250 252 / var(--tw-text-opacity));
}

:is(.dark .dark\\:text-white) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

:is(.dark .dark\\:ring-offset-slate-950) {
  --tw-ring-offset-color: #020617;
}

:is(.dark .dark\\:placeholder\\:text-slate-400)::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

:is(.dark .dark\\:placeholder\\:text-slate-400)::placeholder {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

:is(.dark .dark\\:hover\\:bg-gray-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:hover\\:text-blue-500:hover) {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}

:is(.dark .dark\\:hover\\:text-gray-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

:is(.dark .dark\\:focus\\:bg-slate-800:focus) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:focus\\:text-slate-50:focus) {
  --tw-text-opacity: 1;
  color: rgb(248 250 252 / var(--tw-text-opacity));
}

:is(.dark .dark\\:focus\\:ring-slate-300:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(203 213 225 / var(--tw-ring-opacity));
}

:is(.dark .dark\\:focus-visible\\:ring-slate-300:focus-visible) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(203 213 225 / var(--tw-ring-opacity));
}

:is(.dark .group:hover .dark\\:group-hover\\:bg-gray-800\\/60) {
  background-color: rgb(31 41 55 / 0.6);
}

:is(.dark .group:focus .dark\\:group-focus\\:ring-gray-800\\/70) {
  --tw-ring-color: rgb(31 41 55 / 0.7);
}

:is(.dark .dark\\:data-\\[state\\=open\\]\\:bg-slate-800[data-state=open]) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}

@media (min-width: 640px) {

  .sm\\:col-span-2 {
    grid-column: span 2 / span 2;
  }

  .sm\\:h-\\[50px\\] {
    height: 50px;
  }

  .sm\\:min-h-\\[550px\\] {
    min-height: 550px;
  }

  .sm\\:w-\\[275px\\] {
    width: 275px;
  }

  .sm\\:max-w-sm {
    max-width: 24rem;
  }

  .sm\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sm\\:flex-row {
    flex-direction: row;
  }

  .sm\\:justify-end {
    justify-content: flex-end;
  }

  .sm\\:gap-10 {
    gap: 2.5rem;
  }

  .sm\\:space-x-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.5rem * var(--tw-space-x-reverse));
    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .sm\\:rounded-lg {
    border-radius: 0.5rem;
  }

  .sm\\:text-left {
    text-align: left;
  }
}

@media (min-width: 768px) {

  .md\\:absolute {
    position: absolute;
  }

  .md\\:order-first {
    order: -9999;
  }

  .md\\:col-span-4 {
    grid-column: span 4 / span 4;
  }

  .md\\:min-h-\\[525px\\] {
    min-height: 525px;
  }

  .md\\:w-\\[var\\(--radix-navigation-menu-viewport-width\\)\\] {
    width: var(--radix-navigation-menu-viewport-width);
  }

  .md\\:w-auto {
    width: auto;
  }

  .md\\:w-full {
    width: 100%;
  }

  .md\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .md\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .md\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .md\\:justify-start {
    justify-content: flex-start;
  }

  .md\\:gap-10 {
    gap: 2.5rem;
  }

  .md\\:text-left {
    text-align: left;
  }
}

@media (min-width: 1024px) {

  .lg\\:col-span-2 {
    grid-column: span 2 / span 2;
  }

  .lg\\:block {
    display: block;
  }

  .lg\\:hidden {
    display: none;
  }

  .lg\\:min-h-\\[550px\\] {
    min-height: 550px;
  }

  .lg\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .lg\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .lg\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .lg\\:grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .lg\\:gap-10 {
    gap: 2.5rem;
  }
}

@media (min-width: 1280px) {

  .xl\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .xl\\:grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

@media (min-width: 1536px) {

  .\\32xl\\:min-h-\\[525px\\] {
    min-height: 525px;
  }
}
</style>`;
