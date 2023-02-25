<template>
    <div class="container">
        <div class="footer">
            <div class="footer_logo">
                <router-link to="/">
                    <h2 class="header_logo_main">DAZZ</h2>
                    <span class="header_logo_desc">beauty space</span>
                </router-link>
                <div class="menu_social_desc">
                    &#8213; наші соціальні мережі &#8213;
                </div>
                <div class="menu_social">
                    <a href="https://www.facebook.com/dazzkiev?mibextid=LQQJ4d" target="blank">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/dazz_beautyspace/" target="blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://t.me/DAZZ_beauty_space" target="blank">
                        <i class="fa-brands fa-telegram"></i>
                    </a>
                </div>
            </div>
                <ul class="footer_menu_list">
                    <li><router-link to="/" class="menu_link">Головна</router-link></li>
                    <li><router-link to="/hair" class="menu_link">Волосся</router-link></li>
                    <li><router-link to="/nails" class="menu_link">Нігті</router-link></li>
                    <li><router-link to="/lush" class="menu_link">ВІЇ та БРОВИ</router-link></li>
                    <li><router-link to="/cosmetology" class="menu_link">Косметологія</router-link></li>
                    <li><router-link to="/price" class="menu_link">Ціни</router-link></li>
                    <li><router-link to="/service" class="menu_link">Послуги</router-link></li>
                    <li><router-link to="/make" class="menu_link">Make Up</router-link></li>
                    <li><router-link to="/about" class="menu_link">Про нас</router-link></li>
                    <li><router-link to="/blog" class="menu_link">Блог</router-link></li>
                </ul>
                
            <div class="footer_copy"> 
                <div class="menu_contacts">
                    <p><strong>Адреса:</strong> <a href="https://www.google.com/search?q=%D1%80%D0%B0%D0%B4%D1%83%D0%B6%D0%BD%D0%B0%D1%8F+58&rlz=1C1IXYC_ruUA953UA956&oq=%D1%80%D0%B0%D0%B4%D1%83%D0%B6%D0%BD%D0%B0%D1%8F+58&aqs=chrome..69i57.2413j0j15&sourceid=chrome&ie=UTF-8" target="blank"> вулиця Райдужна, 58, Київ, 02000</a></p>
                    <p><strong>Години роботи:</strong> Пн. - Вс. 09:00-21:00</p>
                    <p><strong>Телефон:</strong> <a href="tel:093 446 1590">093 446 1590</a></p>
                </div>
                <div class="">
                    Усі права захищені салон красоты<br>
                    Dazz - beauty space 2023.<br>
                    &#169;Copyright, 2023. Dazz beauty space.
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container{
    background: rgba(0, 0, 0, 0.8);
    // height: 200px;
    padding: 40px 0;
        box-shadow: 0 0 -20px rgba(0, 0, 0, 0.5);

}
.footer{
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    // align-items: flex-end;
    justify-content: space-between;
    @media (max-width: 432px) {
        justify-content: center;
    }
}
.footer_logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.menu_social_desc {
    color: #aa957a;
    margin: 30px 0;
    text-transform: uppercase;
}
.header_logo_main{
    // font-family: 'Kanit', sans-serif;
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    // color: rgba(155, 155, 155, 0.637);
    text-shadow: 1px 1px 30px gray, 0 0 1em rgb(201, 201, 204), 0 0 0.2em rgb(162, 162, 173);
     -webkit-text-stroke: 1px rgba(80, 80, 80, 0.726);
     margin-bottom: 10px;
}
.header_logo_desc{
    // font-family: 'Playfair Display', serif;
    font-size: 20px;
    letter-spacing: 1.5px;
    // color: #aa957a;
    color: #fff;
    text-shadow: 1px 1px 30px gray, 0 0 1em rgb(201, 201, 204), 0 0 0.2em rgb(162, 162, 173);
    -webkit-text-stroke: 1px rgba(80, 80, 80, 0.726);

    text-transform: uppercase;
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
.footer_copy{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    font-size: 10px;
    letter-spacing: 1.5px;
    color: rgba(155, 155, 155, 0.637);
    @media (max-width: 533px) {
        align-items: center;
        justify-content: center;
        width: 100%;
    }
}
.footer_menu_list {
    text-align: left;
    padding: 0 30px;
    font-size: 15px;
    line-height: 24px;
    @media (max-width: 533px) {
        padding: 0 70px 0 30px;
    }
    @media (max-width: 432px) {
        width: 100%;
        padding: 15px 30px;
        text-align: center;
        font-size: 18px;
    }

    li{
        a{
            color: #aa957a;
            &:hover {
                color: #868686;
            }
        }
    }
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