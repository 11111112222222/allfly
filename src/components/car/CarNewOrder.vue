<template>
  <div class="page">
    <header>
      <dl>
        <dt>车险新契约受理报表</dt>
        <dd>可以按受理的保险公司、承揽的分支单位范围、特定期间内、保单状态、回执等来整理首年度业绩报表，并可以选择多种导出方式</dd>
      </dl>
    </header>
    <!-- onsubmit="return formValidator" -->
    <form action="" method="get">
      <fieldset>
        <legend>受理的保险公司</legend>
        <el-radio-group v-model="radio" @change='selectedRadio'>
          <ul>
            <li>
              <el-radio :label="'allComp'" class="elradio">不区分</el-radio>
            </li>
            <li>
              <el-radio :label="'selectedComp'" class="elradio">指定保险公司</el-radio>
              <el-select v-model="selectedComp" :disabled="compDisabled2" size="mini" style="margin-left: 10px;"
                placeholder="请选择">
                <el-option v-for="item in options2" :key="item.value" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
        </el-radio-group>
      </fieldset>
      <fieldset>
        <legend>日期区间</legend>
        <div>
          <el-radio-group v-model="time" @change='selectedTime'>
            <el-radio :label="'dealDate'">受理日期</el-radio>
            <el-radio :label="'effectiveDate'">生效日期</el-radio>
          </el-radio-group>
        </div>
        <div>
          <span>
            <el-date-picker v-model="selectedTime1" type="date" size="mini" placeholder="选择日期">
            </el-date-picker>
          </span>
          <span>至</span>
          <span>
            <el-date-picker v-model="selectedTime2" type="date" size="mini" placeholder="选择日期">
            </el-date-picker>
          </span>
        </div>
      </fieldset>
      <fieldset>
        <legend>对象范围</legend>
        <el-radio-group v-model="random" @change='selectedRandom'>
          <ul>
            <li>
              <el-radio :label="'institute'" class="elradio">机构</el-radio>
              <el-select v-model="selectedInstit" multiple collapse-tags style="margin-left: 10px;" size="mini"
                @change="handleSelectChange" :disabled="insitDisabled">
                <el-option v-for="item in options3" :key="item.value" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <el-radio :label="'fanchou'" class="elradio">承揽人</el-radio>
              <el-input v-model="input" :disabled="fcDisabled2" size="mini" placeholder="请输入内容"
                style="width:200px;margin-left: 10px;"></el-input>
              <!-- <el-button size="mini" style="margin-left: 5px;" type="text" @click="dialogFormVisible = true">...</el-button> -->
              <el-button @click="outerVisible = true" style="margin-left: 5px;" size="mini">...</el-button>
              <el-dialog title="位置" :visible.sync="outerVisible" :before-close="handleClose" @close='isClose'
                width="60%">
                <el-dialog width="30%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body>
                </el-dialog>
                <span>选择查找位置：</span>
                <el-input v-model="addrposit" size="mini" style="width:30%;margin-top:-20px;"></el-input>
                <el-button type="primary" @click="innerVisible = true" size="mini">位置</el-button>
                <div class="find">
                  <div class="findleft">
                    <el-tabs type="border-card">
                      <el-tab-pane label="一般查询">
                        <el-form ref="form" :model="form" label-width="80px">
                          <el-form-item label="姓名" class="elformitem">
                            <el-input v-model="form.name" size="mini"></el-input>
                          </el-form-item>
                          <el-form-item label="员工编号" class="elformitem">
                            <el-input v-model="form.bianhao" size="mini"></el-input>
                          </el-form-item>
                          <el-form-item label="身份证号" class="elformitem">
                            <el-input v-model="form.idcard" size="mini"></el-input>
                          </el-form-item>
                          <el-form-item>
                            <el-button type="primary" @click="onSubmit" size="mini">立即查找</el-button>
                            <el-button size="mini">停止</el-button>
                          </el-form-item>
                        </el-form>
                      </el-tab-pane>
                      <el-tab-pane label="高级查询">高级查询</el-tab-pane>
                    </el-tabs>
                  </div>
                  <div class="findright">
                    <el-table :data="tableData" border style="width: 100%" size="mini" height="300">
                      <el-table-column prop="idname" label="员工码" width="100">
                      </el-table-column>
                      <el-table-column prop="name" label="名称" width="100">
                      </el-table-column>
                      <el-table-column prop="province" label="分支机构" width="100">
                      </el-table-column>
                      <el-table-column prop="bumen" label="部门" width="100">
                      </el-table-column>
                      <el-table-column prop="address" label="查找位置" width="200">
                      </el-table-column>
                      <el-table-column prop="zj" label="职级" width="100">
                      </el-table-column>
                      <el-table-column prop="zjStatus" label="职级状态" width="100">
                      </el-table-column>
                    </el-table>
                  </div>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="outerVisible = false" size="mini">取 消</el-button>
                  <el-button type="primary" @click="outerVisible = false" size="mini">确 定</el-button>
                </span>
              </el-dialog>
            </li>
          </ul>
        </el-radio-group>
      </fieldset>
      <fieldset>
        <legend>保单状态</legend>
        <span>
          <el-select v-model="huizhidan" collapse-tags size="mini" placeholder="请选择">
            <el-option v-for="item in options6" :key="item.value" :value="item.value">
            </el-option>
          </el-select>
        </span>
      </fieldset>
    </form>
    <div class="subutton">
      <!-- <input type="submit" id="btn" value="报表数据查询预览" @click="linkToOrderData"/> -->
      <el-button type="primary" size="mini" @click="linkToOrderData">报表数据查询预览</el-button>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        radio: 'allComp',
        compDisabled1: true,
        compDisabled2: true,
        insurCompany: '指定保险公司',
        options2: [{
          value: '工银安盛(产)',
        }, {
          value: '光大永明(产)',
        }, {
          value: '和谐健康(产)',
        }, {
          value: '恒大人寿(产)',
        }],
        selectedComp: '',
        time: 'dealDate',
        selectedTime1: '',
        selectedTime2: '',
        showDate: true,
        random: 'institute',
        options3: [{
          value: '不区分',
        }, {
          value: '恩施分公司',
        }, {
          value: '广西分公司',
        }, {
          value: '湖南分公司',
        }, {
          value: '江苏分公司',
        }],
        selectedInstit: ['不区分'],
        insitDisabled: false,
        fcDisabled1: true,
        fcDisabled2: true,
        input: '',
        // dialogVisible: false,
        outerVisible: false,
        innerVisible: false,
        addrposit: '',
        form: {
          name: '',
          idcard: '',
          bianhao: ''
        },
        tableData: [],
        insureDan: ['不区分'],
        huizhidan: '不区分',
        options6: [{
          value: '不区分',
        }, {
          value: '新保',
        }, {
          value: '续保',
        }],
        value6: '',
        findOrderItem: '我是新契约数据报表查找的数据'
      }
    },
    methods: {
      selectedRadio(value) {
        //如果选择的是第二项选择保险公司，则根据选择的保险公司选择向后台发送消息，
        //后台再根据选择的保险公司发送第二个select展示什么数据
        if (value !== 'selectedComp') {
          this.compDisabled1 = true;
          this.compDisabled2 = true;
          this.insurCompany = '指定保险公司';
          this.selectedComp = '';
        } else if (value === 'selectedComp') {
          this.compDisabled1 = false;
          this.compDisabled2 = false;
        }
      },
      selectedTime(value) {
        //  if(value==='dealDate'){
        //     this.showDate=true;
        //  }else if(value==='effectiveDate'||value==='countMonth'){
        //     this.showDate=false;
        //  }
      },
      selectedRandom(value) {
        if (value === 'institute') {
          this.insitDisabled = false;
          this.fcDisabled1 = true;
          this.fcDisabled2 = true;
        } else if (value === 'fanchou') {
          this.insitDisabled = true;
          this.fcDisabled1 = false;
          this.fcDisabled2 = false;
          this.selectedInstit = ['不区分'];
        }
      },
      handleSelectChange(value) {
        if (value[value.length - 1] == "不区分") {
          value.splice(0, value.length - 1)
        } else if (value.indexOf("不区分") != -1 && value[value.length - 1] != "不区分") {
          value.splice(value.indexOf("不区分"), 1)
        }
      },
      linkToOrderData() {
        this.$router.push({
          path: "/user/carNewOrderData",
          query: {
            findOrderItem: this.findOrderItem
          }
        })
      },
      onSubmit() {
        console.log('submit!');
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      isClose() {
        console.log('是否要关闭弹框')
      }
      // formValidator(){
      //   return true;
      // }

    },
    components: {

    }
  }

