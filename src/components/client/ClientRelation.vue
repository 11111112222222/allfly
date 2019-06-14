<template>
 <div class="page" style="height:100%">
    <el-tabs type="border-card" v-model="activeTab" style="height:100%;overflow-y:auto;">
        <el-tab-pane label="客户查询" name="searchTab">
            <div class="tabContent">
                <!-- <form action=""> -->
                <div>
                    <div class="title">客户姓名</div>
                    <div class="content">
                        <el-checkbox v-model="cNameChecked" class="checkbox"></el-checkbox>    
                        <el-input v-model="clientName" size="mini" style="width:250px"></el-input>
                    </div>
                </div>
                <div>
                    <div class="title">身份证号</div>
                    <div class="content">
                        <el-checkbox v-model="cardIdChecked" class="checkbox"></el-checkbox> 
                        <el-input v-model="cardIdValue" size="mini" style="width:250px"></el-input>
                    </div>
                </div>
                <div>
                    <div class="title">保单号码</div>
                    <div class="content">
                        <el-checkbox v-model="orderNumChecked" class="checkbox"></el-checkbox> 
                        <el-input v-model="orderNumValue" size="mini" style="width:250px"></el-input>
                    </div>
                </div>
                <div>
                    <div class="title">联系电话</div>
                    <div class="content">
                        <el-checkbox v-model="contactChecked" class="checkbox" ></el-checkbox>    
                        <el-input v-model="contactValue" size="mini" style="width:250px"></el-input>
                    </div>
                </div>
                <div>
                    <div class="title">保险公司</div>
                    <div class="content">
                        <el-checkbox v-model="insurChecked" class="checkbox"></el-checkbox> 
                        <el-select size="mini" v-model="compSort" @change="handleCompSort">
                            <el-option
                            v-for="item in comSortOpt"
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
                            :key="item.companyId"
                            :value="item.chineseSimpleName">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div>
                    <div class="title">投保险种</div>
                    <div class="content">
                        <el-checkbox v-model="insurTypeChecked" class="checkbox"></el-checkbox>    
                        <el-select size="mini" v-model="insurTypeSel" @change="handleInsurType">
                            <el-option
                            v-for="item in insurTypeOpt"
                            :key="item.insurId"
                            :value="item.insuranceCname">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div>
                    <div class="title">保单受理日期</div>
                    <div class="content">
                        <el-checkbox v-model="indexChecked1" class="checkbox"></el-checkbox>    
                        <el-date-picker
                        v-model="indexDateStart1"
                        type="date"
                        size="mini"
                        placeholder="开始日期">
                        </el-date-picker>&nbsp;&nbsp;至&nbsp;&nbsp;
                        <el-date-picker
                        v-model="indexDateEnd1"
                        type="date"
                        size="mini"
                        placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </div>
                <div>
                    <div class="title">保单生效日期</div>
                    <div class="content">
                        <el-checkbox v-model="indexChecked2" class="checkbox"></el-checkbox>    
                        <el-date-picker
                        v-model="indexDateStart2"
                        type="date"
                        size="mini"
                        placeholder="开始日期">
                        </el-date-picker>&nbsp;&nbsp;至&nbsp;&nbsp;
                        <el-date-picker
                        v-model="indexDateEnd2"
                        type="date"
                        size="mini"
                        placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </div>
                <div>
                    <div class="title">保单交费日期</div>
                    <div class="content">
                        <el-checkbox v-model="indexChecked3" class="checkbox"></el-checkbox>    
                        <el-date-picker
                        v-model="indexDateStart3"
                        type="date"
                        size="mini"
                        placeholder="开始日期">
                        </el-date-picker>&nbsp;&nbsp;至&nbsp;&nbsp;
                        <el-date-picker
                        v-model="indexDateEnd3"
                        type="date"
                        size="mini"
                        placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </div>
                <el-button type="primary" size="medium" class="searchBtn" @click="handleSearch(1)">查询</el-button>
            <!-- </form> -->
            </div>
        </el-tab-pane>
        <el-tab-pane label="列表" name="listTab">
            <div class="tabContent">
                <div class="listTable">
                    <el-table
                        class="table"
                        ref="recordTable"
                        size="mini"
                        border
                        height="780px"
                        :data="recordList"
                        highlight-current-row
                        @row-click="setOrderNum">
                        <el-table-column
                        type="index"
                        width="50">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="客户姓名"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="certfId"
                        label="身份证号"
                        sortable :show-overflow-tooltip="true"
                        width="110">
                        </el-table-column>
                        <el-table-column
                        property="sex"
                        label="性别"
                        sortable :show-overflow-tooltip="true"
                        width="80">
                        </el-table-column>
                         <el-table-column
                        property="telephone"
                        label="联系电话"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="email"
                        label="联系邮箱"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="homeAddress"
                        label="联系地址"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                        property="birthday"
                        label="出生日期"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="type"
                        label="客户类别"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        label="操作"
                        width="150">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="deleteInfo(scope.$index,recordList)" type="danger" size="mini">删除</el-button>
                            <el-button type="primary" size="mini" @click="editorBtn(scope.row)">编辑</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="pageBtn">
                    <el-pagination
                    background
                    layout="prev, pager, next"
                    :current-page="currentPage"
                    :total="totalData"
                    @current-change="handleSearch">
                    </el-pagination>
                </div>
                <div class="oprateBtn">
                        <el-button type="primary" size="mini">导出Excel</el-button>
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
    cardIdChecked:false,
    cardIdValue:'',
    orderNumChecked:false,
    orderNumValue:'',
    contactChecked:false,
    contactValue:'',
    indateChecked:false,
    indateSel:'有效期起',
    indateOpt:[{
          value: '有效期起',
        }, {
          value: '有效期止',
        }],
    indateValue:'',
    insurChecked:false,
    comSortOpt:[{
          value: '指定保险公司',
        }, {
          value: '寿险公司',
        }, {
          value: '产险公司',
        }],
    compSort:'指定保险公司',
    compOpt: [],
    compSel:[],
    compArr:["1","2"],
    insurTypeChecked:false,
    insurTypeSel:'',
    insurTypeOpt:[],
    indexChecked1:false,
    indexDateStart1:'',
    indexDateEnd1:'',
    indexChecked2:false,
    indexDateStart2:'',
    indexDateEnd2:'',
    indexChecked3:false,
    indexDateStart3:'',
    indexDateEnd3:'',
    totalCost:0,
    recordList: [{name:"lis","type":"已投保客户"}],
    orderNum:'',
    recordListIndex:0,
    totalData:100,
    currentPage:1
 }
 },
 components: {

 },
 mounted() {
     
     console.log('进入了')
 },
 methods:{
    handleInsurType(value){
        console.log(value)
    },
     handleSelectChange(value){//根据保险公司查询险种
        var companies=[];
        this.insurTypeSel="";
       // console.log("value",value)
        if(value[value.length-1]=="不区分"){
          //点击不区分时，取消其他项的勾选
          value.splice(0,value.length-1)
          //将所有公司的简称拼到companies数组中
          for(var i=0;i<this.compArr.length;i++){
            companies.push(this.compArr[i].chineseSimpleName)
          }
        }else if(value[0]=="不区分"){
            //点击保险公司时，取消“不区分”的勾选
          value.splice(0,1)
          companies=this.compSel;
        }else{
            //点击保险公司时，且之前未勾选“不区分”
          companies=this.compSel;
        }
        console.log("companies",companies)
        fetch("http://10.0.0.2:9004/insuranceTypeInfo/listSimple", {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'companies='+companies
        }).then((response) => {
          if (response.ok) {
            return response.json()
          }
        }).then((json) => {
            console.log("险种",json)
          this.insurTypeOpt=json
        }).catch((error) => {
          //console.error(error)
        })
     },
    //  yearSelectChange(value){
    //      if(value=="年期/分档"){
    //         this.subYearShow=true;
    //      }else{
    //         this.subYearShow=false;
    //      }
    //  },
    handleCompSort(){//查询保险公司
        var compUrl='';
        this.compSel=[];
        switch (this.compSort) {
            case "指定保险公司":
            compUrl="http://10.0.0.2:9004/insurCompanyBasicInfo/listAll"
            break;
            default:
            //寿险、产险公司
            compUrl="http://10.0.0.2:9004/insurCompanyBasicInfo/listByCompanyType"
            break;
        }
        //var str={companyType:this.compSort}
        fetch(compUrl, {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: "companyType="+this.compSort
        }).then((response) => {
            if (response.ok) {
            return response.json()
            }
        }).then((json) => {
            console.log("json",json)
            var arrStr=JSON.stringify(json)
            this.compArr=JSON.parse(arrStr)
            console.log("compArr",this.compArr) 
            var obj={"chineseSimpleName":"不区分"}
            json.splice(0,0,obj)//拼接json里的保险公司数组
            this.compOpt=json
             console.log(this.compOpt)
        }).catch((error) => {
            //console.error(error)
        })
     },

     handleSearch(page){//查询客户列表
        //console.log("page",page)
        var insurIds=[];
       if(!this.cNameChecked){
         this.clientName=''
       }
        if(!this.cardIdChecked){
         this.cardIdValue=''
       }
        if(!this.orderNumChecked){
         this.orderNumValue=''
       }
        if(!this.contactChecked){
         this.contactValue=''
       }
        if(!this.insurChecked){
         this.compSort=''
       }
       if(!this.insurTypeChecked){
          for (let i= 0; i < this.insurTypeOpt.length; i++) {
            insurIds.push(this.insurTypeOpt[i].insurId)
          }
       }else{
          for (let i= 0; i < this.insurTypeOpt.length; i++) {
            if(this.insurTypeOpt[i].insuranceCname==this.insurTypeSel){
             insurIds.push(this.insurTypeOpt[i].insurId)
             break;
            }
          }
       }
       if(!this.indexChecked1){
         this.indexDateStart1='';
         this.indexDateEnd1='';
       }
       if(!this.indexChecked2){
         this.indexDateStart2='';
         this.indexDateEnd2='';
       }
       if(!this.indexChecked3){
         this.indexDateStart3='';
         this.indexDateEnd3='';
       }
     var dataObj={
         "name":this.clientName,"certfId":this.cardIdValue,"telephone":this.contactValue,"policyNo":this.orderNumValue,
            "insurIds":insurIds,"checkInDateStart":this.indexDateStart1,"checkInDateEnd":this.indexDateEnd1,
            "validDateSinceStart":this.indexDateStart2,"validDateSinceEnd":this.indexDateEnd2,
            "payDateStart":this.indexDateStart3,"payDateEnd":this.indexDateEnd3,
            "orderBy":"name",'sc':"asc"
     }
      fetch('http://10.0.0.2:9004/client/list?pageNum='+page+'&pageSize=20', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(dataObj)
      }).then((response) => {
        if (response.ok) {
          return response.json()
        }
      }).then((json) => {
        console.log("查询",json)
        
          this.recordList=json.data.list;
          this.totalData=json.data.total;
           this.activeTab="listTab"
        
      }).catch((error) => {
    //    console.error(error)
      })
        
     },
     editorBtn(row){
         console.log("客户信息",row)
         this.$router.push({path:"/user/clientEditor",query:{editor:true,clientName:row.name,clientMsg:row}})
     },
     addBtn(){
         this.$router.push({path:"/user/clientEditor",query:{editor:false,clientName:''}})
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
        // this.$refs.recordTable.setCurrentRow(this.recordList[0]);
        // this.orderNum=this.recordList[0].orderNum;
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
      vm.handleCompSort();
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
        width:170px;
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
        margin-top:10px;
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
     .pageBtn{
         float: left;
        margin-top:10px;
    }
    .oprateBtn{
    //    position: fixed;;
    //    bottom:25px;
    //    right:45px;
        float: right;
        margin-top:10px;
    }
 @media screen and (max-width: 1480px) {
    .table {
    height:470px !important
    }
  }
</style>
