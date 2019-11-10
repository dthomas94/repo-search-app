import axios from "axios";
const queryString = require("querystring");

export default (req, res) => {
  const formattedQuery = req.query.q.replace(" ", "+");

  const config = {
    q: formattedQuery,
    ...req.body.sortBy  && {
      sort: req.body.sortBy
    },
    ...req.body.order  && {
      order: req.body.order
    }
  };
  axios
    .get(
      `${process.env.github_api_url}/search/repositories`,
      queryString.stringify(config)
    )
    .then(resp => {
      return resp;
    })
    .catch(err => {
      return err;
    })
    .finally(() => {
      console.log("the end");
    });
};
