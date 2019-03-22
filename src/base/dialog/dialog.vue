<!-- dialog -->
<template>
   <el-dialog title="导出字段选择" :visible.sync="dialogFormVisible" :before-close="handleClose">
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              border
         
          
            >
              <el-table-column type="selection" width="100"> </el-table-column>
              <el-table-column label="字段名称">
                <template slot-scope="scope">{{ scope.row.name }}</template>
              </el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
              <el-button size="mini" @click="toggle"
                >取 消</el-button
              >
              <el-button
                size="mini"
                type="primary"
                @click="toggle"
                >确 定</el-button
              >
            </div>
          </el-dialog>
</template>

<script>
export default {
  components: {},
  props:['dialogFormVisible','tableData'],
  data () {
    return {
    };
  },

  methods: {
    toggle(){
      this.$emit('change')
    },
   handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            this.$emit('change')
            // done();
          })
          .catch(_ => {
            this.$emit('change')
          });
      }
  },

  computed: {
    // dialogFormVisible(){
      
    // }
  },

  watch: {},    

  created () {},

  mounted () {},

  destroyed () {}

}

</script>
<style lang='scss' scoped>
</style>