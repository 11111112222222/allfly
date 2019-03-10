<template>
  <div class="page" style="height:100%">
    <el-tabs type="border-card" v-model="activeTab" style="height:100%">
        <el-tab-pane label="非车险受理查询" name="searchTab">
           <div class="tabContent">
                <form action="">
                <div>
                    <div class="title">保险公司</div>
                    <div class="content">
                        <el-checkbox v-model="insurChecked" class="checkbox"></el-checkbox> 
                        <el-select 
                            size="mini" 
                            v-model="compSort" 
                            multiple 
                            collapse-tags
                            @change="handleSelectChange">
                            <el-option
                            v-for="item in sortOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>&nbsp;&nbsp;
                        <el-checkbox v-model="compAllChecked" class="checkbox">全选</el-checkbox> 
                    </div>
                </div>
                <div>
                    <div class="title">保单号码 / 投被保人</div>
                    <div class="content">
                        <el-checkbox v-model="orderNumChecked" class="checkbox"></el-checkbox> 
                        <el-select size="mini" v-model="orderSort">
                            <el-option
                            v-for="item in orderOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>&nbsp;&nbsp;
                        <el-input v-model="numInput" size="mini" placeholder="请输入号码" style="width:250px"></el-input>
                    </div>
                </div>
                <div>
                    <div class="title">保单状态</div>
                    <div class="content">
                        <el-checkbox v-model="orderState" class="checkbox"></el-checkbox> 
                        <el-select size="mini" v-model="orderStaSort">
                            <el-option
                            v-for="item in stateOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>&nbsp;&nbsp;
                    </div>
                </div>
                <div>
                    <div class="title">日期索引</div>
                    <div class="content">
                        <el-checkbox v-model="dateIndex" class="checkbox"></el-checkbox>    
                        <el-select size="mini" v-model="indexSel">
                            <el-option
                            v-for="item in dateOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>&nbsp;&nbsp;
                        <el-date-picker
                        v-model="dateSel"
                        type="daterange"
                        size="mini"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </div>
                <div>
                    <div class="title">承揽人A分支机构</div>
                    <div class="content">
                        <el-checkbox v-model="contracInstiChecked" class="checkbox"></el-checkbox> 
                        <el-select size="mini" v-model="contracInstiSort">
                            <el-option
                            v-for="item in contracInstiOpt"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>&nbsp;&nbsp;
                        <el-checkbox v-model="instiAllChecked" class="checkbox">全选</el-checkbox> 
                    </div>
                </div>
               <fieldset>
                 <legend>高级查询</legend>
                 <div style="margin-left:-10px;">
                    <div>
                      <div class="title">保单记录属性</div>
                      <div class="content">
                          <el-checkbox v-model="orderRecprop" class="checkbox"></el-checkbox>    
                          <el-select size="mini" v-model="informSel" style="width:100px">
                              <el-option
                              v-for="item in informOpt"
                              :key="item.value"
                              :value="item.value">
                              </el-option>
                          </el-select>
                          <el-select size="mini" v-model="orderRecSel" style="width:89px">
                              <el-option
                              v-for="item in orderRecOpt"
                              :key="item.value"
                              :value="item.value">
                              </el-option>
                          </el-select>
                          <el-select size="mini" v-model="haveSel" style="width:80px;margin-left:10px">
                              <el-option
                              v-for="item in ishaveOpt"
                              :key="item.value"
                              :value="item.value">
                              </el-option>
                          </el-select>
                          <el-input v-model="percentInput" size="mini" placeholder="%" style="width:250px"></el-input>
                      </div>
                    </div>
                    <div>
                      <div class="title"></div>
                      <div class="content">
                          <el-checkbox v-model="validityDate" class="checkbox"></el-checkbox>    
                          <el-select size="mini" v-model="validityDateSel" style="margin-right:10px">
                              <el-option
                              v-for="item in validityDateOpt"
                              :key="item.value"
                              :value="item.value">
                              </el-option>
                          </el-select>
                          <el-date-picker
                          v-model="validateSel"
                          type="daterange"
                          size="mini"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
                          </el-date-picker>
                      </div>
                    </div>
                    <div>
                      <div class="title">投保险种</div>
                      <div class="content">
                          <el-checkbox v-model="insureTypes" class="checkbox"></el-checkbox> 
                          <el-select size="mini" v-model="insureTypeSel">
                              <el-option
                              v-for="item in insureTypeOpt"
                              :key="item.value"
                              :value="item.value">
                              </el-option>
                          </el-select>&nbsp;&nbsp;
                      </div>
                    </div>
                    <div>
                      <div class="title">承揽人/出单员</div>
                      <div class="content">
                          <el-checkbox v-model="dutyMember" class="checkbox"></el-checkbox>    
                          <el-select size="mini" v-model="dutyMemberSel" style="width:100px">
                              <el-option
                              v-for="item in dutyMemberOpt"
                              :key="item.value"
                              :value="item.value">
                              </el-option>
                          </el-select>
                          <el-select size="mini" v-model="dutyMemberNameSel" style="width:89px;margin-right:10px">
                              <el-option
                              v-for="item in dutyMemberNameOpt"
                              :key="item.value"
                              :value="item.value">
                              </el-option>
                          </el-select>
                          <el-input v-model="dutyMemberInput" size="mini" placeholder="%" style="width:250px"></el-input>
                      </div>
                    </div>
                 </div>      
              </fieldset>
              <el-button type="primary" size="medium" class="searchBtn" @click="handleToggleTab">查询</el-button>
            </form>
            </div>
        </el-tab-pane>
        <el-tab-pane label="列表" name="listTab">
            <div class="tabContent">
                <div class="listTable">
                    <el-table
                        class="table"
                        size="mini"
                        border
                        height="800px"
                        :data="carInsurList"
                        highlight-current-row>
                        <el-table-column
                        fixed
                        type="index"
                        width="50">
                        </el-table-column>
                        <el-table-column
                        property="orderNum"
                        label="保单号码"
                        sortable :show-overflow-tooltip="true"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="otherNumbers"
                        label="其它号码"
                        sortable :show-overflow-tooltip="true"
                        width="110">
                        </el-table-column>
                        <el-table-column
                        property="insureCompany"
                        label="保险公司"
                        sortable :show-overflow-tooltip="true"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="customerName"
                        label="客户姓名"
                        sortable :show-overflow-tooltip="true"
                         width="100">
                        </el-table-column>
                        <el-table-column
                        property="dealDate"
                        label="受理日期"
                        sortable :show-overflow-tooltip="true"
                         width="100">
                        </el-table-column>
                        <el-table-column
                        property="valiDate"
                        label="生效日期"
                        sortable :show-overflow-tooltip="true"
                         width="100">
                        </el-table-column>
                         <el-table-column
                        property="dealDate"
                        label="承揽人（单位/编码）"
                        sortable :show-overflow-tooltip="true"
                         width="170">
                        </el-table-column>
                        <el-table-column
                        property="valiDate"
                        label="承揽人"
                        sortable :show-overflow-tooltip="true"
                         width="100">
                        </el-table-column>
                        <el-table-column
                        fixed="right"
                        label="操作"
                         width="160">
                          <template slot-scope="scope">
                              <el-button @click.native.prevent="deleteBtn(scope.$index,carInsurList)" type="danger" size="mini">删除</el-button>
                              <el-button type="primary" size="mini" @click="editorBtn(scope.row)">编辑</el-button>
                          </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="pageBtn">
                    <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
                    </el-pagination>
                </div>
                <div class="oprateBtn">
                   <el-button type="primary" size="mini">导出Excel</el-button>
                    <el-button type="primary" size="mini">理赔报表导出</el-button>
                    <el-button type="primary" size="mini" @click="addBtn">新增一笔</el-button>
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
      tabTitle:'车险受理查询',
      activeTab: "searchTab",
      carOrder:true,
      insurChecked: false,
      sortOpt: [
        {
          value: "安盛天平(产)"
        },
        {
          value: "安盛天平(产)a"
        },
        {
          value: "安盛天平(产)b"
        }
      ],
      compSort: "安盛天平(产)c",
      compAllChecked: false,
      orderNumChecked: false,
      orderSort: "保单号码",
      orderOpt: [
        {
          value: "保单号码"
        },
        {
          value: "相关其他号码"
        },
        {
          value: "投保人姓名"
        },
        {
          value: "投保人证件代码"
        },
        {
          value: "被保人姓名"
        },
        {
          value: "被保人证件代码"
        }
      ],
      numInput: "",
      orderState: false,
      orderStaSort: "新保",
      stateOpt: [
        {
          value: "新保"
        },
        {
          value: "旧保a"
        },
        {
          value: "旧保b"
        },
        {
          value: "旧保c"
        },
        {
          value: "旧保d"
        },
        {
          value: "旧保e"
        }
      ],
      dateIndex: false,
      indexSel: "受理日期",
      dateOpt: [
        {
          value: "保单生效日期1"
        },
        {
          value: "保单生效日期2"
        },
        {
          value: "交费日期"
        },
        {
          value: "险种生效日期"
        }
      ],
      dateSel: "",
      carNumChecked: false,
      carNumInput: "",
      contracInstiChecked: false,
      contracInstiSort: "安徽分公司",
      contracInstiOpt: [
        {
          value: "安徽分公司"
        },
        {
          value: "a安徽分公司"
        },
        {
          value: "b安徽分公司"
        },
        {
          value: "c安徽分公司"
        }
      ],
      instiAllChecked: false,
      orderRecprop: false,
      informSel: "单证信息",
      informOpt: [
        {
          value: "单证信息"
        },
        {
          value: "a单证信息"
        },
        {
          value: "b单证信息"
        },
        {
          value: "c单证信息"
        }
      ],
      orderRecSel: "投保单",
      orderRecOpt: [
        {
          value: "投保单有"
        },
        {
          value: "投保单无"
        }
      ],
      haveSel: "有",
      ishaveOpt: [
        {
          value: "有"
        },
        {
          value: "无"
        }],
      percentInput: '',
      validityDate: false,
      validityDateSel: '有效期起',
      validityDateOpt:[{
          value: "有效期起"
        },{
          value: "有效期起a"
        },{
          value: "有效期起v"
        }],
      validateSel:'',
      insureTypes: false,
      insureTypeSel: '',
      insureTypeOpt:[{
          value: "钱钱钱"
        },{
          value: "吃"
        }],
      dutyMember: false,
      dutyMemberSel: '不区分',
      dutyMemberOpt: [{
          value:"不区分"
        },{
          value:"区分"
        }],
      dutyMemberNameSel: '姓名',
      dutyMemberNameOpt: [{
           value: "姓名"
        },{
          value: "编号"
        }],
      dutyMemberInput: '',
      trafficFee:'1232343.56',
      businessFee:'345234.00',
      taxFee:'3454323.10',
      carInsurList: [{
          orderNum:'',
          otherNumbers: '上海市普陀区金沙江路 1518 弄',
          insureCompany: '上海市普陀区金沙江路 1518 弄',
          customerName: '上海市普陀区金沙江路 1518 弄',
          dealDate: '上海市普陀区金沙江路 1518 弄',
          valiDate: '上海市普陀区金沙江路 1518 弄',
        }, {
          orderNum:'',
          otherNumbers: '上海市普陀区金沙江路 1518 弄',
          insureCompany: '上海市普陀区金沙江路 1518 弄',
          customerName: '上海市普陀区金沙江路 1518 弄',
          dealDate: '上海市普陀区金沙江路 1518 弄',
          valiDate: '上海市普陀区金沙江路 1518 弄',
        }]
    };
  },
  components: {},
  mounted(){
    //this.fetch();
  },
  methods: {
    fetch(){
      
    },
     handleSelectChange(value){
         if(value[value.length-1]=="不区分"){
            value.splice(0,value.length-1)
         }else if(value.indexOf("不区分")!=-1){
            value.splice(value.indexOf("不区分"),1)
         }
     },
    handleToggleTab(){
         this.activeTab="listTab"
     },
     deleteBtn(index,table){
        this.$confirm('确定删除该条数据吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            table.splice(index,1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
     },
     editorBtn(){
       this.$router.push({path:"/user/nocarOrderEditor",query:{editor:true}})
     },
     addBtn(){
       this.$router.push({path:"/user/nocarOrderEditor",query:{editor:false}})
     }
  },
};
</script>

<style scoped lang="scss">
.tabContent {
  position: relative;
  text-align: left;
  padding: 0 30px;
  height: 100%;
  .totalCost{
        float:right;
        height: 30px;
    }
}
.title {
  display: inline-block;
  width: 150px;
  text-align: right;
  padding: 10px;
}
.content {
  display: inline-block;
  .inputNum {
    display: inline-block;
    margin-left: 10px;
  }
}
.checkbox {
  margin-right: 10px;
}
fieldset {
  padding: 10px 0 10px 10px;
  margin: 10px 0;
  border: 1px solid silver;
}
// legend {
//     padding: .5em;
//     border: 0;
//     width: auto;
// }
.searchBtn {
  width: 100px;
  margin-left: 200px;
}
.totalCost {
  float: right;
  height: 30px;
}
.listTable {
  clear: both;
  //max-width:1000px;
  width: 100%;
}
.inBtn{
  position: fixed;
  left: 275px;
  bottom: 25px;
}
 .pageBtn{
    float: left;
    margin-top:10px;
}
 .oprateBtn{
    float: right;
    margin-top:10px;
}
 @media screen and (max-width: 1480px) {
    .table {
    height:480px !important
    }
  }
</style>

