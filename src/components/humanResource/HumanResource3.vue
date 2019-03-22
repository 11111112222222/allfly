<template>
<div class="page">
    <!-- <fieldset>
        <legend>个人绩效预警</legend> -->
        <div class="yeJiContent">
            <div class="tabSecondContent">
                    <div class="title">查核对象</div>
                    <div class="content">
                        <el-input v-model="checkObject" size="mini" placeholder="请输入内容" style="width:300px;"></el-input>
                        <el-button type="info" size="mini">...</el-button>
                    </div>
            </div>
            <div class="tabSecondContent">
                    <div class="title">基础月份</div>
                    <div class="content">
                        <el-date-picker
                        size="mini"
                        v-model="basicMonth"
                        type="month"
                        placeholder="选择月">
                        </el-date-picker>
                    </div>
            </div>
             <div class="tabSecondContent">
                    <div class="title tabletitle">查核标准</div>
                    <div class="content tableContent">                    
                       <el-table
                            size="mini"
                            :data="recordList1"
                            border
                            style="width: 100%"
                            max-height="550">
                            <el-table-column
                            type="selection"
                            width="55">
                            </el-table-column>
                            <el-table-column
                            type="index"
                            width="50">
                            </el-table-column>
                            <el-table-column  label="姓名"  width="180">
                            <template slot-scope="scope">
                                  <el-select v-model="recordList1[scope.$index].name" placeholder="请选择" size="mini" @change="selectIndex(recordList1[scope.$index],scope.$index)">
                                    <el-option
                                    v-for="item in recordList1Options.name"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </template>
                            </el-table-column>
                            <el-table-column  label="范畴" width="180">
                            <template slot-scope="scope">
                                  <el-select v-model="recordList1[scope.$index].random" placeholder="请选择" size="mini" @change="selectIndex(recordList1[scope.$index],scope.$index)">
                                    <el-option
                                    v-for="item in recordList1Options.random"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </template>  
                            </el-table-column>
                            <el-table-column  label="对象职级" width="180">
                            <template slot-scope="scope">
                                  <el-select v-model="recordList1[scope.$index].rank" placeholder="请选择" size="mini" @change="selectIndex(recordList1[scope.$index],scope.$index)">
                                    <el-option
                                    v-for="item in recordList1Options.rank"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </template>                                                      
                            </el-table-column>
                            <el-table-column  label="期间" width="180">
                            <template slot-scope="scope">
                                  <el-select v-model="recordList1[scope.$index].duringTime" placeholder="请选择" size="mini" @change="selectIndex(recordList1[scope.$index],scope.$index)">
                                    <el-option
                                    v-for="item in recordList1Options.duringTime"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </template>                                                        
                            </el-table-column>  
                        </el-table>
                    </div>
                </div>
        </div>
    <!-- </fieldset> -->
    <div class="contentbottom">
        <el-button type="primary" size="mini">重新计算</el-button>
        <el-button type="primary" size="mini">取消</el-button>
    </div>
    
</div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
   checkObject:'',
   basicMonth:'',
   recordList1: [{
          random: '2016-05-03',
          name: '王小虎',
          rank: '上海',
          duringTime: '普陀区',
         
        },{
          random: '2016-05-03',
          name: '王小虎',
          rank: '上海',
          duringTime: '普陀区',
         

        }],
    recordList1Options:{name:[{value: '黄金糕',label: '黄金糕'}, {value: '双皮奶',label: '双皮奶'}],
                        random:[{value: '唐美琪',label: '唐美琪'}, {value: '严裕州',label: '严裕州'}],
                        rank:[{value: '黄金糕',label: '黄金糕'}, {value: '双皮奶',label: '双皮奶'}],
                        duringTime:[{value: '唐美琪',label: '唐美琪'}, {value: '严裕州',label: '严裕州'}],
    },
 }
 },
 components: {

 },
 methods:{
    handleToggleTab(){
         this.activeTab="listTab"
     },
   
    //每选择一次都要重新修改要上传的数据porperty代表每一行的数据，index代表第几行
    selectIndex(porperty,index){
        console.log('porperty',porperty);
        console.log('index',index);
    }
 }
}
</script>

<style scoped lang="scss">
.page{
  padding: 10px 30px 0 30px;
  height:100%;
  overflow-y:scroll;
}
fieldset {
    padding: .35em .625em .75em;
    margin: 0 2px;
    border: 1px solid #ebeef5;
}
legend {
    padding: .5em;
    border: 0;
    width: auto;
}
.tabSecondContent{
    display:flex;
    align-items:baseline;
}
.title{
    display: inline-block;
    width:60px;
    text-align: right;
    padding:10px 10px 10px 0px;
    vertical-align: middle;
}
.content{
    // width:800px;
    // display:flex;
    // align-items:baseline;   
    // justify-content:space-between; 
}
.contentbottom{
    height:30px;
    margin-top:10px;
    line-height: 30px;
    text-align:middle; 
}
.tableContent{
    width:900px;
    padding:10px 10px 10px 0px;
}
</style>