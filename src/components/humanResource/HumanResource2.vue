<template>
 <div class="page" style="height:100%">
    <el-tabs type="border-card" v-model="activeTab" style="height:100%" class="bigtabs">
        <el-tab-pane label="动态查询" name="searchTab" class="smalltabs">
            <div class="tabContent">
                <div class="tabSecondContent">
                    <div class="title">查核形态</div>
                    <div class="content">
                        <el-select v-model="selectStatus" placeholder="请选择" size="mini" style="margin-left:5px">
                            <el-option
                            v-for="item in statusOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="tabSecondContent">
                    <div class="title">基础月份</div>
                    <div class="content content1">
                        <div class="content11">
                            <el-date-picker
                            v-model="selectMonth"
                            size="mini"
                            type="date"
                            placeholder="选择日期">
                          </el-date-picker> 
                        </div>
                        <div class="content11">
                        <el-checkbox v-model="zhiJiChecked">职级多选</el-checkbox> 
                          <el-select
                            v-model="zhiJiValue"
                            multiple
                            collapse-tags
                            style="margin-left: 16px;"
                            size="mini"
                            placeholder="请选择">
                            <el-option
                            v-for="item in zhiJiOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        </div>    
                    </div>
                </div>
                <div class="tabSecondContent">
                    <div class="title">查核职级</div>
                    <div class="content content1">
                        <div class="content11">
                            <el-select v-model="selectBranch" placeholder="请选择分支机构" size="mini" style="width:100%">
                            <el-option
                            v-for="item in BranchOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                           </el-select>
                        </div>
                        <div class="content11">
                          <el-select v-model="selectBuMen" placeholder="请选择部门" size="mini" style="width:100%">
                            <el-option
                            v-for="item in buMenOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                          </el-select>
                        </div>  
                        <div class="content11">
                          <el-select v-model="selectZJ" placeholder="请选择职级" size="mini" style="width:100%">
                            <el-option
                            v-for="item in ZJOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                          </el-select>
                        </div>   
                    </div>
                </div>
                <div class="tabSecondContent">
                    <div class="title tabletitle">查核标准</div>
                    <div class="content tableContent">
                    
                       <el-table
                            size="mini"
                            :data="recordList1"
                            border
                            style="width: 100%"
                            max-height="550">
                            <el-table-column
                            type="selection"
                            width="55">
                            </el-table-column>
                            <el-table-column
                            type="index"
                            width="50">
                            </el-table-column>
                            <el-table-column  label="姓名"  width="180">
                            <template slot-scope="scope">
                                  <el-select v-model="recordList1[scope.$index].name" placeholder="请选择" size="mini" @change="selectIndex(recordList1[scope.$index],scope.$index)">
                                    <el-option
                                    v-for="item in recordList1Options.name"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </template>
                            </el-table-column>
                            <el-table-column  label="范畴" width="180">
                            <template slot-scope="scope">
                                  <el-select v-model="recordList1[scope.$index].random" placeholder="请选择" size="mini" @change="selectIndex(recordList1[scope.$index],scope.$index)">
                                    <el-option
                                    v-for="item in recordList1Options.random"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </template>
  
                            </el-table-column>
                            <el-table-column  label="对象职级" width="180">
                            <template slot-scope="scope">
                                  <el-select v-model="recordList1[scope.$index].rank" placeholder="请选择" size="mini" @change="selectIndex(recordList1[scope.$index],scope.$index)">
                                    <el-option
                                    v-for="item in recordList1Options.rank"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </template>
                            
                           
                            </el-table-column>
                            <el-table-column  label="期间" width="180">
                            <template slot-scope="scope">
                                  <el-select v-model="recordList1[scope.$index].duringTime" placeholder="请选择" size="mini" @change="selectIndex(recordList1[scope.$index],scope.$index)">
                                    <el-option
                                    v-for="item in recordList1Options.duringTime"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </template>
                            
                            
                            </el-table-column>
                            <el-table-column  label="条件" width="180">
                            <template slot-scope="scope">
                                  <el-select v-model="recordList1[scope.$index].contional" placeholder="请选择" size="mini" @change="selectIndex(recordList1[scope.$index],scope.$index)">
                                    <el-option
                                    v-for="item in recordList1Options.contional"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </template>
                            
                            
                            </el-table-column>
                            <el-table-column  label="标准值" width="180">
                            <template slot-scope="scope">
                                  <el-select v-model="recordList1[scope.$index].standerValue" placeholder="请选择" size="mini" @change="selectIndex(recordList1[scope.$index],scope.$index)">
                                    <el-option
                                    v-for="item in recordList1Options.standerValue"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </template>
                            
                            
                            </el-table-column>
                            <!-- <el-table-column v-for="item in tableHead1" :key="item.property" :label="item.label" :property="item.property" :options="item.options" :width="item.width">
                            <template slot-scope="scope">
                                  <el-input  v-model="scope.row[scope.column.property]" ></el-input>  
                                  <el-select v-model="scope.row[scope.column.property]" placeholder="请选择" size="mini" @change="selectIndex(scope.row[scope.column.property],scope.row)">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </template> 
                              </el-table-column>    -->
                        </el-table>
                    </div>
                </div>
                <div class="tabSecondContent">
                    <div class="title tabletitle"></div>
                    <div class="content tableContent">
                       <div class="oprateBtn">
                        <el-button type="primary" size="mini">移除选中项</el-button>
                        <el-button type="primary" size="mini" @click="handleToggleTab">查询</el-button>
                       </div>
                    </div>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="查询结果" name="listTab" style="height:100%" class="bigtabs">
            <div class="tabContent">
                <div>
                    <!-- <span><el-checkbox v-model="allSelectChecked">全部选取</el-checkbox></span> -->
                    <span>全部符合人员：</span>
                </div>
                <div class="listTable">
                  <el-table
                    size="mini"
                    :data="recordList2"
                    border
                    style="width: 100%"
                    max-height="550">
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    type="index"
                    width="50">
                    </el-table-column>
                    <el-table-column v-for="item in tableHead2" :key="item.property" :label="item.label" :property="item.property" :width="item.width">
                    </el-table-column>
                </el-table>
                </div>
                <div>
                    <el-button type="primary" size="mini">批量完成</el-button>
                    <el-button type="primary" size="mini">导出Excel</el-button>
                    <el-button type="primary" size="mini">查核明细报表预览</el-button>
                    <el-button type="primary" size="mini">导出明细</el-button>
                </div>
            </div>
        </el-tab-pane>
    </el-tabs>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
    activeTab:'searchTab',
    selectStatus:'',
    statusOptions:[{
          value: '晋升',
          label: '晋升'
        }, {
          value: '不能晋升',
          label: '晋升'
        }],
    selectMonth:'',
    zhiJiChecked:false,
    zhiJiValue:[],
    zhiJiOptions:[{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
        }],
    selectBranch:'',
    BranchOptions:[{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
        }],
    selectBuMen:'',
    buMenOptions:[{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
        }],
    selectZJ:'',
    ZJOptions:[{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }],
    // tableHead1:[{label:'考核项目名称',property:'name',width:'100'},
    //         {label:'范畴',property:'random',width:'100'},
    //         {label:'对象职级',property:'rank',width:'100'},
    //         {label:'期间',property:'duringTime',width:'100'},
    //         {label:'条件',property:'contional',width:'200'},
    //         {label:'标准值',property:'standerValue',width:'100'}],

    recordList1: [{
          random: '2016-05-03',
          name: '王小虎',
          rank: '上海',
          duringTime: '普陀区',
          contional: '上海市普陀区金沙江路 1518 弄',
          standerValue: 200333,
        },{
          random: '2016-05-03',
          name: '王小虎',
          rank: '上海',
          duringTime: '普陀区',
          contional: '上海市普陀区金沙江路 1518 弄',
          standerValue: 200333,
        },{
          random: '2016-05-03',
          name: '王小虎',
          rank: '上海',
          duringTime: '普陀区',
          contional: '上海市普陀区金沙江路 1518 弄',
          standerValue: 200333,
        },{
          random: '2016-05-03',
          name: '王小虎',
          rank: '上海',
          duringTime: '普陀区',
          contional: '上海市普陀区金沙江路 1518 弄',
          standerValue: 200333,
        },{
          random: '2016-05-03',
          name: '王小虎',
          rank: '上海',
          duringTime: '普陀区',
          contional: '上海市普陀区金沙江路 1518 弄',
          standerValue: 200333,
        }],
    recordList1Options:{name:[{value: '黄金糕',label: '黄金糕'}, {value: '双皮奶',label: '双皮奶'}],
                        random:[{value: '唐美琪',label: '唐美琪'}, {value: '严裕州',label: '严裕州'}],
                        rank:[{value: '黄金糕',label: '黄金糕'}, {value: '双皮奶',label: '双皮奶'}],
                        duringTime:[{value: '唐美琪',label: '唐美琪'}, {value: '严裕州',label: '严裕州'}],
                        contional:[{value: '黄金糕',label: '黄金糕'}, {value: '双皮奶',label: '双皮奶'}],
                        standerValue:[{value: '唐美琪',label: '唐美琪'}, {value: '严裕州',label: '严裕州'}],
    },
    tableHead2:[{label:'状态',property:'status',width:'100'},
            {label:'编号',property:'bianhao',width:'100'},
            {label:'姓名',property:'name',width:'100'},
            {label:'现职',property:'nowZhiwei',width:'100'},
            {label:'起于',property:'start',width:'100'},
            {label:'讫于',property:'entTime',width:'100'},
            {label:'分支机构',property:'branch',width:'100'},
            {label:'部门',property:'buMen',width:'200'}],
    recordList2:[{
          status: '2016-05-02',
          name: '王小虎',
          bianhao: '上海',
          nowZhiwei: '普陀区',
          start:'',
          entTime:'',
          buMen: '上海市普陀区金沙江路 1518 弄',
          branch: 200333
        },{
          status: '2016-05-02',
          name: '王小虎',
          bianhao: '上海',
          nowZhiwei: '普陀区',
          start:'',
          entTime:'',
          buMen: '上海市普陀区金沙江路 1518 弄',
          branch: 200333
        },{
          status: '2016-05-02',
          name: '王小虎',
          bianhao: '上海',
          nowZhiwei: '普陀区',
          start:'',
          entTime:'',
          buMen: '上海市普陀区金沙江路 1518 弄',
          branch: 200333
        },{
          status: '2016-05-02',
          name: '王小虎',
          bianhao: '上海',
          nowZhiwei: '普陀区',
          start:'',
          entTime:'',
          buMen: '上海市普陀区金沙江路 1518 弄',
          branch: 200333
        },{
          status: '2016-05-02',
          name: '王小虎',
          bianhao: '上海',
          nowZhiwei: '普陀区',
          start:'',
          entTime:'',
          buMen: '上海市普陀区金沙江路 1518 弄',
          branch: 200333
        }],
    allSelectChecked:false,
    itemvalue:'',
    
 }
 },

 methods:{
    handleToggleTab(){
         this.activeTab="listTab"
     },
    // addInformation(){
    //     this.dialogVisible=true;
    // }
    //每选择一次都要重新修改要上传的数据porperty代表每一行的数据，index代表第几行
    selectIndex(porperty,index){
        console.log('porperty',porperty);
        console.log('index',index);
    }
 }
}
</script>

<style scoped lang="scss">
.page{
    
    position:relative; 
    height:100%;
    width:100%;
}
// 使用Saas无法使用>>>，必须要用/deep/
//无法滚动到最底部的问题，不要给该元素加高度就可以了
.bigtabs /deep/ .el-tabs__content{
    overflow-y:auto !important;
    position:absolute !important;
    left: 0px;
    right:0px;
    top:39px;
    bottom:0px;
    padding:0px 10px;
}
.tabContent{
    width:100%;
    padding: 10px 10px 0 10px;
}
.tabSecondContent{
    display:flex;
    align-items:baseline;
}
.title{
    display: inline-block;
    width:100px;
    text-align: right;
    padding:10px 10px 10px 0px;
    vertical-align: middle;
}
.content{
    width:800px;
    display:flex;
    align-items:baseline;   
    justify-content:space-between; 
}
.content1 .content11{
    flex:1;
    margin-left:5px;
}
.content1 .content11:last-child{
    text-align:right;
}
// .tabletitle{
//     vertical-align: middle;
// }
.tableContent{
    width:900px;
    padding:10px 10px 10px 5px;
}
.listTable{
   width:100%; 
   margin:10px 10px 10px 0px;
}
</style>
