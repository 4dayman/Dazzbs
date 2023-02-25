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
  // max-width: 1230px;
  margin: 0 auto;
  padding-top: 80px;
}
</style>