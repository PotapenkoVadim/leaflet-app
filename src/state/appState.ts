import { PositionType } from '../configs/types';
import { observable, makeObservable, action } from 'mobx';

export class appState {
  position:Array<PositionType>|null = null;
  constructor () {
    makeObservable(this, {
      position: observable,
      setPosition: action
    });
  }

  setPosition = (data:Array<PositionType>):void => {
    this.position = data;
  };
}