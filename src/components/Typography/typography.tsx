import { CanvasElementProps, EViewType, ITypography } from '@globalTypes/types';

interface TypographyComponentType extends React.FC<CanvasElementProps<EViewType.TYPOGRAPHY>> {
  defaultData: () => ITypography;
};

export const TypographyComponent: TypographyComponentType = ({ data, isSelected, isHovered }) => {
  return (
    <p
      style={{
        opacity: isHovered ? 0.8 : 1,
        cursor: isSelected ? 'move' : 'default',
        fontFamily: data.fontFamily,
        fontSize: data.fontSize ?? '1rem',
        color: data.color ?? 'black',
        textAlign: data.textAlign ?? 'left',
        lineHeight: data.lineHeight,
        letterSpacing: data.letterSpacing,
        fontWeight: data.fontWeight ?? 'normal',
        fontStyle: data.fontStyle ?? 'normal',
        textDecoration: data.textDecoration ?? 'none',
        position: 'absolute',
        top: data.rect.top,
        left: data.rect.left,
        width: 'fit-content',
        border: '1px solid black',
        padding: '0.3rem',
      }}
    >
      {data.content}
    </p>
  );
}
TypographyComponent.defaultData = (): ITypography => ({
  id: 'dummy-typography',
  viewType: EViewType.TYPOGRAPHY,
  rect: { top: 395, left: 65, width: 100, height: 50 },
  content: 'Text',
  fontFamily: 'Arial',
  fontSize: '1rem',
  color: 'black',
  textAlign: 'left',
  lineHeight: 1.5,
  letterSpacing: 0,
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
});
