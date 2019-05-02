const cacheableResponse = require('cacheable-response');
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const ssrCache = cacheableResponse({
    ttl: 1000 * 24 * 60 * 60, // 30min
    get: async ({ req, res, pagePath, queryParams }) => ({
        data: await app.renderToHTML(req, res, pagePath, queryParams),
    }),
    send: ({ data, res }) => res.send(data),
});

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
            return ssrCache({ req, res, pagePath, queryParams });
        });

        server.get('/blog', (req, res) => {
            const pagePath = '/blog';

            return ssrCache({ req, res, pagePath });
        });

        server.get('/tag/:tagName', (req, res) => {
            const pagePath = '/tag';
            const { tagName } = req.params;
            const queryParams = { tagName };

            return ssrCache({ req, res, pagePath, queryParams });
        });

        server.get('/blog/page/:pageNumber', (req, res) => {
            const pagePath = '/';
            const { pageNumber } = req.params;
            const queryParams = { pageNumber };

            return ssrCache({ req, res, pagePath, queryParams });
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
