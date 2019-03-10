<template>
<div class="page">
    <el-tabs type="border-card">
    <el-tab-pane label="保险公司--单证状态">    
        <div class="yeJiContent">
            <el-row>
            <el-col :span="24">
                <span>保险公司</span>
                <span>
                    <el-select
                            size="mini"
                            v-model="companySel"
                            >
                            <el-option
                            v-for="item in companyOptions"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                    </el-select>
                </span>
                <span style="margin-left:10px;">结存</span>
                <span>
                    <el-select
                    size="mini"
                    v-model="jieChunSel"
                    >
                    <el-option
                    v-for="item in jieChunOptions"
                    :key="item.value"
                    :value="item.value">
                    </el-option>
                </el-select>
                </span>
                <span><el-button  type="primary" size="mini">汇总</el-button></span>   
            </el-col>
            </el-row>
            <div class="tabContent">
                <div class="listTable">
                   <el-table
                    size="mini"
                    :data="recordList1"
                    border
                    style="width: 100%"
                    height="400"
                    max-height="550"> 
                    <el-table-column type="expand">
                    <template slot-scope="props">
                        <div class="listTable">
                            <el-table
                            size="mini"
                            :data="props.row.detailTable"
                            border
                            style="width: 100%"
                            >       
                            <el-table-column v-for="item in tableHead1" :key="item.property" :label="item.label" :property="item.property" :fixed="item.fixed" :width="item.width" :show-overflow-tooltip="true">
                                <template slot-scope="scope">
                                    <div v-if="item.oper">
                                        <el-button  type="primary" size="small" @click="editInformation(scope.row.name)">详情</el-button> 
                                    </div>
                                    <div v-else>
                                        {{ scope.row[item.property]}}
                                    </div>
                        
                                </template>
                            </el-table-column> 
                            </el-table>
                        </div>  
                         
                    </template>
                    </el-table-column>
                    <el-table-column
                    label="保险公司"
                    prop="company">
                    </el-table-column>
                    <el-table-column
                    label="总数"
                    prop="allCount">
                    </el-table-column>
                    <el-table-column
                    label="在库"
                    prop="isBill">
                    </el-table-column>  
                    <el-table-column
                    label="领用"
                    prop="lingyong">
                    </el-table-column>
                    <el-table-column
                    label="出单（未核）"
                    prop="notCheck">
                    </el-table-column>
                    <el-table-column
                    label="出单（已核）"
                    prop="isCheck">
                    </el-table-column> 
                    <el-table-column
                    label="是否结存"
                    prop="isJieChun">
                    </el-table-column>      
                </el-table> 
                </div>
            </div>
             <div class="contentbottom">
                <el-button type="primary" size="mini" @click="ExportExcelTab1()">导出Excel</el-button>
            </div> 
            <ExportExcel v-if="dialogVisible1" :visible.sync="dialogVisible1" @selectItem="selectItem1"></ExportExcel>

            <!-- <v-wdialog  v-if="dialogVisible" :visible.sync="dialogVisible"></v-wdialog>
            <DetailBox  @hidden="hiddenShow"  v-show="showDetailBox" :mtabledetail="mtabledetail" :mtabletitle="mtabletitle"></DetailBox> -->
        </div>
    </el-tab-pane>
    <el-tab-pane label="单证库--单证状态">
         <div class="yeJiContent">
            <el-row>
            <el-col :span="24">
                <span>保险公司</span>
                <span>
                    <el-select
                            size="mini"
                            v-model="companySel"
                            >
                            <el-option
                            v-for="item in companyOptions"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                    </el-select>
                </span>
                <span style="margin-left:10px;">结存</span>
                <span>
                    <el-select
                    size="mini"
                    v-model="jieChunSel"
                    >
                    <el-option
                    v-for="item in jieChunOptions"
                    :key="item.value"
                    :value="item.value">
                    </el-option>
                </el-select>
                </span>
                <span><el-button  type="primary" size="mini">汇总</el-button></span>   
            </el-col>
            </el-row>
            <div class="tabContent">
                <div class="listTable">
                   <el-table
                    size="mini"
                    :data="recordList2"
                    border
                    style="width: 100%"
                    height="400"
                    max-height="550"> 
                    <el-table-column type="expand">
                    <template slot-scope="props">
                        <div class="listTable">
                            <el-table
                            size="mini"
                            :data="props.row.detailTable"
                            border
                            style="width: 100%"
                            >       
                            <el-table-column v-for="item in tableHead1" :key="item.property" :label="item.label" :property="item.property" :fixed="item.fixed" :width="item.width" :show-overflow-tooltip="true">
                                <template slot-scope="scope">
                                    <div v-if="item.oper">
                                        <el-button  type="primary" size="small" @click="editInformation(scope.row.name)">详情</el-button> 
                                    </div>
                                    <div v-else>
                                        {{ scope.row[item.property]}}
                                    </div>
                        
                                </template>
                            </el-table-column> 
                            </el-table>
                        </div>  
                         
                    </template>
                    </el-table-column>
                     <el-table-column
                    label="单证库"
                    prop="reporty">
                    </el-table-column>
                     <el-table-column
                    label="总数"
                    prop="allCount">
                    </el-table-column>
                     <el-table-column
                    label="在库"
                    prop="isBill">
                    </el-table-column>
                     <el-table-column
                    label="领用"
                    prop="lingyong">
                    </el-table-column>
                     <el-table-column
                    label="出单（未核）"
                    prop="notCheck">
                    </el-table-column>
                     <el-table-column
                    label="出单（已核）"
                    prop="isCheck">
                    </el-table-column>
                     <el-table-column
                    label="是否结存"
                    prop="isJieChun">
                    </el-table-column>      
                    
                </el-table> 
                </div>
            </div>
             <div class="contentbottom">
                <el-button type="primary" size="mini"  @click="ExportExcelTab2()">导出Excel</el-button>
            </div> 
            <ExportExcel v-if="dialogVisible2" :visible.sync="dialogVisible2" @selectItem="selectItem2"></ExportExcel>
        </div>
    </el-tab-pane>
           
    </el-tabs>
    
    
