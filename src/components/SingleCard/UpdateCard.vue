<template>
<div class="page">
    <el-tabs type="border-card">
    <el-tab-pane label="单证状态更新">    
        <div class="yeJiContent">
            <el-row :gutter="20">
            <el-col :span="6"><div class="title">更新记录</div></el-col>
            <el-col :span="12">
                <div class="updateRecord">{{updateRecord}}</div>
            </el-col>
            </el-row>
            <el-row :gutter="20">
            <el-col :span="6"><div class="title">需更新的保险公司</div></el-col>
            <el-col :span="12">
                <el-select
                    v-model="companySel"
                    size="mini"
                    style="width:250px"
                    placeholder="请选择">
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
            <el-col :span="6"><div class="title">计绩月份</div></el-col>
            <el-col :span="12">
                <el-date-picker
                v-model="jiXiaoMonth"
                style="width:250px"
                type="date"
                size="mini"
                placeholder="选择时间">
                </el-date-picker>
            </el-col>
            </el-row>
            <el-row :gutter="20">
            <el-col :span="6"><div class="title bottom">&nbsp;</div></el-col>
            <el-col :span="12">
                <el-button type="primary" size="mini">更新</el-button>
                <el-button type="primary" size="mini">取消</el-button>
            </el-col>
            </el-row>
           
        </div>
       
    </el-tab-pane>
    <el-tab-pane label="单证核拥结存">
         <div class="yeJiContent">
            <el-row :gutter="20">
            <el-col :span="6"><div class="title">结存记录</div></el-col>
            <el-col :span="12">
                <div class="updateRecord">{{jiechunRecord}}</div>
            </el-col>
            </el-row>
            <el-row :gutter="20">
            <el-col :span="6"><div class="title">要结存的保险公司</div></el-col>
            <el-col :span="12">
                <el-select
                    v-model="companySel"
                    size="mini"
                    style="width:250px"
                    placeholder="请选择">
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
            <el-col :span="6"><div class="title">计绩月份</div></el-col>
            <el-col :span="12">
                <el-date-picker
                v-model="jiXiaoMonth"
                style="width:250px"
                type="date"
                size="mini"
                placeholder="选择时间">
                </el-date-picker>
            </el-col>
            </el-row>
            <el-row :gutter="20">
            <el-col :span="6"><div class="title">结存条件</div></el-col>
            <el-col :span="12">
                <el-select
                    v-model="jiecunContional"
                    size="mini"
                    style="width:250px"
                    placeholder="请选择">
                    <el-option
                    v-for="item in jiecunOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            </el-row>
            <el-row :gutter="20">
            <el-col :span="6"><div class="title bottom">&nbsp;</div></el-col>
            <el-col :span="12">
                <el-button type="primary" size="mini">更新</el-button>
                <el-button type="primary" size="mini">取消</el-button>
            </el-col>
            </el-row>
           
        </div>
    </el-tab-pane>
           
    </el-tabs>
    
    
</div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
   updateRecord:'最近一次数据是由support执行成功',
   companySel:'工银安盛（寿）',
   companyOptions:[{
          value: '工银安盛（寿）',
          label: '工银安盛（寿）'
        }, {
          value: '光大永明（寿）',
          label: '光大永明（寿）'
        }],
   jiXiaoMonth:'',

   jiechunRecord:'最近一次数据是由support 在2018-3-03 执行成功',
   jiecunMonth:'',
   jiecunContional:'仅对已合拥的单证',
   jiecunOption:[{
          value: '仅对已合拥的单证',
          label: '仅对已合拥的单证'
        }],
 }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
.page{
//   padding: 10px 30px 0 30px;
  height:100%;
  overflow-y:scroll;
//   min-height:500px;
}
.title{
    text-align:right;
}
.el-row {
    margin-bottom: 10px;
    &:last-child {
      margin-top:20px;
      margin-bottom: 0;
    }
  }
.updateRecord{
    color:red;
}
.yeJiContent{
    min-height:calc(100vh - 150px);
}
</style>