const express =  require("express");
const {createBundleRenderer} =  require("vue-server-renderer");
const generateHtml =  require("./src/services/generateHtml.js");

const server = express();
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    clientManifest
});

server.use(express.static('dist'));

server.get('*', (req, res) => {
    renderer.renderToString( (err, html) => {
        if (err) {
            return res.status(500).end('Internal Server Error');
        }
        const output = generateHtml(html);
        res.send(output);
    });
});

server.listen(8080, () => {
    console.log('Express listening at http://localhost:8080');
});