<template>
    <Swiper class="swiper"
    :modules="modules"
    :slides-per-view="1"
    :space-between="1"
    loop
    :scrollbar="{ draggable: true }"
    autoplay
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
        <SwiperSlide 
            v-for="(image, index) in images"
            :key="index"
            @slideChange="onSlideChange"
        >
        <figure class="slide-bgimg">
            <img :src="image.url" />
        </figure>
        <div class="content">
            <p class="title">{{image.title}}</p>
            <span class="desc">{{image.desc}}</span>
            <span v-if="image.desc2" class="desc">{{image.desc2}}</span>
        </div>
        </SwiperSlide>
    </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return{
        images: [
            {
                title: '', 
                desc: '', 
                url: require('@/assets/mainSlider/image_1.png')
                // url: require('@/assets/mainSlider/dazz_1.png')
            },
            {
                // title: 'hair', 
                title: 'Перукарські послуги', 
                desc: 'стрижки укладання зачіски',
                desc2: 'всі види фарбувань догляд та лікування для волосся',
                url: require('@/assets/mainSlider/dazz_2.png')
                // url: require('@/assets/mainSlider/image_2.png')
            },
            {
                // title: 'nails', 
                title: 'Манікюр', 
                desc: 'манікюр педикюр подологія', 
                url: require('@/assets/mainSlider/dazz_3.png')
                // url: require('@/assets/mainSlider/image_3.png')
            },
            {
                title: 'ВІЇ та БРОВИ', 
                desc: 'макіяж брови вії', 
                url: require('@/assets/mainSlider/dazz_4.png')
                // url: require('@/assets/mainSlider/image_4.png')
            },
            {
                title: 'Косметологія', 
                desc: 'косметологія масаж епіляція', 
                url: require('@/assets/mainSlider/dazz_5.png')
                // url: require('@/assets/mainSlider/image_3.png')
            },
            {
                title: 'Подарункові сертифікати', 
                desc: '', 
                url: require('@/assets/mainSlider/dazz_6.png')
            },
            {
                title: '', 
                desc: '', 
                url: require('@/assets/mainSlider/dazz_7.png')
            },
        ]
      }
    },
    setup() {
      const onSwiper = (swiper) => {
      };
      const onSlideChange = () => {
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Autoplay, Pagination, Scrollbar, A11y],
      };
    },
}
</script>

<style lang="scss" scoped>
.swiper{
  z-index: 1;
  position: relative;
  max-width: 1230px;
  @media (min-width: 1230px) {
    margin-top: 20px;
      border-radius: 20px;
  }

}
.slide-bgimg{
    margin: 0 auto;
    height: 70vh;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        // object-fit: scale-down;
    }
}
.content{
    position:absolute;
    top:30%;
    left:10%;
    // width:50%;
    // padding-left:5%;
    // color:#aa957a;
    color: #fff;
    text-shadow: 1px 1px 20px rgb(0, 0, 0);
    .title{

      font-size:2.6em;
      font-weight:bold;
      margin-bottom:30px;
      text-transform: uppercase;
    }
    .desc{
      max-width: 150px;
      display:block;
      font-size:16px;
      line-height:1.4;
      text-transform: uppercase;
      // transform:translateX(50px);
      opacity:1;
      transition:opacity .3s ease, transform .7s ease;
       &.show{
        transform:translateX(0);
        opacity:1;
      }
    }
  }
</style>