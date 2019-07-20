const reg = /((?:\w+\.){1}(?:cn|top|one|xyz|wang|shop|site|club|cc|fun|online|biz|red|link|ltd|mobi|info|name|vip|pro|work|tv|kim|group|tech|store|ren|ink|pub|live|wiki|design|beer|art|luxe|在线|中文网|我爱你|中国|网址|网店|公司|网络|集团|餐厅|商标|gov\.cn|com\.cn|com\.tw|com|co|net\.cn|net|org\.cn|org))/g;

function domainFun(store) {
  const domain = (store.state.domain).match(reg)
  if (Array.isArray(domain) && domain.length != 0) {
    return domain.pop()
  } else {
    throw new Error('没有匹配的域名，请查看domains.js文件');
  }
}
export default ({
  app,
  store
}) => {
  const domain = domainFun(store)
  app.apiconfig = {
    // cookie domain
    domain: domain,
    appDomain: '58ex',
    // href domain
    // 58coin
    mainDomain: `http://www.test.${domain}/`,
    // footer
    footerDomain: `http://footer.test.${domain}/`,
    // m站
    mDomain: `http://m.test.${domain}/`,
    // account 
    userDomain: `http://user.test.${domain}/`,
    // spot
    spotDomain: `http://spot.test.${domain}/`,
    // hash
    hashDomain: `http://hash.test.${domain}/`,
    // otc
    otcDomain: `http://c2c.test.${domain}/`,
    // swaps
    swapsDomain: `http://swap.test.${domain}/`,
    // labs
    labsDomain: `http://margin.test.${domain}/`,
    // loan
    loanDomain: `http://mortgageloan.test.${domain}/`,
    // usdt
    usdtDomain: `http://usdtfuture.test.${domain}/`,
    futureDomain: `http://usdtfuture.test.${domain}/`,
    // regular
    regularDomain: `http://regularfuture.test.${domain}/`,
    // 算力
    powerDomain: `http://hashrate.test.${domain}/`,
    // margin
    marginDomain: `http://margin.test.${domain}/`,
    // oldswaps
    oldswapsDomain: `http://oldswap.test.${domain}/`,
    //wap
    wapDomain: `http://wap.test.${domain}/`,
    // api
    baseURL: `http://api.test.${domain}/`, // 58coin 58spot
    agentURL: `http://agentapi.test.${domain}/`, //agent
    hashURL: `http://hashapi.test.${domain}/`, // hash
    otcURL: `http://c2capi.test.${domain}`, // otc
    webSocketURL: `ws://ws.test.${domain}/websocket`, // webSocket
    otcSocketURL: `ws://ws1.test.${domain}/websocket`, // otcWS
    zendeskURL: `http://58coin-support.zendesk.com/`, // zendesk
    oosImgUrl: `http://tianbi-test.oss-cn-beijing.aliyuncs.com/`, // 阿里云
    futureURL: `http://usdtfuture.test.${domain}/usdt/`, // usdt
    regularURL: `http://rusdtfuture.test.${domain}/rusdt/`, // regular
    swapsURL: `http://swapapi.test.${domain}/`, // 58swaps
    serviceURL: `http://serviceapi.test.${domain}/`, // ossweb
    downURL: `http://wap.test.${domain}/`, // download
    showURL: `http://oss.test.${domain}/`,
    powerURL: `http://hashrateapi.test.${domain}/`, // 算力
    url: `http://api.test.${domain}/`,
    loanURL: `http://mortgageloanapi.test.${domain}/`, // mortgageloan
  }
}
