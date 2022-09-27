import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'

import './App.less'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import VerticalSlides from './components/VerticalSlides/VerticalSlides';

const logo = require('./assets/image.png')
const swiper = require('./assets/swiper.png')

const App = () => {
  return (
    <Layout className='relative h-screen'>
      <Header className='p-10'>
        <img src={logo} alt="w6logo" className='h-30 w-60' />
      </Header>
      <Content className='h-[calc(100vh-210px)] flex place-items-center justify-center'>
        <>
          <Swiper
            spaceBetween={50}
            pagination={{
              clickable: true,
              // type: 'progressbar'
            }}
            // scrollbar={{
            //   hide: true
            // }}
            modules={[Pagination]}
            className='!h-[600px]'
          >
            <SwiperSlide>
              <div className='text-center'>
                <p>I'll be presenting about...</p>
                <img src={swiper} className='w-5/12 h-5/12 block m-auto' alt='swiper' />
              </div>
            </SwiperSlide>
            <SwiperSlide className='text-left px-96 flex place-items-center'>
              <p className='text-left'>
                <span className='text-7xl font-semibold text-[#632EF6]'>Swiper</span> is the most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <VerticalSlides />
            </SwiperSlide>
          </Swiper>
        </>
      </Content>
      <Footer className='text-center p-6'>
        <p>Made with so much love ❤👀👀</p>
      </Footer>
    </Layout>
  )
}

export default App;