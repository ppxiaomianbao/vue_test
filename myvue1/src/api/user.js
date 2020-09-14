import fetch from '../fetch'

//获取用户列表
export function getList(params) {
  return fetch({
    url: '/consum/vueTable/getList',
    method: 'get',
    params,
  })
}

//登录
export function login(params) {
  return fetch({
    url: '/account/login',
    method: 'post',
    data: params,
  })
}
