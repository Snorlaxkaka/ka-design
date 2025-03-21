import React, { FC } from 'react';
import './style.scss';
type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
export interface ProgressProps {
    percent: number;
    strokeHeight?: number;
    showText?: boolean;
    styles?: React.CSSProperties;
    theme?: ThemeProps;
}
declare const Progress: FC<ProgressProps>;
export default Progress;
