// import React from 'react'
// import { render, screen } from '@testing-library/react'
// import '@testing-library/jest-dom'
// import Icon, { IconProps, ThemeProps } from './icon'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// // 添加 Font Awesome 图标到库中
// library.add(faCoffee)

// const defaultProps: IconProps = {
//   icon: 'coffee', // 使用 Font Awesome 的 coffee 图标
// }

// describe('test Icon component', () => {
//   it('should render the correct default icon', () => {
//     render(<Icon {...defaultProps} />)
//     const element = screen.getByTestId('curry-icon') as HTMLElement
//     expect(element).toBeInTheDocument()
//     expect(element).toHaveClass('curry-icon')
//     expect(element).not.toHaveClass('icon-primary') // 默认没有主题
//   })

//   it('should render the correct theme class', () => {
//     render(<Icon {...defaultProps} theme="primary" />)
//     const element = screen.getByTestId('curry-icon') as HTMLElement
//     expect(element).toHaveClass('curry-icon', 'icon-primary')
//   })

//   it('should render the correct custom className', () => {
//     render(<Icon {...defaultProps} className="custom-class" />)
//     const element = screen.getByTestId('curry-icon') as HTMLElement
//     expect(element).toHaveClass('curry-icon', 'custom-class')
//   })

//   it('should render the correct props from FontAwesomeIconProps', () => {
//     render(<Icon {...defaultProps} size="2x" color="red" />)
//     const element = screen.getByTestId('curry-icon') as HTMLElement
//     expect(element).toHaveAttribute('data-size', '2x')
//     expect(element).toHaveAttribute('data-color', 'red')
//   })

//   it('should render the correct icon when theme is disabled', () => {
//     render(<Icon {...defaultProps} theme="disabled" />)
//     const element = screen.getByTestId('curry-icon') as HTMLElement
//     expect(element).toHaveClass('curry-icon', 'icon-disabled')
//   })
// })
