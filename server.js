const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('/post/:slug', (req, res) => {
            const pagePath = '/post';
            const slugArray = req.params.slug.split('-');

            const [number] = slugArray.slice(-1);
            slugArray.splice(-1, 1);
            const slug = slugArray.join('-');

            const queryParams = { number, slug };
            app.render(req, res, pagePath, queryParams);
        });

        server.get('*', (req, res) => handle(req, res));

        server.listen(3000, err => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3000');
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });