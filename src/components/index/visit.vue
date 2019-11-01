<template>
  <div class="visit">
    <div class="v-nav">
      <span class="head">访问凭证</span>
      <div class="head-right">
        <el-button>上传文件</el-button>
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
      </div>
    </div>
    <div class="v-container">
      <div class="v-table" style="width:79.9%">
        <el-table :data="tableData" style="width: 100%" :cell-style="cell" :header-row-style="header1">
          <el-table-column sortable label="类型">
            <img src="../../assets/collection/13.png" alt />
          </el-table-column>
          <el-table-column prop="name" sortable label="凭证名称"></el-table-column>
          <el-table-column prop="date" sortable label="创建者"></el-table-column>
          <el-table-column prop="address" sortable label="关联的采集规则个数"></el-table-column>
          <el-table-column width="85px" label="操作">
            <template v-slot="scope">
              <el-popover placement="right" class="h_popover aaaaa" width="60px" height="148px;" trigger="hover">
                <span>查看</span>
                <span @click="reviseData(scope.row)">修改</span>
                <span @click="removeData(scope.row.id)">删除</span>
                <span class="ml10" type="text" size="medium" v-clipboard:copy="JSON.stringify(scope.row.id)"
                  v-clipboard:success="onCopy" v-clipboard:error="onError">复制</span>
                <i class="el-icon-more" style="font-size: 18px;" slot="reference"></i>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="v-sidebar">
        <div class="screen">
          <i>
            <img src="../../assets/collection/16.png" alt />
          </i>
          <span>筛选</span>
        </div>
        <div class="creator">
          <p>创建者</p>
          <p>
            <el-select v-model="value" clearable placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </p>
        </div>
        <div class="allTypes">
          <p>所有类型</p>
          <p>
            <el-select v-model="value" clearable placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </p>
        </div>
        <div class="transmission">
          <p>数据传输</p>
          <span>
            <el-checkbox>数据源</el-checkbox>
          </span>
          <span>
            <el-checkbox>目的地</el-checkbox>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.visit {
  width: 100%;
  height: 100%;
  min-height: 640px;
  overflow: hidden;
  .v-nav {
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: row; /*这里可以不写，flex布局默认方向横向即row*/
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d1d1d1;
    .head {
      line-height: 90px;
      font-size: 22px;
      color: #282828;
      padding-left: 30px;
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
  .v-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .v-table {
      height: 100%;
      float: left;
      border-right: 1px solid #f2f2f2;
      background-color: #fff;
    }
    .v-sidebar {
      height: 100%;
      width: 20%;
      float: right;
      .screen,
      .creator,
      .allTypes,
      .transmission {
        padding: 0 31px;
        padding-top: 31px;
        color: #333333;
        .el-checkbox {
          display: block;
          padding-bottom: 18px;
        }
        p {
          padding-bottom: 28px;
        }
      }
      .creator > span,
      .allTypes > span,
      .transmission > span {
        display: block;
      }
      .screen {
        height: 60px;
        padding-top: 0px;
        line-height: 60px;
        border-bottom: 1px solid #f2f2f2;
        i {
          padding-right: 10px;
        }
      }
    }
  }
}
</style>
<script>
export default {
  props: ['msg'],
  data() {
    return {
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
      ],
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
      ]
    }
  },
  methods: {
    cell({ row, column, rowIndex, columnIndex }) {
      return 'height: 60px;border-bottom: 1px solid #F2F2F2'
    },
    // 改变表格的样式
    header1({ row, rowIndex }) {
      return 'height: 60px;'
    },
    header2({ row, rowIndex }) {
      console.log(row)
    },
    header3({ row, rowIndex }) {
      // return 'height: 60px;'
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
  }
}
</script>
