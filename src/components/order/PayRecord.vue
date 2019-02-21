<template>
 <div class="page" style="height:100%">
    <el-tabs type="border-card" v-model="activeTab" style="height:100%;overflow-y:auto;">
        <el-tab-pane label="保单交费记录查询" name="searchTab">
            <div class="tabContent">
                <form action="">
                <div>
                    <div class="title">分支机构</div>
                    <div class="content">
                        <el-checkbox v-model="branchChecked" disabled class="checkbox"></el-checkbox>    
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
                    <div class="title">保险公司</div>
                    <div class="content">
                        <el-checkbox v-model="insurChecked" class="checkbox"></el-checkbox> 
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
                    <div class="title">计绩月份</div>
                    <div class="content">
                        <el-checkbox v-model="scoreChecked" class="checkbox" ></el-checkbox>    
                        <el-date-picker v-model="scoreStart" type="month" size="mini" placeholder="选择月"> </el-date-picker>
                        &nbsp;&nbsp;至&nbsp;&nbsp;
                        <el-date-picker v-model="scoreEnd" type="month" size="mini" placeholder="选择月"></el-date-picker>
                    </div>
                </div>
                <div>
                    <div class="title">保单号码 / 投被保人</div>
                    <div class="content">
                        <el-checkbox v-model="orderNumChecked" class="checkbox"></el-checkbox> 
                        <el-select size="mini" v-model="orderSort">
                            <el-option
                            v-for="item in orderOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>&nbsp;&nbsp;
                        <el-input v-model="numInput" size="mini" placeholder="请输入号码" style="width:250px"></el-input>
                    </div>
                </div>
                <div>
                    <div class="title">交费方式</div>
                    <div class="content">
                        <el-checkbox v-model="payWay" class="checkbox"></el-checkbox>    
                        <el-select size="mini" v-model="paySel">
                            <el-option
                            v-for="item in payOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div>
                    <div class="title">年度缴次</div>
                    <div class="content">
                        <el-checkbox v-model="annualTimes" class="checkbox"></el-checkbox>    
                        <el-input-number v-model="yearNum" controls-position="right" :min="0" :max="100" size="mini"></el-input-number>
                        &nbsp;&nbsp;年&nbsp;&nbsp;
                        <el-input-number v-model="timeNum" controls-position="right" :min="0" :max="100" size="mini"></el-input-number>
                        &nbsp;&nbsp;次&nbsp;&nbsp;
                    </div>
                </div>
                <div>
                    <div class="title">交费型别</div>
                    <div class="content">
                        <el-checkbox v-model="payType" class="checkbox" ></el-checkbox>    
                        <el-select size="mini" v-model="typeSel">
                            <el-option
                            v-for="item in typeOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div>
                    <div class="title">日期索引</div>
                    <div class="content">
                        <el-checkbox v-model="dateIndex" class="checkbox"></el-checkbox>    
                        <el-select size="mini" v-model="indexSel">
                            <el-option
                            v-for="item in dateOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>&nbsp;&nbsp;
                        <el-date-picker
                        v-model="dateSel"
                        type="daterange"
                        size="mini"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </div>
                <fieldset>
                    <legend>高级查询</legend>
                    <div style="margin-left:-10px;">
                        <div>
                            <div class="title">保单状态</div>
                            <div class="content">
                                <el-checkbox v-model="orderState" class="checkbox"></el-checkbox>    
                                <el-select size="mini" v-model="stateSel">
                                    <el-option
                                    v-for="item in stateOpt"
                                    :key="item.value"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div>
                            <div class="title">投保险种</div>
                            <div class="content">
                                <el-checkbox v-model="insurType" class="checkbox"></el-checkbox>    
                                <el-select size="mini" v-model="insurTypeSel">
                                    <el-option
                                    v-for="item in insurTypeOpt"
                                    :key="item.value"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div>
                            <div class="title">年期 / 分档</div>
                            <div class="content">
                                <el-checkbox v-model="subYear" class="checkbox"></el-checkbox>    
                                <el-select size="mini" v-model="subYearSel" @change="yearSelectChange">
                                    <el-option
                                    v-for="item in subYearOpt"
                                    :key="item.value"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <div class="inputNum">
                                    <div id="subYearNum" v-show="subYearShow">
                                        <el-input-number v-model="subYearStart" controls-position="right" :min="0" :max="100" size="mini"></el-input-number>
                                        &nbsp;&nbsp;至&nbsp;&nbsp;
                                        <el-input-number v-model="subYearEnd" controls-position="right" :min="0" :max="100" size="mini"></el-input-number>
                                    </div>
                                    <div id="oldYearNum" v-show="!subYearShow">
                                        <el-input-number v-model="oldYearNum" controls-position="right" :min="0" :max="100" size="mini"></el-input-number>
                                        &nbsp;&nbsp;岁&nbsp;&nbsp;
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div>
                            <div class="title">承揽人A/B</div>
                            <div class="content">
                                <el-checkbox v-model="principal" class="checkbox"></el-checkbox>    
                                <el-select size="mini" v-model="principalSel">
                                    <el-option
                                    v-for="item in principalOpt"
                                    :key="item.value"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-select size="mini" v-model="perConditionSel" style="margin:0 10px">
                                    <el-option
                                    v-for="item in perConditionOpt"
                                    :key="item.value"
                                    :value="item.value">
                                        </el-option>
                                </el-select>
                                <el-input v-model="principalInput" size="mini" placeholder="请输入内容" style="width:250px"></el-input>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <el-button type="primary" size="medium" class="searchBtn" @click="handleToggleTab">查询</el-button>
            </form>
            </div>
        </el-tab-pane>
        <el-tab-pane label="列表" name="listTab">
            <div class="tabContent">
                <div class="totalCost">总保费：{{totalCost}}</div>
                <div class="listTable">
                    <el-table
                        class="table"
                        ref="recordTable"
                        size="mini"
                        border
                        height="840px"
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
                        sortable
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="姓名"
                        sortable
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="地址"
                        sortable>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="oprateBtn">
                        <el-button type="primary" size="mini">导出Excel</el-button>
                        <el-button type="danger" size="mini" @click="delateInfo">删除</el-button>
                        <el-button type="primary" size="mini" @click="editorBtn">查看 / 编辑</el-button>
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
    branchChecked:true,
    branchOpt: [{
          value: '不区分',
        }, {
          value: '选项2',
        }],
    branchSel: ["不区分"],
    insurChecked:false,
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
    scoreChecked:false,
    scoreStart:'',
    scoreEnd:'',
    orderNumChecked:false,
    orderSort:'保单号码',
    orderOpt:[{
          value: '保单号码',
        }, {
          value: '相关其他号码',
        }, {
          value: '投保人姓名',
        }, {
          value: '投保人证件代码',
        }, {
          value: '被保人姓名',
        }, {
          value: '被保人证件代码',
        }],
    numInput:"",
    payWay:false,
    paySel:'趸交',
    payOpt:[{
          value: '趸交',
        }, {
          value: '年交',
        }, {
          value: '半年交',
        }, {
          value: '季交',
        }, {
          value: '月交',
        }],
    annualTimes:false,
    yearNum:"0",
    timeNum:"0",
    payType:false,
    typeSel:'续期交费',
    typeOpt:[{
          value: '续期交费',
        }, {
          value: '新契约交费',
        }, {
          value: '契撤解约',
        }, {
          value: '契约变更',
        }],
    dateIndex:false,
    indexSel:'保单生效日期',
    dateOpt:[{
          value: '保单生效日期',
        }, {
          value: '交费日期',
        }, {
          value: '险种生效日期',
        }],
    dateSel:'',
    orderState:false,
    stateSel:'预收件',
    stateOpt:[{
          value: '预收件',
        }, {
          value: '承保件',
        }, {
          value: '契撤件',
        }, {
          value: '停效件',
        }, {
          value: '失效件',
        }, {
          value: '解约件',
        }, {
          value: '终止件',
        }, {
          value: '新保',
        }, {
          value: '续保',
        }],
    insurType:false,
    insurTypeSel:'',
    insurTypeOpt:[],
    subYear:false,
    subYearSel:'年期/分档',
    subYearOpt:[{
          value: '年期/分档',
        }, {
          value: '缴费至',
        }],
    subYearStart:'0',
    subYearEnd:'0',
    oldYearNum:'0',
    subYearShow:true,
    principal:false,
    principalSel:'不区分',
    principalOpt:[{
          value: '不区分',
        }, {
          value: 'A',
        }, {
          value: 'B',
        }],
    perConditionSel:'姓名',
    perConditionOpt:[{
          value: '姓名',
        }, {
          value: '员工编号',
        }],
    principalInput:'',
    totalCost:0,
    recordList: [{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          orderNum: '576542526',
          name: '小虎',
          address: '北京市普陀区金沙江路 1517 弄'
        },{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          orderNum: '576542526',
          name: '小虎',
          address: '北京市普陀区金沙江路 1517 弄'
        },{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          orderNum: '576542526',
          name: '小虎',
          address: '北京市普陀区金沙江路 1517 弄'
        },{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          orderNum: '576542526',
          name: '小虎',
          address: '北京市普陀区金沙江路 1517 弄'
        },{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          orderNum: '576542526',
          name: '小虎',
          address: '北京市普陀区金沙江路 1517 弄'
        },{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          orderNum: '576542526',
          name: '小虎',
          address: '北京市普陀区金沙江路 1517 弄'
        },{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          orderNum: '576542526',
          name: '小虎',
          address: '北京市普陀区金沙江路 1517 弄'
        },{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          orderNum: '576542526',
          name: '小虎',
          address: '北京市普陀区金沙江路 1517 弄'
        },{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          orderNum: '576542526',
          name: '小虎',
          address: '北京市普陀区金沙江路 1517 弄'
        },{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          orderNum: '576542526',
          name: '小虎',
          address: '北京市普陀区金沙江路 1517 弄'
        },{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          orderNum: '576542526',
          name: '小虎',
          address: '北京市普陀区金沙江路 1517 弄'
        },{
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
         this.$router.push({path:"/user/payEditor",query:{orderNum:this.orderNum}})
     },
     delateInfo(){
         this.$confirm('确定删除该条数据吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            for(var i=0;i<this.recordList.length;i++){
                if(this.recordList[i].orderNum==this.orderNum){
                    this.recordList.splice(i,1);
                    break;
                }
            }
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
        margin-left:200px;
    }
    .totalCost{
        float:right;
        height: 30px;
    }
    .listTable{
        clear: both;
        //max-width:1000px;
        width:100%;
    }
    .oprateBtn{
    //    position: fixed;;
    //    bottom:25px;
    //    right:45px;
        float: right;
        margin-top:20px;
    }
    @media screen and (max-width: 1480px) {
        .table {
        height:440px !important
        }
    }
</style>
