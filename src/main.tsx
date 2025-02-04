import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Editor from '@pages/editor/editor';
import Landing from '@pages/landing';

import { store } from '@src/store';
import './registry/registerComponents';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="editor" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
