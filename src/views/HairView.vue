<template>
<div class="hair_wrapper">
  <div class="hair">
    <Slider
      :swiper_data="images"
    />
    <back-to-main page="Перукарські послуги"/>
    <h2>Перукарські послуги</h2>
    <div class="hair_desc">
      <h5>Догляд за волоссям, укладки та стрижки, художні фарбування і тонування для зміни образу – наші hair-стилісти знають секрети найкрасивішого волосся цього міста!
          Експериментуйте з відтінками, формою і довжиною, отримуйте консультацію спеціалістів по підбору форми стрижки, виходу з невдалого фарбування або поверненню до натурального відтінку. Ритуал для волосся після базових процедур поверне вашому волоссю втрачений блиск і сяйво</h5>
      <div class="hair_desc_img">
          <img src="@/assets/bg_hair.jpg" alt="">
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
import Price from '@/components/Price'
import Services from '@/components/Services'
import Reviews from '@/components/Reviews'
import CallBtn from '@/components/UI/CallBtn'
import Slider from '@/components/Slider'
import hairServices from '@/data/hairServices'
import HairCut from '@/data/HairCut'
import HairColor from '@/data/HairColor'
import BackToMain from '@/components/UI/BackToMain'
export default {
    components: {
      Slider,
      CallBtn,
      BackToMain,
      Services,
      Price,
      Reviews,
  },
    data() {
      return{
        images: [
          {id:1, url: require('@/assets/hairSlider/img_1.jpg')},
          {id:2, url: require('@/assets/hairSlider/img_2.jpg')},
          {id:3, url: require('@/assets/hairSlider/img_3.jpg')},
          {id:4, url: require('@/assets/hairSlider/img_4.jpg')},
          {id:5, url: require('@/assets/hairSlider/img_5.jpg')},
          {id:6, url: require('@/assets/hairSlider/img_6.jpg')},
          {id:7, url: require('@/assets/hairSlider/img_7.jpg')},
        ],
        services: HairCut,
        services2: HairColor,
        services3: hairServices,
        services4: hairServices,
        services5: hairServices,
        services6: hairServices,
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
      padding-top: 40px;
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
    overflow: hidden;
    text-align: justify;
    @media (min-width: 768px) {
        max-height: 400px;

    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        row-gap: 20px;
        max-width: 100%;
        margin: 0 auto;
    }
}
.hair_desc_img{
    height: 500px;
        @media (max-width: 768px) {
            height: 300px;
        //   display: none;
        }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.6;
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