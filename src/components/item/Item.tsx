import React from 'react';
// @ts-ignore
import styles from './Item.module.less';
import { ItemPropsType } from './types';

export const Item:React.FC<ItemPropsType> = ({ item, handler }) => (
  <li className={ styles['item'] } onClick={ () => handler(item) }>{ item.name }</li>
);