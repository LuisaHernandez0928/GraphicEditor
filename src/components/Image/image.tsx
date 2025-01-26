import { CanvasElementProps, EViewType } from '@globalTypes/types';

export function ImageComponent(props: CanvasElementProps<EViewType.IMAGE>) {
  const { data, isSelected, isHovered } = props;

  return (
    <img
      src={data.src}
      alt={data.alt}
      width={data.rect.width}
      height={data.rect.height}
      draggable="false"
      style={{
        cursor: isSelected ? 'move' : 'default',
        opacity: isHovered ? 0.7 : 1,
        position: 'absolute',
        top: data.rect.top,
        left: data.rect.left,
      }}
    />
  );
}
