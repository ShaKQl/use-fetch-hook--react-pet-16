import './styles/App.css'

import UseFetchHookTest from './test'
import UseOnclickOutsideTest from './hooks/use-outside-click'
import UseWindowResizeTest from './window-resize'
import ScrollToTopAndBottom from './scroll-top-n-bttm'
function App() {
  
  

  return (
    <>
    <UseFetchHookTest/>
    <UseOnclickOutsideTest/>
    <UseWindowResizeTest/>
    <ScrollToTopAndBottom/>
    </>
  )
}

export default App
