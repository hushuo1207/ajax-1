
// const script = document.createElement('script');
// script.src = 'http://localhost:8886/2.js';
// console.log(script)
// document.body.appendChild(script);

function jsonp(url) {
  return new Promise((resolve, reject) => {
    const random = "axingJSONPCallbackName" + Math.random();
    window[random] = data => {
      resolve(data);
    };
    const script = document.createElement("script");
    script.src = `${url}?callback=${random}`;
    script.onload = () => {
      script.remove();
    };
    script.onerror = () => {
      reject();
    };
    document.body.appendChild(script);
  });
}

const url = 'http://qq.com:8880/'
// const url = '124.222.140.99'
getJS.onclick = () => {
  jsonp(url+'2.js').then(data => {
    console.log(data);
  });
  // console.log('ISON get 2.js');
  // const script = document.createElement('script');
  // script.src = 'http://localhost:8880/2.js';
  // document.body.appendChild(script);
}
getJSON.onclick = () => {
  console.log('CROS get json');
  const request = new XMLHttpRequest();
  request.open("GET", url + '5.json');
  request.onreadystatechange = () => {
    console.log(request.readyState)
    if (request.readyState === 4 && request.status === 200) {
      console.log(JSON.parse(request.response))
      const json = JSON.parse(request.response)
      const div = document.querySelectorAll('.content')
      let i = 0;
      for(let key in json){
        div[i].textContent = `${key}---${json[key]}`
        i++
      }
      //content.textContent=string;
    }
  }
  request.send();
}




//
// let n = 1;
//
// getPage.onclick = () => {
//   if(n ===3) return  alert("没有下一页了");
//
//   const request = new XMLHttpRequest();
//   request.open("GET", `/page${n+1}`);
//   request.onreadystatechange = () => {
//     if (request.readyState === 4 && request.status === 200) {
//       const array = JSON.parse(request.response);
//       array.forEach(item => {
//         const li = document.createElement("li");
//         li.textContent = item.id;
//         xxx.appendChild(li);
//       });
//
//       n+=1
//
//     }
//   };
//   request.send();
// };
// getJSON.onclick = () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "/5.json");
//   request.onreadystatechange = () => {
//     if (request.readyState === 4 && request.status === 200) {
//       const json = request.response;
//       console.log(json);
//       const object = JSON.parse(request.response);
//       myName.textContent = object.name;
//     }
//   }
//   request.send();
// }
// getXML.onclick = () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "/4.xml");
//   request.onreadystatechange = () => {
//     if (request.readyState === 4 && request.status === 200) {
//       const dom = request.responseXML;
//       console.log(dom);
//       const text = dom.getElementsByTagName("warning")[0].textContent;
//       console.log(text.trim());
//     }
//   }
//   request.send();
// }
//
// getHTML.onclick = () => {
//   const request = new XMLHttpRequest();   // request.readyState = 0
//   request.open("GET", "/3.html");  // request.readyState = 1
//   request.onreadystatechange = () => {
//     console.log(request.readyState);
//     if (request.readyState === 4) {  // request.readyState = 3  start  download & loading
//       console.log('下载完成');       // request.readyState = 4    download finish
//       if(request.status >= 200 && request.status < 300){
//
//         const div = document.createElement('div');
//         div.innerHTML = request.response;
//         document.body.appendChild(div);
//       }else {
//         alert("加载HTML 失败")
//       }
//     }
//   }
//
//   request.send();  // request.readyState = 2
// }
// getCSS.onclick = () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "/style.css");
//   request.onreadystatechange = () => {
//     console.log(request.readyState);
//     if (request.readyState === 4) {  // request.readyState = 3  start  download & loading
//       console.log('下载完成');       // request.readyState = 4    download finish
//       if(request.status >= 200 && request.status < 300){
//         console.log('request.response');
//         console.log(request.response);
//         //创建 style 标签
//         const style = document.createElement("style");
//         // 填写 style 内容
//         style.innerHTML = request.response;
//         // 插到头里面
//         document.head.appendChild(style);
//       }else {
//         alert("error css")
//       }
//     }
//   }
//   request.send();
// }


