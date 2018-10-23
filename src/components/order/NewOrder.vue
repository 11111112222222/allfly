<template>
 <div class="page">
    <header>
    <dl>
      <dt>新契约受理报表</dt>
      <dd>可以按受理的保险公司、承拨的分支单位范围、特定期间内、保单状态、回执等来整理首年度业绩报表，并可以选择多种导出方式</dd>
    </dl>
    </header>
    <form>
    <fieldset>
        <legend>受理的保险公司</legend>
        <ul>
            <li><el-radio v-model="radio" label="1">不区分</el-radio></li>
            <li><el-radio v-model="radio" label="2">指定的保险公司</el-radio>
              <el-select v-model="insurCompany" size="mini" placeholder="指定保险公司">
                <el-option
                v-for="item in options1"
                :key="item.value"
                :value="item.value">
                </el-option>
                </el-select>
               <el-select v-model="selectedComp" size="mini" placeholder="请选择">
                <el-option
                v-for="item in options2"
                :key="item.value"
                :value="item.value">
                </el-option>
                </el-select> 
                </li>
            <li><el-radio v-model="radio" label="3">所有寿险公司</el-radio></li>
            <li><el-radio v-model="radio" label="4">所有财险公司</el-radio></li>
        </ul>
    </fieldset>
    <fieldset>
        <legend>日期区间</legend>
        <div>
        <el-radio v-model="time" label="5">受理日期</el-radio>
        <el-radio v-model="time" label="6">受理月份</el-radio>
        <el-radio v-model="time" label="7">计绩月份</el-radio>
        </div>
        <div>
          <el-date-picker
            v-model="value7"
            type="daterange"
            align="right"
            size="mini"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions2">
          </el-date-picker>
        </div>
    </fieldset>
    <fieldset>
        <legend>对象范围</legend>
        <ul>
          <li><el-radio v-model="random" label="1">机构</el-radio>
          <el-select
            v-model="value11"
            multiple
            collapse-tags
            style="margin-left: 20px;"
            size="mini"
            placeholder="请选择">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :value="item.value">
            </el-option>
          </el-select>
          </li>
          <li><el-radio v-model="random" label="2">范围</el-radio>
          <el-select v-model="valuerandom" size="mini" style="margin-left: 20px;" placeholder="请选择">
            <el-option
              v-for="item in options4"
              :key="item.value"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input v-model="input" size="mini" placeholder="请输入内容" style="width:20%"></el-input>
          <el-button size="mini">...</el-button>
          </li>
        </ul>
    </fieldset>
    <fieldset>
        <legend>保单状态、回执</legend>
        <span>
          <el-select
          v-model="value12"
          multiple
          collapse-tags
          size="mini"
          style="margin-left: 20px;"
          placeholder="请选择">
          <el-option
            v-for="item in options5"
            :key="item.value"
            :value="item.value">
          </el-option>
        </el-select>
        </span>
        <span>回执</span>
        <span>
          <el-select
            v-model="value13"
            multiple
            collapse-tags
            size="mini"
            placeholder="请选择">
            <el-option
              v-for="item in options6"
              :key="item.value"
              :value="item.value">
            </el-option>
          </el-select>
        </span>
        <span><el-checkbox v-model="checked"></el-checkbox></span>
        <span>
          <el-date-picker
          v-model="value6"
          type="daterange"
          size="mini"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        </span>
    </fieldset>
    <div class="subutton">
      <el-button type="primary">报表数据查询预览</el-button>
     </div>
    </form>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
    radio: '1',
    options1: [{
          value: '选项1',
        }, {
          value: '选项2',
        }, {
          value: '选项3',
        }, {
          value: '选项4',
        }, {
          value: '选项5',
        }],
    insurCompany: '',
    options2: [{
      value: '选项1',
    }, {
      value: '选项2',
    }, {
      value: '选项3',
    }, {
      value: '选项4',
    }, {
      value: '选项5',
    }],
    selectedComp:'',
    time: '2',
    pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
    },
    value7: '',
    random:'1',
    options3: [{
      value: '选项1',
    }, {
      value: '选项2',
    }, {
      value: '选项3',
    }, {
      value: '选项4',
    }, {
      value: '选项5',
    }],
    value11: [],
    options4: [{
      value: '选项1',
    }, {
      value: '选项2',
    }],
    valuerandom: '',
    input: '',
    options5: [{
      value: '选项1',
    }, {
      value: '选项2',
    }],
    value12: [],
    options6: [{
      value: '选项1',
    }, {
      value: '选项2',
    },{
      value: '选项2',
    }],
    value13: [],
    checked: false,
    value6:''
 }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
dt{
  font-size:1.5em;
  // font-weight:bold;
  color:#409EFF;
  // border-bottom:1px solid #ccc;
}
dd{
  margin:10px 0px 10px 20px;
}
fieldset {
    padding: .35em .625em .75em;
    margin: 0 2px;
    border: 1px solid silver;
}
legend {
    padding: .5em;
    border: 0;
    width: auto;
}
fieldset:first-child li,fieldset:nth-child(2) div,fieldset:nth-child(3) li{
  height:30px;
  margin-top:2px;
  line-height: 30px;
}
.subutton{
  margin-top:5px;
}
</style>
