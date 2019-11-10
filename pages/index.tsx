import React, { useState } from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Search from "../components/Search";
import SearchResult from "../components/SearchResult";
import { Box, Text } from "grommet";
import axios from "axios";

type GithubSearchResult = {
  total_count: number;
  incomplete_results: boolean;
  items: Array<any>;
};

const Home = () => {
  const [searchResults, setSearchResults] = useState<GithubSearchResult>(null);

  const searchRepos = async (searchValue, filter) => {
    const { sortBy, order } = filter;
    try {
      const response = await axios.get(`api/search`, {
        params: {
          q: searchValue,
          sortBy,
          order
        }
      });
      setSearchResults(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box fill>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <Box fill pad={{horizontal: 'medium'}}>
        <h1 className="title">Welcome to Next.js!</h1>
        <Search onSearch={searchRepos} />
        <Box>
          {searchResults && searchResults.items.length ? (
            searchResults.items.map(item => <SearchResult item={item} />)
          ) : (
            <Text>No results found</Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
