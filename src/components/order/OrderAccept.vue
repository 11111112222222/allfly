<template>
  <div class="page">
    <el-tabs type="border-card" v-model="activeTab">
      <el-tab-pane label="查询" name="searchTab">
        <div class="row company">
          <div class="title">
            <span>保险公司</span>
          </div>
          <el-checkbox v-model="companyChecked"></el-checkbox>
          <el-select :disabled="!companyChecked" size="mini" v-model="companyTypeSel" placeholder="请选择"
            @change="companyTypeChange">
            <el-option v-for="item in companyTypeOpt" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select :disabled="!companyChecked" size="mini" v-model="companySel" placeholder="请选择" multiple
            collapse-tags>
            <el-option v-for="item in companyOpt" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="row policyNumber">
          <div class="title">
            <span>保单相关号码/投被保人</span>
          </div>
          <el-checkbox v-model="numberChecked"></el-checkbox>
          <el-select :disabled="!numberChecked" size="mini" v-model="numberSel" placeholder="请选择">
            <el-option v-for="item in numberOpt" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-input :disabled="!numberChecked" size="mini" style="width:20%" placeholder="请输入内容" v-model="numberVal"
            clearable>
          </el-input>
        </div>
        <div class="row policyStatus">
          <div class="title">
            <span>保单状态</span>
          </div>
          <el-checkbox v-model="statusChecked"></el-checkbox>
          <el-select :disabled="!statusChecked" size="mini" v-model="statusSel" placeholder="请选择">
            <el-option v-for="item in statusOpt" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="row dateIndex">
          <div class="title">
            <span>日期索引</span>
          </div>
          <el-checkbox v-model="dateChecked"></el-checkbox>
          <el-select :disabled="!dateChecked" size="mini" v-model="dateSel" placeholder="请选择">
            <el-option v-for="item in dateOpt" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-date-picker :disabled="!dateChecked" size="mini" v-model="IndexDate" type="daterange" align="right"
            unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
            :picker-options="datepickerOpt">
          </el-date-picker>
        </div>
        <div class="row policyReceipt">
          <div class="title">
            <span>保单回执</span>
          </div>
          <el-checkbox v-model="receiptChecked"></el-checkbox>
          <el-select :disabled="!receiptChecked" size="mini" v-model="receiptSel" placeholder="请选择">
            <el-option v-for="item in receiptOpt" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-date-picker :disabled="!receiptChecked" size="mini" v-model="receiptDate" type="daterange" align="right"
            unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
            :picker-options="receiptPickerOpt">
          </el-date-picker>
        </div>

        <fieldset>
          <legend>高级查询</legend>
          <div class="wrapper">
            <div class="row property">
              <div class="title">
                <span>保单记录属性</span>
              </div>
              <el-checkbox v-model="propertyChecked"></el-checkbox>
              <el-cascader :disabled="!propertyChecked" size="mini" v-model="propertySel" placeholder="请选择"
                :options="propertyOpt" filterable clearable style="width:17%;marginRight:2px">
                <!-- <el-option v-for="item in propertyOpt" :key="item.value" :label="item.label" :value="item.value">
                </el-option> -->
              </el-cascader>
              <!-- <el-select size="mini" v-model="propertyReleSel" placeholder="请选择" style="width:9%">
                <el-option v-for="item in propertyReleOpt" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select> -->
              <el-select :disabled="!propertyChecked" size="mini" v-model="IndexDate" placeholder="请选择"
                style="width:10%">
                <el-option v-for="item in propertyExiOpt" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <el-input :disabled="!propertyChecked" size="mini" style="width:20%" placeholder="请输入内容"
                v-model="propertyVal" clearable>
              </el-input>
            </div>
            <div class="row propertyRele">
              <div class="title">
                <span></span>
              </div>
              <!-- el-checkbox占位 -->
              <el-checkbox :disabled="!propertyChecked" style="display:none;"></el-checkbox>
              <el-checkbox :disabled="!propertyChecked" v-model="propertyReleChecked"></el-checkbox>
              <el-select :disabled="!(propertyReleChecked&propertyChecked)" size="mini" v-model="validityTimeSel"
                placeholder="请选择" style="width:15%;">
                <el-option v-for="item in validityTimeOpt" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <el-date-picker :disabled="!(propertyReleChecked&propertyChecked)" size="mini" v-model="propertyReleDate"
                type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期"
                end-placeholder="结束日期" :picker-options="propertyPickerOpt">
              </el-date-picker>
            </div>
            <div class="row insuranceType">
              <div class="title">
                <span>投保险种</span>
              </div>
              <el-checkbox v-model="insuTypeChecked"></el-checkbox>
              <el-select :disabled="!insuTypeChecked" size="mini" v-model="insuTypeSel" placeholder="请选择">
                <el-option v-for="item in insuTypeOpt" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="row bracket">
              <div class="title">
                <span>年期/分档</span>
              </div>
              <el-checkbox v-model="bracketChecked"></el-checkbox>
              <el-select :disabled="!bracketChecked" size="mini" v-model="bracketSel" placeholder="请选择"
                style="width:9%;marginRight:2px">
                <el-option v-for="item in bracketOpt" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <el-input-number :disabled="!bracketChecked" size="mini" v-model="bracketLowVal" controls-position="right"
                :min="1" :max="10" style="width:8%;marginRight:2px"></el-input-number>至
              <el-input-number :disabled="!bracketChecked" size="mini" v-model="bracketHigVal" controls-position="right"
                :min="1" :max="10" style="width:8%;"></el-input-number>
            </div>
            <div class="row accpeter">
              <div class="title">
                <span>承揽人</span>
              </div>
              <el-checkbox v-model="accpeterChecked"></el-checkbox>
              <el-select :disabled="!accpeterChecked" size="mini" v-model="accpeterSel" placeholder="请选择"
                style="width:8%;marginRight:2px">
                <el-option v-for="item in accpeterOpt" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <el-select :disabled="!accpeterChecked" size="mini" v-model="accpeterNameSel" placeholder="请选择"
                style="width:9%">
                <el-option v-for="item in accpeterNameOpt" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <el-input :disabled="!accpeterChecked" size="mini" style="width:20%" placeholder="请输入内容"
                v-model="accpeterVal" clearable>
              </el-input>
            </div>
            <div class="row staff">
              <div class="title">
                <span>录单人员/单位</span>
              </div>
              <el-checkbox v-model="staffChecked"></el-checkbox>
              <el-select :disabled="!staffChecked" size="mini" v-model="staffSel" placeholder="请选择">
                <el-option v-for="item in staffOpt" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <el-input :disabled="!staffChecked" size="mini" style="width:20%" placeholder="请输入内容" v-model="staffVal"
                clearable>
              </el-input>
            </div>
          </div>
        </fieldset>
        <div class="button-wrapper">
          <el-button type="primary" @click="handleToggleTab">查询</el-button>
        </div>

      </el-tab-pane>
      <el-tab-pane label="列表" name="listTab">
        <div class="tabContent">
          <div class="totalCost">总保费：{{totalCost}}</div>
          <div class="listTable">
            <el-table :data="tableData3" size="mini" height="440px" highlight-current-row border
              @current-change="handleCurrentChange">
              <el-table-column fixed type="index" width="50">
              </el-table-column>
              <el-table-column prop="orderNumber" label="保单号码" sortable width="100" heigt="50">
              </el-table-column>
              <el-table-column prop="company" label="保险公司" sortable width="100" heigt="50">
              </el-table-column>
              <el-table-column prop="orderStatus" label="保单状态" sortable width="100" heigt="50">
              </el-table-column>
              <el-table-column prop="policyHolder" label="投保人" sortable width="100" heigt="50">
              </el-table-column>
              <el-table-column prop="contractor" label="承揽人" sortable width="100" heigt="50">
              </el-table-column>
              <el-table-column prop="contractorName" label="承揽人姓名" sortable width="120" heigt="50">
              </el-table-column>
              <el-table-column prop="acceptedDate" label="受理日期" sortable width="100" heigt="50">
              </el-table-column>
              <el-table-column prop="effectiveDate" label="生效日期" sortable width="100" heigt="50">
              </el-table-column>
              <el-table-column prop="annualizedReturns" label="年化收益" sortable width="100" heigt="50">
              </el-table-column>
              <el-table-column prop="insuranceCode" label="险种代码" sortable width="100" heigt="50">
              </el-table-column>
              <el-table-column prop="address" label="地址" width="100" sortable>
              </el-table-column>
              <el-table-column prop="fullName" label="主约险种全称" width="100"></el-table-column>
              <el-table-column prop="abbreviation" label="主约险种简称" width="100"></el-table-column>
              <el-table-column prop="recognizee" label="被保人"></el-table-column>
              <el-table-column prop="coverage" label="主约保额"></el-table-column>
              <el-table-column prop="unit" label="保额单位"></el-table-column>
              <el-table-column prop="premium" label="主约保费"></el-table-column>
              <el-table-column prop="contractingType" label="承揽类型"></el-table-column>
            </el-table>
            <Dialog :dialogFormVisible="dialogFormVisible" :tableData="tableData3" @change="change"></Dialog>
          </div>
          <div class="inBtn">
            <el-button type="primary" size="mini" @click="showDialog">导出Excel</el-button>
            <!-- <el-button type="primary" size="mini">理赔报表导出</el-button> -->
          </div>
          <div class="oprateBtn">
            <el-button type="danger" size="mini">删除</el-button>
            <el-button type="primary" size="mini" @click="insuranceLook">查看 / 编辑</el-button>
            <el-button type="success" size="mini">新增一笔</el-button>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
  import Dialog from 'base/dialog/dialog.vue'
  import qs from 'qs'
  export default {
    data() {
      return {
        // 查询数据
        dialogFormVisible: false,
        activeTab: 'searchTab',
        companyChecked: false,
        numberChecked: false,
        statusChecked: false,
        dateChecked: false,
        receiptChecked: false,
        propertyChecked: false,
        propertyReleChecked: false,
        insuTypeChecked: false,
        bracketChecked: false,
        accpeterChecked: false,
        staffChecked: false,
        companyTypeOpt: [{
            value: "保险公司",
            label: "指定保险公司"
          },
          {
            value: "寿险公司",
            label: "所有寿险公司"
          },
          {
            value: "产险公司",
            label: "所有产险公司"
          }
        ],
        companyOpt: [],
        numberOpt: [{
            value: '选项1',
            label: '保单号码'
          },
          {
            value: '选项2',
            label: '保单相关号码'
          },
          {
            value: '选项3',
            label: '投保人姓名'
          }, {
            value: '选项4',
            label: '投保人证件号码',
          }, {
            value: '选项5',
            label: '投保人姓名'
          }, {
            value: '选项6',
            label: '被保人姓名'
          }, {
            value: '选项7',
            label: '被保人证件号码'
          }
        ],
        statusOpt: [],
        dateOpt: [{
            value: '选项1',
            label: '受理日期'
          },
          {
            value: '选项2',
            label: '创建日期'
          },
          {
            value: '选项3',
            label: '更新日期'
          }, {
            value: '选项4',
            label: '生效日期'
          }, {
            value: '选项5',
            label: '签发日期'
          }
        ],
        receiptOpt: [{
            value: '选项1',
            label: '未交回'
          },
          {
            value: '选项2',
            label: '已交回'
          }
        ],
        propertyOpt: [{
          value: '单证信息',
          label: '单证信息',
          children: [{
            value: '投保单',
            label: '投保单'
          }, {
            value: '保单',
            label: '保单'
          }, {
            value: '照会单',
            label: '照会单'
          }, {
            value: '体检单',
            label: '体检单'
          }, {
            value: '投保单位',
            label: '投保单位'
          }, {
            value: '投保人数',
            label: '投保人数'
          }, {
            value: '身份证',
            label: '身份证'
          }, {
            value: '银行卡',
            label: '银行卡'
          }, {
            value: '其他',
            label: '其他'
          }]
        }, {
          value: '车辆信息',
          label: '车辆信息',
          children: [{
            value: '车辆信息',
            label: '车辆信息'
          }]
        }, {
          value: '银行账号',
          label: '银行账号',
          children: [{
            value: '首期交费账号',
            label: '首期交费账号'
          }, {
            value: '续期交费账号',
            label: '续期交费账号'
          }]
        }, {
          value: '保单服务',
          label: '保单服务',
          children: [{
            value: '保全服务',
            label: '保全服务'
          }, {
            value: '批改服务',
            label: '批改服务'
          }, {
            value: '理赔服务',
            label: '理赔服务'
          }, {
            value: '其他',
            label: '其他'
          }]
        }, {
          value: '服务提醒',
          label: '服务提醒',
          children: [{
            value: '前保单号',
            label: '前保单号'
          }, {
            value: '保障期限',
            label: '保障期限'
          }, {
            value: '生存金提醒',
            label: '生存金提醒'
          }, {
            value: '保单回访记录',
            label: '保单回访记录'
          }]
        }, {
          value: '保单状态前台受理',
          label: '保单状态前台受理',
          children: [{
            value: '保单预收受理',
            label: '保单预收受理'
          }, {
            value: '保单承保受理',
            label: '保单承保受理'
          }, {
            value: '保单回执契撤受理',
            label: '保单回执契撤受理'
          }, {
            value: '保单停效受理',
            label: '保单停效受理'
          }, {
            value: '保单失效受理',
            label: '保单失效受理'
          }, {
            value: '保单解约受理',
            label: '保单解约受理'
          }, {
            value: '保单终止受理',
            label: '保单终止受理'
          }]
        }, {
          value: '车险费率',
          label: '车险费率',
          children: [{
            value: '收项费率',
            label: '收项费率'
          }, {
            value: '支项费率',
            label: '支项费率'
          }]
        }, {
          value: '车险信息',
          label: '车险信息',
          children: [{
            value: '业务员信息',
            label: '业务员信息'
          }]
        }, {
          value: '不分区',
          label: '不分区',
          children: [{
            value: '以上所有',
            label: '以上所有'
          }]
        }],
        propertyReleOpt: [{
            value: "选项1",
            label: "投保单"
          },
          {
            value: "选项2",
            label: "双皮奶"
          },
          {
            value: "选项3",
            label: "蚵仔煎"
          }
        ],
        propertyExiOpt: [{
            value: "有",
            label: "有"
          },
          {
            value: "无",
            label: "无"
          }
        ],
        validityTimeOpt: [{
            value: "有效期起",
            label: "有效期起"
          },
          {
            value: "有效期止",
            label: "有效期止"
          }
        ],
        insuTypeOpt: [{
            value: "选项1",
            label: "财富年年两全保险（分红型）"
          },
          {
            value: "选项2",
            label: "有效期止"
          }
        ],
        bracketOpt: [{
            value: "年期/分档",
            label: "年期/分档"
          },
          {
            value: "缴费至",
            label: "缴费至"
          }
        ],
        accpeterOpt: [{
            value: "不区分",
            label: "不区分"
          },
          {
            value: "A",
            label: "A"
          },
          {
            value: "B",
            label: "B"
          }, {
            value: 'C',
            label: 'C'
          }, {
            value: 'D',
            label: 'D'
          }
        ],
        accpeterNameOpt: [{
            value: "姓名",
            label: "姓名"
          },
          {
            value: "员工编号",
            label: "员工编号"
          },
          {
            value: "分支机构",
            label: "分支机构"
          }
        ],
        staffOpt: [{
            value: "姓名",
            label: "姓名"
          },
          {
            value: "员工编号",
            label: "员工编号"
          },
          {
            value: "分支机构",
            label: "分支机构"
          }
        ],
        datepickerOpt: {
          shortcuts: [{
              text: "最近一周",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit("pick", [start, end]);
              }
            },
            {
              text: "最近一个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit("pick", [start, end]);
              }
            },
            {
              text: "最近三个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit("pick", [start, end]);
              }
            }
          ]
        },
        receiptPickerOpt: {
          shortcuts: [{
              text: "最近一周",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit("pick", [start, end]);
              }
            },
            {
              text: "最近一个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit("pick", [start, end]);
              }
            },
            {
              text: "最近三个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit("pick", [start, end]);
              }
            }
          ]
        },
        propertyPickerOpt: {
          shortcuts: [{
              text: "最近一周",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit("pick", [start, end]);
              }
            },
            {
              text: "最近一个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit("pick", [start, end]);
              }
            },
            {
              text: "最近三个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit("pick", [start, end]);
              }
            }
          ]
        },
        companyTypeSel: "指定保险公司",
        companySel: [],
        numberSel: "保单号码",
        numberVal: "",
        statusSel: "预收件",
        dateSel: "受理日期",
        IndexDate: "",
        receiptSel: "未交回",
        receiptDate: [],
        propertySel: [],
        propertyReleSel: "投保单",
        propertyExiSel: "有",
        propertyVal: "",
        validityTimeSel: "有效期起",
        propertyReleDate: "",
        insuTypeSel: "财富年年两全保险（分红型）",
        bracketSel: "年期/分档",
        bracketLowVal: "1",
        bracketHigVal: "1",
        accpeterSel: "不区分",
        accpeterNameSel: "姓名",
        accpeterVal: "",
        staffSel: "姓名",
        staffVal: "",
        // 列表数据
        tableData3: [{
          orderNumber:'orderNumber',
          company:'company',
          orderStatus:'orderStatus',
          policyHolder:'policyHolder',
          contractor:'contractor',
          contractorName:'contractorName',
          acceptedDate:'2019-08-01',
          effectiveDate:'2019-08-01',
          annualizedReturns:'annualizedReturns',
          insuranceCode:'insuranceCode',
          address:'address',
          fullName:'fullName',
          abbreviation:'abbreviation',
          recognizee:'recognizee',
          coverage:'coverage',
          unit:'unit',
          premium:'premium',
          contractingType:'contractingType'
        }],
        tableData3SelectedData:'',
        totalCost: 0,
        isSelectedItem: false
      };
    },
    methods: {
      handleToggleTab() {
        this.activeTab = "listTab"
      },
      change() {
        this.dialogFormVisible = false
      },
      showDialog() {
        this.dialogFormVisible = true
      },
      handleCurrentChange(val) {
        this.isSelectedItem = true
        this.tableData3SelectedData=val
        console.log(val)
      },
      companyTypeChange(val) {
        if (val == '保险公司') {
          this.$axios.get('http://localhost:9004/lifeInsurance/manage/getAllInsurCompanyList')
            .then(res => {
              this.companyOpt = []
              for (let data of res.data) {
                this.companyOpt.push({
                  value: data.companyId,
                  label: data.chineseSimpleName
                })
              }
            })
            .catch(err => console.log(err))
        } else {
          this.$axios.post('http://localhost:9004/lifeInsurance/manage/getInsurCompanyListByType', qs.stringify({
              companyType: val
            }))
            .then(res => {
              this.companyOpt = []
              for (let data of res.data) {
                this.companyOpt.push({
                  value: data.companyId,
                  label: data.chineseSimpleName
                })
              }
            })
            .catch(err => console.log(err))
        }
      },
      insuranceLook() {
        if (this.isSelectedItem) {
          this.$router.push({
            name: 'insuranceLook',
            params:{
              company:this.tableData3SelectedData.company,
              date1:this.tableData3SelectedData.acceptedDate,
              bankCharge:'',
              chargeType:'',
              notKnow1:'',
              orderStatus:this.tableData3SelectedData.orderStatus,
              orderNumber:this.tableData3SelectedData.orderNumber,
              date2:this.tableData3SelectedData.effectiveDate
            }
          })
        }
      }
    },
    components: {
      Dialog
    },
    created() {
      this.$axios.post('http://localhost:9004/policy/state/list')
        .then(res => {
          for (let data of res.data) {
            this.statusOpt = []
            this.statusOpt.push({
              value: data.id,
              label: data.name
            })
          }
        })
        .catch(err => console.log(err)),
        this.$axios.get('http://localhost:9004/lifeInsurance/manage/getAllInsurCompanyList')
        .then(res => {
          this.companyOpt = []
          for (let data of res.data) {
            this.companyOpt.push({
              value: data.companyId,
              label: data.companyName
            })
          }
        })
        .catch(err => console.log(err))
      // this.$axios.post('http://localhost:9004/orderAccept/list', qs.stringify({
      //   pageSize: 20,
      //   pageNum: 1
      // }))
      // .then(res => console.log(res))
      // .catch(err => console.log(err))
    }
  };

