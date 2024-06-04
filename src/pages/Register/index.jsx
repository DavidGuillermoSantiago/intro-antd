import React from 'react'
import LayoutComponent from '../../components/Layout/Index.jsx';
import ImageLogin from '../../components/ImagenLogin';
import FormLogin from '../../components/FormLogin';
import FormRegister from '../../components/FormRegister/index.jsx';

const Login = () => {
  return (
    <LayoutComponent 
      leftColSize={{xs:12, sm:12, md:12, lg:12}}
      rightColSize={{xs:12, sm: 12, md:12, lg: 12}}
      leftContent={<ImageLogin />}
      rightContent={<FormRegister />}
    />
  )
}

export default Login;