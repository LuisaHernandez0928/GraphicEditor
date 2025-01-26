import React from 'react';

import PreviewComponent from '@components/PreviewComponent/previewComponent';
import SideBar from '@components/SideBar/sidebar';

const EditionComponent = (): React.ReactElement => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
      }}
    >
      <div
        style={{
          width: '300px',
          borderRight: '1px solid black',
        }}
      >
        <SideBar />
      </div>
      <div
        style={{
          display: 'flex',
          flex: '1 1 0',
          minWidth: 0,
        }}
      >
        <PreviewComponent />
      </div>
    </div>
  );
};

export default EditionComponent;
