<template>
<div class="page">
<header>
    <span @click="goBack"><i class="el-icon-back"></i></span> 
    <span>{{title}}</span>
</header>
 <div class="addcontent">
    <el-tabs type="border-card" v-model="activeName" class="bigtabs">
        <el-tab-pane label="基本信息" name="first">
            <el-row :gutter="6">
                <el-col :span="3">
                    <el-card shadow="never">
                    <img src="../../common/images/person.png"/>
                    </el-card>
                </el-col>
                <el-col :span="18">
                        <table class="table1">
                            <tr>
                                <td>中文姓名</td>
                                <td><el-input size="mini" placeholder="请输入中文姓名" v-model="chineseName"></el-input></td>
                                <td>英文姓名</td>
                                <td><el-input size="mini" placeholder="请输入英文姓名" v-model="englishName"></el-input></td>
                                <td>性别</td>
                                <td>
                                    <el-select v-model="sexValue" placeholder="请选择性别" size="mini">
                                    <el-option
                                    v-for="item in sexOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </td>
                            </tr>
                            <tr>
                                <td>身份证件</td>
                                <td colspan="3">
                                <el-select v-model="idCardSel" placeholder="请选择证件" size="mini" style="width:40%;display:inline-block">
                                    <el-option
                                    v-for="item in idCardOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                                <el-input style="width:55%;" size="mini" v-model="idCardInput" placeholder="请输入证件号码"></el-input>
                                </td>
                                <td>出生日期</td>
                                <td>
                                    <el-date-picker
                                    size="mini"
                                    v-model="birthdaytime"
                                    type="date"
                                    placeholder="选择日期">
                                    </el-date-picker>
                                </td>
                            </tr>
                            <tr>
                                <td>员工编号</td>
                                <td colspan="3">
                                    <el-input style="width:100%;" v-model="personNumber" size="mini" placeholder="请输入员工编号"></el-input>
                                </td>
                                <td>婚姻</td>
                                <td>
                                    <el-select v-model="marrySel" placeholder="请选择婚姻状态" size="mini" style="width:100px;display:inline-block">
                                    <el-option
                                    v-for="item in marryOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                            </td>
                            </tr>
                            <tr>
                                <td>文化程度</td>
                                <td>
                                    <el-select v-model="knowledgeSel" placeholder="请选择文化程度" size="mini" >
                                    <el-option
                                    v-for="item in knowledgeOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                            </td>
                                <td>名族</td>
                                <td>
                                <el-select v-model="ethicSel" placeholder="请选择名族" size="mini" >
                                    <el-option
                                    v-for="item in ethicOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                                </td>
                                <td>血型</td>
                                <td>
                                    <el-select v-model="bloodSel" placeholder="请选择血型" size="mini" >
                                    <el-option
                                    v-for="item in bloodSelOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                                </td>
                            </tr>
                            <tr>
                                <td>联系地址</td>
                                <td colspan="3"><el-input style="width:100%;" v-model="addr" size="mini" placeholder="请输入地址"></el-input></td>
                                <td>邮编</td>
                                <td><el-input style="width:100%;" size="mini" v-model="emailCode" placeholder="请输入邮编"></el-input></td>
                            </tr>
                            <tr>
                                <td>联系电话</td>
                                <td colspan="3"><el-input style="width:100%;" v-model="tel" size="mini" placeholder="请输入联系电话"></el-input></td>
                                <td>邮箱</td>
                                <td><el-input style="width:100%;" size="mini"  v-model="email" placeholder="请输入邮箱"></el-input></td>
                            </tr>
                            <tr>
                                <td>紧急联系人</td>
                                <td><el-input size="mini" placeholder="请输入姓名" v-model="linkerName"></el-input></td>
                                <td>紧急联系人</td>
                                <td><el-input size="mini" placeholder="请输入电话" v-model="linkerTel"></el-input></td>
                                <td>紧急联系人</td>
                                <td><el-input size="mini" placeholder="请输入地址" v-model="linkerAddr"></el-input></td>
                                    
                            </tr>
                            <tr>
                                <td>备注说明</td>
                                <td colspan="5"><el-input style="width:100%;" v-model="otherDetail" size="mini" placeholder="请输入内容"></el-input></td>

                            </tr>
                            <!-- <tr>
                                <td>其他</td>
                                <td colspan="5"></td>
                            </tr> -->
                        </table>
                </el-col>
            </el-row>
        <el-row :gutter="20">
        <el-col :span="14">
            <div>
                <span style="width:60%;">目前职级</span>
                <span><el-input style="width:50%;" size="mini" placeholder="请输入内容"></el-input></span>
                <span><el-button type="primary" size="mini">信息上锁</el-button></span>
            </div>
        </el-col>
        <el-col :span="10">
            <div v-show="show1">
                <el-tooltip placement="bottom">
                <div slot="content">
                    <div v-for="(item,index) in createAccount" :key="item.content">
                        <span>{{item.name}}：</span>
                        <span>{{item.content}}</span>
                    </div>
                </div>
                <el-button size="mini">创建者信息</el-button>
                </el-tooltip>
                <el-tooltip placement="bottom">
                <div slot="content">
                    <div v-for="(item,index) in updateAccount" :key="item.content">
                        <span>{{item.name}}：</span>
                        <span>{{item.content}}</span>
                    </div>
                </div>
                <el-button size="mini">更新者信息</el-button>
                </el-tooltip>
                <!-- <el-button type="primary" size="mini">创建</el-button> -->
                <!-- <el-button type="primary" size="mini">更新者信息</el-button> -->
            </div>
        </el-col>
        </el-row>  
    </el-tab-pane>
    <el-tab-pane label="单位职级" name="second" class="bigtabs">
        <div class="tableContent">
            <el-row :gutter="20">
            <el-col :span="12">
                <table class="table2">
                    <tr>
                        <td rowspan="5">当前职级</td>
                        <td>分支机构</td>
                        <td></td>
                        <td>职级生效</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>所属部门</td>
                        <td></td>
                        <td>介绍人</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>勤务类型</td>
                        <td></td>
                        <td>关系上属</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>当前职级</td>
                        <td></td>
                        <td>行政主管</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>行政主管2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </el-col>
            <el-col :span="8">
                <table class="table1 ">
                    <tr>
                        <td>入司日期</td>
                        <td>
                        <el-date-picker
                            size="mini"
                            style="width:100%"
                            v-model="enterComTime"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                        </td>
                    </tr>
                    <tr>
                        <td>合同号码</td>
                        <td>
                            
                        </td>
                    </tr>
                    <tr>
                        <td rowspan="2">合同期间</td>
                        <td><el-date-picker
                            size="mini"
                            style="width:100%"
                            v-model="contractStart"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker></td>
                    </tr>
                    <tr>
                        <td style="background-color:#fff">
                            <el-date-picker
                            size="mini"
                            style="width:100%"
                            v-model="contractEnd"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker></td>
                    </tr>
                </table>
            </el-col>
            </el-row>
        </div>
        <div class="tableResult">
            <span>变迁履历标识记录：0/0</span>
            <el-table
            size="mini"
            :data="recordList2"
            border
            style="width: 100%"
            height="200"
            max-height="300">
            <!-- <el-table-column v-for="item in tableHead2" :key="item.property" :label="item.label" :property="item.property" :width="item.width">
            
            </el-table-column> -->
            <el-table-column v-for="item in tableHead2" :key="item.property" :label="item.label" :property="item.property" :fixed="item.fixed" :width="item.width">
                <template slot-scope="scope">
                    <div v-if="item.oper">
                            <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
                        <el-button  type="text" size="small" @click="editInformation(scope.row)">查看/编辑</el-button> 
                    </div>
                    <div v-else>
                        {{ scope.row[item.property]}}
                    </div>
        
                </template>
            </el-table-column> 
            </el-table>
            <div class="tab2TableButton">
            <!-- <el-button type="danger" size="mini">删除</el-button>
            <el-button type="primary" size="mini" @click="dialogBianqianVisible = true">编辑</el-button> -->
            <el-button type="primary" size="mini" @click="editInformation('')">新增一条变迁记录</el-button>
            </div>
        </div>
       <el-dialog title="职级变迁编辑" :visible.sync="dialogBianqianVisible">
        <el-form ref="tab2Form" :model="tab2Form" label-width="80px" :rules="rules">
        <el-form-item label="变迁理由" prop="reason">
            <el-select v-model="tab2Form.reason"  collapse-tags size="mini" placeholder="请选择">
                <el-option v-for="item in reasonOptions" :key="item.value" :label="item.label" :value="item.value"></el-option> 
            </el-select>
        </el-form-item>
        <el-form-item label="到-机构" prop="toInstitute">
            <el-select v-model="tab2Form.toInstitute"  collapse-tags size="mini" placeholder="请选择">
                <el-option v-for="item in instituteOptions" :key="item.value" :label="item.label" :value="item.value"></el-option> 
            </el-select>
        </el-form-item>
        <el-form-item label="到-部门" prop="toBranch">
            <el-select v-model="tab2Form.toBranch"  collapse-tags size="mini" placeholder="请选择">
                <el-option v-for="item in branchOptions" :key="item.value" :label="item.label" :value="item.value"></el-option> 
            </el-select>
        </el-form-item>
        <el-form-item label="到-职级" prop="tozhiji">
            <el-select v-model="tab2Form.tozhiji"  collapse-tags size="mini" placeholder="请选择">
                <el-option v-for="item in zhijiOptions" :key="item.value" :label="item.label" :value="item.value"></el-option> 
            </el-select>
        </el-form-item>
         <el-form-item label="职级期间" prop="duringTime" required>
           <el-date-picker
            v-model="tab2Form.duringTime"
            type="date"
            size="mini"
            placeholder="选择日期">
            </el-date-picker>
           <!-- <el-date-picker
            v-model="tab2Form.duringTime"
            type="date"
            size="mini"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
            </el-date-picker> -->
        </el-form-item> 
        <el-form-item label="备注">
            <el-input type="textarea" size="mini" v-model="tab2Form.detail"></el-input>
        </el-form-item> 
        <el-form-item label="介绍人">
            <el-input type="text" size="mini" v-model="tab2Form.introducer"></el-input>
        </el-form-item> 
        <el-form-item label="关系上属">
            <el-input type="text" size="mini" v-model="tab2Form.boss1"></el-input>
        </el-form-item> 
        <el-form-item label="行政主管1">
            <el-input type="text" size="mini" v-model="tab2Form.boss2"></el-input>
        </el-form-item> 
        <el-form-item label="行政主管2">
            <el-input type="text" size="mini" v-model="tab2Form.boss3"></el-input>
        </el-form-item> 
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button  size="mini" @click="resetForm('tab2Form')">重置</el-button>
            <el-button type="primary" size="mini"  @click="submitForm1('tab2Form')">确 定</el-button>
        </div>
        </el-dialog>
    </el-tab-pane>
    <el-tab-pane label="文档信息" name="third" class="bigtabs">
        <div class="tableResult2">
            <!-- <span>标识记录：0/0</span> -->
            <el-table
            size="mini"
            :data="recordList3"
            border
            style="width: 100%"
            height="400"
            max-height="550">
            <!-- <el-table-column v-for="item in tableHead3" :key="item.property" :label="item.label" :property="item.property" :width="item.width">
            </el-table-column> -->
            <el-table-column v-for="item in tableHead3" :key="item.property" :label="item.label" :property="item.property" :fixed="item.fixed" :width="item.width">
                <template slot-scope="scope">
                    <div v-if="item.oper">
                            <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
                        <el-button  type="text" size="small" @click="editInTab3formation(scope.row)">查看/编辑</el-button> 
                    </div>
                    <div v-else>
                        {{ scope.row[item.property]}}
                    </div>
                </template>
            </el-table-column>
            </el-table>
            <div class="tab2TableButton">
            <el-row :gutter="20">
                <el-col :span="14">
                    <!-- <el-button type="danger" size="mini" >删除</el-button>
                    <el-button type="primary" size="mini" >编辑</el-button>
                    <el-button type="primary" size="mini" >添加</el-button> -->
                    <el-button type="primary" size="mini" @click="editInTab3formation()">新增文档信息</el-button>
                </el-col>  
            </el-row>       
            </div>
        <el-dialog title="文档/证卡详细信息" :visible.sync="dialogDocVisible">
            <el-form ref="tab3Form" :model="tab3Form" label-width="100px" >
               <el-form-item label="文档/证卡名称">
                    <el-select v-model="tab3Form.name"  collapse-tags size="mini" placeholder="请选择" style="width:50%">
                        <el-option v-for="item in nameOptions" :key="item.value" :label="item.label" :value="item.value"></el-option> 
                    </el-select>
                </el-form-item> 
                <el-form-item label="内容卡号">
                    <el-input type="text" size="mini" v-model="tab2Form.cardContent" style="width:50%"></el-input>
                </el-form-item>
                <el-form-item label="有效期">
                    <el-date-picker
                    style="width:50%"
                    size="mini"
                    v-model="tab3Form.duringTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="影像文档">
                    <!-- <el-input type="text" size="mini" v-model="tab3Form.mediaDoc" style="width:50%"></el-input> -->
                     <!-- <el-input type="input" size="mini" ></el-input>  -->
                    <input type="file" name="file"/>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" size="mini" v-model="tab3Form.detail"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" size="mini"  @click="submitForm3('tab3Form')">确 定</el-button>
            </div>
        </el-dialog>
        </div>
    </el-tab-pane>
    <el-tab-pane label="工作经历" name="fourth" class="bigtabs">
       <div class="tableResult2">
            <!-- <span>标识记录：0/0</span> -->
            <el-table
            size="mini"
            :data="recordList4"
            border
            style="width: 100%"
            height="400"
            max-height="550">
            <!-- <el-table-column v-for="item in tableHead4" :key="item.property" :label="item.label" :property="item.property" :width="item.width">
            </el-table-column> -->
            <el-table-column v-for="item in tableHead4" :key="item.property" :label="item.label" :property="item.property" :fixed="item.fixed" :width="item.width">
                <template slot-scope="scope">
                    <div v-if="item.oper">
                            <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
                        <el-button  type="text" size="small" @click="editInTab4formation(scope.row)">查看/编辑</el-button> 
                    </div>
                    <div v-else>
                        {{ scope.row[item.property]}}
                    </div>
                </template>
            </el-table-column>
            </el-table>
            <div class="tab2TableButton">
                <el-row :gutter="20">
                <el-col :span="14">
                    <!-- <el-button type="danger" size="mini" >删除</el-button>
                    <el-button type="primary" size="mini" >编辑</el-button> -->
                    <el-button type="primary" size="mini" @click="addWorkInformation()">新增一条记录</el-button>
                </el-col>
                </el-row> 
            </div>
            <el-dialog title="员工工作经历" :visible.sync="dialogWorkVisible">
            <el-form ref="tab4Form" :model="tab4Form" label-width="100px" >
                <el-form-item label="单位名称">
                    <el-input type="text" size="mini" v-model="tab4Form.name" style="width:50%"></el-input>
                </el-form-item>
                <el-form-item label="职级">
                    <el-input type="text" size="mini" v-model="tab4Form.zhiji" style="width:50%"></el-input>
                </el-form-item>
                <el-form-item label="工作期间">
                    <el-date-picker
                    style="width:50%"
                    size="mini"
                    v-model="tab4Form.duringTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="执掌业务">
                    <el-input type="text" size="mini" v-model="tab4Form.doWhat" style="width:50%"></el-input>
                </el-form-item>
                <el-form-item label="影像文档">
                    <input type="file" name="file"/>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" size="mini" v-model="tab4Form.detail"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" size="mini"  @click="submitForm4()">确 定</el-button>
            </div>
            </el-dialog>
        </div> 
    </el-tab-pane>
    <el-tab-pane label="教育经历" name="fifth" class="bigtabs">
        <div class="tableResult2">
            <!-- <span>标识记录：0/0</span> -->
            <el-table
            size="mini"
            :data="recordList5"
            border
            style="width: 100%"
            height="400"
            max-height="550">
            <!-- <el-table-column v-for="item in tableHead5" :key="item.property" :label="item.label" :property="item.property" :width="item.width">
            </el-table-column> -->
            <el-table-column v-for="item in tableHead5" :key="item.property" :label="item.label" :property="item.property" :fixed="item.fixed" :width="item.width">
                <template slot-scope="scope">
                    <div v-if="item.oper">
                            <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
                        <el-button  type="text" size="small" @click="editInTab5formation(scope.row)">查看/编辑</el-button> 
                    </div>
                    <div v-else>
                        {{ scope.row[item.property]}}
                    </div>
                </template>
            </el-table-column>
            </el-table>
            <div class="tab2TableButton">
                <el-row :gutter="20">
                <el-col :span="14">
                    <!-- <el-button type="danger" size="mini" >删除</el-button>
                    <el-button type="primary" size="mini" >编辑</el-button> -->
                    <el-button type="primary" size="mini" @click="addEduInformation()">新增一条信息</el-button>
                </el-col>
                </el-row> 
            </div>
            <el-dialog title="员工教育经历详细信息" :visible.sync="dialogEduVisible">
            <el-form ref="tab5Form" :model="tab5Form" label-width="100px" >
                <el-form-item label="毕业院校">
                    <el-input type="text" size="mini" v-model="tab5Form.schoolName" style="width:50%"></el-input>
                </el-form-item>
                <el-form-item label="专业名称">
                    <el-input type="text" size="mini" v-model="tab5Form.majorName" style="width:50%"></el-input>
                </el-form-item>
                <el-form-item label="开始日期">
                    <el-date-picker
                    style="width:50%"
                    size="mini"
                    v-model="tab5Form.duringTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="影像文档">
                    <input type="file" name="file"/>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" size="mini" v-model="tab5Form.detail"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" size="mini"  @click="submitForm5()">确 定</el-button>
            </div>
            </el-dialog>
        </div> 
    </el-tab-pane>
    <el-tab-pane label="培训经历" name="sixth" class="bigtabs">
        <div class="tableResult2">
            <!-- <span>标识记录：0/0</span> -->
            <el-table
            size="mini"
            :data="recordList6"
            border
            style="width: 100%"
            height="400"
            max-height="550">
            <!-- <el-table-column v-for="item in tableHead6" :key="item.property" :label="item.label" :property="item.property" :width="item.width">
            </el-table-column> -->
            <el-table-column v-for="item in tableHead6" :key="item.property" :label="item.label" :property="item.property" :fixed="item.fixed" :width="item.width">
                <template slot-scope="scope">
                    <div v-if="item.oper">
                            <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
                        <el-button  type="text" size="small" @click="editInTab6formation(scope.row)">查看/编辑</el-button> 
                    </div>
                    <div v-else>
                        {{ scope.row[item.property]}}
                    </div>
                </template>
            </el-table-column>
            </el-table>
            <div class="tab2TableButton">
                <el-row :gutter="20">
                <el-col :span="14">
                    <!-- <el-button type="danger" size="mini" >删除</el-button>
                    <el-button type="primary" size="mini" >编辑</el-button> -->
                    <el-button type="primary" size="mini" @click="addExerciseInfor()">新增信息</el-button>
                </el-col>
                </el-row> 
            </div>
            <el-dialog title="员工培训经历详细信息" :visible.sync="dialogExerciseVisible">
            <el-form ref="tab6Form" :model="tab6Form" label-width="100px" >
                <el-form-item label="培训名称">
                    <el-input type="text" size="mini" v-model="tab6Form.name" style="width:50%"></el-input>
                </el-form-item>
                <el-form-item label="培训内容">
                    <el-input type="text" size="mini" v-model="tab6Form.content" style="width:50%"></el-input>
                </el-form-item>
                 <el-form-item label="影像文档">
                    <input type="file" name="file"/>
                </el-form-item>
                <el-form-item label="培训时间">
                    <el-date-picker
                    style="width:50%"
                    size="mini"
                    v-model="tab6Form.duringTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
               
                <el-form-item label="备注">
                    <el-input type="textarea" size="mini" v-model="tab6Form.detail"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" size="mini"  @click="submitForm6()">确 定</el-button>
            </div>
            </el-dialog>
        </div>
    </el-tab-pane>
