import React, {useState, useCallback} from 'react';

import TableSearchView from './table-search.view';

export default function TableSearchContainer({navigation, onSearch, ...props}) {
  const [value, setValue] = useState("");

  // const handleChange = (value) => {
  //   if (!value) props.onSearch(value);
  //   else setValue(value)
  // }

  const handleSearch = useCallback(() => {
    onSearch(value)
  }, [value])

  return (
    <TableSearchView
      {...props}
      value={value}
      onChangeValue={setValue}
      onSearch={handleSearch}
    />
  );
}
