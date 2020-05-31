(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{3245:function(t,e){t.exports={content:["section",["p","文件选择上传和拖拽上传控件。"],["h2","何时使用"],["p","上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。"],["ul",["li",["p","当需要上传一个或一些文件时。"]],["li",["p","当需要展现上传的进度时。"]],["li",["p","当需要使用拖拽交互时。"]]]],meta:{category:"Components",subtitle:"上传",type:"数据录入",title:"Upload",cover:"https://gw.alipayobjects.com/zos/alicdn/KIp6oKUun/Upload.svg",filename:"components/upload/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","accept"],["td","接受上传的文件类型, 详见 ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept"},"input accept Attribute"]],["td","string"],["td","无"],["td"]],["tr",["td","action"],["td","上传的地址"],["td","string","|","(file) => ",["code","Promise"]],["td","无"],["td"]],["tr",["td","method"],["td","上传请求的 http method"],["td","string"],["td",["code","post"]],["td"]],["tr",["td","directory"],["td","支持上传文件夹（",["a",{title:null,href:"https://caniuse.com/#feat=input-file-directory"},"caniuse"],"）"],["td","boolean"],["td","false"],["td"]],["tr",["td","beforeUpload"],["td","上传文件之前的钩子，参数为上传的文件，若返回 ",["code","false"]," 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 ",["code","File"]," 或 ",["code","Blob"]," 对象则上传 resolve 传入对象）。",["strong","注意：IE9 不支持该方法"],"。"],["td","(file, fileList) => ",["code","boolean | Promise"]],["td","无"],["td"]],["tr",["td","customRequest"],["td","通过覆盖默认的上传行为，可以自定义自己的上传实现"],["td","Function"],["td","无"],["td"]],["tr",["td","data"],["td","上传所需额外参数或返回上传额外参数的方法"],["td","object","|","(file) => ",["code","object | Promise<object>"]],["td","无"],["td"]],["tr",["td","defaultFileList"],["td","默认已经上传的文件列表"],["td","object","[","]"],["td","无"],["td"]],["tr",["td","disabled"],["td","是否禁用"],["td","boolean"],["td","false"],["td"]],["tr",["td","fileList"],["td","已经上传的文件列表（受控），使用此参数时，如果遇到 ",["code","onChange"]," 只调用一次的问题，请参考 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/2423"},"#2423"]],["td","object","[","]"],["td","无"],["td"]],["tr",["td","headers"],["td","设置上传的请求头部，IE10 以上有效"],["td","object"],["td","无"],["td"]],["tr",["td","listType"],["td","上传列表的内建样式，支持三种基本样式 ",["code","text"],", ",["code","picture"]," 和 ",["code","picture-card"]],["td","string"],["td",["code","text"]],["td"]],["tr",["td","multiple"],["td","是否支持多选文件，",["code","ie10+"]," 支持。开启后按住 ctrl 可选择多个文件"],["td","boolean"],["td","false"],["td"]],["tr",["td","name"],["td","发到后台的文件参数名"],["td","string"],["td",["code","file"]],["td"]],["tr",["td","previewFile"],["td","自定义文件预览逻辑"],["td","(file: File ","|"," Blob) => Promise<dataURL: string>"],["td","无"],["td"]],["tr",["td","isImageUrl"],["td","自定义缩略图是否使用 ",["code","<img />"]," 标签进行显示"],["td","(file: UploadFile) => boolean"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/4ad5830eecfb87471cd8ac588c5d992862b70770/components/upload/utils.tsx#L47-L68"},"内部实现"]],["td"]],["tr",["td","showUploadList"],["td","是否展示文件列表, 可设为一个对象，用于单独设定 ",["code","showPreviewIcon"],", ",["code","showRemoveIcon"],", ",["code","showDownloadIcon"],", ",["code","removeIcon"]," 和 ",["code","downloadIcon"]],["td","Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean, removeIcon?: React.ReactNode, downloadIcon?: React.ReactNode }"],["td","true"],["td"]],["tr",["td","withCredentials"],["td","上传请求时是否携带 cookie"],["td","boolean"],["td","false"],["td"]],["tr",["td","openFileDialogOnClick"],["td","点击打开文件对话框"],["td","boolean"],["td","true"],["td"]],["tr",["td","onChange"],["td","上传文件改变时的状态，详见 ",["a",{title:null,href:"#onChange"},"onChange"]],["td","Function"],["td","无"],["td"]],["tr",["td","onPreview"],["td","点击文件链接或预览图标时的回调"],["td","Function(file)"],["td","无"],["td"]],["tr",["td","onRemove  "],["td","点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。              "],["td","Function(file): ",["code","boolean | Promise"]],["td","无  "],["td"]],["tr",["td","onDownload"],["td","点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页。"],["td","Function(file): void"],["td","跳转新标签页"],["td"]],["tr",["td","transformFile  "],["td","在上传之前转换文件。支持返回一个 Promise 对象  "],["td","Function(file): ",["code","string | Blob | File | Promise<string | Blob | File>"]],["td","无  "],["td"]],["tr",["td","iconRender"],["td","自定义显示 icon"],["td","(file: UploadFile, listType?: UploadListType) => React.ReactNode"],["td","无"],["td"]],["tr",["td","progress"],["td","自定义进度条样式"],["td",["a",{title:null,href:"/components/progress/#API"},"ProgressProps"]," ( 仅支持 ",["code",'type="line"']," )"],["td",["code","{ strokeWidth: 2, showInfo: false }"]],["td","4.3.0"]]]],["h3","onChange"],["blockquote",["p","上传中、完成、失败都会调用这个函数。"]],["p","文件状态改变的回调，返回为："],["pre",{lang:"js",highlighted:'<span class="token punctuation">{</span>\n  file<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  fileList<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token comment" spellcheck="true">/* ... */</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  event<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>'},["code","{\n  file: { /* ... */ },\n  fileList: [ /* ... */ ],\n  event: { /* ... */ },\n}"]],["ol",["li",["p",["code","file"]," 当前操作的文件对象。"],["pre",{lang:"js",highlighted:'<span class="token punctuation">{</span>\n   uid<span class="token punctuation">:</span> <span class="token string">\'uid\'</span><span class="token punctuation">,</span>      <span class="token comment" spellcheck="true">// 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突</span>\n   name<span class="token punctuation">:</span> <span class="token string">\'xx.png\'</span>   <span class="token comment" spellcheck="true">// 文件名</span>\n   status<span class="token punctuation">:</span> <span class="token string">\'done\'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// 状态有：uploading done error removed</span>\n   response<span class="token punctuation">:</span> <span class="token string">\'{"status": "success"}\'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// 服务端响应内容</span>\n   linkProps<span class="token punctuation">:</span> <span class="token string">\'{"download": "image"}\'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// 下载链接额外的 HTML 属性</span>\n<span class="token punctuation">}</span>'},["code","{\n   uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突\n   name: 'xx.png'   // 文件名\n   status: 'done', // 状态有：uploading done error removed\n   response: '{\"status\": \"success\"}', // 服务端响应内容\n   linkProps: '{\"download\": \"image\"}', // 下载链接额外的 HTML 属性\n}"]]],["li",["p",["code","fileList"]," 当前的文件列表。"]],["li",["p",["code","event"]," 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持。"]]],["h2","FAQ"],["h3","服务端如何实现？"],["ul",["li",["p","服务端上传接口实现可以参考 ",["a",{title:null,href:"https://github.com/blueimp/jQuery-File-Upload/wiki#server-side"},"jQuery-File-Upload"],"。"]],["li",["p","如果要做本地 mock 可以参考这个 ",["a",{title:null,href:"https://github.com/react-component/upload/blob/master/server.js"},"express 的例子"],"。"]]],["h3","如何显示下载链接？"],["p","请使用 fileList 属性设置数组项的 url 属性进行展示控制。"],["h3",["code","customRequest"]," 怎么使用？"],["p","请参考 ",["a",{title:null,href:"https://github.com/react-component/upload#customrequest"},"https://github.com/react-component/upload#customrequest"],"。"]]}}}]);