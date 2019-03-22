<!-- 改密 -->
<template>
  <div class="page">
    <header>
      <dl>
        <dt>更改我的密码</dt>
        <dd>使用者密码变更，变更的密码将在再次登入后使用！</dd>
      </dl>
    </header>
    <form
      action=""
      method=""
    >
    <div class="row policyNumber">
          <div class="title">
            <span>旧密码</span>
          </div>
           <el-input v-model.trim.number="oldPassword" placeholder="请输入旧密码"  size="mini" style="width:250px"></el-input>
        </div>
      <fieldset>
        <legend>具体操作</legend>
        <div class="row policyNumber">
          <div class="title">
            <span>新密码</span>
          </div>
         <el-input v-model.trim.number="newPassword" placeholder="请输入新密码" size="mini" style="width:250px"></el-input>
        </div>
        <div class="row policyNumber">
          <div class="title">
            <span>再次确认一次</span>
          </div>
          <el-input v-model.trim.number="newPasswordAgain" placeholder="请输入新密码"   size="mini" style="width:250px"></el-input>
          
        </div>
        
      </fieldset>

       <div class="oprateBtn">
            <el-button
              type="primary"
              size="mini"
               @click="submit"
            >确定</el-button>
            
            <el-button
              type="success"
              size="mini"
              @click="clear"
            >取消</el-button>
          </div>
    </form>

  </div>
</template>

<script type="text/ecmascript-6">
const arr = []
export default {
  data() {
    return {
      oldPassword:'',
      newPassword:'',
      newPasswordAgain:''
    };
  },
  created(){
    // 5秒检测一次
      arr.push(this.throttle(this.trans,5000))
      arr.push(this.throttle(this.trans,5000))
      arr.push(this.throttle(this.trans,5000))
    
  },
  methods: {
    oldInput(){
      console.log(typeof this.oldPassword)
      arr[0](this.oldPassword)
    },
    newInput(){
       arr[1](this.newPassword)
    },
    newInputAgain(){
       arr[2](this.newPasswordAgain)
    },
    clear(){
      let {oldPassword,newPassword,newPasswordAgain}= this
      oldPassword = '',newPassword= '',newPasswordAgain=''
    },
    submit(){
      let {oldPassword,newPassword,newPasswordAgain,$message}= this
       let reg = /[^0-9a-zA-Z]/g
      if(reg.test(oldPassword)||reg.test(newPassword)||reg.test(newPasswordAgain)){
        this.$message.error('请输入数字或字母')
        return
      }
      if( !oldPassword){
        $message.error('请输入旧密码')
        return 
      }else if(!newPassword){
        $message.error('请输入新密码')
        return 
      }else if(!newPasswordAgain){
        $message.error('请再次输入新密码')
        return 
      }
      if(oldPassword===newPassword|| oldPassword===newPasswordAgain){
        $message.error('新旧密码需不同')
        return 
      }
      if(newPassword!==newPasswordAgain){
        $message.error('两次密码输入不一致')
        return 
      }
      let formData = new FormData()
      formData.append('oldPassword', this.oldPassword)
      formData.append('newPassword', this.newPassword)
      fetch('http://forvera.me/signup.php', {
        method: 'POST',
        headers: {},
        body: formData
      }).then((response) => {
        if (response.ok) {
          return response.json()
        }
      }).then((json) => {
        if (json.status === 'ok') {
        //   localStorage.userInfo = JSON.stringify(json)
        //   this.$root.eventHub.$emit('pushToProfile', json)
        // } else if (json.status.indexOf('Duplicate') !== -1) {
        //   this.$root.eventHub.$emit('showNotification', '手机号已绑定')
        }
      }).catch((error) => {
        console.error(error)
      })
    },
    throttle(method,time){
      let start = new Date()
      return (val)=>{
        let end = new Date()
        let pass = end - start
        if(pass>time){
          method(val)
          start = end
        }
      }
    },
    trans(val){
      let reg = /[^0-9a-zA-Z]/g
      if(reg.test(val)){
        this.$message.error('请输入数字或字母')
      }
    }
  }
};
</script>

<style scoped lang="scss">
.page {
  padding: 10px 30px 0 30px;
  // height:100%;
  height: 100%;
  overflow-y: scroll;
}
dt {
  font-size: 1.5em;
  color: #409eff;
}
dd {
  margin: 10px 0px 5px 20px;
}
fieldset {
  padding: 0.35em 0.625em 0.75em;
  margin: 0 2px;
  border: 1px solid #ebeef5;
}
legend {
  padding: 0.5em;
  border: 0;
  width: auto;
}
fieldset:first-child ul li,
fieldset:nth-child(2) div,
fieldset:nth-child(3) li {
  height: 30px;
  margin-top: 2px;
  line-height: 30px;
  text-align: middle;
}
.elradio {
  height: 28px;
  line-height: 28px;
}
fieldset:nth-child(4) span {
  margin-left: 10px;
}
.subutton {
  margin-bottom: 20px;
}
#btn {
  margin-top: 20px;
  width: 110px;
  height: 35px;
  background-color: #409eff;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 0 5px;
}
.find {
  margin-top: 5px;
  display: flex;
  flex-flow: row nowrap;
}
.elformitem {
  margin-bottom: 0px;
}
.findleft {
  width: 40%;
}
.findright {
  width: 60%;
  padding: 0 5px 0 10px;
}
.el-dialog__body {
  padding: 10px !important;
}
.title {
  display: inline-block;
  width: 15%;
  text-align: right;
  margin-right: 5px;
}
.row {
  margin-bottom: 10px;
}
.oprateBtn {
  float: right;
  margin-top: 20px;
}
</style>
