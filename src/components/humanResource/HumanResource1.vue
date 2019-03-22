<template>
<div class="page">
    <fieldset>
        <legend>业绩数据重新组织</legend>
        <div class="yeJiContent">
            <div class="contentItem">
                <span style="margin-left:24px">分支机构</span>
                <el-select
                    v-model="institute"
                    multiple
                    collapse-tags
                    style="margin-left: 16px;"
                    size="mini"
                    placeholder="请选择">
                    <el-option
                    v-for="item in instituteoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <el-radio-group v-model="jiXiaoTimeSelect">
                <div class="contentItem">
                    <el-radio :label="1">计绩月份</el-radio>
                    <el-date-picker
                    v-model="jiXiaoMonth"
                    type="date"
                    size="mini"
                    style="margin-left: 20px;"
                    placeholder="选择时间">
                    </el-date-picker>
                </div>
                <div class="contentItem">
                    <el-radio :label="2">计绩期间</el-radio>
                    <el-date-picker
                    v-model="jiXiaoRandom"
                    type="daterange"
                    size="mini"
                    style="margin-left: 20px;"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                </div>
            </el-radio-group>
        </div>
    </fieldset>
    <div class="contentbottom">
        <el-button type="primary" size="mini">重新计算</el-button>
        <el-button type="primary" size="mini">取消</el-button>
    </div>
    
</div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
   institute:'',
   instituteoptions:[{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
   jiXiaoTimeSelect:'1',
   jiXiaoMonth:'',
   jiXiaoRandom:'',
 }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
.page{
  padding: 10px 30px 0 30px;
  height:100%;
  overflow-y:scroll;
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
.contentItem{
    height:30px;
    margin-top:5px;
    line-height: 30px;
    text-align:middle;
}
.contentbottom{
    height:30px;
    margin-top:10px;
    line-height: 30px;
    text-align:middle; 
}
</style>