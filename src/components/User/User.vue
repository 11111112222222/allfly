<!-- 用戶界面 -->
<template>
  <div>
    <header>
      <span>我是用戶界面</span>
      <button class="logout" @click="logout">退出</button>
    </header>
    <section>
      <aside>
        <div>第一个组件</div>
        <div>第二个组件</div>
        <div>第三个组件</div>
      </aside>
      <content>
        <div>展示第一个组件</div>
        <div>展示第二个组件</div>
        <div>展示第三个组件</div>
      </content> 
    </section>
    
  </div>
</template>

<script>
import Address from 'api/addressService.js'
export default {
  components: {},

  data() {
    return {};
  },

  methods: {
    logout(){
       this.$router.push({ path: '/' });
       
    }
  },

  computed: {},

  watch: {},

  created() {
    
  },

  mounted() {},

  destroyed() {}
};
</script>
<style lang='scss' scoped>
@import 'common/scss/variable.scss';

header {
  height: 60px;
  background: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .logout {
    position: absolute;
    right: 20px;
  }
  
}
section {
  display: flex;
  height: calc(100vh - 60px);
  aside {
    min-width:200px;
    background: $color-theme-d;
  }
  content {
    flex-grow: 1;
    background: $color-theme;
  }
}
</style>