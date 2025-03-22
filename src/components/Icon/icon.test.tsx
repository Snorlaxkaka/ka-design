import React from 'react'
import { render } from '@testing-library/react'
import Icon, { IconProps } from './icon'

describe('测试 Icon 组件', () => {
  it('应该正确渲染默认的 Icon', () => {
    const defaultProps: IconProps = {
      icon: 'coffee',
    }
    const { container } = render(<Icon {...defaultProps} />)
    const element = container.querySelector('.curry-icon')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('fa-mug-saucer') // 更新为实际的类名
  })

  it('应该正确渲染带有主题的 Icon', () => {
    const themeProps: IconProps = {
      icon: 'coffee',
      theme: 'primary',
    }
    const { container } = render(<Icon {...themeProps} />)
    const element = container.querySelector('.curry-icon')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('icon-primary')
  })

  it('应该正确渲染带有自定义 className 的 Icon', () => {
    const classNameProps: IconProps = {
      icon: 'coffee',
      className: 'custom-class',
    }
    const { container } = render(<Icon {...classNameProps} />)
    const element = container.querySelector('.curry-icon')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('custom-class')
  })
})
