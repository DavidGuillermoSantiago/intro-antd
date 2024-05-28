import {DatePicker, ConfigProvider, Button} from 'antd';
import './App.css'
import LayoutComponent from './components/Layout';
import ImageLogin from './components/ImagenLogin/index';
import FormLogin from './components/FormLogin/index'

function App() {

  return (
   <ConfigProvider
   theme={{
    token: {
      colorPrimary: '#1DA57A',
    }
   }}
   >
    <LayoutComponent 
      leftColSize={{xs:0, sm:12, md:8, lg:6}}
      rightColSize={{xs:24, sm: 24, md:16, lg: 18}}
      leftContent={<ImageLogin />}
      rightContent={<FormLogin />}
    />
   </ConfigProvider>
  )
}

export default App
