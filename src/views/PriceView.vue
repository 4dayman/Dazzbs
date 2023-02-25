<template>
    <div class="price">
        <!-- <div class="back_to_main">
            <router-link class="to_main" to="/">Головна</router-link>
            <span> / Ціни на Послуги</span>
        </div> -->
        <back-to-main page="Ціни на Послуги"/>
        <div class="all_prices">
            <h2>Ціни на Послуги</h2>
            <div class="btns">
                <button :class="{'active': services === HairCut}" @click="getHair">Перукарські послуги</button>
                <button :class="{'active': services === Manicur}" @click="getNails">Манікюр / Педикюр / Подологія</button>
                <button :class="{'active': services === Lush}" @click="getLush">ВІЇ та БРОВИ</button>
                <button :class="{'active': services === CosmetWatch}" @click="getCosmet">Косметологія</button>
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
        <div class="call_btn">
            <CallBtn/>
        </div>
  </div>
</template>

<script>
import Price from '../components/Price.vue'
import CallBtn from '@/components/UI/CallBtn'
import BackToMain from '@/components/UI/BackToMain'
import hairServices from '@/data/hairServices'
import Pedicur from '@/data/Pedicur'
import SPA from '@/data/SPA'
import Manicur from '@/data/Manicur'
import NailGrow from '@/data/NailGrow'
import NailsCorection from '@/data/NailsCorection'
import HairCut from '@/data/HairCut'
import HairColor from '@/data/HairColor'
import Podology from '@/data/Podology'
import Lush from '@/data/Lush'
import LushPMake from '@/data/LushPMake'
import LushRemovePM from '@/data/LushRemovePM'
import LushTone from '@/data/LushTone'
import CosmetWatch from '@/data/CosmetWatch'
import CosmetIn from '@/data/CosmetIn'
import CosmetInBot from '@/data/CosmetInBot'
import CosmetLipo from '@/data/CosmetLipo'
export default {
    components: {
        Price,
        CallBtn,
        BackToMain,
    },
    methods: {
        getHair() {
            this.services = this.HairCut
            this.services2 = this.HairColor
            this.services3 = this.hairServices
            this.services4 = this.hairServices
            this.services5 = this.hairServices
            this.services6 = this.hairServices
        },
        getNails() {
            this.services = this.Manicur
            this.services2 = this.Pedicur
            this.services3 = this.SPA
            this.services4 = this.NailGrow
            this.services5 = this.NailsCorection
            this.services6 = this.Podology
        },
        getLush() {
            this.services = this.Lush
            this.services2 = this.LushPMake
            this.services3 = this.LushRemovePM
            this.services4 = this.LushTone
            this.services5 = this.hairServices
            this.services6 = this.hairServices
        },
        getCosmet() {
            this.services = this.CosmetWatch
            this.services2 = this.CosmetIn
            this.services3 = this.CosmetInBot
            this.services4 = this.CosmetLipo
            this.services5 = this.hairServices
            this.services6 = this.hairServices
        },
    },
    data() {
        return {
            services: HairCut,
            services2: HairColor,
            services3: hairServices,
            services4: hairServices,
            services5: hairServices,
            services6: hairServices,
            Pedicur,
            SPA,
            Manicur,
            NailGrow,
            NailsCorection,
            hairServices,
            HairCut,
            HairColor,
            Podology,
            Lush,
            LushPMake,
            LushRemovePM,
            LushTone,
            CosmetWatch,
            CosmetIn,
            CosmetInBot,
            CosmetLipo,
            active: false
        }
    }
}
</script>

<style lang="scss" scoped>
.price{
    max-width: 1230px;
    // padding: 0 20px;
    margin: 0 auto;
    margin-top: 80px;
}
.call_btn{
  z-index: 1;
  position: fixed;
  bottom: 80px;
  right: 20px;
}
.back_to_main {
    padding: 0 20px;
    margin: 20px 0;
    text-align: left;
}
.all_prices{
    padding: 0 20px;
}
.to_main{
    color: #AA957c;
    &:hover {
        color: #868686;
    }
}
.btns {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    button{
        background: #fff;
        border: 1px solid rgba(0, 0, 0, 0.8);
        border-radius: 5px;
        color: #000000;
        font-size: 16px;
        padding: 10px;
        &:hover{
            background: rgba(0, 0, 0, 0.4);
            color: #fff;
        }
    }
    .active {
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        &:hover{
            background: rgba(0, 0, 0, 0.8);
        }
    }
}
</style>