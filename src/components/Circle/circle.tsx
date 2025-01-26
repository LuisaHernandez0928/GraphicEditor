import { CanvasElementProps, EViewType } from '@globalTypes/types';

export function CircleComponent(props: CanvasElementProps<EViewType.CIRCLE>) {
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
        borderRadius: data.radius,
        background: data.fillColor,
        border: isSelected ? '2px solid red' : '1px solid black',
        display: 'inline-block',
        zIndex: 9999,
      }}
    />
  );
}
