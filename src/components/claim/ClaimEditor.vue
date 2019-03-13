<template>
 <div class="page" style="height:100%;position:relative;">
    <header>
        <div class="title">
            <span @click="goBack"><i class="el-icon-back"></i></span> 
            <span>{{headerTitle}}</span>
        </div>
    </header>
    <section>
            <fieldset>
                <legend>
                    基本信息
                </legend>
                <div class="content">
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">保单号码</span>
                                <el-input v-model="orderNum" :disabled="disabled" size="mini" style="width:200px;"></el-input>  
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">保险公司</span>
                                <el-select size="mini" v-model="insurComp" :disabled="disabled">
                                    <el-option
                                    v-for="item in compOpt"
                                    :key="item.value"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">报案号</span>
                                <el-input v-model="reportNum" :disabled="disabled" size="mini" style="width:200px;" ></el-input>  
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">报案日期</span>
                                <el-date-picker
                                size="mini"
                                v-model="reportDate"
                                :disabled="disabled"
                                type="datetime"
                                placeholder="选择日期时间">
                                </el-date-picker>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">任务类型</span>
                                <el-select size="mini" v-model="taskType" :disabled="disabled">
                                    <el-option
                                    v-for="item in taskOpt"
                                    :key="item.value"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                    </el-row>
                     <el-row :gutter="20">
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">查勘地点</span>
                                <el-input v-model="surveyAddr" :disabled="disabled" size="mini" style="width:200px;"></el-input>  
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">查勘员</span>
                                <el-input v-model="surveyer" :disabled="disabled" size="mini" style="width:150px;"></el-input> 
                                <el-button :disabled="disabled" style="margin-left: 5px;" size="mini">...</el-button> 
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">是否结案</span>
                                <el-select size="mini" v-model="finalJudge" :disabled="disabled" >
                                    <el-option
                                    v-for="item in finalOpt"
                                    :key="item.value"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">车牌号码</span>
                                <el-input v-model="carNum" :disabled="disabled" size="mini" style="width:200px;"></el-input>  
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">出单员</span>
                                <el-input v-model="createPerson" :disabled="disabled" size="mini" style="width:150px;"></el-input> 
                                <el-button :disabled="disabled" style="margin-left: 5px;" size="mini">...</el-button> 
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">被保险人</span>
                                <el-input v-model="insuranceder" :disabled="disabled" size="mini" style="width:200px;"></el-input>  
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="24">
                            <div class="grid-content processBox">
                                <span class="title claimProcess">出险经过</span>
                                <el-input type="textarea" :rows="3" v-model="claimProcess" :disabled="disabled" size="mini" style="width:85%;" class="processInput"></el-input>  
                            </div>
                        </el-col>
                    </el-row>
                </div>
                
            </fieldset>
            <fieldset>
                <legend>
                    追踪记录
                </legend>
                <div class="content" v-if="!editor">
                    <ClaimRecord></ClaimRecord>
                </div>
                <div class="content" v-if="editor">
                    <el-button type="primary" size="mini" id="addRecord" @click="handleAddRecord">增加追踪记录</el-button>
                    <el-dialog
                        title="追踪记录编辑"
                        :visible.sync="dialogVisible"
                        width="70%">
                        <div class="dialogMsg">
                            <ClaimRecord></ClaimRecord>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button size="mini" @click="dialogVisible = false" type="danger">取 消</el-button>
                            <el-button size="mini" type="primary" @click="dialogConfirm">确 定</el-button>
                        </span>
                    </el-dialog>
                    <table class="orderTable" v-for="item in recordArr" :key="item.index">
                        <tr>
                            <td>保险公司</td>
                            <td colspan="3">{{item.company}}</td>
                            <td>状态</td>
                            <td>{{item.status}}</td>
                        </tr>
                        <tr>
                            <td>处理人</td>
                            <td colspan="3">{{item.dealPer}}</td>
                            <td>时间</td>
                            <td>{{item.date}}</td>
                        </tr>
                        <tr>
                            <td>绩效支出</td>
                            <td>{{item.cost}}</td>
                            <td>公估费用</td>
                            <td>{{item.fee}}</td>
                            <td>是否开票</td>
                            <td>{{item.ticket}}</td>
                        </tr>
                        <tr>
                            <td>附件</td>
                            <td colspan="5">{{item.file}}</td>
                        </tr>
                        <tr>
                            <td>过程</td>
                            <td colspan="5">
                                <el-input type="textarea" :rows="3" v-model="item.process" size="mini"></el-input> 
                                <el-button type="primary" size="mini" style="margin-top:5px;"   @click="editorRecord">编辑</el-button> 
                            </td>
                        </tr>
                    </table>
                </div>
            </fieldset>
            <fieldset>
                <legend>
                    结算信息
                </legend>
                <div class="content">
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">结案金额</span>
                                 <el-input-number size="mini" v-model="finalMoney" :disabled="disabled" controls-position="right" :min="0" ></el-input-number>
                                 <el-checkbox v-model="openInvoice2" :disabled="disabled" class="checkbox" style="margin-left:15px;">是否开票</el-checkbox>    
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">发票号</span>
                                <el-input v-model="invoiceNum" :disabled="disabled" size="mini" style="width:200px;"></el-input>  
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">发票金额</span>
                                <el-input v-model="invoiceMoney" :disabled="disabled" size="mini" style="width:200px;"></el-input>  
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">来款日期</span>
                                <el-date-picker size="mini" v-model="getMoneyDate" :disabled="disabled" type="date" placeholder="选择日期"></el-date-picker>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">来款金额</span>
                                <el-input v-model="getMoney" :disabled="disabled" size="mini" style="width:200px;"></el-input>  
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="24">
                            <div class="grid-content processBox">
                                <span class="title claimProcess">备注说明</span>
                                <el-input type="textarea" :rows="3" v-model="remark" :disabled="disabled" size="mini" style="width:85%;" class="processInput"></el-input>  
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </fieldset>
            <div>
                <div class="oprateBtn">
                    <el-button type="primary" size="mini" id="confirmBtn">确定</el-button>
                    <el-button type="danger" size="mini" @click="goBack()">取消</el-button>
                </div>
            </div>
    </section>
 </div>
