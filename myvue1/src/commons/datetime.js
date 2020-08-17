//时间格式化配置
var formatDate=function formatDate(date, fmt) {
    //判断需要转换的时间是否为空
    this.msg(date,"转换的时间为空",'error');
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
  };
  
  function padLeftZero(str) {
    return ('00' + str).substr(str.length);
  }

  export default formatDate;