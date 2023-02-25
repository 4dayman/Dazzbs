<template>
    <Swiper class="swiper"
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    loop
    :scrollbar="{ draggable: true }"
    autoplay
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
        <SwiperSlide 
            v-for="image in swiper_data"
            :key="image.id"
        >
        <figure class="slide-bgimg">
            <img :src="image.url" />
        </figure>
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
    props: {
        swiper_data: {
            type: Array,
            default: () => []
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
  @media (min-width: 1230px) {
    margin-top: 20px;
      border-radius: 20px;
  }
}
.slide-bgimg{
    max-width: 100%;
    height: 80vh;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}


</style>