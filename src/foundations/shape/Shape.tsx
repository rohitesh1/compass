import React from 'react';

import { Utils } from '../../shared';

import ShapeRoot from './Shape.root';
import type PShape from './Shape.props';
import {
    DEFAULT_SHAPE_ELEVATION_LEVEL,
    DEFAULT_SHAPE_BORDER_RADIUS,
    DEFAULT_SHAPE_ELEMENT,
    SHAPE_ELEMENTS,
} from './Shape.constants';

const Shape = (props: PShape): JSX.Element => {
    const {
        element = DEFAULT_SHAPE_ELEMENT,
        radius = DEFAULT_SHAPE_BORDER_RADIUS,
        elevation = DEFAULT_SHAPE_ELEVATION_LEVEL,
        elevationOnHover,
        ...rest
    } = props;

    Utils.assert(
        SHAPE_ELEMENTS.includes(element) || Utils.isFunctionalComponent(element),
        `Shape: used element ${element} is unsupported. Please use one supported by the component from this list: ${SHAPE_ELEMENTS.join(
            ', '
        )}`,
        true
    );

    const rootProperties = {
        radius,
        elevation,
        elevationOnHover,
    };

    return <ShapeRoot as={element} {...rootProperties} {...rest} />;
};

export default Shape;
