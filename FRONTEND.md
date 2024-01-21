

We use [React Aria](https://react-spectrum.adobe.com/react-aria/) for web components, and [tailwindcss](https://tailwindcss.com/) and daisyui[https://daisyui.com/] for styling.


## Justification:

### React Aria
1. Customization - React-Aria is unstyled and completely customizable, so we can develop our own style + theme systems, rather than fighting with theirs.
2. Feature Completeness - React-Aria ships with advanced, featureful components like Calendars, Drag + Drop, Form Validation, Table Resizing, Sorting, etc... That's a lot of complex JS interation we don't need to write.
3. Accessible + Mobile-first - React-Aria is tested on all devices (desktop and mobile) and implements web accessibility features (arrow key navigation, tab, touch, screen readers). This is a notoriously hard problem for a small team.
4. Internationalization out of the box - support for over 30 languages.
5. Web Fundamentals - By learning React-Aria, you are learning (web + html fundamentals)[https://remix.run/blog/not-another-framework#learn-remix-accidentally-learn-the-web], with a convenient React Component system for interactivity, rather than re-inventing the wheel in pure javascript

### tailwindcss + daisyui

Tailwind has become the developer standard for styles because:
1. styles are inline, right where you need them to be
2. copy-pasting is easy, and includes styles by default
3. LLMs, Cursor(IDE), github copilot, and code completion are easier with tailwind

daisyui extends tailwind by:
1. not reinventing the wheel - by adding semantic class names to tailwind, you get the best of both worlds: quick inline tailwind styles, but fewer class names, quicker development, and smaller file sizes.