import React, { ReactElement, InputHTMLAttributes, FC } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames'
import Icon from '../Icon/index'

type InputSize = 'lg' | 'small'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean
  size?: InputSize
  icon?: IconProp
  prepend?: string | ReactElement
  append?: string | ReactElement
  style?: React.CSSProperties
  className?: string
}

export const Input: FC<InputProps> = (props) => {
  const {
    disabled,
    size,
    icon,
    prepend,
    append,
    style,
    className,
    ...restProps
  } = props
  // 根据属性计算不同样式
  const classes = classNames('curry-input-wrapper', className, {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend,
  })
  return (
    <div className={classes} style={style}>
      {prepend && <div className="curry-input-group-prepend">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input className="curry-input-inner" disabled={disabled} {...restProps} />
      {append && <div className="curry-input-group-append">{append}</div>}
    </div>
  )
}
