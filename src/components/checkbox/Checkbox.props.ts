import { TCheckboxSizes, TCheckboxState } from './Checkbox.types';

type PCheckbox = {
    labelText?: string;
    state?: TCheckboxState;
    size?: TCheckboxSizes;
    hideLabel?: boolean;
    className?: string;
    borderColor?: string;
};

export default PCheckbox;