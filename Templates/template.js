function template(content) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
   <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/detail">Details</a></li>
      <li><a href="/test">Testimonial</a></li>
    </ul>
    ${content}
  </body>
</html>`;
}
module.exports = template;
