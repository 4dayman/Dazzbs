<template>
  <div class="hair_wrapper">
    <div class="hair">
      <ComingSoon />
    </div>
  </div>
</template>

<script>
import ComingSoon from '@/components/ComingSoon'

export default {
  components: {
    ComingSoon,
  },
}
</script>


<style lang="scss" scoped>
.hair {
  position: relative;
  max-width: 1230px;
  margin: 0 auto;
  padding-top: 80px;

  h2 {
    padding-top: 40px;
  }

  @media (max-width: 360px) {
    padding-top: 55px;
  }
}

.hair_desc {
  padding: 40px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  max-height: 400px;
  overflow: hidden;
  text-align: justify;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    max-width: 420px;
    margin: 0 auto;
  }
}

.hair_desc_img {
  height: 500px;

  @media (max-width: 560px) {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.call_btn {
  z-index: 1;
  position: fixed;
  bottom: 80px;
  right: 20px;
}

.services {
  margin-bottom: 50px;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #AA957a;
  }
}
</style>