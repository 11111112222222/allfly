<template>
  <el-dialog :visible.sync="visible" :show-close="false" width="60%" :modal="true" :close-on-click-modal="false" :close-on-press-escape="false">
    <!-- <span>选择查找位置：</span> -->
    <button type="button" aria-label="Close" class="el-dialog__headerbtn" @click.stop="cancelModal"><i class="el-dialog__close el-icon el-icon-close"></i></button>
    <span>选择查找位置：</span>
    <el-input v-model="addrposit" size="mini"  style="width:30%;margin-top:-20px;"></el-input>
    <el-popover
    placement="right"
    width="400"
    v-model="popoverVisible"
    trigger="click">
    <div>
       <div class="treeContent">
         <el-tree :data="treeData" :props="defaultProps"  @node-click="handleNodeClick" ref="tree"></el-tree>
     </div>
     <el-button type="primary" size="mini" @click="confirmPosition">确定</el-button>
    </div>
    <el-button slot="reference" type="primary" size="mini">位置</el-button>
    </el-popover>
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
        <el-tab-pane label="高级查询">
            <div class="tab2Checkbox"><el-checkbox v-model="mergeCondition">合并使用以下高级查询选项</el-checkbox></div>
             <el-form ref="form1" :model="form1" label-width="80px">
                <el-form-item label="手机号码" class="elformitem">
                <el-input v-model="form1.phone" size="mini"></el-input>
                </el-form-item>
                <el-form-item label="职级名称" class="elformitem">
                 <el-select
                v-model="form1.zhiji"
                multiple
                collapse-tags
                style="width:100%;"
                size="mini"
                >
                <el-option
                v-for="item in zhijiOpt"
                :key="item.value"
                :value="item.value">
                </el-option>
                </el-select>
                </el-form-item>
                <el-form-item>
                   <el-button type="primary" @click="onSubmit1" size="mini">立即查找</el-button>
                </el-form-item>
            </el-form>
        </el-tab-pane>
        </el-tabs>
    </div>
    <div class="findright">
    <el-table
        :data="tableData"
        border
        style="width: 100%"
        size="mini"
        height="300">
            <el-table-column
            prop="idname"
            label="员工码">
            </el-table-column>
            <el-table-column
            prop="name"
            label="名称">
            </el-table-column>
            <el-table-column
            prop="province"
            label="分支机构">
            </el-table-column>
            <el-table-column
            prop="bumen"
            label="部门">
            </el-table-column>
            <el-table-column
            prop="address"
            label="查找位置"
            width="200">
            </el-table-column>
            <el-table-column
            prop="zj"
            label="职级">
            </el-table-column>
            <el-table-column
            prop="zjStatus"
            label="职级状态">
            </el-table-column>
        </el-table>
    </div> 
</div>
<span slot="footer" class="dialog-footer">
    <el-button @click="cancelselect" size="mini">取 消</el-button>
    <el-button type="primary" @click="confirmSelsect" size="mini" >确 定</el-button>
</span>
</el-dialog>
</template>
<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      },

    },
    data(){
      return {
        popoverVisible:false,
        addrposit:'',
        form:{name:'',idcard:'',bianhao:''},
        tableData:[],
        mergeCondition:'',
        form1:{phone:'',zhiji:''},
        zhijiOpt: [{value: '全部'}, {value: '理财顾问--标准',}, { value: '业务专员标准',}],
        treeData:[{
          id:'合翔保险经纪有限公司',
          label: '合翔保险经纪有限公司',
          children: [{
            id:'安徽分公司',
            label: '安徽分公司',
            children: [{label: '营销部',id:'安徽分公司-营销部'},{label: '运营部',id:'安徽分公司-运营部'},] 
            },{
            label: '恩施分公司',
            children: [{label: '营销部',id:'恩施分公司-营销部'},{label: '运营部',id:'恩施分公司-运营部'},] 
            },{
            label: '福建分公司',
            children: [{label: '营销部',id:'福建分公司-营销部'},{label: '运营部',id:'福建分公司-营销部'},] 
            },{
            label: '广西分公司',
            children: [{label: '营销部',id:'广西分公司-营销部'},{label: '运营部',id:'广西分公司-营销部'},] 
            }
           ]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tempAddr:'',//临时选中的查找位置          
      }
    },
    methods: {  
      cancelModal(){
        // 关闭弹窗，触发父组件修改visible值
        this.$emit('update:visible', false);
      },
      confirmSelsect(){
        this.$emit('update:visible', false);
        //将表格中的数据选中，将找到的对应的人的信息获取
      },
      cancelselect(){
        this.$emit('update:visible', false);
      },
     handleNodeClick(data){
        console.log(data);
        this.tempAddr=data.id;
    
     },
     onSubmit(){
       //低级查找，将form和this.addrposit的数据传给后台，返回来的数据，显示给表格
     },
     onSubmit1(){
       //高级查找，将form1和this.addrposit的数据传给后台返回来的数据，显示给表格
     },
     confirmPosition(){
        this.popoverVisible=false;
        this.addrposit=this.tempAddr;

     }
    }
  }
</script>
<style scoped>
  .el-dialog__wrapper /deep/ .el-dialog__body{
    padding-top:0px;
    padding-bottom:10px;
}
.bottomButton{
    padding:10px;
    text-align:center;
}
.find{
    padding:10px 0px;
}
.findleft{
    width:50%;
    margin-bottom:10px;
}
.el-form-item{
    margin-bottom:0px !important;
}
.tab2Checkbox{
    height: 40px;
    line-height:40px;
    margin-left:10px;
}
.treeContent{
    width:100%;
    height:300px;
    overflow:auto;
}
</style>