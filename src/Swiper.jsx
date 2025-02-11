import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

export default function SwiperCmp() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
                {/* <SwiperSlide>
                    <div className='firstPage-swiper'>

                    </div>                </SwiperSlide> */}

      
        <SwiperSlide>
        <img src='002.jpg' />
        </SwiperSlide>
        <SwiperSlide>
            <img src='001.jpg' />
        </SwiperSlide>
        <SwiperSlide>
        <img src='003.jpg' />
        </SwiperSlide>
        <SwiperSlide>
        <img src='004.jpg' />
        </SwiperSlide>
        <SwiperSlide>
        <img src='005.jpg' />
        </SwiperSlide>
        <SwiperSlide>
        <img src='006.jpg' />
        </SwiperSlide>
        <SwiperSlide>
        <img src='009.jpg' />
        </SwiperSlide>
        <SwiperSlide>
        <img src='007.jpg' />
        </SwiperSlide>
        <SwiperSlide>
        <img src='008.jpg' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
