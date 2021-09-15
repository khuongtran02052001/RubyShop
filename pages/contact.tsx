import { Image, Form, Input, InputNumber, Button, notification, Space, Typography } from 'antd'
import BtnLayout from '../styles/Image.module.css'
import React from 'react'

export default function Contact() {
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 10,
        },
    };
    /* eslint-disable no-template-curly-in-string */

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    /* eslint-enable no-template-curly-in-string */

    const onFinish = (values) => {
        console.log(values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const openNotificationWithIcon = type => {
        notification[type]({
            message: 'THÀNH CÔNG',
            description:
                'BẠN ĐÃ GỬI THÀNH CÔNG HÃY ĐỢI PHẢN HỒI!!.',
        });
    };
    return (
        <div >
            <div>
                <Image src='https://scontent.xx.fbcdn.net/v/t1.15752-9/241277156_602139814124501_1567787413840113330_n.png?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_ohc=jl8VSq3A8SUAX_uw9t_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=15e187165e5a439f2a6dc549f16d2ed5&oe=615FCD68' alt='' />
            </div>

            <div style={{ display: 'block', textAlign: 'center', marginTop: 50, }}>
                <Typography.Title>
                    PHẢN HỒI VỚI CHÚNG TÔI BÊN DƯỚI
                </Typography.Title>
            </div>
            <div style={{ backgroundColor: 'white', marginTop: 50 }}>
                <Form  {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} onFinishFailed={onFinishFailed}>
                    <Form.Item
                        name={['user', 'name']}
                        label="Tên"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'email']}
                        label="Email"
                        rules={[
                            {
                                type: 'email', required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'age']}
                        label="Tuổi"
                        rules={[
                            {
                                type: 'number',
                                min: 0,
                                max: 99, required: true,
                            },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['user', 'website']} label="Số Điện Thoại"
                        rules={[
                            {
                                required: true,
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="Nội Dung" rules={[
                        {
                            required: true,
                        },
                    ]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item className={BtnLayout.BTNFORM} wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit" onClick={() => openNotificationWithIcon('success')}>
                            Gửi
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
