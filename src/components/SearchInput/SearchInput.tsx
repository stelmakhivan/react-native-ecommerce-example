import {FC, useRef, useState} from 'react';
import {TextInput} from 'react-native';

import {Searchbar} from 'react-native-paper';

import {TEST_ID} from './searchInput.testID';
import {SearchInputProps} from './searchInput.types';

const SearchInput: FC<SearchInputProps> = ({onIconPress, onSearch}) => {
  const searchInputRef = useRef<TextInput>(null);

  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: string) => {
    //TODO: implement search logic; render search results
    setSearchText(text);
    onSearch?.(text);
  };

  const handleIconPress = () => {
    searchInputRef.current?.focus();
    onIconPress?.();
  };
  return (
    <Searchbar
      ref={searchInputRef}
      value={searchText}
      placeholder="Search"
      onChangeText={handleSearch}
      onIconPress={handleIconPress}
      testID={TEST_ID.SEARCH_INPUT}
    />
  );
};

export {SearchInput};
