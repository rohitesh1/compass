import React from 'react';

import { Utils } from '../../shared';

import type PTag from './Tag.props';
import TagRoot from './Tag.root';
import { DEFAULT_TAG_VARIANT, DEFAULT_TAG_SIZE } from './Tag.constants';

const Tag = (props: PTag): JSX.Element => {
    const { variant = DEFAULT_TAG_VARIANT, size = DEFAULT_TAG_SIZE, text, ...rest } = props;

    const hasText = Utils.isString(text) && text.length > 0;

    Utils.assert(
        hasText,
        'Tag: This component is intended to be used with text. Please provide a string to it for correct usage.'
    );

    return (
        <TagRoot element={'span'} size={size} variant={variant} {...rest}>
            {text}
        </TagRoot>
    );
};

export default Tag;
