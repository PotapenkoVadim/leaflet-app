import { PositionType } from "configs/types";

export type ItemPropsType = {
  item:PositionType
  handler:(data:PositionType)=>void
}