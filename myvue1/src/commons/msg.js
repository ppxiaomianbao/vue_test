var msg=function(value,message,type){
    if(value === ''){
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

export default msg;