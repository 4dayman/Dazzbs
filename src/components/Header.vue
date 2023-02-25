<template>
<div class="container">
    <header class="header">
        <div class="header_logo">
            <router-link to="/">
                <h2 class="header_logo_main">DAZZ</h2>
                <span class="header_logo_desc">beauty space</span>
            </router-link>
        </div>
        <div class="link_main_blok">
            <router-link class="links_main" to="/">Головна</router-link>
            <router-link class="links_main" to="/price">Ціни</router-link>
            <router-link class="links_main" to="/">Послуги</router-link>
            <a href="https://www.google.com/search?q=%D1%80%D0%B0%D0%B4%D1%83%D0%B6%D0%BD%D0%B0%D1%8F+58&rlz=1C1IXYC_ruUA953UA956&oq=%D1%80%D0%B0%D0%B4%D1%83%D0%B6%D0%BD%D0%B0%D1%8F+58&aqs=chrome..69i57.2413j0j15&sourceid=chrome&ie=UTF-8" target="blank" class="menu_contacts_pin">
                <i class="fa-solid fa-location-dot location_pin"></i>
                <div class="menu_contacts">
                    <p>Київ</p>
                    <p>вул. Райдужна, 58</p>
                </div>
            </a>
        </div>

        <!-- <div>
            <marquee behavior="scroll" direction="left" loop>Some text Some text Some text</marquee>
        </div> -->
        <div class="header_menu menu">
            <div class="header_main_links">
                <!-- <router-link to="/">
                    <a class="animated-button1" href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        sign in
                    </a>
                </router-link> -->
                <!-- <router-link to="/about"> -->
                    <a class="" href="tel:093 446 1590"><i class="fa-solid fa-square-phone phone_link"></i></a>
                <!-- </router-link> -->
            </div>
            <div class="menu_icon" @click="active = !active, active" :class="{active}">
                <span></span>
            </div>
            <div class="menu_body_shadow" @click="active = !active" :class="{active}"></div>
            <nav class="menu_body" :class="{active}">
                <ul class="menu_list">
                    <li><router-link @click="active = !active" to="/" class="menu_link">Головна</router-link></li>
                    <li><router-link @click="active = !active" to="/hair" class="menu_link">Волосся</router-link></li>
                    <li><router-link @click="active = !active" to="/nails" class="menu_link">Нігті</router-link></li>
                    <li><router-link @click="active = !active" to="/lush" class="menu_link">ВІЇ та БРОВИ</router-link></li>
                    <li><router-link @click="active = !active" to="/cosmetology" class="menu_link">Косметологія</router-link></li>
                    <li><router-link @click="active = !active" to="/price" class="menu_link">Ціни</router-link></li>
                    <li><router-link @click="active = !active" to="/service" class="menu_link">Послуги</router-link></li>
                    <li><router-link @click="active = !active" to="/make" class="menu_link">Make Up</router-link></li>
                    <li><router-link @click="active = !active" to="/about" class="menu_link">About Dazz</router-link></li>
                    <li><router-link @click="active = !active" to="/blog" class="menu_link">Blog</router-link></li>
                </ul>
                <div class="menu_social">
                    <a href="#">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-telegram"></i>
                    </a>
                </div>
                <div class="menu_contacts">
                    <p><strong>Адрес:</strong> <a href="https://www.google.com/search?q=%D1%80%D0%B0%D0%B4%D1%83%D0%B6%D0%BD%D0%B0%D1%8F+58&rlz=1C1IXYC_ruUA953UA956&oq=%D1%80%D0%B0%D0%B4%D1%83%D0%B6%D0%BD%D0%B0%D1%8F+58&aqs=chrome..69i57.2413j0j15&sourceid=chrome&ie=UTF-8" target="blank"> вулиця Райдужна, 58, Київ, 02000</a></p>
                    <p><strong>Часы работы:</strong> Пн. - Вс. 09:00-18:00</p>
                    <p><strong>Телефон:</strong> <a href="tel:093 446 1590">093 446 1590</a></p>
                </div>
            </nav>
        </div>
    </header>  
