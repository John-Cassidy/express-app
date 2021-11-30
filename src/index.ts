import * as express from 'express';

import { Request, Response } from 'express';

const app = express();
const { PORT = 3000 } = process.env;

const runningMessage: string = `Server is up and running on port: ${PORT}`;

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: runningMessage,
  });
});
if (require.main === module) {
  // true if file is executed
  app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
  });
}
export default app;
