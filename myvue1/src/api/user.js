import fetch from '../fetch'

//登录
export function getList(params) {
  return fetch({
    url: '/vueTable/getList',
    method: 'get',
    params,
  })
}