<!-- 账号新增 -->
<template>
  <div
    class="page"
    style="height:100%;position:relative;"
  >
    <header>
      <div class="title">
        <span @click="goBack"><i class="el-icon-back"></i></span>
        <span>账号新增</span>
      </div>
    </header>
    <section>

      <div>
        <el-form
          ref="form"
          :model="form"
          label-width="100px"
          size="mini"
          style="margin:20px"
        >
          <el-form-item label="用户类型">
            <el-select
              size="mini"
              style="width:20%"
              v-model="form.name"
              placeholder="请选择活动区域"
            >
              <el-option
                label="区域一"
                value="shanghai"
              ></el-option>
              <el-option
                label="区域二"
                value="beijing"
              ></el-option>
            </el-select>
            <el-button
              type="primary"
              size="mini"
            >高级</el-button>
          </el-form-item>
          <el-form-item label="登入名称">
            <el-input
              v-model="form.name"
              size="mini"
              style="width:20%"
            ></el-input>
            <el-button
              type="primary"
              size="mini"
            >检查</el-button>
          </el-form-item>
          <el-form-item label="用户真实姓名">
            <el-input
              v-model="form.name"
              size="mini"
              style="width:20%"
            ></el-input>

          </el-form-item>
          <el-form-item label="电子邮箱">
            <el-input
              v-model="form.name"
              size="mini"
              style="width:30%"
            ></el-input>

          </el-form-item>
          <fieldset>
            <legend>密码</legend>
            <el-form-item label="登录密码">
              <el-input
                v-model="form.name"
                size="mini"
                style="width:30%"
              ></el-input>
              <el-button
                type="primary"
                size="mini"
              >重置</el-button>
            </el-form-item>
            <el-form-item label="确认登录密码">
              <el-input
                v-model="form.name"
                size="mini"
                style="width:30%"
              ></el-input>

            </el-form-item>
          </fieldset>
          <!-- <el-form-item label="即时配送">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox
                label="美食/餐厅线上活动"
                name="type"
              ></el-checkbox>
              <el-checkbox
                label="地推活动"
                name="type"
              ></el-checkbox>
              <el-checkbox
                label="线下主题活动"
                name="type"
              ></el-checkbox>
              <el-checkbox
                label="单纯品牌曝光"
                name="type"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item> -->

          <el-form-item label="授予权限列表" style="color:blue;">
            <!-- <el-input
              type="textarea"
              :rows="5"
              v-model="form.desc"
            ></el-input> -->
            <el-transfer
              filterable
              :filter-method="filterMethod"
              filter-placeholder="请输入城市拼音"
              v-model="form.name"
              :data="data2"
            >
            </el-transfer>
          </el-form-item>
          <fieldset>
            <legend>状态</legend>
            <el-form-item label="账号起止时间">
              <el-col :span="11">
                <el-date-picker
                  size="mini"
                  type="date"
                  placeholder="选择日期"
                  v-model="form.name"
                ></el-date-picker>
              </el-col>

            </el-form-item>
            <el-form-item label="账号状态">
              <el-select
                size="mini"
                style="width:20%"
                v-model="form.name"
                placeholder="请选择活动区域"
              >
                <el-option
                  label="区域一"
                  value="shanghai"
                ></el-option>
                <el-option
                  label="区域二"
                  value="beijing"
                ></el-option>
              </el-select>

            </el-form-item>
          </fieldset>
          <el-form-item>
            <el-button
              type="primary"
              @click="add(form)"
              size="mini"
              style="width:20%"
            >立即创建</el-button>
            <el-button  size="mini">取消</el-button>
            <el-button  type="primary"  size="mini" style="width:20%">应用</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- <div class="oprateBtn">
        <el-button
          type="primary"
          size="mini"
          id="confirmBtn"
        >确定</el-button>
        <el-button
          type="danger"
          size="mini"
          @click="goBack()"
        >取消</el-button>
      </div> -->



    </section>
  </div>
