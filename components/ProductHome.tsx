import React, { useState, createElement } from 'react'
import { Layout, Typography, Tooltip, BackTop, Comment, Avatar } from 'antd'
import { DislikeFilled, LikeFilled, LikeOutlined, DislikeOutlined, UpCircleOutlined, } from '@ant-design/icons'
import styled from 'styled-components';
import HeaderLayout from '../styles/Layout.module.css'
import Image from 'next/image'
import Silder from '../public/slider_1.jpg'
import banner from '../public/banner_1.jpg'
import banner2 from '../public/banner_2.jpg'
import banner3 from '../public/banner_3.jpg'
import banner4 from '../public/banner_4.jpg'
import Item from '../public/item.jpg'
import Item1 from '../public/item1.jpg'
import Item2 from '../public/item2.jpg'
import Item3 from '../public/item3.jpg'
import AnimationCSS from '../styles/Animation.module.css'
import moment from 'moment';
import Link from 'next/link';
//styled
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
const DivH1 = styled.div`
    margin-top:100px;
    display:flex;   
    justify-content:center;
`;
const DivH12 = styled.div`
    display:flex;   
    justify-content:center;
`;
const DivImgandButton = styled.div`
    display:flex; 
    justify-content:center;
`;
const DivBackGround = styled.div`
    background-image: url('https://bizweb.dktcdn.net/100/191/458/themes/802014/assets/sec_about.jpg?1628621973697');
    background-repeat: no-repeat;
    width:1170px;
    height: 670px;
    margin: 0 auto;
    position:relative;
    margin-top:100px;
`;
const DivComment = styled.div`
    margin-top:50px;
    margin-left:20%;
`;


const DivLayoutStyled = styled.div`
    margin-right:20px;
    
`;

