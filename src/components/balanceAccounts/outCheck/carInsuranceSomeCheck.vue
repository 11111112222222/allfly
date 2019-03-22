<!-- 车险批量核佣检查 -->
<template>
  <div>
    <div>
      <form>
        <fieldset>
        <legend>车险批量核佣检查</legend>
        <div>
            <div class="title">生效期间：</div>
            <div class="content">
              <el-date-picker
                size="mini"
                v-model="date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </div>
            <div>
              <div class="title">保险公司：</div>
              <div class="content">
                <el-select size="mini" v-model="companySelect" placeholder="请选择">
                  <el-option
                    v-for="item in company"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
        </div>
      </fieldset>
      </form>
      <div>
        <div class="title" style="margin-left:26px">数据源文档：</div>
        <div class="content">
          <el-input v-model="input" size="mini" style="width:200px"></el-input>
          <el-button type="info" plain size="mini" style="margin-left:20px">…</el-button>
        </div>
      </div>
    </div>
    <div class="button">
      <el-button type="info" plain size="mini">取消</el-button>
      <el-button type="primary" plain size="mini">上一步</el-button>
      <el-button type="primary" plain size="mini" @click="next">下一步</el-button>
      <el-button type="success" plain size="mini">完成</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      companySelect: "",
      company: [
        {
          value: "太平洋财（险）"
        },
        {
          value: "南极洲险"
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    next(){
      this.$router.push({path:"/user/someCheckNext"});
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../../style/reset.css";
.title {
  width: 200px;
  padding: 20px;
  display: inline-block;
  text-align: right;
}
.content {
  display: inline-block;
}
// fieldset {
//   border: solid 1px silver;
//   margin: 35px 50px 10px 20px;
//   padding: 5px;
// }
.button {
  // margin:50px auto;
  margin-top:50px;
  margin-left:270px;
  // text-align:center;
}
</style>