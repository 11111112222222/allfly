<!-- 保险公司继续率查询统计 -->
<template>
  <div>
    <el-container style="height: calc(100vh -20px); border: 1px solid #eee">
      <el-aside
        width="300px"
        style="background-color: rgb(238, 241, 246); padding:10px"
      >
        <h3>参数设置</h3>
        <div class="line"></div>
        <div class="row policyNumber">
          <div class="title">
            <span>保险公司</span>
          </div>
          <el-select size="mini" v-model="numberSel1" placeholder="请选择">
            <el-option
              v-for="item in numberOpt1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="row policyNumber">
          <div class="title">
            <span>继续率类型</span>
          </div>
          <el-select size="mini" v-model="numberSel2" placeholder="请选择">
            <el-option
              v-for="item in numberOpt2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="row policyNumber">
          <div class="title">
            <span>保险统计周期</span>
          </div>
          <el-row :gutter="20">
            <el-col :span="10">
              <el-select size="mini" v-model="numberSel" placeholder="请选择">
                <el-option
                  v-for="item in numberOpt"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="10">
              <el-select size="mini" v-model="numberSel3" placeholder="请选择">
                <el-option
                  v-for="item in numberOpt3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
          </el-row>
        </div>

        <div class="row policyNumber">
          <div class="title">
            <span>保单承保区间</span>
          </div>
          <el-date-picker
            style="width:98%"
            size="mini"
            v-model="IndexDate"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="datepickerOpt"
          >
          </el-date-picker>
        </div>
        <div class="line"></div>
        <p>需统计的数据笔数：1</p>
        <div class="oprateBtn">
          <el-button type="primary" size="mini">开始</el-button>
        </div>
      </el-aside>

      <el-container>
        <el-header style="text-align: left; font-size: 16px">
          保险公司继续率查询统计
        </el-header>
        <div class="record-identifier">记录标识:1/180</div>
        <el-main>
          <el-table :data="tableData" border max-height="440">
            <el-table-column type="index" label="序号" width="50">
            </el-table-column>
            <el-table-column prop="date" label="保险公司">
            </el-table-column>
            <el-table-column prop="name" label="承保月份"> </el-table-column>
            <el-table-column prop="name" label="继续率类型"> </el-table-column>
            <el-table-column prop="name" label="参照年度缴次"> </el-table-column>
            <el-table-column prop="name" label="应收保费"> </el-table-column>
            <el-table-column prop="name" label="应收继续保费">
            </el-table-column>
            <el-table-column prop="name" label="应收年度缴次">
            </el-table-column>
            <el-table-column prop="address" label="R13"> </el-table-column>
          </el-table>
          <Dialog :dialogFormVisible="dialogFormVisible" :tableData="tableData1" @change="change"></Dialog>
          <div class="inBtn">
            <el-button type="primary" size="mini" @click="derive">导出Excel</el-button>
          </div>
          <div class="oprateBtn">
            <el-button type="primary" size="mini"@click="jumpToDetail">保单明细</el-button>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Dialog from 'base/dialog/dialog.vue'
export default {
  components: {
    Dialog
  },

  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      dialogFormVisible:false,
      tableData: Array(20).fill(item),
      tableData1: [
        {
          date: "2016-05-03",
          name: "序号",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "继续率发生月份",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "单位",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "职级",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "员工编号",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "姓名",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "应收继续保费",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "R13",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      numberSel: "自然周期",
      numberSel1: "工银安盛（寿）",
      numberSel2: "R13",
      numberSel3: "年",
      IndexDate: "",
      datepickerOpt: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      numberOpt: [
        {
          value: "选项1",
          label: "自然周期"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        }
      ],
      numberOpt1: [
        {
          value: "选项1",
          label: "工银安盛（寿）"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        }
      ],
      numberOpt2: [
        {
          value: "选项1",
          label: "R13"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        }
      ],
      numberOpt3: [
        {
          value: "选项1",
          label: "年"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        }
      ]
    };
  },

  methods: {
    change() {
      this.dialogFormVisible=false
    },
    derive() {
      this.dialogFormVisible = true;
    },
    jumpToDetail(){
      this.$router.push({path:"/user/COSDetail",query:{instance: this.tableData1}})
    },
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {}
};
</script>
<style lang='scss' scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.row {
  margin-bottom: 20px;
  .title {
    margin-bottom: 10px;
  }
}
h3 {
  margin-bottom: 10px;
}
.oprateBtn {
  float: left;
  margin-left: 200px;
}
.record-identifier {
  float: left;
  margin-left: 20px;
  margin-top: 10px;
}
.oprateBtn {
  float: right;
  margin-top: 5px;
}
.inBtn {
  float: left;
  margin-top: 5px;
}
.line {
  border: 1px solid #ddd;
  margin-bottom: 20px;
}
</style>