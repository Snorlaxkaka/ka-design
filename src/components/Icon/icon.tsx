import React from 'react'
import classnames from 'classnames'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps | 'disabled'
  className?: string
}

const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props
  // icon-primary
  const classes = classnames('curry-icon', className, {
    [`icon-${theme}`]: theme,
  })

  return <FontAwesomeIcon className={classes} {...restProps} />
}

export default Icon
