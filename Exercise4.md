# Exercise (Class 4): Understanding React & "Frontend" from First Principles

### Basics of HTML, CSS, and JS:

1. Make a simple HTML site with a title and an image.

2. Add Styling via CSS so it looks good to you.   
	a. Change the background color of your site   
	b. Change the text color of your title   
	c. Change the location of your title and image   
	d. Re-size your image   

3. Replace your styling with TailwindCSS   
	a. Include [TailwindCSS via CDN](https://tailwindcss.com/docs/installation/play-cdn)   
	b. Replace all of your CSS styles with Tailwind Classes by using the docs   

4. Create a Counter using HTML & JS   
	##### [HTML]   
	a. Create a Counter div to store the value of the counter, it should render 0   
	b. Create a "+", "-", and "reset" button.   
	##### [JS]   
	c. Create a Javascript function called "setCounter" which takes a newValue and replaces the contents of the Counter div by selecting it and setting its innerText    
	d. Use createEventListener so that when you click on the "+"  button, it calls setCounter with the value of the counter + 1   
	e. Do the same thing for the "-" button and the "reset" button   

### Rebuilding our app in React:
5. Why React? And what is "State"?   
	a. Create a new index.html file (new app)   
	b. Include React via CDN ([link](https://dev.to/jeetvora331/write-react-code-with-cdn-in-html-56i9))   
	c. Follow React's tutorial to create a Root div, and render the React `<App />` component into that div   
	d. Rebuild the look of your previous app now, by putting it inside of `<App />`   

6. Creating a Counter using React   
	a. Create a `counter` variable and `setCounter` function using `useState`. Anytime this state is updated, your App will re-render with the new value stored in the variable.   
	b. Use the `counter` variable to show your counter value in JSX   
	c. Add `onClick` handlers to your buttons, which each calls a function that uses `setCounter` to update the counter.   

### APPENDIX:   
- If you are ever confused, refer to [EloquentJS](eloquentjavascript.net) for help with using Javascript.   

Other Resources:   
- [TailwindCSS](https://tailwindcss.com/) docs
- [Writing React using a CDN](https://dev.to/jeetvora331/write-react-code-with-cdn-in-html-56i9)
- Overwhelmed with CSS? Try [Flexbox Froggy](https://flexboxfroggy.com/) and [CSS Diner](https://flukeout.github.io/)


### BONUS:
7. Create a simple HTTP Server using Node.JS:   
a. Follow along [Chapter 20 of Eloquent Javascript](https://eloquentjavascript.net/20_node.html#h-3O5dGIJE9F)   
b. now combine the HTTP server with the HTML file you made earlier to *serve your react app* from your Node server. [See here](https://eloquentjavascript.net/20_node.html#i-TLRTlwK6ZU).   