</template>


<script type="text/ecmascript-6">
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  data() {
    const generateData2 = _ => {
      const data = [];
      const cities = ["上海", "北京", "广州", "深圳", "南京", "西安", "成都"];
      const pinyin = [
        "shanghai",
        "beijing",
        "guangzhou",
        "shenzhen",
        "nanjing",
        "xian",
        "chengdu"
      ];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return data;
    };
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      data2: generateData2(),
      value2: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      },
      
      orderNum: "",
      compOpt: [
        {
          value: "长安财"
        },
        {
          value: "亚太财"
        },
        {
          value: "阳光财"
        }
      ],
      insurComp: "阳光财",
      taskType: "查勘定损",
      taskOpt: [
        {
          value: "查勘定损"
        },
        {
          value: "查勘"
        },
        {
          value: "单定损"
        }
      ],
      reportNum: "",
      reportDate: "",
      surveyAddr: "",
      surveyer: "",
      finalJudge: "未结案",
      finalOpt: [
        {
          value: "未结案"
        },
        {
          value: "已结案"
        }
      ],
      carNum: "",
      createPerson: "",
      insuranceder: "",
      claimProcess: "",
      insurComp2: "长安财",
      reportDate2: "",
      orderStatus: "正常",
      statusOpt: [
        {
          value: "正常"
        },
        {
          value: "销案有照片"
        },
        {
          value: "销案无照片"
        },
        {
          value: "拒赔"
        }
      ],
      handlePerson: "",
      jixiao: "",
      ggCost: "",
      openInvoice: false,
      handleProcess: "",
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
      finalMoney: "",
      openInvoice2: "",
      invoiceNum: "",
      invoiceMoney: "",
      getMoneyDate: "",
      getMoney: "",
      remark: ""
    };
  },
  
  components: {},
  mounted() {
    // this.fetch();
    console.log(this.form)
  },
   computed: {
    ...mapState(['tableData3']),
  },
  methods: {
    onSubmit() {
     
    },
    goBack() {
      history.go(-1);
      //this.$root.eventHub.$emit("sendOrderNum",this.orderNum)
    },
    fetch() {
      // this.orderNum=this.$route.query.orderNum;
      // console.log(this.orderNum)
    },
    beforeRemove(file) {
      console.log(file);
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleChange(file, fileList) {
      console.log(file, fileList);
      this.fileList = fileList.slice(-3);
    },
    add(value){
       console.log(value)
       this.$store.commit('ADD', value)
       this.form =  {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
       history.go(-1)
    }
    // ...mapMutations(['ADD']),
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.fetch();
    });
  }
};
</script>

<style scoped lang="scss">
header .title {
  width: 100%;
  height: 30px;
  background-color: #dddefe;
}

header span:first-child {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  margin-left: 10px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
section {
  // height:100%;
  //width:90%;
  position: absolute;
  top: 30px;
  bottom: 0px;
  left: 0;
  right: 0;
  overflow-y: scroll;
  padding: 0 45px;

  fieldset {
    padding: 20px 0 10px 10px;
    margin: 10px 0;
    // height: 90px;
    border: 1px solid #d6dbe7;

    .content {
      padding-left: 20px;

      .title {
        display: inline-block;
        width: 65px;
        text-align: right;
        padding-right: 5px;
      }
      .processBox {
        height: 80px;
        position: relative;

        .claimProcess {
          position: absolute;
          top: 0;
        }
        .processInput {
          position: absolute;
          top: 0;
          left: 74px;
        }
      }
    }
  }
  .oprateBtn {
    //    position: fixed;;
    //    bottom:25px;
    //    right:45px;
    float: right;
    margin: 10px 0;
    a {
      text-decoration: underline;
      color: blue;
      cursor: pointer;
      margin: 0 10px;
      &:hover {
        color: red;
      }
    }
    #confirmBtn {
      margin-left: 50px;
    }
  }
}
</style>
