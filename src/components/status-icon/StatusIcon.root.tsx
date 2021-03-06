import styled, { css } from 'styled-components';
import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';

import Icon from '../../foundations/icon';
import type { TTheme } from '../../utilities/theme';
import { Utils } from '../../shared';

import type { PStatusIconRoot } from './StatusIcon.props';

const StatusIconRoot = styled(Icon).withConfig({
    shouldForwardProp: (property, validator) =>
        Utils.forceForwardProperty(property, ['glyph', 'size']) ||
        (Utils.blockProperty(property) && validator(property)),
})((props: ThemedStyledProps<PStatusIconRoot, TTheme>): FlattenSimpleInterpolation => {
    const { theme, status } = props;

    return css`
        color: ${theme.badges[status]};
    `;
});

export default StatusIconRoot;
