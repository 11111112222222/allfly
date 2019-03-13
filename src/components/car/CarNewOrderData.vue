<template>
 <div class="page">
     <header>
          <span @click="goBack"><i class="el-icon-back"></i></span> 
         <span>新契约受理报表--报表数据预览</span>
         <!-- <span @click="goBack"><i class="el-icon-close icon1"></i></span>  -->
     </header>
        <table class="firstTable">
         <tr>
             <td>保险公司</td>
             <td></td>
             <td>对象范围</td>
             <td></td>
         </tr>
         <tr>
             <td>日期区间</td>
             <td></td>
             <td>保单状态</td>
             <td></td>
         </tr>
        </table>
       
        <div class="secondTable">
            <div class="tabnav">
                <span>记录标识：</span>
                <div>
                    <span>交强险总保费：</span>
                    <span>商业险总保费：</span>
                    <span>车船税总保费：</span>
                </div>
                
            </div>
            <el-table
            class="table"
            :data="tableData3"
            border
            style="width: 100%"
            size="mini"
            height="750">
                <el-table-column
                type="index"
                width="50">
                </el-table-column>
                <el-table-column
                prop="date"
                label="保险公司"
                width="120"
                sortable :show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column
                prop="name"
                label="起保日期"
                width="100"
                sortable :show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column
                prop="province"
                label="交强险保单号码"
                width="140"
                sortable :show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column
                prop="city"
                label="商业险保单号码"
                width="140"
                sortable :show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column
                prop="address"
                label="车牌号码"
                width="120"
                sortable :show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column
                prop="zip"
                label="保单类型"
                width="120"
                sortable :show-overflow-tooltip="true">
                </el-table-column>
                 <el-table-column
                prop="zip"
                label="出单日期"
                width="100"
                sortable :show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column
                prop="date"
                label="交费日期"
                width="100"
                sortable :show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column
                prop="name"
                label="投保人"
                width="100"
                sortable :show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column
                prop="province"
                label="投保人证件号码"
                width="140"
                sortable :show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column
                prop="city"
                label="交强险保费"
                width="120"
                sortable :show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column
                prop="address"
                label="商业险保费"
                width="120"
                sortable :show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column
                prop="zip"
                label="承揽人A单位"
                width="120"
                sortable :show-overflow-tooltip="true">
                </el-table-column>
                 <el-table-column
                prop="zip"
                label="承揽人A部门"
                width="120"
                sortable :show-overflow-tooltip="true">
                </el-table-column>
                 <el-table-column
                prop="zip"
                label="承揽人A姓名"
                width="120"
                sortable :show-overflow-tooltip="true">
                </el-table-column>
            </el-table>
            <div class="pageBtn">
                <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
                </el-pagination>
            </div>
            <div class="oprateBtn">
                <el-button type="primary" size="mini">导出Excel</el-button>
            </div>
        </div>
         
        
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
    findOrderItem:'',
    tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
 }
 },
 methods:{
   fetchData(){
       this.findOrderItem=this.$route.query.findOrderItem;
       console.log('this.findOrderItem',this.findOrderItem);
   },
   goBack(){
       history.go(-1);
   }
 },
 components: {

 },
 beforeRouteEnter (to, from, next) {
     next(vm=>{
        vm.fetchData();
     })
 }
}
</script>

<style scoped lang="scss">
.page{
  //padding: 10px 30px 0 30px;
  height:100%;
  overflow-y:scroll;
}
header{
    width:100%;
    background-color:#dddefe;
}
header span:first-child{
    height: 30px;
    line-height: 30px;
    margin-left:5px;
}
header span:nth-child(3){
    float:right;
    height: 30px;
    line-height: 30px;
    margin-right:5px; 
}
.firstTable,.secondTable,.footer{  
    width:90%;
    margin:auto;
    margin-top:10px;
    box-sizing: border-box;
}

.firstTable tr td{
    border:1px solid #ebeef5;
    border-collapse: collapse;
    height: 20px;
    line-height: 20px;
    padding:5px;
}
.firstTable tr td:first-child,.firstTable tr td:nth-child(3){
    width:15%;
    background-color:rgba(#ebeef5,0.5);
}
.firstTable tr td:nth-child(2),.firstTable tr td:nth-child(4){
    width:30%;
}
.secondTable{
    margin-top:20px;
}
.secondTable .tabnav{
//    background-color:rgba(#ebeef5,0.5); 
   background-color:rgb(136, 195, 255);
    height: 30px;
    line-height: 30px;
    padding:0 10px;
}
.secondTable .tabnav>span:first-child{
    float:left;
}
.secondTable .tabnav>div{
    float:right;

}
.footer{
    position:fixed;
    bottom:10px;
    left:260px;
}
.footer button{
    height: 30px;
    line-height: 30px;
    padding:0px 5px;
    background-color:#409EFF; 
    color:#fff;
    border-radius:5px;
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
        height:370px !important
        }
    }
</style>
