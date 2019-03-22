<template>
  <div class="pages">
    <header>
        <span @click="goBack"><i class="el-icon-back"></i></span> 
        <span>单证入库</span>
     </header>
     <div class="container">
        <p>单证入库作业，请在*标识后填入入库单证后的内容，可进行批量管理</p> 
         <form action="">
             <el-row :gutter="20">
            <el-col :span="6"><div class="title">保险公司</div></el-col>
            <el-col :span="12">
                <span>*</span>
                <el-select  v-model="addForm.companySel" size="mini"  style="width:250px" placeholder="请选择">  
                    <el-option
                    v-for="item in companyOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            </el-row> 
             <el-row :gutter="20">
            <el-col :span="6"><div class="title">保单/单证号码</div></el-col>
            <el-col :span="12">
                <span>*</span>
                <el-input
                size="mini"
                style="width:200px;"
                placeholder="请输入保单/单证号码"
                v-model="addForm.cardNum1"
                clearable>
                </el-input>
                至
                <el-input
                size="mini"
                style="width:200px;"
                placeholder="请输入保单/单证号码"
                v-model="addForm.cardNum2"
                clearable>
                </el-input>
            </el-col>
            </el-row>
             <el-row :gutter="20">
            <el-col :span="6"><div class="title">单证名称</div></el-col>
            <el-col :span="12">
                <span>*</span>
                <el-input
                size="mini"
                style="width:200px;"
                placeholder=""
                v-model="addForm.cardName1"
                clearable>
                </el-input>
                至
                <el-input
                size="mini"
                style="width:200px;"
                placeholder=""
                v-model="addForm.cardName2"
                clearable>
                </el-input>
            </el-col>
            </el-row>
            <el-row :gutter="20">
            <el-col :span="6"><div class="title">可以使用到的期间</div></el-col>
            <el-col :span="12">
                <span>*</span>
               <el-date-picker
               size="mini"
                v-model="addForm.startTime"
                type="date"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
               </el-date-picker>
               至
                <el-date-picker
                size="mini"
                v-model="addForm.endTime"
                type="date"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
               </el-date-picker>
            </el-col>
            </el-row>
            <el-row :gutter="20">
            <el-col :span="6"><div class="title">存放单证库/分支单位</div></el-col>
            <el-col :span="12">
                <span>*</span>
                <el-select  v-model="addForm.danWeiSel" size="mini"  style="width:250px" placeholder="请选择">  
                    <el-option
                    v-for="item in danWeiOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            </el-row>
            <el-row :gutter="20">
            <el-col :span="6"><div class="title">入库说明</div></el-col>
            <el-col :span="12">
                <span>*</span>
                <el-input type="textarea" v-model="addForm.detail" style="width:500px;"></el-input>
            </el-col>
            </el-row>
             <el-row :gutter="20">
            <el-col :span="6"><div class="title">&nbsp;</div></el-col>
            <el-col :span="12">
                <span>&nbsp;</span>
                <el-button type="primary" size="mini" @click="allImport()">批量入库</el-button>
                <el-button type="primary" size="mini">取消</el-button>
            </el-col>
            </el-row>  
         </form>
         <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <div>单证已经入库，可回到查看列表中查看新入库的单证</div>
            <span slot="footer" class="dialog-footer">
                <!-- <el-button @click="cancelAdd()">取 消</el-button> -->
                <el-button type="primary" size="mini" @click="confirmAdd()">确 定</el-button>
            </span>
            </el-dialog>
     </div>
  </div>
</template>

<script>
export default {
  name: "addSingleCard",
  data(){
      return {
        
        companyOptions:[{
            value: '工银安盛（寿）',
            label: '工银安盛（寿）'
            }],
        addForm:{companySel:'工银安盛（寿）',
        cardNum1:'',cardNum2:'',
        cardName1:'',cardName2:'', 
        startTime:'',endTime:'', danWeiSel:'安徽分公司',
        detail:'' },
        danWeiOptions:[{
            value: '安徽分公司',
            label: '安徽分公司'
            }],
        
        
        dialogVisible:false,
     }
  },
   components: {

 },
  methods: {
      goBack(){
          history.go(-1);
      },
      allImport(){
        this.dialogVisible=true;
      },
      handleClose() {
        this.dialogVisible=false;
      },
      cancelAdd(){
        this.dialogVisible=false;
      },
      confirmAdd(){
        this.dialogVisible=false;
        console.log('this.addForm',this.addForm)
        //保存新增数据，将新增数据填写到新增列表中，进行后台交互
        this.$router.push({ path: '/user/enterRepertory',query:{newAddData:this.addForm}});
      }
   }
  
};
</script>

<style scoped lang="scss">
.page{
    box-sizing:border-box;
    height:100%;
    width:100%;
}
header{
    box-sizing:border-box;
    width:100%;
    background-color:#dddefe;
}
header span:first-child{
    height: 30px;
    line-height: 30px;
    margin-left:5px;
}
.container{
    box-sizing:border-box;
    width:100%;
    overflow-x: hidden;
}
.container p{
    height: 30px;
    line-height: 30px;
    color:#ccc;
    margin-left:30px;
    margin-bottom:20px;
}
.container span {
    display:inline-block;
    color:red;
    height: 30px;
    line-height: 30px;
    vertical-align: top;
}
.title{
    text-align:right;
}
.el-row {
    box-sizing:border-box;
    margin-bottom: 10px;
    &:last-child {
      margin-top:10px;
      margin-bottom: 0;
    }
  }
</style>