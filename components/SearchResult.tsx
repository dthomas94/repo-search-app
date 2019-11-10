import React from "react";
import { Box, Text, Anchor } from "grommet";
import { Star } from "grommet-icons";

const SearchResult = ({ item }) => {
  return (
    <Box direction="row" background="white" pad="medium" justify="between" border={{side: 'bottom', size: '1px', color: 'grey'}} fill>
      <Box fill align="start">
        <Anchor as="a" color="#0366d6" margin={{bottom: 'small'}} label={item.full_name} href={item.html_url} target="_blank"/>
        <Text color="#586069">{item.description}</Text>
      </Box>
      <Box fill align="center" color="#586069">{item.language}</Box>
      <Box fill align="center" direction="row" justify="end"><Star size="medium" color="#f1e05a" />{item.stargazers_count}</Box>
    </Box>
  );
};

export default SearchResult;
