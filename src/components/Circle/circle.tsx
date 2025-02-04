import { CanvasElementProps, EViewType, IShapeCircle } from '@globalTypes/types';

interface CircleComponentType extends React.FC<CanvasElementProps<EViewType.CIRCLE>> {
  defaultData: () => IShapeCircle;
}

export const CircleComponent: CircleComponentType = ({
 data, 
 isSelected,
 isHovered 
}) => {
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

CircleComponent.defaultData = (): IShapeCircle => ({
  id: 'dummy-circle',
  viewType: EViewType.CIRCLE,
  rect: { top: 130, left: 65, width: 40, height: 40 },
  radius: '50%',
  fillColor: 'red',
});
