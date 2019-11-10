import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Search from "../components/Search";
import { Box } from "grommet";
import axios from "axios";

const Home = () => {
  const onSearch = (searchValue, filter) => {
    const [sortBy, , order] = filter;
    axios.get(`${process.env.api}/search?q=${searchValue}`, {
      data: {
        sortBy,
        order
      }
    });
  };

  return (
    <Box>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <Box>
        <h1 className="title">Welcome to Next.js!</h1>
        <Search onSearch={onSearch} />
      </Box>
    </Box>
  );
};

export default Home;
