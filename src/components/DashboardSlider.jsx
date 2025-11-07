import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules' // ✅ certo no Swiper 11+
import 'swiper/css'
import 'swiper/css/navigation'

export default function DashboardSlider() {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      loop
      slidesPerView={1}
      style={{
        width: '100%',
        height: '400px',
        position: 'relative', // ✅ necessário pras setas sairem certinho
      }}
    >
      <SwiperSlide>
        <img
          src="/src/assets/images/background_home.png"
          alt="Dashboard 1"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/src/assets/images/back2.png"
          alt="Dashboard 2"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/src/assets/images/background_login.png"
          alt="Dashboard 3"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </SwiperSlide>
    </Swiper>
  )
}
