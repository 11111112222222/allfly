<template>
  <div class="page">
    <el-tabs type="border-card">
      <el-tab-pane label="保单基本信息" name="basic">
        <div class="pane-body">
          <el-form label-position="top">
            <el-row :gutter="20">
              <el-col :span="4">
                <el-form-item label="保险公司">
                  <el-select v-model="form.company" placeholder="请选择保险公司">
                    <el-option label="阳光人寿(寿)" value="sinosig"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="受理日期">
                  <el-date-picker v-model="form.date" type="date" placeholder="请选择日期"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="交费类别">
                  <el-select v-model="form.paymentCategory" placeholder="请选择交费类别">
                    <el-option label="银行划账" value="bank"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="交费方式">
                  <el-select v-model="form.paymentMethod" placeholder="请选择交费方式">
                    <el-option label="年交" value="year"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="相关单据及号码">
                  <el-select v-model="form.invoice" placeholder="请选择单据">
                    <el-option label="投保单号码" value="insuranceSlip"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="号码">
                  <el-input v-model="form.invoiceNumber" clearable></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="4">
                <el-form-item label="保单状态">
                  <el-select v-model="form.state" placeholder="请选择保单状态">
                    <el-option label="承保件" value="underWriting"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="保单号码">
                  <el-input v-model="form.policyNumber" clearable></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="保单生效日期">
                  <el-date-picker v-model="form.effectiveDate" type="date" placeholder="请选择生效日期"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="保单签发日期">
                  <el-date-picker v-model="form.issuingDate" type="date" placeholder="请选择签发日期"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="保单回执/交回日期">
                  <el-select v-model="form.receipt" placeholder="请选择保单回执/交回">
                    <el-option label="已交" value="submitted"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="日期">
                  <el-date-picker v-model="form.receiptDate" type="date" placeholder="请选择日期"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="投保险种信息" name="type">
        <el-table :data="typeTableData" border highlight-current-row >
            <el-table-column prop="no" label="序号"></el-table-column>
            <el-table-column prop="code" label="险种代码"></el-table-column>
            <el-table-column prop="receiptDate" label="受理日期"></el-table-column>
            <el-table-column prop="effectiveDate" label="生效日期"></el-table-column>
            <el-table-column prop="name" label="险种名称-简称"></el-table-column>
            <el-table-column prop="recognizee" label="被保人"></el-table-column>
            <el-table-column prop="mcorc" label="主附"></el-table-column>
            <el-table-column prop="period" label="分期/年档"></el-table-column>
            <el-table-column prop="coverage" label="保额"></el-table-column>
            <el-table-column prop="unit" label="单位"></el-table-column>
            <el-table-column prop="premium" label="险种保费"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="保单记录属性" name="attribute">
          <el-table :data="attributeTableData" border highlight-current-row >
              <el-table-column prop="no" label="序号"></el-table-column>
              <el-table-column prop="type" label="类别"></el-table-column>
              <el-table-column prop="attribute" label="记录属性"></el-table-column>
              <el-table-column prop="content" label="属性内容"></el-table-column>
              <el-table-column prop="startDate" label="有效期起"></el-table-column>
              <el-table-column prop="endDate" label="有效期止"></el-table-column>
              <el-table-column prop="attachment" label="附件"></el-table-column>
              <el-table-column prop="format" label="附件格式"></el-table-column>
              <el-table-column prop="size" label="大小(KB)"></el-table-column>
          </el-table>
      </el-tab-pane>
      <el-tab-pane label="保单交费记录" name="record">
          <el-button @click="open">open</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          company: '',
          date: '',
          paymentCategory: '',
          paymentMethod: '',
          invoice: '',
          invoiceNumber: '',
          state: '',
          policyNumber: '',
          effectiveDate: '',
          issuingDate: '',
          receipt: '',
          receiptDate: ''
        },
        typeTableData: [{
            no:'1',
            code:'ADAA',
            receiptDate:'2010-03-02',
            effectiveDate:'2010-03-07',
            name:'鸿福齐添',
            recognizee:'刘若英',
            mcorc:'主约',
            period:'20',
            coverage:'55.00',
            unit:'万元',
            premium:'20,000.00'
        },{
            no:'2',
            code:'ADDD',
            receiptDate:'2010-03-02',
            effectiveDate:'2010-03-07',
            name:'附加鸿福齐添',
            recognizee:'刘若英',
            mcorc:'附约',
            period:'20',
            coverage:'40.00',
            unit:'万元',
            premium:'3,000.00'
        }],
        attributeTableData:[{
            no:'1',
            type:'单证信息',
            attribute:'保单',
            content:'刘若英的保单',
            startDate:'2011-03-10',
            endDate:'',
            attachment:'',
            format:'.jpg',
            size:'272.17KB'
        }]
      }
    },
    methods:{
        open(){
            console.log(1);
        },
        open(){
            console.log(2);
        },
        open(){
            console.log(3);
        }
    }
  }

</script>
<style scoped>
  .page {
    padding: 20px;
  }

</style>
