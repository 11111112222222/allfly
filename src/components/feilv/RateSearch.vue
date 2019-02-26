<template>
 <div class="page" style="height:100%">
    <el-tabs type="border-card" v-model="activeTab" style="height:100%;overflow-y:auto;">
        <el-tab-pane label="代理险种费用率查询/导入" name="searchTab">
            <div class="tabContent">
                 <fieldset>
                    <legend>
                        快捷操作
                    </legend>
                    <div>
                        <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-success="handleSuccess"
                        :file-list="fileList">
                        <div slot="tip" class="el-upload__tip">选择要导入的险种费用率 excel 模板</div>
                        <el-button size="mini" type="primary">批量数据导入</el-button>
                        </el-upload>
                    </div>
                </fieldset>
                <form action="">
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
                            collapse-tags>
                            <el-option
                            v-for="item in compOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>  
                <div>
                    <div class="title">险种费率参数名称</div>
                    <div class="content">
                        <el-checkbox v-model="nameChecked" class="checkbox"></el-checkbox>    
                        <el-select
                            size="mini"
                            v-model="nameSel"
                            multiple
                            collapse-tags
                            @change="handleSelectChange">
                            <el-option
                            v-for="item in nameOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div>
                    <div class="title">险种全称/简称/代码</div>
                    <div class="content">
                        <el-checkbox v-model="typeChecked" class="checkbox"></el-checkbox>    
                        <el-select size="mini" v-model="typeSel">
                            <el-option
                            v-for="item in typeOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>&nbsp;&nbsp;
                         <el-input v-model="typeInput" size="mini" style="width:250px"></el-input>
                    </div>
                </div>  
                <div>
                    <div class="title">险种类别/参数区别</div>
                    <div class="content">
                        <el-checkbox v-model="paramChecked" class="checkbox"></el-checkbox>    
                        <el-select size="mini" v-model="paramSel">
                            <el-option
                            v-for="item in paramOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>&nbsp;&nbsp;
                        <el-select
                            size="mini"
                            v-model="valueSel"
                            collapse-tags>
                            <el-option
                            v-for="item in valueOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>  
                <div>
                    <div class="title">费率有效期</div>
                    <div class="content">
                        <el-checkbox v-model="dateChecked" class="checkbox"></el-checkbox>    
                        <el-select size="mini" v-model="dateSel">
                            <el-option
                            v-for="item in dateOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>&nbsp;&nbsp;
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
                <el-button type="primary" size="medium" class="searchBtn">生成费率导入空模板</el-button>
                <el-button type="primary" size="medium"  @click="handleToggleTab">查询</el-button>
            </form>
            </div>
        </el-tab-pane>
        <el-tab-pane label="列表" name="listTab">
            <div class="tabContent">
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
                        type="selection"
                        width="50">
                        </el-table-column>
                        <el-table-column
                        type="index"
                        width="50">
                        </el-table-column>
                        <el-table-column
                        property="orderNum"
                        label="标题"
                        sortable
                        width="500">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="发布日期"
                        sortable>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="oprateBtn">
                    <el-button type="primary" size="mini" @click="editorBtn">查询结果导出excel</el-button>
                    <el-button type="danger" size="mini" @click="delateInfo">批量删除选中费率</el-button>
                    <el-button type="primary" size="mini" @click="editorBtn">批量修改选中费率</el-button>
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
    fileList: [],
    insurChecked:true,
     sortOpt:[{
          value: '指定保险公司',
        }, {
          value: '所有寿险公司',
        }, {
          value: '所有产险公司',
        }],
    compSort:'指定保险公司',
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
    nameChecked:false,
    nameSel:['不区分'],
    nameOpt: [{
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
    typeChecked:false,
    typeSel:'全称',
    typeOpt:[{
          value: '全称',
        }, {
          value: '简称',
        }, {
          value: '代码',
        }],
    typeInput:'',
    paramChecked:false,
    paramSel:'险种类别',
    paramOpt:[{
          value: '险种类别',
        }, {
          value: '参数区别',
        }],
    valueSel:'选项2',
    valueOpt:[{
          value: '选项2',
        }, {
          value: '选项3',
        }, {
          value: '选项4',
        }, {
          value: '选项5',
        }],
    dateChecked:false,
    dateSel:'有效期起',
    dateValue:'',
    dateOpt:[{
          value: '有效期起',
        }, {
          value: '有效期止',
        }],
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
     handleToggleTab(){
         this.activeTab="listTab"
     },
     editorBtn(){
         this.$router.push({path:"/user/claimEditor",query:{claimOrderNum:this.claimOrderNum}})
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
     setOrderNum(row){  
         console.log("当前行",row);
         //this.orderNum=row.orderNum;
     },
     handleSuccess(response,file, fileList) {
        console.log(response,file, fileList);
      },
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
        fieldset {
            padding: 20px 20px;
            margin:10px 0 20px 150px;
           width: 250px;
           height:100px;
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
       // width:100px;
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
