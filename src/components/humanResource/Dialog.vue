<template>
  <el-dialog
    :visible.sync="visible"
    :show-close="false"
    width="70%"
    :modal="true"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <h3 slot="title">员工信息新增</h3>
    <button type="button" aria-label="Close" class="el-dialog__headerbtn" @click.stop="cancelModal">
        <i class="el-dialog__close el-icon el-icon-close"></i>
    </button>
    <div class="addcontent">
        <el-tabs type="border-card" v-model="activeName">
            <el-tab-pane label="基本信息" name="first">
                <el-row :gutter="6">
                    <el-col :span="4">
                        <el-card shadow="never">
                        总是显示
                        </el-card>
                    </el-col>
                    <el-col :span="19">
                         <table class="table1">
                             <tr>
                                 <td>中文姓名</td>
                                 <td><el-input size="mini" placeholder="请输入内容"></el-input></td>
                                 <td>英文姓名</td>
                                 <td><el-input size="mini" placeholder="请输入内容"></el-input></td>
                                 <td>性别</td>
                                 <td>
                                     <el-select v-model="sexValue" placeholder="请选择" size="mini">
                                        <el-option
                                        v-for="item in sexOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                             </tr>
                             <tr>
                                 <td>身份证件</td>
                                 <td colspan="3">
                                    <el-select v-model="sexValue" placeholder="请选择" size="mini" style="width:40%;display:inline-block">
                                        <el-option
                                        v-for="item in sexOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        >
                                        </el-option>
                                    </el-select>
                                    <el-input style="width:55%;" size="mini" placeholder="请输入内容"></el-input>
                                 </td>
                                 <td>出生日期</td>
                                 <td>
                                     <el-date-picker
                                        size="mini"
                                        v-model="birthdaytime"
                                        type="date"
                                        placeholder="选择日期">
                                     </el-date-picker>
                                 </td>
                             </tr>
                             <tr>
                                 <td>员工编号</td>
                                 <td colspan="3">
                                     <el-input style="width:100%;" size="mini" placeholder="请输入内容"></el-input>
                                 </td>
                                 <td>婚姻</td>
                                 <td>
                                     <el-select v-model="sexValue" placeholder="请选择" size="mini" style="width:100px;display:inline-block">
                                        <el-option
                                        v-for="item in sexOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        >
                                        </el-option>
                                    </el-select>
                                </td>
                             </tr>
                             <tr>
                                 <td>文化程度</td>
                                 <td>
                                     <el-select v-model="sexValue" placeholder="请选择" size="mini" >
                                        <el-option
                                        v-for="item in sexOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        >
                                        </el-option>
                                    </el-select>
                                </td>
                                 <td>名族</td>
                                 <td>
                                    <el-select v-model="sexValue" placeholder="请选择" size="mini" >
                                        <el-option
                                        v-for="item in sexOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        >
                                        </el-option>
                                    </el-select>
                                 </td>
                                 <td>血型</td>
                                 <td>
                                     <el-select v-model="sexValue" placeholder="请选择" size="mini" >
                                        <el-option
                                        v-for="item in sexOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        >
                                        </el-option>
                                    </el-select>
                                 </td>
                             </tr>
                             <tr>
                                 <td>联系地址</td>
                                 <td colspan="3"><el-input style="width:100%;" size="mini" placeholder="请输入内容"></el-input></td>
                                 <td>邮编</td>
                                 <td><el-input style="width:100%;" size="mini" placeholder="请输入内容"></el-input></td>
                             </tr>
                              <tr>
                                 <td>联系电话</td>
                                 <td colspan="3"><el-input style="width:100%;" size="mini" placeholder="请输入内容"></el-input></td>
                                 <td>邮箱</td>
                                 <td><el-input style="width:100%;" size="mini" placeholder="请输入内容"></el-input></td>
                             </tr>
                              <tr>
                                 <td>备注说明</td>
                                 <td colspan="5"><el-input style="width:100%;" size="mini" placeholder="请输入内容"></el-input></td>

                             </tr>
                              <tr>
                                 <td>其他</td>
                                 <td colspan="5"></td>

                             </tr>
                         </table>
                    </el-col>
                </el-row>
        <el-row :gutter="20">
        <el-col :span="18">
            <div>
                <span style="width:60%;">目前职级</span>
                <span><el-input style="width:50%;" size="mini" placeholder="请输入内容"></el-input></span>
                <span><el-button type="success" size="mini">信息上锁</el-button></span>
            </div>
        </el-col>
        <el-col :span="6">
            <el-button type="success" size="mini">创建</el-button>
            <el-button type="success" size="mini">更新</el-button>
        </el-col>
        </el-row>
       
       
               
                  
               
                
            </el-tab-pane>
            <el-tab-pane label="单位职级" name="second">单位职级</el-tab-pane>
            <el-tab-pane label="文档信息" name="third">文档信息</el-tab-pane>
            <el-tab-pane label="工作经历" name="fourth">工作经历</el-tab-pane>
            <el-tab-pane label="教育经历" name="fifth">教育经历</el-tab-pane>
            <el-tab-pane label="培训经历" name="sixth">培训经历</el-tab-pane>
        </el-tabs>
         <el-row :gutter="20">
        <el-col :span="12">
            <el-button type="primary" size="mini" style="width:100px;">确定</el-button>
            <el-button type="primary" size="mini" style="width:100px;">取消</el-button>
            <el-button type="primary" size="mini" style="width:100px;">应用</el-button>
        </el-col>
        </el-row>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
     activeName:'first',
     sexValue:'',
     sexOptions:[{
          value: '男',
          label: '男'
        }, {
          value: '女',
          label: '女'
        }],
    birthdaytime:'',
    informationLock:'',
    };
  },
  methods: {
    cancelModal() {
      // 关闭弹窗，触发父组件修改visible值
      this.$emit("update:visible", false);
    }
  }
};
</script>
<style scoped lang="scss">
.addcontent{
    width:100%;
    height:450px;
}
.bigtabs .addcontent /deep/ .el-tabs__content{
    overflow: hidden;
    position: relative !important;
    top:0px;
    height:330px;
}
.el-dialog__wrapper /deep/ .el-dialog__body{
    padding-top:0px;
    padding-bottom:10px;
}
.addcontent .table1{
    border:1px solid #dcdfe6;
    width:100%;

}
.addcontent .table1 td{
    border:1px solid #dcdfe6;
    border-collapse: collapse;
    height:32px;
    // width:10%;
    
}
.addcontent .table1 td:first-child,.addcontent .table1 td:nth-child(3),.addcontent .table1 td:nth-child(5){
   background-color:#f5f7fa;
   width:70px;
   text-align: center;
}
.addcontent .table1 td:nth-child(2),.addcontent .table1 td:nth-child(4),.addcontent .table1 td:nth-child(6){
   width:150px;
   padding-left:3px;
   padding-right:3px;
}
.bottomContent{
    display:flex;
    align-items:baseline;
}
.el-row {
    margin-bottom: 10px;
    &:last-child {
      margin-top:10px;
      margin-bottom: 0;
    }
  }
</style>