<!-- 登陆注册页面 -->
<template>
  <div class="wrapper">
    <div class="icon-wrapper">
      <icon-svg class="icon-ningmeng" icon-class="ningmeng"></icon-svg>
    </div>
    <h1>合翔保险经纪</h1>
    <form action="" method="post">
      <div class="form-name">
        <label for="name">用户名称</label>
        <input type="text" name="name" id="name" required>
      </div>
      <div class="form-password">
        <label for="password">登录密码</label>
        <input type="password" name="password" id="password" required>
      </div>
      <div class="form-submit">
        <!-- <input type="submit" value="确定"> -->
        <el-button type="success" size="mini">确定</el-button>
        <el-button type="info" size="mini">取消</el-button>
      </div>
    </form>
    <p>合翔保险经纪有限公司核心业务处理系统</p>
    <button @click="pushUser">Login</button>
  </div>
</template>

<script>
import IconSvg from "base/icon-svg/icon-svg.vue";
export default {
    components: {
        IconSvg
    },
    data() {
        return {};
    },

    methods: {
        pushUser() {
            this.$router.push({ path: "user" });
        }
    },

    computed: {},

    watch: {},

    created() {},

    mounted() {},

    destroyed() {}
};
</script>
<style lang='scss' scoped>
@import "common/scss/variable.scss";
.wrapper {
    // background: rgb(158, 184, 238);
    background: rgb(252, 255, 244); /* Old browsers */
    background: -moz-linear-gradient(
        left,
        rgba(252, 255, 244, 1) 0%,
        rgba(252, 255, 244, 1) 0%,
        rgba(223, 229, 215, 1) 0%,
        rgba(179, 190, 173, 1) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
        left,
        rgba(252, 255, 244, 1) 0%,
        rgba(252, 255, 244, 1) 0%,
        rgba(223, 229, 215, 1) 0%,
        rgba(179, 190, 173, 1) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
        to right,
        rgba(252, 255, 244, 1) 0%,
        rgba(252, 255, 244, 1) 0%,
        rgba(223, 229, 215, 1) 0%,
        rgba(179, 190, 173, 1) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fcfff4', endColorstr='#b3bead',GradientType=1 ); /* IE6-9 */
    margin: 0 auto;
    margin-top: 80px;
    max-width: 320px;
    .icon-wrapper {
        text-align: center;
        .icon-ningmeng {
            width: 2em;
            height: 2em;
        }
    }
    h1 {
        margin-bottom: 30px;
        font-weight:normal;
    }
    form {
        margin-bottom: 10px;
    }
}
</style>
