const nunjucks = require('nunjucks');
const http = require("http");
const axios = require("axios")
const PORT = 3000;

// Configure Nunjucks to load templates from the current directory
nunjucks.configure(__dirname, {
    autoescape: true,
});

let users = [];
const getData = async () => {
    const resp = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    console.log(resp.data);
    users = [...resp.data]
}

// creating a server
const httpServer = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("content-type", "text/html");

    const renderedHtml = nunjucks.render('users.njk', {
        users: users,
    });

    res.end(renderedHtml)
})

httpServer.listen(PORT, async () => {
    await getData()
    console.log(`listening on port ${PORT}`)
})
