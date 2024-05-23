import { DatePicker, ConfigProvider, Button } from 'antd';
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
      <DatePicker />
      <Button type="primary">Primary Button</Button>
    </ConfigProvider>
  )
}

export default App;
