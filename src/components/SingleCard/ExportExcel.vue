<template>
  <el-dialog :visible.sync="visible" :show-close="false" width="40%" :modal="true" :close-on-click-modal="false" :close-on-press-escape="false">
    <h3 slot="title">选择需要导出的字段</h3>
    <button type="button" aria-label="Close" class="el-dialog__headerbtn" @click.stop="cancelModal"><i class="el-dialog__close el-icon el-icon-close"></i></button>
      <el-table
    :data="tableData"
    border
    class="table"
    ref="multipleTable"
    size="mini"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="需要导出的字段名称"
     >
      <template slot-scope="scope">{{ scope.row.name }}</template>
    </el-table-column>
  </el-table>
  <div class="bottomButton">
    <el-button type="primary" style="width:100px" size="mini" @click="confirmExport()">确定</el-button>
    <el-button type="primary" style="width:100px" size="mini" @click="cancelExport()">取消</el-button>
  </div>
    
  </el-dialog>
</template>
<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      },

    },
    data(){
      return {
        tableData:[{name:'序号'},{name:'保险公司'},{name:'单证号码'},{name:'单证名称'},{name:'入库日期'},
        {name:'状态'},{name:'有效期'},{name:'结存日期'},{name:'领用单位'},{name:'领用人'}],
        multipleSelection: [],
        
                       
      }
    },
    methods: {  
      cancelModal(){
        // 关闭弹窗，触发父组件修改visible值
        this.$emit('update:visible', false);
      },
      confirmExport(){
        this.$emit('selectItem', this.multipleSelection);
        this.$emit('update:visible', false);
      },
      cancelExport(){
        this.$emit('update:visible', false);
      },
      handleSelectionChange(val){
        this.multipleSelection = val;
      },
     
    }
  }
</script>
<style scoped>
  .el-dialog__wrapper /deep/ .el-dialog__body{
    padding-top:0px;
    padding-bottom:10px;
}
.bottomButton{
    padding:10px;
    text-align:center;
}
</style>