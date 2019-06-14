<!-- 批量核佣检查 -->
<template>
  <div>
    <form>
      <fieldset>
        <legend>批量核佣检查</legend>
        <div>
          <div class="title">计绩月份：</div>
          <div class="content">
            <div class="block">
              <el-date-picker
                v-model="month"
                type="month"
                placeholder="选择月"
                size="mini"
                class="select"
              ></el-date-picker>
            </div>
          </div>
        </div>
        <div>
          <div class="title">保险公司：</div>
          <div class="content">
            <el-select
              size="mini"
              v-model="insuranceCompanyChecked"
              collapse-tags
              placeholder="请选择"
              id="contractorChecked"
            >
              <el-option v-for="item in insuranceCompany" :key="item.value" :value="item.value"></el-option>
            </el-select>
            <el-select
              size="mini"
              v-model="companyNameChecked"
              collapse-tags
              placeholder="请选择"
              @change
              id="identifyChecked"
            >
              <el-option v-for="item in companyName" :key="item.value" :value="item.value"></el-option>
            </el-select>
          </div>
        </div>
      </fieldset>
      <div id="behindFieldset">
        <div>
          <div class="title">数据源文档：</div>
          <div class="content">
            <el-input
              size="mini"
              placeholder="请输入内容"
              style="width:200px"
              v-model="filePath"
              clearable
            ></el-input>
            <el-button type="info" plain disabled size="mini">…</el-button>
          </div>
        </div>
        <div>
          <div class="title">首/续期：</div>
          <div class="content">
            <el-select
              size="mini"
              v-model="firstNextDateChecked"
              collapse-tags
              placeholder="请选择"
              @change
              id="identifyChecked"
            >
              <el-option v-for="item in firstNextDate" :key="item.value" :value="item.value"></el-option>
            </el-select>
          </div>
        </div>
        <br>
        <br>
        <div>
          <div class="title">分支机构：</div>
        </div>
      </div>
    </form>
    <div class="button">
      <el-button type="warning" plain size="mini" disabled>取消</el-button>
      <el-button type="primary" plain size="mini" disabled>上一步</el-button>
      <el-button type="primary" plain size="mini" @click="next">下一步</el-button>
      <el-button type="success" plain size="mini">完成</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      month: "",
      insuranceCompanyChecked: "寿险公司",
      insuranceCompany: [
        {
          value: "寿险公司"
        },
        {
          value: "保险公司"
        }
      ],
      companyNameChecked: "工银安盛(寿)",
      companyName: [
        {
          value: "工银安盛(寿)"
        },
        {
          value: "农银全盛(寿)"
        }
      ],
      filePath: "",
      firstNextDateChecked: "",
      firstNextDate: [
        {
          value: "首期"
        },
        {
          value: "续期"
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    next() {
      this.$router.push({ path: "someCheckNext" });
    },
  }
};
</script>
<style lang='scss' scoped>
@import "../../../style/reset.css";
fieldset {
  margin: 35px 50px 10px 20px;
  padding: 5px;
}
.title {
  display: inline-block;
  width: 200px;
  text-align: right;
  padding: 5px;
}
.content {
  display: inline-block;
  margin-bottom: 5px;
}
#behindFieldset {
  margin-left: 25px;
}
.button {
  margin-left: 300px;
  margin-top: 50px;
}
form {
  width: 100%;
  height: 100%;
}
</style>