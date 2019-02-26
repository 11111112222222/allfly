<template>
 <div class="page" style="height:100%">
    <el-tabs type="border-card" v-model="activeTab" style="height:100%;overflow-y:auto;">
        <el-tab-pane label="结算费率参数区别" name="searchTab">
            <div class="tabContent">
                <el-table
                    ref="recordTable"
                    size="mini"
                    border
                    height="250px"
                    :data="typeList"
                    highlight-current-row
                    @row-click="setOrderNum">
                    <el-table-column
                    property="id"
                    label="ID"
                    width="50">
                    </el-table-column>
                    <el-table-column
                    property="address"
                    label="项目名称"
                    sortable
                    width="500">
                    </el-table-column>
                    <el-table-column
                    property="name"
                    label="说明"
                    sortable>
                    </el-table-column>
                </el-table>
                <fieldset>
                    <legend>
                        说明
                    </legend>
                    <div>
                        <el-input
                        type="textarea"
                        :rows="3"
                        placeholder="请输入内容"
                        v-model="typeStrate">
                        </el-input>
                    </div>
                </fieldset>
                <div class="oprateBtn">
                    <el-button type="primary" size="mini">应用</el-button>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="费率参数名称" name="listTab">
            <div class="tabContent">
                <el-table
                    ref="recordTable"
                    size="mini"
                    border
                    height="250px"
                    :data="nameList"
                    highlight-current-row
                    @row-click="setOrderNum">
                    <el-table-column
                    property="id"
                    label="ID"
                    width="50">
                    </el-table-column>
                    <el-table-column
                    property="address"
                    label="项目名称"
                    sortable
                    width="500">
                    </el-table-column>
                    <el-table-column
                    property="name"
                    label="说明"
                    sortable>
                    </el-table-column>
                </el-table>
                <fieldset>
                    <legend>
                        说明
                    </legend>
                    <div>
                        <el-input
                        type="textarea"
                        :rows="3"
                        placeholder="请输入内容"
                        v-model="nameStrate">
                        </el-input>
                    </div>
                </fieldset>
                <div class="oprateBtn">
                    <el-button type="primary" size="mini">应用</el-button>
                </div>
            </div>
        </el-tab-pane>
    </el-tabs>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
    activeTab:'searchTab',
    typeStrate:'',
    typeList: [{
          id: '11',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '12',
          name: '小虎',
          address: '北京市普陀区金沙江路 1517 弄'
    }],
    nameStrate:'',
    nameList: [{
          id: '11',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '22',
          name: '小虎',
          address: '北京市普陀区金沙江路 1517 弄'
    }]
 }
 },
 components: {

 },
 mounted() {
     console.log('进入了')
 },
 methods:{
     handleToggleTab(){
         this.activeTab="listTab"
     },
     editorBtn(){
         this.$router.push({path:"/user/claimEditor",query:{claimOrderNum:this.claimOrderNum}})
     },
     setOrderNum(row){  
         console.log("当前行",row);
     }
 },
//  watch: {
//      '$route':"checked"
//  },
 beforeRouteEnter (to, from, next){
  //console.log("准备进入路由模板");
    next(vm=>{
      //通过vm访问组件实例
     // vm.$root.eventHub.$on('sendOrderNum',vm.getOrderRow);
    //   vm.fetchData();
    //   vm.getDate();
    })
  }
}
</script>

<style scoped lang="scss">
    .tabContent{
        position: relative;
        text-align: left;
        padding:0 30px;
        // height: 100%;
        // overflow: scroll;
         fieldset {
            padding: 20px 10px;
            margin:10px 0;
           // height: 90px;
            border: 1px solid #d6dbe7;
         }
    }
    .title{
        display: inline-block;
        width:150px;
        text-align: right;
        padding:10px;
    }
    .content{
        display: inline-block;
        .inputNum{
            display: inline-block;
            margin-left:10px;
        }
       
    }
    .checkbox{
        margin-right:10px;
    }
   
    .searchBtn{
        width:100px;
        margin-top:10px;
        margin-left:200px;
    }
    .totalData{
        float:left;
        height: 30px;
    }
    .listTable{
        clear: both;
        //max-width:1000px;
        width:100%;
    }
    .oprateBtn{
    //    position: fixed;;
    //    bottom:25px;
    //    right:45px;
        float: right;
        margin-top:20px;
    }

</style>
