export default defineEventHandler((event) => {
  // let body = await readBody(event);
  // return `POST: ${body.message}`;
  console.log(event.req.method);
  return readBody(event)
    .then((body) => body)
    .catch(console.log);
});
