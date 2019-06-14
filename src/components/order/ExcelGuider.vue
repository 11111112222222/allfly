<template>
  <el-dialog :visible.sync="visible" :show-close="false" width="60%" :modal="true" :close-on-click-modal="false" :close-on-press-escape="false">
    <!-- <span>选择查找位置：</span> -->
    <h3>报表生成向导</h3>
    <button type="button" aria-label="Close" class="el-dialog__headerbtn" @click.stop="cancelModal"><i class="el-dialog__close el-icon el-icon-close"></i></button>

    <div class="guiderStep guiderStep1">
      <p>1、选择已存储的模板或新建模板来创建报表格式，或直接新建报表</p>
      <fieldset>
        <legend>选择模板</legend>
        <el-radio-group v-model="radio" @change='selectedRadio'> 
          <ul>
              <li><el-radio  :label="'existence'" class="elradio">利用存储的模板来创建报表</el-radio></li>
              <li><el-radio  :label="'createNew'" class="elradio">创建新的模板来创建报表</el-radio></li>
              <li><el-radio  :label="'createDetail'" class="elradio">创建明细汇总表</el-radio></li>
              <li><el-radio  :label="'createAll'" class="elradio">创建汇总表</el-radio></li>
          </ul>
        </el-radio-group> 
      </fieldset>
    </div>
    <div class="guiderStep guiderStep2">
      <p>2、选择日/周报中分类所依据的字段及所选定汇总项</p>
      <fieldset>
        <legend>选择所依据的字段</legend>
         <el-row :gutter="20">
            <el-col :span="3"><div class="title">分类字段</div></el-col>
            <el-col :span="12">
                <el-select
                    v-model="classifyItem"
                    size="mini"
                    style="width:250px"
                    placeholder="请选择">
                    <el-option
                    v-for="item in classifyOpt"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            </el-row>
            <el-row :gutter="20">
            <el-col :span="3"><div class="title">汇总方式</div></el-col>
            <el-col :span="12">
                <el-select
                    v-model="methods"
                    size="mini"
                    style="width:250px"
                    placeholder="请选择">
                    <el-option
                    v-for="item in methodsOpt"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            </el-row>
            <el-row :gutter="20">
            <el-col :span="3"><div class="title">选定汇总项</div></el-col>
            <el-col :span="12">
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <div class="checkedClassify">
                  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in cities" :label="city" :key="city" class="items">{{city}}</el-checkbox>
                  </el-checkbox-group>
                </div>
               
            </el-col>
            </el-row>
      </fieldset>
    </div>
    <div class="guiderStep guiderStep3">
      <p>3、选择报表要显示的字段</p>
       <fieldset>
        <legend>选择字段</legend>
        <el-checkbox-group v-model="checkList">
        <el-checkbox label="员工编号" class="items"></el-checkbox>
        <el-checkbox label="员工姓名" class="items"></el-checkbox>
        <el-checkbox label="职级" class="items"></el-checkbox>
        <el-checkbox label="职级状态" class="items"></el-checkbox>
      </el-checkbox-group>
      </fieldset>
    </div>
    <div class="guiderStep4">
       <el-button type="primary" size="mini" @click="confirmSelsect">确定</el-button>
       <el-button type="primary" size="mini" @click="cancelselect">取消</el-button>
    </div>
</el-dialog>
</template>
<script>
  const cityOptions = ['核发首/续年佣金规模保费', '内部标准保费折标规模保费', 'CFYC规模保费', '继续率换算系数规模保费','综合规模保费','核发首/续年佣金','内部标准保费折标'];
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      },

    },
    data(){
      return {
        radio:'createAll',
        classifyItem:'承揽人',
        classifyOpt:[{value: '承揽人',}, { value: '光大永明（寿）', label: '光大永明（寿）'}],
        methods:'求和',
        methodsOpt:[{value: '求和',}, { value: '光大永明（寿）', label: '光大永明（寿）'}],
        checkAll: false,
        checkedCities: [],
        cities: cityOptions,
        isIndeterminate: true,
        checkList:['员工编号','员工姓名','职级','职级状态'],
      }
    },
    methods: {  
      cancelModal(){
        // 关闭弹窗，触发父组件修改visible值
        this.$emit('update:visible', false);
      },
      selectedRadio(){

      },
      confirmSelsect(){
        this.$emit('update:visible', false);
        //将表格中的数据选中，将找到的对应的人的信息获取
      },
      cancelselect(){
        this.$emit('update:visible', false);
      },
       handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  }
</script>
<style scoped >
  .el-dialog__wrapper /deep/ .el-dialog__body{
    padding-top:0px;
    padding-bottom:10px;
}
.guiderStep{
 margin:10px;
}
fieldset {
    padding: .35em .625em .75em;
    margin: 0 2px;
    border: 1px solid #ebeef5;
}
legend {
    padding: .5em;
    border: 0;
    width: auto;
}
.elradio{
  height:28px;
  line-height:28px;
}
.title{
    text-align:right;
}
 .el-row {
    margin-bottom: 10px;
  }
.checkedClassify{
  height: 150px;
  overflow:auto;
  width:100%;
  border: 1px solid #ebeef5;
  padding:5px;
} 
.items{
  display:block;
}
.el-checkbox+.el-checkbox {
     margin-left: 0px;
}
.guiderStep1{

}
.guiderStep2{
  
}
.guiderStep3{
  
}
.guiderStep4{
  text-align:right;
}
</style>