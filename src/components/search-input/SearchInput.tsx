import React from 'react';
// @ts-ignore
import styles from './SearchInput.module.less'
import { SearchInputType } from './types';

export const SearchInput:React.FC<SearchInputType> = ({ value, handler }) => (
  <input
    type ='search'
    value = { value }
    onChange = { handler }
    placeholder ='Поиск объекта'
    className = { styles['search-input'] }
  />
);