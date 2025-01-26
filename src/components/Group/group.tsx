import { CanvasElementProps, EViewType } from '@globalTypes/types';

import { CanvasElement } from '@components/GenericCanvasElement/canvasElement';

export function GroupComponent(props: CanvasElementProps<EViewType.GROUP>) {
  const { data, isSelected, isHovered } = props;

  return (
    <div
      style={{
        cursor: isSelected ? 'move' : 'default',
        opacity: isHovered ? 0.7 : 1,
        border: isSelected ? '2px solid red' : '1px solid black',
        position: 'relative',
        top: data.rect.top,
        left: data.rect.left,
        width: data.rect.width,
        height: data.rect.height,
      }}
    >
      {data.children.map((element, index) => (
        <CanvasElement
          key={`${element.id}-${index}`}
          data={element}
          isSelected={isSelected}
          isHovered={isHovered}
        />
      ))}
    </div>
  );
}
