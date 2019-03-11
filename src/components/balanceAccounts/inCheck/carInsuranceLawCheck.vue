<!-- 车险标准基本法结算 -->
<template>
  <div>
     <header>
        <dl>
          <dt>核佣检查通过的保单可通过基本法演算，请选择分支机构和保单受理区间</dt>
        </dl>
      </header>
      <form>
        <fieldset>
            <legend>演算对象</legend>
            <div>
                <div class="title">分支机构</div>
                <div class="content">
                    <el-select size="mini" v-model="branchCompanySelect" placeholder="请选择">
                        <el-option
                        v-for="item in branchCompany"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div>
                <div class="title">计佣区间</div>
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
            </div>
            <div class="buttonTop">
                <el-button type="primary" size="mini">计佣演算</el-button>
            </div>
        </fieldset>
        <div class="buttonBottom">
             <el-button type="primary" size="mini" @click="query">查看</el-button>
              <el-button type="warning" size="mini">取消</el-button>
        </div>
      </form>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      branchCompanySelect: "安徽分公司",
      branchCompany: [
        {
          value: "安徽分公司"
        },
        {
          value: "湖北分公司"
        }
      ],
      date: ""
    };
  },

  components: {},

  computed: {},

  methods: {
    query(){
      this.$router.push({path:"/user/employMoneyDetails"});
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../../style/reset.css";
.title {
  display: inline-block;
  width: 200px;
  text-align: right;
  padding: 5px;
}
.content {
  display: inline-block;
  margin-bottom: 10px;
}
// fieldset {
//   border: solid 1px silver;
//   margin: 15px 50px 10px 20px;
//   padding: 5px;
// }
.buttonTop {
  margin-left: 300px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.buttonBottom {
  margin: 0 auto;
  text-align: center;
}
</style>