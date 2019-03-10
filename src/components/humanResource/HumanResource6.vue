<template>
<div class="page">
    <!-- <fieldset>
        <legend>个人绩效预警</legend> -->
        <div class="yeJiContent">
            <div class="tabSecondContent">
                    <div class="title">根节点间选择</div>
                    <div class="content">
                        <el-input v-model="checkObject" size="mini" placeholder="请输入内容" style="width:300px;"></el-input>
                        <el-button type="info" size="mini">...</el-button>
                    </div>
            </div>
            <div class="tabSecondContent">
                    <div class="title">上级类型选择</div>
                    <div class="content">
                         <el-select v-model="bossSelectValue" placeholder="请选择" size="mini">
                            <el-option
                            v-for="item in bossSelecOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-checkbox v-model="isWorkchecked">显示离职人员</el-checkbox>
                    </div>
            </div>
            <div class="tabSecondContent">
                    <div class="title">检查日期点</div>
                    <div class="content">
                        <el-date-picker
                        size="mini"
                        v-model="checkMonth"
                        type="month"
                        placeholder="选择月">
                        </el-date-picker>
                    </div>
            </div>
            <div class="tabSecondContent">
                    <div class="title">显示字段选择</div>
                    <div class="content">
                             <el-checkbox-group v-model="checkList1">
                                <el-checkbox label="姓名"></el-checkbox>
                                <el-checkbox label="编号"></el-checkbox>
                                <el-checkbox label="部门"></el-checkbox>
                                <el-checkbox label="入司日期"></el-checkbox>
                                <el-checkbox label="当前的在职状态"></el-checkbox>
                                <el-checkbox label="职务名称"></el-checkbox>
                                <el-checkbox label="职务代码"></el-checkbox>
                            </el-checkbox-group>
                    </div>
            </div>
            <div class="contentbottom">
                <el-button type="primary" size="mini">查询</el-button>
                <el-button type="primary" size="mini">打印预览</el-button>
                <el-button type="primary" size="mini">打印</el-button>
            </div>
        </div>
    <!-- </fieldset> -->
        <div class="searchContent">
            <span class="el-icon-menu">员工组织结构图</span>
        </div>
        <div class="contentbottom">
            <el-button type="primary" size="mini">查看个人明细</el-button>
            <el-button type="primary" size="mini">导出Excel</el-button>
        </div>
    
</div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
   checkObject:'',
   checkMonth:'',
   bossSelectValue:'',
   bossSelecOptions: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
    isWorkchecked:false,
    checkList1:[],
    checkList2:'',
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
.yeJiContent{
    border: 1px solid #ebeef5;
    padding: 10px;
}
.tabSecondContent{
    display:flex;
    align-items:baseline;
}
.title{
    display: inline-block;
    width:100px;
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
.searchContent{
    border: 1px solid #ebeef5;
    padding: 10px;
    margin-top:10px;
    min-height:300px;
}
</style>