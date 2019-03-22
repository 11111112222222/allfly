<!-- 结算前保单明细预校 -->
<template>
  <div>
    <header>
        <dl>
            <dt>结算前保单明细预校作业，预校选择的分支单位及部门下的个别经手保单明细</dt>
        </dl>
      <div style="margin-left:20px;margin-top:20px;"></div>
    </header>
    <form>
      <fieldset>
        <legend>结算前保单明细预校</legend>
        <div>
          <div class="title">计绩月份：</div>
          <div class="content">
            <el-date-picker
              style="width:200px"
              size="mini"
              v-model="month"
              type="month"
              placeholder="选择月"
            ></el-date-picker>
          </div>
        </div>
        <div>
          <div class="title">分支单位：</div>
          <div class="content">
            <el-select v-model="companySelect" size="mini" placeholder="请选择">
              <el-option
                v-for="item in company"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div>
          <div class="title">部门选择：</div>
          <div class="content">
            <el-select v-model="apartmentSelect" size="mini" placeholder="请选择">
              <el-option
                v-for="item in apartment"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </fieldset>
    </form>
    <div class="button">
      <el-button type="success" size="mini">确定</el-button>
      <el-button type="warning" size="mini">关闭</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      month: "",
      companySelect: "",
      company: [
        {
          value: "河南分公司"
        },
        {
          value: "湖北分公司"
        }
      ],
      apartmentSelect: "",
      apartment: [
        {
          value: "财会部门"
        },
        {
          value: "后勤部门"
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted: {},

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
  margin: 0px auto;
  text-align: center;
}
</style>