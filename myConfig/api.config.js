const domain = '58ex.com';

export default {
  // cookie domain
  domain: domain,
  appDomain: '58ex',
  // href domain
  // 58coin
  mainDomain: `https://www.${domain}/`,
  // footer
  footerDomain: `https://footer.${domain}/`,
  // m站
  mDomain: `https://m.${domain}/`,
  // account 
  userDomain: `https://user.${domain}/`,
  // spot
  spotDomain: `https://spot.${domain}/`,
  // hash
  hashDomain: `https://hash.${domain}/`,
  // otc
  otcDomain: `https://c2c.${domain}/`,
  // swaps
  swapsDomain: `https://swap.${domain}/`,
  // labs
  labsDomain: `https://margin.${domain}/`,
  // loan
  loanDomain: `https://mortgageloan.${domain}/`,
  // usdt
  usdtDomain: `https://usdtfuture.${domain}/`,
  futureDomain: `https://usdtfuture.${domain}/`,
  // regular
  regularDomain: `https://regularfuture.${domain}/`,
  // 算力
  powerDomain: `https://hashrate.${domain}/`,
  // margin
  marginDomain: `https://margin.${domain}/`,
  // oldswaps
  oldswapsDomain: `https://oldswap.${domain}/`,
  //wap
  wapDomain: `https://wap.${domain}/`,
  // api
  baseURL: `https://api.${domain}/`, // 58coin 58spot
  agentURL: `https://agentapi.${domain}/`, //agent
  hashURL: `https://hashapi.${domain}/`, // hash
  otcURL: `https://c2capi.${domain}`, // otc
  webSocketURL: `ws://ws.${domain}/websocket`, // webSocket
  otcSocketURL: `ws://ws1.${domain}/websocket`, // otcWS
  zendeskURL: `https://58coin-support.zendesk.com/`, // zendesk
  oosImgUrl: `https://tianbi-test.oss-cn-beijing.aliyuncs.com/`, // 阿里云
  futureURL: `https://usdtfuture.${domain}/usdt/`, // usdt
  regularURL: `https://rusdtfuture.${domain}/rusdt/`, // regular
  swapsURL: `https://swapapi.${domain}/`, // 58swaps
  serviceURL: `https://serviceapi.${domain}/`, // ossweb
  downURL: `https://wap.${domain}/`, // download
  showURL: `https://oss.${domain}/`,
  powerURL: `https://hashrateapi.${domain}/`, // 算力
  url: `https://api.${domain}/`,
  loanURL: `https://mortgageloanapi.${domain}/`, // mortgageloan
}
