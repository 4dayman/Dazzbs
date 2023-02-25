<template>
    <div class="back_to_main">
        <router-link class="to_main" to="/">Головна</router-link>
        <span> / {{page}}</span>
    </div>
</template>

<script>
export default {
    props: {
        page: String
    }
}
</script>

<style lang="scss" scoped>
.back_to_main {
    padding: 0 20px;
    margin: 20px 0;
    text-align: left;
}
.to_main{
    color: #AA957c;
    &:hover {
        color: #868686;
    }
}
</style>