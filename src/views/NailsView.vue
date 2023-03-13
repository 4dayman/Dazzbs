<template>
<div class="hair_wrapper">
  <div class="hair">
    <Slider
      :swiper_data="images"
    />
    <back-to-main page="Манікюр Педикюр Подологія"/>
    <h2>Манікюр Педикюр Подологія</h2>
    <div class="hair_desc">
      <h5>Доглянуті руки та свіжий манікюр — це вже невід’ємна частина зовнішнього вигляду. У Dazz ми пропонуємо послуги обрізного і необрізного манікюру, покриття гель-лаком або еко-покриття, а також альтернативний догляд: бразильський манікюр і японське покриття P. Shine.</h5>
      <div class="hair_desc_img">
          <img src="@/assets/bg_nails_1.jpg" alt="">
      </div>
    </div>
    <Price
      :service_data="services"
      :service2_data="services2"
      :service3_data="services3"
      :service4_data="services4"
      :service5_data="services5"
      :service6_data="services6"
    />
    <div class="services">
      <!-- <h2>Зверніть увагу на інші послуги</h2> -->
      <h2>Перегляньте інші послуги салону</h2>
    <Services/>
    </div>
    <Reviews/>
    
    <div class="call_btn">
      <CallBtn/>
    </div>

  </div>
</div>
</template>

<script>
import Slider from '@/components/Slider'
import Price from '@/components/Price'
import Services from '@/components/Services'
import Reviews from '@/components/Reviews'
import CallBtn from '@/components/UI/CallBtn'
import BackToMain from '@/components/UI/BackToMain'
import Pedicur from '@/data/Pedicur'
import SPA from '@/data/SPA'
import Manicur from '@/data/Manicur'
import NailGrow from '@/data/NailGrow'
import NailsCorection from '@/data/NailsCorection'
import Podology from '@/data/Podology'

export default {
    components: {
    Slider, 
    CallBtn,
    BackToMain,
    Price,
    Services,
    Reviews,
  },
    data() {
      return{
        images: [
          {id:1, url: require('@/assets/nailSlider/img_1.jpg')},
          {id:2, url: require('@/assets/nailSlider/img_2.jpg')},
          {id:3, url: require('@/assets/nailSlider/img_3.jpg')},
          {id:4, url: require('@/assets/nailSlider/img_4.jpg')},
          {id:5, url: require('@/assets/nailSlider/img_5.jpg')},
          {id:6, url: require('@/assets/nailSlider/img_6.jpg')},
          {id:7, url: require('@/assets/nailSlider/img_7.1.jpg')},
        ],
        services: Manicur,
        services2: Pedicur,
        services3: SPA,
        services4: NailGrow,
        services5: NailsCorection,
        services6: Podology,
      }
    },
}
</script>


<style lang="scss" scoped>
.hair{
  position: relative;
    max-width: 1230px;
    margin: 0 auto;
    padding-top: 80px;
    h2{
      padding: 40px 20px 0px 20px;
    }
    @media (max-width: 360px) {
      padding-top: 55px;
    }
}
.hair_desc{
    padding:40px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
    // max-height: 400px;
    overflow: hidden;
    text-align: justify;
    @media (max-width: 560px) {
        grid-template-columns: 1fr;
        max-width: 420px;
        margin: 0 auto;
    }
}
.hair_desc_img{
    max-height: 400px;
    img{
        opacity: 0.6;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.call_btn{
  z-index: 1;
  position: fixed;
  bottom: 80px;
  right: 20px;
}
.services {
  margin-bottom: 50px;
    h2{
        font-size: 36px;
        margin-bottom: 20px;
    }
    h3{
        font-size: 20px;
        margin-bottom: 15px;
        color: #AA957a;
    }
}
</style>