import { CanvasElementProps, EViewType, IGroup } from '@globalTypes/types';

import { CanvasElement } from '@components/GenericCanvasElement/canvasElement';

interface GroupComponentType extends React.FC<CanvasElementProps<EViewType.GROUP>> {
  defaultData: () => IGroup;
};

export const GroupComponent : GroupComponentType = ({
  data,
  isSelected,
  isHovered
}) => {

  return (
    <div
      style={{
        cursor: isSelected ? 'move' : 'default',
        opacity: isHovered ? 0.7 : 1,
        border: isSelected ? '2px solid red' : '1px dashed black',
        position: 'absolute',
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

GroupComponent.defaultData = (): IGroup => ({
  id: 'dummy-group',
  viewType: EViewType.GROUP,
  rect: { top: 355, left: 65, width: 40, height: 40 },
  children: [],
});