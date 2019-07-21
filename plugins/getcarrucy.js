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
    let id = !!arr[0] ? arr[0].id : ''
    if (!!route.params.id) return
    process.client && redirect(`/trade/${id}`)
  }).catch(err => {
    console.log(err)
  })
}
