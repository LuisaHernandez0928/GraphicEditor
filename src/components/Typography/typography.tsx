import { CanvasElementProps, EViewType } from '@globalTypes/types';

export function TypographyComponent(
  props: CanvasElementProps<EViewType.TYPOGRAPHY>
) {
  const { data, isSelected, isHovered } = props;
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
      }}
    >
      {data.content}
    </p>
  );
}
