import React, { useState, useEffect, createRef } from "react";
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
  const inputEl = createRef<HTMLDivElement>();


  useEffect(() => {
    const node = inputEl.current;

    const handleKeyPress = async (e) => {
      if (e.which === 13) {
        onSearch(searchValue, filter)
      }
    };

    if (node) {
      node.focus();
      node.addEventListener('keypress', handleKeyPress);
    }

    return () => {
      if (node) {
        node.removeEventListener('keypress', handleKeyPress);
      }
    };

    // eslint-disable-next-line
  }, [inputEl]);

  useEffect(() => {
    onSearch(searchValue, filter);

    // eslint-disable-next-line
  }, [filter]);

  return (
    <Box direction="row">
      <TextInput
        placeholder="Search Github"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        // @ts-ignore
        ref={inputEl}
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
