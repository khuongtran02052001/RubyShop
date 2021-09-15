import React from 'react';
import HeaderPage from './Header'
import FooterPage from './Footer'
import { Layout } from 'antd'
export default function LayoutPage({ children }) {


    return (
        <Layout>
            <HeaderPage />
            {children}
            <FooterPage />
        </Layout>
    )
}

