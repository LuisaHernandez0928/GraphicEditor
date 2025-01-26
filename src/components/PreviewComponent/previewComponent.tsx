import React from 'react';

import Canvas from '@components/Canvas/canvas';
import LayersPreview from '@components/LayersPreview/layersPreview';

const PreviewComponent = (): React.ReactElement => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '800px',
          height: '500px',
        }}
      >
        <Canvas />
      </div>
      <div
        style={{
          width: '80%',
          height: '150px',
          marginTop: '24px',
        }}
      >
        <LayersPreview />
      </div>
    </div>
  );
};

export default PreviewComponent;
