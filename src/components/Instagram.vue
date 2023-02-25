<template>
    <div class="instagram_wrapper">
        <div class="instagram">
            <div class="desc_left">
                <h3>Наші роботи майстрів</h3>
                <p>Подивитись роботи наших майстрів ви можете у нас в інстаграм</p>
                <a class="Instagram_link" href="https://www.instagram.com/dazz_beautyspace/" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                    <span>Instagram</span>
                </a>
            </div>
            <div class="desc_right">
                <a href="https://www.instagram.com/p/Cn_XYBLjHOJ/" target="_blank">
                    <div class="inst_card">
                        <img src="../assets/instagram/img_1.jpg" alt="">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </a>
                <a href="https://www.instagram.com/p/CnmZVDDNy3h/" target="_blank">
                    <div class="inst_card">
                        <img src="../assets/instagram/img_2.jpg" alt="">
                        <i class="fa-solid fa-copy"></i>
                    </div>
                </a>
                <a href="https://www.instagram.com/p/Cnw9CAshmaJ/" target="_blank">
                    <div class="inst_card">
                        <img src="../assets/instagram/img_3.jpg" alt="">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </a>
                <a href="https://www.instagram.com/p/CmUw6Pbjoax/" target="_blank">
                    <div class="inst_card">
                        <img src="../assets/instagram/img_4.jpg" alt="">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </a>
                <a href="https://www.instagram.com/p/ClbYmQ4NK4s/" target="_blank">
                    <div class="inst_card">
                        <img src="../assets/instagram/img_5.jpg" alt="">
                        <i class="fa-solid fa-copy"></i>
                    </div>
                </a>
                <a href="https://www.instagram.com/p/CkyJCCCqqD6/" target="_blank">
                    <div class="inst_card">
                        <img src="../assets/instagram/img_6.jpg" alt="">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </a>
                <a href="https://www.instagram.com/p/CiVTgvfKI8g/" target="_blank">
                    <div class="inst_card">
                        <img src="../assets/instagram/img_7.jpg" alt="">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </a>
                <a href="https://www.instagram.com/p/CgpyIjXqUff/" target="_blank">
                    <div class="inst_card">
                        <img src="../assets/instagram/img_8.jpg" alt="">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </a>
                <a href="https://www.instagram.com/p/CgPVwbMKF4z/" target="_blank" class="last_link">
                    <div class="inst_card">
                        <img src="../assets/instagram/img_9.jpg" alt="">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.instagram_wrapper{
margin-top: 60px;
}
.instagram {
    position: relative;
    max-width: 1230px;
    padding: 0 20px;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 50px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
}
.desc_left,
.desc_right {
    max-width: 100%;
}
.desc_left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    color: #000000;
    @media (max-width: 768px) {
        align-items: center;
        text-align: center;
        background-size: cover;
    }
    h3{
        font-weight: 700;
        font-size: 25px;
        line-height: 140%;
        letter-spacing: 0.02em;
    }
    p{
        margin: 30px 0;
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
    }
}
.Instagram_link {
    background: rgba(0, 0, 0, 0.8);
    color: #ffffff;
    padding: 10px 25px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    i{
        font-size: 20px;
        margin-right: 10px;
    }
    span{
        font-size: 18px;
    }
}
.desc_right{
    padding-top: 60px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
    @media (max-width: 425px) {
        grid-template-columns: 1fr 1fr;
    }

}
.inst_card{
    max-width: 150px;
    max-height: 150px;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        &:hover{
            opacity: 0.6;
        }
    }
    i{
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 20px;
        color: #ffffff;
    }
}
.last_link {
    @media (max-width: 425px) {
        display: none;
    }
}
</style>