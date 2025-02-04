import { CanvasElementProps, EViewType, IShapeTriangle } from '@globalTypes/types';


interface TriangleComponentType extends React.FC<CanvasElementProps<EViewType.TRIANGLE>> {
  defaultData: () => IShapeTriangle;
}
export const TriangleComponent: TriangleComponentType = ({
  data,
  isSelected,
  isHovered,
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
        zIndex: 9999,
        border: isSelected ? '2px solid red' : '0px solid black',
        borderLeft: data.borderLeft,
        borderRight: data.borderRight,
        borderBottom: data.borderBottom,
      }}
    />
  );
}

TriangleComponent.defaultData = (): IShapeTriangle => ({
  id: 'dummy-triangle',
  viewType: EViewType.TRIANGLE,
  rect: { top: 240, left: 65, width: 0, height: 0 },
  borderLeft: '20px solid transparent',
  borderRight: '20px solid transparent',
  borderBottom: '40px solid red',
});