</script>

<style scoped lang="scss">
  .page {
    padding: 10px 30px 0 30px;
    height: 100%;
    overflow-y: scroll;
  }

  dt {
    font-size: 1.5em;
    color: #409EFF;
  }

  dd {
    margin: 10px 0px 5px 20px;
  }

  fieldset {
    padding: .35em .625em .75em;
    margin: 0 2px;
    border: 1px solid #d4d8e4;
  }

  legend {
    padding: .5em;
    border: 0;
    width: auto;
  }

  fieldset:first-child ul li,
  fieldset:nth-child(2) div,
  fieldset:nth-child(3) li {
    height: 30px;
    margin-top: 2px;
    line-height: 30px;
    text-align: middle;
  }

  .elradio {
    height: 28px;
    line-height: 28px;
  }

  fieldset:nth-child(4) span {
    margin-left: 10px;
  }

  .subutton {
    margin-top: 10px;
  }

  #btn {
    margin-top: 20px;
    height: 35px;
    background-color: #409EFF;
    border: none;
    border-radius: 5px;
    color: #fff;
    padding: 0 5px;
  }

  .find {
    margin-top: 5px;
    display: flex;
    flex-flow: row nowrap;
  }

  .elformitem {
    margin-bottom: 0px;
  }

  .findleft {
    width: 40%;
  }

  .findright {
    width: 60%;
    padding: 0 5px 0 10px;
  }

</style>
