import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addLayer, changeCurrentLayer } from '@reducers/editorReducer';

import { RootState } from '@src/store';

import styles from './index.module.css';

const LayersPreview = (): React.ReactElement => {
  const dispatch = useDispatch();
  const layers = useSelector((state: RootState) => state.editor.layers);

  const handleAddLayer = () => {
    dispatch(addLayer());
  };

  const handleChangeCurrentLayer = (newLayerId: number) => {
    dispatch(changeCurrentLayer(newLayerId));
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
      }}
    >
      {Object.keys(layers).map((layer) => (
        <div
          key={layer}
          className={styles.layer}
          onClick={() => {
            handleChangeCurrentLayer(parseInt(layer));
          }}
        >
          {`Layer ${layer}`}
        </div>
      ))}
      <div className={styles.buttonAdd} onClick={handleAddLayer}>
        +
      </div>
    </div>
  );
};

export default LayersPreview;
