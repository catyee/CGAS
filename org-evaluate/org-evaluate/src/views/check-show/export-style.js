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
    .tip{
        padding: 32px 24px;
        line-height: 26px;
        color: #000;
      }
      .total-table  td{
        text-align: center;
        color: #5B9244;
      }
      .sign-panel{
        padding: 80px 0;
        font-size: 14px;
        font-weight: bold;
      }
      .sign-right{
        width: 40%;
      }
      .sign-right{
        width: 40%;
        float: right;
      }
      .vertical-top{
        display: inline-block;
        vertical-align: top;
      
      }
      .oper-btns{
        display: flex;
        justify-content: center;
      }
      .inline{
        display: inline-block;
        vertical-align: middle;
      }
      .sign-left{
        float: left;
      
      }
      .sign-part{
        padding-top: 20px;
      }
      .clearfix::after {
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
    }
  </style>
  </head>
  
  <body>
  ${element}
  </body>
  
  </html>
  `
}
