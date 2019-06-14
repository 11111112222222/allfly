<template>
<div class="page">
    <!-- <fieldset>
        <legend>个人绩效预警</legend> -->
        <div class="yeJiContent">
            <div class="tabSecondContent">
                    <div class="title">根节点间选择</div>
                    <div class="content">
                        分支机构&nbsp;<el-select v-model="branchSelectValue" placeholder="请选择" size="mini" style="width:200px">
                            <el-option
                            v-for="item in branchOpt"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        &nbsp;&nbsp;人员&nbsp;<el-input v-model="checkObject" size="mini" placeholder="请输入内容" style="width:300px;"></el-input>
                        <el-button type="info" size="mini" @click="dialogVisible=true">...</el-button>
                        <SearchPerson v-if="dialogVisible" :visible.sync="dialogVisible" @selectPerson="selectPerson"></SearchPerson>
                    </div>
            </div>
            <div class="tabSecondContent">
                    <div class="title">上级类型选择</div>
                    <div class="content">
                         <el-select v-model="bossSelectValue" placeholder="请选择" size="mini" style="width:200px">
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
                        style="width:200px"
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
            <el-tree :data="treeData" :props="defaultProps"  @node-click="handleNodeClick" ref="tree"></el-tree>
        </div>
        <el-row :gutter="20">
        <el-col :span="18">
             <el-table
                    size="mini"
                    :data="recordList1"
                    border
                    fit
                    style="width: 100%"
                   >
                     <el-table-column v-for="item in tableHead1" :key="item.property" :label="item.label" :property="item.property" :fixed="item.fixed" :width="item.width" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <div v-if="item.oper">
                                <el-button  type="primary" size="small" @click="editInformation(scope.row)">查看/编辑</el-button> 
                            </div>
                            <div v-else>
                                {{ scope.row[item.property]}}
                            </div>
                        </template>
                    </el-table-column>   
                </el-table>
                <el-dialog title="人事组织结构详细信息" :visible.sync="personalDetailDailog">
                    <p>陈娟的详细信息</p>
                    <el-table
                    size="mini"
                    :data="recordList2"
                    border
                    fit
                    style="width: 100%"
                   >
                     <el-table-column v-for="item in tableHead2" :key="item.property" :label="item.label" :property="item.property" :fixed="item.fixed" :width="item.width" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <div v-if="item.oper">
                                <el-button  type="primary" size="small" @click="editInformation(scope.row)">查看/编辑</el-button> 
                            </div>
                            <div v-else>
                                {{ scope.row[item.property]}}
                            </div>
                        </template>
                    </el-table-column>   
                </el-table>
                </el-dialog>
        </el-col>
        <el-col :span="6">
             <el-button type="primary" size="mini" @click="readPersonalDetail">查看个人明细</el-button>
             <el-button type="primary" size="mini">导出Excel</el-button>
        </el-col>
        </el-row>
    
</div>
</template>

 <script type="text/ecmascript-6">
import SearchPerson from "./SearchPerson.vue"
export default {
 components:{SearchPerson}, 
 data() {
 return {
   branchSelectValue:'',
   branchOpt:[{
          value: '恩施分公司',
          label: '恩施分公司'
        }, {
          value: '安徽分公司',
          label: '安徽分公司'
        }],
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
    dialogVisible:false,
    treeData:[{
          id:'员工组织结构图',
          label: '员工组织结构图',
          children: [{
            id:'1',
            label: '程娟【100001】',
            children: [{label: '王雪娟【1000021】',id:'安徽分公司-营销部'},{label: '胡温家【100003】',id:'安徽分公司-运营部'},] 
            },
           ]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tempPerson:'',
        recordList1: [{fyc:'0',cfyc:'',newBill:'',money:'',introducer:'',topBoss:'',boss:'',boss1:''}],
         tableHead1:[
            {label:'个人FYC',property:'fyc',width:''},
            {label:'CFYC',property:'cfyc',width:''},
            {label:'新契约件数',property:'newBill',width:''},
            {label:'保费',property:'money',width:''},
            {label:'介绍人',property:'introducer',width:''},
            {label:'关系上属',property:'topBoss',width:''},
            {label:'行政主管',property:'boss',width:''},
            {label:'行政主管2',property:'boss1',width:''},
           ],
        personalDetailDailog:false,
         recordList2: [{index:'0',classify:'电销件',fyc:'',cfyc:'',newBill:'',money:''},
         {index:'1',classify:'个人件',fyc:'',cfyc:'',newBill:'',money:''},
         {index:'2',classify:'公司件',fyc:'',cfyc:'',newBill:'',money:''},
         {index:'3',classify:'总计',fyc:'',cfyc:'',newBill:'',money:''},],
         tableHead2:[
            {label:'序号',property:'index',width:''},
            {label:'承揽型别',property:'classify',width:''},
            {label:'个人fyc',property:'fyc',width:''},
            {label:'CFYC',property:'cfyc',width:''},
            {label:'新契约件数',property:'newBill',width:''},
            {label:'保费',property:'money',width:''},
           ],
 }
 },
 methods:{
    selectPerson(){
      
    },
    handleNodeClick(data){
         console.log(data);
        this.tempPerson=data.id;
    },
    readPersonalDetail(){
        this.personalDetailDailog=true
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
    min-height:200px;
}
.el-row {
    margin-top: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>