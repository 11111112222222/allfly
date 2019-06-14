<template>
 <div class="page" style="height:100%;position:relative;">
    <header>
        <div class="headerTitle">
            <span @click="goBack"><i class="el-icon-back"></i></span> 
            <span>{{headerTitle}}</span>
        </div>
    </header>
    <section>
    <el-tabs type="border-card" v-model="activeTab">
        <el-tab-pane label="险种明细" name="searchTab">
            <div class="tabContent">
                <form action="">
                <div>
                    <div class="title">保险公司</div>
                    <div class="content">
                        <el-select
                            size="mini"
                            v-model="compSel"
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
                    <div class="title">主/附约</div>
                    <div class="content"> 
                        <el-select
                            size="mini"
                            v-model="contractSel"
                            @change="handleSelectChange">
                            <el-option
                            v-for="item in contractOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div>
                    <div class="title">险种代码</div>
                    <div class="content">
                        <el-input v-model="codeInput" size="mini" style="width:192px"></el-input>
                    </div>
                </div>  
                <div>
                    <div class="title">险种类别</div>
                    <div class="content">   
                        <el-select
                            size="mini"
                            v-model="typeSel"
                            @change="handleSelectChange">
                            <el-option
                            v-for="item in typeOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div>
                    <div class="title">险种全称</div>
                    <div class="content">    
                        <el-input v-model="fullNameInput" size="mini" style="width:192px"></el-input>
                    </div>
                </div> 
                <div>
                    <div class="title">险种简称</div>
                    <div class="content">  
                        <el-input v-model="shortInput" size="mini" style="width:192px"></el-input>
                        <el-checkbox v-model="syncChecked1" disabled class="checkbox">费率同步主约</el-checkbox>    
                    </div>
                </div> 
                <div>
                    <div class="title">参数区别</div>
                    <div class="content">
                        <el-select
                            size="mini"
                            v-model="paramSel"
                            @change="handleSelectChange">
                            <el-option
                            v-for="item in paramOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-checkbox v-model="syncChecked2" disabled class="checkbox">费率同步首年</el-checkbox>    
                    </div>
                </div>
                <div class="yearTable">
                    <div class="title yearTitle">交费年期一览表</div>
                    <div class="tableContent">
                    <div class="yearList">  
                        <el-table
                            ref="recordTable"
                            size="mini"
                            border
                            height="200px"
                            :data="yearList"
                            highlight-current-row
                            @row-click="setYearRow">
                            <el-table-column
                            property="year"
                            label="年期/分档"
                            width="100">
                            </el-table-column>
                            <el-table-column
                            property="strate"
                            label="说明"
                            width="240">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="yearBtn">
                        <el-button type="primary" size="mini" class="addYear"  @click="dialogVisible = true">新增</el-button>
                        <el-button type="primary" size="mini" class="editYear" @click="dialogVisible = true">编辑</el-button>
                        <el-button type="primary" size="mini" class="delateYear" @click="delateYear()">移除</el-button> 
                    </div>
                    <el-dialog
                        :title="yearDialogTitle"
                        :visible.sync="dialogVisible"
                        width="30%">
                        <div class="yearMsg">
                            <div>
                                <span>年期</span>
                                <el-input v-model="yearInput" size="small" style="width:100px;"></el-input>
                                 
                            </div>
                            <div>
                                <span>说明</span>
                                <el-input v-model="illustrate" size="small"  style="width:270px;"></el-input>
                              
                            </div>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button size="mini" @click="dialogVisible = false" type="danger">关 闭</el-button>
                            <el-button size="mini" type="primary">添 加</el-button>
                        </span>
                    </el-dialog>
                    </div>
                </div>
                <div>
                    <div class="title">险种销售期间</div>
                    <div class="content">  
                        <el-date-picker
                        size="mini"
                        v-model="dateValue"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </div> 
                <div>
                    <div class="title">备注</div>
                    <div class="content">    
                        <el-input v-model="remark" size="mini" style="width:350px"></el-input>
                    </div>
                </div> 
                <el-button type="primary" size="small" class="searchBtn" >重置</el-button>
                <el-button type="primary" size="small" @click="apply()">应用</el-button>
                 <el-button type="primary" size="small" @click="goBack()">关闭</el-button>
            </form>
            </div>
        </el-tab-pane>
        <el-tab-pane label="核拥费率列表" name="listTab" v-if="editor">
            <div class="tabContent">
                <div class="listTable">
                    <el-table
                        ref="recordTable"
                        size="mini"
                        border
                        height="300px"
                        :data="recordList"
                        highlight-current-row
                        @row-click="setOrderNum">
                        <el-table-column
                        type="index"
                        width="50">
                        </el-table-column>
                        <el-table-column
                        property="orderNum"
                        label="费率参数名称"
                        sortable>
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="收/支"
                        sortable>
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="年期-起"
                        sortable>
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="年期-讫"
                        sortable>
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="计绩开始"
                        sortable>
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="计绩结束"
                        sortable>
                        </el-table-column>
                        <el-table-column
                        fixed="right"
                        label="操作"
                        width="150">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="deleteInfo(scope.$index,recordList)" type="danger" size="mini">移除</el-button>
                            <el-button type="primary" size="mini" @click="editorBtn(scope.row)">编辑</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    <fieldset>
                        <legend>
                            说明
                        </legend>
                        <div>
                            <el-input
                            type="textarea"
                            :rows="3"
                            v-model="rateStrate">
                            </el-input>
                        </div>
                    </fieldset>
                </div>
                <div class="oprateBtn">
                    <el-button type="primary" size="mini" @click="rateDialogVisible = true">新增</el-button>
                    <el-button type="primary" size="mini" @click="goBack()">关闭</el-button>
                </div>
                <el-dialog
                    title="险种费率编辑"
                    :visible.sync="rateDialogVisible"
                    width="60%">
                    <div class="bodyMsg">
                         <div>
                            <div class="title">费率参数名称</div> 
                            <el-select v-model="rateParam" size="mini">
                                <el-option
                                v-for="item in rateParamOpt"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <el-select v-model="rateParam2" size="mini">
                                <el-option
                                v-for="item in rateParamOpt2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div>
                            <div class="title">佣金制度</div> 
                            <el-input v-model="system" size="small"  style="width:270px;"></el-input>
                        </div>
                        <fieldset>
                            <legend>
                                <el-button type="primary" size="mini" >产生参数表</el-button>
                            </legend>
                            <div>
                                <div class="title">年期/分档</div> 
                                <el-input-number v-model="subYearStart" controls-position="right" :min="0" :max="100" size="mini" style="width:100px"></el-input-number>
                                -
                                <el-input-number v-model="subYearEnd" controls-position="right" :min="0" :max="100" size="mini" style="width:100px"></el-input-number>
                                 <span class="remark">交费年期0~0表示泵缴</span>
                            </div>
                        </fieldset>
                        <div>
                            <div class="title">使用期间</div> 
                            <el-date-picker
                            size="mini"
                            v-model="useDate"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                            </el-date-picker>
                        </div>
                        <div>
                            <div class="title">业绩考核</div> 
                            <el-checkbox v-model="examChecked" disabled class="checkbox">计入FYC</el-checkbox>    
                        </div>
                        <div>
                            <div class="title">参数说明</div> 
                            <el-input v-model="paramStrate" size="small"  style="width:270px;"></el-input>  
                        </div>
                        <div>
                            <div class="title">参数值表</div> 
                            <span class="remark">险种基本费率</span>
                            <el-table
                                ref="recordTable"
                                size="mini"
                                border
                                height="200px"
                                :data="yearList"
                                highlight-current-row
                                @row-click="setYearRow"
                                style="width:200px;margin-left:180px;">
                                <el-table-column
                                property="year"
                                label="年度"
                                width="100">
                                </el-table-column>
                                <el-table-column
                                property="strate"
                                label="费率">
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button size="mini" type="danger" @click="rateDialogVisible = false">取 消</el-button>
                        <el-button size="mini" type="primary" @click="rateDialogVisible = false">确 定</el-button>
                    </span>
                </el-dialog>
            </div>
        </el-tab-pane>
    </el-tabs>
    </section>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
    activeTab:'searchTab',
    headerTitle:'',
    yearNum:'',
    editor:true,
    compOpt: [{
          value: '选项2',
        }, {
          value: '选项3',
        }, {
          value: '选项4',
        }, {
          value: '选项5',
        }],
    compSel:"选项2",
    contractSel:"主约",
    contractOpt: [{
          value: '主约',
        }, {
          value: '附约',
        }],
    codeInput:'',
    typeSel:"选项2",
    typeOpt: [{
          value: '选项2',
        }, {
          value: '选项3',
        }, {
          value: '选项4',
        }, {
          value: '选项5',
        }],
    fullNameInput:'',
    shortInput:'',
    paramSel:'一般险种',
    paramOpt: [{
          value: '一般险种',
        }, {
          value: '团体险种',
        }, {
          value: '卡单险种',
        }, {
          value: '车险险种',
        }, {
          value: '财险险种',
        }, {
          value: '自营网络平台险种',
        }, {
          value: '第三方网络平台险种',
        }],
    yearList:[{
          year: '3',
          strate: '',
        }, {
          year: '1',
          strate: '',
        },{
          year: '5',
          strate: '',
        }],
    syncChecked1:false,
    syncChecked2:false,
    dateValue:'',
    remark:'',
    yearDialogTitle:'年期添加',
    dialogVisible:false,
    yearInput:'',
    illustrate:'',
    rateDialogVisible:false,
    rateParam:'',
    rateParamOpt: [{
          value: '收项',
        }, {
          value: '支项',
        }, {
          value: '其他',
        }],
    rateParam2:'',
    rateParamOpt2: [{
          value: '首/续年佣金',
        }, {
          value: '销售奖金',
        }, {
          value: '续年度服务津贴',
        }],
    system:'',
    subYearStart:'',
    subYearEnd:'',
    useDate:'',
    examChecked:true,
    paramStrate:'',
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
    }],
    rateStrate:'',
    orderNum:'',
    recordListIndex:0
 }
 },
 components: {

 },
 mounted() {
     this.fetch();
     console.log('进入了')
 },
 methods:{
     handleSelectChange(value){
        
     },
     goBack(){
       history.go(-1);
        this.activeTab="searchTab";
       //this.$router.push({path:"/user/agencyManage"})
       //this.$root.eventHub.$emit("sendOrderNum",this.orderNum)
    },
    fetch(){
        this.editor=this.$route.query.editor;
        if(this.editor){
            this.headerTitle="险种信息编辑"
        }else{
            this.headerTitle="险种信息添加"
        }
        console.log(this.editor+'编辑')
    },
    apply(){
        this.editor=true;
        this.activeTab="listTab";

    },
     handleToggleTab(){
         this.activeTab="listTab"
     },
     editorBtn(){
         this.rateDialogVisible = true;
       //  this.$router.push({path:"/user/claimEditor",query:{claimOrderNum:this.claimOrderNum}})
     },
     delateYear(){
          for(var i=0;i<this.yearList.length;i++){
                if(this.yearList[i].year==this.yearNum){
                    this.yearList.splice(i,1);
                    break;
                }
            }
     },
     deleteInfo(index,table){
         this.$confirm('确定删除该条数据吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           table.splice(index,1)
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
     setYearRow(row){  
         console.log("当前行",row);
         this.yearNum=row.year;
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
     vm.fetch();
    //   vm.getDate();
    })
  }
}
</script>

