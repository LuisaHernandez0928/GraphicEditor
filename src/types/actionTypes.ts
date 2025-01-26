import { IPoint, TViewUnion } from './types';

export interface IActionMove {
  viewId: string;
  point: IPoint;
}

export interface IActionResize {
  viewId: string;
  width: number;
  height: number;
  left: number;
  top: number;
}

export interface IActionCreate {
  view: TViewUnion;
}
