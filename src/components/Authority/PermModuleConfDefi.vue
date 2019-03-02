<!-- 权限模组配置定义 -->
<template>
  <div>
    <el-container style="height: calc(100vh - 40px); border: 1px solid #eee">
      <el-aside
        width="300px"
        style="background-color: rgb(238, 241, 246)"
      >
        <el-menu default-active="1"  @open="handleOpen"
      @close="handleClose">
          <el-submenu
            index="1"
          >
            <template slot="title"><i class="el-icon-message"></i>系统模块管理</template>

            <el-submenu index="1-4">
              <template slot="title">&lt;类01&gt;保单</template>
              <el-menu-item
                @click="jumpToDetail(item.name)"
                v-for="(item,i) in navList"
                :key="i"
                :index="item.name"
              >
                {{ item.navItem }}
              </el-menu-item>
            </el-submenu>

           
          </el-submenu>

        </el-menu>
      </el-aside>

      <el-container>

        <el-main>
          <div v-if="show === 1">
            <el-table
              size="mini"
              height="calc(100vh - 40px)"
              :data="tableData1"
              border
              style="width: 100%"
            >
              <el-table-column
                prop="date"
                label="窗体名称"
                width="180"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="描述"
                width="180"
              >
              </el-table-column>

            </el-table>
          </div>
          <div v-if="show === 2">
            <el-table
              height="calc(100vh - 40px)"
              size="mini"
              :data="tableData2"
              border
              style="width: 100%"
            >
              <el-table-column
                prop="date"
                label="窗体名称"
                width="180"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="描述"
                width="180"
              >
              </el-table-column>

            </el-table>

          </div>
        </el-main>
      </el-container>
      <el-container>
        <el-main style="border:1px solid #eee;border-right:0; width:100%;">
          <div v-if="show === 1">
            <el-table
              height="calc(100vh - 40px)"
              size="mini"
              :data="tableData3"
              border
              style="width: 100%"
            >
              <el-table-column
                prop="date"
                label="控制项"
                width="180"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="说明"
                width="180"
              >
              </el-table-column>
              <el-table-column
                prop="address"
                label="状态"
              >
              </el-table-column>
            </el-table>
          </div>
          <div v-if="show === 2">
            <el-table
              size="mini"
              height="calc(100vh - 40px)"
              :data="tableData4"
              border
              style="width: 100%"
            >
              <el-table-column
                prop="date"
                label="控制项"
                width="180"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="说明"
                width="180"
              >
              </el-table-column>
              <el-table-column
                prop="address"
                label="状态"
              >
              </el-table-column>
            </el-table>

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
      tableData1: [
        {
          date: "保单受理作业交费记录编辑",
          name: "进行保单交费数据",
          address: "已启用"
        },
        {
          date: "保单受理作业编辑窗体",
          name: "进行保单数据编辑",
          address: "已启用"
        },
        {
          date: "保单受理作业查询窗体",
          name: "进行保单受理管理",
          address: "已启用"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "已启用"
        }
      ],
      tableData2: [
        {
          date: "2",
          name: "王小虎",
          address: "已启用"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "已启用"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "已启用"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "已启用"
        }
      ],
      tableData3: [
        {
          date: "新增",
          name: "新增一笔保单",
          address: "已启用"
        },
        {
          date: "编辑",
          name: "编辑一笔保单",
          address: "已启用"
        },
        {
          date: "查询",
          name: "根据条件进行查询",
          address: "已启用"
        },
        {
          date: "删除",
          name: "删除一笔保单",
          address: "已启用"
        },
        {
          date: "自身分支机构",
          name: "只查询自身分支",
          address: "已启用"
        },
        {
          date: "其他分支机构",
          name: "只查询自身分支",
          address: "已启用"
        },
        {
          date: "导出Excel",
          name: "导出功能",
          address: "已启用"
        },
        {
          date: "保险公司权限",
          name: "可以查询所有",
          address: "已启用"
        }
      ],
      tableData4: [
        {
          date: "4",
          name: "王小虎",
          address: "已启用"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "已启用"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "已启用"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "已启用"
        }
      ],
      navList: [
        { name: "群0101", navItem: "车险保单导入" },
        { name: "群0102", navItem: "公司：保单及客户数据导入" },
        { name: "群0103", navItem: "公司：编辑权" },
        { name: "群0104", navItem: "公司查看权" },
        { name: "群0105", navItem: "公司：车险编辑权" },
        { name: "群0106", navItem: "公司：车险察看权" },
        { name: "群0107", navItem: "公司：车险新契约报表" },
        { name: "群0108", navItem: "公司：交费记录查询" },
        { name: "群0109", navItem: "公司：新契约报表" },
        { name: "群0109", navItem: "公司：续期管理" },
        { name: "群0109", navItem: "公司：编辑权" },
        { name: "群0109", navItem: "公司：查看权" }
      ]
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
     handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
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