import React from "react";
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './FormRegister.css';

const FormRegister = () => {

    const onFinish = (values) => {
        console.log('Succes:', values);
    }

    const onFinishFalided = (errorInfo) => {
        console.log('Failed:', errorInfo);
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