<!-- 结算备档作业 -->
<template>
  <div>
    <div>
      <header>
        <dl>
          <dt>搜集发佣所需人事组织/承揽保单信息/佣金制度信息，备档后进行佣金核发</dt>
        </dl>
      </header>
        <form>
             <fieldset>
                <legend>结算备档作业</legend>
                <div>
                  <div class="title">备档月份：</div>
                    <div class="content">
                        <el-date-picker
                            size="mini"
                            v-model="month"
                            type="month"
                            placeholder="选择月">
                        </el-date-picker>
                    </div>
                  </div>
                <div>
                    <div class="title"> </div>
                     <div class="content">
                         <el-select size="mini" v-model="monthDifferantiateSelect" placeholder="请选择">
                            <el-option
                                v-for="item in monthDifferantiate"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                     </div>
                </div>                
            </fieldset> 
            <div class="button">
                <el-button type="primary" size="mini">反备档</el-button>
                <el-button type="primary" size="mini">备档</el-button>
                <el-button type="warning" size="mini">取消</el-button>
            </div>          
        </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      month: "",
      monthDifferantiateSelect: "不区分",
      monthDifferantiate: [
        {
          value: "不区分"
        },
        {
          value: "区分"
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
.button {
  margin: 0 auto;
  text-align: center;
}
</style>