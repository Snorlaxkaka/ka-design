import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// `render` 用于渲染组件，类似于 ReactDOM.render，但它返回一个包含许多有用方法的对象
// `screen` 是一个便捷的工具，用于访问渲染结果中的元素

test('renders learn react link', () => {
  // 渲染 App 组件
  render(<App />);
  
  // 使用正则表达式查找包含 "learn react" 文本的元素
  const linkElement = screen.getByText(/learn react/i);
  
  // 断言该元素在文档中
  expect(linkElement).toBeInTheDocument();
});
