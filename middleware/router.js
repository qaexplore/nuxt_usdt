export default async function ({
  route,
  redirect
}) {
  let id = 1001
  if (route.name === 'index') {
    return redirect(`/trade/${id}`)
  }
  if (process.client) {
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
    document.body.scrollTop = 0;
  }
}
