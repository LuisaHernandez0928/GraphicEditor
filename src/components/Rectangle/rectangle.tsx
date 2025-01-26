import { CanvasElementProps, EViewType } from '@globalTypes/types';

export function RectangleComponent(
  props: CanvasElementProps<EViewType.RECTANGLE>
) {
  const { data, isSelected, isHovered } = props;
  return (
    <div
      style={{
        opacity: isHovered ? 0.7 : 1,
        cursor: isSelected ? 'move' : 'default',
        position: 'absolute',
        top: data.rect.top,
        left: data.rect.left,
        width: data.rect.width,
        height: data.rect.height,
        background: data.fillColor,
        zIndex: 9999,
        border: isSelected ? '2px solid red' : '1px solid black',
      }}
    />
  );
}
