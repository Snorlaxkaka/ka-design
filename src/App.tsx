import React from 'react'
import Button from './components/Button/'
import Icon from './components/Icon'
import Input from './components/Input'
import Progress from './components/Progress'
const App: React.FC = () => {
  return (
    <div>
      <div>
        按钮示例
        <Button btnType="default" size="large">
          Primary Large Button
        </Button>
        <Button btnType="danger" size="small" disabled>
          Danger Small Button
        </Button>
        <Button btnType="link" href="https://example.com">
          Link Button
        </Button>
        <Button>111</Button>
        <Button size="small" btnType="primary">
          小蓝按钮
        </Button>
        <Button onClick={() => alert(1)}> 111</Button>
      </div>

      <div>
        Icon示例
        <Icon icon="coffee" theme="secondary" size="10x" />
        <Icon icon="times" theme="danger" />
        <Icon icon="info-circle" theme="info" />
        <Icon icon="exclamation-triangle" theme="warning" />
        <Icon icon="sun" theme="light" />
        <Icon icon="moon" theme="dark" />
      </div>

      <div>
        输入框示例
        <Input
          icon="search"
          style={{ width: '300px' }}
          placeholder="input with ch"
        />
        <Input size="small" />
        <Input size="small" prepend="https://" />
        <Input size="large" append=".com" />
      </div>

      <div>
        进度条示例
        <Progress
          percent={50}
          showText={true}
          strokeHeight={20}
          theme="secondary"
        />
        <Progress
          percent={70}
          strokeHeight={30}
          theme="danger"
          showText={true}
        />
      </div>
    </div>
  )
}

export default App
