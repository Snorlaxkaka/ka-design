import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/'

const App: React.FC = () => {
  return (
    <div>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Primary Large Button
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small} disabled>
        Danger Small Button
      </Button>
      <Button btnType={ButtonType.Link} href="https://example.com">
        Link Button
      </Button>
    </div>
  )
}

export default App
