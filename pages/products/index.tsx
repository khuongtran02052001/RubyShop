import React, { useState } from "react";
import styled from "styled-components";
import { getProducts } from "../../valid/getProducts";
import { Slider, Card, Button, Row, Col, Breadcrumb, Collapse, message, Space, Typography, InputNumber, Modal, Table, BackTop, notification } from 'antd';
import Image from 'next/image'
import { HomeOutlined, ShoppingCartOutlined, FireOutlined, CloseOutlined, UpCircleOutlined, SmileOutlined } from '@ant-design/icons'
import ImageLayout from '../../styles/Image.module.css'
import { GetStaticProps, } from 'next'
import Link from 'next/link'
import cookies from 'js-cookie'
import { session, useSession } from "next-auth/client";
export default function Products({ products }) {
  const [session, loading] = useSession()
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
  // modal
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');
  const [allValue, setALlValue] = useState()
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('Sản Phẩm Đã Được Lưu Vào Giỏ Hàng');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Tin Nhắn Từ RubyShop',
      description:
        'Chưa đăng nhập đòi mua ?????',
    });
  };
  const openNotification = () => {
    notification.open({
      message: 'Tin nhắn từ RubyShop ',
      description:
        'Kiện hàng đang được đóng gói ',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  interface dataType {
    price: number,
    title: string,
    image: string,
    id: number
  }
  const [dataProducts, setDataProducts] = useState<dataType[]>([])
  const { Panel } = Collapse;
  const { Meta } = Card;
  const [inputValue, setInputValue] = useState<number[]>([1, 10000]);
  // styled
  const DivAll = styled.div`
    background-color: white;
  `;
  const text1 = `
Thức dậy với một đôi mắt thâm quầng mệt mỏi hay sưng mọng thật sự là một cơn ác mộng đối với phái đẹp. Thật may mắn thay, những viên đá trong tủ lạnh của chúng ta có thể xua tan nỗi lo này. Hãy sử dụng viên đá lạnh bọc vào khăn hoặc vải mỏng, chườm xung quanh vùng bọng mắt bị thâm. Hơi lạnh tỏa ra từ đá sẽ giúp bạn dễ chịu hơn và giảm sự sưng phồng, thâm quầng ở mắt.
`;
  const text4 = `
Rửa mặt buổi sáng là thói quen ai cũng có nhưng đừng làm qua loa. Nên sử dụng nước ấm và một lượng sữa rửa mặt nhỏ bằng một đồng xu trên ngón tay của bạn hoặc trên một chiếc khăn ẩm, sạch sẽ. Rửa sạch và lau khô bằng khăn giấy mềm nếu bạn đang bị mụn.

Đừng rửa mặt quá nhiều lần trong ngày bởi việc này chỉ khiến da bạn thêm khó chịu và thiếu độ ẩm.`
  const text2 = `
Nhiều cô nàng lầm tưởng rằng phải kỳ cọ mạnh mới tẩy được da chết.Cho dù da bạn có đang nhờn dầu, bám bụi và nhiều cặn bẩn đến như thế nào cũng đừng chà xát mạnh vì hành động này có thể gây kích ứng da.Chỉ nên dùng 3 ngón là ngón giữa, ngón trỏ và ngón đeo nhẫn và chuyển động theo vòng tròn để làm sạch da
    `

  const success = () => {
    message.success('Thêm Thành Công');
  };
  // Tổng Tiền
  const totalValue = (accmulator: number, currentValue: any) => {
    return Math.floor(accmulator += currentValue.price)
  }

  const removeData = (id) => {
    const remove = dataProducts.filter((item) => {
      console.log({ item, id });
      // em dang suy nghi~ la` (item) => (item...) voi81 cái anh cũng như nhau mà , đều return
      // dung roi, a dang debug thoi, gio a log ra duoc id la undefined kia , vay dong nghia la` id em truyen` vao` sai uh, de a log tiep
      // record cua em khong co id kia 
      // sao cái button này anh phải truyền thêm á
      // phai truyen them chứ, khong truyen dau ra id de xai
      return item.id !== id
    })
    setDataProducts(remove)
  }






  const buyHandle = () => {
  }
  // TABLE
  const columns = [{
    title: 'Ảnh Sản Phẩm',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => {
      return (
        <div>
          <Image src={record.productimage} alt='' width={100} height={100} />
          <div>
            <Button onClick={() => { removeData(record.id) }} type="text">{record.removeproducts}<CloseOutlined /></Button>
          </div>
        </div>
      );
    },
  },


  {
    title: 'Tên Sản Phẩm',
    dataIndex: 'productname',
    key: 'productname',
  },
  {
    title: 'Giá Sản Phẩm',
    dataIndex: 'price',
    key: 'price',
  },
  ];


  const data = dataProducts.map((product) => {
    return {
      id: product.id,
      key: product.id,
      productimage: product.image,
      removeproducts: `Xoá Sản Phẩm`,
      productname: product.title,
      price: product.price
    }
  })

  return <div>
    <div style={{ margin: 29 }}>
      <Breadcrumb>
        <Breadcrumb.Item href="/">
          <HomeOutlined /> Trang Chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/products">
          <FireOutlined style={{ color: 'red' }} />
          <span>Sản Phẩm</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>

    <div className={ImageLayout.divLayout}>

      <div style={{ display: 'flex', flexWrap: 'wrap', width: '60%', justifyContent: 'center', }}>
        {products.map((item) => {
          return (
            <>
              <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                  <Card
                    key={item.id}
                    hoverable
                    style={{ width: 240, margin: 30, padding: 20, boxShadow: '5px 5px' }}
                    cover={
                      <>
                        <figure className={ImageLayout.snip0016}>
                          <Image alt="example" src={item.image} width={180} height={180} />
                          <figcaption>
                            <h2 ><span style={{ fontSize: 35 }}>{item.price}$</span> Category :</h2>
                            <p>{item.category}</p>
                            <a href="#"></a>
                          </figcaption>
                        </figure>
                      </>
                    }
                  >

                    <Meta style={{ color: 'green' }} title={item.title} />

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
                      <Link href={`/products/${item.id}`} passHref>
                        <Button >More</Button>
                      </Link>
                      <Button onClick={() => {
                        if (cookies.get('logged')) {
                          return openNotification()
                        } else {
                          openNotificationWithIcon('error')
                        }
                      }}>Buy</Button>
                      <Space>
                        <Button onClick={() => { success(); showModal(); setDataProducts([...dataProducts, item]); }}>+<ShoppingCartOutlined /></Button>
                      </Space>

                    </div>
                  </Card>
                </Col>
              </Row>

            </>
          )
        })}
        <Modal
          title={` giỏ hàng`}
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          width={1000}
        >
          <h1>Tổng Sản Phẩm: {dataProducts.length} </h1>
          <Table columns={columns} dataSource={data} size="middle" />
          <h4>
            <Button onClick={handleCancel} type='text'>
              Tiếp Tục Xem Sản Phẩm
            </Button>
          </h4>
          <Button type='text'>
            <h2 style={{ borderTop: '1px solid' }}>
              Tổng Tiền: {dataProducts.reduce(totalValue, 0)}$
            </h2>
          </Button>
        </Modal>
      </div>

      <div className={ImageLayout.TrenNone} >
        <Collapse ghost className={ImageLayout.None}>
          <Panel header="Tips cho ngày mới đẹp hơn" key="1">
            <p>{text1}</p>
          </Panel>
          <Panel header="Tips rửa mặt cho chị em" key="2">
            <p>{text4}</p>
          </Panel>
          <Panel header="Tips Tắm không bị tổn thương" key="3">
            <p>{text2}</p>
          </Panel>
        </Collapse>
        <div className={ImageLayout.sapNone} >
          <Typography.Title>
            Theo Mức Giá

          </Typography.Title>
          <Slider
            min={1}
            max={10000}
            onChange={setInputValue}
            range
          />

          Từ <InputNumber
            min={1}
            max={inputValue[1]}
            style={{ margin: '0 16px' }}
            value={inputValue[0]}
            onChange={(value) => setInputValue([value, inputValue[1]])}
          />
          Đến
          <InputNumber
            min={inputValue[0]}
            max={10000}
            style={{ margin: '0 16px' }}
            value={inputValue[1]}
            onChange={(value) => setInputValue([inputValue[0], value])}
          />
          <Button style={{ marginTop: 20, width: '100%' }}>
            Lọc Giá
          </Button>
        </div>
      </div>
      <BackTop>
        <div style={style}><UpCircleOutlined /></div>
      </BackTop>
    </div>
  </div >
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts(18);
  return {
    props: {
      products
    },
  }
}