</div>
</template>

<script>
// import MainButton from '@/components/UI/MainButton.vue'
export default {
    components: {
        // MainButton
    },
    data() {
        return {
            items: [],
        active: false,
        }
    },
    methods: {
    },
    watch: {
    // whenever active changes, this function will run
    active() {
    document.body.style.overflow = this.active ? 'hidden' : ''
  }
}
};
</script>

<style lang="scss" scoped>
.container {
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    padding: 0 15px;
    margin: 0 auto;
    transition: all 0.5s ease 0.1s;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    @media (max-width: 768px) {
        padding: 0 24px;
    }
}
.header {
    margin: 0 auto;
    position: relative;
    max-width: 1230px;
    min-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 1.5 ease 0;
    z-index: 1;
    @media (max-width: 360px) {
        min-height: 55px;
    }
}

.header_logo_main{
    font-family: 'Kanit', sans-serif;
    font-size: 35px;
    font-weight: 700;
    color: rgba(155, 155, 155, 0.637);
    text-shadow: 1px 1px 30px gray, 0 0 1em rgb(201, 201, 204), 0 0 0.2em rgb(162, 162, 173);
     -webkit-text-stroke: 1px rgba(80, 80, 80, 0.726);
     margin-bottom: -10px;
     margin-top: -10px;
     margin-right: 10px;
}
.header_logo_desc{
    font-family: 'Playfair Display', serif;
    font-size: 10px;
    letter-spacing: 2px;
    color: #AA957c;
    text-transform: uppercase;
}
.header_main_links{
    display: flex;
    align-items: center;
}
.link_main_blok {
    width: 100%;
    margin: 0 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.4s;
    &:hover {
        p{
            color: #AA957c;
        }
        i{
            color: #868686;
        }
    }
    @media (max-width: 1024px) {
        margin: 0 5%;
    }
    @media (max-width: 700px) {
        display: none;
    }
}
.links_main {
    font-size: 16px;
    color: #AA957c;
    &:hover{
        // color: #c2b550;
    color: rgba(155, 155, 155, 0.637);
    }
}
.phone_link{
    font-size: 40px;
    color: rgba(155, 155, 155, 0.637);
    &:hover{
        // color: #c2b550;
        color: #AA957c;
    }
}

.animated-button1 {
    background: rgba(155, 155, 155, 0.5);
    padding: 10px;
    margin: 10px;
    display: inline-block;
    transform: translate(0%, 0%);
    overflow: hidden;
    color: #AA957c;
    font-size: 16px;
    letter-spacing: 2.5px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    @media (max-width: 360px) {
        font-size: 12px;
        padding:10px 5px;
    }

}

.animated-button1::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #AA957c;
    opacity: 0;
    transition: .2s opacity ease-in-out;
}

.animated-button1:hover::before {
    opacity: 0.2;
}

.animated-button1 span {
    position: absolute;
}