export default function ProductHome() {
    // State
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
    const { Content, } = Layout;


    // Valid
    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };
    const actions = [
        <>
            <Tooltip key="comment-basic-like" title="Like">
                <span onClick={like}>
                    {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                    <span className="comment-action">{likes}</span>
                </span>
            </Tooltip>
            <Tooltip key="comment-basic-dislike" title="Dislike">
                <span onClick={dislike}>
                    {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                    <span className="comment-action">{dislikes}</span>
                </span>
            </Tooltip>
            <span key="comment-basic-reply-to">Reply to</span>
        </>
    ];





    return (
        <div>
            <Content className={HeaderLayout.divContent}>

                <div style={{ cursor: 'pointer' }} >
                    <Link href='/products' passHref>
                        <Image src={Silder} alt='' width={1905} height={658} />
                    </Link>
                </div>

                <div className={HeaderLayout.divFourInOne} >
                    <Link href='/products' passHref>
                        <div style={{ marginRight: 20, cursor: 'pointer' }} >
                            <Image src={banner} alt='' width={368} height={666} />
                        </div>
                    </Link>
                    <DivLayoutStyled style={{ cursor: 'pointer' }} >
                        <Link href='/products' passHref>
                            <Image src={banner2} alt='' width={370} height={320} />
                        </Link>
                        <Link href='/products' passHref>
                            <div className={HeaderLayout.IMGMARGIN} >
                                <Image src={banner3} alt='' width={370} height={320} />
                            </div>
                        </Link>
                    </DivLayoutStyled>
                    <div style={{ cursor: 'pointer' }}>
                        <Link href='/products' passHref>
                            <Image src={banner4} alt='' width={368} height={666} />
                        </Link>
                    </div>

                </div>

                <DivH1>
                    <h1 style={{ fontSize: 40 }}>Danh m???c s???n ph???m</h1>
                </DivH1>
                <DivH12>
                    <h1>?????????????????????</h1>
                </DivH12>
                <div className={HeaderLayout.DivBTN}>
                    <div>
                        <div className={HeaderLayout.IMGPRO} >
                            <Image src='https://bizweb.dktcdn.net/100/191/458/collections/index-10-min.jpg?v1491141436857' alt='' width={270} height={270} />
                            <Link href='/products' passHref>
                                <Link href='/products' passHref>
                                    <button className={AnimationCSS.buttonANM}>See More</button>
                                </Link>
                            </Link>
                        </div>
                    </div>
                    <div className={HeaderLayout.IMGPRO}>
                        <Image src={Item1} alt='' width={270} height={270} />
                        <Link href='/products' passHref>
                            <button className={AnimationCSS.buttonANM}>See More</button>
                        </Link>
                    </div>
                    <div className={HeaderLayout.IMGPRO}>
                        <Image src={Item2} alt='' width={270} height={270} />
                        <Link href='/products' passHref>
                            <button className={AnimationCSS.buttonANM}>See More</button>
                        </Link>
                    </div>
                    <div className={HeaderLayout.IMGPRO}>
                        <Image src={Item3} alt='' width={270} height={270} />
                        <Link href='/products' passHref>
                            <Link href='/products' passHref>
                                <button className={AnimationCSS.buttonANM}>See More</button>
                            </Link>
                        </Link>
                    </div>
                </div>
                <DivH1>
                    <Typography.Link style={{ fontSize: 40 }}>HOT DEAL</Typography.Link>
                </DivH1>
                <DivH12>
                    <h1>?????????????????????</h1>
                </DivH12>
                <DivImgandButton className={HeaderLayout.IMGBTNDOWN}>
                    <div>
                        <div className={HeaderLayout.IMGPRO}>
                            <Image src={Item} alt='' width={270} height={270} />
                            <h1>Tr??m C??i</h1>
                            <Typography.Title>700000</Typography.Title>
                            <Link href='/products' passHref>
                                <button className={AnimationCSS.buttonANM}>See More</button>
                            </Link>
                        </div>
                    </div>
                    <div className={HeaderLayout.IMGPRO}>
                        <Image src={Item1} alt='' width={270} height={270} />
                        <h1>Tr??m C??i</h1>
                        <Typography.Title>700000</Typography.Title>
                        <Link href='/products' passHref>
                            <button className={AnimationCSS.buttonANM}>See More</button>
                        </Link>
                    </div>
                    <div className={HeaderLayout.IMGPRO}>
                        <Image src={Item2} alt='' width={270} height={270} />
                        <h1>Tr??m C??i</h1>
                        <Typography.Title>700000</Typography.Title>
                        <Link href='/products' passHref>
                            <button className={AnimationCSS.buttonANM}>See More</button>
                        </Link>
                    </div>
                    <div style={{ position: 'relative', display: 'block', textAlign: 'center' }}>
                        <Image src={Item3} alt='' width={270} height={270} />
                        <h1>Tr??m C??i</h1>
                        <Typography.Title>700000</Typography.Title>
                        <Link href='/products' passHref>
                            <button className={AnimationCSS.buttonANM}>See More</button>
                        </Link>
                    </div>
                </DivImgandButton>

                <DivBackGround>
                    <div className={HeaderLayout.divAbout}>
                        <h1>
                            Gi???i thi???u c???a h??ng
                        </h1>
                        <h2>CH??NG T??I CUNG C???P B???N C??C H??NG H??A UNIQUE V??? S???N PH???M C???A CH??NG T??I L?? B???O QU???N REAL.</h2>
                        <h3 style={{ marginLeft: '10%', marginRight: '10%' }}>V???i kinh nghi???m 100 n??m s???n xu???t trang s???c th??? c??ng, ch??ng t??i tin r???ng b???n s??? h??i l??ng v???i s???n ph???m c???a ch??ng t??i. Gi?? c??? ph???i ch??ng, m???u m?? ?????p m???t, m??u s???c ??a d???ng, ch??ng t??i cam k???t s??? l??m b???n h??i l??ng.</h3>
                    </div>
                </DivBackGround>
                <div style={{ marginTop: '50px', textAlign: 'center' }}>
                    <Typography.Title>
                        Kh??ch H??ng ????nh Gi?? Vui V???
                    </Typography.Title>
                </div >
                <DivComment>
                    <Comment
                        actions={actions}
                        author={<a>Ng???c Trink</a>}
                        avatar={
                            <Avatar
                                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/168827680_2421173414680125_7190274272612271409_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=INsBgB4Kn9cAX-qVxGM&_nc_ht=scontent.fsgn2-6.fna&oh=af60690142bf7e26af2a6b990087c861&oe=615FC936"
                                alt="Han Solo"
                            />
                        }
                        content={
                            <p>
                                T??i r???t h??i l??ng v??? s???n ph???m c???a shop mong shop ra nhi???u s???n ph???m h??n ??? , y??u shop
                            </p>
                        }
                        datetime={
                            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                <span>{moment().fromNow()}</span>
                            </Tooltip>
                        }
                    />
                    <Comment
                        actions={actions}
                        author={<a>Minh 0 p??o</a>}
                        avatar={
                            <Avatar
                                src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/150503245_5481216218555990_2152744282182605866_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_M9BBlP42cQAX_s18ib&_nc_ht=scontent.fsgn2-1.fna&oh=bc527b6df5b1e4d09ab8c842be45e989&oe=615E6BD8"
                                alt="Han Solo"
                            />
                        }
                        content={
                            <p>
                                ??y da shop n??y v???a r??? v???a ?????p , ng??? th??ch qu?? ii
                            </p>
                        }
                        datetime={
                            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                <span>{moment().fromNow()}</span>
                            </Tooltip>
                        }
                    />
                    <Comment
                        actions={actions}
                        author={<a>?????i Ya</a>}
                        avatar={
                            <Avatar
                                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/240512099_219955766846920_8747714832278265364_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eumiUbXxIM0AX-k-ocK&tn=F9MyK86rNdvFdojo&_nc_ht=scontent.fsgn2-6.fna&oh=dc5822748cf6fb165820521b8b9f7b7a&oe=615D3500"
                                alt="Han Solo"
                            />
                        }
                        content={
                            <p>
                                Shop n??y uy t??n kh??ng ? , t??i c???n SAO K?? M???I D??M MUA
                            </p>
                        }
                        datetime={
                            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                <span>{moment().fromNow()}</span>
                            </Tooltip>
                        }
                    />
                </DivComment>
                <BackTop>
                    <div style={style}><UpCircleOutlined /></div>
                </BackTop>
            </Content>
        </div>
    )
}
