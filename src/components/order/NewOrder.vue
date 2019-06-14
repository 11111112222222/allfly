<template>
 <div class="page">
    <header>
      <dl>
        <dt>新契约受理报表</dt>
        <dd>可以按受理的保险公司、承拨的分支单位范围、特定期间内、保单状态、回执等来整理首年度业绩报表，并可以选择多种导出方式</dd>
      </dl>
    </header>
    <!-- onsubmit="return formValidator" -->
    <form  action="" method="">
    <fieldset>
        <legend>受理的保险公司</legend>
        <el-radio-group v-model="radio" @change='selectedRadio'> 
          <ul>
              <li><el-radio  :label="'allComp'" class="elradio">不区分</el-radio></li>
              <li><el-radio  :label="'selectedComp'" class="elradio">指定保险公司</el-radio>
                <el-select v-model="insurCompany"  :disabled="compDisabled1" style="margin-left: 10px;" size="mini" >
                  <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :value="item.value">
                  </el-option>
                  </el-select>&nbsp;&nbsp;
                
                    <el-select v-model="selectedComp" multiple collapse-tags style="margin-left: 10px;" size="mini"
                    @change="SelectComChange"
                    :disabled="compDisabled2"
                    >
                    <el-option
                      v-for="item in options2"
                      :key="item.value"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  </li>
              <li><el-radio  :label="'allLifeComp'" class="elradio">所有寿险公司</el-radio></li>
              <li><el-radio  :label="'allMoneyComp'" class="elradio">所有财险公司</el-radio></li>
          </ul>
        </el-radio-group> 
    </fieldset>
    <fieldset>
        <legend>日期区间</legend>
        <div>
        <el-radio-group v-model="time" @change='selectedTime'>
          <el-radio :label="'dealDate'">受理日期</el-radio>
          <el-radio :label="'dealMonth'">受理月份</el-radio>
          <el-radio :label="'countMonth'">计绩月份</el-radio>
        </el-radio-group>
        </div>
        <div v-show="showDate">
          <span>
            <el-date-picker
            v-model="selectedTime1"
            @change="saveTime1"
            type="date"
            size="mini"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            placeholder="选择日期">
          </el-date-picker>
          </span>
          <span>至</span>
          <span>
            <el-date-picker
            v-model="selectedTime2"
            @change="saveTime2"
            type="date"
            size="mini"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            placeholder="选择日期">
          </el-date-picker>
          </span>  
        </div>
        <div v-show="!showDate">
          <span>
            <el-date-picker
              v-model="selectedTime1"
              @change="saveTime1"
              type="month"
              size="mini"
              format="yyyy 年 MM 月"
              value-format="yyyy-MM"
              placeholder="选择月">
            </el-date-picker>
          </span>
          <span>至</span>
          <span>
            <el-date-picker
              v-model="selectedTime2"
              @change="saveTime2"
              type="month"
              size="mini"
              format="yyyy 年 MM 月"
              value-format="yyyy-MM"
              placeholder="选择月">
            </el-date-picker>
          </span>  
        </div>
    </fieldset>
    <fieldset>
        <legend>对象范围</legend>
        <el-radio-group v-model="random" @change='selectedRandom' >
        <ul>
          <li><el-radio  :label="'institute'" class="elradio">机构</el-radio>
          <el-select
            v-model="selectedInstit"
            multiple
            collapse-tags
            style="margin-left: 10px;"
            size="mini"
            @change="SelectJGChange"
            :disabled="insitDisabled"
            >
            <el-option
              v-for="item in options3"
              :key="item.value"
              :value="item.value">
            </el-option>
          </el-select>
          </li>
          <li><el-radio :label="'fanchou'" class="elradio">范畴</el-radio>
          <el-select v-model="valuerandom" @change='SelectFCChange' :disabled="fcDisabled1" size="mini" style="margin-left: 10px;">
            <el-option
              v-for="item in options4"
              :key="item.value"
              :value="item.value">
            </el-option>
          </el-select>&nbsp;&nbsp;
          <el-input v-model="input" :disabled="fcDisabled2" size="mini" placeholder="请输入内容" style="width:30%;margin-left: 10px;"></el-input>
          <!-- <el-button size="mini" style="margin-left: 5px;" type="text" @click="dialogFormVisible = true">...</el-button> -->
          <el-button  @click="dialogVisible = true" style="margin-left: 5px;" size="mini">...</el-button>
           <SearchPerson v-if="dialogVisible" :visible.sync="dialogVisible" @selectPerson="selectPerson"></SearchPerson>
          </li>
        </ul>
        </el-radio-group>
    </fieldset>
    <fieldset>
        <legend>保单状态、回执</legend>
        <span>
          <el-select
          v-model="insureDan"
          multiple
          collapse-tags
          size="mini"
          @change="SelectOrderChange"
          style="margin-left: 10px;"
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
            v-model="huizhidan"
            @change="SelectOrderChange"
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
      <el-button @click="linkToOrderData" size="mini" type="primary">报表数据查询预览</el-button>
      <!-- <input type="text" id="btn" value="报表数据查询预览" @click="linkToOrderData"/> -->
     </div>
    </form>
    
 </div>
