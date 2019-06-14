<template>
 <div class="page">
     <header>
          <span @click="goBack"><i class="el-icon-back"></i></span> 
         <span>新契约受理报表--报表数据预览</span>
         <!-- <span @click="goBack"><i class="el-icon-close icon1"></i></span>  -->
     </header>
    <div class="firstTable">
         <table >
         <tr>
             <td>受理的保险公司</td>
             <td>{{findOrderItem.company}}</td>
             <td>对象范围</td>
             <td>{{findOrderItem.random}}</td>
         </tr>
         <tr>
             <td>日期区间</td>
             <td>{{findOrderItem.date}}</td>
             <td>保单状态、回执</td>
             <td>{{findOrderItem.orderStaus}}</td>
         </tr>
        </table>
    </div>
    <div class="secondTable">
        <div class="tabnav">
            <span>记录标识：</span>
            <span>总保费：</span>
        </div>
        <el-table
        :data="tableData3"
        border
        style="width: 100%"
        size="mini"
        height="350">
            <el-table-column
            fixed
            prop="date"
            label="日期"
            width="150">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="120">
            </el-table-column>
            <el-table-column
            prop="province"
            label="省份"
            width="120">
            </el-table-column>
            <el-table-column
            prop="city"
            label="市区"
            width="120">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址"
            width="300">
            </el-table-column>
            <el-table-column
            prop="zip"
            label="邮编"
            width="120">
            </el-table-column>
        </el-table>
        <div class="fenye">
            <el-pagination
            background
            layout="prev, pager, next"
            :size="pageSize"
            :total="totalNum"
            @current-change="pageChange">
            </el-pagination>
        </div>
    </div>
    <div class="footer">
        <el-button  size="mini" type="primary">导出excel</el-button>
        <el-button  size="mini" type="primary">A4水晶报表</el-button>
        <el-button  size="mini" type="primary" @click="dialogVisible=true">excel分类汇总</el-button>
    </div>
    <ExcelGuider  v-if="dialogVisible" :visible.sync="dialogVisible"></ExcelGuider> 
 </div>
</template>

<script type="text/ecmascript-6">
import ExcelGuider from "./ExcelGuider.vue"
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
        }],
        pageSize:10,
        totalNum:100,
        dialogVisible:false,

 }
 },
 methods:{
   fetchData(){
       this.findOrderItem=this.$route.query.findOrderItem;
       console.log('this.findOrderItem',this.findOrderItem);
   },
   goBack(){
       history.go(-1);
   },
   pageChange(){
       //当前页改变的时候
   }
 },
 components: {
    ExcelGuider
 },
 beforeRouteEnter (to, from, next) {
     next(vm=>{
        vm.fetchData();
     })
 }
}
</script>

<style scoped lang="scss">
// .page{
//   //  padding:10px 30px;
// }
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
    padding:0px 30px;
    width:100%;
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
    margin-top:10px;
}
.secondTable .tabnav{
//    background-color:rgba(#ebeef5,0.5); 
   background-color:#409EFF;
}
.secondTable .tabnav span{
    height: 30px;
    line-height: 30px;
    padding:5px;
}
.secondTable .tabnav span:first-child{
    float:left;
}
.secondTable .tabnav span:nth-child(2){
    float:right;
    margin-right:5px;

}
.fenye{
  margin-top:10px;
}
.footer{
    position:fixed;
    bottom:20px;
    left:260px;
}

</style>
