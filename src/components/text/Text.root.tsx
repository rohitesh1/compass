import styled, { css } from 'styled-components';
import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';

import { Utils } from '../../shared';
import type { TTheme } from '../../utilities/theme';

import { applyTextColor, applyTextMargin, applyTextStyles } from './Text.mixins';
import type { PTextRoot } from './Text.props';

const TextRoot = styled.p.withConfig<PTextRoot>({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property, ['color', 'size', 'margin', 'weight']) && validator(property),
})((props: ThemedStyledProps<PTextRoot, TTheme>): FlattenSimpleInterpolation => {
    const { theme, inheritLineHeight, color, margin, size, weight } = props;

    return css`
        ${applyTextStyles({ inheritLineHeight, size, weight })};
        ${applyTextColor({ color, theme })};
        ${applyTextMargin({ margin, size })};

        body.enable-animations & {
            transition: color ${theme.animation.fastest} 0s ease-in-out;
        }
    `;
});

export default TextRoot;
