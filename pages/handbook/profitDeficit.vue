<template>
  <div class="fund">
    <div class="text-content">
      <a class="title" name="1">{{ $t('message.direct.navigation.secondaryTitle0') }}</a>
      <div class="direct-table">
        <table border="1">
          <thead>
          <tr>
            <th v-for="(item, index) in theadList" :key="index">{{item}}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, index) in tbodyList" :key="index">
            <td v-if="index === 0" rowspan="3">币本位合约</td>
            <td align="center" v-for="(todo, index) in item" :key="index">{{todo}}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <p>
        提示：
      </p>
      <p>
        1. 理论上，执行价格偏离触发价格越多越有效，这样可以防止行情快速波动的时候，行情直接超过执行价格，导致无法及时止盈止损！
      </p>
      <p>
        2.设好止盈止损之后，如果再进行限价或市价平仓操作，会取消已设好的止盈止损。设好止盈止损之后，可能会出现在止盈止损列表中找不到止盈止损单的情况，这个时候只需要刷新一下就会显示出来了！
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'profitDeficit',
    data () {
      return {
        theadList: [
          '合约类型',
          '操作类型',
          '操作方法',
          '操作逻辑'
        ],
        tbodyList: [
          ['多单及空单止盈', '直接在仓位里边点击平仓，选择限价，输入止盈价格。', '止盈单会进入委托当中，当价格到达止盈价格的时候就会当前的最新成交价格成交。'],
          ['多单止损', '选择计划委托，触发价格输入止损价格，执行价格输入低于触发价格的数值。输入止损数量，然后点击“卖出/做空”按钮。', '当价格下跌至触发价格的时候会触发一个以执行价格卖出的空单，由于执行价格低于触发价格，正常情况下也是低于当前最新成交价格，所以系统会优先以当前最新成交价格成交这笔空单，完成止损。'],
          ['空单止损', '选择计划委托，触发价格输入止损价格，执行价格输入高于触发价格的数值。输入止损数量，然后点击“买入/做多”按钮。', '当价格上涨至触发价格的时候会触发一个以执行价格买入的多单，由于执行价格高于触发价格，正常情况下也是高于当前最新成交价格，所以系统会优先以当前最新成交价格成交这笔多单，完成止损。']
        ],
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/theme";
  .fund {
    .text-content {
      padding-bottom: 25px;
      margin: 0 20px;
      .title {
        display: block;
        width: 100%;
        height: 50px;
        font-style: normal;
        font-size: 20px;
        color: #24324C;
        line-height: 50px;
        font-weight: normal;
        border-bottom: 1px solid #ECF0F7;
        cursor: text;
      }
      p {
        margin-top: 5px;
        // padding: 0 20px;
        font-size: 14px;
        color: #24324C;
        line-height: 22px;
      }
      .direct-table {
        width: 879px;
        margin: 16px auto 0;
        padding-bottom: 25px;
        background-color: #fff;
        table {
          width: 100%;
          border-collapse: collapse;
          border-color: #fff;
          thead {
            width: 100%;
            tr {
              background: #F8F9FC;
              th {
                min-width: 50px;
                height: 36px;
                padding: 5px 20px;
                font-size: 12px;
                color: #24324C;
                font-family: PingFangSC-Medium;
                line-height: 16px;
                border: solid 1px #ECF0F7;
              }
            }
          }
          tbody {
            width: 100%;
            tr {
              td {
                // width: 100px;
                max-width: 250px;
                height: 30px;
                padding: 10px 20px;
                font-size: 12px;
                color: #24324C;
                border: solid 1px #ECF0F7;
                text-align: left;
                &:nth-child(1) {
                  text-align: center;
                }
                &:nth-child(3),&:nth-child(4) {
                  width: 280px;
                }
              }
              &:nth-child(1) {
                td:nth-child(2) {
                  text-align: center;
                }
              }
            }
          }
        }
        .paddingLR0 {
          padding-left: 10px;
          padding-right: 10px;
        }
      }
    }
  }
</style>
