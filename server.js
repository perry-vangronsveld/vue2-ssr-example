import express from "express";
import {createRenderer} from "vue-server-renderer";
import Vue from "vue";
import generateHtml from "./src/services/generateHtml.js";

const app = express();
const renderer = createRenderer();

app.get('*', (req, res) => {
    const test = new Vue({
        data: {
            url: req.url
        },
        template: `<div>The requested url is {{url}}</div>`
    });

    renderer.renderToString(test, (err, html) => {
        if (err) {
            return res.status(500).end('Internal Server Error');
        }
        const output = generateHtml(html);
        res.send(output);
    });
});

app.listen(8080, () => {
    console.log('Express listening at http://localhost:8080');
});