</script>

<style scoped lang="scss">
  .el-tabs {
    height: calc(100vh - 40px);
  }

  .el-select {
    margin: 0 10px 0 0;
  }

  .title {
    display: inline-block;
    width: 15%;
    text-align: right;
    margin-right: 5px;
  }

  .row {
    margin-bottom: 10px;
  }

  .el-date-picker {
    margin-top: 10px;
  }

  .tabsPage {
    height: fit-content;
  }

  fieldset {
    padding: 0.35em 0.625em 0.75em;
    margin: 0 2px;
    border: 1px solid silver;

    .wrapper {
      margin-left: -8.75px;
    }
  }

  legend {
    padding: 0.5em;
    border: 0;
    width: auto;
    color: blue;
  }

  .button-wrapper {
    margin-top: 10px;
    text-align: center;
    margin-left: -100px;
  }

  .tabContent {
    position: relative;
    text-align: left;
    padding: 0 30px;
    // height: 100%;
    // overflow: scroll;
  }

  .oprateBtn {
    //    position: fixed;;
    //    bottom:25px;
    //    right:45px;
    float: right;
    margin-top: 20px;
  }

  .totalCost {
    float: right;
    height: 30px;
  }

  .inBtn {
    position: fixed;
    left: 275px;
    bottom: 25px;
  }

</style>
