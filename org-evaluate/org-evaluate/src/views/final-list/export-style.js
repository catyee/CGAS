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
  
    html,
    body {
        font-size: 14px;
    }
    table{
      border: 1px solid #E7E7E7;
      width: 100%;
      overflow-y: auto;
      box-sizing: border-box;
      padding: 48px 16px;
  }
  tr,td{
      border: 1px solid #E7E7E7;
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
  </style>
  </head>
  
  <body>
  ${element}
  </body>
  
  </html>
  `
}
