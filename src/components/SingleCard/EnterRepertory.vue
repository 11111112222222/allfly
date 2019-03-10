<template>
<div class="page">
    <el-tabs type="border-card"  v-model="activeTab">
    <el-tab-pane label="新增入库及查询" name="search">
         <div>
            <div class="title"><el-button type="primary" size="mini" @click="addSingleCard()">+单证新增入库</el-button></div>
        </div>
        <!-- <el-row :gutter="20">
            <el-col :span="24"><div class="add"><el-button type="primary" size="mini" >+单证新增入库</el-button></div></el-col>
        </el-row> -->
         <div class="tabContent">
            <form action="">
                <div>
                    <div class="title">保险公司</div>
                    <div class="content">
                        <el-checkbox v-model="companyChecked" class="checkbox"></el-checkbox>    
                        <el-select
                            size="mini"
                            v-model="companySel"
                            multiple
                            collapse-tags
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
                        placeholder="请输入姓名"
                        v-model="cardNum"
                        class="inputNum"
                        clearable>
                        </el-input>
                    </div>
                </div>
                <div>
                    <div class="title">单证名称</div>
                    <div class="content">
                        <el-checkbox v-model="nameChecked" class="checkbox"></el-checkbox>    
                        <el-input
                        size="mini"
                        placeholder="请输入单证名称"
                        v-model="name"
                        class="inputNum"
                        clearable>
                        </el-input>
                    </div>
                </div>
                <div>
                    <div class="title">入库期间</div>
                    <div class="content">
                        <el-checkbox v-model="enterTimeChecked" class="checkbox"></el-checkbox>    
                        <el-date-picker
                        v-model="enterTime"
                        size="mini"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </div>
                <div>
                    <div class="title">单证有效期间</div>
                    <div class="content">
                        <el-checkbox v-model="validTimeChecked" class="checkbox"></el-checkbox>    
                       <el-date-picker
                        v-model="validTime"
                        size="mini"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </div>
                <div>
                    <div class="title">单证状态</div>
                    <div class="content">
                        <el-checkbox v-model="statusChecked" class="checkbox"></el-checkbox>    
                        <el-select
                            size="mini"
                            v-model="statusSel"
                            multiple
                            collapse-tags
                            >
                            <el-option
                            v-for="item in statusOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div>
                    <div class="title">结存/原因</div>
                    <div class="content">
                        <el-checkbox v-model="reasonChecked" class="checkbox"></el-checkbox>    
                        <el-select
                            size="mini"
                            v-model="reasonhSel"
                            multiple
                            collapse-tags
                            >
                            <el-option
                            v-for="item in reasonOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                         <el-checkbox v-model="jiechunChecked" class="checkbox"></el-checkbox>    
                        <el-select
                            size="mini"
                            v-model="jiechunSel"
                            multiple
                            collapse-tags
                            >
                            <el-option
                            v-for="item in jiechunOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div>
                    <div class="title">所属单证库/分支单位</div>
                    <div class="content">
                        <el-checkbox v-model="branchChecked" class="checkbox"></el-checkbox>    
                        <el-select
                            size="mini"
                            v-model="branchSel"
                            multiple
                            collapse-tags
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
                    fit
                    style="width: 100%"
                    height="500"
                    max-height="550">
                     <el-table-column v-for="item in tableHead1" :key="item.property" :label="item.label" :property="item.property" :fixed="item.fixed" :width="item.width" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <div v-if="item.oper">
                                 <!-- <el-button v-for="(o, key) in item.oper" :key="key" @click="o.clickFun(scope.row)" type="text" size="small">{{o.name}}</el-button>  -->
                                 <!-- <el-button @click="deleteClick(scope.row)" type="danger" size="small">删除</el-button> -->
                                <el-button  type="primary" size="small" @click="editInformation(scope.row)">查看/编辑</el-button> 
                            </div>
                            <div v-else>
                                {{ scope.row[item.property]}}
                            </div>
                        </template>
                    </el-table-column>   
                </el-table> 
                <el-dialog title="编辑此单证的有效期" :visible.sync="dialogFormVisible">
                <el-form :model="editForm" :label-position="'right'" label-width="180px">
                    <el-form-item label="保险公司" >
                    <span>{{editForm.name}}</span>
                    </el-form-item>
                    <el-form-item label="保单/单证号码" >
                    <span>{{editForm.idNumber}}</span>
                    </el-form-item>
                    <el-form-item label="单证名称--简称" >
                    <span>{{editForm.cardName}}</span>
                    </el-form-item>
                    <el-form-item label="入库日期" >
                    <span>{{editForm.enterTime}}</span>
                    </el-form-item>
                    <el-form-item label="单证有效期" >
                    <!-- <span>{{editForm.validTime}}</span> -->
                    <el-date-picker
                        v-model="editForm.validTime"
                        size="mini"
                        align="right"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        @change="pickerOptions1">
                        </el-date-picker>
                        <span class="status" ref="showStatus">{{showStatus}}</span>
                    </el-form-item>
                </el-form>
                <div class="dialogmiddle">
                    <div class="dialogmiddleItem">
                        <div>单证状态</div>
                        <div><span class="zaiku">{{editForm.status}}</span>
                        <el-popover
                        placement="right"
                        width="600"
                        trigger="click">
                        <el-table :data="gridData" border size="mini" height="300">
                            <el-table-column type="index" width="50"></el-table-column>
                            <el-table-column  property="endTime"  size="mini" label="发生日期" :show-overflow-tooltip="true"></el-table-column>
                            <el-table-column  property="reason"   size="mini" label="缘由" :show-overflow-tooltip="true"></el-table-column>
                            <el-table-column  property="belong"  width="100" size="mini"  label="所属单证库" :show-overflow-tooltip="true"></el-table-column>
                            <el-table-column  property="branch" size="mini"  label="领用人" :show-overflow-tooltip="true"></el-table-column>
                            <el-table-column  property="user" size="mini"  label="领用单位" :show-overflow-tooltip="true"></el-table-column>
                            <el-table-column  property="updatePerson" size="mini"  label="更新人" :show-overflow-tooltip="true"></el-table-column>
                        </el-table>
                        <span class="readlvli" slot="reference">查看履历</span>
                        <!-- <el-button slot="reference">click 激活</el-button> -->
                        </el-popover>
                        </div>
                    </div>
                    <div class="dialogmiddleItem">
                        <div>结存前状态</div>
                        <div>{{editForm.idEnd}}</div>
                    </div>
                    <div class="dialogmiddleItem">
                        <div>结存原因说明</div>
                        <div>{{editForm.reason}}</div>
                    </div>
                    <div class="dialogmiddleItem">
                        <div>缴回保险公司</div>
                        <div>{{editForm.name}}</div>
                    </div>
                </div>
                <div class="dialogbottom">
                    <div class="dialogmiddleItem">
                        <div>所属单证库/分支单位</div>
                        <div>{{editForm.branch}}</div>
                    </div>
                    <div class="dialogmiddleItem">
                        <div>领用单位/领用人</div>
                        <div>{{editForm.user}}</div>
                    </div>
                </div>
                <div slot="footer" class="dialog-footer">
                    <div class="footerItem">
                        <el-button type="primary" @click="cancelEditInfro()" size="mini">取 消</el-button>
                        <el-button type="primary" @click="confirmEditInfro()" size="mini">确 定</el-button>
                        <el-button type="primary" @click="submitEditInfor()" size="mini">应用</el-button> 
                    </div>
                    <div class="footerItem">
                        <el-tooltip placement="bottom">
                        <div slot="content">
                            <div v-for="(item,index) in createAccount" :key="item.name">
                                <span>{{item.name}}：</span>
                                <span>{{item.content}}</span>
                            </div>
                        </div>
                        <el-button size="mini">入库</el-button>
                        </el-tooltip>
                        <el-tooltip placement="bottom">
                        <div slot="content">
                            <div v-for="(item,index) in updateAccount" :key="item.name">
                                <span>{{item.name}}：</span>
                                <span>{{item.content}}</span>
                            </div>
                        </div>
                        <el-button size="mini">更新</el-button>
                        </el-tooltip>
                        <!-- <el-button @click="dialogFormVisible = false" size="mini">入库</el-button>
                        <el-button  @click="dialogFormVisible = false" size="mini">更新</el-button> -->
                    </div>
                    
                </div>
                </el-dialog>
                </div>
                <div class="oprateBtn">
                    <el-button type="primary" size="mini" @click="exportSingleCardData()">导出Excel</el-button>
                </div>
               <ExportExcel v-if="dialogVisible4" :visible.sync="dialogVisible4" @selectItem="selectItem4"></ExportExcel>
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
    companyChecked:false,
    companySel:'',
    companyOpt:[{
          value: '工银安盛（寿）',
          label: '工银安盛（寿）'
        }],
    cardChecked:false,
    cardNum:'',
    nameChecked:false,
    name:'',
    enterTimeChecked:false,
    enterTime:'',
    validTimeChecked:false,
    validTime:'',
    statusChecked:false,
    statusSel:'',
    statusOpt:[{
          value: '在库',
          label: '在库'
        }],
    reasonChecked:false,
    reasonhSel:'',
    reasonOpt:[{value: '未结存',label: '未结存'},{value: '已结存',label: '已结存'}],
    jiechunChecked:false,
    jiechunSel:'', 
    jiechunOpt:  [{value: '过期',label: '过期'},{value: '遗失',label: '遗失'},{value: '出单',label: '出单'},{value: '作废',label: '作废'},{value: '出单（未核）',label: '出单（未核）'},{value: '出单（已核）',label: '出单（已核）'}],
          
    branchChecked:true,
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
            {label:'保险公司',property:'name',width:'150'},
            {label:'保单/单证号码',property:'idNumber',width:'150'},
            {label:'单证名称',property:'cardName',width:'100'},
            {label:'单证简称',property:'jiancheng',width:'100'},
            {label:'入库时间',property:'enterTime',width:'100'},
            {label:'有效期',property:'validTime',width:'100'},
            {label:'单证状态',property:'status',width:'100'},
            {label:'是否结存',property:'idEnd',width:'100'},
            {label:'结存原因',property:'reason',width:'100'},
            {label:'结存日期',property:'endTime',width:'100'},
            {label:'所属单证库',property:'belong',width:'100'},
            {label:'领用单位',property:'branch',width:'100'},
            {label:'领用人',property:'user',width:'100'},
            {label: '操作',property: 'oper', fixed: 'right', width:'100',minWidth: '140px',
                oper: [
                    { name: '删除'},
                    { name: '查看/编辑'}
                ]
            }],
    recordList1: [],
    // {
    //       index: '1',
    //       name: '总部',
    //       idNumber: '上海',
    //       cardName: '普陀区',
    //       enterTime: '2016-05-03',
    //       validTime: 200333,
    //       status:'',
    //       idEnd:'',
    //       reason:'',
    //       endTime:'',
    //       belong:'',
    //       branch:'',
    //       user:'',
    //     }
    editForm:{},//弹窗表单中的总字段
    dialogFormVisible:false,
    gridData:[],//查看履历表格的字段
    showStatus:'正常',//检测日期是否小于入库日期的文字
    createAccount:[{name:'单位部门',content:'总部-运营部'},
    {name:'佣金制度',content:'基本法A制'},
    {name:'目前职级',content:'HQ01-内勤人员'},
    {name:'关系上属',content:'--'},
    {name:'入司日期',content:'2018-10-11'},
    {name:'手机',content:''},
    {name:'电子邮箱',content:''},
    {name:'创建日期',content:'2019-03-06'}],
    updateAccount:[{name:'单位部门',content:'总部-运营部'},
    {name:'佣金制度',content:'基本法A制'},
    {name:'目前职级',content:'HQ01-内勤人员'},
    {name:'关系上属',content:'--'},
    {name:'入司日期',content:'2018-10-11'},
    {name:'手机',content:''},
    {name:'电子邮箱',content:''},
    {name:'创建日期',content:'2019-03-06'}],
    dialogVisible4:false,
    
    
 }
 },
 components: {
    ExportExcel
 },
  methods:{
    handleToggleTab(){
         this.activeTab="listTab"
         //需要向后发起请求
     },
    editInformation(item){
      this.editForm=item;
      this.gridData=[];
      var temp={};
      temp.endTime=item.endTime;
      temp.reason=item.reason;
      temp.belong=item.belong;
      temp.branch=item.branch;
      temp.user=item.user;
      //不知道这个更新人怎么获取
      temp.updatePerson='';
      this.gridData.push(temp);
      this.dialogFormVisible=true;
    },
    addSingleCard(){
        this.$router.push({ path: '/user/addSingleCard'});
    },
    pickerOptions1(){
        console.log("我执行了吗")
        console.log("this.editForm.validTime",this.editForm.validTime);
        console.log("this.editForm.enterTime",this.editForm.enterTime)
        console.log("this.$refs.showStatus",this.$refs.showStatus)
        if(this.editForm.validTime>this.editForm.enterTime){
            this.showStatus="正常"
            this.$refs.showStatus.style.backgroundColor="green"
        }else{
            this.showStatus="逾期"
            this.$refs.showStatus.style.backgroundColor="red"
        }
    },
    submitEditInfor(){
      this.submitInfro();
    },
    confirmEditInfro(){
        this.dialogFormVisible=false;
        this.submitInfro();
    },
    cancelEditInfro(){
        this.dialogFormVisible=false;
        
    },
    submitInfro(){
        this.recordList1.validTime=this.editForm.validTime;
    },
    exportSingleCardData(){
        this.dialogVisible4=true;
        },
    selectItem4(val){
        //val为选择的需要导出的字段
        console.log('新增入库选择的字段',val);
    },
    fetchData(){
        console.log('this.$route.query',this.$route.query);
        var newAddData=this.$route.query.newAddData;
        console.log('newAddData',newAddData);
        if(typeof newAddData !=='undefined'){
            this.recordList1=[];
            this.activeTab="listTab";
            var temp={};   
            temp.index= '1';
            temp.name=newAddData.companySel;
            temp.idNumber=newAddData.cardNum1;
            temp.cardName=newAddData.cardName2;
            temp.enterTime=newAddData.startTime;
            temp.validTime=newAddData.endTime;
            temp.status='在库';
            temp.idEnd='';
            temp.reason='';
            temp.endTime='';
            temp.belong='';
            temp.branch=newAddData.danWeiSel;
            temp.user='';
            this.recordList1.push(temp);
            console.log('this.recordList1[0]',this.recordList1[0])
        }else {
            this.recordList1=[];
        }
    }
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
    position:relative; 
    height:100%;
    width:100%;
}
.add{
    text-align:right;
}
// 使用Saas无法使用>>>，必须要用/deep/
// 无法滚动到最底部的问题，不要给该元素加高度就可以了
// .bigtabs /deep/ .el-tabs__content{
//     overflow-y:auto !important;
//     position:absolute !important;
//     left: 0px;
//     right:0px;
//     top:39px;
//     bottom:0px;
//     padding:20px 30px;
// }
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
       position: fixed;
       bottom:25px;
       right:45px;
    }
