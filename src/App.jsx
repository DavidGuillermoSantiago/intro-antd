import { DatePicker, ConfigProvider, Button } from 'antd';
import LayoutComponent from './components/Layout/Index.jsx';
import './App.css'

function App() {

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#5227c9'
        }
      }}
    >
      <LayoutComponent />
    </ConfigProvider>
  )
}

export default App;
