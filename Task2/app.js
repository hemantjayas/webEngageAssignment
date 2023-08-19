const nunjucks = require('nunjucks');

// Configure Nunjucks to load templates from the current directory
nunjucks.configure(__dirname, {
    autoescape: true,
});

// Render the template with data
const renderedHtml = nunjucks.render('index.njk', {
    greeting: 'Hello from Nunjucks!',
    para: "hello hemant how are you this is written form the app.js file"
});

console.log(renderedHtml);
