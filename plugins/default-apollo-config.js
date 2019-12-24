export default function () {
  return {
    httpEndpoint: process.env.BACKEND_URL + process.env.GRAPHQL_PATH,
    getAuth: () => `Bearer ${process.env.GRAPHQL_TOKEN}`,
  };
}
