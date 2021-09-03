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
    .brakpage{
      page-break-after: always;
    }
    .table-title{
        text-align: left;
        padding-left: 8px;
        padding-bottom: 8px;
        font-weight: 600;
        color: #000000;
        line-height: 20px;
        font-size: 16px;
       }
       .evaluate-table{
        border: 1px solid #E7E7E7;
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    }
    .f16{
      font-size: 16px;
    }
    .input-line{
        display: flex;
        align-items: center;
       
    }
    .input-line  span{
        white-space: nowrap;
    }
    .evaluate-table  tr,td{
      border: 1px solid #E7E7E7;
    }
    td{
      padding:12px 8px;
      font-size: 14px;
      line-height: 1.5;
      vertical-align: middle;
    }
    .td-top{
        vertical-align: top;
      }
    .center{
        text-align: center;
      }
      .text-bold{
        font-weight: bold;
    }
    .bold{
      font-weight: bold;
    }
    .tip{
        padding: 32px 24px;
        line-height: 26px;
        color: #000;
      }
      .total-table  td{
        text-align: center;
        color: #5B9244;
        word-break: break-all;
      }
      .total-table .text-left{
        text-align: left;
      }
      .sign-panel{
        padding: 80px 0;
        font-size: 14px;
        font-weight: bold;
      }
      .vertical-top{
        display: inline-block;
        vertical-align: top;
      
      }
      
      .clearfix::after {
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
    }
    .view-image{
      display: inline-block;
      vertical-align: middle;
      margin-top:30px;
    }
    .f-l{
      float: left;
    }
    .f-r{
      float: right;
      width: 40%;
    }
    .pt-30{
      padding-top: 30px;
    }
    .inline-t {
      display: table-cell;
      vertical-align: sub;
    }
    .inline{
      display: inline-block;
      vertical-align: text-top;
      }
      .f16{
        font-size:16px;
      }
      .text-center{
        text-align:center;
      }
      .text-left{
        text-align:left;
      }     
      .warn-C{
        background-color: #fcc;
      }
  </style>
  </head>
  
  <body>
  ${element}
  </body>
  
  </html>
  `
}
