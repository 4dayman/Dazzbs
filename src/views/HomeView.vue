<template>
  <div class="home">
    <MainSlider/>
    <!-- <marquee class="offer" behavior="scroll" direction="left" loop>
        <a href="https://www.instagram.com/stories/dazz_beautyspace/" target="_blank">сьогоднішні пропозиції в <span>instagram</span></a>
    </marquee> -->
    <MainDesc/>
    <div class="services">
      <h3>МИ ПРОПОНУЄМО</h3>
      <h2>Послуги та Ціни</h2>
    <Services/>
    </div>
    <Instagram/>
    <SubServices/>
    <Reviews/>
    <div class="call_btn">
      <CallBtn/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainSlider from '@/components/MainSlider'
import MainDesc from '@/components/MainDesc'
import Services from '@/components/Services'
import Instagram from '@/components/Instagram'
import SubServices from '@/components/SubServices'
import Reviews from '@/components/Reviews'
import CallBtn from '@/components/UI/CallBtn'
export default {
  name: 'HomeView',
  components: {
    MainSlider, 
    CallBtn,
    MainDesc,
    Services,
    Instagram,
    SubServices,
    Reviews,

  }
}
</script>

<style lang="scss" scoped>
.home{
  position: relative;
  padding-top: 80px;
  @media (max-width: 360px) {
    padding-top: 55px;
  }
}
.services {
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
.call_btn{
  z-index: 1;
  position: fixed;
  bottom: 80px;
  right: 20px;
}
.offer {
    padding: 20px 20px;
    span{
        color: #AA957c;
    }
    a {
        text-transform: uppercase;
        color: #000;
    }
}
</style>
