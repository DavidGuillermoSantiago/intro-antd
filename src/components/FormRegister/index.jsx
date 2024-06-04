import React from "react";
import { useState } from "react";
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom";
import  axios from 'axios';
import authService from '../../services/auth';
import { validatePassword } from "../../utils/validation";

import './FormRegister.css';

const FormRegister = () => {


    const [registerError, setRegisterError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



    const onFinish = async (values) => {
        setLoading(true);
        try {


            const response = await authService.register( values.username, values.email, values.password );
            console.log('registro exitoso:', response.data);

            navigate('/login');


        } catch ( error ) {
            console.error('Error en el registro:', error.response.data);
            setRegisterError(true);
        } finally {
            setLoading(false);
        }
    }

    const onFinishFalided = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setRegisterError(true);
    }

    return (
        <>
            <Card
                title="Registrarse"
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
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor ingrese su usuario',
                            }
                        ]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Nombre" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor ingrese su email',
                            }
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                    </Form.Item>

                    <Form.Item
                        name="password-repet"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor repita su password',
                            },
                            ({ getFieldValue }) => validatePassword({ getFieldValue }),
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Repetir password" />
                    </Form.Item>



                    <Form.Item>
                        { registerError && <p style={{ color: 'red' }}>Falló el registro</p> }
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Registrarse
                        </Button>
                    </Form.Item>
                    ¿Ya tienes cuenta? <a href="">Inicia Sesión</a>
                </Form>
            </Card>
        </>
    );
}

export default FormRegister;