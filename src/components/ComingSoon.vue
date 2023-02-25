<template>
    <div class="comihg_soon_wrapper">
        <div class="comihg_soon">
            <div class="comihg_soon_img">
                <router-link to="/" class="menu_link">
                    <img src="../assets/coming_soon_screen.jpg" alt="">
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.comihg_soon_wrapper {
    margin-top: -80px;
}

.comihg_soon {
    max-width: 1230px;
    // padding: 0 20px;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr;
}
.comihg_soon_img {
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

</style>