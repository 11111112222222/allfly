<!-- 登陆注册页面 -->
<template>
  <div class="wrapper">
    <div class="icon-wrapper">
      <icon-svg class="icon-ningmeng" icon-class="ningmeng"></icon-svg>
    </div>
    <button @click="pushUser">Login</button>
  </div>
</template>

<script>
import IconSvg from 'base/icon-svg/icon-svg.vue'
export default {
  components: {
    IconSvg
  },
  data() {
    return {};
  },

  methods: {
    pushUser() {
      this.$router.push({ path: 'user' });
    }
  },

  computed: {},

  watch: {},

  created() {},

  mounted(){},

  destroyed() {}
};
</script>
<style lang='scss' scoped>
.wrapper {
  margin-top: 60px;
  .icon-wrapper {
    text-align: center;
    .icon-ningmeng {
      width: 2em;
      height: 2em;
    }
  }
}

</style>
