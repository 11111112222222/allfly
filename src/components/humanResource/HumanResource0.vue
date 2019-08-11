<template>
  <div class="page" style="height:100%">
    <el-tabs type="border-card" v-model="activeTab" style="height:100%" class="bigtabs">
      <el-tab-pane label="查询" name="searchTab" class="smalltabs">
        <div class="tabContent">
          <form action="">
            <div>
              <div class="title">所属分支机构</div>
              <div class="content">
                <el-checkbox v-model="branchChecked" class="checkbox"></el-checkbox>
                <el-select :disabled="!branchChecked" size="mini" v-model="branchSel" multiple collapse-tags>
                  <el-option v-for="item in branchOpt" :key="item.value" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div>
              <div class="title">当前所属部门</div>
              <div class="content">
                <el-checkbox v-model="bumenChecked" class="checkbox"></el-checkbox>
                <el-select :disabled="!bumenChecked" size="mini" v-model="bumenSel" multiple collapse-tags>
                  <el-option v-for="item in bumenOpt" :key="item.value" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div>
              <div class="title">员工姓名</div>
              <div class="content">
                <el-checkbox v-model="employeeChecked" class="checkbox"></el-checkbox>
                <el-input :disabled="!employeeChecked" size="mini" placeholder="请输入姓名" v-model="employeeName"
                  class="inputNum" clearable>
                </el-input>
              </div>
            </div>
            <div>
              <div class="title">员工编码</div>
              <div class="content">
                <el-checkbox v-model="employeeCodeChecked" class="checkbox"></el-checkbox>
                <el-input :disabled="!employeeCodeChecked" size="mini" placeholder="请输入员工编码" v-model="employeeCode"
                  class="inputNum" clearable>
                </el-input>
              </div>
            </div>
            <div>
              <div class="title">身份/证件号码</div>
              <div class="content">
                <el-checkbox v-model="idCardChecked" class="checkbox"></el-checkbox>
                <el-input :disabled="!idCardChecked" size="mini" placeholder="请输入证件号码" v-model="idCard" class="inputNum"
                  clearable>
                </el-input>
              </div>
            </div>
            <div>
              <div class="title">联系电话</div>
              <div class="content">
                <el-checkbox v-model="phoneChecked" class="checkbox"></el-checkbox>
                <el-input :disabled="!phoneChecked" size="mini" placeholder="请输入联系电话" v-model="phoneNumber"
                  class="inputNum" clearable>
                </el-input>
              </div>
            </div>
            <fieldset>
              <legend>高级查询</legend>
              <div>
                <div class="title">信息锁定</div>
                <div class="content">
                  <el-checkbox v-model="informationChecked" class="checkbox"></el-checkbox>
                  <el-select :disabled="!informationChecked" size="mini" v-model="informationSel" multiple
                    collapse-tags>
                    <el-option v-for="item in informationOpt" :key="item.value" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div>
                <div class="title subtitle">文档记录属性</div>
                <div class="content">
                  <el-checkbox v-model="accountChecked" class="checkbox subcheckbox"></el-checkbox>
                  <div class="secondcontent">
                    <div class="secondcontent1">
                      <div class="select1">
                        <el-select :disabled="!accountChecked" size="mini" v-model="accountSel" multiple collapse-tags>
                          <el-option v-for="item in accountOpt" :key="item.value" :value="item.value">
                          </el-option>
                        </el-select>
                      </div>
                      <div class="select2">
                        <el-select :disabled="!accountChecked" size="mini" v-model="isAccountSel" multiple
                          collapse-tags>
                          <el-option v-for="item in isAccountOpt" :key="item.value" :value="item.value">
                          </el-option>
                        </el-select>
                      </div>
                      <div class="select3">
                        内容
                        <el-input :disabled="!accountChecked" size="mini" placeholder="请输入联系电话"
                          v-model="accountDescrible" class="inputNum" clearable>
                        </el-input>
                      </div>
                    </div>
                    <div class="secondcontent2">
                      <el-checkbox :disabled="!accountChecked" v-model="bankChecked" class="checkbox"></el-checkbox>
                      <el-select :disabled="!(bankChecked&accountChecked)" size="mini" v-model="bankSel" multiple
                        collapse-tags>
                        <el-option v-for="item in bankOpt" :key="item.value" :value="item.value">
                        </el-option>
                      </el-select>
                      <el-date-picker :disabled="!(bankChecked&accountChecked)" size="mini" v-model="bankEffictivetime"
                        type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                      </el-date-picker>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="title subtitle">职务/数据状态</div>
                <div class="content">
                  <el-checkbox v-model="workStatusChecked" class="checkbox subcheckbox"></el-checkbox>
                  <div class="secondcontent">
                    <div class="thirdcontent">
                      <div class="select1">
                        <el-select :disabled="!workStatusChecked" size="mini" v-model="workStatusSel" multiple
                          collapse-tags style="width:100%">
                          <el-option v-for="item in workStatusOpt" :key="item.value" :value="item.value">
                          </el-option>
                        </el-select>
                      </div>
                      <div class="select2">
                        <el-select :disabled="!workStatusChecked" size="mini" v-model="workSel" multiple collapse-tags
                          style="width:100%">
                          <el-option v-for="item in workOpt" :key="item.value" :value="item.value">
                          </el-option>
                        </el-select>
                      </div>
                    </div>
                    <div class="thirdcontent1">
                      <div>
                        <el-checkbox :disabled="!workStatusChecked" v-model="enterCompanyChecked" class="checkbox">
                        </el-checkbox>
                        入司日期：
                        <el-date-picker :disabled="!(workStatusChecked&enterCompanyChecked)" size="mini"
                          v-model="enterCompanytime" type="daterange" range-separator="至" start-placeholder="开始日期"
                          end-placeholder="结束日期">
                        </el-date-picker>
                      </div>
                      <div>
                        <el-checkbox :disabled="!workStatusChecked" v-model="workCodeChecked" class="checkbox">
                        </el-checkbox>
                        在职编码：
                        <el-input :disabled="!(workStatusChecked&workCodeChecked)" size="mini" placeholder="请输入联系电话"
                          v-model="workCodeinput" class="inputNum" clearable>
                        </el-input>
                      </div>
                      <div>
                        <el-checkbox :disabled="!workStatusChecked" v-model="jobEffictiveChecked" class="checkbox">
                        </el-checkbox>
                        职级生效日期：
                        <el-date-picker :disabled="!(workStatusChecked&jobEffictiveChecked)" size="mini"
                          v-model="jobEffictiveTime" type="daterange" range-separator="至" start-placeholder="开始日期"
                          end-placeholder="结束日期">
                        </el-date-picker>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <el-button type="primary" size="medium" class="searchBtn" @click="handleToggleTab">查询</el-button>
          </form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="列表" name="listTab" style="height:100%" class="bigtabs">
        <div class="tabContent">
          <div class="listTable">
            <el-table size="mini" :data="recordList1" border style="width: 100%" height="400" max-height="550">
              <el-table-column v-for="item in tableHead1" :key="item.property" :label="item.label"
                :property="item.property" :fixed="item.fixed" :width="item.width">
                <template slot-scope="scope">
                  <div v-if="item.oper">
                    <!-- <el-button v-for="(o, key) in item.oper" :key="key" @click="o.clickFun(scope.row)" type="text" size="small">{{o.name}}</el-button>  -->
                    <el-button @click="deleteClick(scope.row)" type="danger" size="small">删除</el-button>
                    <el-button type="primary" size="small" @click="editInformation(scope.row.name)">查看/编辑</el-button>
                  </div>
                  <div v-else>
                    {{ scope.row[item.property]}}
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="oprateBtn">
            <el-button type="primary" size="mini">导出Excel</el-button>
            <!-- <el-button type="danger" size="mini">删除</el-button> -->
            <el-button type="primary" size="mini" @click="addInformation()">新增一笔</el-button>
          </div>
          <!-- <v-dialog v-if="dialogVisible" :visible.sync="dialogVisible"></v-dialog> -->
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
  // import Dialog from './Dialog.vue';
  export default {
    //  components: {'v-dialog': Dialog},
    data() {
      return {
        activeTab: 'searchTab',
        branchChecked: true,
        branchSel: '',
        branchOpt: [{
          value: '所属分支机构',
          label: '所属分支机构'
        }],
        bumenChecked: false,
        bumenSel: '',
        bumenOpt: [{
          value: '当前所属部门',
          label: '当前所属部门'
        }],
        employeeChecked: false,
        employeeName: '',
        employeeCodeChecked: false,
        employeeCode: '',
        idCardChecked: false,
        idCard: '',
        phoneChecked: false,
        phoneNumber: '',
        informationChecked: false,
        informationSel: '',
        informationOpt: [{
          value: '信息锁定',
          label: '信息锁定'
        }],
        timeData: '',
        accountChecked: false,
        accountSel: '',
        accountOpt: [{
          value: '银行账户',
          label: '银行账户'
        }],
        isAccountSel: '',
        isAccountOpt: [{
          value: '无',
          label: '无'
        }],
        accountDescrible: '',
        bankChecked: false,
        bankSel: '',
        bankOpt: [{
          value: '有效期起',
          label: '有效期起'
        }],
        bankEffictivetime: '',
        workStatusChecked: false,
        workStatusSel: '',
        workStatusOpt: [{
          value: '在职',
          label: '在职'
        }],
        workSel: '',
        workOpt: [{
          value: '',
          label: ''
        }],
        enterCompanyChecked: false,
        enterCompanytime: '',
        workCodeChecked: false,
        workCodeinput: '',
        jobEffictiveChecked: false,
        jobEffictiveTime: '',

        tableHead1: [{
            label: '考核项目名称',
            property: 'name',
            width: '100'
          },
          {
            label: '范畴',
            property: 'random',
            width: '100'
          },
          {
            label: '对象职级',
            property: 'rank',
            width: '100'
          },
          {
            label: '期间',
            property: 'duringTime',
            width: '100'
          },
          {
            label: '条件',
            property: 'contional',
            width: '200'
          },
          {
            label: '标准值',
            property: 'standerValue',
            width: ''
          },
          {
            label: '操作',
            property: 'oper',
            fixed: 'right',
            width: '200',
            minWidth: '140px',
            oper: [{
                name: '删除'
              },
              {
                name: '查看/编辑'
              }
            ]
          }
        ],
        recordList1: [{
          random: '2016-05-03',
          name: '胡文捷',
          rank: '上海',
          duringTime: '普陀区',
          contional: '上海市普陀区金沙江路 1518 弄',
          standerValue: 200333,

        }, {
          random: '2016-05-03',
          name: '唐美琪',
          rank: '上海',
          duringTime: '普陀区',
          contional: '上海市普陀区金沙江路 1518 弄',
          standerValue: 200333,

        }],
        dialogVisible: false,
      }
    },

    methods: {
      handleToggleTab() {
        this.activeTab = "listTab"
      },
      addInformation() {
        // this.dialogVisible=true;
        //与后台交互调接口
        this.$router.push({
          path: '/user/addInformation',
          query: {
            userId: ''
          }
        });
      },
      editInformation(id) {
        console.log('id', id);
        var userinfro = id;
        this.$router.push({
          path: '/user/addInformation',
          query: {
            userId: userinfro
          }
        });
      },
      deleteClick() {

      }
    },

  }

