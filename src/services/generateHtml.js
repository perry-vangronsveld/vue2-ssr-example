const generateHtml = (html) => {
    return `
    ${html}
    <script src="http://localhost:8080/client.js"></script>
    `
}

module.exports = generateHtml;