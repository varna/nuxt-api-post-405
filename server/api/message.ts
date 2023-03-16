export default defineEventHandler((event) => {
  // let body = await readBody(event);
  // return `POST: ${body.message}`;
  console.log(event.req.method);
  return readBody(event)
    .then(({ message }) => `POST: ${message}`)
    .catch(console.log);
});
