import { ECursorType, EEdge } from '@globalTypes/types';

export const CURSOR_DICT: Record<EEdge, ECursorType> = {
  l: ECursorType.VERTICALSIDE,
  r: ECursorType.VERTICALSIDE,
  t: ECursorType.HORIZONTALSIDE,
  b: ECursorType.HORIZONTALSIDE,
  tl: ECursorType.CROSSLEFT,
  br: ECursorType.CROSSLEFT,
  bl: ECursorType.CROSSRIGHT,
  tr: ECursorType.CROSSRIGHT,
  n: ECursorType.DEFAULT,
};