</script>

<style scoped lang="scss">
  .page {
    position: relative;
    height: 100%;
    width: 100%;
  }

  // 使用Saas无法使用>>>，必须要用/deep/
  //无法滚动到最底部的问题，不要给该元素加高度就可以了
  .bigtabs /deep/ .el-tabs__content {
    overflow-y: auto !important;
    position: absolute !important;
    left: 0px;
    right: 0px;
    top: 39px;
    bottom: 0px;
    padding: 20px 30px;
  }

  .tabContent {
    width: 100%;
  }

  .title {
    display: inline-block;
    width: 150px;
    text-align: right;
    padding: 10px;
  }

  .content {
    width: 700px;
    display: inline-block;

    .inputNum {
      width: 50%;
      display: inline-block;
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

  .subtitle {
    vertical-align: top;
  }

  .subcheckbox {
    margin-top: 10px;
    vertical-align: top;
  }

  .secondcontent {
    display: inline-block;
    width: 85%;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .secondcontent1 {
    display: flex;
    margin-bottom: 5px;
  }

  .secondcontent1 .select1 {
    margin-right: 5px;
    flex: 1.5;
  }

  .secondcontent1 .select2 {
    flex: 1;
    margin-right: 10px;
  }

  .secondcontent1 .select3 {
    flex: 2;
    margin-left: 5px;
  }

  .secondcontent1 .select3 .inputNum {
    width: 70%;
  }

  .thirdcontent {
    display: flex;
    margin-bottom: 5px;
  }

  .thirdcontent .select1 {
    margin-right: 5px;
    width: 200px;
  }

  .thirdcontent .select2 {
    width: 200px;
    margin-right: 10px;
  }

  .thirdcontent1 div {
    margin-bottom: 5px;
  }

  .searchBtn {
    width: 100px;
    margin-left: 200px;
  }

  .oprateBtn {
    position: fixed;
    ;
    bottom: 25px;
    right: 45px;
  }

</style>
