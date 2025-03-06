import React, { FC } from 'react'
import { ThemeProps } from '../Icon/icon'

// 定义 Progress 组件的属性接口
export interface ProgressProps {
  percent: number // 进度百分比
  strokeHeight?: number // 进度条高度
  showText?: boolean // 是否显示百分比文本
  styles?: React.CSSProperties // 自定义样式
  theme?: ThemeProps // 主题颜色
}

const Progress: FC<ProgressProps> = (props) => {
  const { percent, strokeHeight, showText, styles, theme } = props
  return (
    <div className="curry-progress-bar" style={styles}>
      <div
        className="curry-progress-bar-outer"
        style={{ height: `${strokeHeight}px` }}>
        <div
          className={`curry-progress-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}>
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}

// @ts-ignore
Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: 'primary',
}

export default Progress