</template>

<script type="text/ecmascript-6">
import SearchPerson from "../humanResource/SearchPerson.vue"
export default {
components: { SearchPerson},
 data() {
 return {
    radio:'allComp',
    compDisabled1:true,
    compDisabled2:true,
    options1: [{
          value: '指定保险公司',
        }, {
          value: '寿险公司',
        }, {
          value: '产险公司',
        }],
    insurCompany:'指定保险公司',
    options2: [{
      value: '不区分',
    }, {
      value: '工银安盛(寿)',
    }, {
      value: '光大永明(寿)',
    }, {
      value: '和谐健康(产)',
    }, {
      value: '恒大人寿(产)',
    }],
    selectedComp:'',
    time: 'dealDate',
    selectedTime1: '',
    selectedTime2: '',
    showDate:true,
    random:'institute',
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
    selectedInstit:['不区分'],
    insitDisabled:false,
    fcDisabled1:true,
    fcDisabled2:true,
    options4: [{
      value: '个人',
    }, {
      value: '所辖团队',
    }],
    valuerandom: '个人',
    input: '',
    dialogVisible: false,
     gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
    addrposit:'',
    form:{
      name:'',
      idcard:'',
      bianhao:''
    },
    tableData: [],
    // tableData: [{
    //       idname: '2016-05-03',
    //       name: '王小虎',
    //       province: '上海',
    //       bumen: '普陀区',
    //       address: '上海市普陀区金沙江路 1518 弄',
    //       zj: 200333,
    //       zjStatus:'在职'
    //     },{
    //       idname: '2016-05-03',
    //       name: '王小虎',
    //       province: '上海',
    //       bumen: '普陀区',
    //       address: '上海市普陀区金沙江路 1518 弄',
    //       zj: 200333,
    //       zjStatus:'在职'
    //     }],
    insureDan: ['不区分'],
    options5: [{
      value: '不区分',
    },{
      value: '预收件',
    },{
      value: '承保件',
    },{
      value: '契撤件',
    },{
      value: '停效件',
    },{
      value: '失效件',
    }],
    huizhidan:'不区分',
    options6: [{
      value: '不区分',
    }, {
      value: '未交',
    }, {
      value: '已交',
    }],
    value6:'',
    findOrderItem:{company:'不区分',date:'受理日期：',random:'机构：',orderStaus:'保单状态、回执：全部'}
 }
 },
 methods:{
   selectedRadio(value){
     //如果选择的是第二项选择保险公司，则根据选择的保险公司选择向后台发送消息，
     //后台再根据选择的保险公司发送第二个select展示什么数据
     if(value!=='selectedComp'){
        this.compDisabled1=true;
        this.compDisabled2=true;
        this.insurCompany='指定保险公司';
        this.selectedComp='';
     }else if(value==='selectedComp'){
        this.compDisabled1=false;
        this.compDisabled2=false;
        
     }
   },
    //处理传过去的保险公司
   SelectComChange(value){
      this.handleSelectChange(value);
        this.findOrderItem.company='指定保险公司：';
        for(var i=0,l=this.selectedComp.length;i<l;i++){
          if(i==l-1){
            this.findOrderItem.company+=this.selectedComp[i]
          }else{
            this.findOrderItem.company+=this.selectedComp[i]+','
          }
        }
   },
   selectedTime(value){
     if(value==='dealDate'){
        this.showDate=true;
        this.findOrderItem.date='受理日期：';
     }else if(value==='dealMonth'){
        this.showDate=false;
        this.findOrderItem.date='受理月份：';
     }else if(value==='countMonth'){
        this.showDate=false;
        this.findOrderItem.date='绩效月份：';
     }
   },
   saveTime1(){
      this.findOrderItem.date+=this.selectedTime1;
   },
   saveTime2(){
      this.findOrderItem.date+='至'+this.selectedTime2;
   },
   selectedRandom(value){
     if(value==='institute'){
       this.insitDisabled=false;
       this.fcDisabled1=true;
       this.fcDisabled2=true;
       this.valuerandom='个人';
     }else if(value==='fanchou'){
       this.insitDisabled=true;
       this.fcDisabled1=false;
       this.fcDisabled2=false;
       this.selectedInstit=['不区分'];
       this.findOrderItem.random='范畴：个人';
     }
   },
   //处理传过去的对象范围
   SelectJGChange(value){
      this.handleSelectChange(value);
      this.findOrderItem.random='机构：'
      for(var i=0,l=this.selectedInstit.length;i<l;i++){
          if(i==l-1){
            this.findOrderItem.random+=this.selectedInstit[i]
          }else{
            this.findOrderItem.random+=this.selectedInstit[i]+','
          }
      }
   },
   SelectFCChange(){
     this.findOrderItem.random='范畴：';
     this.findOrderItem.random+=this.valuerandom;
   },
   SelectOrderChange(value){
     this.handleSelectChange(value);
     this.findOrderItem.orderStaus='保单状态:';
     for(var i=0,l=this.insureDan.length;i<l;i++){
          if(i==l-1){
            this.findOrderItem.orderStaus+=this.insureDan[i]+';'
          }else{
            this.findOrderItem.orderStaus+=this.insureDan[i]+','
          }
      }
      this.findOrderItem.orderStaus+='回执：';
      this.findOrderItem.orderStaus+=this.huizhidan;
   },
  //  saveHuiZhi(){
  //     this.findOrderItem.orderStaus=''
  //  },
   handleSelectChange(value){
    if(value[value.length-1]=="不区分"){
      value.splice(0,value.length-1)
    }else if(value.indexOf("不区分")!=-1&&value[value.length-1]!="不区分"){
      value.splice(value.indexOf("不区分"),1)
    }
    },
    linkToOrderData(){
      this.$router.push({path: '/user/neworderdata',query:{findOrderItem:this.findOrderItem}})
    },
    selectPerson(data){
       //将弹窗组件找到的人的信息带过来，复制给input的值
    },
    onSubmit() {
        console.log('submit!');
    },
  
 },
 
}
</script>

<style scoped lang="scss">
.page{
  padding: 10px 30px 0 30px;
  height:100%;
  overflow-y:scroll;
}
dt{
  font-size:1.5em;
  color:#409EFF;
}
dd{
  margin:10px 0px 5px 20px;
}
fieldset {
    padding: .35em .625em .75em;
    margin: 0 2px;
    border: 1px solid #ebeef5;
}
legend {
    padding: .5em;
    border: 0;
    width: auto;
}
fieldset:first-child ul li,fieldset:nth-child(2) div,fieldset:nth-child(3) li{
  height:30px;
  margin-top:2px;
  line-height: 30px;
  text-align:middle;
}
.elradio{
  height:28px;
  line-height:28px;
}
fieldset:nth-child(4) span{
  margin-left:10px;
}
.subutton{
  margin:20px 0px;
}

.find{
  margin-top:5px;
  display: flex;
  flex-flow:row nowrap;
}
.elformitem{
  margin-bottom:0px;
}
.findleft{
  width:40%;
}
.findright{
  width:60%;
  padding:0 5px 0 10px;
}
.el-dialog__body{
  padding:10px !important;
}

</style>
