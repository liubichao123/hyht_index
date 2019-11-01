<template>
  <div id="dashboard">
    <div class="d-nav">
      <span class="head">仪表盘</span>
      <div class="head-right">
        <el-button>上传文件</el-button>
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
      </div>
    </div>
    <div id="echarts">
      <div class="echarts">
        <div id="myChart" :style="{width: '90%', height: '90%'}"></div>
      </div>
      <div class="echarts">
        <div id="myChart1" :style="{width: '90%', height: '90%'}"></div>
      </div>
      <div class="echarts">
        <div id="myChart2" :style="{width: '90%', height: '90%'}"></div>
      </div>
      <div class="echarts">
        <div id="myChart3" :style="{width: '90%', height: '90%'}"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.drawLine()
    this.drawLine1()
    this.drawLine2()
    this.drawLine3()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      var option = {
        color: ['#4072EE', '#7ECEFD', '#FEC400'],
        title: {
          text: '所有导入的数据—最近3个月',
          x: 'center',
          y: '20',
          textStyle: {
            fontSize: '14px',
            color: '#333333'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          type: 'plain',
          bottom: '0',
          itemWidth: 20,
          itemHeight: 3
        },
        xAxis: {
          type: 'category',
          data: ['7月', '8月', '9月']
        },
        yAxis: {
          gridIndex: 0
        },
        series: [
          {
            name: '数据库导入',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [25000000, 55000000, 35000000]
          },
          {
            name: '文件导入',
            type: 'line',
            smooth: true,
            stack: '总量',
            data: [35000000, 45000000, 85000000]
          },
          {
            name: '实时数据流导入',
            smooth: true,
            type: 'line',
            stack: '总量',
            data: [15000000, 25000000, 5000000]
          }
        ]
      }
      myChart.setOption(option)
    },
    drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart1'))
      // 绘制图表
      var option = {
        color: ['#4072EE', '#7ECEFD', '#FEC400'],
        title: {
          text: '实际储存的数据—最近3个月',
          x: 'center',
          y: '20',
          textStyle: {
            fontSize: '14px',
            color: '#333333'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          type: 'plain',
          bottom: '0',
          itemWidth: 20,
          itemHeight: 3
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          gridIndex: 0
        },
        series: [
          {
            type: 'line',
            smooth: true,
            stack: '总量',
            data: [35000000, 45000000, 85000000]
          }
        ]
      }
      myChart.setOption(option)
    },
    drawLine2() {
      let myChart = this.$echarts.init(document.getElementById('myChart2'))
      var option = {
        color: ['#4072EE', '#7ECEFD', '#FEC400'],
        title: {
          text: '所有导入的数据—最近12个月',
          x: 'center',
          y: '20',
          textStyle: {
            fontSize: '14px',
            color: '#333333'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line'// 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          type: 'plain',
          bottom: '0',
          itemWidth: 20,
          itemHeight: 3
        },
        grid: {
          containLabel: true
        },
        yAxis: {
          type: 'value'
        },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        series: [
          {
            name: '数据库导入',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                position: 'insideRight'
              }
            },
            data: [15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000]
          },
          {
            name: '文件导入',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                position: 'insideRight'
              }
            },
            data: [15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000]
          },
          {
            name: '实时数据流导入',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                position: 'insideRight'
              }
            },
            itemStyle: {
              barBorderRadius: [50, 50, 0, 0]
            },
            data: [15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000]
          }
        ]
      }
      myChart.setOption(option)
    },
    drawLine3() {
      let myChart = this.$echarts.init(document.getElementById('myChart3'))
      var option = {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [40000000, 50000000, 60000000, 70000000, 40000000, 20000000, 40000000, 50000000, 60000000, 70000000, 40000000, 20000000]
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>
<style lang="less" scoped>
#dashboard {
  width: 100%;
  height: 100%;
  min-height: 640px;
  .d-nav {
    height: 10%;
    border-bottom: 1px solid #d1d1d1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .head {
      font-size: 22px;
      padding-left: 30px;
      color: #333333;
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
  #echarts {
    height: 90%;
    width: 100%;
    .echarts {
      width: 50%;
      height: 50%;
      float: left;
    }
  }
}
</style>
