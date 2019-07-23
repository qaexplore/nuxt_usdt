<template>
  <div class="direct-table">
    <table border="1">
      <thead>
      <tr>
        <th style="text-align: left">{{$t('message.direct.usdtHandbook.usdtTable.type')}}</th>
        <th>BTC<br/>{{ $t('message.regular.navigation.regularTitle1') }}</th>
        <th>EOS<br/>{{ $t('message.regular.navigation.regularTitle1') }}</th>
        <th>ETH<br/>{{ $t('message.regular.navigation.regularTitle1') }}</th>
        <th>LTC<br/>{{ $t('message.regular.navigation.regularTitle1') }}</th>
        <th>XRP<br/>{{ $t('message.regular.navigation.regularTitle1') }}</th>
        <th>ETC<br/>{{ $t('message.regular.navigation.regularTitle1') }}</th>
        <th>TRX<br/>{{ $t('message.regular.navigation.regularTitle1') }}</th>
        <th>BNB<br/>{{ $t('message.regular.navigation.regularTitle1') }}</th>
        <th>HT<br/>{{ $t('message.regular.navigation.regularTitle1') }}</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{$t('message.direct.usdtHandbook.usdtTable.multiple')}}</td>
        <td style="text-align: center">0.002</td>
        <td style="text-align: center">2</td>
        <td style="text-align: center">0.05</td>
        <td style="text-align: center">0.2</td>
        <td style="text-align: center">40</td>
        <td style="text-align: center">1</td>
        <td style="text-align: center">400</td>
        <td style="text-align: center">0.5</td>
        <td style="text-align: center">5</td>
      </tr>
      <tr>
        <td>{{$t('message.direct.usdtHandbook.usdtTable.unit')}}</td>
        <td style="text-align: center" colspan="10">USDT</td>
      </tr>
      <tr>
        <td>{{$t('message.direct.usdtHandbook.usdtTable.method')}}</td>
        <td style="text-align: center" colspan="10">T+0</td>
      </tr>
      <tr>
        <td>{{$t('message.direct.usdtHandbook.usdtTable.time')}}</td>
        <td style="text-align: center" colspan="10">24H</td>
      </tr>
      <tr>
        <td>{{$t('message.direct.usdtHandbook.usdtTable.rate')}}</td>
        <td style="text-align: center" colspan="10">0.50%</td>
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
            word-break: break-all;
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

