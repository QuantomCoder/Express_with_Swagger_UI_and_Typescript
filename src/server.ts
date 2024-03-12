import app from "./app";
const port: number = (process.env.PORT as unknown as number) || 4000;
app.listen(port, (): void => {
  console.log(`I am working on ${port}`);
});
