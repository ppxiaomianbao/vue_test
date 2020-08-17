var msg=function(value,message,type){
    type = type === null? 'success':type;
    if(value === ''|| value === null){
        //检查是否异常和消息提示
        chckType(type,message,this);
        this.$notify({
        title: '温馨提示',
        message: message,
        type: type
      })
      if(type !== 'success'){
        throw message
      }
    }
}

function chckType(type,message,$this){
    if(type === 'error'){
      $this.$notify.error({
        title: '错误',
        message: message
      });
      throw message
    }else if(type === 'info'){
      $this.$notify.info({
        title: '消息',
        message: message
      });
      throw message
    }
}


export default msg;