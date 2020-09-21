//倒入模块

import axios from 'axios'
import {
  Message
} from 'element-ui'
export default function fetch(options) {
  // var baseURLStr = window.g.SERVICE_CONTEXT_PATH;
  return new Promise((resolve, reject) => {

    //创建一个axios实例
    const instance = axios.create({
      //设置默认根地址
      // baseURL:baseURLStr +'/domainSystem/',
      //  baseURL:'http://115.236.167.13:8080/domainSystem/',
      //  baseURL:'http://192.168.18.74:80/domainSystem/',
      // baseURL:'http://192.168.18.130:8080/domainSystem/',
      // baseURL:'http://192.168.88.110:8888/domainSystem/',
      timeout: 20000,
      baseURL: '/api',
      headers: {},
      // withCredentials:false,
      // transformRequest: [function (data) {
      //   data = Qs.stringify(data);
      //   return data;
      // }],
    });

    //请求处理
    instance(options)
      .then(({
        data: {
          code,
          message,
          respData,
          count,
          yescount
        }
      }) => {
        //请求成功时，
        if (code === 200) {
          // console.log(count);
          resolve({
            code,
          message,
          respData,
            count,
            yescount
          });
          return false
        } else if (code === 201) {
          resolve({
            code,
          message,
          respData,
          });
          return false
        } else if (code === 401) {
          // router.replace({
          //   path: '/login'
          // })
        } else if (code === 404) {
          resolve({
            code,
          message,
          respData,
          });
        } else if (code === -1) {
          resolve({
            code,
            message,
            respData,
          });
          return false
        }
        Message.warning(mag);
        reject({
          code,
          message,
          respData,
        })
      })
      .catch((error) => {
        //请求失败时，根据业务判断状态
        if (error.response) {
          let resError = error.response;
          let resCode = resError.status;
          let resMsg = error.message;
          Message.error('操作失败！错误原因' + resMsg);
          reject({
            code: resCode,
            message: resMsg
          })
        }
      })

  })

}
