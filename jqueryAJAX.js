window.jQuery.ajax=function(url,method,body,successFn,failFn){//window.jQuery.ajax=function(options){
      let request=new XMLHttpRequest()                            //  let url=options.url}
      request.open(url,method)                                    //  let method=options.method
     //我要拿到headers的值：                                       //  let body=options.body
     for(let key in headers){                                     //  let successFn=options.successFn
         let value=headers[key]                                   //  let failFn=options.failFn
         request.setHeader(key,value)                             //如果不写变量，可以写成options.url/options.method
     }                                                           
      request.onreadystatechange((e)=>{                        
          if(request.status===4){                               
              console.log('请求响应都已完毕')                               
          }if(request.readyState>=200&&request.readyState<300){
              console.log('说明请求成功')
              let string=request.responseText
              let object=window.JSON.parse(string)
  
              successFn.call(undefined,request.responseText)//resolve.call(undefined,request.responseText)
  
          }else if(request.readyState>=400){
              console.log('说明请求失败了')
  
              failFn.call(undefined,request)// reject.call(undefined,request)
          }
      request.send(body)
      })
  }
  window.$=window.jQuery
  //怎么传参？
  window.botton.addEventListener('click',(e)=>{
      window.jQuery.ajax(
          '/xxx',
          'post',//如果是get的，就用undefined占位符
          'uersname=1&password=2',
          (responseText)=>{console.log(1)},
          (request)=>{console.log(2)}
      )
  })
  
  window.botton.addEventListener('click',(e)=>{
      let object={
          url:'/xxx',
          method:'post',
          body:'uersname=1&password=2',//如果是get，也可以不谢
          headers:{'content-type':'application/x-www-form-urlencoded',
                   'jack':'20'
                                   },
          successFn:(x)=>{},  //如果成功要他执行两个函数function f1(){},function f2(){},可以写成f1.call(undefined,x)/f2.call(undefined,x)
          failFn:()=>{}
      }
      window.jQuery.ajax(object)   //不写变量，可以写成 window.jQuery.ajax({url:'/xxx',
                                                                        // method:'post',....})
  })
  
  