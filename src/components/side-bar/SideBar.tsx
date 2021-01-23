import React from 'react';
// @ts-ignore
import styles from './SideBar.module.less';
import { SideBarPropsType, SideBarStateType } from './types';
import { Item } from '../item/Item';
import { SearchInput } from '../search-input/SearchInput';

export class SideBar extends React.Component<SideBarPropsType, SideBarStateType> {
  state = { inputValue: '' }
  handlerChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    this.setState(prev => ({ ...prev, inputValue: e.target.value }));
  }

  render () {
    return (
      <div className={ styles['sidebar'] }>
        <h3>Объекты на карте:</h3>
        <SearchInput value={ this.state.inputValue } handler={ this.handlerChange } />
        <ul>
          {
            this.state.inputValue
              ?  this.props.position?.filter( item => item.name.includes(this.state.inputValue) )?.map( item => (
                  <Item
                    item={ item }
                    key={ item.id }
                    handler={ this.props.handler }
                  />
                ))
              : this.props.position?.map( item => (
                <Item
                  item={ item }
                  key={ item.id }
                  handler={ this.props.handler }
                />
              ))
          }
        </ul>
      </div>
    );
  }
}