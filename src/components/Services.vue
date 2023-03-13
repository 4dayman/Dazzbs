<template>
    <div class="services_wrapper">
            <div class="services_cards">
                <router-link  to="/hair" class="services_card">
                    <img src="@/assets/hair_1.jpg" alt="">
                    <div class="card_text">
                        <h2>Волосся</h2>
                        <h4>До послуги <i class="fa-solid fa-arrow-right"></i></h4>
                    </div>
                </router-link>
                <router-link to="/nails" class="services_card">
                    <img src="@/assets/nails_2.jpg" alt="">
                    <div class="card_text">
                        <h2>НІГТІ</h2>
                        <h4>До послуги <i class="fa-solid fa-arrow-right"></i></h4>
                    </div>
                </router-link>
                <router-link to="/lush" class="services_card">
                    <img src="@/assets/lush_brow_1.png" alt="">
                    <div class="card_text">
                        <h2>ВІЇ та БРОВИ</h2>
                        <h4>До послуги <i class="fa-solid fa-arrow-right"></i></h4>
                    </div>
                </router-link>
                <router-link to="/make" class="services_card">
                    <img src="@/assets/mack_up_1.jpg" alt="">
                    <div class="card_text">
                        <h2>Make Up</h2>
                        <h4>До послуги <i class="fa-solid fa-arrow-right"></i></h4>
                    </div>
                </router-link>
                <router-link to="/cosmetology" class="services_card">
                    <img src="@/assets/cosmetology.jpg" alt="">
                    <div class="card_text">
                        <h2>Косметологія</h2>
                        <h4>До послуги <i class="fa-solid fa-arrow-right"></i></h4>
                    </div>
                </router-link>
            </div>

    </div>
</template>

<style lang="scss" scoped>
.services_wrapper{
    max-width: 1230px;
    padding: 0 20px;
    margin: 0 auto;
}
.services_cards {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        
    }
    @media (max-width: 425px) {
        grid-template-columns: 1fr;
        
    }
}
.services_card{
    position: relative;
        border-radius: 10px;
        overflow: hidden;
    img{
        transition: all 0.4s ease 0.1s;
        width: 100%;
        height: 100%;
        object-fit: cover;
        &:hover{
            scale: 1.1;
        }
    }
}
.card_text{
    position: absolute;
    bottom: 20px;
    left: 20px;
    text-shadow: 1px 1px 15px rgb(0, 0, 0);
    @media (max-width: 900px) {
        h2{
            font-size: 25px;
        }
    }
    h2, h4{
        color: rgb(238, 238, 238);
    }
}
</style>