<!-- icon公共组件 -->
<template>
   <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
   </svg>
</template>

<script>
export default {
  name: 'icon-svg',
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
      // '#icon-'+this.iconClass',${}表示它是一个变量
    }
  },
}

</script>
<style lang='scss' scoped>
</style>