</div>
</template>

<script type="text/ecmascript-6">
import ExportExcel from './ExportExcel';
export default {
components: {ExportExcel},
 data() {
 return {
   companySel:'工银安盛（寿）',
   companyOptions:[{
          value: '工银安盛（寿）',
          label: '工银安盛（寿）'
        }, {
          value: '光大永明（寿）',
          label: '光大永明（寿）'
        }],
    jieChunSel:'',
    jieChunOptions:[{
          value: '否',
          label: '否'
        }, {
          value: '是',
          label: '是'
        }],

    tableHead1:[
        {label:'保险公司',property:'company',width:''},
        {label:'单证号码',property:'singleNumber',width:''},
        {label:'单证名称',property:'singleName',width:''},
        {label:'入库日期',property:'enterTime',width:''},
        {label:'状态',property:'status',width:''},
        {label:'有效期',property:'validTime',width:''},
        {label:'结存日期',property:'jiecunDate',width:''},
        {label:'单证库',property:'singleReporty',width:''},
        {label:'领用单位',property:'userBranch',width:''},
        {label:'领用人',property:'userPerson',width:''},
        ],
    recordList1: [{
          company: '工银安盛（寿）',
          allCount: '100',
          isBill: '是',
          lingyong: '20',
          notCheck: '0',
          isCheck: '0',
          isJieChun:'结存',
          detailTable:[{company:'工银安盛（寿）',singleNumber:'346',singleName:'34',enterTime:'2019-03-08',status:'在库',validTime:'2019-05-05',jiecunDate:'',singleReporty:'安徽分公司',userBranch:'',userPerson:'唐美琪'},
          {company:'工银安盛（寿）',singleNumber:'346',singleName:'34',enterTime:'2019-03-08',status:'在库',validTime:'2019-05-05',jiecunDate:'',singleReporty:'安徽分公司',userBranch:'',userPerson:'唐美琪'},
          {company:'工银安盛（寿）',singleNumber:'346',singleName:'34',enterTime:'2019-03-08',status:'在库',validTime:'2019-05-05',jiecunDate:'',singleReporty:'安徽分公司',userBranch:'',userPerson:'唐美琪'},
          {company:'工银安盛（寿）',singleNumber:'346',singleName:'34',enterTime:'2019-03-08',status:'在库',validTime:'2019-05-05',jiecunDate:'',singleReporty:'安徽分公司',userBranch:'',userPerson:'唐美琪'}]
        },{
          company: '工银安盛（寿）',
          allCount: '100',
          isBill: '是',
          lingyong: '20',
          notCheck: '0',
          isCheck: '0',
          isJieChun:'结存',
          detailTable:[{company:'工银安盛（寿）',singleNumber:'346',singleName:'34',enterTime:'2019-03-08',status:'在库',validTime:'2019-05-05',jiecunDate:'',singleReporty:'安徽分公司',userBranch:'',userPerson:'唐美琪'},
          {company:'工银安盛（寿）',singleNumber:'346',singleName:'34',enterTime:'2019-03-08',status:'在库',validTime:'2019-05-05',jiecunDate:'',singleReporty:'安徽分公司',userBranch:'',userPerson:'唐美琪'},
          {company:'工银安盛（寿）',singleNumber:'346',singleName:'34',enterTime:'2019-03-08',status:'在库',validTime:'2019-05-05',jiecunDate:'',singleReporty:'安徽分公司',userBranch:'',userPerson:'唐美琪'},
          {company:'工银安盛（寿）',singleNumber:'346',singleName:'34',enterTime:'2019-03-08',status:'在库',validTime:'2019-05-05',jiecunDate:'',singleReporty:'安徽分公司',userBranch:'',userPerson:'唐美琪'}]
        }],
    tableHead2:[
        {label:'单证库',property:'reporty',width:''},
        {label:'总数',property:'allCount',width:''},
        {label:'在库',property:'isBill',width:''},
        {label:'领用',property:'lingyong',width:''},
        {label:'出单（未核）',property:'notCheck',width:''},
        {label:'出单（已核）',property:'isCheck',width:''},
        {label:'是否结存',property:'isJieChun',width:''},
        {label: '操作',property: 'oper', fixed: 'right', width:'100',minWidth: '140px',
                oper: [
                    { name: '删除'},
                    { name: '详情'}
                ]
            }
        ],
    recordList2: [{
          reporty: '总部',
          allCount: '100',
          isBill: '是',
          lingyong: '20',
          notCheck: '0',
          isCheck: '0',
          isJieChun:'结存',
           detailTable:[{company:'工银安盛（寿）',singleNumber:'346',singleName:'34',enterTime:'2019-03-08',status:'在库',validTime:'2019-05-05',jiecunDate:'',singleReporty:'安徽分公司',userBranch:'',userPerson:'唐美琪'},
          {company:'工银安盛（寿）',singleNumber:'346',singleName:'34',enterTime:'2019-03-08',status:'在库',validTime:'2019-05-05',jiecunDate:'',singleReporty:'安徽分公司',userBranch:'',userPerson:'唐美琪'},
          {company:'工银安盛（寿）',singleNumber:'346',singleName:'34',enterTime:'2019-03-08',status:'在库',validTime:'2019-05-05',jiecunDate:'',singleReporty:'安徽分公司',userBranch:'',userPerson:'唐美琪'},
          {company:'工银安盛（寿）',singleNumber:'346',singleName:'34',enterTime:'2019-03-08',status:'在库',validTime:'2019-05-05',jiecunDate:'',singleReporty:'安徽分公司',userBranch:'',userPerson:'唐美琪'}]
        
        }],
    dialogVisible1:false,
    dialogVisible2:false,
 }
 },
 methods:{
     ExportExcelTab1(){
         this.dialogVisible1=true;
     },
     ExportExcelTab2(){
         this.dialogVisible2=true;
     },
     selectItem1(param1){
         console.log('param1',param1);
     },
     selectItem2(param2){
         console.log('param2',param2);
     }
 }
}
</script>

<style scoped lang="scss">
.page{
//   padding: 10px 30px 0 30px;
  height:100%;
  overflow-y:scroll;
//   min-height:500px;
}
.title{
    text-align:right;
}

.updateRecord{
    color:red;
}
.yeJiContent{
    padding: 10px 30px 0 30px;
    min-height:calc(100vh - 150px);
}
// .tabContent{
//     width:100%;
//     min-height:calc(100vh - 100px);
//     overflow-y:hidden;
// }
.tabContent{
    // border: 1px solid #ebeef5;
    // padding: 10px;
    margin-top:10px;
    min-height:300px;
}
.contentbottom{
    height:30px;
    margin-top:10px;
    line-height: 30px;
    text-align:middle; 
}
</style>