import React from "react";
import { useState } from "react";
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import './FormLogin.css';

const FormLogin = () => {

    const [loginError, setLoginError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 


    const user = {
        username: 'admin',
        password: 'admin'
    }

    const onFinish = async (values) => {
        console.log(values);
        setLoading(true);
        try {
            const response = await axios.post('https://api-books-omega.vercel.app/getin/signin', {
                email: values.email,
                password: values.password
            });
            console.log('Inicio de sesión exitoso:', response.data);
            localStorage.setItem('token', response.data.token);
            navigate('/');
        } catch ( error ) {
            console.error('Error en el inicio de sesión:', error.response.data);
            setLoginError(true);
        } finally {
            setLoading(false);
        }
    }

    const onFinishFalided = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setLoginError(true);
    }

    return (
        <>
            <Card
                title="Bienvenido de nuevo!"
                bordered={false}
                className="responsive-card">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFalided}

                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor ingresa tu correo',
                            }
                        ]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Usuario" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor ingrese su password',
                            }
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        {loginError && <p style={{ color: 'red' }}>Credenciales incorrectas. Inténtalo de nuevo.</p>}
                        <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
                            Iniciar Sesión
                        </Button>
                    </Form.Item>
                    ¿Aún no tienes cuenta? <a href="">Regístrate</a>
                </Form>
            </Card>
        </>
    );
}

export default FormLogin;