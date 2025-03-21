import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import './style.scss';
export type ButtonSize = 'large' | 'small';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';
export interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}
/**
 * NativeButtonProps 结合了 BaseButtonProps 和标准的按钮 HTML 属性。
 *
 * @typedef {Object} NativeButtonProps
 * @property {BaseButtonProps} BaseButtonProps - 为按钮组件定义的自定义属性。
 * @property {ButtonHTMLAttributes<HTMLElement>} ButtonHTMLAttributes - 按钮元素的标准 HTML 属性。
 */
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
export declare const Button: FC<ButtonProps>;
export default Button;
