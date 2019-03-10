<template>
 <div class="page" style="height:100%;position:relative;">
    <header>
        <div class="headerTitle">
            <span @click="goBack"><i class="el-icon-back"></i></span> 
            <span>车险费率新增/编辑</span>
        </div>
    </header>
    <section>
    <el-tabs type="border-card" v-model="activeTab" style="height:90%;">
        <el-tab-pane label="初始化" name="searchTab">
            <div class="tabContent">
                <form action="">
                <div>
                    <div class="title">名称</div>
                    <div class="content">
                        <el-input v-model="nameInput" size="mini" style="width:350px"></el-input>
                    </div>
                </div>  
                <div>
                    <div class="title">有效期</div>
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
                    <div class="title">保险公司</div>
                    <div class="content">
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
                    <div class="title">
                        <el-checkbox v-model="brenchChecked" class="checkbox"></el-checkbox>    
                        分支机构
                    </div>
                    <div class="content">   
                        <el-select
                            size="mini"
                            v-model="brenchSel"
                            multiple
                            collapse-tags
                            @change="handleSelectChange">
                            <el-option
                            v-for="item in brenchOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div>
                    <div class="title">
                        <el-checkbox v-model="carChecked" class="checkbox"></el-checkbox>    
                        车型
                    </div>
                    <div class="content">   
                        <el-select
                            size="mini"
                            v-model="carSel"
                            multiple
                            collapse-tags
                            @change="handleSelectChange">
                            <el-option
                            v-for="item in carOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select
                            size="mini"
                            v-model="carSel2"
                            multiple
                            collapse-tags
                            @change="handleSelectChange">
                            <el-option
                            v-for="item in carOpt2"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div> 
            </form>
            </div>
        </el-tab-pane>
        <el-tab-pane label="费率列表--交强险" name="listTab" v-if="editor">
            <div class="tabContent">
                <div class="listTable">
                    <div>
                        <div class="title">名称</div>
                        <div class="content">
                            <el-input v-model="nameInput2" size="mini" style="width:350px"></el-input>
                        </div>
                    </div>  
                    <div>
                        <div class="title">有效期</div>
                        <div class="content">
                            <el-date-picker
                            size="mini"
                            v-model="dateValue2"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                            </el-date-picker>
                        </div>
                    </div>  
                    <div>
                        <div class="title">费率调整</div>
                        <div class="content">
                            进项 <el-input-number size="mini" v-model="rateNum1" controls-position="right" @change="handleChange" :precision="2" :step="0.1" :min="0" :max="1"></el-input-number>&nbsp;&nbsp;
                            支项 <el-input-number size="mini" v-model="rateNum2" controls-position="right" @change="handleChange" :precision="2" :step="0.1" :min="0" :max="1"></el-input-number>
                        </div>
                    </div>  
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
                        label="保险公司"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="险种"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="分支"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="车辆类型"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="进项"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="支项"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="费率列表--商业险" name="listTab2" v-if="editor">
            <div class="tabContent">
                <div class="listTable">
                    <div>
                        <div class="title">费率调整</div>
                        <div class="content">
                            进项 <el-input-number size="mini" v-model="rateNum3" controls-position="right" @change="handleChange" :precision="2" :step="0.1" :min="0" :max="1"></el-input-number>&nbsp;&nbsp;
                            支项 <el-input-number size="mini" v-model="rateNum4" controls-position="right" @change="handleChange" :precision="2" :step="0.1" :min="0" :max="1"></el-input-number>
                        </div>
                    </div>  
                    <el-table
                        ref="recordTable"
                        size="mini"
                        border
                        height="350px"
                        :data="recordList"
                        highlight-current-row
                        @row-click="setOrderNum">
                        <el-table-column
                        type="index"
                        width="50">
                        </el-table-column>
                        <el-table-column
                        property="orderNum"
                        label="保险公司"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="险种"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="分支"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="车辆类型"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="进项"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="支项"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </el-tab-pane>
    </el-tabs>
    <div class="oprateBtn">
        <el-button type="primary" size="mini" @click="makeRateTable">生成费率表</el-button>
        <el-button type="primary" size="mini">审核</el-button>
        <el-button type="primary" size="mini" >保存</el-button>
        <el-button type="danger" size="mini" @click="goBack()">关闭</el-button>
    </div>
    </section>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
    activeTab:'searchTab',
    nameInput:'',
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
    compSel:["选项2"],
    brenchChecked:false,
    brenchSel:['不区分'],
    brenchOpt: [{
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
    carSel:['不区分'],
    carOpt: [{
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
    carSel2:['不区分'],
    carOpt2: [{
          value: '不区分',
        }],
    nameInput2:'',
    dateValue2:'',
    rateNum1:'',
    rateNum2:'',
    rateNum3:'',
    rateNum4:'',
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
        if(value[value.length-1]=="不区分"){
            value.splice(0,value.length-1)
         }else if(value.indexOf("不区分")!=-1){
            value.splice(value.indexOf("不区分"),1)
         }
     },
     goBack(){
       history.go(-1);
       //this.$root.eventHub.$emit("sendOrderNum",this.orderNum)
    },
    fetch(){
        this.editor=this.$route.query.editor;
        if(this.editor){
            this.activeTab="listTab"
        }
        
        //console.log(this.editor+'编辑')
    },
    makeRateTable(){
        this.editor=true;
        this.activeTab="listTab"
    },
     handleToggleTab(){
         
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
         //this.orderNum=row.orderNum;
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
        .title{
            width:80px;
        }
    }
    .oprateBtn{
    //    position: fixed;;
    //    bottom:25px;
    //    right:45px;
        float: right;
        margin:10px;
    }

</style>
