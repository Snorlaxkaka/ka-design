import React from 'react'
import { render } from '@testing-library/react'
import { Input, InputProps } from './input'

describe('测试 Input 组件', () => {
  it('应该正确渲染默认的 Input', () => {
    const defaultProps: InputProps = {
      placeholder: 'test-input',
    }
    const { getByPlaceholderText } = render(<Input {...defaultProps} />)
    const element = getByPlaceholderText('test-input') as HTMLInputElement
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('curry-input-inner')
  })

  it('应该正确渲染带有禁用状态的 Input', () => {
    const disabledProps: InputProps = {
      disabled: true,
      placeholder: 'disabled-input',
    }
    const { getByPlaceholderText } = render(<Input {...disabledProps} />)
    const element = getByPlaceholderText('disabled-input') as HTMLInputElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
  })

  it('应该正确渲染带有图标的 Input', () => {
    const iconProps: InputProps = {
      icon: 'search',
      placeholder: 'icon-input',
    }
    const { container, getByPlaceholderText } = render(<Input {...iconProps} />)
    const element = getByPlaceholderText('icon-input') as HTMLInputElement
    expect(element).toBeInTheDocument()
    const iconElement = container.querySelector('.icon-wrapper')
    expect(iconElement).toBeInTheDocument()
  })

  it('应该正确渲染带有前缀的 Input', () => {
    const prependProps: InputProps = {
      prepend: 'https://',
      placeholder: 'prepend-input',
    }
    const { container, getByPlaceholderText } = render(
      <Input {...prependProps} />
    )
    const element = getByPlaceholderText('prepend-input') as HTMLInputElement
    expect(element).toBeInTheDocument()
    const prependElement = container.querySelector('.curry-input-group-prepend')
    expect(prependElement).toBeInTheDocument()
    expect(prependElement).toHaveTextContent('https://')
  })

  it('应该正确渲染带有后缀的 Input', () => {
    const appendProps: InputProps = {
      append: '.com',
      placeholder: 'append-input',
    }
    const { container, getByPlaceholderText } = render(
      <Input {...appendProps} />
    )
    const element = getByPlaceholderText('append-input') as HTMLInputElement
    expect(element).toBeInTheDocument()
    const appendElement = container.querySelector('.curry-input-group-append')
    expect(appendElement).toBeInTheDocument()
    expect(appendElement).toHaveTextContent('.com')
  })
})
