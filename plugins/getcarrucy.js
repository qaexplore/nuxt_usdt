import SwapsApi from '@/assets/js/api/swapsApi'
import Filter from '@/assets/js/filter'
export default ({
  store,
  route,
  redirect
}) => {
  SwapsApi.getContractAllList().then(res => {
    let arr = res.data.contractList || []
    arr = Filter.reRepeatArr(arr, 'id')
    arr.forEach(item => {
      if (!item.contractParam) {
        item.contractParam = {}
      }
    })
    store.commit('market/SET_CONTRACT', arr)
    if (!!route.params.id) return
    redirect(`/trade/${arr[0].id}`)
  }).catch(err => {
    console.log(err)
  })
}
