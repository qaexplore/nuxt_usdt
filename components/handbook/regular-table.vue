<template>
  <div class="direct-table">
    <table border="1">
      <thead>
      <tr>
        <th colspan="8">{{$t("message.direct.regularHandbook.systemDetails.td1")}}</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td style="font-weight:600; width:250px; text-align: left;" colspan="1">{{$t("message.direct.regularHandbook.systemDetails.td2")}}</td>
        <td colspan="7" style="font-weight:600;">{{$t("message.direct.regularHandbook.systemDetails.td3")}}</td>
      </tr>
      <tr>
        <td style="font-weight:600; width:250px; text-align: left;" colspan="1">{{$t("message.direct.regularHandbook.systemDetails.td4")}}</td>
        <td colspan="7">{{$t("message.direct.regularHandbook.systemDetails.td5")}}</td>
      </tr>
      <tr>
        <td style="font-weight:600; width:250px; text-align: left;" colspan="1">{{$t("message.direct.regularHandbook.systemDetails.td6")}}</td>
        <td colspan="7">{{$t("message.direct.regularHandbook.systemDetails.td7")}}</td>
      </tr>
      <tr>
        <td style="font-weight:600; width:250px; text-align: left;" colspan="1">{{$t("message.direct.regularHandbook.systemDetails.td8")}}</td>
        <td colspan="7">{{$t("message.direct.regularHandbook.systemDetails.td9")}}</td>
      </tr>
      <tr>
        <td style="font-weight:600; width:250px; text-align: left;" colspan="1">{{$t("message.direct.regularHandbook.systemDetails.td10")}}</td>
        <td colspan="7">{{$t("message.direct.regularHandbook.systemDetails.td11")}}</td>
      </tr>
      <tr>
        <td style="font-weight:600; width:250px; text-align: left;" colspan="1">{{$t("message.direct.regularHandbook.systemDetails.td12")}}</td>
        <td colspan="7">{{$t("message.direct.regularHandbook.systemDetails.td13")}}</td>
      </tr>
      <tr>
        <td style="font-weight:600; width:250px; text-align: left;" colspan="1">{{$t("message.direct.regularHandbook.systemDetails.td14")}}</td>
        <td colspan="7">
          <p style="line-height: 25px;">{{$t("message.direct.regularHandbook.systemDetails.td15")}}</p>
          <p style="line-height: 25px;">{{$t("message.direct.regularHandbook.systemDetails.td16")}}</p>
          <p style="line-height: 25px;">{{$t("message.direct.regularHandbook.systemDetails.td17")}}</p>
          <p style="line-height: 25px;">{{$t("message.direct.regularHandbook.systemDetails.td18")}}</p>
        </td>
      </tr>
      <tr>
        <td style="font-weight:600; width:250px; text-align: left;" colspan="1">{{$t("message.direct.regularHandbook.systemDetails.td19")}}</td>
        <td colspan="7">{{$t("message.direct.regularHandbook.systemDetails.td20")}}</td>
      </tr>
      <tr>
        <td style="font-weight:600; width:250px; text-align: left;" colspan="1">{{$t("message.direct.regularHandbook.systemDetails.td21")}}</td>
        <td colspan="7">{{$t("message.direct.regularHandbook.systemDetails.td22")}}</td>
      </tr>
      <tr>
        <td style="font-weight:600; width:250px; text-align: left;" colspan="1">{{$t("message.direct.regularHandbook.systemDetails.td23")}}</td>
        <td colspan="7">{{$t("message.direct.regularHandbook.systemDetails.td24")}}</td>
      </tr>
      <tr>
        <td style="font-weight:600; width:250px; text-align: left;" colspan="1">{{$t("message.direct.regularHandbook.systemDetails.td25")}}</td>
        <td colspan="7">{{$t("message.direct.regularHandbook.systemDetails.td26")}}</td>
      </tr>
      <tr>
        <td style="font-weight:600; width:250px; text-align: left;" colspan="1">{{$t("message.direct.regularHandbook.systemDetails.td27")}}</td>
        <td colspan="7">
          <p style="line-height: 25px;">{{$t("message.direct.regularHandbook.systemDetails.td28")}}</p>
          <p style="line-height: 25px;">{{$t("message.direct.regularHandbook.systemDetails.td29")}}</p>
        </td>
      </tr>
      <tr>
        <td colspan="8">
          {{$t("message.direct.regularHandbook.systemDetails.td30")}}
        </td>
      </tr>
      <!-- <tr>
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
      </tr> -->
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

