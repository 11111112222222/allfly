<template>
 <div class="page" style="height:100%;position:relative;">
    <header>
        <div class="title">
            <span @click="goBack"><i class="el-icon-back"></i></span> 
            <span>交费记录编辑[{{orderNum}}--{{policyHolder}}]</span>
        </div>
    </header>
    <section>
            <table class="orderTable">
                <tr>
                    <td rowspan="2">保单号码</td>
                    <td></td>
                    <td rowspan="2">相关单据号码</td>
                    <td></td>
                    <td rowspan="2">投保人信息</td>
                    <td rowspan="2"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <table class="orderTable">
                <tr>
                    <td>交费型别</td>
                    <td>
                        <el-select v-model="payType" placeholder="请选择" size="mini">
                            <el-option
                            v-for="item in payTypeOpt"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </td>
                    <td>交费受理日期</td>
                    <td>
                        <el-date-picker
                        size="mini"
                        v-model="dealDate"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                    </td>
                    <td>计绩年月</td>
                    <td>
                        <el-date-picker
                        size="mini"
                        v-model="calMonth"
                        type="month"
                        placeholder="选择月">
                        </el-date-picker> 
                    </td>
                </tr>
                <tr>
                    <td>交费方式/类别</td>
                    <td>
                        <input type="text" v-model="payWay" class='payInput'><input type="text" v-model="paySort" class='payInput'>  
                    </td>
                    <td>交费日期</td>
                    <td>
                        <el-date-picker
                        size="mini"
                        v-model="payDate"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                    </td>
                    <td>年度缴次</td>
                    <td>
                        <el-input-number v-model="yearNum" controls-position="right" :min="0" :max="100" size="mini"></el-input-number>
                        年
                        <el-input-number v-model="timeNum" controls-position="right" :min="0" :max="100" size="mini"></el-input-number>
                        次
                    </td>
                </tr>
            </table>
            <div class="tableTitle">交费内容标识：</div>
            <div class="listTable">
                <el-table
                    size="mini"
                    border
                    height="200px"
                    :data="recordList"
                    highlight-current-row>
                    <el-table-column
                    type="index"
                    width="50">
                    </el-table-column>
                    <el-table-column
                    property="date"
                    label="日期"
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
                    <el-table-column
                    property="address"
                    label="地址"
                    sortable>
                    </el-table-column>
                    <el-table-column
                    property="address"
                    label="地址"
                    sortable>
                    </el-table-column>
                    <el-table-column
                    property="address"
                    label="地址"
                    sortable>
                    </el-table-column>
                    <el-table-column
                    property="address"
                    label="地址"
                    sortable>
                    </el-table-column>
                    <el-table-column
                    property="address"
                    label="地址"
                    sortable>
                    </el-table-column>
                    <el-table-column
                    property="address"
                    label="地址"
                    sortable>
                    </el-table-column>
                    <el-table-column
                    property="address"
                    label="地址"
                    sortable>
                    </el-table-column>
                    <el-table-column
                    property="address"
                    label="地址"
                    sortable>
                    </el-table-column>
                    <el-table-column
                    property="address"
                    label="地址"
                    sortable>
                    </el-table-column>
                    <el-table-column
                    property="address"
                    label="地址"
                    sortable>
                    </el-table-column>
                    <el-table-column
                    property="address"
                    label="地址"
                    sortable>
                    </el-table-column>
                    <el-table-column
                    property="address"
                    label="地址"
                    sortable>
                    </el-table-column>
                    <el-table-column
                    property="address"
                    label="地址"
                    sortable>
                    </el-table-column>
                    <el-table-column
                    property="address"
                    label="地址"
                    sortable>
                    </el-table-column>
                </el-table>
            </div>
            <el-button type="primary" size="mini" id="reMake">重新整理</el-button>
            <table class="orderTable">
                <tr>
                    <td>保费</td>
                    <td></td>
                    <td>首佣FYC</td>
                    <td></td>
                    <td>财佣CFYC</td>
                    <td></td>
                </tr>
                <tr>
                    <td>标保</td>
                    <td></td>
                    <td>续佣RYC</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <fieldset>
                <legend>
                    承揽型别
                    <select name="" id="">
                        <option value="">个人件</option>
                        <option value="">公司件</option>
                        <option value="">网销件</option>
                    </select>
                </legend>
                <div>
                    <div class="smallTable">
                        <div class="tableItem">承揽人</div>
                        <div class="outerBtn"><el-button size="mini">...</el-button></div>
                        <div class="itemContent"></div>
                    </div>
                    <div class="smallTable">
                        <div class="tableItem">承揽人电话号码</div>
                        <div class="outerBtn"></div>
                        <div class="itemContent"></div>
                    </div>
                    <div class="smallTable">
                        <div class="tableItem">保全员</div>
                        <div class="outerBtn"><el-button size="mini">...</el-button></div>
                        <div class="itemContent"></div>
                    </div>
                    <div class="smallTable">
                        <div class="tableItem">续期收费员</div>
                        <div class="outerBtn"><el-button size="mini">...</el-button></div>
                        <div class="itemContent"></div>
                    </div>
                </div>
            </fieldset>
            <div>
                <div class="oprateBtn">
                    <a>创建</a>
                    <a>更新</a>
                    <el-button type="primary" size="mini" id="confirmBtn">确定</el-button>
                    <el-button type="danger" size="mini" @click="goBack()">取消</el-button>
                    <el-button type="primary" size="mini">应用</el-button>
                </div>
            </div>
    </section>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
     orderNum:'454534',
     policyHolder:'何静',
     dealDate:'',
     calMonth:'',
     payType:'续期交费',
     payTypeOpt:[{
          value: '续期交费',
          label: '续期交费'
        }, {
          value: '新契约交费',
          label: '新契约交费',
        }, {
          value: '撤契解约',
          label: '撤契解约'
        }, {
          value: '契约变更',
          label: '契约变更'
        }],
     payWay:'',
     paySort:'',
     yearNum:'',
     timeNum:'',
     payDate:'',
    recordList: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-04',
        name: '小虎',
        address: '北京市普陀区金沙江路 1517 弄'
    },{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-04',
        name: '小虎',
        address: '北京市普陀区金沙江路 1517 弄'
    },{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-04',
        name: '小虎',
        address: '北京市普陀区金沙江路 1517 弄'
    },{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-04',
        name: '小虎',
        address: '北京市普陀区金沙江路 1517 弄'
    },{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-04',
        name: '小虎',
        address: '北京市普陀区金沙江路 1517 弄'
    }]
 }
 },
 components: {

 },
 mounted() {
    // this.fetch();
 },
 methods:{
    goBack(){
       history.go(-1);
       //this.$root.eventHub.$emit("sendOrderNum",this.orderNum)
    },
    fetch(){
        this.orderNum=this.$route.query.orderNum;
        console.log(this.orderNum)
    }
 },
 beforeRouteEnter (to, from, next){
  //console.log("准备进入路由模板");
    next(vm=>{
      //通过vm访问组件实例
     // vm.$root.eventHub.$on('sendOrderNum',vm.getOrderRow);
    //   vm.fetchData();
      vm.fetch();
    })
  }
}
</script>

