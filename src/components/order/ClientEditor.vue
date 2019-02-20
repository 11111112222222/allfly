<template>
 <div class="page" style="height:100%;position:relative;">
    <header>
        <div class="title">
            <span @click="goBack"><i class="el-icon-back"></i></span> 
            <span>客户添加</span>
        </div>
    </header>
    <section>
        <el-tabs type="border-card" v-model="activeTab" style="height:85%;overflow-y:auto;">
            <el-tab-pane label="基本信息" name="basicTab">
                <div class="tabContent">
                </div>
            </el-tab-pane>
            <el-tab-pane label="单位信息" name="companyTab">
                <div class="tabContent">
                </div>
            </el-tab-pane>
            <el-tab-pane label="关联保单" name="relevanceTab">
                <div class="tabContent">
                </div>
            </el-tab-pane>
            <el-tab-pane label="亲朋好友" name="friendTab">
                <div class="tabContent">
                </div>
            </el-tab-pane>
            <el-tab-pane label="相关信息" name="msgTab">
                <div class="tabContent">
                </div>
            </el-tab-pane>
        </el-tabs>
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
     activeTab:'basicTab',
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
.tabContent{
        position: relative;
        text-align: left;
        padding:0 30px;
        // height: 100%;
        // overflow: scroll;
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
    //padding:0 45px;

   .oprateBtn{
    //    position: fixed;;
    //    bottom:25px;
    //    right:45px;
        float: right;
        margin:10px 30px;
        
        #confirmBtn{
            margin-left:50px;
        }
    }  
}


</style>
