<template>
    <div class="app_wrap">
        <Header/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
  }
}
</script>


<style lang="scss">
@import '@/fonts/fonts.css';
@import '@/assets/nullstyle.scss';
body::-webkit-scrollbar {
  width: 3px;    /* ширина всей полосы прокрутки */
  background: rgba(0, 0, 0, 0.2);           
}
body::-webkit-scrollbar-track {
  background: transparent;        /* цвет зоны отслеживания */
}
body::-webkit-scrollbar-thumb {
  background-color: #aa957a;    /* цвет бегунка */
  border-radius: 20px;       /* округлось бегунка */
  // border: 1px solid orange;  /* отступ вокруг бегунка */
}
body {
  scrollbar-width: thin;          /* "auto" или "thin" */
  scrollbar-color: #aa957a rgba(0, 0, 0, 0.2);   /* цвет бегунка и зоны отслеживания */
}
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Gilroy', sans-serif;
  // font-family: 'Vogue';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
.app_wrap{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
}
nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
h2{
  font-weight: 700;
  font-size: 40px;
  line-height: 140.5%;
  transition: all 0.4s;
  @media (max-width: 600px) {
    font-size: 28px;
  }
  // color: #41456B;
}

h3{
    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #aa957a;
    @media (max-width: 600px) {
      font-size: 16px;
    }
}
h4{
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.03em;
}
h5{
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  letter-spacing: 0.02em;
  text-align: justify;
}
</style>
