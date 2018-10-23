<template>
 <div class="page" style="height:100%">
    <el-tabs type="border-card" style="height:100%">
        <el-tab-pane label="查询">
            <div class="search">
                <div>
                    <div class="title">分支机构</div>
                    <div class="content">
                        <el-checkbox v-model="branchChecked" disabled></el-checkbox>    
                        <el-select
                            size="mini"
                            v-model="branchSelected"
                            multiple
                            collapse-tags
                            @change="handleSelectChange">
                            <el-option
                            v-for="item in branchOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div>
                    <div class="title">保险公司</div>
                    <div class="content">
                        <el-checkbox v-model="insurChecked"></el-checkbox> 
                        <el-select
                            size="mini"
                            v-model="compSort">
                            <el-option
                            v-for="item in sortOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select
                            size="mini"
                            v-model="compSelected"
                            multiple
                            collapse-tags
                            @change="handleSelectChange">
                            <el-option
                            v-for="item in compOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div>
                    <div class="title">计绩月份</div>
                    <div class="content">
                        <el-checkbox v-model="scoreChecked" ></el-checkbox>    
                        <el-date-picker v-model="scoreStart" type="month" size="mini" placeholder="选择月"> </el-date-picker>
                        &nbsp;&nbsp;至&nbsp;&nbsp;
                        <el-date-picker v-model="scoreEnd" type="month" size="mini" placeholder="选择月"></el-date-picker>
                    </div>
                </div>
                <div>
                    <div class="title">保单号码/投被保人</div>
                    <div class="content">
                        <el-checkbox v-model="orderNumChecked"></el-checkbox> 
                        <el-select
                            size="mini"
                            v-model="orderSort">
                            <el-option
                            v-for="item in orderOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input v-model="numInput" size="mini" placeholder="请输入号码" style="width:200px"></el-input>
                    </div>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="列表">列表</el-tab-pane>
    </el-tabs>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
    branchChecked:true,
    branchOpt: [{
          value: '不区分',
        }, {
          value: '选项2',
        }, {
          value: '选项3',
        }, {
          value: '选项4',
        }, {
          value: '选项5',
        }],
    branchSelected: ["不区分"],
    insurChecked:false,
    sortOpt:[
       {
          value: '指定保险公司',
        }, {
          value: '所有寿险公司',
        }, {
          value: '所有产险公司',
        } 
    ],
    compSort:'指定保险公司',
    compOpt: [{
          value: '不区分',
        }, {
          value: '选项2',
        }, {
          value: '选项3',
        }, {
          value: '选项4',
        }, {
          value: '选项5',
        }],
    compSelected:["不区分"],
    scoreChecked:false,
    scoreStart:'',
    scoreEnd:'',
    orderNumChecked:false,
    orderSort:'保单号码',
    orderOpt:[
       {
          value: '保单号码',
        }, {
          value: '相关其他号码',
        }, {
          value: '投保人姓名',
        }, {
          value: '投保人证件代码',
        }, {
          value: '被保人姓名',
        }, {
          value: '被保人证件代码',
        } 
    ],
    numInput:""
 }
 },
 components: {

 },
 methods:{
     handleSelectChange(value){
         if(value[value.length-1]=="不区分"){
            value.splice(0,value.length-1)
         }else if(value.indexOf("不区分")!=-1){
            value.splice(value.indexOf("不区分"),1)
         }
     }
 }
}
</script>

<style scoped lang="scss">
    .search{
        text-align: left;
    }
    .title{
        display: inline-block;
        width:150px;
        text-align: right;
        padding:10px;
    }
    .content{
        display: inline-block;
       
    }
</style>
