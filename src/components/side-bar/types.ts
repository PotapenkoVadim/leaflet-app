import { PositionType } from '../../configs/types';
export type SideBarPropsType = {
position:Array<PositionType>|null
handler:(data:PositionType)=>void
};
export type SideBarStateType = {
  inputValue:string
};