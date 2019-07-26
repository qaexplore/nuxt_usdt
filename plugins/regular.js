
import regularApi from "@/assets/js/api/regularApi.js";
export default async function ({
  store,
}) {
  return regularApi.getContractList().then(res => {
    let regularList = res.data.contractList;
    store.commit('SET_REGULAR_LIST', regularList)
  })
    .catch(e => {
      console.log(e);
    });
}
