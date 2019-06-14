<template>
 <div class="page" style="height:100%;position:relative;">
    <header>
        <div class="headerTitle">
            <span @click="goBack"><i class="el-icon-back"></i></span> 
            <span>{{headerTitle}}</span>
        </div>
    </header>
    <section>
        <el-tabs type="border-card" v-model="activeTab" style="height:100%;overflow-y:auto;">
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
                                <img v-if="clientMsg.imageUrl!==''" :src="clientMsg.imageUrl" class="avatar">
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
                                        <el-input v-model="clientMsg.height" size="mini" placeholder="0" style="width:100px;"></el-input>
                                        <span>CM</span>  
                                    </div>
                                    <div>
                                        <span>体重</span>
                                        <el-input v-model="clientMsg.weight" size="mini" placeholder="0" style="width:100px;"></el-input>
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
                                    <el-input v-model="clientMsg.name" size="mini" placeholder="请输入姓名"  style="width:120px;"></el-input>  
                                    <el-select v-model="clientMsg.lawIdentity" size="mini" style="width:120px;">
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
                                    <el-select v-model="clientMsg.type" placeholder="请选择" size="mini">
                                        <el-option
                                        v-for="item in typeOpt"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.name">
                                        </el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <td>国籍/证件类型</td>
                                <td>
                                    <el-select v-model="clientMsg.nation" placeholder="请选择" size="mini" style="width:120px;">
                                        <el-option
                                        v-for="item in countryOpt"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                    <el-select v-model="clientMsg.certfType" placeholder="请选择" size="mini" style="width:120px;">
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
                                    v-model="clientMsg.birthday"
                                    type="date"
                                    placeholder="选择日期"
                                    style="width:200px;">
                                    </el-date-picker>
                                </td>
                            </tr>
                            <tr>
                                 <td>证件号码</td>
                                 <td>
                                     <el-input v-model="clientMsg.certfId" style="width:200px;" size="mini" placeholder="请输入内容"></el-input>
                                 </td>
                                 <td>性别/婚姻</td>
                                 <td>
                                     <el-select v-model="clientMsg.sex" placeholder="请选择" size="mini" style="width:120px;">
                                        <el-option
                                        v-for="item in sexOpt"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        >
                                        </el-option>
                                    </el-select>
                                    <el-select v-model="clientMsg.married" placeholder="请选择" size="mini" style="width:120px;">
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
                                 <td><el-input size="mini" v-model="clientMsg.telephone"></el-input></td>
                                 <td>邮箱</td>
                                 <td><el-input size="mini"  v-model="clientMsg.email"></el-input></td>
                                 <td>座机电话</td>
                                 <td><el-input size="mini" v-model="clientMsg.phone"></el-input></td>
                             </tr>
                              <tr>
                                 <td>备用</td>
                                 <td colspan="5"><el-input style="width:100%;" size="mini" v-model="clientMsg.backup"></el-input></td>
                             </tr>
                             <tr>
                                 <td>家庭联系地址</td>
                                 <td colspan="3"><el-input v-model="clientMsg.homeAddress" style="width:100%;" size="mini" placeholder="请输入省市区等详细地址"></el-input></td>
                                 <td>邮编</td>
                                 <td><el-input  v-model="clientMsg.homeCode" style="width:100%;" size="mini" placeholder="请输入内容"></el-input></td>
                             </tr>
                              <tr>
                                 <td>其他联系地址</td>
                                 <!-- 这个用的公司地址 -->
                                 <td colspan="3"><el-input  v-model="clientMsg.companyAddress" style="width:100%;" size="mini" placeholder="请输入省市区等详细地址"></el-input></td>
                                 <td>邮编</td>
                                 <td><el-input  v-model="clientMsg.companyCode" style="width:100%;" size="mini" placeholder="请输入内容"></el-input></td>
                             </tr>
                              <tr>
                                 <td>首选联系方式</td>
                                 <td colspan="5">
                                     <el-select v-model="clientMsg.firstContactWay" placeholder="请选择" size="mini">
                                        <el-option
                                        v-for="item in phoneOpt"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        >
                                        </el-option>
                                    </el-select>
                                    <el-select v-model="clientMsg.firstAddress" placeholder="请选择" size="mini" >
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
                                 <td colspan="5"><el-input v-model="clientMsg.other" style="width:100%;" size="mini"></el-input></td>
                             </tr>
                         </table>
                    </el-col>
                </el-row>
                <fieldset>
                    <legend>
                        单位信息
                    </legend>
                    <div>
                        <el-row :gutter="10" class="compRow">
                            <el-col :span="4" class="compCol1">
                                单位名称
                            </el-col>
                            <el-col :span="20">
                                <el-input v-model="clientMsg.comName" style="width:90%;" size="mini" placeholder="请输入内容"></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10" class="compRow">
                            <el-col :span="4" class="compCol1">
                                联系电话
                            </el-col>
                            <el-col :span="8">
                                <el-input v-model="clientMsg.comPhone" style="width:80%;" size="mini" placeholder="请输入内容"></el-input>
                            </el-col>
                            <el-col :span="4" class="compCol1">
                                传真号码
                            </el-col>
                            <el-col :span="8">
                                <el-input v-model="clientMsg.faxNo" style="width:80%;" size="mini" placeholder="请输入内容"></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10" class="compRow">
                            <el-col :span="4" class="compCol1">
                                法定代表
                            </el-col>
                            <el-col :span="8">
                                <el-input v-model="clientMsg.comRepresentative" style="width:80%;" size="mini" placeholder="请输入内容"></el-input>
                            </el-col>
                            <el-col :span="4" class="compCol1">
                                单位税号
                            </el-col>
                            <el-col :span="8">
                                <el-input v-model="clientMsg.comTaxNo" style="width:80%;" size="mini" placeholder="请输入内容"></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10" class="compRow">
                            <el-col :span="4" class="compCol1">
                                单位地址
                            </el-col>
                            <el-col :span="20">
                                <el-input v-model="clientMsg.comAddress" style="width:90%;" size="mini" placeholder="请输入省市区等详细地址"></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10" class="compRow">
                            <el-col :span="4" class="compCol1">
                                职级名称
                            </el-col>
                            <el-col :span="8">
                                <el-input v-model="clientMsg.jobName" style="width:80%;" size="mini" placeholder="请输入内容"></el-input>
                            </el-col>
                            <el-col :span="4" class="compCol1">
                                联系电话
                            </el-col>
                            <el-col :span="8">
                                <el-input v-model="clientMsg.telephone" style="width:80%;" size="mini" placeholder="请输入内容"></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10" class="compRow">
                            <el-col :span="4" class="compCol1">
                                职级内容
                            </el-col>
                            <el-col :span="8">
                                <el-input v-model="clientMsg.jobContent" style="width:80%;" size="mini" placeholder="请输入内容"></el-input>
                            </el-col>
                            <el-col :span="4" class="compCol1">
                                职业类别
                            </el-col>
                            <el-col :span="8">
                                <el-select v-model="clientMsg.jobType" placeholder="请选择" size="mini">
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
                                <el-select v-model="clientMsg.income" placeholder="请选择" size="mini">
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
                                <!-- 这个接口没有 -->
                                <el-input v-model="clientMsg.updateStatus1" style="width:100px;" size="mini"></el-input>
                                <el-input v-model="clientMsg.updateStatus2" style="width:100px;" size="mini"></el-input>
                            </el-col>
                        </el-row>
                    </div>
                </fieldset>
                <div class="oprateBtn">
                    <el-button type="primary" size="mini" @click="addClientMsg('1')">确定</el-button>
                    <el-button type="primary" size="mini" @click="addClientMsg('2')">应用</el-button>
                    <el-button type="danger" size="mini" @click="goBack()">取消</el-button>
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
                        height="410px"
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
                    <div class="oprateBtn">
                        <el-button type="primary" size="mini">确定</el-button>
                        <el-button type="primary" size="mini">应用</el-button>
                        <el-button type="danger" size="mini" @click="goBack()">取消</el-button>
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
                        height="400px"
                        :data="friendList"
                        highlight-current-row
                        @row-click="setOrderNum">
                        <el-table-column
                        type="index"
                        width="50">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="客户姓名"
                        sortable :show-overflow-tooltip="true"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="sex"
                        label="性别"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="telephone"
                        label="联系电话"
                        sortable :show-overflow-tooltip="true"
                        width="160">
                        </el-table-column>
                        <el-table-column
                        property="birthday"
                        label="出生日期"
                        sortable :show-overflow-tooltip="true"
                        width="120">
                        </el-table-column>
                        <!-- <el-table-column
                        label="年龄"
                        sortable :show-overflow-tooltip="true"
                        width="80">
                            <template slot-scope="scope">
                                <div>
                                    {{Date(scope.row.birthday)}}
                                </div>
                            </template>
                        </el-table-column> -->
                        <el-table-column
                        property="certfId"
                        label="证件号码"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                         <el-table-column
                        label="存在关系"
                        sortable :show-overflow-tooltip="true"
                        width="120">
                            <template slot-scope="scope">
                                <div>
                                   {{relationList[scope.$index].relation}}
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                        label="操作"
                        width="100">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="deleteInfo(scope.$index,friendList)" type="danger" size="mini">移除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    <div style="margin-top:10px;">
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
                            <el-button type="primary" size="mini" @click="searchClient" class="searchBtn">查询</el-button>
                            <!-- <div v-if="showClient">
                                无此客户信息
                            </div> -->
                            <div >
                                <el-table
                                ref="recordTable"
                                size="mini"
                                border
                                height="200px"
                                :data="selectList"
                                highlight-current-row
                                style="width:500px">
                                    <el-table-column
                                    property="name"
                                    label="姓名"
                                    sortable :show-overflow-tooltip="true"
                                    width="90">
                                    </el-table-column>
                                    <el-table-column
                                    property="certfId"
                                    label="身份证号"
                                    sortable :show-overflow-tooltip="true"
                                    width="120">
                                    </el-table-column>
                                    <el-table-column
                                    property="birthday"
                                    label="出生日期"
                                    sortable :show-overflow-tooltip="true"
                                    width="100">
                                    </el-table-column>
                                    <el-table-column
                                    property="telephone"
                                    label="联系电话"
                                    sortable :show-overflow-tooltip="true"
                                    width="100">
                                    </el-table-column>
                                    <el-table-column
                                    label="选取"
                                    sortable :show-overflow-tooltip="true">
                                        <template slot-scope="scope">
                                           <el-button size="mini" type="success" icon="el-icon-check" circle @click="selected(scope.row)"></el-button>
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
                    <div class="oprateBtn">
                        <el-button type="primary" size="mini" @click="addRelation(1)">确定</el-button>
                        <el-button type="primary" size="mini" @click="addRelation(2)">应用</el-button>
                        <el-button type="danger" size="mini" @click="goBack()">取消</el-button>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="相关信息" name="msgTab">
                <div class="tabContent">
                    <el-table
                        class="table"
                        ref="recordTable"
                        size="mini"
                        border
                        height="400px"
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
                    <div style="margin-top:10px;">
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
                <div class="oprateBtn">
                    <el-button type="primary" size="mini">确定</el-button>
                    <el-button type="primary" size="mini">应用</el-button>
                    <el-button type="danger" size="mini" @click="goBack()">取消</el-button>
                </div>
                </div>
            </el-tab-pane>
        </el-tabs>
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
     dialogVisible: false,
     nameOpt:[{
          value: '自然人',
        }, {
          value: '法人',
        }],
    typeOpt:[],
    countryOpt:[{
          value: '中国',
        }, {
          value: '港澳台',
        }, {
          value: '外籍',
        }],
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
    sexOpt:[{
          value: '男',
        }, {
          value: '女',
        }],
    marryOpt:[{
          value: '未婚',
        }, {
          value: '已婚',
        }, {
          value: '丧偶',
        }, {
          value: '离婚',
        }],
    phoneOpt:[{
          value: '手机号码',
        }, {
          value: '家庭电话',
        }, {
          value: '公司电话',
        }],
     addrOpt:[{
          value: '家庭地址有效',
        }, {
          value: '单位地址有效',
        }, {
          value: '其他地址',
        }],
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
    clientMsg:{
        imageUrl:'',
        height:'',
        weight:'',
        certfId:"",
        name:"",
        lawIdentity:"",
        type:'',
        nation:'',
        certfType:"",
        birthday:"",
        sex:"",
        married:'',
        telephone:"",
        phone:"",
        email:'',
        backup:'',
        homeAddress:"",
        homeCode:"",
        companyAddress:'',
        companyCode:'',
        firstContactWay:'',
        firstAddress:'',
        other:'',
        comName:'',
        comPhone:'',
        faxNo:'',
        comRepresentative:'',
        comTaxNo:'',
        comAddress:'',
        jobName:'',
        jobContent:'',
        jobType:'',
        income:'',
        updateStatus1:'',
        updateStatus2:'',
     },
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
    dialogRelative:'配偶',
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
    selectList:[],
    showClient:true,
    relationList:[{
        "clientaId":"610121199309215096",
        "clientbId":"420704199309165034",
        "relation":"子女"
    }],
    friendList: [{name:'balalla'}],
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
    // this.fetch();
 },
 watch: {
     'activeTab':"tabToggle"
 },
 methods:{
    goBack(){
       history.go(-1);
       //this.$root.eventHub.$emit("sendOrderNum",this.orderNum)
    },
    fetch(){
        this.editor=this.$route.query.editor;
        if(this.editor){
            this.headerTitle="客户编辑";
            this.clientMsg=this.$route.query.clientMsg;
            console.log(this.clientMsg)
        }else{
            this.headerTitle="客户添加" 
        }
        //this.clientMsg.name=this.$route.query.clientName;
        // console.log(this.orderNum)
        this.getOptParams("clientTypeParam/list","clientType")
    },
    getOptParams(url,type){
        fetch("http://10.0.0.2:9004/"+url, {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: ''
        }).then((response) => {
            if (response.ok) {
            return response.json()
            }
        }).then((json) => {
            console.log("typejson",json)
            switch (type) {
                case "clientType":
                    this.typeOpt=json
                    break;
            
                default:
                    break;
            }
        }).catch((error) => {
            // console.error(error)
        })
    },
    searchClient(){
        if(this.dialogCardId){
            //按id查关系人
            var ids=[];
            ids.push(this.dialogCardId);
            this.searchFriend("sel",ids)
        }else if(this.dialogClientName){
            //按姓名查关系人
            fetch("http://10.0.0.2:9004/client/getByName", {
                method: 'POST',
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                body: 'name='+this.dialogClientName
            }).then((response) => {
                if (response.ok) {
                return response.json()
                }
            }).then((json) => {
                console.log("json",json)
                this.selectList=json
            }).catch((error) => {
               // console.error(error)
            })
        }
    },
    selected(row){
        this.clientDialogVisible = false;
        //添加存在关系
        var relationObj={"relation":this.dialogRelative};
        this.relationList.push(relationObj)
        //添加到关系人列表
        this.friendList.push(row)
    },
    addRelation(val){
        //将新增关系人提交到后台
        var aid=this.friendList[0].clientaId;
        var bid=this.friendList[this.friendList.length-1].certfId;
        var relation=this.relationList[this.relationList.length-1].relation
        fetch("http://10.0.0.2:9004/client/addRelation", {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: 'clientaId='+aid+"&clientbId="+bid+"&relation="+relation
        }).then((response) => {
            if (response.ok) {
            return response.json()
            }
        }).then((json) => {
            console.log("json",json)
            if(val=="1"){
                //点击确定时关闭该页面
                history.go(-1)
            }
        }).catch((error) => {
            //console.error(error)
        })
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
            table.splice(index,1);//删除该关系人
            this.relationList.splice(index,1)//删除关系列表中对应的关系
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
        this.clientMsg.imageUrl = URL.createObjectURL(file.raw);
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
      },
    // handleClose(done) {
    //     this.$confirm('确认关闭？')
    //       .then(_ => {
    //         done();
    //       })
    //       .catch(_ => {});
    //   }
    tabToggle(){
        //切换tab页时获取该页面数据
        if(this.activeTab=="relevanceTab"){
            console.log("关联保单")
        }else if(this.activeTab=="friendTab"){
            console.log("查询朋友")
            fetch("http://10.0.0.2:9004/client/selectRelations", {
                method: 'POST',
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                body: 'cid='+this.clientMsg.certfId
            }).then((response) => {
                if (response.ok) {
                return response.json()
                }
            }).then((json) => {
                console.log("frijson",json)
                this.relationList=json;//这里只能获取到关系人id
                var friendIds=[];
                for (let i = 0; i < json.length; i++) {
                    friendIds.push(json[i].clientbId)
                }
                this.searchFriend("fri",friendIds)//根据关系人ID查具体信息
            }).catch((error) => {
               // console.error(error)
            })
        }else if(this.activeTab=="msgTab"){
            console.log("相关信息")
        }
        
    },
    searchFriend(type,ids){
        console.log("ids",ids)
        fetch("http://10.0.0.2:9004/client/listByCid", {
                method: 'POST',
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                body: 'ids='+ids
            }).then((response) => {
                if (response.ok) {
                return response.json()
                }
            }).then((json) => {
                console.log("frilist",json)
                if(type=="fri"){
                    //亲朋好友列表
                    this.friendList=json
                }else if(type=="sel"){
                    //弹框中的选择列表
                    this.selectList=json
                }
            }).catch((error) => {
               // console.error(error)
            })
    },
   
    addClientMsg(val){
        //客户信息更新
        fetch("http://10.0.0.2:9004/client/update", {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(this.clientMsg)
            }).then((response) => {
                if (response.ok) {
                return response.json()
                }
            }).then((json) => {
                if(json.data=="1"){
                    console.log("addjson",json) 
                    if(val=="1"){
                        console.log("val",val) 
                        history.go(-1)
                    }
                }
               
              
            }).catch((error) => {
                //console.error(error)
            })
    }

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
// @media screen and (max-width: 1480px) {
//         .table {
//         height:400px !important
//         }
//     }


</style>
