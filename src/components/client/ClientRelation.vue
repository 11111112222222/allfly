<template>
 <div class="page" style="height:100%">
    <el-tabs type="border-card" v-model="activeTab" style="height:100%;overflow-y:auto;">
        <el-tab-pane label="客户查询" name="searchTab">
            <div class="tabContent">
                <form action="">
                <div>
                    <div class="title">客户姓名</div>
                    <div class="content">
                        <el-checkbox v-model="cNameChecked" class="checkbox"></el-checkbox>    
                        <el-input v-model="clientName" size="mini" style="width:250px"></el-input>
                    </div>
                </div>
                <div>
                    <div class="title">关联、识别号码</div>
                    <div class="content">
                        <el-checkbox v-model="numChecked" class="checkbox"></el-checkbox> 
                        <el-select size="mini" v-model="numSort">
                            <el-option
                            v-for="item in sortOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>&nbsp;&nbsp;
                        <el-input v-model="numValue" size="mini" style="width:250px"></el-input>
                    </div>
                </div>
                <div>
                    <div class="title">联系地址 / 电话</div>
                    <div class="content">
                        <el-checkbox v-model="contactChecked" class="checkbox" ></el-checkbox>    
                        <el-select size="mini" v-model="contactSort">
                            <el-option
                            v-for="item in contactOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>&nbsp;&nbsp;
                        <el-input v-model="contactValue" size="mini" style="width:250px"></el-input>
                    </div>
                </div>
                <div>
                    <div class="title">客户生日</div>
                    <div class="content">
                        <el-checkbox v-model="birthdayChecked" class="checkbox"></el-checkbox> 
                        <el-select size="mini" v-model="month1">
                            <el-option
                            v-for="item in monthOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select size="mini" v-model="day1">
                            <el-option
                            v-for="item in dayOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>&nbsp;&nbsp;至&nbsp;&nbsp;
                        <el-select size="mini" v-model="month2">
                            <el-option
                            v-for="item in monthOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select size="mini" v-model="day2">
                            <el-option
                            v-for="item in dayOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div>
                    <div class="title">客户类别</div>
                    <div class="content">
                        <el-checkbox v-model="typeChecked" class="checkbox"></el-checkbox>    
                        <el-select size="mini" v-model="clientType">
                            <el-option
                            v-for="item in typeOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div>
                    <div class="title">保单状态</div>
                    <div class="content">
                        <el-checkbox v-model="statusChecked" class="checkbox"></el-checkbox>    
                        <el-select size="mini" v-model="orderStatus">
                            <el-option
                            v-for="item in statusOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div>
                    <div class="title">承揽人</div>
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
                        <el-input v-model="principalInput" size="mini" style="width:250px"></el-input>
                    </div>
                </div>
                <fieldset>
                    <div style="margin-left:-10px;">
                        <div>
                            <div class="title">客户相关信息记录属性</div>
                            <div class="content">
                                <el-checkbox v-model="cmChecked" class="checkbox"></el-checkbox>    
                                <el-select size="mini" v-model="msgSel">
                                    <el-option
                                    v-for="item in msgOpt"
                                    :key="item.value"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-select size="mini" v-model="judgeSel">
                                    <el-option
                                    v-for="item in judgeOpt"
                                    :key="item.value"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-input v-model="msgInput" size="mini" style="width:250px"></el-input>
                            </div>
                            <div class="indate">
                                <el-checkbox v-model="indateChecked" class="checkbox"></el-checkbox>    
                                <el-select size="mini" v-model="indateSel">
                                    <el-option
                                    v-for="item in indateOpt"
                                    :key="item.value"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-date-picker
                                v-model="indateValue"
                                type="daterange"
                                size="mini"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
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
                            <div class="title">其他索引日期</div>
                            <div class="content">
                                <el-checkbox v-model="indexChecked" class="checkbox"></el-checkbox>    
                                <el-select size="mini" v-model="indexSel">
                                    <el-option
                                    v-for="item in indexOpt"
                                    :key="item.value"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-date-picker
                                v-model="indexDateValue"
                                type="daterange"
                                size="mini"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
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
                <div class="totalCost">0/0</div>
                <div class="listTable">
                    <el-table
                        ref="recordTable"
                        size="mini"
                        border
                        height="440px"
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
                        <el-button type="primary" size="mini" @click="addBtn">新增客户</el-button>
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
    cNameChecked:false,
    clientName:'',
    numChecked:false,
    numSort:'身份证号',
    sortOpt:[{
          value: '身份证号',
        }, {
          value: '保单号码',
        }, {
          value: '相关号码',
        }],
    numValue:'',
    contactChecked:false,
    contactSort:'客户联系地址',
    contactOpt:[{
          value: '客户联系地址',
        }, {
          value: '客户联系电话',
        }],
    contactValue:'',
    birthdayChecked:false,
    month1:'1月',
    monthOpt:[{
          value: '1月',
        }, {
          value: '2月',
        },{
          value: '3月',
        }, {
          value: '4月',
        },{
          value: '5月',
        }, {
          value: '6月',
        },{
          value: '7月',
        }, {
          value: '8月',
        },{
          value: '9月',
        }, {
          value: '10月',
        },{
          value: '11月',
        }, {
          value: '12月',
        }],
    day1:'01',
    dayOpt:[{
          value: '01',
        }, {
          value: '02',
        },{
          value: '03',
        }, {
          value: '04',
        },{
          value: '05',
        }, {
          value: '06',
        },{
          value: '07',
        }, {
          value: '08',
        },{
          value: '09',
        }, {
          value: '10',
        },{
          value: '11',
        }, {
          value: '12',
        },{
          value: '13',
        }, {
          value: '14',
        },{
          value: '15',
        }, {
          value: '16',
        },{
          value: '17',
        }, {
          value: '18',
        },{
          value: '19',
        }, {
          value: '20',
        },{
          value: '21',
        }, {
          value: '22',
        },{
          value: '23',
        }, {
          value: '24',
        },{
          value: '25',
        }, {
          value: '26',
        },{
          value: '27',
        }, {
          value: '28',
        },{
          value: '29',
        }, {
          value: '30',
        }],
    month2:'1月',
    day2:'01',
    typeChecked:false,
    clientType:'已投保客户',
    typeOpt:[{
          value: '已投保客户',
        }, {
          value: '潜在客户',
        }, {
          value: '团险客户',
        }],
    statusChecked:false,
    orderStatus:'预收件',
    statusOpt:[{
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
    cmChecked:false,
    msgSel:'首期交费账号',
    msgOpt:[{
          value: '首期交费账号',
        }, {
          value: '续期交费账号',
        }, {
          value: '身份证件',
        }, {
          value: '车辆信息',
        }, {
          value: '客户分类',
        }],
    judgeSel:'有',
    judgeOpt:[{
          value: '有',
        }, {
          value: '无',
        }],
    msgInput:'',
    indateChecked:false,
    indateSel:'有效期起',
    indateOpt:[{
          value: '有效期起',
        }, {
          value: '有效期止',
        }],
    indateValue:'',
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
    indexChecked:false,
    indexSel:'保单受理日期',
    indexOpt:[{
          value: '保单受理日期',
        }, {
          value: '保单生效日期',
        }, {
          value: '保单交费日期',
        }],
    indexDateValue:'',
    totalCost:0,
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
         this.$router.push({path:"/user/payEditor",query:{orderNum:this.orderNum}})
     },
     addBtn(){
         this.$router.push({path:"/user/clientEditor"})
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
    .indate{
        margin-left:200px;
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
        //float:left;
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

</style>