.el-dialog__wrapper /deep/ .el-dialog__body{
    padding-top:0px;
    padding-bottom:10px;
}
.el-form-item{
    margin-bottom:0px !important;
}
.el-form-item /deep/ .el-form-item__label{
    line-height: 30px !important;
}
.el-form-item /deep/  .el-form-item__content{
    line-height: 30px !important;
}
.listTable span {
    color:blue;
}
.dialogmiddle{
    border:1px solid #ccc;
    margin:10px;
}
.dialogbottom{
    margin:10px;
    border-bottom:2px solid #ccc;
}
.dialogmiddleItem{
    line-height: 30px;
    height:30px;
}
.dialogmiddleItem div:first-child{
    display:inline-block;
    width:160px;
    height:30px;
    text-align:right;
    color:black;
}
.dialogmiddleItem div:nth-child(2){
    display:inline-block;
    width:200px;
    margin-left:10px;
    // height:30px;
    // text-align:right;
    color:blue;
}
.zaiku{
    display:inline-block;
    color:#fff !important;
    text-align:center;
    width:80px;
    height:28px;
    line-height:28px;
    border-radius:5px;
    background-color:rgba(0,0,0,0.5)
}
.readlvli{
    margin-left:5px;
    text-decoration:underline;
}
.status{
    display:inline-block;
    color:#fff !important;
    text-align:center;
    width:80px;
    height:28px;
    line-height:28px;
    border-radius:5px;
    background-color:green;
}
.dialog-footer{
    display:flex !important;
}
.footerItem{
    flex:1;
}
</style>