<template>
  <div class="integrate">
    <div class="i-nav">
      <span class="head">集成类型</span>
      <div class="head-right">
        <el-button>上传文件</el-button>
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
      </div>
    </div>
    <div class="i-container">
      <div class="i-content">
        <div class="grid-content bg-purple">
          <img src="../../assets/visit/ABD.png" alt="">
        </div>
        <div class="grid-content bg-purple-light">
          <img src="../../assets/visit/AWS.png" alt="">
        </div>
        <div class="grid-content bg-purple">
          <img src="../../assets/visit/Aadroid.png" alt="">
        </div>
        <div class="grid-content bg-purple">
          <img src="../../assets/visit/Azure.png" alt="">
        </div>
        <div class="grid-content bg-purple-light">
          <img src="../../assets/visit/HDB.png" alt="">
        </div>
        <div class="grid-content bg-purple">
          <img src="../../assets/visit/HTML.png" alt="">
        </div>
        <div class="grid-content bg-purple">
          <img src="../../assets/visit/IOS.png" alt="">
        </div>
        <div class="grid-content bg-purple-light">
          <img src="../../assets/visit/MaxCompute.png" alt="">
        </div>
        <div class="grid-content bg-purple">
          <img src="../../assets/visit/MySQL.png" alt="">
        </div>
        <div class="grid-content bg-purple">
          <img src="../../assets/visit/ORACLE.png" alt="">
        </div>
        <div class="grid-content bg-purple-light">
          <img src="../../assets/visit/SQLserver.png" alt="">
        </div>
        <div class="grid-content bg-purple">
          <img src="../../assets/visit/XMD.png" alt="">
        </div>
        <div class="grid-content bg-purple">
          <img src="../../assets/visit/asalesforce.png" alt="">
        </div>
        <div class="grid-content bg-purple-light">
          <img src="../../assets/visit/douyin.png" alt="">
        </div>
        <div class="grid-content bg-purple">
          <img src="../../assets/visit/oss.png" alt="">
        </div>
        <div class="grid-content bg-purple">
          <img src="../../assets/visit/power.png" alt="">
        </div>
        <div class="grid-content bg-purple-light">
          <img src="../../assets/visit/tableau-logo.png" alt="">
        </div>
        <div class="grid-content bg-purple">
          <img src="../../assets/visit/weibo.png" alt="">
        </div>
        <div class="grid-content bg-purple">
          <img src="../../assets/visit/weixin.png" alt="">
        </div>
        <div class="grid-content bg-purple-light">
          <img src="../../assets/visit/youku.png" alt="">
        </div>
      </div>
      <div class="i-sidebar" :style="msg? 'width: 20%' : 'width:23%'">
        <div class="screen">
          <i>
            <img src="../../assets/collection/16.png" alt />
          </i>
          <span>筛选</span>
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
        <div class="mold">
          <p>类型</p>
          <span>
            <el-checkbox>数据库</el-checkbox>
          </span>
          <span>
            <el-checkbox>社交媒体</el-checkbox>
          </span>
          <span>
            <el-checkbox>手机或平板APP</el-checkbox>
          </span>
          <span>
            <el-checkbox>广告</el-checkbox>
          </span>
          <span class="open">展示更多</span>
        </div>
        <div class="connect">
          <p>连接方式</p>
          <span>
            <el-checkbox>直接连接</el-checkbox>
          </span>
          <span>
            <el-checkbox>了解更多</el-checkbox>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.integrate {
  width: 100%;
  height: 100%;
  min-height: 640px;
  // overflow: hidden;
  .i-nav {
    height: 10%;
    border-bottom: 1px solid #d1d1d1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .head {
      font-size: 22px;
      padding-left: 30px;
    }
    .head-right {
      display: flex;
      margin-right: 30px;
      .el-button {
        width: 100px;
        height: 40px;
        background-color: #4daeca;
        color: #ffffff;
        margin-right: 20px;
      }
    }
  }
  .i-container {
    height: 90%;
    box-sizing: border-box;
    display: flex;
    .i-content {
      width: 79.9%;
      border-right: 1px solid #d1d1d1;
      padding: 30px;
      padding-right: 0;
      box-sizing: border-box;
      overflow: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .grid-content {
        width: 30%;
        height: 26%;
        max-width: 320px;
        max-height: 200px;
        display: flex;
        margin-right: 3.05%;
        margin-bottom: 3%;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        box-shadow: 0px 0px 20px 0px #d1d1d1;
        img {
          vertical-align: middle;
        }
      }
    }
    .i-sidebar {
      max-width: 300px;
      box-sizing: border-box;
      width: 100%;
      .screen {
        border-bottom: 1px solid #d1d1d1;
        height: 10%;
        width: 100%;
        max-height: 60px;
        display: flex;
        align-items: center;
        padding-left: 25px;
        i {
          padding-right: 10px;
        }
      }
      .transmission,
      .mold,
      .connect {
        padding-left: 25px;
        margin-top: 10%;
        .open {
          font-size: 14px;
          color: #4daeca;
          cursor: pointer;
        }
        span {
          display: block;
          margin-top: 5%;
        }
        a {
          color: red;
          margin-top: 10px;
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
      ]
    }
  }
}
</script>
