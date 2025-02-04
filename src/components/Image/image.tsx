import { CanvasElementProps, EViewType, IImage } from '@globalTypes/types';

interface ImageComponentType extends React.FC<CanvasElementProps<EViewType.IMAGE>> {
  defaultData: () => IImage;
}
export const ImageComponent: ImageComponentType = ({
  data,
  isSelected,
  isHovered,
}) => {
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
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: data.borderColor,
      }}
    />
  );
}

ImageComponent.defaultData = (): IImage => ({
  id: 'dummy-image',
  viewType: EViewType.IMAGE,
  rect: { top: 300, left: 65, width: 40, height: 40 },
  src: 'https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg',
  borderColor: 'black',
});