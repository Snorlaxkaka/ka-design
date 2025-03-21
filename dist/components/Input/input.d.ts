import React, { ReactElement, InputHTMLAttributes, FC } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './style.scss';
type InputSize = 'large' | 'small';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProp;
    prepend?: string | ReactElement;
    append?: string | ReactElement;
    style?: React.CSSProperties;
    className?: string;
}
export declare const Input: FC<InputProps>;
export {};
