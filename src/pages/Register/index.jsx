import React from 'react'
import LayoutComponent from '../../components/Layout/Index.jsx';
import ImageLogin from '../../components/ImagenLogin';
import FormLogin from '../../components/FormLogin';
import FormRegister from '../../components/FormRegister/index.jsx';

const Login = () => {
  return (
    <LayoutComponent 
      leftColSize={{xs:18, sm:16, md:16, lg:16}}
      rightColSize={{xs:6, sm: 8, md:8, lg: 8}}
      leftContent={<ImageLogin />}
      rightContent={<FormRegister />}
    />
  )
}

export default Login;