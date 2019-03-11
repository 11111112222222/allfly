<!-- 标准基本法自动结算 -->
<template>
  <div>
    <header>
      <dl>
        <dt>各档检查通过的计佣档，始可进行基本法演算，请选择分支机构和佣金制度</dt>
      </dl>
    </header>
      <form>
          <fieldset>
              <legend>标准基本法自动结算</legend>
              <div>
                  <div class="title">计绩月份：</div>
                  <div class="content">
                    <el-date-picker
                        size="mini"
                        v-model="date"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                    <el-button type="primary" size="mini">反计佣</el-button>
                    <el-checkbox v-model="allBranchchecked" size="mini">全部分支</el-checkbox>
                  </div>
              </div>
              <fieldset>
                  <legend>演算对象</legend>
                  <div>
                      <div class="title">一级分支机构：</div>
                      <div class="content">
                           <el-select v-model="companySelect" placeholder="请选择" size="mini">
                                <el-option
                                v-for="item in company"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                      </div>
                  </div>
                 <div>
                      <div class="title">佣金制度：</div>
                      <div class="content">
                           <el-select v-model="comissionSystemSelect" placeholder="请选择" size="mini">
                                <el-option
                                v-for="item in comissionSystem"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                      </div>
                  </div>
                  <div class="buttonTop">
                      <el-button type="success" size="mini">计佣演算</el-button>
                  </div>
              </fieldset>
          </fieldset>
      </form>
    <div class="buttonBottom" style="width:100%">
        <el-button type="primary" size="mini">查看</el-button>
        <el-button type="warning" size="mini">取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      allBranchchecked:"",
      companySelect:"安徽分公司",
      company:[
          {
              value:"安徽分公司"
          },
          {
              value:"湖北分公司"
          }
      ],
      comissionSystemSelect:"标准基本法",
      comissionSystem:[
          {
              value:"标准基本法"
          },
          {
              value:"非标准基本法"
          }
      ]
    };
  },

  components: {},

  computed: {},

  methods: {}
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
//   fieldset {
//     border: solid 1px rgb(230, 217, 217);
//     margin: 30px 50px 10px 60px;
//     padding: 5px;
//     }
// }
.buttonTop {
  margin-left: 300px;
  margin-top: 20px;
  margin-bottom:10px;
}
.buttonBottom{
     margin:0 auto;
     text-align:center;
}
</style>