<template>
 <div class="page" style="height:100%;position:relative;">
    <header>
        <div class="title">
            <span @click="goBack"><i class="el-icon-back"></i></span> 
            <span>理赔查看 / 编辑</span>
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
                                <el-input v-model="orderNum" size="mini" style="width:200px;"></el-input>  
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">保险公司</span>
                                <el-select size="mini" v-model="insurComp">
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
                                <el-input v-model="reportNum" size="mini" style="width:200px;"></el-input>  
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">报案日期</span>
                                <el-date-picker
                                size="mini"
                                v-model="reportDate"
                                type="datetime"
                                placeholder="选择日期时间">
                                </el-date-picker>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">任务类型</span>
                                <el-select size="mini" v-model="taskType">
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
                                <el-input v-model="surveyAddr" size="mini" style="width:200px;"></el-input>  
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">查勘员</span>
                                <el-input v-model="surveyer" size="mini" style="width:150px;"></el-input> 
                                <el-button style="margin-left: 5px;" size="mini">...</el-button> 
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">是否结案</span>
                                <el-select size="mini" v-model="finalJudge">
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
                                <el-input v-model="carNum" size="mini" style="width:200px;"></el-input>  
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">出单员</span>
                                <el-input v-model="createPerson" size="mini" style="width:150px;"></el-input> 
                                <el-button style="margin-left: 5px;" size="mini">...</el-button> 
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">被保险人</span>
                                <el-input v-model="insuranceder" size="mini" style="width:200px;"></el-input>  
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="24">
                            <div class="grid-content processBox">
                                <span class="title claimProcess">出险经过</span>
                                <el-input type="textarea" :rows="3" v-model="claimProcess" size="mini" style="width:85%;" class="processInput"></el-input>  
                            </div>
                        </el-col>
                    </el-row>
                </div>
                
            </fieldset>
            <fieldset>
                <legend>
                    追踪记录
                </legend>
                <div class="content">
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">保险公司</span>
                                <el-select size="mini" v-model="insurComp2">
                                    <el-option
                                    v-for="item in compOpt"
                                    :key="item.value"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">时间</span>
                                <el-date-picker
                                size="mini"
                                v-model="reportDate2"
                                type="datetime"
                                placeholder="选择日期时间">
                                </el-date-picker>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">状态</span>
                                <el-select size="mini" v-model="orderStatus">
                                    <el-option
                                    v-for="item in statusOpt"
                                    :key="item.value"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">处理人</span>
                                <el-input v-model="handlePerson" size="mini" style="width:150px;"></el-input> 
                                <el-button style="margin-left: 5px;" size="mini">...</el-button> 
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">绩效支出</span>
                                <el-input-number size="mini" v-model="jixiao" controls-position="right" :min="0" ></el-input-number>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">公估费用</span>
                                 <el-input-number size="mini" v-model="ggCost" controls-position="right" :min="0" ></el-input-number>
                                 <el-checkbox v-model="openInvoice" class="checkbox" style="margin-left:15px;">是否开票</el-checkbox>    
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <div class="grid-content processBox">
                                <span class="title claimProcess">处理过程</span>
                                <el-input type="textarea" :rows="3" v-model="handleProcess" size="mini" style="width:85%;" class="processInput"></el-input>  
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content" style="margin-left:30px;">
                                <el-upload
                                    class="upload-demo"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :before-remove="beforeRemove"
                                    :on-change="handleChange"
                                    multiple
                                    :file-list="fileList">
                                    <el-button size="mini" type="primary">添加附件</el-button>
                                    <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                                </el-upload>
                            </div>
                        </el-col>
                    </el-row>
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
                                 <el-input-number size="mini" v-model="finalMoney" controls-position="right" :min="0" ></el-input-number>
                                 <el-checkbox v-model="openInvoice2" class="checkbox" style="margin-left:15px;">是否开票</el-checkbox>    
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">发票号</span>
                                <el-input v-model="invoiceNum" size="mini" style="width:200px;"></el-input>  
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">发票金额</span>
                                <el-input v-model="invoiceMoney" size="mini" style="width:200px;"></el-input>  
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">来款日期</span>
                                <el-date-picker size="mini" v-model="getMoneyDate" type="date" placeholder="选择日期"></el-date-picker>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <span class="title">来款金额</span>
                                <el-input v-model="getMoney" size="mini" style="width:200px;"></el-input>  
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="24">
                            <div class="grid-content processBox">
                                <span class="title claimProcess">备注说明</span>
                                <el-input type="textarea" :rows="3" v-model="remark" size="mini" style="width:85%;" class="processInput"></el-input>  
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
export default {
 data() {
 return {
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
        // this.orderNum=this.$route.query.orderNum;
        // console.log(this.orderNum)
    },
    beforeRemove(file){
        console.log(file);
        return this.$confirm(`确定移除 ${ file.name }？`);
    },
    handleChange(file,fileList){
        console.log(file,fileList)
        this.fileList= fileList.slice(-3);
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
        padding: 20px 0 10px 10px;
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
                    left:74px;
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
