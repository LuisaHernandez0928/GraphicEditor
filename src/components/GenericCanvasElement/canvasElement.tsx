import React from 'react';

import { CanvasElementProps, EViewType } from '@globalTypes/types';

import { CircleComponent } from '@components/Circle/circle';
import { GroupComponent } from '@components/Group/group';
import { ImageComponent } from '@components/Image/image';
import { RectangleComponent } from '@components/Rectangle/rectangle';
import { TypographyComponent } from '@components/Typography/typography';

export function CanvasElement<T extends EViewType>(
  props: CanvasElementProps<T>
) {
  const { data, isSelected, isHovered } = props;

  const COMPONENT_MAP: {
    [K in EViewType]: React.ComponentType<CanvasElementProps<K>>;
  } = {
    [EViewType.CIRCLE]: CircleComponent,
    [EViewType.RECTANGLE]: RectangleComponent,
    [EViewType.IMAGE]: ImageComponent,
    [EViewType.GROUP]: GroupComponent,
    [EViewType.TYPOGRAPHY]: TypographyComponent,
  };

  const ComponentToRender = COMPONENT_MAP[data.viewType] as React.ComponentType<
    CanvasElementProps<T>
  >;

  return (
    <ComponentToRender
      data={data}
      isSelected={isSelected}
      isHovered={isHovered}
    />
  );
}
