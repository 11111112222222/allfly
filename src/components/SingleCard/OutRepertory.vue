<template>
<div class="page">
    <el-tabs type="border-card"  v-model="activeTab">
    <el-tab-pane label="交接新增及查询" name="search">
        <div>
            <div class="title"><el-button type="primary" size="mini" @click="changeSingleCard()">+交接新增入库</el-button></div>
        </div>
        <!-- <el-row :gutter="20">
            <el-col :span="24"><div class="add"><el-button type="primary" size="mini" >+单证新增入库</el-button></div></el-col>
        </el-row> -->
         <div class="tabContent">
            <form action="">
                <div>
                    <div class="title">交接单号码</div>
                    <div class="content">
                        <el-checkbox v-model="billNumberChecked" class="checkbox"></el-checkbox>    
                        <el-input
                        size="mini"
                        placeholder="请输入单证名称"
                        v-model="billNumber"
                        class="inputNum"
                        clearable>
                        </el-input>
                    </div>
                </div>
                 <div>
                    <div class="title">发生期间</div>
                    <div class="content">
                        <el-checkbox v-model="duringTimeChecked" class="checkbox"></el-checkbox>    
                         <el-select
                            size="mini"
                            v-model="itemSel"
                            >
                            <el-option
                            v-for="item in itemOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-date-picker
                        v-model="duringTime"
                        size="mini"
                        style="width:300px;"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </div>
                <div>
                    <div class="title">保险公司</div>
                    <div class="content">
                        <el-checkbox v-model="companyChecked" class="checkbox"></el-checkbox>    
                        <el-select
                            size="mini"
                            v-model="companySel"
                            >
                            <el-option
                            v-for="item in companyOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div>
                    <div class="title">保单/单证号码</div>
                    <div class="content">
                        <el-checkbox v-model="cardChecked" class="checkbox"></el-checkbox>    
                        <el-input
                        size="mini"
                        placeholder="请输入号码"
                        v-model="cardNum"
                        class="inputNum"
                        clearable>
                        </el-input>
                    </div>
                </div>

                <div>
                    <div class="title">所属单证库/分支单位</div>
                    <div class="content">
                        <el-checkbox v-model="branchChecked" class="checkbox"></el-checkbox>    
                        <el-select
                            size="mini"
                            v-model="branchSel"
                            >
                            <el-option
                            v-for="item in branchOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div>
                    <div class="title">领用人/单位</div>
                    <div class="content">
                        <el-checkbox v-model="userChecked" class="checkbox"></el-checkbox>    
                        <el-select
                            size="mini"
                            v-model="userSel"
                            >
                            <el-option
                            v-for="item in userOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                </form> 
                <el-button type="primary" size="medium" class="searchBtn" @click="handleToggleTab">查询</el-button>
            </div> 
    </el-tab-pane>
    <el-tab-pane label="查询结果列表" name="listTab">
                 <div class="tabContent">
                <div class="listTable">
                   <el-table
                    size="mini"
                    :data="recordList1"
                    border
                    style="width: 100%"
                    height="400"
                    max-height="550">
                    
                     <el-table-column v-for="item in tableHead1" :key="item.property" :label="item.label" :property="item.property" :fixed="item.fixed" :width="item.width" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <div v-if="item.oper">
                                 <!-- <el-button v-for="(o, key) in item.oper" :key="key" @click="o.clickFun(scope.row)" type="text" size="small">{{o.name}}</el-button>  -->
                                 <!-- <el-button @click="deleteClick(scope.row)" type="danger" size="small">删除</el-button> -->
                                <el-button  type="primary" size="small" @click="editInformation(scope.row.name)">查看/编辑</el-button> 
                            </div>
                            <div v-else>
                                {{ scope.row[item.property]}}
                            </div>
                
                        </template>
                    </el-table-column>   
                </el-table> 
                </div>
                <div class="oprateBtn">
                        <el-button type="primary" size="mini" @click="exportSingleCardData">导出Excel</el-button>
                </div>
               <ExportExcel v-if="dialogVisible3" :visible.sync="dialogVisible3" @selectItem="selectItem3"></ExportExcel>
            </div>
    </el-tab-pane>
    </el-tabs>
    
    
</div>
</template>

 <script type="text/ecmascript-6">
 import ExportExcel from './ExportExcel';
export default {
 data() {
 return {
    activeTab:'search',
    billNumberChecked:false,
    billNumber:'',
    duringTimeChecked:false,
    itemSel:'领用',
    itemOpt:[{
          value: '领用',
          label: '领用'
        }],
    duringTime:'',
    companyChecked:false,
    companySel:'',
    companyOpt:[{
          value: '工银安盛（寿）',
          label: '工银安盛（寿）'
        }],
    cardChecked:false,
    cardNum:'',  
    branchChecked:false,
    branchSel:'',
    branchOpt:[{
          value: '所属分支机构',
          label: '所属分支机构'
        }],
    userChecked:false,
    userSel:'',
    userOpt:[{
          value: '当前所属部门',
          label: '当前所属部门'
        }],

    tableHead1:[
            {label:'序号',property:'index',width:'50'},
            {label:'交接单号',property:'billNumber',width:'100'},
            {label:'流向',property:'toWhere',width:'150'},
            {label:'发生日期',property:'duringTime',width:'100'},
            {label:'来源单证库',property:'fromWhere',width:'100'},
            {label:'来源人',property:'person',width:'100'},
            {label:'接受单位',property:'danwei',width:'100'},
            {label:'接受人',property:'acceptPerson',width:'100'},
            {label:'交接单据',property:'danju',width:'100'},
            {label: '操作',property: 'oper', fixed: 'right', width:'100',minWidth: '140px',
                oper: [
                    { name: '删除'},
                    { name: '查看/编辑'}
                ]
            }],
    recordList1: [{
          index: '1',
          billNumber: '233333',
          toWhere: '上海',
          duringTime: '2016-05-03',
          fromWhere: '普陀区',
          person: '韩梅梅',
          danwei:'',
          acceptPerson:'',
          danju:'',  
        }],
    dialogVisible3:false,
 }
 },
 components: {
    ExportExcel
 },
  methods:{
    handleToggleTab(){
         this.activeTab="listTab";
     },
    changeSingleCard(){
         this.$router.push({ path: '/user/changeSingleCard'});
    },
    exportSingleCardData(){
        this.dialogVisible3=true;
    },
    selectItem3(val){
        //val为选择的需要导出的字段
        console.log('新增交接选择的字段',val);
    } 
}
}
</script>

<style scoped lang="scss">
.page{
    position:relative; 
    height:100%;
    width:100%;
}
.add{
    text-align:right;
}

.tabContent{
    width:100%;
    min-height:calc(100vh - 100px);
    overflow-y:hidden;
}
.title{
    display: inline-block;
    width:150px;
    text-align: right;
    padding:10px;
}
.content{
    width:700px;
    display: inline-block; 
    .inputNum{
            width:50%;
            display: inline-block;
        }
}
.checkbox{
    margin-right:10px;
}
.searchBtn{
        width:100px;
        margin-top:5px;
        margin-left:200px;
}
.oprateBtn{
       position: fixed;;
       bottom:25px;
       right:45px;
    }
</style>