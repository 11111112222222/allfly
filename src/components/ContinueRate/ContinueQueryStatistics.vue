<!-- 继续率查询统计 -->
<template>
  <div>
    <el-container style="height: calc(100vh -20px); border: 1px solid #eee">
  <el-aside width="300px" style="background-color: rgb(238, 241, 246); padding:10px">
     <div class="row policyNumber">
          <div class="title">
            <span>继续率月份</span>
          </div>
           <el-date-picker
           size="mini"
      v-model="value4"
      type="month"
      placeholder="选择月">
    </el-date-picker>
         
          
        </div>
        <div class="row policyNumber">
          <div class="title">
            <span>计算跨度</span>
          </div>
          <el-select
            size="mini"
            v-model="numberSel1"
            placeholder="请选择"
          >
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
          <el-select
            size="mini"
            v-model="numberSel2"
            placeholder="请选择"
          >
            <el-option
              v-for="item in numberOpt2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          
        </div>
        <h3>分支机构类型</h3>
        
        <div class="row policyNumber">
          <div class="title">
            <span>对象</span>
          </div>
          <el-select
            size="mini"
            v-model="numberSel3"
            placeholder="请选择"
          >
            <el-option
              v-for="item in numberOpt3"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          
        </div>
        <div class="row policyNumber">
          <div class="title">
            <span>查询维度</span>
          </div>
          <el-select
            size="mini"
            v-model="numberSel4"
            placeholder="请选择"
          >
            <el-option
              v-for="item in numberOpt4"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          
        </div>
        <div class="oprateBtn">
            <el-button
              type="primary"
              size="mini"
            >查询</el-button>
            
            </div>
  </el-aside>
  
  <el-container>
    
    <el-header style="text-align: left; font-size: 16px">
      继续率查询统计
      </el-header>
      <div class="record-identifier">记录标识:1/180</div>
    <el-main>
      <el-table :data="tableData" border max-height="440">
        <el-table-column type="index" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="date" label="继续率发生月份">
        </el-table-column>
        <el-table-column prop="name" label="单位" >
        </el-table-column>
        <el-table-column prop="name" label="职级">
        </el-table-column>
        <el-table-column prop="name" label="员工编号">
        </el-table-column>
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="name" label="应收继续保费">
        </el-table-column>
        <el-table-column prop="name" label="实收继续保费">
        </el-table-column>
        <el-table-column prop="address" label="R13">
        </el-table-column>
      </el-table>
      <div class="inBtn">
                    <el-button type="primary" size="mini">导出Excel</el-button>
                    <el-button type="primary" size="mini">所选机构保单明细导出</el-button>
                </div>
                <div class="oprateBtn">
                    <!-- <el-button type="danger" size="mini">删除</el-button> -->
                    <el-button type="primary" size="mini">保单明细</el-button>
                    <!-- <el-button type="success" size="mini">新增一笔</el-button> -->
                </div>
    </el-main>
  </el-container>
</el-container>

  </div>
</template>

<script>
export default {
  components: {},

  data () {
    const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
        numberSel: "2008",
      numberSel1: "年度",
      numberSel2: "R13",
      numberSel3: "个人",
      numberSel4: "个人",
        value4: '2019年1月',
      numberOpt: [
        {
          value: "选项1",
          label: "保单号码"
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
          label: "年度"
        },
        {
          value: "选项2",
          label: "季度"
        },
        {
          value: "选项3",
          label: "月度"
        }
      ],
      numberOpt2: [
        {
          value: "选项1",
          label: "R13"
        },
        {
          value: "选项2",
          label: "季度"
        },
        {
          value: "选项3",
          label: "月度"
        }
      ],
      numberOpt3: [
        {
          value: "选项1",
          label: "个人"
        },
        {
          value: "选项2",
          label: "季度"
        },
        {
          value: "选项3",
          label: "月度"
        }
      ],
      numberOpt4: [
        {
          value: "选项1",
          label: "个人"
        },
        {
          value: "选项2",
          label: "季度"
        },
        {
          value: "选项3",
          label: "月度"
        }
      ],
      }
  },

  methods: {},

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  destroyed () {}

}

</script>
<style lang='scss' scoped>

.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .row {
    margin-bottom:20px;
    .title {
      margin-bottom:10px;
    }
  }
  h3 {
    margin-bottom: 30px;
  }
  .oprateBtn{
    float:left;
   margin-left:200px;
  }
  .record-identifier {
    float:left;
    margin-left: 20px;
    margin-top:10px;
  }
  .oprateBtn {

  float: right;
  margin-top: 5px;
}
.inBtn{
  float: left;
   margin-top: 5px;
}
</style>