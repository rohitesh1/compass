import type { TComponentSizeToken, TComponentSizes } from '../../shared';
import type { TStatusBadgeStatus } from '../status-badge';

type TAvatarVariant = 'circle' | 'rounded';

type TAvatarElement = 'button' | 'div' | 'span';

export type {
    TAvatarVariant,
    TAvatarElement,
    TComponentSizes as TAvatarSizes,
    TComponentSizeToken as TAvatarSizeToken,
    TStatusBadgeStatus as TAvatarStatus,
};