</el-tabs>     
</div>
 <div class="bottomButton">
    <el-row :gutter="20">
    <el-col :span="10" :offset="14">
        <el-button type="primary" size="mini" style="width:100px;">确定</el-button>
        <el-button type="primary" size="mini" style="width:100px;">取消</el-button>
        <el-button type="primary" size="mini" style="width:100px;">应用</el-button>
    </el-col>
    </el-row>
</div> 
</div>

</template>
<script>
export default {
  data() {
    return {
     title:'',
     activeName:'first',
     chineseName:'',
     englishName:'',
     sexValue:'',
     sexOptions:[{
          value: '男',
          label: '男'
        }, {
          value: '女',
          label: '女'
        }],
    idCardSel:'',
    idCardOptions:[{
          value: '身份证',
          label: '身份证'
        }, {
          value: '军人证',
          label: '军人证'
        }],
    idCardInput:'',
    birthdaytime:'',
    personNumber:'',
    marrySel:'',
    marryOptions:[{
          value: '已婚',
          label: '已婚'
        }, {
          value: '未婚',
          label: '未婚'
        }],
    knowledgeSel:'',
    knowledgeOptions:[{
          value: '大学',
          label: '大学'
        }, {
          value: '高中',
          label: '高中'
        }],
    ethicSel:'',
    ethicOptions:[{
          value: '汉族',
          label: '大学'
        }, {
          value: '高中',
          label: '高中'
        }],
    bloodSel:'',
    bloodSelOptions:[{
          value: 'A型',
          label: 'A型'
        }, {
          value: 'B型',
          label: 'B型'
        }],
    addr:'',
    emailCode:'',
    tel:'',
    email:'',
    linkerName:'',
    linkerTel:'',
    linkerAddr:'',
    otherDetail:'',
    informationLock:'',
    tableHead2:[{label:'序号',property:'index',width:''},
            {label:'变迁缘由',property:'reason',width:'100'},
            {label:'职级代码',property:'rankCode',width:''},
            {label:'职级',property:'rank',width:'100'},
            {label:'职级生效日期',property:'rankStartTime',width:'100'},
            {label:'职级有效至',property:'rankEndTime',width:'100'},
            {label:'旧关系上属',property:'OldBoss',width:'100'},
            {label:'备注',property:'detail',width:' '},
            {label: '操作',property: 'oper', fixed: 'right', width:'150',minWidth: '140px',
                oper: [
                    { name: '删除'},
                    { name: '查看/编辑'}
                ]
            }],
    recordList2: [{
          index:'1',
          reason: '入司',
          rankCode: 'PXGL',
          rank: '培训管理',
          rankStartTime: '2018-10-11',
          rankEndTime: '2019-02-08',
          OldBoss: '',
          detail: ''
        }],
    enterComTime:'',
    contractStart:'',
    contractEnd:'',
    dialogBianqianVisible:false,
    tab2Form:{reason:'',toInstitute:'',toBranch:'',tozhiji:'',duringTime:'',detail:'',introducer:'',Boss1:'',Boss2:'',Boss3:''},
    reasonOptions:[{value: '入司',label: '入司'},{value: '转正',label: '转正'},
                   {value: '加盟',label: '加盟'},{value: '复职',label: '复职'},
                   {value: '升值',label: '升值'},{value: '降职',label: '降职'},
                   {value: '免职',label: '免职'},{value: '辞职',label: '辞职'},],
    instituteOptions: [{value: '总部',label: '总部'},{value: '恩施分公司',label: '恩施分公司'},
                   {value: '加盟',label: '加盟'},{value: '复职',label: '复职'},
                   {value: '升值',label: '升值'},{value: '降职',label: '降职'},
                   {value: '免职',label: '免职'},{value: '辞职',label: '辞职'},],  
    branchOptions:[{value: '运营部',label: '运营部'},{value: '技术部',label: '技术部'},
                  {value: '销售部',label: '销售部'},], 
    zhijiOptions:[{value: 'PXGL-培训管理',label: 'PXGL-培训管理'},{value: 'CXCD-车险出单员',label: 'CXCD-车险出单员'},
                  {value: '销售部',label: '销售部'},], 
    rules: {
          reason: [
            { required: true,  message: '请选择变迁缘由',trigger: 'change' }
          ],
         toInstitute: [
            { required: true, message: '请选择分支机构', trigger: 'change' }
          ],
          toBranch: [
            { required: true, message: '请选择部门', trigger: 'change' }
          ],
          tozhiji: [
            { required: true, message: '请选择职级', trigger: 'change' }
          ],
          duringTime: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
        },
    tableHead3:[{label:'序号',property:'index',width:'50'},
            {label:'文档（证件/卡）名称',property:'name',width:'150'},
            {label:'内容（号码）',property:'content',width:'100'},
            {label:'有效期起',property:'startTime',width:'100'},
            {label:'有效期止',property:'endTime',width:'100'},
            {label:'影像文档',property:'mediaDoc',width:'100'},
            {label:'备注',property:'detail',width:''},
            {label: '操作',property: 'oper', fixed: 'right', width:'150',minWidth: '140px',
                oper: [
                    { name: '删除'},
                    { name: '查看/编辑'}
                ]
            }],
    recordList3: [{
          index:'1',
          name: '',
          content: '',
          startTime: '',
          endTime: '',
          mediaDoc: '',
          detail: ''
        }],
    dialogDocVisible:false,
    tab3Form:{name:'',cardContent:'',duringTime:'',mediaDoc:'',detail:''},
    nameOptions:[{value: '银行账户',label: '银行账户'},{value: '代理入证',label: '代理入证'},
                   {value: '经纪人证',label: '经纪人证'},{value: '驾照',label: '驾照'},
                   {value: '保证金收据',label: '保证金收据'},{value: '执业证号',label: '执业证号'},
                   {value: '单号',label: '单号'}],
    tableHead4:[{label:'序号',property:'index',width:'50'},
            {label:'单位名称',property:'name',width:'150'},
            {label:'职级',property:'rank',width:'100'},
            {label:'执掌业务',property:'doWhat',width:'100'},
            {label:'影像文档',property:'mediaDoc',width:'100'},
            {label:'开始日期',property:'startTime',width:'100'},
            {label:'结束日期',property:'endTime',width:'100'},
            {label:'备注',property:'detail',width:''},
            {label: '操作',property: 'oper', fixed: 'right', width:'120',minWidth: '150px',
                oper: [
                    { name: '删除'},
                    { name: '查看/编辑'}
                ]
            }],
    recordList4: [{
          index:'1',
          name: '',
          rank: '',
          doWhat: '',
          startTime:'',
          endTime: '',
          mediaDoc: '',
          detail: ''
        }],
    dialogWorkVisible:false,
    tab4Form:{name:'',zhiji:'',duringTime:'',doWhat:'',detail:''},
    tableHead5:[{label:'序号',property:'index',width:'50'},
            {label:'毕业院校',property:'schollName',width:'150'},
            {label:'专业名称',property:'majorName',width:'100'},
            {label:'影像文档',property:'mediaDoc',width:'200'},
            {label:'开始日期',property:'startTime',width:'100'},
            {label:'结束日期',property:'endTime',width:'100'},
            {label:'备注',property:'detail',width:''},
            {label: '操作',property: 'oper', fixed: 'right', width:'120',minWidth: '150px',
                oper: [
                    { name: '删除'},
                    { name: '查看/编辑'}
                ]
            }],
    recordList5: [{
          index:'1',
          schollName: '',
          majorName: '',
          startTime:'',
          endTime: '',
          mediaDoc: '',
          detail: ''
        }],
    dialogEduVisible:false,
    tab5Form:{schoolName:'',majorName:'',duringTime:'',detail:''},
     tableHead6:[{label:'序号',property:'index',width:'50'},
            {label:'培训课程',property:'className',width:'150'},
            {label:'培训内容',property:'trainContent',width:'100'},
            {label:'影像文档',property:'mediaDoc',width:'200'},
            {label:'开始日期',property:'startTime',width:'100'},
            {label:'结束日期',property:'endTime',width:'100'},
            {label:'备注',property:'detail',width:''},
            {label: '操作',property: 'oper', fixed: 'right', width:'120',minWidth: '150px',
                oper: [
                    { name: '删除'},
                    { name: '查看/编辑'}
                ]
            }],
    recordList6: [{
          index:'1',
          className: '',
          trainContent: '',
          startTime:'',
          endTime: '',
          mediaDoc: '',
          detail: ''
        }],
    dialogExerciseVisible:false,
    tab6Form:{name:'',content:'',duringTime:'',detail:''},
    show1:Boolean,
    createAccount:[{name:'账号名称',content:'chengjiuan'},
                {name:'帐号类别',content:'本公司员工账户'},
                {name:'单位部门',content:'总部-运营部'},
                {name:'员工姓名',content:'陈娟'},
                {name:'建档时间',content:'2019-05-23 15:05:09'}],
    updateAccount:[{name:'账号名称',content:'chengjiuan'},
                {name:'帐号类别',content:'本公司员工账户'},
                {name:'单位部门',content:'总部-运营部'},
                {name:'员工姓名',content:'陈娟'},
                {name:'建档时间',content:'2019-05-23 15:05:09'}]
    };
  },
  methods: {
    editInformation(item){
        this.dialogBianqianVisible=true;
        console.log('item',item)
        if(item !== ''){
            this.tab2Form.reason=item.reason;
            // this.tab2Form.toInstitute=item.rank;
            // this.tab2Form.toBranch=item.reason
            this.tab2Form.tozhiji=item.rank;
            // this.tab2Form.duringTime=item.reason
        }else{
            // this.tab2Form.reason='';
            // this.tab2Form.tozhiji='';
        }
    },
    submitForm1(formName) {
        var that=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            that.dialogBianqianVisible=false;
            that.$refs[formName].resetFields();
            // that.tab2Form.reason='';
            // that.tab2Form.tozhiji='';
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        // this.$refs[formName].resetFields();
      },
    resetForm(formName){
        this.$refs[formName].resetFields();
    },

    editInTab3formation(item){
        this.dialogDocVisible=true;
    },
    submitForm3(){
        this.dialogDocVisible=false;
    },
    editInTab4formation(item){
        this.dialogWorkVisible=true;
    },
    submitForm4(){
        this.dialogWorkVisible=false;
    },
    addWorkInformation(){
        this.dialogWorkVisible=true;
    },
    editInTab5formation(item){
        this.dialogEduVisible=true;
    },
    addEduInformation(){
        this.dialogEduVisible=true;
    },
    submitForm5(){
       this.dialogEduVisible=false;
    },
    editInTab6formation(item){
        this.dialogExerciseVisible=true;
    },
    submitForm6(){
       this.dialogExerciseVisible=false;
    },
    addExerciseInfor(){
        this.dialogExerciseVisible=true;
    },
    fetchData(){
        var userId=this.$route.query.userId;
        if(userId!==''){
            this.show1=true;
            this.chineseName=userId;
            this.title="查看/编辑"+userId+"信息";
        }else if(userId==''){
            this.show1=false;
            this.chineseName=userId;
            this.title="新增员工信息";
        }
    },
    goBack(){
       history.go(-1);
   }
  },
  beforeRouteEnter (to, from, next) {
     next(vm=>{
        vm.fetchData();
     })
  }
};
</script>
<style scoped lang="scss">
.page{
    position:relative; 
    height:100%;
    width:100%;
}
header{
    width:100%;
    background-color:#dddefe;
}
header span:first-child{
    height: 30px;
    line-height: 30px;
    margin-left:5px;
}
header span:nth-child(3){
    float:right;
    height: 30px;
    line-height: 30px;
    margin-right:5px; 
}
.addcontent{
    width:100%;
}
.bigtabs{
    position: relative;
    height:520px;
    // overflow: hidden;
}
.bigtabs /deep/ .el-tabs__content{
    overflow-y:auto !important;
    position:absolute !important;
    left: 0px;
    right:0px;
    top:39px;
    bottom:0px;
    padding:20px 30px;
    height:520px;
    // overflow: hidden;
}

