<!-- 群组相应权限管理 -->
<template>
  <div>
    <el-container style="height: calc(100vh - 40px); border: 1px solid #eee">
      <el-aside
        width="400px"
        style="background-color: rgb(238, 241, 246)"
      >
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>域用户登录默认组</template>
            <el-menu-item-group>
              <template slot="title">群01</template>
              <el-menu-item
                @click="jumpToDetail(item.name)"
                v-for="(item,i) in navList1"
                :key="i"
                :index="item.name"
              >
                {{ item.navItem }}
              </el-menu-item>
            
            </el-menu-item-group>
            <el-menu-item-group title="群02">
              <el-menu-item
                @click="jumpToDetail(item.name)"
                v-for="(item,i) in navList2"
                :key="i"
                :index="item.name"
              >
                {{ item.navItem }}
              </el-menu-item>
             
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">群04</template>
              <el-menu-item index="4-1">&lt;群0401&gt;公司业务管理组&nbsp;保单信息录入 </el-menu-item>

            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">群05</template>
              <el-menu-item
                @click="jumpToDetail(item.name)"
                v-for="(item,i) in navList5"
                :key="i"
                :index="item.name"
              >
              <!--  -->
                {{ item.navItem }}
              </el-menu-item>
             
            </el-menu-item-group>
          </el-submenu>
      
        </el-menu>
      </el-aside>

      <el-container style="marginTop:40px">

        
        <el-main>
          <div v-if="show === 1">
             
          <el-row
              :gutter="20"
              style="marginBottom:40px"
              v-for="(obj, index) in table"
              :key="index"
            >
              <el-col :span="2" :offset="2">
                <i :class="`el-icon-${obj.i}`"></i>
              </el-col>
              <el-col :span="10">
                <el-tag type="info">{{ obj.info }}</el-tag>
              </el-col>
              <el-col :span="6">
                <el-button
                  size="mini"
                  type="primary"
                  @click="dialogFormVisible = true"
                >
                  增加
                </el-button>
                <el-button size="mini" type="primary" @click="reduce(obj)">
                  移除
                </el-button>
              </el-col>
            </el-row>
            <el-dialog
              title="加入群组已经定义的权限模块"
              :visible.sync="dialogFormVisible"
            >
              <el-form :model="form">


                <el-form-item label="权限模块名称"  :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择权限模块">
                    <el-option
                      v-for="(obj, index) in table"
                      :key="index"
                      :label="obj.info"
                      :value="obj.info"
                    ></el-option>
                
                  </el-select>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="add"
                  >确 定</el-button
                >
              </div>
            </el-dialog>
          </div>
          <div v-if="show === 2">
           
             <el-row :gutter="20" style="marginBottom:40px">
          <el-col
            :span="2"
            :offset="2"
          >
            <i class="el-icon-bell"></i>

          </el-col>
          <el-col :span="6">
            <el-tag type="info">&lt;类03&gt;::客户公司:编辑权</el-tag>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="marginBottom:40px">
          <el-col
            :span="2"
            :offset="2"
          >
            <i class="el-icon-service"></i>

          </el-col>
          <el-col :span="6">
            <el-tag type="info">&lt;类06&gt;::权限密码更改</el-tag>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="marginBottom:40px">
          <el-col
            :span="2"
            :offset="2"
          >
            <i class="el-icon-menu"></i>

          </el-col>
          <el-col :span="6">
            <el-tag type="info">&lt;类01&gt;::保单公司:编辑权</el-tag>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="marginBottom:40px">
          <el-col
            :span="2"
            :offset="2"
          >
            <i class="el-icon-setting"></i>

          </el-col>
          <el-col :span="6">
            <el-tag type="info">&lt;类08&gt;::参数-系统参数:报表参数化处理</el-tag>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="marginBottom:40px">
          <el-col
            :span="2"
            :offset="2"
          >
            <i class="el-icon-rank"></i>

          </el-col>
          <el-col :span="6">
            <el-tag type="info">&lt;类01&gt;::保单-公司:新契约报表</el-tag>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="marginBottom:40px">
          <el-col
            :span="2"
            :offset="2"
          >
            <i class="el-icon-time"></i>

          </el-col>
          <el-col :span="6">
            <el-tag type="info">&lt;类01&gt;::保单-公司:交费记录查询</el-tag>
          </el-col>
        </el-row>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      show: 1,
      tableData: Array(20).fill(item),
      navList1: [
        { name: "群0101", navItem: "<群0101>公司业务管理组 保单信息录入" },
        { name: "群0102", navItem: "<群0102>公司业务管理组 保单信息管理查看" },
        { name: "群0103", navItem: "<群0103>公司业务管理组 续期管理" },
        { name: "群0104", navItem: "<群0104>保单及客户数据导入使用群组" },
        { name: "群0105", navItem: "<群0105>所属机构业务管理组 信息保单录入" },
        { name: "群0106", navItem: "<群0106>公司业务管理组 车险信息录入" },
        { name: "群0107", navItem: "<群0107>公司业务管理组 车险信息管理查看" },
        { name: "群0108", navItem: "<群0108>所属机构业务管理组 车险信息录入" },
        { name: "群0109", navItem: "<群0109>车险保单及客户数据导入使用群组" }
      ],
      navList2: [
        { name: "群0201", navItem: "<群0201>公司人力资源管理组 员工录入" },
        { name: "群0202", navItem: "<群0202>公司人力资源管理组 员工查看" },
        { name: "群0203", navItem: "<群0203>公司人力资源管理组 员工考核" },
        { name: "群0204", navItem: "<群0204>所属机构人力资源管理组 员工录入" },
        { name: "群0205", navItem: "<群0205>公司人力资源管理组 车险晋升考核" },
        {
          name: "群0206",
          navItem: "<群0206>所属机构人力资源管理组 车险晋升考核"
        },
        { name: "群0207", navItem: "<群0207>所属机构人力资源管理组 晋升考核" }
      ],
      navList5: [
        { name: "群0501", navItem: "<群0501>公司财务管理组 外部结算核查校正" },
        { name: "群0502", navItem: "<群0502>公司财务管理组 外部结算预校反馈" },
        { name: "群0503", navItem: "<群0503>公司佣前薪资调整管理组管理组" },
        { name: "群0504", navItem: "<群0504>公司财务管理组 内部结算备档计佣" },
        {
          name: "群0505",
          navItem: "<群0505>公司财务管理组 内部结算反备档反计佣"
        },
        { name: "群0506", navItem: "<群0506>公司财务管理组 内部结算车险" }
      ],
      table: [
        { i: "tickets", info: "<类03>::客户公司:编辑权" },
        { i: "service", info: "<类06>::权限密码更改" },
        { i: "setting", info: "<类08>::参数-系统参数:报表参数化处理" },
        { i: "rank", info: "<类01>::保单-公司:新契约报表" },
        { i: "time", info: "<类01>::保单-公司:交费记录查询" }
        // {i:'bell',info:'&lt;类03&gt;::客户公司:编辑权'},
        // {i:'service',info:'&lt;类03&gt;::客户公司:编辑权'}
      ],
      table1: [],

      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },

  methods: {
    jumpToDetail(name) {
      switch (name) {
        case "群0101":
          this.show = 1;
          break;
        case "群0102":
          this.show = 2;
          break;
        default:
          break;
      }
    },
    add() {
      let num = Math.floor(Math.random()*5+0)
      let i = this.table[num].i
      this.table.push(
         { i, info:  `${this.form.region}` },
      )
      this.dialogFormVisible = false
    },
    reduce(obj) {
      let index = this.table.indexOf(obj)
      this.table.splice(index,1)
      this.dialogFormVisible = false
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
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
i {
  font-size: 2 * $font-size-medium-x;
}
</style>