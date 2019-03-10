<template>
 <div class="page" style="height:100%">
    <el-tabs type="border-card" v-model="activeTab" style="height:100%;overflow-y:auto;">
        <el-tab-pane label="代理险种费用率查询" name="searchTab">
            <div class="tabContent">
                <form action="">
                <div>
                    <div class="title">保险公司</div>
                    <div class="content">
                        <el-checkbox v-model="insurChecked" disabled class="checkbox"></el-checkbox> 
                        <el-select size="mini" v-model="compSort">
                            <el-option
                            v-for="item in sortOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>&nbsp;&nbsp;
                        <el-select
                            size="mini"
                            v-model="compSel" 
                            multiple
                            collapse-tags
                            @change="handleSelectChange">
                            <el-option
                            v-for="item in compOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>  
                <div>
                    <div class="title">险种名称</div>
                    <div class="content">
                        <el-checkbox v-model="nameChecked" class="checkbox"></el-checkbox>    
                        <el-input v-model="insuranceName" size="mini" style="width:250px"></el-input>
                    </div>
                </div>
                <div>
                    <div class="title">险种代码</div>
                    <div class="content">
                        <el-checkbox v-model="nodeChecked" class="checkbox"></el-checkbox>    
                        <el-input v-model="insuranceNode" size="mini" style="width:250px"></el-input>
                    </div>
                </div>  
                <div>
                    <div class="title">是否停售</div>
                    <div class="content">
                        <el-checkbox v-model="stopChecked" class="checkbox"></el-checkbox>    
                        <el-select size="mini" v-model="stopSort">
                            <el-option
                            v-for="item in stopOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>  
                <div>
                    <div class="title">主附约</div>
                    <div class="content">
                        <el-checkbox v-model="zfChecked" class="checkbox"></el-checkbox>    
                        <el-select size="mini" v-model="zfSort">
                            <el-option
                            v-for="item in zfOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>  
                <div>
                    <div class="title">参数区别</div>
                    <div class="content">
                        <el-checkbox v-model="paramChecked" class="checkbox"></el-checkbox>    
                        <el-select size="mini" v-model="paramSort">
                            <el-option
                            v-for="item in paramOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>  
                <div>
                    <div class="title">启售期间</div>
                    <div class="content">
                        <el-checkbox v-model="startChecked" class="checkbox"></el-checkbox>    
                        <el-date-picker
                        v-model="startTime"
                        type="daterange"
                        size="mini"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </div>  
                <div>
                    <div class="title">停售期间</div>
                    <div class="content">
                        <el-checkbox v-model="endChecked" class="checkbox"></el-checkbox>    
                        <el-date-picker
                        v-model="endTime"
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
                        height="780px"
                        :data="recordList"
                        highlight-current-row
                        @row-click="setOrderNum">
                        <el-table-column
                        type="index"
                        width="50">
                        </el-table-column>
                        <el-table-column
                        property="orderNum"
                        label="保险公司"
                        sortable :show-overflow-tooltip="true"
                        width="110">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="险种代码"
                        sortable :show-overflow-tooltip="true"
                        width="110">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="险种名称"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                        property="orderNum"
                        label="险种简称"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="主附约"
                        sortable :show-overflow-tooltip="true"
                        width="90">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="险种类别"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                         <el-table-column
                        property="name"
                        label="起售日"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="停售日"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                         fixed="right"
                        label="操作"
                        width="160">
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
                    <el-button type="primary" size="mini">导出险种Excel</el-button>
                    <el-button type="primary" size="mini">导出费率Excel</el-button>
                    <el-button type="primary" size="mini" @click="addBtn">新增一笔</el-button>
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
    insurChecked:true,
    sortOpt:[{
          value: '指定保险公司',
        }, {
          value: '所有寿险公司',
        }, {
          value: '所有产险公司',
        }],
    compSort:'指定保险公司',
    compOpt: [{
          value: '不区分',
        }, {
          value: '选项2',
        }, {
          value: '选项3',
        }, {
          value: '选项4',
        }, {
          value: '选项5',
        }],
    compSel:["不区分"],
    nameChecked:false,
    insuranceName:'',
    nodeChecked:false,
    insuranceNode:'',
    stopChecked:false,
    stopSort:'全部',
    stopOpt:[{
          value: '全部',
        }, {
          value: '现售',
        }, {
          value: '已停售',
        }],
    zfChecked:false,
    zfSort:'全部',
    zfOpt:[{
          value: '全部',
        }, {
          value: '附约',
        }, {
          value: '主约',
        }],
    paramChecked:false,
    paramSort:'全部',
    paramOpt:[{
          value: '全部',
        }, {
          value: '一般险种',
        }, {
          value: '团体险种',
        }, {
          value: '卡单险种',
        }, {
          value: '车险险种',
        }, {
          value: '财险险种',
        }, {
          value: '自营网络平台险种',
        }, {
          value: '第三方网络平台险种',
        }],
    startChecked:false,
    startTime:'',
    endChecked:false,
    endTime:'',
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
         this.$router.push({path:"/user/insuranceDetail",query:{editor:true}})
         // console.log(this.$route.meta.keepAlive+"编辑",this.$route);
     },
      addBtn(){
         this.$router.push({path:"/user/insuranceDetail",query:{editor:false}})
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
