<!-- 保单查看 -->
<template>
  <div id="main">
    <header>
      <i class="el-icon-back" @click="goBack"></i>
      <span>保单查看</span>
    </header>
    <section>
      <template>
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="保单基本信息" name="first">
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <form>
                    <table border="1">
                      <tr>
                        <td>保险公司</td>
                        <td>受理日期</td>
                      </tr>
                      <tr>
                        <td>
                          <el-input v-model="company" placeholder="请输入内容"></el-input>
                        </td>
                        <td>
                          <el-date-picker v-model="date1" type="date" placeholder="选择日期"></el-date-picker>
                        </td>
                      </tr>
                    </table>
                  </form>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <form>
                    <table border="1">
                      <tr>
                        <td>交费类别</td>
                        <td>交费方式</td>
                      </tr>
                      <tr>
                        <td>
                          <el-select v-model="bankChargeSelected" placeholder="请选择">
                            <el-option v-for="item in bankCharges" :key="item.value" :label="item.label"
                              :value="item.value"></el-option>
                          </el-select>
                        </td>
                        <td>
                          <el-select v-model="chargeTypeSelected" placeholder="请选择">
                            <el-option v-for="item in chargeTypes" :key="item.value" :label="item.label"
                              :value="item.value"></el-option>
                          </el-select>
                        </td>
                      </tr>
                    </table>
                  </form>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <form>
                    <table border="1">
                      <tr>
                        <td>相关单据及号码</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <el-select v-model="orderAndNumberSelected" placeholder="请选择">
                            <el-option v-for="item in orderAndNumbers" :key="item.value" :label="item.label"
                              :value="item.value"></el-option>
                          </el-select>
                        </td>
                        <td>
                          <el-input v-model="notKnow1" placeholder="请输入内容"></el-input>
                        </td>
                      </tr>
                    </table>
                  </form>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <form>
                    <table border="1">
                      <tr>
                        <td>保单状态</td>
                        <td>保单号码</td>
                      </tr>
                      <tr>
                        <td>
                          <el-select v-model="orderStatusSelected" placeholder="请选择">
                            <el-option v-for="item in orderStatuss" :key="item.value" :label="item.label"
                              :value="item.value"></el-option>
                          </el-select>
                        </td>
                        <td>
                          <el-input v-model="orderNumber" placeholder="请输入内容"></el-input>
                        </td>
                      </tr>
                    </table>
                  </form>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <form>
                    <table border="1">
                      <tr>
                        <td>保单生效日期</td>
                        <td>保单签发日期</td>
                      </tr>
                      <tr>
                        <td>
                          <el-date-picker v-model="date2" type="date" placeholder="选择日期"></el-date-picker>
                        </td>
                        <td>
                          <el-date-picker v-model="date3" type="date" placeholder="选择日期"></el-date-picker>
                        </td>
                      </tr>
                    </table>
                  </form>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <form>
                    <table border="1">
                      <tr>
                        <td>保单回执 / 交回日期</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <el-select v-model="orderBackDateSelected" placeholder="请选择">
                            <el-option v-for="item in orderBackDates" :key="item.value" :label="item.label"
                              :value="item.value"></el-option>
                          </el-select>
                        </td>
                        <td>
                          <el-input v-model="notKnow2" placeholder="请输入内容"></el-input>
                        </td>
                      </tr>
                    </table>
                  </form>
                </div>
              </el-col>
            </el-row>
            <form>
              <table border="1">
                <tr>
                  <td rowspan="2">投保人联系电话、地址</td>
                  <td>
                    <el-button type="primary" @click="dialogFormVisible1 = true">变更</el-button>
                    <a href="#" @click="insurancePeopleMessage">{{name1}}&nbsp;&nbsp;{{ID1}}</a>
                    <span>{{sex}}&nbsp;&nbsp;{{marry}}&nbsp;&nbsp;{{age}}</span>
                  </td>
                </tr>
                <tr>
                  <td>电话：{{telephone}} 地址:{{address}} 邮编：{{email}}</td>
                </tr>
                <tr>
                  <td>受益人表</td>
                  <td>
                    <el-button type="primary" @click="dialogFormVisible2=true">编辑</el-button>
                    <span>保单受益人：</span>
                    <div id="insuranceBenefitMan" @click="insurancePeopleMessage">{{name1}}&nbsp;&nbsp;{{ID1}}</div>
                    <span>本人</span>
                  </td>
                </tr>
              </table>
            </form>
            <fieldset>
              <legend>
                <span>渠道：&nbsp;&nbsp;</span>
                <el-select v-model="whoseSelected" placeholder="请选择">
                  <el-option v-for="item in whoses" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </legend>
              <el-row :gutter="20">
                <el-col :span="5">
                  <div class="grid-content bg-purple">
                    <form>
                      <table border="1">
                        <tr>
                          <th>A</th>
                          <th>承揽人</th>
                          <th>
                            <el-button @click="dialogVisible1 = true">...</el-button>
                          </th>
                        </tr>
                        <tr>
                          <td colspan="3" class="changeColor">{{name2}}&nbsp;&nbsp;{{ID2}}</td>
                        </tr>
                      </table>
                    </form>
                  </div>
                </el-col>
                <el-col :span="5">
                  <div class="grid-content bg-purple">
                    <form>
                      <table border="1">
                        <tr>
                          <th>B</th>
                          <th>承揽人</th>
                          <th>
                            <el-button @click="dialogVisible1 = true">...</el-button>
                          </th>
                        </tr>
                        <tr>
                          <td colspan="3" class="changeColor">{{name2}}&nbsp;&nbsp;{{ID2}}</td>
                        </tr>
                      </table>
                    </form>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content bg-purple">
                    <form>
                      <table border="1">
                        <tr>
                          <th>C</th>
                          <th>承揽人电话号码</th>
                          <th>
                            <el-button @click="dialogVisible1 = true">...</el-button>
                          </th>
                        </tr>
                        <tr>
                          <td colspan="3" class="changeColor">{{name2}}&nbsp;&nbsp;{{ID2}}</td>
                        </tr>
                      </table>
                    </form>
                  </div>
                </el-col>
                <el-col :span="5">
                  <div class="grid-content bg-purple">
                    <form>
                      <table border="1">
                        <tr>
                          <th>D</th>
                          <th>保全员</th>
                          <th>
                            <el-button @click="dialogVisible1 = true">...</el-button>
                          </th>
                        </tr>
                        <tr>
                          <td colspan="3" class="changeColor">{{name2}}&nbsp;&nbsp;{{ID2}}</td>
                        </tr>
                      </table>
                    </form>
                  </div>
                </el-col>
                <el-col :span="5">
                  <div class="grid-content bg-purple">
                    <form>
                      <table border="1">
                        <tr>
                          <th @click="dialogVisible1 = true">E</th>
                          <th>收费员</th>
                          <th>
                            <el-button>...</el-button>
                          </th>
                        </tr>
                        <tr>
                          <td colspan="3" class="changeColor">{{name2}}&nbsp;&nbsp;{{ID2}}</td>
                        </tr>
                      </table>
                    </form>
                  </div>
                </el-col>
              </el-row>
            </fieldset>
            <div style="float:right;margin-top:10px;margin-bottom:20px;">
              <el-tooltip placement="top">
                <div slot="content">
                  <div v-for="(item) in createAccount" :key="item.name">
                    <span>{{item.name}}：</span>
                    <span>{{item.content}}</span>
                  </div>
                </div>
                <el-button size="mini">创建</el-button>
              </el-tooltip>
              <el-tooltip placement="top">
                <div slot="content">
                  <div v-for="(item) in updateAccount" :key="item.name">
                    <span>{{item.name}}：</span>
                    <span>{{item.content}}</span>
                  </div>
                </div>
                <el-button size="mini">更新</el-button>
              </el-tooltip>
            </div>
          </el-tab-pane>
          <el-tab-pane label="投保险种信息" name="second">
            <div>
              <span>记录标示</span>
              {{which}} / {{total}}
            </div>
            <el-table max-height="400" border ref="singleTable" :data="tableData3" highlight-current-row
              @current-change="handleCurrentChange" style="width: 100%" show-summary :summary-method="getSummaries">
              <el-table-column fixed="left" type="index" label="序号" width="50"></el-table-column>
              <el-table-column v-for="item in tableHead3" :key="item.property" :label="item.label" :width="item.width"
                :property="item.property" :fixed="item.fixed" sortable show-overflow-tooltip>
                <template slot-scope="scope">
                  <div v-if="item.operate">
                    <!-- <el-button v-for="(o, key) in item.oper" :key="key" @click="o.clickFun(scope.row)" type="text" size="small">{{o.name}}</el-button>  -->
                    <el-button @click="deleteClick(scope.row)" type="danger" size="small">删除</el-button>
                    <el-button type="primary" size="small" @click="editInformation2(scope.row)">查看/编辑</el-button>
                  </div>
                  <div v-else>{{ scope.row[item.property]}}</div>
                </template>
              </el-table-column>
            </el-table>
            <div class="bottomButton1">
              <el-button type="primary" @click="editInformation2()">新增</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="保单记录属性" name="third">
            <el-table ref="singleTable" :data="tableData4" highlight-current-row @current-change="handleCurrentChange"
              style="width: 100%" max-height="400">
              <el-table-column type="index" width="50"></el-table-column>
              <el-table-column v-for="item in tableHead4" :key="item.property" :fixed="item.fixed" sortable
                show-overflow-tooltip :property="item.property" :label="item.label" :width="item.width">
                <template slot-scope="scope">
                  <div v-if="item.operate">
                    <el-button type="danger" @click="delete4(scope.row)">删 除</el-button>
                    <el-button type="primary" @click="edit4(scope.row)">编 辑</el-button>
                  </div>
                  {{scope.row[item.property]}}
                </template>
              </el-table-column>
            </el-table>
            <div>
              <fieldset>
                <legend>详细信息</legend>
                <div>记录属性：</div>
                <div>附件格式：</div>
                <div>附件说明：</div>
                <div>最后更新：</div>
              </fieldset>
            </div>
            <div class="newAdd">
              <el-button type="primary">下载</el-button>
              <el-button type="primary" @click="dialogFormVisible4=true">新增</el-button>
              <el-button type="primary" @click="dialogFormVisible4=true">批量新增</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="保单缴费记录" name="fourth">
            <el-table ref="singleTable" :data="tableData5" highlight-current-row @current-change="handleCurrentChange"
              style="width: 100%" max-height="400">
              <el-table-column type="index" width="50"></el-table-column>
              <el-table-column v-for="item in tableHead5" :key="item.property" :fixed="item.fixed" sortable
                show-overflow-tooltip :property="item.property" :label="item.label" :width="item.width">
                <template slot-scope="scope">
                  <div v-if="item.operate">
                    <el-button type="danger" @click="delete5(scope.row)">移 除</el-button>
                  </div>
                  {{scope.row[item.property]}}
                </template>
              </el-table-column>
            </el-table>
            <div class="newAdd">
              <el-button type="primary" @click="newAdd">新增交费记录</el-button>
            </div>
          </el-tab-pane>
        </el-tabs>
      </template>
      <div class="bottomButton">
        <el-button type="primary">确定</el-button>
        <el-button type="primary">取消</el-button>
        <el-button type="primary">应用</el-button>
      </div>
      <!-- 变更点击出来的弹框 -->
      <el-dialog title="投保人选择" :visible.sync="dialogFormVisible1" width="40%">
        <el-form :model="form">
          <el-form-item label="投保人名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="证件号码" :label-width="formLabelWidth">
            <el-input v-model="form.ID" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 编辑点击弹出的弹框 -->
      <el-dialog title="保单受益人管理" :visible.sync="dialogFormVisible2">
        <el-tabs v-model="insuranceBenefitManage" type="card" @tab-click="handleClick">
          <el-tab-pane label="保单受益人" name="first">
            <el-table max-height="500" border :data="tableData2" stripe style="width: 100%">
              <el-table-column v-for="item in tableHead1" :key="item.property" :label="item.label" :width="item.width"
                :property="item.property" :fixed="item.fixed" sortable>
                <template slot-scope="scope">
                  <div v-if="item.operate">
                    <!-- <el-button v-for="(o, key) in item.oper" :key="key" @click="o.clickFun(scope.row)" type="text" size="small">{{o.name}}</el-button>  -->
                    <el-button @click="deleteClick(scope.row)" type="danger" size="small">删除</el-button>
                    <el-button type="primary" size="small" @click="editInformation1(scope.row)">查看/编辑</el-button>
                  </div>
                  <div v-else>{{ scope.row[item.property]}}</div>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="保单利益关系人表" name="second">
            <el-table max-height="500" border :data="tableData1" stripe style="width: 100%">
              <el-table-column prop="name" label="客户姓名" width="180"></el-table-column>
              <el-table-column prop="IdentificationID" label="证件号码" width="180"></el-table-column>
              <el-table-column label="存在关系" width="180">
                <template slot-scope="scope">
                  <!-- <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small"
                  >移除</el-button>-->
                  <el-select v-model="scope.row.relationSelected" placeholder="请选择">
                    <el-option v-for="item in scope.row.relations" :key="item.value" :label="item.label"
                      :value="item.value"></el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column prop="benefitMan" label="选取为受益人"></el-table-column>
            </el-table>
            <el-button type="primary" class="newAdd" @click="dialogFormVisible3=true">新增</el-button>
          </el-tab-pane>
        </el-tabs>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible2 = false">关 闭</el-button>
        </div>
      </el-dialog>
      <!-- 编辑按钮/新增按钮点击弹出的界面 -->
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible3">
        <el-form :model="form">
          <el-form-item label="活动名称：" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域：" :label-width="formLabelWidth">
            <el-input v-model="form.identificationID" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible3 = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible3 = false">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 承揽人部分点击按钮后的弹出框 -->
      <el-dialog :visible.sync="dialogVisible1" title="位置" width="60%">
        <div class="main">
          <location></location>
        </div>
      </el-dialog>
      <!-- 投保险种信息编辑和新增按钮点击的弹出框 -->
      <el-dialog title="险种编辑页面" :visible.sync="dialogVisible2" width="50%">
        <el-row>
          <el-col :span="24">
            <div class="grid-content insuranceinfo">投保险种信息</div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="7">
            <div class="grid-content textRt">险种受理日期</div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-date-picker v-model="dealDate" type="date" placeholder="选择日期"></el-date-picker>
              <el-checkbox v-model="dealDateChecked">同保单受理日</el-checkbox>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="7">
            <div class="grid-content textRt">保单生效日期</div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-date-picker v-model="effectDate" type="date" placeholder="选择日期"></el-date-picker>
              <el-checkbox v-model="effectDateChecked">同保单生效日</el-checkbox>
            </div>
          </el-col>
        </el-row>
        <fieldset>
          <legend>投保险种</legend>
          <el-row :gutter="20">
            <el-col :span="7">
              <div class="grid-content textRt"></div>
            </el-col>
            <el-col :span="14">
              <div class="grid-content">
                <el-select v-model="main_or_vice_selected" placeholder="请选择">
                  <el-option v-for="item in main_or_vice" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
                <el-checkbox v-model="onlySealChecked">仅显示在售险种</el-checkbox>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="7">
              <div class="grid-content textRt">投保险种代码</div>
            </el-col>
            <el-col :span="17">
              <div class="grid-content">
                <el-select v-model="insuranceCodeSelected" placeholder="请选择">
                  <el-option v-for="item in insuranceCode" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
                <span>{{main_or_vice_selected}}-{{insuranceCodeSelected}}</span>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="7">
              <div class="grid-content textRt">年期 / 分档</div>
            </el-col>
            <el-col :span="17">
              <div class="grid-content">
                <el-select v-model="yearSelected" placeholder="请选择">
                  <el-option v-for="item in year" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <div id="help" @mouseover="helpShowOver" @mouseout="helpShowOut">
                  <span>帮助</span>
                  <i class="el-icon-arrow-down"></i>
                  <div v-show="help==1" style="width:100%;">
                    <el-table :data="tableData6" style="width: 100%" border height="200">
                      <el-table-column prop="year" label="年" width="50"></el-table-column>
                      <el-table-column prop="remark" label="说明" width="100"></el-table-column>
                    </el-table>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </fieldset>
        <fieldset>
          <legend>被保人</legend>
          <el-row :gutter="20">
            <el-col :span="7">
              <div class="grid-content textRt">选择被保人</div>
            </el-col>
            <el-col :span="14">
              <div class="grid-content">
                <el-select v-model="protected_man_selected" placeholder="请选择">
                  <el-option v-for="item in protectedMan" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="7">
              <div class="grid-content textRt"></div>
            </el-col>
            <el-col :span="14">
              <div class="grid-content">
                <div>
                  <span style="color:blue;text-decoration:underline;"
                    @click="personDetail">季书影[420881201712051043]</span> 投保时年龄：0岁
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="7">
              <div class="grid-content textRt">与投保人关系</div>
            </el-col>
            <el-col :span="14">
              <div class="grid-content">
                <el-select v-model="relationship_selected" placeholder="请选择">
                  <el-option v-for="item in relationship" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </fieldset>
        <fieldset>
          <el-row :gutter="20">
            <el-col :span="7">
              <div class="grid-content textRt">保险金额￥</div>
            </el-col>
            <el-col :span="14">
              <div class="grid-content">
                <el-input v-model="insuranceMoney" placeholder style="width:200px;"></el-input>
                <el-select v-model="insuranceMoneyTypeSelected" placeholder="请选择" style="width:90px;">
                  <el-option v-for="item in insuranceMoneyType" :key="item.value" :label="item.label"
                    :value="item.value"></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="7">
              <div class="grid-content textRt">险种保费￥</div>
            </el-col>
            <el-col :span="14">
              <div class="grid-content">
                <el-input v-model="insuranceTypeMoney" placeholder style="width:200px;"></el-input>
                &nbsp;&nbsp;{{insuranceMoneyTypeSelected}}
              </div>
            </el-col>
          </el-row>
        </fieldset>

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 保单记录属性/新增按钮点击弹出的对话框 -->
      <el-dialog title="保单记录属性" :visible.sync="dialogFormVisible4">
        <el-form :model="form2">

          <el-form-item label="记录属性" :label-width="formLabelWidth">
            <el-select v-model="form2.attr1Selected" placeholder="">
              <el-option v-for="item in form2.attr1" :label="item.label" :value="item.value" :key="item.value">
              </el-option>
            </el-select>
            <el-select v-model="form2.attr2Selected" placeholder="">
              <el-option v-for="item in form2.attr2" :label="item.label" :value="item.value" :key="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="属性内容" :label-width="formLabelWidth">
            <el-input v-model="form2.name" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="有效期间" :label-width="formLabelWidth">
            <el-date-picker v-model="form2.date" type="daterange" range-separator="至" start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="备注" :label-width="formLabelWidth">
            <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="form2.remark"></el-input>
          </el-form-item>
          <el-form-item label="附加档案" :label-width="formLabelWidth">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3"
              :on-exceed="handleExceed" :file-list="fileList">
              <el-button size="small" type="primary">添加</el-button>
            </el-upload>

          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible4 = false">添 加</el-button>
          <el-button type="primary" @click="dialogFormVisible4 = false">取 消</el-button>
        </div>
      </el-dialog>
    </section>
  </div>
