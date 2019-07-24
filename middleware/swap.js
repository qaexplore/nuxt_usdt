
import newSwapApi from "@/assets/js/api/newSwapApi.js";
export default async function ({
  store,
}) {
  return newSwapApi.getContractList().then(res => {
    let contract = res.data.contractList;
    store.commit('SET_SWAP_LIST', contract)
  })
    .catch(e => {
      console.log(e);
    });
}
