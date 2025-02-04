import React from 'react';
import { CanvasElementProps, EViewType } from '@globalTypes/types';
import { componentRegistry } from '../../registry/registry'; // adjust the import path as needed

export function CanvasElement<T extends EViewType>(
  props: CanvasElementProps<T>
) {
  const { data, isSelected, isHovered } = props;

  // Look up the component for the given viewType using the registry.
  const ComponentToRender = componentRegistry.get(data.viewType) as React.ComponentType<
    CanvasElementProps<T>
  >;

  // If no component is registered for the given view type, return null or a fallback.
  if (!ComponentToRender) {
    console.warn(`No component registered for viewType: ${data.viewType}`);
    return null;
  }

  return (
    <ComponentToRender
      data={data}
      isSelected={isSelected}
      isHovered={isHovered}
    />
  );
}

