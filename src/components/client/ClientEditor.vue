<template>
 <div class="page" style="height:100%;position:relative;">
    <header>
        <div class="headerTitle">
            <span @click="goBack"><i class="el-icon-back"></i></span> 
            <span>{{headerTitle}}</span>
        </div>
    </header>
    <section>
        <el-tabs type="border-card" v-model="activeTab" style="height:90%;overflow-y:auto;">
            <el-tab-pane label="基本信息" name="basicTab">
                <div class="tabContent">
                    <el-row :gutter="10">
                    <el-col :span="4">
                        <!-- <el-card shadow="never" style="position:relative;"> -->
                            <div class="imgDiv">
                                <!-- <img src="" alt="" class="clientImg"> -->
                                <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                                <el-button type="primary" size="mini" id="bodyBtn"  @click="dialogVisible = true">身材</el-button>
                                <el-dialog
                                title="个人特征信息"
                                :visible.sync="dialogVisible"
                                width="30%">
                                <div class="bodyMsg">
                                    <div>
                                        <span>身高</span>
                                        <el-input v-model="height" size="mini" placeholder="0" style="width:100px;"></el-input>
                                        <span>CM</span>  
                                    </div>
                                    <div>
                                        <span>体重</span>
                                        <el-input v-model="weight" size="mini" placeholder="0" style="width:100px;"></el-input>
                                        <span>KG</span>  
                                    </div>
                                </div>
                                <span slot="footer" class="dialog-footer">
                                    <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
                                    <el-button size="mini" type="primary" @click="dialogVisible = false">确 定</el-button>
                                </span>
                                </el-dialog>
                            </div>
                        <!-- </el-card> -->
                    </el-col>
                    <el-col :span="20">
                        <table class="orderTable">
                            <tr>
                                <td>客户姓名</td>
                                <td>
                                    <el-input v-model="clientName" size="mini" placeholder="请输入姓名"  style="width:120px;"></el-input>  
                                    <el-select v-model="nameType" size="mini" style="width:120px;">
                                        <el-option
                                        v-for="item in nameOpt"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                                <td>客户类型</td>
                                <td>
                                    <el-select v-model="clientType" placeholder="请选择" size="mini">
                                        <el-option
                                        v-for="item in typeOpt"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <td>国籍/证件类型</td>
                                <td>
                                    <el-select v-model="country" placeholder="请选择" size="mini" style="width:120px;">
                                        <el-option
                                        v-for="item in countryOpt"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                    <el-select v-model="cardType" placeholder="请选择" size="mini" style="width:120px;">
                                        <el-option
                                        v-for="item in cardOpt"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                                <td>出生日期</td>
                                <td>
                                    <el-date-picker
                                    size="mini"
                                    v-model="birthDate"
                                    type="date"
                                    placeholder="选择日期"
                                    style="width:200px;">
                                    </el-date-picker>
                                </td>
                            </tr>
                            <tr>
                                 <td>证件号码</td>
                                 <td>
                                     <el-input v-model="cardNum" style="width:200px;" size="mini" placeholder="请输入内容"></el-input>
                                 </td>
                                 <td>性别/婚姻</td>
                                 <td>
                                     <el-select v-model="sexValue" placeholder="请选择" size="mini" style="width:120px;">
                                        <el-option
                                        v-for="item in sexOpt"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        >
                                        </el-option>
                                    </el-select>
                                    <el-select v-model="marryValue" placeholder="请选择" size="mini" style="width:120px;">
                                        <el-option
                                        v-for="item in marryOpt"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        >
                                        </el-option>
                                    </el-select>
                                </td>
                             </tr>
                        </table>
                    </el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col>
                         <table class="table1">
                             <tr>
                                 <td>手机</td>
                                 <td><el-input size="mini" v-model="mobilePhone"></el-input></td>
                                 <td>邮箱</td>
                                 <td><el-input size="mini"  v-model="eMail"></el-input></td>
                                 <td>座机电话</td>
                                 <td><el-input size="mini" v-model="telPhone"></el-input></td>
                             </tr>
                              <tr>
                                 <td>备用</td>
                                 <td colspan="5"><el-input style="width:100%;" size="mini" v-model="ready"></el-input></td>
                             </tr>
                             <tr>
                                 <td>家庭联系地址</td>
                                 <td colspan="3"><el-input v-model="familyAddr" style="width:100%;" size="mini" placeholder="请输入省市区等详细地址"></el-input></td>
                                 <td>邮编</td>
                                 <td><el-input  v-model="familyEmail" style="width:100%;" size="mini" placeholder="请输入内容"></el-input></td>
                             </tr>
                              <tr>
                                 <td>其他联系地址</td>
                                 <td colspan="3"><el-input  v-model="otherAddr" style="width:100%;" size="mini" placeholder="请输入省市区等详细地址"></el-input></td>
                                 <td>邮编</td>
                                 <td><el-input  v-model="otherEmail" style="width:100%;" size="mini" placeholder="请输入内容"></el-input></td>
                             </tr>
                              <tr>
                                 <td>首选联系方式</td>
                                 <td colspan="5">
                                     <el-select v-model="contactPhone" placeholder="请选择" size="mini">
                                        <el-option
                                        v-for="item in phoneOpt"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        >
                                        </el-option>
                                    </el-select>
                                    <el-select v-model="contactAddr" placeholder="请选择" size="mini" >
                                        <el-option
                                        v-for="item in addrOpt"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        >
                                        </el-option>
                                    </el-select>
                                 </td>
                             </tr>
                              <tr>
                                 <td>其他</td>
                                 <td colspan="5"><el-input v-model="otherMsg" style="width:100%;" size="mini"></el-input></td>
                             </tr>
                         </table>
                    </el-col>
                </el-row>
                </div>
            </el-tab-pane>
            <el-tab-pane label="单位信息" name="companyTab">
                <div class="tabContent">
                    <fieldset>
                        <legend>
                            所在单位
                        </legend>
                        <div>
                            <el-row :gutter="10" class="compRow">
                                <el-col :span="4" class="compCol1">
                                    单位名称
                                </el-col>
                                <el-col :span="20">
                                    <el-input v-model="companyName" style="width:90%;" size="mini" placeholder="请输入内容"></el-input>
                                </el-col>
                            </el-row>
                            <el-row :gutter="10" class="compRow">
                                <el-col :span="4" class="compCol1">
                                    联系电话
                                </el-col>
                                <el-col :span="8">
                                    <el-input v-model="companyTel" style="width:80%;" size="mini" placeholder="请输入内容"></el-input>
                                </el-col>
                                <el-col :span="4" class="compCol1">
                                    传真号码
                                </el-col>
                                <el-col :span="8">
                                    <el-input v-model="faxNum" style="width:80%;" size="mini" placeholder="请输入内容"></el-input>
                                </el-col>
                            </el-row>
                            <el-row :gutter="10" class="compRow">
                                <el-col :span="4" class="compCol1">
                                    法定代表
                                </el-col>
                                <el-col :span="8">
                                    <el-input v-model="legalPerson" style="width:80%;" size="mini" placeholder="请输入内容"></el-input>
                                </el-col>
                                <el-col :span="4" class="compCol1">
                                    单位税号
                                </el-col>
                                <el-col :span="8">
                                    <el-input v-model="taxNum" style="width:80%;" size="mini" placeholder="请输入内容"></el-input>
                                </el-col>
                            </el-row>
                            <el-row :gutter="10" class="compRow">
                                <el-col :span="4" class="compCol1">
                                    单位地址
                                </el-col>
                                <el-col :span="20">
                                    <el-input v-model="companyAddr" style="width:90%;" size="mini" placeholder="请输入省市区等详细地址"></el-input>
                                </el-col>
                            </el-row>
                        </div>
                    </fieldset>
                    <div class="career">
                        <el-row :gutter="10" class="compRow">
                            <el-col :span="4" class="compCol1">
                                职级名称
                            </el-col>
                            <el-col :span="8">
                                <el-input v-model="careerName" style="width:80%;" size="mini" placeholder="请输入内容"></el-input>
                            </el-col>
                            <el-col :span="4" class="compCol1">
                                联系电话
                            </el-col>
                            <el-col :span="8">
                                <el-input v-model="contactTel" style="width:80%;" size="mini" placeholder="请输入内容"></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10" class="compRow">
                            <el-col :span="4" class="compCol1">
                                职级内容
                            </el-col>
                            <el-col :span="8">
                                <el-input v-model="careerContent" style="width:80%;" size="mini" placeholder="请输入内容"></el-input>
                            </el-col>
                            <el-col :span="4" class="compCol1">
                                职业类别
                            </el-col>
                            <el-col :span="8">
                                <el-select v-model="careerType" placeholder="请选择" size="mini">
                                    <el-option
                                    v-for="item in careerTypeOpt"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10" class="compRow">
                            <el-col :span="4" class="compCol1">
                                年收入约
                            </el-col>
                            <el-col :span="8">
                                <el-select v-model="yearIncome" placeholder="请选择" size="mini">
                                    <el-option
                                    v-for="item in incomeOpt"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10" class="compRow">
                            <el-col :span="4" class="compCol1">
                                更新状态
                            </el-col>
                            <el-col :span="8">
                                <el-input v-model="updateStatus1" style="width:100px;" size="mini"></el-input>
                                <el-input v-model="updateStatus2" style="width:100px;" size="mini"></el-input>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="关联保单" name="relevanceTab">
                <div class="tabContent">
                    <el-table
                        class="table"
                        ref="recordTable"
                        size="mini"
                        border
                        height="780px"
                        :data="relevanceList"
                        highlight-current-row
                        @row-click="setOrderNum">
                        <el-table-column
                        type="index"
                        width="50">
                        </el-table-column>
                         <el-table-column
                        property="orderNum"
                        label="保险公司"
                        sortable :show-overflow-tooltip="true"
                        width="140">
                        </el-table-column>
                        <el-table-column
                        property="orderNum"
                        label="保单号码"
                        sortable :show-overflow-tooltip="true"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="投保人"
                        sortable :show-overflow-tooltip="true"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="保单生效日期"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="投保险种"
                        sortable :show-overflow-tooltip="true"
                        width="140">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="受益人"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                    </el-table>
                    <div style="margin-top:10px;">
                        <span>合计保费：</span><span>{{totalFee}}</span>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="亲朋好友" name="friendTab">
                <div class="tabContent">
                    <el-table
                        class="table"
                        ref="recordTable"
                        size="mini"
                        border
                        height="780px"
                        :data="friendList"
                        highlight-current-row
                        @row-click="setOrderNum">
                        <el-table-column
                        type="index"
                        width="50">
                        </el-table-column>
                        <el-table-column
                        property="orderNum"
                        label="客户姓名"
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
                        property="address"
                        label="联系电话"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                        property="orderNum"
                        label="出生日期"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="年龄"
                        sortable :show-overflow-tooltip="true"
                        width="80">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="证件号码"
                        sortable :show-overflow-tooltip="true"
                        width="130">
                        </el-table-column>
                         <el-table-column
                        property="name"
                        label="存在关系"
                        sortable :show-overflow-tooltip="true"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="关系说明"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                        label="操作"
                        width="100">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="deleteInfo(scope.$index,friendList)" type="danger" size="mini">移除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    <div class="oprateBtn">
                        <el-button type="primary" size="mini" @click="clientDialogVisible = true">新增关系人</el-button>
                    </div>
                    <el-dialog
                        title="新增关系客户"
                        :visible.sync="clientDialogVisible"
                        width="50%">
                        <div class="bodyMsg">
                            <div>
                                <div class="dialogtitle">客户姓名</div> 
                                <el-input v-model="dialogClientName" size="mini"  style="width:200px"></el-input>
                            </div>
                            <div>
                                <div class="dialogtitle">身份证号</div> 
                                <el-input v-model="dialogCardId" size="mini"  style="width:200px"></el-input>
                            </div>
                            <div>
                                <div class="dialogtitle">关系应为</div> 
                                <el-select v-model="dialogRelative" size="mini">
                                    <el-option
                                    v-for="item in dialogRelativeOpt"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <el-button type="primary" size="mini" @click="showClient = true" class="searchBtn">查询</el-button>
                            <!-- <div v-if="showClient">
                                无此客户信息
                            </div> -->
                            <div >
                                <el-table
                                ref="recordTable"
                                size="mini"
                                border
                                height="200px"
                                :data="friendList"
                                highlight-current-row
                                style="width:500px">
                                    <el-table-column
                                    property="name"
                                    label="姓名"
                                    sortable :show-overflow-tooltip="true"
                                    width="90">
                                    </el-table-column>
                                    <el-table-column
                                    property="name"
                                    label="身份证号"
                                    sortable :show-overflow-tooltip="true"
                                    width="120">
                                    </el-table-column>
                                    <el-table-column
                                    property="name"
                                    label="出生日期"
                                    sortable :show-overflow-tooltip="true"
                                    width="100">
                                    </el-table-column>
                                    <el-table-column
                                    property="name"
                                    label="联系电话"
                                    sortable :show-overflow-tooltip="true"
                                    width="100">
                                    </el-table-column>
                                    <el-table-column
                                    label="选取"
                                    sortable :show-overflow-tooltip="true"
                                   >
                                        <template slot-scope="scope">
                                           <el-button size="mini" type="success" icon="el-icon-check" circle @click="clientDialogVisible = false"></el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                </div>
                            
                        </div>
                        <!-- <span slot="footer" class="dialog-footer">
                            <el-button size="mini" type="danger" @click="clientDialogVisible = false">取 消</el-button>
                            <el-button size="mini" type="primary" @click="clientDialogVisible = false">确 定</el-button>
                        </span> -->
                    </el-dialog>
                </div>
            </el-tab-pane>
            <el-tab-pane label="相关信息" name="msgTab">
                <div class="tabContent">
                    <el-table
                        class="table"
                        ref="recordTable"
                        size="mini"
                        border
                        height="780px"
                        :data="msgList"
                        highlight-current-row
                        @row-click="setOrderNum">
                        <el-table-column
                        type="index"
                        width="50">
                        </el-table-column>
                        <el-table-column
                        property="orderNum"
                        label="记录属性"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="属性内容"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="有效期起"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="orderNum"
                        label="有效期止"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="附件"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="附件格式"
                        sortable :show-overflow-tooltip="true"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="大小(KB)"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="备注"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                        fixed="right"
                        label="操作"
                        width="150">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="deleteInfo(scope.$index,msgList)" type="danger" size="mini">移除</el-button>
                            <el-button type="primary" size="mini" @click="fileDialogVisible = true">编辑</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    <div class="oprateBtn">
                        <el-button type="primary" size="mini" @click="fileDialogVisible = true">新增</el-button>
                    </div>
                     <el-dialog
                    title="客户证件详细信息"
                    :visible.sync="fileDialogVisible"
                    width="60%">
                    <div class="bodyMsg">
                        <div>
                            <div class="dialogtitle">记录属性</div> 
                            <el-select v-model="recordProperty" size="mini">
                                <el-option
                                v-for="item in propertyOpt"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div>
                            <div class="dialogtitle">属性内容</div> 
                            <el-input v-model="propertyContent" size="mini"  style="width:400px"></el-input>
                        </div>
                        <div>
                            <div class="dialogtitle">有效期间</div> 
                            <el-date-picker
                            size="mini"
                            v-model="effectiveDate"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                            </el-date-picker>
                        </div>
                        <div>
                            <div class="grid-content processBox">
                                <div class="dialogtitle claimProcess">备注</div>
                                <el-input type="textarea" :rows="3" v-model="fileRemark" size="mini" class="processInput"></el-input>  
                            </div>
                        </div>
                        <div>
                            <div class="grid-content processBox">
                            <div class="dialogtitle claimProcess">附加档案</div> 
                            <el-upload
                                class="upload-demo processInput"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :before-remove="beforeRemove"
                                :on-change="handleChange"
                                multiple
                                :limit="1"
                                :on-exceed="handleExceed"
                                :file-list="fileList">
                                <el-button size="mini" type="primary">添加附件</el-button>
                                <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                            </el-upload>
                            </div>
                        </div>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button size="mini" type="danger" @click="fileDialogVisible = false">取 消</el-button>
                        <el-button size="mini" type="primary" @click="fileDialogVisible = false">确 定</el-button>
                    </span>
                </el-dialog>
                </div>
            </el-tab-pane>
        </el-tabs>
        <div class="oprateBtn">
            <el-button type="primary" size="mini">确定</el-button>
            <el-button type="primary" size="mini">应用</el-button>
            <el-button type="danger" size="mini" @click="goBack()">取消</el-button>
        </div>
    </section>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
     activeTab:'basicTab',
     headerTitle:'客户添加',
     editor:true,
     imageUrl:'',
     dialogVisible: false,
     height:'',
     weight:'',
     clientName:'',
     nameType:'自然人',
     nameOpt:[{
          value: '自然人',
        }, {
          value: '法人',
        }],
     clientType:'已投保客户',
     typeOpt:[{
          value: '已投保客户',
        }, {
          value: '潜在客户',
        }, {
          value: '团险客户',
        }],
    country:'中国',
    countryOpt:[{
          value: '中国',
        }, {
          value: '港澳台',
        }, {
          value: '外籍',
        }],
    cardType:'身份证',
    cardOpt:[{
          value: '身份证',
        }, {
          value: '军官证',
        }, {
          value: '出生证',
        }, {
          value: '台胞证',
        }, {
          value: '护照',
        }, {
          value: '港澳通行证',
        }],
    birthDate:'',
    cardNum:'',
    sexValue:'男',
    sexOpt:[{
          value: '男',
        }, {
          value: '女',
        }],
    marryValue:'未婚',
    marryOpt:[{
          value: '未婚',
        }, {
          value: '已婚',
        }, {
          value: '丧偶',
        }, {
          value: '离婚',
        }],
    mobilePhone:'',
    eMail:'',
    telPhone:'',
    ready:'',
    familyAddr:'',
    familyEmail:'',
    otherAddr:'',
    otherEmail:'',
    contactPhone:'手机号码',
    phoneOpt:[{
          value: '手机号码',
        }, {
          value: '家庭电话',
        }, {
          value: '公司电话',
        }],
    contactAddr:'家庭地址有效',
    addrOpt:[{
          value: '家庭地址有效',
        }, {
          value: '单位地址有效',
        }, {
          value: '其他地址',
        }],
    otherMsg:'',
    companyName:'',
    companyTel:'',
    faxNum:'',
    legalPerson:'',
    taxNum:'',
    companyAddr:'',
    careerName:'',
    contactTel:'',
    careerContent:'',
    careerType:'在校研究生',
    careerTypeOpt:[{
          value: '在校研究生',
        }, {
          value: '应届毕业生',
        }, {
          value: '公职人员',
        }, {
          value: '军人',
        }, {
          value: '科技人员',
        }, {
          value: '教师',
        }, {
          value: '企事业职员',
        }, {
          value: '务工人员',
        }, {
          value: '务农人员',
        }, {
          value: '其他',
        }],
    yearIncome:'15万以内',
    incomeOpt:[{
          value: '15万以内',
        }, {
          value: '15-30万',
        }, {
          value: '30-50万',
        }, {
          value: '50-80万',
        }, {
          value: '80-100万',
        }, {
          value: '100-200万',
        }, {
          value: '200-500万',
        }, {
          value: '500万以上',
        }, {
          value: '空',
        }],
    updateStatus1:'',
    updateStatus2:'',
    relevanceList: [{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          orderNum: '576542526',
          name: '小虎',
          address: '北京市普陀区金沙江路 1517 弄'
        },{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
    totalFee:'0',
    clientDialogVisible:false,
    dialogClientName:'',
    dialogCardId:'',
    dialogRelative:'',
    dialogRelativeOpt:[{
          value: '配偶',
        }, {
          value: '父母',
        }, {
          value: '子女',
        }, {
          value: '兄弟姐妹',
        }, {
          value: '其他',
        }, {
          value: '本人',
        }],
    showClient:true,
    friendList: [{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          orderNum: '576542526',
          name: '小虎',
          address: '北京市普陀区金沙江路 1517 弄'
        },{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
    fileDialogVisible:false,
    recordProperty:'',
    propertyOpt:[{
        value:'首期交费账号', 
    },{
        value:'续期交费账号',
    },{
        value:'身份证件', 
    },{
        value:'车辆信息',
    },{
        value:'客户分类', 
    }],
    propertyContent:'',
    effectiveDate:'',
    fileRemark:'',
    fileList: [{name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
    msgList: [{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          orderNum: '576542526',
          name: '小虎',
          address: '北京市普陀区金沙江路 1517 弄'
        },{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
 }
 },
 components: {

 },
 mounted() {
     this.fetch();
 },
 methods:{
    goBack(){
       history.go(-1);
       //this.$root.eventHub.$emit("sendOrderNum",this.orderNum)
    },
    fetch(){
        this.editor=this.$route.query.editor;
        if(this.editor){
            this.headerTitle="客户编辑"
        }else{
            this.headerTitle="客户添加"
        }
        this.clientName=this.$route.query.clientName;
        // console.log(this.orderNum)
    },
     editorBtn(){
        // this.$router.push({path:"/user/clientEditor",query:{editor:true}})
     },
     addBtn(){
         //this.$router.push({path:"/user/clientEditor",query:{editor:false}})
     },
     deleteInfo(index,table){
         this.$confirm('确定删除该条数据吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            table.splice(index,1)
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
    beforeRemove(file){
        console.log(file);
        return this.$confirm(`确定移除 ${ file.name }？`);
    },
     handleExceed(files, fileList) {
        this.$message.warning(`当前限制上传 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
    handleChange(file,fileList){
        console.log(file,fileList)
         this.fileList= fileList.slice(-3);
    },
    setOrderNum(row){  
         console.log("当前行",row);
         //this.orderNum=row.orderNum;
     },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    // handleClose(done) {
    //     this.$confirm('确认关闭？')
    //       .then(_ => {
    //         done();
    //       })
    //       .catch(_ => {});
    //   }
 },
 beforeRouteEnter (to, from, next){
  //console.log("准备进入路由模板");
    next(vm=>{
      //通过vm访问组件实例
     // vm.$root.eventHub.$on('sendOrderNum',vm.getOrderRow);
    //   vm.fetchData();
      vm.fetch();
    })
  }
}
</script>

<style scoped lang="scss">
.headerTitle{
    width:100%;
    height:30px;
    background-color:#dddefe;

}

header span:first-child{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    margin-left:10px;
    
}
.tabContent{
        position: relative;
        text-align: left;
        padding:0 30px;
        // height: 100%;
        // overflow: scroll;
    }
section{
    // height:100%;
    //width:90%;
    position: absolute;
    top:30px;
    bottom: 0px;
    left:0;
    right:0;
    overflow-y: scroll;
    //padding:0 45px;
    .imgDiv{
         position: relative;
        width:120px;
        height: 120px;
        border: 1px solid #d9d9d9;

        .avatar-uploader .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        .avatar-uploader .el-upload:hover {
            border-color: #409EFF;
        }
        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 120px;
            height: 120px;
            line-height: 120px;
            text-align: center;
        }
        .avatar {
            width: 120px;
            height: 120px;
            display: block;
        }
        // .clientImg{
        // display: inline-block;
        // border:1px solid #d4d8e4;
        // width:120px;
        // height: 120px;
        // }
        #bodyBtn{
            position:absolute;
            bottom:-10px;
            right:-20px;
        }
        
    }
    .bodyMsg{
        width:90%;
        margin:auto;
        div{
            margin:5px;
        }
        .dialogtitle{
            display: inline-block;
            width:80px;
            text-align: right;
            padding:10px;
        }
        .searchBtn{
            margin-left:170px;
        }
          .processBox{
             margin-top:20px;
                height:80px;
                position:relative;

                .claimProcess{
                    position: absolute;
                    top:0;
                }
                .processInput{
                    position: absolute;
                    top:0;
                    left:90px;
                    width:70%;
                }
            }

    }
     
    .orderTable{
        //display: inline-block;
        width:100%;
        margin-bottom:20px;
        td{
            border:1px solid #d4d8e4;
            border-collapse: collapse;
            height: 20px;
            padding:5px;
        }
        td:nth-of-type(odd){
            width:10%;
            font-weight: bold;
        }
        td:nth-of-type(even){
            width:20%;
        }
    }

.table1{
    border:1px solid #d4d8e4;
    width:100%;

}
 .table1 td{
    border:1px solid #d4d8e4;
    border-collapse: collapse;
    height:32px;
    padding:5px;
    // width:10%;
    
}
 .table1 td:nth-of-type(odd){
   background-color:#f5f7fa;
   width:70px;
   text-align: center;
}
.table1 td:nth-of-type(even){
   width:150px;
   padding-left:3px;
   padding-right:3px;
}

 fieldset {
    width:80%;
    padding: 20px 0 10px 10px;
    margin:10px 0;
    //height: 170px;
    border: 1px solid #d6dbe7;
}
    .compRow{
        margin-bottom: 10px;
    }
    .compCol1{
        text-align: right;
    }
.career{
    width:80%;
    padding: 20px 0 10px 10px;
    margin:10px 0;
   // height: 170px;
}
   .oprateBtn{
    //    position: fixed;;
    //    bottom:25px;
    //    right:45px;
        float: right;
        margin:10px;
        
    }  
}
@media screen and (max-width: 1480px) {
        .table {
        height:380px !important
        }
    }


</style>