.animated-button1 span:nth-child(1) {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: linear-gradient(to left, rgba(43, 8, 8, 0), #AA957c);
    animation: 2s animateTop linear infinite;
}

@keyframes animateTop {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animated-button1 span:nth-child(2) {
    top: 0px;
    right: 0px;
    height: 100%;
    width: 2px;
    background: linear-gradient(to top, rgba(43, 8, 8, 0), #AA957c);
    animation: 2s animateRight linear -1s infinite;
}

@keyframes animateRight {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}

.animated-button1 span:nth-child(3) {
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, rgba(43, 8, 8, 0), #AA957c);
    animation: 2s animateBottom linear infinite;
}

@keyframes animateBottom {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animated-button1 span:nth-child(4) {
    top: 0px;
    left: 0px;
    height: 100%;
    width: 2px;
    background: linear-gradient(to bottom, rgba(43, 8, 8, 0), #AA957c);
    animation: 2s animateLeft linear -1s infinite;
}

@keyframes animateLeft {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}
@media (max-width: 767px) {
    .hide{
        display: none;
    }
}
.header_menu{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.menu_icon {
    z-index: 5;
    display: block;
    position: relative;
    align-items: center;
    width: 37px;
    height: 30px;
    cursor: pointer;
    margin-left: 63px;
    transition: all 0.4s ease;
    @media (max-width: 767px) {
        margin-left: 23px;
        width: 30px;
        height: 25px;
    }
}

.menu_icon span,
.menu_icon::before,
.menu_icon::after {
    right: 0;
    position: absolute;
    height: 4px;
    width: 100%;
    transition: all 0.3s ease 0s;
    background: #868686;
    border-radius: 7px;
}
.menu_icon::before, .menu_icon::after {
    content: "";
    width: 37px;
        @media (max-width: 767px) {
            width: 30px;
        }
}

.menu_icon::before {
    content: "";
    top: 0;
}

.menu_icon::after {
    content: "";
    bottom: 0;
}

.menu_icon span {
    height: 4px;
    top: 50%;
    transform: scale(1) translate(0px, -50%);
}
.menu_icon.active {
    top: 0px;
    right: 0px;
}

.menu_icon.active span {
    transform: scale(0) translate(0px, -50%);
}

.menu_icon.active::before {
    display: block;
    width: 37px;
    top: 50%;
    transform: rotate(-45deg) translate(0px, -50%);
    background-color: #868686;
    @media (max-width: 767px) {
        width: 30px;
    }
}

.menu_icon.active::after {
    width: 37px;
    bottom: 50%;
    transform: rotate(45deg) translate(0px, 50%);
    background-color: #868686;
    @media (max-width: 767px) {
        width: 30px;
    }

}
.menu_body_shadow {
    position: fixed;
    display: none;
    top: 0;
    left:0;
    z-index: 3;
    width: 100%;
    height: 100%;
}
.menu_body_shadow.active {
    display: block;
}
.menu_body {
    position: fixed;
    top: 0;
    right: -100%;
    width: 42%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    padding: 130px 0px 105px 60px;
    z-index: 4;
    transition: all 0.3s ease 0s;
    overflow: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, .1);
    @media (max-width: 1024px) {
        width: 50%;
    }
    @media (max-width: 768px) {
        width: 70%;
    }
    @media (max-width: 425px) {
        width: 100%;
        box-shadow: none;
    }
}
.menu_body::-webkit-scrollbar {
  width: 3px;    /* ширина всей полосы прокрутки */
  background: transparent;           
}
.menu_body::-webkit-scrollbar-track {
  background: transparent;        /* цвет зоны отслеживания */
}
.menu_body::-webkit-scrollbar-thumb {
  background-color: #aa957a;    /* цвет бегунка */
  border-radius: 20px;       /* округлось бегунка */
  // border: 3px solid orange;  /* отступ вокруг бегунка */
}

.menu_body.active {
    right: 0%;
}
.menu_list {
    margin-top: -60px;
    li{
        text-align: start;
        margin-bottom: 15px;
        font-weight: 700;
        font-size: 25px;
        line-height: 140%;
        letter-spacing: 0.02em;
        a {
            color: #868686;
        }
    }
}
.menu_link.hide {
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
}
.menu_social {
    i{
        margin-right: 15px;
        opacity: 0.8;
        font-size: 30px;
        color: #868686;
        &:hover {
            opacity: 1;
        }
    }
}
.location_pin {
    margin-right: 10px;
    font-size: 20px;
    color: #AA957c;
}
.menu_contacts_pin{
    display: flex;
    align-items: center;
    justify-content: center;
}
.menu_contacts{
    margin-top: 20px;
    text-align: left;
    color: #868686;
    p{
        margin-bottom: 10px;
        a{
            color: #868686;
            text-decoration: underline;
        }
    }
}
</style>