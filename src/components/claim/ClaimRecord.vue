<template>
<div>
    <el-row :gutter="20">
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <span class="title">保险公司</span>
                <el-select size="mini" v-model="insurComp2">
                    <el-option
                    v-for="item in compOpt"
                    :key="item.value"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <span class="title">时间</span>
                <el-date-picker
                size="mini"
                v-model="reportDate2"
                type="datetime"
                placeholder="选择日期时间">
                </el-date-picker>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <span class="title">状态</span>
                <el-select size="mini" v-model="orderStatus">
                    <el-option
                    v-for="item in statusOpt"
                    :key="item.value"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <span class="title">处理人</span>
                <el-input v-model="handlePerson" size="mini" style="width:150px;"></el-input> 
                <el-button style="margin-left: 5px;" size="mini">...</el-button> 
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <span class="title">绩效支出</span>
                <el-input-number size="mini" v-model="jixiao" controls-position="right" :min="0" ></el-input-number>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <span class="title">公估费用</span>
                    <el-input-number size="mini" v-model="ggCost" controls-position="right" :min="0" ></el-input-number>
                    <el-checkbox v-model="openInvoice" class="checkbox" style="margin-left:15px;">是否开票</el-checkbox>    
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="12">
            <div class="grid-content processBox">
                <span class="title claimProcess">处理过程</span>
                <el-input type="textarea" :rows="3" v-model="handleProcess" size="mini" style="width:85%;" class="processInput"></el-input>  
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content" style="margin-left:30px;">
                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :before-remove="beforeRemove"
                    :on-change="handleChange"
                    multiple
                    :file-list="fileList">
                    <el-button size="mini" type="primary">添加附件</el-button>
                    <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>
            </div>
        </el-col>
    </el-row>
</div>
</template>
<script type="text/ecmascript-6">
export default {
    name:"claimRecord",
    data(){
        return{
        insurComp2:'长安财',
        compOpt:[{
          value: '长安财',
        }, {
          value: '亚太财',
        }, {
          value: '阳光财',
        }],
            reportDate2:'',
            orderStatus:'正常',
            statusOpt:[{
                value: '正常',
                }, {
                value: '销案有照片',
                },{
                value: '销案无照片',
                }, {
                value: '拒赔',
                }],
            handlePerson:'',
            jixiao:'',
            ggCost:'',
            openInvoice:false,
            handleProcess:'',
            fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        }
    },
    methods: {
          beforeRemove(file){
        console.log(file);
        return this.$confirm(`确定移除 ${ file.name }？`);
        },
        handleChange(file,fileList){
            console.log(file,fileList)
            this.fileList= fileList.slice(-3);
        }
    }
}

</script>
<style scoped lang="scss">
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .title{
        display:inline-block;
        width:65px;
        text-align: right;
        padding-right: 5px;
    }
    .processBox{
        height:80px;
        position:relative;

        .claimProcess{
            position: absolute;
            top:0;
        }
        .processInput{
            position: absolute;
            top:0;
            left:70px;
        }
    }
</style>
