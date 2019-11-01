<template>
  <div class="collection">
    <div class="c-nav">
      <span class="head">采集规则</span>
      <div class="head-right">
        <el-button>上传文件</el-button>
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
      </div>
    </div>
    <div class="c-container">
      <div class="c-table" :style="msg? 'width:79.9%' :'width:76.9%'">
        <el-table :data="tableData" style="width: 100%" :cell-style="cell" :header-cell-style="header">
          <el-table-column width="100px" sortable label="类型">
            <img src="../../assets/collection/13.png" alt />
          </el-table-column>
          <el-table-column prop="name" sortable label="采集名称"></el-table-column>
          <el-table-column prop="date" sortable label="访问凭证"></el-table-column>
          <el-table-column prop="address" sortable label="来源"></el-table-column>
          <el-table-column prop="date" sortable label="目标"></el-table-column>
          <el-table-column prop="address" sortable label="调度"></el-table-column>
          <el-table-column prop="date" label="上次运行状态">
            <template slot-scope="scope">
              <i class="yellow" style="width: 8px;height: 8px;border-radius: 50%;display: inline-block;"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column width="40px" label>
            <template slot-scope="scope">
              <i class="el-icon-view" style="font-size: 18px; font-weight: 700"
                @click="showDialog(scope.row,scope.row.id)" />
            </template>
          </el-table-column>
          <el-table-column width="50px" label>
            <template v-slot="scope">
              <el-popover placement="right" id="aaaaa" class="h_popover" width="100%" height="148px;" trigger="hover">
                <span @click="reviseData(scope.row)">修改</span>
                <span @click="removeData(scope.row.id)">删除</span>
                <span class="ml10" type="text" size="medium" v-clipboard:copy="JSON.stringify(scope.row.id)"
                  v-clipboard:success="onCopy" v-clipboard:error="onError">复制</span>
                <span>业务分类</span>
                <i class="el-icon-more" style="font-size: 18px;" slot="reference"></i>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="c-sidebar" :style="msg? 'width: 20%' : 'width:23%'">
        <div class="screen">
          <i>
            <img src="../../assets/collection/16.png" alt />
          </i>
          <span>筛选</span>
        </div>
        <div class="sort">
          <p>业务分类</p>
          <p>
            <el-select v-model="value" clearable placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </p>
        </div>
        <div class="creator">
          <p>创建者</p>
          <p>
            <el-select v-model="value" clearable placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </p>
        </div>
        <div class="integrate">
          <p>集成类型</p>
          <p>
            <el-select v-model="value" clearable placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </p>
        </div>
        <div class="dispatch">
          <p>是否调度</p>
          <span>
            <el-checkbox>已安排</el-checkbox>
          </span>
          <span>
            <el-checkbox>未安排</el-checkbox>
          </span>
        </div>
        <div class="working">
          <p>运行状态</p>
          <span>
            <el-checkbox>
              <i class="blue"></i>
              <span>成功</span>
            </el-checkbox>
          </span>
          <span>
            <el-checkbox>
              <i class="warmred"></i>
              <span>失败</span>
            </el-checkbox>
          </span>
          <span>
            <el-checkbox>
              <i class="yellow"></i>
              <span>等待执行</span>
            </el-checkbox>
          </span>
          <span>
            <el-checkbox>
              <i class="wathet"></i>
              <span>运行中</span>
            </el-checkbox>
          </span>
          <span>
            <el-checkbox>
              <i class="gray"></i>
              <span>取消</span>
            </el-checkbox>
          </span>
        </div>
      </div>
    </div>
    <!-- 信息查看的弹出框 -->
    <el-dialog title="核心征管" :modal="true" custom-class="dialog-custom" :visible.sync="viewDialog" width="1300px"
      class="seePopup">
      <el-table :data="tableData1" style="width: 100%">
        <el-table-column label="状态">
          <button
            style="width: 60px;height:24px;background-color: #C9EAA9; border: none; border-radius:2px;">成功</button>
        </el-table-column>
        <el-table-column prop="date" label="运行时长"></el-table-column>
        <el-table-column prop="name" label="任务引擎"></el-table-column>
        <el-table-column prop="address" label="任务ID"></el-table-column>
        <el-table-column prop="date" label="任务信息"></el-table-column>
        <el-table-column prop="name" label="运行时间"></el-table-column>
        <el-table-column prop="address" width="100px" label="日志">
          <img src="../../assets/collection/rizhi.png" alt />
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="viewDialog = false">取消</el-button>
      </span>
      <!-- <v-view @show="showDialog" :msg="msg"></v-view> -->
    </el-dialog>
    <!-- 修改的弹出框 -->
    <el-dialog title="提示" class="alterPopup" :visible.sync="modifyVisible" width="1300px">
      <el-form :model="modifyData" :rules="rules" ref="modifyData" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="modifyData.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetModifyForm('modifyData')">重置</el-button>
        <el-button type="primary" @click="modifyVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ['msg'],
  data() {
    return {
      copyData: '', // 要复制的数据
      viewDialog: false, // 显示/隐藏弹出框
      tableData1: [], // 显示弹出框的内容
      modifyVisible: false, // 修改弹出框
      modifyData: {}, // 要修改的数据
      rules: { // 修改的错误提示
        name: [ // 修改的校验
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      tableData: [ // 要展示到表格的数据
        {
          id: 1,
          date: '1',
          name: '王2',
          address: '上海市普陀区',
          abcd: [
            {
              date: '第一行数据',
              name: '第一行数据',
              address: '第一行数据'
            }
          ]
        },
        {
          id: 2,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区',
          abcd: [
            {
              date: '第二行数据',
              name: '第二行数据',
              address: '第二行数据'
            },
            {
              date: '第二行数据',
              name: '第二行数据',
              address: '第二行数据'
            },
            {
              date: '第二行数据',
              name: '第二行数据',
              address: '第二行数据'
            }
          ]
        }
      ],
      value: '',
      options: [ // 多选框要接收的数据
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '黄金糕'
        }
      ]
    }
  },
  methods: {
    // 显示查看弹出框
    showDialog(row, id) {
      this.tableData1 = row.abcd
      this.viewDialog = true
    },
    // 设置单元格的样式
    cell({ row, column, rowIndex, columnIndex }) {
      return 'height: 5%;border-bottom: 1px solid #F2F2F2'
    },
    // 改变表格的样式
    header2({ row, rowIndex }) {
      // console.log(row)
      // return 'background: red;'
      // return 'font-size: 16px;font-weight: 500;height: 5%;padding:8px 0;'
    },
    header({ row, rowIndex }) {
      // console.log(row)
      return 'height:5%; max-height: 60px;font-size: 16px;'
      // return 'font-size: 16px;font-weight: 500;height: 5%;padding:8px 0;'
    },
    // 修改当前行的数据
    reviseData(row) {
      let rowData = JSON.parse(JSON.stringify(row))
      this.modifyData = rowData
      this.modifyVisible = true
    },
    // 修改弹出框的重置按钮
    resetModifyForm(formName) {
      this.$refs[formName].resetFields()
    },
    // 删除当前行
    removeData(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(id)
        this.$message({
          showClose: true,
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          showClose: true,
          type: 'warning',
          message: '已取消删除'
        })
      })
    },
    // 复制成功
    onCopy(e) {
      console.log(e.text)
      this.$message({
        showClose: true,
        type: 'success',
        message: '复制成功!'
      })
    },
    // 复制失败
    onError(e) {
      e.txt = JSON.parse(e.txt)
      console.log(e)
      this.$message({
        showClose: true,
        type: 'info',
        message: '复制失败!'
      })
    }
  },
  mounted() {
  }
}
</script>
<style lang="less" scoped>
.collection {
  width: 100%;
  height: 100%;
  min-height: 640px;
  overflow: hidden;
  .c-nav {
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: row; /*这里可以不写，flex布局默认方向横向即row*/
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d1d1d1;
    .head {
      padding-left: 30px;
      color: #282828;
      font-size: 22px;
      font-weight: 500;
    }
    .head-right {
      padding-right: 32px;
      .el-button {
        width: 100px;
        max-height: 40px;
        background-color: #4daeca;
        color: #ffffff;
        margin-right: 20px;
      }
      .el-input {
        width: 220px;
        height: 40px;
      }
    }
  }
  .c-container {
    width: 100%;
    overflow: hidden;
    height: 100%;
    .c-table {
      height: 100%;
      float: left;
      border-right: 1px solid #f2f2f2;
      background-color: #fff;
    }
    .c-sidebar {
      width: 20%;
      height: 100%;
      float: right;
      .screen,
      .sort,
      .creator,
      .integrate,
      .dispatch,
      .working {
        padding: 0 31px;
        margin-top: 7%;
        color: #333333;
        .el-checkbox {
          display: block;
        }
        p:nth-child(1) {
          margin-bottom: 7%;
        }
      }
      .sort > span,
      .creator > span,
      .integrate > span,
      .dispatch > span,
      .working > span {
        display: block;
      }
      .screen {
        height: 10%;
        max-height: 60px;
        margin-top: 0px;
        border-bottom: 1px solid #f2f2f2;
        display: flex;
        align-items: center;
        i {
          padding-right: 10px;
        }
      }
      .sort {
        margin-top: 4%;
      }
      .working {
        i {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 10px;
          margin-left: 10px;
        }
      }
    }
  }
  i.blue {
    background-color: #0f8794;
  }
  i.warmred {
    background-color: #ff6b6b;
  }
  i.yellow {
    background-color: #ffe150;
  }
  i.wathet {
    background-color: #5c9ef6;
  }
  i.gray {
    background-color: #c7c7c7;
  }
}
</style>
