import axios from "axios";

export default (req, res) => {
  console.log(req.query)
  const formattedQuery = req.query.q.replace(" ", "+");

  const params = {
    q: formattedQuery,
    sort: req.query.sortBy,
    order: req.query.order
  };
  const options = {
    method: "GET",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    params,
    url: `${process.env.github_api_url}/search/repositories`
  };
  axios(options)
    .then(resp => {
      console.log("response");
      return resp;
    })
    .catch(err => {
      console.log(err.response.data.errors);
      return err;
    })
    .finally(() => {
      console.log("the end");
    });
};