</template>

<script type="text/ecmascript-6">
import ClaimRecord from './ClaimRecord.vue'
export default {
 data() {
 return {
     headerTitle:'',
     editor:false,
     processTd:'',
     dialogVisible:false,
     addRecord:false,
     recordArr:[{
         company:'太平洋财',
         status:'正常',
         dealPer:'hh',
         date:'2017-09-23',
         cost:'22',
         fee:'33',
         ticket:'是',
         process:'巴拉',
         file:'file1.doc'
     }],
     disabled:false,
     orderNum:'',
     compOpt:[{
          value: '长安财',
        }, {
          value: '亚太财',
        }, {
          value: '阳光财',
        }],
    insurComp:'阳光财',
   taskType:'查勘定损',
   taskOpt:[{
          value: '查勘定损',
        }, {
          value: '查勘',
        }, {
          value: '单定损',
        }],
    reportNum:'',
    reportDate:'',
    surveyAddr:'',
    surveyer:'',
    finalJudge:'未结案',
    finalOpt:[{
          value: '未结案',
        }, {
          value: '已结案',
        }],
    carNum:'',
    createPerson:'',
    insuranceder:'',
    claimProcess:'',
    insurComp2:'长安财',
    reportDate2:'',
    orderStatus:'正常',
    statusOpt:[{
          value: '正常',
        }, {
          value: '销案有照片',
        },{
          value: '销案无照片',
        }, {
          value: '拒赔',
        }],
    handlePerson:'',
    jixiao:'',
    ggCost:'',
    openInvoice:false,
    handleProcess:'',
    fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
    finalMoney:'',
    openInvoice2:'',
    invoiceNum:'',
    invoiceMoney:'',
    getMoneyDate:'',
    getMoney:'',
    remark:''
 }
 },
 components: {
     ClaimRecord
 },
 mounted() {
    this.fetch();
 },
 methods:{
    goBack(){
       history.go(-1);
       //this.$root.eventHub.$emit("sendOrderNum",this.orderNum)
    },
    fetch(){
        this.editor=this.$route.query.editor;
        if(this.editor){
            this.headerTitle="理赔编辑"
        }else{
            this.headerTitle="理赔新增"
        }
        //console.log(this.editor+'编辑')
    },
    handleAddRecord(){
        this.dialogVisible=true;
        this.addRecord=true;
    },
    editorRecord(){
        this.dialogVisible=true;
        this.addRecord=false;
    },
    dialogConfirm(){
        if(this.addRecord){
            var recordItem={
         company:'太平洋财',
         status:'正常',
         dealPer:'hh',
         date:'2017-09-23',
         cost:'22',
         fee:'33',
         ticket:'是',
         process:'巴拉',
         file:'file1.doc'
     };
            this.recordArr.push(recordItem);
        }
        this.dialogVisible=false;
    },
  
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
header .title{
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
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
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

    
    fieldset {
        padding: 10px;
        margin:10px 0;
       // height: 90px;
        border: 1px solid #d6dbe7;
        
        .content{
            padding-left: 20px;

            .title{
                display:inline-block;
                width:65px;
                text-align: right;
                padding-right: 5px;
            }
            .processBox{
                height:80px;
                position:relative;

                .claimProcess{
                    position: absolute;
                    top:0;
                }
                .processInput{
                    position: absolute;
                    top:0;
                    left:70px;
                }
            }
            #addRecord{
                float: right;
            }
            .dialogMsg{
                width:95%;
                margin:auto;
                padding:20px;
                border:1px solid #d4d8e4;

            }
            .orderTable{
                width:80%;
                margin:10px 0;
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
