<template>
 <div class="page">
     <table class="orderTable">
        <tr>
            <td>总保费</td>
            <td></td>
            <td>首年</td>
            <td></td>
            <td>销售</td>
            <td></td>
        </tr>
        <tr>
            <td>标保</td>
            <td></td>
            <td>续年</td>
            <td></td>
            <td>服务</td>
            <td></td>
        </tr>
    </table>
    <table class="orderTable">
        <tr>
            <td>首佣FYC</td>
            <td></td>
            <td>内部标保</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>续佣FYC</td>
            <td></td>
            <td>财佣CFYC</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
    <div>
        <div class="title">险种受理日期</div>
        <el-date-picker
        v-model="acceptDate"
        type="date"
        size="mini"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd"
        placeholder="选择日期">
        </el-date-picker>
        <el-checkbox v-model="syncChecked1" class="checkbox"></el-checkbox>    
        同保单受理日期
    </div>
    <div>
        <div class="title">险种生效日期</div>
        <el-date-picker
        v-model="effectDate"
        type="date"
        size="mini"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd"
        placeholder="选择日期">
        </el-date-picker>
        <el-checkbox v-model="syncChecked2" class="checkbox"></el-checkbox>    
        同保单生效日期
    </div>
        <div>
        <div class="title">年度缴次</div> 
        <el-input-number v-model="dialogYearNum" controls-position="right" :min="0" :max="100" size="mini"></el-input-number>
        &nbsp;&nbsp;年&nbsp;&nbsp;
        <el-input-number v-model="dialogTimeNum" controls-position="right" :min="0" :max="100" size="mini"></el-input-number>
        &nbsp;&nbsp;次&nbsp;&nbsp;
    </div>
    <fieldset>
        <legend>
            投保险种
        </legend>
        <div>
            <div>
                <div class="title"></div> 
                <el-select v-model="mainType" size="mini">
                    <el-option
                    v-for="item in mainTypeOpt"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-checkbox v-model="showChecked" class="checkbox"></el-checkbox>    
                仅显示在售险种
            </div>
            <div>
                <div class="title">投保险种/代码</div> 
                <el-select v-model="insurNode" size="mini">
                    <el-option
                    v-for="item in insurNodeOpt"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <span></span>
            </div>
                <div>
                <div class="title">年期/分档</div> 
                <el-select v-model="yearSort" size="mini">
                    <el-option
                    v-for="item in yearSortOpt"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <!-- <el-select v-model="yearState" size="mini">
                    <el-option
                    v-for="item in yearStateOpt"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select> -->
            </div>
        </div>
    </fieldset>
        <fieldset>
        <legend>
            被保人信息
        </legend>
        <div>
            <div>
                <div class="title">被保人姓名</div> 
                    <el-input v-model="accepterName" size="mini"  style="width:250px"></el-input>
            </div>
            <div>
                <div class="title">证件号码</div> 
                    <el-input v-model="cardNum" size="mini"  style="width:250px"></el-input>
            </div>
            <el-button type="primary" size="mini" style="margin:5px 0 5px 350px;"  @click="showClient = true">验证</el-button>
            <div v-if="showClient">
            <el-table
            ref="recordTable"
            size="mini"
            border
            height="200px"
            :data="recordList"
            highlight-current-row
            style="width:400px">
                <el-table-column
                property="name"
                label="客户名称"
                sortable :show-overflow-tooltip="true"
                width="100">
                </el-table-column>
                <el-table-column
                property="name"
                label="性别"
                sortable :show-overflow-tooltip="true"
                width="80">
                </el-table-column>
                <el-table-column
                property="name"
                label="证件号码"
                sortable :show-overflow-tooltip="true"
                >
                </el-table-column>
                <el-table-column
                label="选取"
                sortable :show-overflow-tooltip="true"
                width="80">
                    <template slot-scope="scope">
                        <el-button size="mini" type="success" icon="el-icon-check" circle @click="getClient(scope.row,recordList)"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            </div>
                <div>
                <div class="title">投保时年龄</div> 
                    <el-input v-model="orderYear" size="mini"  style="width:250px"></el-input>
            </div>
            <div>
                <div class="title">与投保人关系</div> 
                    <el-input v-model="relative" size="mini"  style="width:250px"></el-input>
            </div>
        </div>
    </fieldset>
        <div>
        <div class="title">保险金额￥</div> 
        <el-input v-model="orderMoney" size="mini"  style="width:150px"></el-input>
        <el-select v-model="moneyUnit" size="mini" style="width:100px">
            <el-option
            v-for="item in unitOpt"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </div>
    <div>
        <div class="title">险种保费￥</div> 
        <el-input v-model="insurMoney" size="mini"  style="width:250px"></el-input>
    </div>
       
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
     acceptDate:'',
    syncChecked1:false,
    effectDate:'',
    syncChecked2:'',
    dialogYearNum:'',
    dialogTimeNum:'',
    mainType:'主约',
    mainTypeOpt:[{
          value: '主约',
        }, {
          value: '附约',
        }],
    showChecked:false,
    insurNode:'吉瑞宝[LB3435]',
    insurNodeOpt:[{
          value: '吉瑞宝[LB3435]',
        }],
    yearSort:'5',
    yearSortOpt:[{
          value: '5',
        }, {
          value: '10',
        }],
    yearState:'5',
    yearStateOpt:[{
          value: '5',
        }, {
          value: '10',
        }],
    accepterName:'',
    cardNum:'',
    showClient:false,
    orderYear:'',
    relative:'',
    getChecked:false,
    orderMoney:'',
    moneyUnit:'万元',
    unitOpt:[{
          value: '元',
        }, {
          value: '千元',
        }, {
          value: '万元',
        }, {
          value: '份数',
        }],
    insurMoney:'',
     recordList: [{
        date: '2016-05-04',
        name: '小虎',
        address: '北京市普陀区金沙江路 1517 弄'
    },{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-04',
        name: '小虎',
        address: '北京市普陀区金沙江路 1517 弄'
    }],
 }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
 .bodyMsg{
        width:95%;
        margin:auto;
        height:400px;
        overflow: auto;
        border:1px solid #d4d8e4;
         padding:20px 30px;
        // div{
        //     margin:5px;
        // }
         .title{
            display: inline-block;
            width:150px;
            text-align: right;
            padding:10px;
        }
    }
    .orderTable{
        width:100%;
        margin:5px 0 20px;
        td{
            border:1px solid #d4d8e4;
            border-collapse: collapse;
            height: 20px;
            padding:5px;
             width:10%;
        }
        td:nth-of-type(odd){
           //width:10%;
            font-weight: bold;
            background-color:#eee;
        }
        // td:nth-of-type(even){
        //    // width:20%;
        // }
    }
     fieldset {
        padding: 20px 0 10px 10px;
        margin:10px 0;
       // height: 90px;
        border: 1px solid #d6dbe7;
     }
</style>