.el-dialog__wrapper /deep/ .el-dialog__body{
    padding-top:0px;
    padding-bottom:10px;
}
.addcontent .table1, .addcontent .table2{
    border:1px solid #dcdfe6;
    width:100%;

}
.addcontent .table1 td,.addcontent .table2 td{
    border:1px solid #dcdfe6;
    border-collapse: collapse;
    height:32px;
    // width:10%;
    
}
.addcontent .table1 td:first-child,.addcontent .table1 td:nth-child(3),.addcontent .table1 td:nth-child(5){
   background-color:#f5f7fa;
   width:70px;
   text-align: center;
}
.addcontent .table1 td:nth-child(2),.addcontent .table1 td:nth-child(4),.addcontent .table1 td:nth-child(6){
   width:150px;
   padding-left:3px;
   padding-right:3px;
}
.bottomContent{
    display:flex;
    align-items:baseline;
}
.el-row {
    margin-bottom: 10px;
    &:last-child {
    //   margin-top:10px;
      margin-bottom: 0;
    }
  }
.bottomButton{
    padding:15px;
}
.addcontent .table2 tr:first-child td:first-child{
   background-color:#f5f7fa;
   width:16px;
   text-align: center;
   padding:5px;
}
.addcontent .table2 tr:first-child td:nth-child(2),.addcontent .table2 tr:first-child td:nth-child(4){
   background-color:#f5f7fa;
   width:70px;
   text-align: center;
}
.addcontent .table2 tr:first-child td:nth-child(3),.addcontent .table2 tr:first-child td:nth-child(5){
   background-color:#fff;
   width:150px;
   padding-left:3px;
   padding-right:3px;
}
.addcontent .table2 tr:not(first-child) td:nth-child(1),.addcontent .table2 tr:not(first-child) td:nth-child(3){
   background-color:#f5f7fa;
   width:70px;
   text-align: center;
}
.addcontent .table2 tr:not(first-child) td:nth-child(2),.addcontent .table2 tr:not(first-child) td:nth-child(4){
   width:150px;
   padding-left:3px;
   padding-right:3px;
}
.tableResult{
    width:85%;
    margin-top:20px;
}
.tab2TableButton{
    margin-top:20px;
}

.tableResult2{
    width:85%;
    // margin-top:20px;
}
.contentItem{
    height:30px;
    margin-top:5px;
    line-height: 30px;
    text-align:middle;
}
.el-form-item{
    margin-bottom:10px !important;
}
</style>