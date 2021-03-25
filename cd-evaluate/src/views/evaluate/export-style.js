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
  @page {
    @bottom-right {
        content: counter(page) ;
    }
    @top-right {
        content: "MZ/T 039—2013 ";
    }
 }

  html,
  body {
      font-size: 14px;
  }

  table {
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
      vertical-align: middle;
  }

  tr,
  td {
      min-height: 32px;
      border: 1px solid #E7E7E7;
  }

  .h1-title {
      line-height: 28px;
      font-weight: bold;
      color: #000000;
      font-size: 20px;
      text-align: center;
      padding-top: 32px;
  }

  .title-desc {
      text-align: center;
      padding: 10px 0;
      font-size: 16px;
      color: #000000;
      line-height: 17px;
  }

  .subtitle {
      text-align: center;
      font-size: 16px;
      color: #000000;
      line-height: 17px;
      padding-bottom: 32px;
  }

  .table-wrap {
      padding-bottom: 24px;
  }

  .table-title {
      text-align: left;
      padding-left: 8px;
      padding-bottom: 8px;
      font-weight: bold;
      color: #000000;
      line-height: 20px;
      font-size: 16px;
  }

  .evaluate-table {
      border: 1px solid #E7E7E7;
      width: 100%;

  }

  .table-num {
      padding-right: 8px;
  }

  td {
      padding: 2px 8px;
      font-size: 14px;
      vertical-align: middle;
  }

  .question {
      width: 20%;
      padding:0px 8px;
      vertical-align: middle;
      line-height: 22px;
  }

  .center {
      text-align: center;
  }

  .question1 {
      width: 10%;
      padding: 8px;
      line-height: 22px;
  }


  .text {
      padding: 0 8px;
  }

  .choices {
      position: relative;
      padding: 6px 8px;
      vertical-align: middle;
  }


  .right-con {
      position: absolute;
      bottom: 5px;
      right: 5px;

  }

  .line22 {
      line-height: 24px;
  }

  .print-sign {
      text-align: center;
      margin-top: 64px;
  }

  .text-box-group {
      font-size: 0;
  }

  .text-box {
      display: inline-block;
      border: 1px solid #000;
      width: 22px;
      margin: 0 2px;
      font-size: 14px;
      line-height: 22px;
      text-align: center;
      height: 22px;
  }

  .text {
      display: inline-block;
      font-size: 14px;
  }
  .active{
    font-weight: bold;
    font-size: 14px;
  }
  .img-show{
      display:none
  }
  .choice-text {
      display: inline-block;
      padding-right: 10px;
      line-height: 22px;
  }

  .text-undeline {
      display: inline-block;
      padding: 3px 5px;
      width: 60px;
      border-bottom: 1px solid #000;
  }

  .right-group {
      display: inline-block;
  }
  .sign-box{
      overflow:hidden;
  }
  .sign-input{
     float:left;
     padding:10px 0;
  }
  .sign-input-date{
    float:right;
    padding:10px 0;
 }
  .bold{
      font-weight: bold;
  }
  .pt-20{
      padding-top: 10px;
  }
  .pb-20{
      padding-bottom: 10px;
  }
  .pl-10{
      padding-left: 10px;
  }
  .brakpage{
    page-break-after: always;
  }
  .sign-img{
      width:100%;
  }
  .img-export-sign{
      width:100%;
      display:inline-block;
  }
</style>
</head>

<body>
${element}
</body>

</html>
`
}
