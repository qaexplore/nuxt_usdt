<template>
  <div class="direct-table">
    <table border="1">
      <thead>
      <tr>
        <th style="text-align: left">{{$t('message.direct.usdtHandbook.usdtTable.type')}}</th>
        <th>BTCUSDT</th>
        <th>EOSUSDT</th>
        <th>BCHUSDT</th>
        <th>ETHUSDT</th>
        <th>LTCUSDT</th>
        <th>XRPUSDT</th>
        <th>ETCUSDT</th>
        <th>DASHUSDT</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{$t('message.direct.usdtHandbook.usdtTable.multiple')}}</td>
        <td style="text-align: center">0.002</td>
        <td style="text-align: center">2</td>
        <td style="text-align: center">0.02</td>
        <td style="text-align: center">0.05</td>
        <td style="text-align: center">0.2</td>
        <td style="text-align: center">40</td>
        <td style="text-align: center">1</td>
        <td style="text-align: center">0.1</td>
      </tr>
      <tr>
        <td>{{$t('message.direct.usdtHandbook.usdtTable.unit')}}</td>
        <td style="text-align: center" colspan="8">USDT</td>
      </tr>
      <tr>
        <td>{{$t('message.direct.usdtHandbook.usdtTable.method')}}</td>
        <td style="text-align: center" colspan="8">T+0</td>
      </tr>
      <tr>
        <td>{{$t('message.direct.usdtHandbook.usdtTable.time')}}</td>
        <td style="text-align: center" colspan="8">24H</td>
      </tr>
      <tr>
        <td>{{$t('message.direct.usdtHandbook.usdtTable.rate')}}</td>
        <td style="text-align: center" colspan="8">0.50%</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        theadList: null,
        tbodyList: null,
      }
    }
  }
</script>

<style lang="less" scoped>
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
          /*&:nth-child(odd) {*/
          /*background-color: #fafafb;*/
          /*}*/
          td {
            // width: 100px;
            height: 30px;
            padding: 0 20px;
            font-size: 12px;
            color: #24324C;
            border: solid 1px #ECF0F7;
          }
        }
      }
    }
    .paddingLR0 {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
</style>

