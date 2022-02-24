console.log('main.js--aaa');

let n = 1;


getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const json = request.response;
      console.log(json);
      const object = JSON.parse(request.response);
      myName.textContent = object.name;
    }
  }
  request.send();
}
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      console.log(dom);
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  }
  request.send();
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest();   // request.readyState = 0
  request.open("GET", "/3.html");  // request.readyState = 1
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {  // request.readyState = 3  start  download & loading
      console.log('下载完成');       // request.readyState = 4    download finish
      if(request.status >= 200 && request.status < 300){

          const div = document.createElement('div');
          div.innerHTML = request.response;
          document.body.appendChild(div);
      }else {
        alert("加载HTML 失败")
      }
    }
  }

  request.send();  // request.readyState = 2
}
// getJS.onclick = () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "/2.js");
//   request.onreadystatechange = () => {
//     console.log(request.readyState);
//     if (request.readyState === 4) {  // request.readyState = 3  start  download & loading
//       console.log('下载完成');       // request.readyState = 4    download finish
//       if(request.status >= 200 && request.status < 300){
//         console.log('request.response');
//         console.log(request.response);
//         //创建 script 标签
//         const script = document.createElement("script");
//         // 填写 script 内容
//         script.innerText = request.response;
//         // 插到body里面
//         document.body.appendChild(script);
//       }else {
//         alert("加载JS 失败")
//       }
//     }
//   }
//   // request.onload = () => {
//   //   console.log('request.response');
//   //   console.log(request.response);
//   //   //创建 script 标签
//   //   const script = document.createElement("script");
//   //   // 填写 script 内容
//   //   script.innerText = request.response;
//   //   // 插到body里面
//   //   document.body.appendChild(script);
//   // }
//   // request.onerror = () => {
//   //   console.log('error js');
//   // }
//   request.send();
// }
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {  // request.readyState = 3  start  download & loading
      console.log('下载完成');       // request.readyState = 4    download finish
      if(request.status >= 200 && request.status < 300){
        console.log('request.response');
        console.log(request.response);
        //创建 style 标签
        const style = document.createElement("style");
        // 填写 style 内容
        style.innerHTML = request.response;
        // 插到头里面
        document.head.appendChild(style);
      }else {
        alert("error css")
      }
    }
  }
  request.send();
}


