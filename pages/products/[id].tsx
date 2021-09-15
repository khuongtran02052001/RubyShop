import React, { useEffect, useState } from 'react'
import { GetStaticProps, GetStaticPaths, } from 'next'
import { getPaths, getById } from '../../valid/getProducts'
import { Card, Tag, Divider, Tabs, Button, Typography, Result, Carousel, Rate, Spin, BackTop, notification, Space } from 'antd'
import Image from 'next/image'
import Text from '../../styles/Text.module.css'
import Link from 'next/link'
import cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { SmileOutlined, UpCircleOutlined } from '@ant-design/icons'
export default function PathID({ product }) {
    const [inHover, setHover] = useState(false);
    const [rate, setRate] = useState<string[]>(['tệ hơn vợ thằng đậu', 'tệ', 'bình thường', 'tốt', 'ảo ma canada thật'])
    const [value, setValue] = useState<number>(3)
    const { Meta } = Card;
    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }
    const handleChange = value => {
        setValue(value);
    }

    function onChange(currentSlide: number) {
    }

    const style: React.CSSProperties = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: '50%',
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    };
    const contentStyle: React.CSSProperties = {
        height: '460px',
        color: '#e9e1e1',
        lineHeight: '460px',
        textAlign: 'center',
        background: '#F3F5F7',
        marginTop: '30px',
        position: 'relative',
    };

    const router = useRouter()
    const openNotificationWithIcon = type => {
        notification[type]({
            message: 'Tin Nhắn Từ RubyShop',
            description:
                'Chưa đăng nhập đòi mua ?????',
        });
    };
    if (router.isFallback) {
        return (
            <div style={{ margin: '0 auto', paddingTop: 50 }}>
                <Spin tip="Loading..." size='large' />
            </div>
        )
    }

    const openNotification = () => {
        notification.open({
            message: 'Tin nhắn từ RubyShop ',
            description:
                'Kiện hàng đang được đóng gói ',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };

    return (
        <>
            <div>
                <div style={{ margin: 30, padding: 20, display: 'flex', justifyContent: 'space-around', backgroundColor: 'white' }}>

                    <div className={Text.imgMagnifierContainer}>
                        <Image
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            id={Text.myimage} src={product.image} width={553} height={553} alt="khuong dep trai" />
                        {inHover && <div>
                            <h1 className={Text.test}>xem không khen mai nổi mụn</h1>
                        </div>}
                    </div>
                    <div style={{ width: 300 }}>
                        <h1 >Tên : {product.title}</h1>
                        <h1 className={Text.test}>Giá :{product.price}$</h1>
                        <h3>Loại : {product.category}</h3>
                        <h1>Đánh Giá Sản Phẩm</h1>
                        <span>
                            <Rate tooltips={rate} onChange={handleChange} value={value} />
                            {value ? <span className="ant-rate-text">{rate[value - 1]}</span> : ''}
                        </span>
                        <br></br>
                        <div style={{ marginTop: 20, display: 'block' }}>
                            <Button onClick={() => {
                                if (cookies.get('logged')) {
                                    return openNotification()
                                } else {
                                    openNotificationWithIcon('error')
                                }
                            }}>Buy</Button>

                            <Typography.Title style={{ paddingLeft: 10 }}>or</Typography.Title>
                            <Link href="/products" passHref>
                                <Button>Back</Button>
                            </Link>
                        </div>
                        <Divider style={{ marginTop: 50 }} orientation="center">Size</Divider>
                        <div>
                            <Tag style={{ cursor: 'pointer' }} color="#f50">S</Tag>
                            <Tag style={{ cursor: 'pointer' }} color="#2db7f5">M</Tag>
                            <Tag style={{ cursor: 'pointer' }} color="#87d068">L</Tag>
                            <Tag style={{ cursor: 'pointer' }} color="#108ee9">XL</Tag>
                        </div>
                        <Divider style={{ marginTop: 50 }} orientation="center">Tag</Divider>
                        <div>
                            <h1 style={{ borderBottom: '1px solid' }}>
                                <Typography.Link style={{ color: 'green' }}>
                                    Bông Tai
                                </Typography.Link >
                            </h1>
                            <h1 style={{ borderBottom: '1px solid' }}>
                                <Typography.Link style={{ color: 'green' }}>
                                    Nhẫn
                                </Typography.Link >
                            </h1>
                            <h1 style={{ borderBottom: '1px solid' }}>
                                <Typography.Link style={{ color: 'green' }}>
                                    Áo
                                </Typography.Link >
                            </h1>
                        </div>
                    </div>
                </div>
            </div>



            <div style={{ backgroundColor: 'white' }}>
                <Tabs defaultActiveKey="1" centered>
                    <TabPane style={{ width: 300, margin: '0 auto' }} tab="Mô Tả" key="1">
                        <p style={{ paddingBottom: 40 }}>{product.description}</p>
                        <Image src={product.image} width={553} height={553} alt="khuong dep trai" />
                    </TabPane>


                    <TabPane style={{ width: 300, margin: '0 auto' }} tab="Đánh Giá Sản Phẩm" key="2">
                        <Result
                            title="Hãy đến với phần liên hệ cùng chúng tôi"
                            extra={
                                <Link href="/contact" passHref >
                                    <Button type="primary">
                                        Go
                                    </Button>
                                </Link>
                            }
                        />
                    </TabPane>
                </Tabs>
            </div>
            <div style={{ margin: '0 auto', marginTop: 50, borderTop: '1px solid', borderBottom: '1px solid' }}>
                <Typography.Title >
                    Sản Phẩm Nổi Bật
                </Typography.Title>
            </div>
            <Carousel autoplay afterChange={onChange}>
                <div>
                    <h3 style={contentStyle}>
                        <div style={{ paddingTop: 40 }}>
                            <Image alt='' width={300} height={300} src='https://bizweb.dktcdn.net/thumb/medium/100/191/458/products/9-4-df6e6054-0c41-4235-bc57-be3c8c406cd4.jpg?v=1528211760227' />
                        </div>
                        <Button type='link' style={{ position: 'absolute', top: 370, fontWeight: 'bold', color: 'black', right: 700 }}>Nhẫn vòng ADV</Button>
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <div style={{ paddingTop: 40 }}>
                            <Image alt='' width={300} height={300} src='https://bizweb.dktcdn.net/thumb/medium/100/191/458/products/1-50c08fa3-64b2-4b4b-b347-e8bb9ca7689c.jpg?v=1490840661093' />
                        </div>
                        <Button type='link' style={{ position: 'absolute', top: 370, fontWeight: 'bold', color: 'black', right: 700 }}>Nhẫn tình yêu</Button>
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <div style={{ paddingTop: 40 }}>
                            <Image alt='' width={300} height={300} src='https://bizweb.dktcdn.net/thumb/medium/100/191/458/products/2-1-dbf805ba-d1a4-4eba-8493-44e5c4e2afdb-772592b1-5d3b-459e-a7e4-91ed3b23ef60.jpg?v=1490840598130' />
                        </div>
                        <Button type='link' style={{ position: 'absolute', top: 370, fontWeight: 'bold', color: 'black', right: 700 }}>Bông tai cao cấp</Button>

                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <div style={{ paddingTop: 40 }}>
                            <Image alt='' width={300} height={300} src='https://bizweb.dktcdn.net/thumb/medium/100/191/458/products/14-bc5a7bb8-ed30-457c-a350-cb4fff57cea1.jpg?v=1489925193417' />
                        </div>
                        <Button type='link' style={{ position: 'absolute', top: 370, fontWeight: 'bold', color: 'black', right: 700 }}>Bông tai ngọc trai</Button>
                    </h3>

                </div>
            </Carousel>
            <BackTop>
                <div style={style}><UpCircleOutlined /></div>
            </BackTop>
        </>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getPaths(1)
    return {
        paths,
        fallback: true
    }

}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const product = await getById(params.id)
    return {
        props: {
            product,
        }
    }
}