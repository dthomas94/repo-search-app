import React from "react";
import { Box, Text } from "grommet";
import { Star } from "grommet-icons";

const SearchResult = ({ item }) => {
  return (
    <Box direction="row" background="white" pad="medium" justify="between" border={{side: 'bottom', size: '1px', color: 'grey'}} fill>
      <Box fill>
        <Text>{item.full_name}</Text>
        <Text>{item.description}</Text>
      </Box>
      <Box fill>{item.language}</Box>
      <Box fill>{item.stargazers_count}</Box>
    </Box>
  );
};

export default SearchResult;