<style scoped lang="scss">
.title{
    width:100%;
    height:30px;
    background-color:#dddefe;
}
header span:first-child{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    margin-left:10px;
}
section{
    // height:100%;
    //width:90%;
    position: absolute;
    top:30px;
    bottom: 0px;
    left:0;
    right:0;
    overflow-y: scroll;
    padding:0 45px;

    .orderTable{
        width:100%;
        margin:5px 0 20px;
        td{
            border:1px solid #d4d8e4;
            border-collapse: collapse;
            height: 20px;
            padding:5px;
        }
        td:nth-of-type(odd){
            width:10%;
            font-weight: bold;
        }
        td:nth-of-type(even){
            width:20%;
        }
    }
    .payInput{
        height:26px;
        width:85px;
        border-radius: 4px;
        border:1px solid #dcdfe6;
        margin-right:5px;
        padding-left:5px;
    }
    .tableTitle{
        margin:20px 0 5px;
    }
    .listTable{
        margin-bottom:20px;
        width:100%;
        // overflow-x: scroll;
    }
    fieldset {
        padding: 20px 0 10px 10px;
        margin:10px 0;
        height: 90px;
        border: 1px solid #d6dbe7;
        .smallTable{
            width:210px;
            height: 70px;
            position: relative;
            display: inline-block;
            div{
                border:1px solid #d4d8e4;
                height: 32px;
                text-align:center;
                line-height: 32px;
            }
            .tableItem{
                position: absolute;
                top:0;
                left:0;
                width:120px;
            }
            .outerBtn{
                position: absolute;
                top:0;
                left:121px;
                width:80px;
                border-left:none;
            }
            .itemContent{
                position: absolute;
                top:30px;
                left:0;
                width:200px;
                border-top:none;
            }
            
        }
    }
   .oprateBtn{
    //    position: fixed;;
    //    bottom:25px;
    //    right:45px;
        float: right;
        margin:10px 0;
        a{
            text-decoration: underline;
            color:blue;
            cursor: pointer;
            margin:0 10px;
            &:hover{
                 color:red;
            }
        }
        #confirmBtn{
            margin-left:50px;
        }
        
       
    }
}

</style>
