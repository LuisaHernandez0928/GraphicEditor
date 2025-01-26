import { EEdge, IPoint, IRect, IRectImpl, IView } from '@globalTypes/types';

export const generateId = (): string => {
  // TODO: usar el uid
  return Date.now().toString();
};

export class Rect implements IRectImpl {
  width: number;
  height: number;
  left: number;
  top: number;

  constructor(source: IView | IRect) {
    let rect: IRect | null = null;
    if ('viewType' in source) rect = source.rect;
    else rect = source;
    this.width = rect.width;
    this.height = rect.height;
    this.left = rect.left;
    this.top = rect.top;
  }

  createRect(left: number, top: number, width: number, height: number): Rect {
    return new Rect({ left, top, width, height });
  }

  isPointContained({ x, y }: IPoint, offset: number = 0): boolean {
    const { left, top } = this;
    const l = left - offset;
    const t = top - offset;
    const r = left + this.width + offset;
    const b = top + this.height + offset;
    return x >= l && x <= r && y >= t && y <= b;
  }

  getNearestPivot(p: IPoint, proximity: number): EEdge {
    const { left, top, height, width } = this;

    // Define proximity rectangles
    const leftRect = this.createRect(
      left - proximity,
      top - proximity,
      proximity * 2,
      height + proximity * 2
    );
    const rightRect = this.createRect(
      left + width - proximity,
      top - proximity,
      proximity * 2,
      height + proximity * 2
    );
    const topRect = this.createRect(
      left - proximity,
      top - proximity,
      width + proximity * 2,
      proximity * 2
    );
    const bottomRect = this.createRect(
      left - proximity,
      top + height - proximity,
      width + proximity * 2,
      proximity * 2
    );

    // Map rectangles to edges
    const edgeMapping: [EEdge, Rect][] = [
      [
        EEdge.TOPLEFT,
        this.createRect(
          left - proximity,
          top - proximity,
          proximity * 2,
          proximity * 2
        ),
      ],
      [
        EEdge.BOTTOMLEFT,
        this.createRect(
          left - proximity,
          top + height - proximity,
          proximity * 2,
          proximity * 2
        ),
      ],
      [
        EEdge.TOPRIGHT,
        this.createRect(
          left + width - proximity,
          top - proximity,
          proximity * 2,
          proximity * 2
        ),
      ],
      [
        EEdge.BOTTOMRIGHT,
        this.createRect(
          left + width - proximity,
          top + height - proximity,
          proximity * 2,
          proximity * 2
        ),
      ],
      [EEdge.LEFT, leftRect],
      [EEdge.TOP, topRect],
      [EEdge.RIGHT, rightRect],
      [EEdge.BOTTOM, bottomRect],
    ];

    // Find the first matching edge
    for (const [edge, rect] of edgeMapping) {
      if (rect.isPointContained(p)) {
        return edge;
      }
    }

    // Default case
    return EEdge.NONE;
  }
}
