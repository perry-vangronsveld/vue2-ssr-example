const generateHtml = (html) => {
    return `
     <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `
}

export default generateHtml;