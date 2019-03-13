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
            <el-tab-pane label="保单基本信息" name="basicTab">
                <div class="tabContent">
                    <div>
                       <div class="title">客户名称<span>*</span></div>
                        <el-input v-model="clientName" @change="inputChange()" size="mini" style="width:150px"></el-input>
                        <span style="margin-left:10px;">
                            <el-radio v-model="peoRadio" label="1" @change="inputChange()" >自然人</el-radio>
                            <el-radio v-model="peoRadio" label="2" @change="inputChange()" >法人</el-radio>
                        </span>
                        <span style="margin:0 5px 0 20px;">性别</span>
                        <el-select v-model="sexSel" size="mini" style="width:100px;" @change="inputChange()" >
                            <el-option
                            v-for="item in sexOpt"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <span style="margin:0 5px 0 20px;">出生日期</span>
                        <el-date-picker
                        @change="inputChange()" 
                        size="mini"
                        v-model="birthDate"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                    </div>
                    <div>
                        <div class="title">证件号码<span>*</span></div>
                        <el-select v-model="cardSel" size="mini" @change="inputChange()" >
                            <el-option
                            v-for="item in cardOpt"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input v-model="cardValue" @change="inputChange()" size="mini" style="width:250px"></el-input>
                        <span style="margin:0 5px 0 20px;">手机号码</span>
                        <el-input v-model="phoneNum" @change="inputChange()" size="mini" style="width:250px"></el-input>
                    </div>
                    <div>
                        <div class="title">联系地址</div>
                        <el-select v-model="addressSel" @change="inputChange()" size="mini">
                            <el-option
                            v-for="item in addressOpt"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input v-model="addressValue" @change="inputChange()" size="mini" style="width:250px"></el-input>
                        <span style="margin:0 5px 0 20px;">邮编</span>
                        <el-input v-model="emailValue" @change="inputChange()" size="mini" style="width:250px"></el-input>
                    </div>
                    <div class="msgTitle">
                        <span>被保人信息</span>
                        <el-checkbox v-model="syncChecked" @change="syncChange" class="checkbox">同客户信息</el-checkbox> 
                    </div>
                    <div class="msgContent">
                        <div>
                            <div class="title">客户名称<span>*</span></div>
                            <el-input v-model="clientName1" size="mini" style="width:150px"></el-input>
                            <span style="margin-left:10px;">
                                <el-radio v-model="peoRadio1" label="1">自然人</el-radio>
                                <el-radio v-model="peoRadio1" label="2">法人</el-radio>
                            </span>
                            <span style="margin:0 5px 0 20px;">性别</span>
                            <el-select v-model="sexSel1" size="mini">
                                <el-option
                                v-for="item in sexOpt"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <span style="margin:0 5px 0 20px;">出生日期</span>
                            <el-date-picker
                            size="mini"
                            v-model="birthDate1"
                            type="date"
                            placeholder="选择日期">
                            </el-date-picker>
                        </div>
                        <div>
                            <div class="title">证件号码<span>*</span></div>
                            <el-select v-model="cardSel1" size="mini">
                                <el-option
                                v-for="item in cardOpt"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <el-input v-model="cardValue1" size="mini" style="width:250px"></el-input>
                            <span style="margin:0 5px 0 20px;">手机号码</span>
                            <el-input v-model="phoneNum1" size="mini" style="width:250px"></el-input>
                        </div>
                        <div>
                            <div class="title">联系地址</div>
                            <el-select v-model="addressSel1" size="mini">
                                <el-option
                                v-for="item in addressOpt"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <el-input v-model="addressValue1" size="mini" style="width:250px"></el-input>
                            <span style="margin:0 5px 0 20px;">邮编</span>
                            <el-input v-model="emailValue1" size="mini" style="width:250px"></el-input>
                        </div>
                        <div>
                            <div class="title">客户车辆</div>
                            <el-select v-model="carSel" size="mini">
                                <el-option
                                v-for="item in carOpt"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                         <fieldset>
                            <legend>
                                车辆信息
                            </legend>
                            <div>
                                <el-row :gutter="10" >
                                    <el-col :span="6"> 
                                        <div class="carTitle">车牌号码<span>*</span></div>
                                        <el-input v-model="carNum" style="width:120px;" size="mini" ></el-input>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="carTitle">使用性质</div>
                                        <el-input v-model="useType" style="width:120px;" size="mini" ></el-input>
                                    </el-col>
                                    <el-col :span="6" >
                                        <div class="carTitle">厂牌型号</div>
                                        <el-input v-model="brandType" style="width:120px;" size="mini" ></el-input>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="carTitle">发动机号</div>
                                        <el-input v-model="engineNum" style="width:120px;" size="mini" ></el-input>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="10" >
                                    <el-col :span="6"> 
                                        <div class="carTitle">车架号</div>
                                        <el-input v-model="frameNum" style="width:120px;" size="mini" ></el-input>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="carTitle">车辆种类</div>
                                        <el-select v-model="carTypeSel" size="mini" style="width:120px;">
                                            <el-option
                                            v-for="item in carTypeOpt"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="6" >
                                        <div style="padding:7px 0;">
                                            <el-select v-model="typeSortSel" size="mini" style="width:100%;">
                                                <el-option
                                                v-for="item in typeSortOpt"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </div> 
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="carTitle">座位/吨位</div>
                                        <el-input v-model="tonnage" style="width:120px;" size="mini" ></el-input>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="10" >
                                    <el-col :span="6"> 
                                        <div class="carTitle">排量</div>
                                        <el-input v-model="paiLiang" style="width:120px;" size="mini" ></el-input>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="carTitle">功率</div>
                                        <el-input v-model="power" style="width:120px;" size="mini" ></el-input>
                                    </el-col>
                                    <el-col :span="6" >
                                        <div class="carTitle">登记日期</div>
                                         <el-date-picker
                                        size="mini"
                                        v-model="registerDate"
                                        type="date"
                                        placeholder="选择日期"
                                        style="width:120px;">
                                        </el-date-picker>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="carTitle">平均行驶里程</div>
                                        <el-input v-model="mileage" style="width:120px;" size="mini" ></el-input>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="10" >
                                    <el-col :span="6"> 
                                        <div class="carTitle">车主姓名</div>
                                        <el-input v-model="ownerName" style="width:120px;" size="mini" ></el-input>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="carTitle">车险信息</div>
                                        <el-select v-model="insuranceSel" size="mini" style="width:120px;">
                                            <el-option
                                            v-for="item in insuranceOpt"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="6" >
                                        <div class="carTitle">车辆价格</div>
                                        <el-input v-model="carPrice" style="width:120px;" size="mini" ></el-input>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="carTitle">出险次数</div>
                                        <el-input v-model="outTime" style="width:120px;" size="mini" ></el-input>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="10" >
                                    <el-col :span="6"> 
                                        <div class="carTitle">是否进口车</div>
                                        <el-select v-model="judgeSel" size="mini" style="width:120px;">
                                            <el-option
                                            v-for="item in judgeOpt"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                </el-row>
                            </div>
                        </fieldset>
                    </div>
                    <div class="msgTitle">
                        <span>投保内容</span>
                    </div>
                    <div class="msgContent">
                        <div>
                            <div class="title">保险公司<span>*</span></div>
                            <el-select v-model="compSel" size="mini" >
                                <el-option
                                v-for="item in compOpt"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div>
                            <div class="title">起保日期<span>*</span></div>
                            <el-date-picker
                            size="mini"
                            v-model="startDate"
                            type="date"
                            placeholder="选择日期">
                            </el-date-picker>
                        </div>
                        <div>
                            <div class="title">保单号码<span>*</span></div>
                            交强险&nbsp;&nbsp;<el-input v-model="trafficNum" style="width:150px;" size="mini" ></el-input>
                            &nbsp;&nbsp;商业险&nbsp;&nbsp;<el-input v-model="businessNum" style="width:150px;" size="mini" ></el-input>
                            <el-button type="primary" size="mini">检查</el-button>
                        </div>
                        <div>
                            <div class="title">保单类型<span>*</span></div>
                            <el-select v-model="orderTypeSel" size="mini" >
                                <el-option
                                v-for="item in orderTypeOpt"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <div class="title">&nbsp;&nbsp;其他号码</div>
                            <el-input v-model="otherNum" style="width:150px;" size="mini" ></el-input>
                        </div>
                        <div>
                            <div class="title">承揽人A<span>*</span></div>
                            <el-input v-model="opraterA" style="width:150px;" size="mini" ></el-input>
                            <el-button size="mini">...</el-button>
                        </div>
                        <div>
                            <div class="title">承揽人B<span>*</span></div>
                            <el-input v-model="opraterB" style="width:150px;" size="mini" ></el-input>
                            <el-button size="mini">...</el-button>
                        </div>
                        <div>
                            <div class="title">出单员<span>*</span></div>
                            <el-input v-model="orderMaker" style="width:150px;" size="mini" ></el-input>
                            <el-button size="mini">...</el-button>
                        </div>
                        <div>
                            <div class="title">出单日期<span>*</span></div>
                            <el-date-picker
                            size="mini"
                            v-model="outDate"
                            type="date"
                            placeholder="选择日期">
                            </el-date-picker>
                            <div class="title">&nbsp;&nbsp;交费日期<span>*</span></div>
                            <el-date-picker
                            size="mini"
                            v-model="payDate"
                            type="date"
                            placeholder="选择日期">
                            </el-date-picker>
                            <div class="title">&nbsp;&nbsp;交费类别</div>
                            <el-select v-model="payTypeSel" size="mini" >
                                <el-option
                                v-for="item in payTypeOpt"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div>
                            <div class="title">核拥状态</div>
                           <el-select v-model="statusSel1" size="mini" >
                                <el-option
                                v-for="item in statusOpt1"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                             <div class="title">&nbsp;&nbsp;核发状态</div>
                           <el-select v-model="statusSel2" size="mini" >
                                <el-option
                                v-for="item in statusOpt2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div>
                            <div style="margin:10px 0 5px;">添加险种：</div>
                            <el-table
                                ref="recordTable"
                                size="mini"
                                border
                                height="200px"
                                :data="msgList"
                                highlight-current-row>
                                <el-table-column
                                type="index"
                                width="50">
                                </el-table-column>
                                <el-table-column
                                property="orderNum"
                                label="险种简称"
                                sortable :show-overflow-tooltip="true"
                                width="120">
                                </el-table-column>
                                <el-table-column
                                property="name"
                                label="保费"
                                sortable :show-overflow-tooltip="true"
                                width="120">
                                </el-table-column>
                                <el-table-column
                                property="address"
                                label="费率（收）"
                                sortable :show-overflow-tooltip="true"
                                 width="120">
                                </el-table-column>
                                <el-table-column
                                property="address"
                                label="费率（支）"
                                sortable :show-overflow-tooltip="true"
                                 width="120">
                                </el-table-column>
                                <el-table-column
                                property="address"
                                label="保险期间起"
                                sortable :show-overflow-tooltip="true"
                                 width="120">
                                </el-table-column>
                                <el-table-column
                                property="address"
                                label="保险期间止"
                                sortable :show-overflow-tooltip="true"
                                 width="120">
                                </el-table-column>
                                <el-table-column
                                label="操作">
                                    <template slot-scope="scope">
                                        <el-button @click.native.prevent="claimDelete(scope.$index,msgList)" type="danger" size="mini">移除</el-button>
                                        <el-button type="primary" size="mini" @click="dialogVisible = true">编辑</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-dialog
                                title="险种编辑"
                                :visible.sync="dialogVisible"
                                width="50%">
                                <div class="bodyMsg">
                                        <div>
                                            <div>
                                                <div class="carTitle">投保险种/代码</div> 
                                                <el-select v-model="insurNode" size="mini">
                                                    <el-option
                                                    v-for="item in insurNodeOpt"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </div>
                                            <div>
                                                <div class="carTitle">保额/责任限额</div> 
                                                <el-input v-model="insurLimit" size="mini"  style="width:200px"></el-input>
                                            </div>
                                            <div>
                                                <div class="carTitle">保费</div> 
                                                <el-input v-model="insurFee" size="mini"  style="width:200px"></el-input>
                                            </div>
                                            <div>
                                                <div class="carTitle">保险期间起</div> 
                                                <el-date-picker 
                                                size="mini"
                                                v-model="dialogStartDate"
                                                type="date"
                                                placeholder="选择日期">
                                                </el-date-picker>
                                            </div>
                                            <div>
                                                <div class="carTitle">保险期间止</div> 
                                                <el-date-picker 
                                                size="mini"
                                                v-model="dialogEndDate"
                                                type="date"
                                                placeholder="选择日期">
                                                </el-date-picker>
                                            </div>
                                        </div>
                                    <fieldset>
                                        <legend>
                                            佣金费率
                                        </legend>
                                        <div>
                                            <div>
                                                <div class="carTitle">收</div> 
                                                <el-input v-model="moneyIn" size="mini"  style="width:200px"></el-input>
                                            </div>
                                            <div>
                                                <div class="carTitle">支</div> 
                                                <el-input v-model="moneyOut" size="mini"  style="width:200px"></el-input>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <span slot="footer" class="dialog-footer">
                                    <el-button size="mini" type="danger" @click="dialogVisible = false">取 消</el-button>
                                    <el-button size="mini" type="primary" @click="dialogVisible = false">确 定</el-button>
                                </span>
                            </el-dialog>
                            <div style="margin-top:10px;">
                                <el-button type="primary" size="mini" @click="dialogVisible = true">新增</el-button>
                                <el-button type="primary" size="mini">配置费率方案</el-button>
                            </div>
                        </div>
                        <fieldset>
                            <legend>
                                业务员信息
                            </legend>
                            <div>
                                <div>
                                    <div class="title">业务员姓名</div>
                                    <el-input v-model="saleName" style="width:150px;" size="mini" ></el-input>&nbsp;&nbsp;&nbsp;
                                    <div class="title">业务员电话</div>
                                    <el-input v-model="saleTel" style="width:150px;" size="mini" ></el-input>
                                </div>
                                <div>
                                    <div class="title">业务员账号</div>
                                    <el-input v-model="saleId" style="width:400px;" size="mini" ></el-input>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div class="grid-content processBox">
                        <span class="carTitle claimProcess">备注/特别约定</span>
                        <el-input type="textarea" :rows="3" v-model="remark" size="mini" style="width:85%;" class="processInput"></el-input>  
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="保单附件" name="relevanceTab">
                <div class="tabContent">
                    <el-table
                        class="table"
                        ref="recordTable"
                        size="mini"
                        border
                        height="780px"
                        :data="msgList"
                        highlight-current-row>
                        <el-table-column
                        type="index"
                        width="50">
                        </el-table-column>
                        <el-table-column
                        property="orderNum"
                        label="类别"
                        sortable :show-overflow-tooltip="true"
                        width="110">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="记录属性"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="属性内容"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="orderNum"
                        label="有效期起"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="有效期止"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="附件说明"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="附件格式"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="大小(KB)"
                        sortable :show-overflow-tooltip="true"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        label="操作"
                        width="160">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="claimDelete(scope.$index,msgList)" type="danger" size="mini">移除</el-button>
                            <el-button type="primary" size="mini">下载</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    <div class="oprateBtn">
                        <el-button type="primary" size="mini" @click="fileDialogVisible = true">新增附件</el-button>
                    </div>
                    <el-dialog
                    title="车险保单记录附件"
                    :visible.sync="fileDialogVisible"
                    width="60%">
                    <div class="bodyMsg">
                        <div>
                            <div class="carTitle">记录属性</div> 
                            <el-select v-model="recordProperty" size="mini">
                                <el-option
                                v-for="item in propertyOpt"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <el-select v-model="recordProperty2" size="mini">
                                <el-option
                                v-for="item in propertyOpt2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div>
                            <div class="carTitle">属性内容</div> 
                            <el-input v-model="propertyContent" size="mini"  style="width:400px"></el-input>
                        </div>
                        <div>
                            <div class="carTitle">有效期间</div> 
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
                                <div class="carTitle claimProcess">备注</div>
                                <el-input type="textarea" :rows="3" v-model="fileRemark" size="mini" class="processInput"></el-input>  
                            </div>
                        </div>
                        <div>
                            <div class="grid-content processBox">
                            <div class="carTitle claimProcess">附加档案</div> 
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
            <el-tab-pane label="理赔" name="friendTab">
                <div class="tabContent">
                    <el-table
                        class="table"
                        ref="recordTable"
                        size="mini"
                        border
                        height="780px"
                        :data="msgList"
                        highlight-current-row>
                        <el-table-column
                        type="index"
                        width="50">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="报案号"
                        sortable :show-overflow-tooltip="true"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="orderNum"
                        label="理赔保单号"
                        sortable :show-overflow-tooltip="true"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="报案时间"
                        sortable :show-overflow-tooltip="true"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="查勘员"
                        sortable :show-overflow-tooltip="true"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="是否结案"
                        sortable :show-overflow-tooltip="true"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="orderNum"
                        label="备注"
                        sortable :show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                        label="操作"
                        width="160">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="claimDelete(scope.$index,msgList)" type="danger" size="mini">移除</el-button>
                            <el-button type="primary" size="mini" @click="claimEditor(scope.row)">编辑</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    <div class="oprateBtn">
                        <el-button type="primary" size="mini" @click="claimAdd">新增理赔</el-button>
                    </div>
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
    headerTitle:'车险保单编辑',
    editor:true,
    clientName:'',
    clientName1:'',
    peoRadio:'1',
    peoRadio1:'1',
    sexSel:'男',
    sexSel1:'男',
    sexOpt:[{
        value:'男',
    },{
        value:'女',
    }],
    birthDate:'',
    birthDate1:'',
    cardSel:'身份证',
    cardSel1:'身份证',
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
    cardValue:'',
    cardValue1:'',
    phoneNum:'',
    phoneNum1:'',
    addressSel:'家庭地址有效',
    addressSel1:'家庭地址有效',
    addressOpt:[{
          value: '家庭地址有效',
        }, {
          value: '单位地址有效',
        }, {
          value: '其他地址',
        }],
    addressValue:'',
    addressValue1:'',
    emailValue:'',
    emailValue1:'',
    syncChecked:false,
    carSel:'',
    carOpt:[{
        value:'无'
    }],
    carNum:'',
    useType:'',
    brandType:'',
    engineNum:'',
    frameNum:'',
    carTypeSel:'家庭自用车',
    carTypeOpt:[{
          value: '家庭自用车',
        }, {
          value: '非营业客车',
        }, {
          value: '营业客车',
        }, {
          value: '非营业货车',
        }, {
          value: '营业货车',
        }, {
          value: '特种车',
        }, {
          value: '摩托车',
        }],
    typeSortSel:'',
    typeSortOpt:[{
          value: '家庭自用车',
        }, {
          value: '非营业客车',
        }, {
          value: '营业客车',
        }, {
          value: '非营业货车',
        }, {
          value: '营业货车',
        }, {
          value: '特种车',
        }, {
          value: '摩托车',
        }],
    tonnage:'',
    paiLiang:'',
    power:'',
    registerDate:'',
    mileage:'',
    ownerName:'',
    insuranceSel:'新车',
    insuranceOpt:[{
          value: '新车',
        }, {
          value: '旧车',
        }, {
          value: '过户车',
        }],
    carPrice:'',
    outTime:'',
    judgeSel:'是',
    judgeOpt:[{
        value: '是',
    },{
        value: '否',
    }],
    compSel:'',
    compOpt:[{}],
    startDate:'',
    trafficNum:'',
    businessNum:'',
    orderTypeSel:'',
    orderTypeOpt:[{
        value:'续保',
    },{
        value:'新保',
    }],
    otherNum:'',
    opraterA:'',
    opraterB:'',
    orderMaker:'',
    outDate:'',
    payDate:'',
    payTypeSel:'',
    payTypeOpt:[{
        value:'银行划账',
    },{
        value:'支票',
    }],
    statusSel1:'',
    statusOpt1:[],
    statusSel2:'',
    statusOpt2:[],
    saleName:'',
    saleTel:'',
    saleId:'',
    remark:'',
    msgList: [{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市 '
        }, {
          orderNum: '576542526',
          name: '小虎',
          address: '北京市'
        },{
          orderNum: '345345345',
          name: '王小虎',
          address: '上海市'
        }],
    dialogVisible:false,
    insurNode:'',
    insurNodeOpt:[{
        value:'交强险',
    },{
        value:'商业险',
    }],
    insurLimit:'',
    insurFee:'',
    dialogStartDate:'',
    dialogEndDate:'',
    moneyIn:'',
    moneyOut:'',
    fileDialogVisible:false,
    recordProperty:'',
    propertyOpt:[{
        value:'单证信息', 
    },{
        value:'车辆信息',
    }],
    recordProperty2:'',
    propertyOpt2:[{
        value:'投保单',
    },{
        value:'保单',
    }],
    propertyContent:'',
    effectiveDate:'',
    fileRemark:'',
    fileList: [{name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
 }
 },
 components: {

 },
 computed: {
    //  clientName1:{
    //      get(){
    //           // this.clientName;
    //         // if(this.syncChecked){
    //         //   return this.clientName2=this.clientName;
    //         // }else{
    //         //     return this.clientName2;
    //         // }
    //         return this.clientName2;
    //      },
    //      set(value){
    //          this.clientName2=value
    //      }
    //     //  if(this.syncChecked){
    //     //       return this.clientName;
    //     //  }else{
    //     //      return '';
    //     //  }
        
    //  }
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
            this.headerTitle="车险保单编辑"
        }else{
             this.headerTitle="车险保单添加"
        }
        // console.log(this.orderNum)
    },
    inputChange(value){

        var boolean=this.syncChecked;
        this.clientName1 = boolean ? this.clientName : '';
    //     if(boolean){
    //        this.clientName2=this.clientName;
    //     }else{
    //         this.clientName2='';
    //     }
    //    this.clientName1.set(this.clientName2);
    //    this.clientName1.get();
        this.peoRadio1  =boolean ? this.peoRadio : '';
        this.sexSel1 = boolean ? this.sexSel : '';
        this.birthDate1 = boolean ? this.birthDate : '';
        this.cardSel1 = boolean ? this.cardSel : '';
        this.cardValue1 = boolean ? this.cardValue : '';
        this.phoneNum1 = boolean ? this.phoneNum : '';
        this.addressSel1 = boolean ? this.addressSel : '';
        this.addressValue1 = boolean ? this.addressValue : '';
        this.emailValue1 = boolean ? this.emailValue : '';
    },
    syncChange(){
         this.inputChange(this.syncChecked);
    },
    
     claimDelete(index,table){
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
     claimEditor(){
         this.$router.push({path:"/user/claimEditor",query:{editor:true}})
     },
      claimAdd(){
         this.$router.push({path:"/user/claimEditor",query:{editor:false}})
     },
      beforeRemove(file){
        console.log(file);
        return this.$confirm(`确定移除 ${ file.name }？`);
        },
        handleChange(file,fileList){
            console.log(file,fileList)
            this.fileList= fileList.slice(-3);
        },
         handleExceed(files, fileList) {
        this.$message.warning(`当前限制上传 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
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
      //vm.fetch();
    })
  }
}
</script>

<style scoped lang="scss">
header .headerTitle{
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
    .tabContent{
        position: relative;
        text-align: left;
        padding:0 20px;
        // height: 100%;
        // overflow: scroll;
        .msgTitle{
            width:100%;
            height:30px;
            line-height: 30px;
            background-color:#e8e8f0;
            margin-top:10px;
            span{
                margin:0 10px;
            }
        }
        .msgContent{
            border:1px solid black;
            padding:10px;
            border-top:none;
            
        }
        .carTitle{
            display: inline-block;
            width:110px;
            text-align: right;
            padding:10px;
             span{
                color:red;
                margin-left:3px;
            }
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
                    left:115px;
                    width:70%;
                }
            }
        .bodyMsg{
        width:90%;
        margin:auto;
        height:400px;
        overflow: auto;
        border:1px solid #d4d8e4;
         padding:10px 30px;
        }
    }
     .title{
        display: inline-block;
        width:75px;
        text-align: left;
        padding:10px 0;
        span{
            color:red;
            margin-left:3px;
        }
    }
    .content{
        display: inline-block;
        .inputNum{
            display: inline-block;
            margin-left:10px;
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
    width:100%;
    padding:10px;
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
