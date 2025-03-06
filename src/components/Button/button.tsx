import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'

export enum ButtonSize {
  Large = 'large',
  Small = 'small',
}
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}
export interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children: React.ReactNode
  href?: string
}
/**
 * NativeButtonProps 结合了 BaseButtonProps 和标准的按钮 HTML 属性。
 *
 * @typedef {Object} NativeButtonProps
 * @property {BaseButtonProps} BaseButtonProps - 为按钮组件定义的自定义属性。
 * @property {ButtonHTMLAttributes<HTMLElement>} ButtonHTMLAttributes - 按钮元素的标准 HTML 属性。
 */
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

//FC<ButtonProps> 定义一个函数组件，这个组件的属性必须符合 ButtonProps 类型
export const Button: FC<ButtonProps> = (props) => {
  const { btnType, className, disabled, size, children, href, ...restProps } =
    props

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  })
  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}
// @ts-ignore
Button.defaultProps = {
  disabled: false,
  btnType: 'default',
}

export default Button
