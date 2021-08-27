export function getHtml (element) {
  return `
    <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <style>
    * {
        padding: 0;
        margin: 0;
    }
    @page{size:a4}
  
    html,
    body {
        font-size: 14px;
        width:100%;
    }
    table{
      border-collapse: collapse;
      border-spacing: 0;
      border: 1px solid #333;
      width: 100%;
      overflow-y: auto;
      box-sizing: border-box;
      padding: 48px 16px;
  }
  tr,td{
      border: 1px solid #333;
      background-color: #fff;
      box-sizing: border-box;
      word-break: break-all;
    }
    td{
      padding:12px 8px;
      font-size: 14px;
      line-height: 1.5;
      vertical-align: middle;
    }
    #lineTd {
      position:relative;
      background-color: #fff;
      background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjEwMCUiIHkyPSIxMDAlIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=);
      background-repeat: no-repeat;
      background-position:center center;
      background-size:cover;
      transform:rotate(-10deg) scale(1.21);
     }
     .bg-icon{
      position: absolute;
      top: 0;
      left: 0;
    }
    .linetd1{
      float:left;
      display:inline-block;
      width:60px;
      margin-top:20px
     }
     .linetd2{
      display:inline-block;
      float:right;
      width:60px;
      margin-top:-50px
     }
  </style>
  </head>
  
  <body>
  ${element}
  </body>
  
  </html>
  `
}
