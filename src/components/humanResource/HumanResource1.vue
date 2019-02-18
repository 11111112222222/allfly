<template>
 <div class="page">
     人资1
     <div class="addcontent">
        <el-tabs type="border-card" v-model="activeName">
            <el-tab-pane label="基本信息" name="first">
                基本信息
            </el-tab-pane>
            <el-tab-pane label="单位职级" name="second">单位职级</el-tab-pane>
            <el-tab-pane label="文档信息" name="third">文档信息</el-tab-pane>
            <el-tab-pane label="工作经历" name="fourth">工作经历</el-tab-pane>
            <el-tab-pane label="教育经历" name="fifth">教育经历</el-tab-pane>
            <el-tab-pane label="培训经历" name="sixth">培训经历</el-tab-pane>
        </el-tabs>
    </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
   activeName:'first'
 }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
</style>