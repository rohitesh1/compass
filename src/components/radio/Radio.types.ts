import type { TIconSize } from '../../foundations/icon';
import type { TTextSizeToken } from '../text';

type TRadioSizeToken = 'sm' | 'md' | 'lg';

type TRadioSize = Extract<TIconSize, 12 | 16 | 20>;

type TRadioDefinition = {
    radioSize: TRadioSize;
    labelSize: TTextSizeToken;
};

export type { TRadioSizeToken, TRadioSize, TRadioDefinition };
