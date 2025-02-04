import { CanvasElementProps, EViewType, IShapeRectangle } from '@globalTypes/types';

interface ReactangleComponentType extends React.FC<CanvasElementProps<EViewType.RECTANGLE>> {
  defaultData: () => IShapeRectangle;
}
export const RectangleComponent: ReactangleComponentType = ({
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
        background: data.fillColor,
        zIndex: 9999,
        border: isSelected ? '2px solid red' : '1px solid black',
      }}
    />
  );
}

RectangleComponent.defaultData = (): IShapeRectangle => ({
  id: 'dummy-rectangle',
  viewType: EViewType.RECTANGLE,
  rect: { top: 190, left: 65, width: 40, height: 40 },
  fillColor: 'red',
  borderRadius: '0',
  borderColor: '#000000',
  borderSize: '1px',
  borderType: 'solid',
});

