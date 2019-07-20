const reg = /((?:\w+\.){1}(?:cn|top|one|xyz|wang|shop|site|club|cc|fun|online|biz|red|link|ltd|mobi|info|name|vip|pro|work|tv|kim|group|tech|store|ren|ink|pub|live|wiki|design|beer|art|luxe|在线|中文网|我爱你|中国|网址|网店|公司|网络|集团|餐厅|商标|gov\.cn|com\.cn|com\.tw|com|co|net\.cn|net|org\.cn|org))/g ;

function getDomain(){
  const domain = window.location.href.match(reg)
  if( Array.isArray(domain) && domain.length != 0){
    return domain.pop()
  }else{
    throw new Error('没有匹配的域名，请查看domains.js文件');
  }
}

export { reg, getDomain }