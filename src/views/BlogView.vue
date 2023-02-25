<template>
<div class="hair_wrapper">
  <div class="hair">
    <Slider
      :swiper_data="images"
    />
    <h2>Hair</h2>
    <div class="hair_desc">
      <h5>Догляд за волоссям, укладки та стрижки, художні фарбування і тонування для зміни образу – наші hair-стилісти знають секрети найкрасивішого волосся цього міста!
          Експериментуйте з відтінками, формою і довжиною, отримуйте консультацію спеціалістів по підбору форми стрижки, виходу з невдалого фарбування або поверненню до натурального відтінку. Ритуал для волосся після базових процедур поверне вашому волоссю втрачений блиск і сяйво</h5>
      <div class="hair_desc_img">
          <img src="@/assets/mainSlider/img_4.jpg" alt="">
      </div>
    </div>
    <Price
      :service_data="services"
    />
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
import Reviews from '@/components/Reviews'
import CallBtn from '@/components/UI/CallBtn'

export default {
    components: {
    Slider, 
    CallBtn,
    Price,
    Reviews,
  },
    data() {
      return{
        images: [
          {id:1, url: require('@/assets/hairSlider/img_1.jpg')},
          {id:1, url: require('@/assets/hairSlider/img_2.jpg')},
          {id:1, url: require('@/assets/hairSlider/img_3.jpg')},
          {id:1, url: require('@/assets/hairSlider/img_4.jpg')},
          {id:1, url: require('@/assets/hairSlider/img_5.jpg')},
          {id:1, url: require('@/assets/hairSlider/img_6.jpg')},
          {id:1, url: require('@/assets/hairSlider/img_7.jpg')},
        ],
        services: [
            {
              id: 1, 
              name: 'Hair',
              title: 'Консультація Hair-стиліста', 
              price: '0 ₴', 
              topPrice: '0 ₴'
            },
            {
              id: 2, 
              name: 'Hair',
              title: 'Стрижка жіноча', 
              price: '1115 ₴', 
              topPrice: '1315 ₴'
            },
            {
              id: 3, 
              name: 'Hair',
              title: 'Стрижка чубчика /Корекція форми стрижки (без миття голови)', 
              price: '1115 ₴', 
              topPrice: '1315 ₴'
            },
            {
              id: 3, 
              name: 'Hair',
              title: 'Стрижка чубчика /Корекція форми стрижки (з миттям голови і укладанням рівного волосся на браш)', 
              price: '1115 ₴', 
              topPrice: '1315 ₴'
            },
        ]
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
    height: 400px;
    overflow: hidden;
    text-align: justify;
    @media (max-width: 560px) {
        grid-template-columns: 1fr;
        max-width: 420px;
        margin: 0 auto;
    }
}
.hair_desc_img{
    height: 500px;
        @media (max-width: 560px) {
          display: none;
        }
    img{
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

</style>