<style scoped lang="scss">
header .headerTitle{
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
}
    .tabContent{
        position: relative;
        text-align: left;
        padding:0 30px;
        // height: 100%;
        // overflow: scroll;

        .yearTable{
            position: relative;
            margin-top:10px;
             height: 230px;
            .yearTitle{
                position: absolute;
                top:10px;
            }
            .tableContent{
                border:1px solid #d6dbe7;
                 height: 220px;
                 width:500px;
                 margin-left:150px
            }
            .yearList{
                position: absolute;
                top:10px;
                left:160px;
               
            }
            .yearBtn{
                position: absolute;
                top:10px;
                left:570px;
                button{
                    display: block;
                    margin:5px 0;
                }
            }
            .yearMsg{
                width:90%;
                margin:auto;
                div{
                    margin:5px;
                }
            }
            
        }
         .bodyMsg{
            width:90%;
            margin:auto;
            height:400px;
            overflow-y: auto;
            border:1px solid #d4d8e4;
            padding:20px 30px;
           
            .remark{
                margin-left:20px;
                color:red;
            }
            
        }
         fieldset {
            padding: 10px 10px;
            margin:10px 0;
           // height: 90px;
            border: 1px solid #d6dbe7;
         }
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
   
    .searchBtn{
        margin-top:10px;
        margin-left:200px;
    }
    .totalData{
        float:left;
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
