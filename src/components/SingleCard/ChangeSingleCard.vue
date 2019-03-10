<template>
  <div class="pages">
    <header>
        <span @click="goBack"><i class="el-icon-back"></i></span> 
        <span>交接入库</span>
     </header>
     <div class="container">
        <p>交接单明细，可以编辑上传交接单据</p> 
         <form action="">
            <el-row :gutter="20">
            <el-col :span="6"><div class="title">流向</div></el-col>
            <el-col :span="12">
                <el-select  v-model="addForm.toWhereSel" size="mini"  style="width:250px" placeholder="请选择">  
                    <el-option
                    v-for="item in toWhereOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            </el-row> 
             <el-row :gutter="20">
            <el-col :span="6"><div class="title">发生期间</div></el-col>
            <el-col :span="12">
                <el-date-picker
                style="width:250px"
                size="mini"
                v-model="addForm.time"
                type="date"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
               </el-date-picker>    
            </el-col>
            </el-row>
            <el-row :gutter="20">
            <el-col :span="6"><div class="title">来源单证库/分支单位</div></el-col>
            <el-col :span="12">
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
            <el-col :span="6"><div class="title">&nbsp;</div></el-col>
            <el-col :span="12">
                <el-input
                size="mini"
                style="width:250px"
                placeholder="请输入"
                v-model="addForm.danWeiInput"
                clearable>
                </el-input>
            </el-col>
            </el-row>
            <el-row :gutter="20">
            <el-col :span="6"><div class="title">接受单位-接受人</div></el-col>
            <el-col :span="12">
                <el-select  v-model="addForm.acceptPersonSel" size="mini"  style="width:250px" placeholder="请选择">  
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
            <el-col :span="6"><div class="title">&nbsp;</div></el-col>
            <el-col :span="12">
                <el-input
                size="mini"
                style="width:250px"
                placeholder="请输入"
                v-model="addForm.acceptPerson"
                clearable>
                </el-input>
            </el-col>
            </el-row>
            <el-row :gutter="20">
            <el-col :span="6"><div class="title">单证明细</div></el-col>
            <el-col :span="12">
              <el-button  size="mini" type="success" @click="dialogVisible1=true">添加单证</el-button>
              <el-button  size="mini"type="success" @click="dialogVisible2=true">添加图片</el-button>
            </el-col>
            </el-row>
            <el-row :gutter="20">
            <el-col :span="15" :offset="3">
                <el-table
                    size="mini"
                    :data="recordList1"
                    border
                    style="width: 100%"
                    height="250"
                    max-height="550">
                     <el-table-column v-for="item in tableHead1" :key="item.property" :label="item.label" :property="item.property" :fixed="item.fixed" :width="item.width">
                        <template slot-scope="scope">
                            <div v-if="item.oper">
                                 <!-- <el-button v-for="(o, key) in item.oper" :key="key" @click="o.clickFun(scope.row)" type="text" size="small">{{o.name}}</el-button>  -->
                                 <!-- <el-button @click="deleteClick(scope.row)" type="danger" size="small">删除</el-button> -->
                                <el-button  type="primary" size="small" @click="editInformation(scope.row.name)">查看/编辑</el-button> 
                            </div>
                            <div v-else>
                                {{ scope.row[item.property]}}
                            </div>
                
                        </template>
                    </el-table-column>   
                </el-table> 
            </el-col> 
            </el-row>
             <el-row :gutter="20">
            <el-col :span="6"><div class="title">&nbsp;</div></el-col>
            <el-col :span="12">
               <el-button type="primary" size="mini" @click="confirmSubmit()">确 定</el-button>
               <el-button type="primary" size="mini" @click="cancelSubmit()">取 消</el-button> 
               <el-button type="primary" size="mini" @click="applySubmit()">应用</el-button> 
            </el-col>
            </el-row>  
         </form>
          <el-dialog
            title="单证明细添加"
            :visible.sync="dialogVisible1"
            width="50%"
            :before-close="handleClose1">
            <el-row :gutter="20">
            <el-col :span="6"><div class="title">保险公司</div></el-col>
            <el-col :span="12">
                <el-select  v-model="dialog1Form.company" size="mini"  style="width:250px" placeholder="请选择">  
                    <el-option
                    v-for="item in companyOpts"
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
                 <el-input
                size="mini"
                style="width:150px"
                placeholder="请输入"
                v-model="dialog1Form.cardNumber1"
                clearable>
                </el-input>
                 <el-input
                size="mini"
                style="width:150px"
                placeholder="请输入"
                v-model="dialog1Form.cardNumber2"
                clearable>
                </el-input>
            </el-col>
            </el-row> 
            <el-row :gutter="20">
            <el-col :span="6"><div class="title">&nbsp;</div></el-col>
            <el-col :span="12">
                <el-button type="primary" size="mini" @click="search()">查询</el-button>
            </el-col>
            </el-row> 
            <el-row :gutter="20">
            <el-col :span="20" :offset="2">
                <el-table
                    size="mini"
                    :data="recordList1"
                    border
                    style="width: 100%"
                    height="250"
                    max-height="550">
                     <el-table-column v-for="item in tableHead1" :key="item.property" :label="item.label" :property="item.property" :fixed="item.fixed" :width="item.width">
                        <template slot-scope="scope">
                            <div v-if="item.oper">
                                 <!-- <el-button v-for="(o, key) in item.oper" :key="key" @click="o.clickFun(scope.row)" type="text" size="small">{{o.name}}</el-button>  -->
                                 <!-- <el-button @click="deleteClick(scope.row)" type="danger" size="small">删除</el-button> -->
                                <!-- <el-button  type="primary" size="small" @click="editInformation(scope.row.name)">查看/编辑</el-button>  -->
                            </div>
                            <div v-else>
                                {{ scope.row[item.property]}}
                            </div>
                
                        </template>
                    </el-table-column>   
                </el-table> 
            </el-col> 
            </el-row>
            <span slot="footer" class="dialog-footer">   
                <el-button type="primary" size="mini" @click="allAdd()">全部添加</el-button>
                <el-button type="primary" size="mini" @click="cancelAdd()">取 消</el-button>
            </span>
            </el-dialog> 
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible2"
            width="50%"
            :before-close="handleClose2">
            <div>添加单证附件文档，文档大小限制在2048KB以下的JPG/PNG/Gif/BMP/TIF格式，或者Word文档、Excel文档，PDF文档，或者WaV影音文件！</div>
            <el-form ref="imgForm" :model="imgForm" label-width="100px">
            <el-form-item label="影像文档">
                    <!-- <el-input type="text" size="mini" v-model="tab3Form.mediaDoc" style="width:50%"></el-input> -->
                     <!-- <el-input type="input" size="mini" ></el-input>  -->
                    <input type="file" name="file"/>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" size="mini" v-model="imgForm.detail"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">  
                <el-button type="primary" size="mini" @click="imgAdd()">添加</el-button>
                <el-button type="primary" size="mini" @click="cancelImgAdd()">取 消</el-button> 
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
        toWhereOptions:[{
            value: '领用',
            label: '领用'
            }],
        addForm:{toWhereSel:'领用',danWeiInput:'',acceptPersonSel:'安徽分公司', 
        acceptPerson:'',time:'', danWeiSel:'安徽分公司', detail:'' },

        danWeiOptions:[{
            value: '安徽分公司',
            label: '安徽分公司'
            }],
        tableHead1:[
            {label:'序号',property:'index',width:''},
            {label:'保险公司',property:'company',width:''},
            {label:'单证号起',property:'numberStart',width:''},
            {label:'单证号止',property:'numberEnd',width:''},
            {label:'数量',property:'number',width:''},
            ],
    recordList1: [],
        // {
        //   index: '1',
        //   company: '233333',
        //   numberStart: '上海',
        //   numberEnd: '2016-05-03',
        //   number: '普陀区', 
        // }
        dialogVisible1:false,
        dialogVisible2:false,
        dialog1Form:{company:'',cardNumber1:'',cardNumber2:''},
        companyOpts:[{
            value: '工银安盛（寿）',
            label: '工银安盛（寿）'
            }],
        imgForm:{file:'',detail:''},
     }
  },
   components: {

 },
  methods: {
      goBack(){
          history.go(-1);
      },
      handleClose1(){
          this.dialogVisible1=false;
      },
      handleClose2(){
          this.dialogVisible2=false;
      },
      confirmSubmit(){
        console.log('this.addForm',this.addForm)
        //保存新增数据，将新增数据填写到新增列表中，进行后台交互
        this.$router.push({ path: '/user/outRepertory',query:{newAddData:this.addForm}});
      },
      cancelSubmit(){
        //取消的操作
      },
      applySubmit(){
        //应用的操作
      },

      search(){
        //单证信息查询
      },
      allAdd(){
          //单证添加的内容 添加dialog1Form的信息
      },
      cancelAdd(){
          //单证取消添加的内容
      },
      imgAdd(){
          //单证图片添加,应该是要向后台发送图片信息imgForm:{file:'',detail:''},
          this.dialogVisible2=false;
      },
      cancelImgAdd(){
          //取消图片添加
          this.dialogVisible2=false;
    
      },
      
   }
  
};
</script>

<style scoped lang="scss">
.pages{
    box-sizing:border-box;
    height:100%;
    width:100%;
    overflow-y:scroll;
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
    margin-bottom:10px;
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
.el-dialog__wrapper /deep/ .el-dialog__body{
    padding-top:0px;
    padding-bottom:10px;
}
.el-row {
    box-sizing:border-box;
    margin-bottom: 5px;
    &:last-child {
      margin-top:5px;
      margin-bottom: 0;
    }
  }
</style>