import React, { useState } from 'react'
import {
    Layout, Typography, Tooltip, Input, Drawer, Button,
    Badge, Dropdown, Menu, Avatar, Timeline
} from 'antd';
import {
    LogoutOutlined, UserOutlined, SearchOutlined, FacebookFilled, InstagramFilled, GooglePlusCircleFilled, ShoppingCartOutlined, DownOutlined, MenuOutlined
} from '@ant-design/icons'
import { useSession, signIn, signOut } from "next-auth/client"
import HeaderLayout from '../../styles/Layout.module.css'
import styled from 'styled-components';
import Link from 'next/link'
import Logo from '../../public/LOGO.png'
import Image from 'next/image'
import cookie from 'js-cookie'
const TypographyText = styled.text`
    border-top: 1px solid #E8E8E8;
    border-bottom: 1px solid #E8E8E8;
    border-right: 1px solid #E8E8E8;
    border-left: 1px solid #E8E8E8;
    width:70px;
    display:flex;
    justify-content: center;
`;

export default function HeaderPage() {
    const [session, loading] = useSession()
    const { Header, Content, Footer } = Layout;
    const { Text } = Typography
    const [visible, setVisible] = useState(false);
    const [size, setSize] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [logged, setLogged] = useState('false')
    const showModal = () => {
        setIsModalVisible(true);
    };
    const menu = (
        <Menu>
            <Menu.Item>
                <Link href='/products' passHref>
                    Nhẫn
                </Link>
            </Menu.Item>
            <Menu.Item >
                <Link href='/products' passHref >
                    Bông Tay
                </Link>
            </Menu.Item>
            <Menu.Item >
                <Link href='/products' passHref >
                    Dây Chuyền
                </Link>
            </Menu.Item>
            <Menu.Item >Trâm Cài</Menu.Item>
        </Menu>
    )
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };






    return (
        <>

            <Header className={HeaderLayout.headerlayout}>
                <div >
                    {!session && (
                        <>
                            <a style={{ fontSize: '16px', color: '#000' }} onClick={() => {
                                signIn(); cookie.set('logged', 'true')
                            }}>
                                <UserOutlined /> Đặng Nhập
                            </a>
                        </>
                    )}
                    {session && (
                        <div style={{ display: 'flex', }}>
                            <p>Xin Chào</p> :<p style={{ marginLeft: 10, fontWeight: 'bold' }}> {session.user.name}</p>
                            <Avatar className={HeaderLayout.AVT} src={session.user.image} icon={<UserOutlined />} />
                            <Button className={HeaderLayout.BTNAVT} onClick={() => { signOut(); cookie.remove('logged') }}>Đăng Xuất <LogoutOutlined /></Button>
                        </div>
                    )}

                </div>
                <div className={HeaderLayout.hearderItemsRight}>

                    <Typography.Text className='TypographyTest'>

                        Gọi ngay: 0702972026 - Hỗ trợ 7 ngày trong tuần từ 9h - 21h
                    </Typography.Text>
                    <Input style={{ width: 150 }}
                        suffix={
                            <Tooltip title="Extra information">
                                <SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>} />
                    <TypographyText>
                        VND
                    </TypographyText>

                </div>
                <div className={HeaderLayout.MobileMenu}>

                    <Button type="primary" onClick={showDrawer}>
                        <MenuOutlined />
                    </Button>
                    <Drawer placement="right" onClose={onClose} visible={visible}>



                        <Timeline>
                            <Timeline.Item> <Typography.Text className='TypographyTest'>
                                Gọi ngay: 0702972026 - Hỗ trợ 7 ngày trong tuần từ 9h - 21h
                            </Typography.Text></Timeline.Item>
                            <Timeline.Item><Input style={{ width: 150 }}
                                suffix={
                                    <Tooltip title="Extra information">
                                        <SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                    </Tooltip>} /></Timeline.Item>
                            <Timeline.Item>  <TypographyText>
                                VND
                            </TypographyText></Timeline.Item>
                        </Timeline>
                    </Drawer>
                </div>


            </Header>
            <div className={HeaderLayout.divThreeInOne}>
                <div className={HeaderLayout.ICON} style={{ marginTop: 50 }}>
                    <Typography.Title>
                        <FacebookFilled style={{ marginRight: 10 }} />
                        <InstagramFilled />
                        <GooglePlusCircleFilled style={{ marginLeft: 10 }} />
                    </Typography.Title>
                </div>
                <div>
                    <Typography.Link style={{ cursor: 'pointer' }}>
                        <Image src={Logo} width={244} height={144} alt='' />
                    </Typography.Link>
                </div>
                <div className={HeaderLayout.ICON} style={{ marginTop: 55 }}>
                    <Badge count={5} offset={[10, 10]}>
                        <ShoppingCartOutlined style={{ fontSize: 40 }} />
                    </Badge>
                </div>
            </div>
            <Layout className={HeaderLayout.divContentItem}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <ul style={{ display: 'flex', }}>
                        <li className={HeaderLayout.LIHEADER}>
                            <Link href='/' passHref>
                                <Typography.Link style={{ color: 'black' }}>
                                    TRANG CHỦ
                                </Typography.Link>
                            </Link>
                        </li>
                        <li className={HeaderLayout.LIHEADER}>
                            <Link href='/products' passHref>
                                <Dropdown overlay={menu}>
                                    <Typography.Link style={{ color: 'black' }}>
                                        SẢN PHẨM <DownOutlined />
                                    </Typography.Link>
                                </Dropdown>
                            </Link>
                        </li>
                        <li className={HeaderLayout.LIHEADER}>
                            <Link href='/blog' passHref >
                                <Typography.Link style={{ color: 'black' }}>
                                    BLOG
                                </Typography.Link>
                            </Link>
                        </li>
                        <li className={HeaderLayout.LIHEADER}>
                            <Typography.Link style={{ color: 'black' }}>
                                GIỚI THIỆU
                            </Typography.Link>
                        </li>
                        <li className={HeaderLayout.LIHEADER}>
                            <Link href='/contact' passHref >
                                <Typography.Link style={{ color: 'black' }}>
                                    LIÊN HỆ
                                </Typography.Link>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Layout>
        </>
    )
}
