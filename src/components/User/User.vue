<!-- 用戶界面 -->
<template>
  <div>
    <header>
      <span>合翔保险经纪有限公司核心业务处理系统 </span>
      <el-button type="info" size="mini" class="logout" @click="logout">退出</el-button>
    </header>
    <section>
      <aside>
        <el-tree :data="menu" :props="defaultProps"  @node-click="handleNodeClick"></el-tree>
      </aside>
      <content>
        <router-view/>
        <!-- <div>展示第一个组件</div>
        <div>展示第二个组件</div>
        <div>展示第三个组件</div> -->
      </content> 
    </section>
    
  </div>
</template>

<script>
import Address from 'api/addressService.js'
export default {
  components: {},

  data() {
    return {
      menu: [{
          label: '保单',
          children: [{
            label: '保单受理作业',
          },{
            label: '新契约受理报表',
          },{
            label: '保单交费记录查询',
          },{
            label: '续期应收自动化作业',
          },{
            label: '保单及客户数据导入',
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
    };
  },

  methods: {
    logout(){
       this.$router.push({ path: '/' });
       
    },
    handleNodeClick(data) {
        console.log(data.label);
        if(data.label=="保单受理作业"){
            this.$router.push({ path: '/user/orderAccept' });
        }else if(data.label=="新契约受理报表"){
          this.$router.push({ path: '/user/newOrder' });
        }
         
    }

  },

  computed: {},

  watch: {},

  created() {
    
  },

  mounted() {},

  destroyed() {}
};
</script>
<style lang='scss' scoped>
@import 'common/scss/variable.scss';

header {
  height: 40px;
  line-height: 40px;
  text-align:left;
  padding:0 10px;
  background-color: rgb(158, 184, 238);
  // display: flex;
  // align-items: center;
  // justify-content: center;
  position: relative;
  .logout {
    position: absolute;
    top:20px;
    right: 20px;
    transform: translateY(-50%);
  }
  
}
section {
  display: flex;
  height: calc(100vh - 40px);
  aside {
    min-width:200px;
    background-color: #CCCFFF;
    .el-tree{
      background-color: #CCCFFF !important;
    }
  }
  content {
    flex-grow: 1;
    // background-color:#DCDFE6;
    background-color:#fff;
    padding:10px;
  }
}
</style>