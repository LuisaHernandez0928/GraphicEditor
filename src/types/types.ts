export enum EEdge {
  TOP = 't',
  LEFT = 'l',
  RIGHT = 'r',
  BOTTOM = 'b',
  TOPLEFT = 'tl',
  TOPRIGHT = 'tr',
  BOTTOMLEFT = 'bl',
  BOTTOMRIGHT = 'br',
  NONE = 'n',
}

export enum ECursorType {
  DEFAULT = 'default',
  MOVE = 'move',
  CROSSLEFT = 'nwse-resize',
  CROSSRIGHT = 'nesw-resize',
  HORIZONTALSIDE = 'ns-resize',
  VERTICALSIDE = 'ew-resize',
}

export enum EViewType {
  CIRCLE = 'circle',
  RECTANGLE = 'rectangle',
  TRIANGLE = 'triangle',
  IMAGE = 'image',
  GROUP = 'group',
  TYPOGRAPHY = 'typography',
  TRAPEZOID = 'trapezoid',
}

export interface IPoint {
  x: number;
  y: number;
}

export interface IRect {
  width: number;
  height: number;
  left: number;
  top: number;
}

export interface IRectImpl extends IRect {
  createRect: (
    top: number,
    left: number,
    height: number,
    width: number
  ) => IRect;
  isPointContained: (p: IPoint) => boolean;
  getNearestPivot: (p: IPoint, prox: number) => EEdge;
}

export interface IView {
  id: string;
  viewType: EViewType;
  rect: IRect;
}

export interface IViewImpl extends IView {
  move: (p: IPoint) => void;
}

export interface IGroup extends IView {
  viewType: EViewType.GROUP;
  children: Array<TViewUnion>;
}

export interface IImage extends IView {
  viewType: EViewType.IMAGE;
  src: string;
  alt?: string;
  mask?: IRect;
  opacity?: number;
  borderColor: string;
}

export interface ITypography extends IView {
  viewType: EViewType.TYPOGRAPHY;
  content: string;
  fontFamily: string;
  fontSize: string;
  color: string;
  textAlign: 'left' | 'center' | 'right' | 'justify';
  lineHeight?: number;
  letterSpacing?: number;
  fontWeight?: 'normal' | 'bold' | number;
  fontStyle?: 'normal' | 'italic';
  textDecoration?: 'none' | 'underline' | 'line-through';
}

export interface IShape extends IView {
  fillColor?: string;
  borderRadius?: string;
  borderColor?: string;
  borderSize?: string;
  borderType?: string;
}

export interface IShapeCircle extends IShape {
  viewType: EViewType.CIRCLE;
  radius: string;
}

export interface IShapeRectangle extends IShape {
  viewType: EViewType.RECTANGLE;
}

export interface IShapeTriangle extends IShape {
  viewType: EViewType.TRIANGLE;
  borderLeft: string;
	borderRight: string;
	borderBottom: string;
}

export type TViewUnion =
  | IShapeCircle
  | IShapeRectangle
  | IShapeTriangle
  | IImage
  | IGroup
  | ITypography


export interface ILayer {
  views: Record<string, TViewUnion>;
}

export type DataFromViewType<T extends EViewType> = T extends EViewType.CIRCLE
  ? IShapeCircle
  : T extends EViewType.RECTANGLE
  ? IShapeRectangle
  : T extends EViewType.TRIANGLE
  ? IShapeTriangle
  : T extends EViewType.IMAGE
  ? IImage
  : T extends EViewType.GROUP
  ? IGroup
  : T extends EViewType.TRAPEZOID
  ? IImage
  : ITypography;

export interface CanvasElementProps<T extends EViewType> {
  data: DataFromViewType<T>;
  isSelected: boolean;
  isHovered: boolean;
  defaultData?: () => DataFromViewType<T>;
}

export enum ESidebarPrimaryMenu {
  TEMPLATES = 'Templates',
  ELEMENTS = 'Elements',
  TEXT = 'Text',
  UPLOAD = 'Upload',
  DRAW = 'Draw',
  PROJECTS = 'Projects',
}