</template>

<script>
  import location from "../balanceAccounts/outCheck/location.vue";
  export default {
    data() {
      return {
        activeName2: "first",
        company: "",
        date1: "",
        bankCharges: [{
            value: "选项1",
            label: "银行划账"
          },
          {
            value: "选项2",
            label: "信用卡"
          },
          {
            value: "选项3",
            label: "支票"
          },
          {
            value: "选项4",
            label: "现金"
          }
        ],
        bankChargeSelected: "银行划账",
        chargeTypes: [{
            value: "选项1",
            label: "年交"
          },
          {
            value: "选项2",
            label: "半年交"
          },
          {
            value: "选项3",
            label: "季交"
          },
          {
            value: "选项4",
            label: "月交"
          },
          {
            value: "选项5",
            label: "趸交"
          }
        ],
        chargeTypeSelected: "年交",
        orderAndNumbers: [{
            value: "选项1",
            label: "投保单号码"
          },
          {
            value: "选项2",
            label: "车牌号码"
          },
          {
            value: "选项3",
            label: "其他"
          }
        ],
        orderAndNumberSelected: "投保单号码",
        notKnow1: "",
        orderStatuss: [{
            value: "选项1",
            label: "预收件"
          },
          {
            value: "选项2",
            label: "承保件"
          },
          {
            value: "选项3",
            label: "契撒件"
          },
          {
            value: "选项4",
            label: "停效件"
          },
          {
            value: "选项5",
            label: "失效件"
          },
          {
            value: "选项6",
            label: "解约件"
          },
          {
            value: "选项7",
            label: "终止件"
          },
          {
            value: "选项8",
            label: "新保"
          },
          {
            value: "选项9",
            label: "续保"
          }
        ],
        orderStatusSelected: "预收件",
        orderNumber: "",
        date2: "",
        date3: "",
        orderBackDates: [{
            value: "选项1",
            label: "未交"
          },
          {
            value: "选项2",
            label: "已交"
          }
        ],
        orderBackDateSelected: "未交",
        notKnow2: "",
        name1: "里斯",
        ID1: "43545676854354",
        telephone: "16545646",
        address: "四大金刚麦克罗斯",
        email: "2352@qq.com",
        sex: "32",
        marry: "未婚",
        age: "1",
        whoses: [{
            value: "选项1",
            label: "个人件"
          },
          {
            value: "选项2",
            label: "电销件"
          },
          {
            value: "选项3",
            label: "公司件"
          }
        ],
        whoseSelected: "个人件",
        name2: "小明",
        ID2: "4654545",
        createAccount: [{
            name: "员工码",
            content: "00000033"
          },
          {
            name: "员工名称",
            content: "啦啦啦"
          },
          {
            name: "单位部门",
            content: "总部-运营部"
          },
          {
            name: "佣金制度",
            content: "基本法A制"
          },
          {
            name: "目前职级",
            content: "HQ01-内勤人员"
          },
          {
            name: "关系上属",
            content: "--"
          },
          {
            name: "入司日期",
            content: "2018-10-11"
          },
          {
            name: "手机",
            content: ""
          },
          {
            name: "电子邮箱",
            content: ""
          },
          {
            name: "创建日期",
            content: "2019-03-06"
          }
        ],
        updateAccount: [{
            name: "员工码",
            content: "00000033"
          },
          {
            name: "员工名称",
            content: "啦啦啦"
          },
          {
            name: "单位部门",
            content: "总部-运营部"
          },
          {
            name: "佣金制度",
            content: "基本法A制"
          },
          {
            name: "目前职级",
            content: "HQ01-内勤人员"
          },
          {
            name: "关系上属",
            content: "--"
          },
          {
            name: "入司日期",
            content: "2018-10-11"
          },
          {
            name: "手机",
            content: ""
          },
          {
            name: "电子邮箱",
            content: ""
          },
          {
            name: "更新日期",
            content: "2019-03-06"
          }
        ],
        dialogFormVisible1: false,
        form: {
          name: "",
          ID: ""
        },
        formLabelWidth: "120px",
        insuranceBenefitManage: "first",
        dialogFormVisible2: false,
        tableData1: [{
            IdentificationID: "2016-05-02",
            name: "王小虎",
            benefitMan: "上海市普陀区金沙江路 1518 弄",
            relations: [{
                value: "选项1",
                label: "本人"
              },
              {
                value: "选项2",
                label: "配偶"
              },
              {
                value: "选项3",
                label: "父母"
              },
              {
                value: "选项4",
                label: "子女"
              },
              {
                value: "选项5",
                label: "兄弟姐妹"
              },
              {
                value: "选项6",
                label: "其他"
              }
            ],
            relationSelected: "本人"
          },
          {
            IdentificationID: "2016-05-04",
            name: "王小虎",
            benefitMan: "上海市普陀区金沙江路 1517 弄",
            relations: [{
                value: "选项1",
                label: "本人"
              },
              {
                value: "选项2",
                label: "配偶"
              },
              {
                value: "选项3",
                label: "父母"
              },
              {
                value: "选项4",
                label: "子女"
              },
              {
                value: "选项5",
                label: "兄弟姐妹"
              },
              {
                value: "选项6",
                label: "其他"
              }
            ],
            relationSelected: "其他"
          }
        ],
        tableData2: [{
            name: "王小虎",
            number: "201852542135454646",
            benefitType: "纯受益",
            benefitRate: "80%",
            userConfirm: "确认",
            operate: "删除"
          },
          {
            name: "王小虎",
            number: "201852542135454646",
            benefitType: "纯受益",
            benefitRate: "80%",
            userConfirm: "确认",
            operate: "删除"
          }
        ],
        tableHead1: [{
            label: "客户姓名",
            property: "name",
            width: "100",
            fixed: false
          },
          {
            label: "证件号码",
            property: "number",
            width: "180",
            fixed: false
          },
          {
            label: "受益型态",
            property: "benefitType",
            width: "180",
            fixed: false
          },
          {
            label: "收益比率%",
            property: "benefitRate",
            width: "180",
            fixed: false
          },
          {
            label: "客户确认",
            property: "userConfirm",
            width: "100",
            fixed: false
          },
          {
            label: "操作",
            property: "operate",
            width: "200",
            fixed: "right",
            operate: [{
              name: "删除"
            }, {
              name: "查看"
            }]
          }
        ],
        dialogFormVisible3: false,
        form1: {
          name: "",
          identificationID: ""
        },
        dialogVisible1: false,
        dialogVisible2: false,
        which: "1",
        total: "5",
        tableHead3: [{
            label: "险种代码",
            property: "number",
            width: "180",
            fixed: false
          },
          {
            label: "受理日期",
            property: "dealDate",
            width: "180",
            fixed: false
          },
          {
            label: "生效日期",
            property: "effectDate",
            width: "180",
            fixed: false
          },
          {
            label: "险种名称-简称",
            property: "name",
            width: "180",
            fixed: false
          },
          {
            label: "被保人",
            property: "protectedMan",
            width: "180",
            fixed: false
          },
          {
            label: "主附",
            property: "mainVice",
            width: "180",
            fixed: false
          },
          {
            label: "年期 / 分档",
            property: "year",
            width: "180",
            fixed: false
          },
          {
            label: "保额",
            property: "money",
            width: "180",
            fixed: false
          },
          {
            label: "单位",
            property: "company",
            width: "180",
            fixed: false
          },
          {
            label: "险种保费",
            property: "insuranceMoney",
            width: "180",
            fixed: false
          },
          {
            label: "操作",
            property: "operate",
            width: "200",
            fixed: "right",
            operate: [{
              name: "删除"
            }, {
              name: "查看"
            }]
          }
        ],
        tableData3: [{
            number: "20160502",
            dealDate: "2018-12-23",
            effectDate: "2018-12-23",
            name: "小明",
            protectedMan: "小妹",
            mainVice: "附约",
            year: "2018",
            money: "10000",
            company: "上海市普陀区金沙江路 1518 弄",
            insuranceMoney: "20000"
          },
          {
            number: "20160502",
            dealDate: "2018-12-23",
            effectDate: "2018-12-23",
            name: "小瓜",
            protectedMan: "小贝",
            mainVice: "附约",
            year: "2018",
            money: "10000",
            company: "上海市普陀区金沙江路 1518 弄",
            insuranceMoney: "20000"
          }
        ],
        tableHead4: [{
            label: "类别",
            property: "type",
            width: "180",
            fixed: false
          },
          {
            label: "记录属性",
            property: "recordAttri",
            width: "180",
            fixed: false
          },
          {
            label: "属性内容",
            property: "attriContent",
            width: "180",
            fixed: false
          },
          {
            label: "有效期起",
            property: "beginDate",
            width: "180",
            fixed: false
          },
          {
            label: "有效期止",
            property: "endDate",
            width: "180",
            fixed: false
          },
          {
            label: "附件",
            property: "accessory",
            width: "180",
            fixed: false
          },
          {
            label: "附件格式",
            property: "accessoryForm",
            width: "180",
            fixed: false
          },
          {
            label: "大小（KB）",
            property: "kb",
            width: "180",
            fixed: false
          },
          {
            label: "操作",
            property: "operate",
            width: "200",
            fixed: "right",
            operate: [{
              name: "删除"
            }, {
              name: "查看"
            }]
          }
        ],
        tableData4: [{
            type: "不知道",
            recordAttri: "无",
            attriContent: "无",
            beginDate: "2016-05-02",
            endDate: "2016-05-02",
            accessory: "无",
            accessoryForm: "不知道",
            kb: "100"
          },
          {
            type: "不知道",
            recordAttri: "无",
            attriContent: "无",
            beginDate: "2016-05-02",
            endDate: "2016-05-02",
            accessory: "无",
            accessoryForm: "不知道",
            kb: "100"
          }
        ],
        currentRow: null,
        tableHead1: [{
            label: "客户姓名",
            property: "name",
            width: "100",
            fixed: false
          },
          {
            label: "证件号码",
            property: "number",
            width: "180",
            fixed: false
          },
          {
            label: "受益型态",
            property: "benefitType",
            width: "180",
            fixed: false
          },
          {
            label: "收益比率%",
            property: "benefitRate",
            width: "180",
            fixed: false
          },
          {
            label: "客户确认",
            property: "userConfirm",
            width: "100",
            fixed: false
          },
          {
            label: "操作",
            property: "operate",
            width: "200",
            fixed: "right",
            operate: [{
              name: "删除"
            }, {
              name: "查看"
            }]
          }
        ],
        tableHead5: [{
            label: "类别",
            property: "type",
            width: "180",
            fixed: false
          },
          {
            label: "记录属性",
            property: "recordAttri",
            width: "180",
            fixed: false
          },
          {
            label: "属性内容",
            property: "attriContent",
            width: "180",
            fixed: false
          },
          {
            label: "有效期起",
            property: "beginDate",
            width: "180",
            fixed: false
          },
          {
            label: "有效期止",
            property: "endDate",
            width: "180",
            fixed: false
          },
          {
            label: "附件",
            property: "accessory",
            width: "180",
            fixed: false
          },
          {
            label: "附件格式",
            property: "accessoryForm",
            width: "180",
            fixed: false
          },
          {
            label: "大小（KB）",
            property: "kb",
            width: "180",
            fixed: false
          },
          {
            label: "操作",
            property: "operate",
            width: "200",
            fixed: "right",
            operate: [{
              name: "删除"
            }, {
              name: "查看"
            }]
          }
        ],
        tableData5: [{
            type: "不知道",
            recordAttri: "无",
            attriContent: "无",
            beginDate: "2016-05-02",
            endDate: "2016-05-02",
            accessory: "无",
            accessoryForm: "不知道",
            kb: "100"
          },
          {
            type: "不知道",
            recordAttri: "无",
            attriContent: "无",
            beginDate: "2016-05-02",
            endDate: "2016-05-02",
            accessory: "无",
            accessoryForm: "不知道",
            kb: "100"
          }
        ],
        dealDate: "",
        dealDateChecked: true,
        effectDate: "",
        effectDateChecked: true,
        main_or_vice: [{
            value: "主约",
            label: "主约"
          },
          {
            value: "附约",
            label: "附约"
          }
        ],
        main_or_vice_selected: "主约",
        onlySealChecked: true,
        insuranceCode: [{
          value: "550",
          label: "附加长期意外[550]"
        }],
        insuranceCodeSelected: "附加长期意外[550]",
        onlySealChecked: true,
        year: [{
            value: 0,
            label: 0
          },
          {
            value: 2,
            label: 2
          },
          {
            value: 3,
            label: 3
          },
          {
            value: 4,
            label: 4
          },
          {
            value: 5,
            label: 5
          },
          {
            value: 6,
            label: 6
          },
          {
            value: 7,
            label: 7
          },
          {
            value: 8,
            label: 8
          },
          {
            value: 9,
            label: 9
          },
          {
            value: 10,
            label: 10
          },
          {
            value: 11,
            label: 11
          },
          {
            value: 12,
            label: 12
          },
          {
            value: 13,
            label: 13
          },
          {
            value: 14,
            label: 14
          },
          {
            value: 15,
            label: 15
          },
          {
            value: 16,
            label: 16
          },
          {
            value: 17,
            label: 17
          },
          {
            value: 18,
            label: 18
          },
          {
            value: 19,
            label: 19
          },
          {
            value: 20,
            label: 20
          },
          {
            value: -50,
            label: -50
          },
          {
            value: -55,
            label: -55
          },
          {
            value: -60,
            label: -60
          },
          {
            value: -65,
            label: -65
          }
        ],
        yearSelected: null,
        tableData6: [{
            year: "0",
            remark: "无"
          },
          {
            year: "2",
            remark: "无"
          },
          {
            year: "3",
            remark: "无"
          },
          {
            year: "4",
            remark: "无"
          },
          {
            year: "5",
            remark: "无"
          },
          {
            year: "6",
            remark: "无"
          },
          {
            year: "7",
            remark: "无"
          },
          {
            year: "8",
            remark: "无"
          },
          {
            year: "9",
            remark: "无"
          },
          {
            year: "10",
            remark: "无"
          },
          {
            year: "11",
            remark: "无"
          },
          {
            year: "12",
            remark: "无"
          },
          {
            year: "13",
            remark: "无"
          },
          {
            year: "14",
            remark: "无"
          },
          {
            year: "15",
            remark: "无"
          },
          {
            year: "16",
            remark: "无"
          },
          {
            year: "17",
            remark: "无"
          },
          {
            year: "18",
            remark: "无"
          },
          {
            year: "19",
            remark: "无"
          },
          {
            year: "20",
            remark: "无"
          },
          {
            year: "-50",
            remark: "无"
          },
          {
            year: "-55",
            remark: "无"
          },
          {
            year: "-60",
            remark: "无"
          },
          {
            year: "-65",
            remark: "无"
          }
        ],
        help: 0,
        protectedMan: [{
            value: "里斯",
            label: "里斯"
          },
          {
            value: "王五",
            label: "王五"
          }
        ],
        protected_man_selected: "里斯",
        relationship: [{
            value: "本人",
            label: "本人"
          },
          {
            value: "配偶",
            label: "配偶"
          },
          {
            value: "父母",
            label: "父母"
          },
          {
            value: "子女",
            label: "子女"
          },
          {
            value: "兄弟姐妹",
            label: "兄弟姐妹"
          },
          {
            value: "其他",
            label: "其他"
          }
        ],
        relationship_selected: "子女",
        insuranceMoneyType: [{
            value: "元",
            label: "元"
          },
          {
            value: "千元",
            label: "千元"
          },
          {
            value: "万元",
            label: "万元"
          },
          {
            value: "份数",
            label: "份数"
          }
        ],
        insuranceMoney: "",
        insuranceMoneyTypeSelected: "元",
        insuranceTypeMoney: "",
        dialogFormVisible4: false,
        form2: {
          attr1: [{
              value: '单证信息',
              label: '单证信息'
            },
            {
              value: '车辆信息',
              label: '车辆信息'
            },
            {
              value: '银行账号',
              label: '银行账号'
            }, {
              value: '保单服务',
              label: '保单服务'
            }, {
              value: '服务提醒',
              label: '服务提醒'
            }, {
              value: '保单状态前台受理',
              label: '保单状态前台受理'
            }, {
              value: '车险费率',
              label: '车险费率'
            }, {
              value: '车险信息',
              label: '车险信息'
            }, {
              value: '不区分',
              label: '不区分'
            },
          ],
          attr2: [{
              value: '投保单',
              label: '投保单'
            },
            {
              value: '保单',
              label: '保单'
            },
            {
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
            },
          ],
          attr1Selected: "",
          attr2Selected: "",
          date: '',
          remark: '',
        },
        formLabelWidth: "120px",
        fileList: []

      };
    },

    components: {
      location
    },

    computed: {},

    // mounted: {},

    methods: {
      goBack() {
        history.go(-1);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      insurancePeopleMessage() {
        this.$router.push({
          path: "/user/ClientEditor"
        });
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      deleteClick(row) {
        this.$confirm("确认删除该项吗?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
          .then(() => {
            this.tableData3.splice(row, 1);
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      },
      editInformation1(row) {},
      editInformation2(row) {
        this.dialogVisible2 = true;
      },
      getSummaries(param) {
        const {
          columns,
          data
        } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = "总价";
            return;
          }
          if (index === 1 || index === 7 || index === 8) {
            sums[index] = "N/A";
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += " 元";
          } else {
            sums[index] = "N/A";
          }
        });

        return sums;
      },
      delete4(row) {
        this.$confirm("确认删除该项吗?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
          .then(() => {
            this.tableData4.splice(row, 1);
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      },
      delete5(row) {
        this.$confirm("确认删除该项吗?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
          .then(() => {
            this.tableData5.splice(row, 1);
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      },
      helpShowOver() {
        this.help = 1;
        console.log("悬浮进来过");
      },
      helpShowOut() {
        this.help = 0;
      },
      handleCurrentChange() {},
      // handleClose(done) {//dialog弹出框关闭之前可以在这里进行操作
      //     this.$confirm('确认关闭？')
      //       .then(_ => {
      //         done();
      //       })
      //       .catch(_ => {});
      //   },
      personDetail() {
        this.$router.push({
          path: "/user/ClientEditor"
        });
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      newAdd() { //新增交费记录按钮点击事件
        this.$router.push({
          path: "/user/payEditor"
        })
      },

    },
    created(){
      this.company=this.$route.params.company
      this.date1=this.$route.params.date1
      this.orderNumber=this.$route.params.orderNumber,
      this.date2=this.$route.params.date2
    }
  };

</script>
<style lang='scss' scoped>
  html body {
    overflow: hidden;
  }

  #main {
    overflow-y: auto;
    height: 100%;
    width: 100%;

    header {
      font-size: 16px;
      // font-weight:bold;
      padding-left: 10px;
      background-color: #dddefe;
      height: 30px;
      line-height: 30px;

      span {
        margin-left: 10px;
      }
    }

    section {
      padding: 20px;

      .el-row {
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      .el-col {
        border-radius: 4px;
      }

      .bg-purple-dark {
        background: #99a9bf;
      }

      .bg-purple {
        // background: #d3dce6;
      }

      .bg-purple-light {
        background: #e5e9f2;
      }

      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }

      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }

      table {
        border: 1px solid #ddd;
        width: 100%;

        a {
          color: blue;
        }

        a:hover {
          color: red;
          text-decoration: underline;
        }

        td {
          padding: 5px 10px;
        }
      }

      tr:nth-child(odd) {
        font-weight: bold;
      }

      fieldset {
        border: 1px solid #ddd;
        margin-top: 20px;
        padding: 20px;

        //   .el-select{
        //       margin-left:40px;
        //   }
        legend {
          color: blue;
        }

        div {
          // margin-bottom: 10px;
        }
      }

      .bottomButton {
        margin-top: 20px;
        margin-right: 20px;
        float: right;

        #update {
          margin-right: 100px;
        }
      }

      .newAdd {
        float: right;
        margin-top: 20px;
      }

      #insuranceBenefitMan {
        color: blue;
        display: inline-block;
        margin-left: 10px;
        margin-right: 10px;
      }

      #insuranceBenefitMan:hover {
        color: red;
        text-decoration: underline;
      }

      .changeColor {
        color: rgb(22, 22, 211);
        text-decoration: underline;
      }

      .el-tabs--card>.el-tabs__header /deep/ .el-tabs__nav {
        background: #ddd;
      }

      .el-tabs {
        .el-tab-pane {
          padding: 20px;
        }
      }
    }

    .bottomButton1 {
      margin-top: 10px;
    }

    .insuranceinfo {
      color: rgb(133, 4, 4);
      text-align: center;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      font-weight: bold;
    }

    .textRt {
      text-align: right;
    }

    #help {
      border: 1px solid rgb(207, 202, 202);
      margin-left: 10px;
      padding-left: 5px;
      padding-right: 2px;
      height: 28px;
      line-height: 28px;
      display: inline-block;
      background: rgb(210, 229, 250);
      width: 150px;
      position: relative;
      z-index: 5;

      i {
        margin-top: 5px;
        float: right;
      }

      div {
        position: absolute;
        top: 14px;
        left: 0px;
        z-index: 20;
      }
    }
  }

</style>
