import React from 'react'
import Image from 'next/image'
import { Layout, Typography } from 'antd';
import {
    FacebookFilled, InstagramFilled,
    GooglePlusCircleFilled,
} from '@ant-design/icons'
import HeaderLayout from '../../styles/Layout.module.css'


export default function FooterPage() {
    const { Footer } = Layout;

    return (
        <div>
            <Layout>
                <Footer className={HeaderLayout.footerLayout}>
                    <Typography.Title>
                        Trang Sức
                    </Typography.Title>
                    <Typography.Text>
                        Trang sức hợp với mấy bạn ưa cái đẹp thích màu hồng ghét sự giả dúi , sang sịn mịn , giúp các bạn nhiều người theo
                    </Typography.Text>
                    <Typography.Title>
                        Liên Hệ Với chúng Tôi
                    </Typography.Title>

                    <Typography.Title>
                        <FacebookFilled style={{ marginRight: 10 }} />
                        <InstagramFilled />
                        <GooglePlusCircleFilled style={{ marginLeft: 10 }} />
                    </Typography.Title>

                </Footer>
            </Layout>
        </div>
    )
}
