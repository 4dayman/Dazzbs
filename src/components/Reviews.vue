<template>
    <div class="reviews">
        <h2>Відгуки наших клієнтів</h2>
        <Swiper class="reviews_swiper"
        :modules="modules"
        :slides-per-view="1"
        :space-between="10"
        loop
        :pagination="{ clickable: true}"
        :breakpoints="{
            '1024': {
                slidesPerView: 2,
                loop: true,
                grabCursor: true
            }
        }"
    >
            <SwiperSlide 
                v-for="(review, i) in reviews"
                :key="i"
            >
                <div class="review_card">
                    <div class="review_text">
                        <h5 class="desc">{{review.desc}}</h5>
                    </div>
                    <div class="author_info">
                        <div class="info_img">
                            <img :src="review.url" alt="">
                        </div>
                        <div class="info_name">
                            <h4 class="title">{{review.athor}}</h4>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return{
        reviews: [
            {
                id:1, 
                athor: 'Людмила Л.', 
                desc: 'Посетила салон впервые и осталась очень довольна. Делала маникюр и стрижку. Приветливые и очень внимательные мастера, спокойная атмосфера. Спасибо мастеру Эмилии, администратору Валентине за внимание к клиентам. Рекомендую всем, кто хочет быть красивым, посетить салон.', 
                url: require('../assets/reviews/ЛюдмилаЛ.png')
            },
            {
                id:2, 
                athor: 'Olesya Tsybulko', 
                desc: 'Прекрасный сервис. Делала коррекцию и покраску в 4 руки, что значительно экономит время. Лена очень качественно и деликатно делает маникюр и коррекцию. Никита отличный колорист, стрижку тоже сделал на отлично. Кофе был прекрасным бонусом от администратора Валентины. Сервис на высшем уровне, спасибо.', 
                url: require('../assets/reviews/OlesyaTsybulko.png')
            },
            {
                id:3, 
                athor: 'Anna Buiko', 
                desc: 'Только в этом салоне парикмахеры рассказали мне о правильном отношении к волосам, научили укладываться феном самостоятельно без затекания рук и подобрали идеальный уход, учитывая длинну волос и приём гормональных препаратов, влияющих на жирность кожи. Спасибо за то, что средства для волос можно купить у вас сразу, а не искать самостоятельно❤️', 
                url: require('../assets/reviews/AnnaBuiko.png')
            },
            {
                id:4, 
                athor: 'Nikita Leontiev', 
                desc: 'Положительные: Качество, Профессионализм, Пунктуальность, Цена/качество, Чистота. Покупал для своей девушки подарочный сертификат. Сегодня была у вас в салоне - осталась очень довольна. Администратор Валентина очень приветливая, ей отдельный респект. Спасибо вам большое!)))', 
                url: require('../assets/reviews/NikitaLeontiev.png')
            },
        ]
      }
    },
    setup() {
      return {
        modules: [Navigation, Autoplay, Pagination, Scrollbar, A11y],
      };
    },
}
</script>

<style lang="scss" >
.reviews{
    h2{
        margin-bottom: 30px;
    }
}
.reviews_swiper{
  z-index: 1;
  margin-bottom: 30px;
  padding-bottom: 20px;
}
.review_card{
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 500px;
}
.review_text {
    h5{
        text-align: justify;
        margin-top: 10px;
        margin-bottom: 20px;
    }
}
.author_info{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    margin-bottom: 20px;
}
.swiper-pagination-bullet-active {
    background: #555;
}
</style>