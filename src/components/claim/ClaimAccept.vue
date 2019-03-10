<template>
 <div class="page" style="height:100%">
    <el-tabs type="border-card" v-model="activeTab" style="height:100%;overflow-y:auto;">
        <el-tab-pane label="理赔受理作业查询" name="searchTab">
            <div class="tabContent">
                <form action="">
                <div>
                    <div class="title">保单号码</div>
                    <div class="content">
                        <el-checkbox v-model="claimNumChecked" class="checkbox"></el-checkbox>    
                        <el-input v-model="claimOrderNum" size="mini" style="width:250px"></el-input>
                    </div>
                </div>  
                <div>
                    <div class="title">分支机构</div>
                    <div class="content">
                        <el-checkbox v-model="branchChecked" class="checkbox"></el-checkbox>    
                        <el-select
                            size="mini"
                            v-model="branchSel"
                            multiple
                            collapse-tags
                            @change="handleSelectChange">
                            <el-option
                            v-for="item in branchOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div>
                    <div class="title">车牌号码</div>
                    <div class="content">
                        <el-checkbox v-model="carNumChecked" class="checkbox"></el-checkbox>    
                        <el-input v-model="carNum" size="mini" style="width:250px"></el-input>
                    </div>
                </div>  
                <div>
                    <div class="title">出单员</div>
                    <div class="content">
                        <el-checkbox v-model="createPerChecked" class="checkbox"></el-checkbox>    
                        <el-input v-model="createPerson" size="mini" style="width:250px"></el-input>
                    </div>
                </div>  
                <div>
                    <div class="title">查勘员</div>
                    <div class="content">
                        <el-checkbox v-model="examPerChecked" class="checkbox"></el-checkbox>    
                        <el-input v-model="examPerson" size="mini" style="width:250px"></el-input>
                    </div>
                </div>  
                <div>
                    <div class="title">被保人</div>
                    <div class="content">
                        <el-checkbox v-model="insuredChecked" class="checkbox"></el-checkbox>    
                        <el-input v-model="insuredPerson" size="mini" style="width:250px"></el-input>
                    </div>
                </div>  
                <div>
                    <div class="title">报案号</div>
                    <div class="content">
                        <el-checkbox v-model="reportNumChecked" class="checkbox"></el-checkbox>    
                        <el-input v-model="reportNum" size="mini" style="width:250px"></el-input>
                    </div>
                </div>  
                <div>
                    <div class="title">报案时间</div>
                    <div class="content">
                        <el-checkbox v-model="reportTimeChecked" class="checkbox"></el-checkbox>    
                        <el-date-picker
                        v-model="reportTime"
                        type="daterange"
                        size="mini"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </div>  
                <el-button type="primary" size="medium" class="searchBtn" @click="handleToggleTab">查询</el-button>
            </form>
            </div>
        </el-tab-pane>
        <el-tab-pane label="列表" name="listTab">
            <div class="tabContent">
                <div class="listTable">
                    <el-table
                        class="table"
                        ref="recordTable"
                        size="mini"
                        border
                        height="440px"
                        :data="recordList"
                        highlight-current-row
                        @row-click="setOrderNum">
                        <el-table-column
                        type="index"
                        width="50">
                        </el-table-column>
                        <el-table-column
                        property="orderNum"
                        label="保单号码"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="报案时间"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="报案号"
                        sortable :show-overflow-tooltip="true"
                         width="100">
                        </el-table-column>
                        <el-table-column
                        property="orderNum"
                        label="查勘地点"
                        sortable :show-overflow-tooltip="true"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="查勘员"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="出险经过"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="是否结案"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="任务类型"
                        sortable :show-overflow-tooltip="true"
                         width="100">
                        </el-table-column>
                        <el-table-column
                        label="操作"
                        width="150">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="deleteInfo(scope.$index,recordList)" type="danger" size="mini">删除</el-button>
                            <el-button type="primary" size="mini" @click="editorBtn(scope.row)">编辑</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="pageBtn">
                    <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
                    </el-pagination>
                </div>
                <div class="oprateBtn">
                    <el-button type="primary" size="mini">理赔报表导出</el-button>
                    <el-button type="primary" size="mini" @click="addBtn">新增理赔记录</el-button>
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
    claimNumChecked:false,
    claimOrderNum:'',
    activeTab:'searchTab',
    branchChecked:false,
    branchOpt: [{
          value: '不区分',
        }, {
          value: '选项2',
        }],
    branchSel: ["不区分"],
    carNumChecked:false,
    carNum:'',
    createPerChecked:false,
    createPerson:'',
    examPerChecked:false,
    examPerson:'',
    insuredChecked:false,
    insuredPerson:'',
    reportNumChecked:false,
    reportNum:'',
    reportTimeChecked:false,
    reportTime:'',
    totalData:0,
    recordList: [{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          orderNum: '576542526',
          name: '小虎',
          address: '北京市普陀区金沙江路 1517 弄'
    }],
    orderNum:'',
    recordListIndex:0
 }
 },
 components: {

 },
 mounted() {
     this.checked();
     console.log('进入了')
 },
 methods:{
     handleSelectChange(value){
         if(value[value.length-1]=="不区分"){
            value.splice(0,value.length-1)
         }else if(value.indexOf("不区分")!=-1){
            value.splice(value.indexOf("不区分"),1)
         }
     },
     yearSelectChange(value){
         if(value=="年期/分档"){
            this.subYearShow=true;
         }else{
            this.subYearShow=false;
         }
     },
     handleToggleTab(){
         this.activeTab="listTab"
     },
     editorBtn(){
         this.$router.push({path:"/user/claimEditor",query:{claimOrderNum:this.claimOrderNum,editor:true}})
     },
     addBtn(){
         this.$router.push({path:"/user/claimEditor",query:{claimOrderNum:this.claimOrderNum,editor:false}})
     },
     deleteInfo(index,table){
         this.$confirm('确定删除该条数据吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            table.splice(index,1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
     },
     checked(){
        //this.$root.eventHub.$on("sendOrderNum",(val)=>{
        //      for(var i=0;i<this.recordList.length;i++){
        //     if(this.recordList[i].orderNum==val){
        //         this.recordListIndex=i;
        //         console.log("forIndex",this.recordListIndex)
        //         break;
        //     }
        // }
        // })
       // console.log("index",this.recordListIndex)
        this.$refs.recordTable.setCurrentRow(this.recordList[0]);
        this.orderNum=this.recordList[0].orderNum;
     },
     getOrderRow(val){
         console.log("val",val)
       
     },
     setOrderNum(row){  
         console.log("当前行",row);
         this.orderNum=row.orderNum;
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
    fieldset {
        padding: 10px 0 10px 10px;
        margin:10px 0;
        border: 1px solid silver;
    }
    // legend {
    //     padding: .5em;
    //     border: 0;
    //     width: auto;
    // }
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
    .pageBtn{
         float: left;
        margin-top:10px;
    }
    .oprateBtn{
        float: right;
        margin-top:10px;
    }
    @media screen and (max-width: 1480px) {
        .table {
        height:470px !important
        }
    }

</style>
