import React from 'react'
import { render } from '@testing-library/react'
import Progress, { ProgressProps } from './progress'

describe('测试 Progress 组件', () => {
  it('应该正确渲染默认的 Progress', () => {
    const defaultProps: ProgressProps = {
      percent: 50,
    }
    const { container } = render(<Progress {...defaultProps} />)
    const element = container.querySelector('.curry-progress-bar-inner')
    expect(element).toBeInTheDocument()
    expect(element).toHaveStyle('width: 50%')
    expect(element).toHaveClass('color-primary')
  })

  it('应该正确渲染带有自定义高度的 Progress', () => {
    const heightProps: ProgressProps = {
      percent: 50,
      strokeHeight: 20,
    }
    const { container } = render(<Progress {...heightProps} />)
    const outerElement = container.querySelector('.curry-progress-bar-outer')
    expect(outerElement).toBeInTheDocument()
    expect(outerElement).toHaveStyle('height: 20px')
  })

  it('应该正确渲染带有自定义主题的 Progress', () => {
    const themeProps: ProgressProps = {
      percent: 50,
      theme: 'danger',
    }
    const { container } = render(<Progress {...themeProps} />)
    const element = container.querySelector('.curry-progress-bar-inner')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('color-danger')
  })

  it('应该正确渲染带有文本显示的 Progress', () => {
    const textProps: ProgressProps = {
      percent: 50,
      showText: true,
    }
    const { container } = render(<Progress {...textProps} />)
    const textElement = container.querySelector('.inner-text')
    expect(textElement).toBeInTheDocument()
    expect(textElement).toHaveTextContent('50%')
  })
})
