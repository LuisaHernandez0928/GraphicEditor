import React from 'react';
import { EViewType } from '@globalTypes/types';
import { componentRegistry } from '../../registry/registry';

import styles from './index.module.css';

// A simple utility to capitalize the view type name.
const formatViewType = (viewType: EViewType): string =>
  viewType.charAt(0).toUpperCase() + viewType.slice(1);


export const Sidebar: React.FC = () => {
  // Retrieve all registered view types.
  const registryEntries = componentRegistry.getAll();
  const registeredViewTypes = Object.keys(registryEntries) as EViewType[];

  return (
    <aside className={styles.sidebar}>
      <h4>Available Shapes</h4>
      <ul>
        {registeredViewTypes.map((viewType) => {
          console.log(viewType);
          // Retrieve the component from the registry.
          const ComponentToRender = componentRegistry.get(viewType);
          if (!ComponentToRender) {
            return null;
          }

          // Check if the component provides defaultData.
          let dummyData = null;
          if (
            ComponentToRender.defaultData &&
            typeof ComponentToRender.defaultData === 'function'
          ) {
            dummyData = ComponentToRender.defaultData();
          } else {
            console.warn(
              `Component for viewType "${viewType}" does not provide defaultData.`
            );
            return null;
          }

          return (
            <li key={viewType} style={{ marginBottom: '1.9rem', listStyle: 'none' }}>
              <div className={styles.previewMenu}>
                <div>{formatViewType(viewType)}</div>
                <ComponentToRender
                  data={dummyData}
                  isSelected={false}
                  isHovered={false}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
