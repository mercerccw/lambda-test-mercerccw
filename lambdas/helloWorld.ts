import { theMiddleware } from '../src/index';
import { theRoutes } from '../src/index';

const handler = async (event: any) => {
  theMiddleware('the first text')
  theRoutes('the second text')
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
}
export { handler }