import { componentRegistry } from './registry';
import { EViewType } from '@globalTypes/types';

import { CircleComponent } from '@components/Circle/circle';
import { RectangleComponent } from '@components/Rectangle/rectangle';
import { TriangleComponent } from '@components/Triangle/triangle';
import { ImageComponent } from '@components/Image/image';
import { GroupComponent } from '@components/Group/group';
import { TypographyComponent } from '@components/Typography/typography';

// Register each component with its corresponding view type.
componentRegistry.register(EViewType.CIRCLE, CircleComponent);
componentRegistry.register(EViewType.RECTANGLE, RectangleComponent);
componentRegistry.register(EViewType.TRIANGLE, TriangleComponent);
componentRegistry.register(EViewType.IMAGE, ImageComponent);
componentRegistry.register(EViewType.GROUP, GroupComponent);
componentRegistry.register(EViewType.TYPOGRAPHY, TypographyComponent);


