import React, { useState } from "react";
import { Box, Button, TextInput, Select } from "grommet";

type SearchProps = {
  onSearch: (searchValue: string, filter: object) => void;
};

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filter, setFilter] = useState<any>({
    name: "Best Match",
    sortBy: "",
    order: "desc"
  });

  return (
    <Box>
      <TextInput
        placeholder="Search Github"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />

      <Select
        options={[
          { name: "Best Match", sortBy: "", order: "desc" },
          { name: "Most Stars", sortBy: "stars", order: "desc" },
          { name: "Fewest Stars", sortBy: "stars", order: "asc" }
        ]}
        value={filter}
        labelKey="name"
        onChange={({ option }) => {
          setFilter(option);
        }}
      />
      <Button
        primary
        label="Search"
        onClick={() => onSearch(searchValue, filter)}
      />
    </Box>
  );
};

export default Search;
