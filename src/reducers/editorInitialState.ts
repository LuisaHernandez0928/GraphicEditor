import {
  ILayer,
  IShapeRectangle,
  EViewType,
  IShapeCircle,
  IImage,
  ITypography,
  IGroup,
} from '@globalTypes/types';

export interface EditorState {
  currentLayer: number;
  hoveredViewID: string | null;
  selectedViewID: string | null;
  layers: Record<number, ILayer>;
}

const mElement1: IShapeCircle = {
  id: 'rect1',
  viewType: EViewType.CIRCLE,
  fillColor: 'orange',
  rect: {
    width: 100,
    height: 100,
    left: 50,
    top: 300,
  },
  radius: '50%',
};

const mElement2: IShapeRectangle = {
  id: 'rect2',
  viewType: EViewType.RECTANGLE,
  fillColor: 'purple',
  rect: {
    width: 100,
    height: 100,
    left: 600,
    top: 300,
  },
};

const mElement3: IImage = {
  id: 'rect3',
  viewType: EViewType.IMAGE,
  rect: {
    width: 200,
    height: 400,
    left: 270,
    top: 90,
  },
  src: 'https://www.shutterstock.com/image-illustration/david-street-style-graphic-designtextile-600nw-2265632523.jpg',
  borderColor: 'black',
};

const mElement4: ITypography = {
  id: 'rect4',
  viewType: EViewType.TYPOGRAPHY,
  rect: {
    width: 200,
    height: 50,
    left: 250,
    top: 10,
  },
  content: 'TEST TEXT with mix case',
  textAlign: 'center',
  fontFamily: 'serif',
  fontSize: '24px',
  color: 'purple',
};

const mElement5: IShapeRectangle = {
  id: 'rect6',
  viewType: EViewType.RECTANGLE,
  fillColor: 'red',
  rect: {
    width: 100,
    height: 100,
    left: 50,
    top: 50,
  },
};

const mElement6: IGroup = {
  id: 'rect5',
  viewType: EViewType.GROUP,
  rect: {
    width: 300,
    height: 300,
    left: 350,
    top: 150,
  },
  children: [mElement5, mElement2],
};

export const editorInitialState: EditorState = {
  currentLayer: 1,
  selectedViewID: null,
  hoveredViewID: null,
  layers: {
    1: {
      views: {
        rect1: mElement1,
        rect2: mElement2,
        rect3: mElement3,
        rect4: mElement4,
      },
    },
    2: {
      views: {
        rect5: mElement6,
      },
    },
  },
};
