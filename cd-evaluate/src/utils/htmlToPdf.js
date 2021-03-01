import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
// import $ from 'jquery'
export default {
  install (Vue, options) {
    Vue.prototype.getPdf = function () {
      const elements = document.getElementById('pdfDom').querySelectorAll('.evaluate-tab')
      var title = this.htmlTitle
      h22p(title, elements)
      // var pages = $('#pdfDom .evaluate-tab')
      // console.log(pages)
      // const PDF = new JsPDF('', 'pt', 'a4')
      // var position = 0
      // html2Canvas(pages[0], {
      //   allowTaint: true
      // }).then(function (canvas) {
      //   const contentWidth = canvas.width
      //   const contentHeight = canvas.height
      //   // const pageHeight = contentWidth / 592.28 * 841.89
      //   // const leftHeight = contentHeight
      //   position = 0
      //   const imgWidth = 595.28
      //   const imgHeight = 592.28 / contentWidth * contentHeight
      //   const pageData = canvas.toDataURL('image/jpeg', 1.0)
      //   PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
      // }).then(function () {
      //   html2Canvas(pages[1], {
      //     allowTaint: true
      //   }).then(function (canvas) {
      //     const contentWidth = canvas.width
      //     const contentHeight = canvas.height
      //     // const pageHeight = contentWidth / 592.28 * 841.89
      //     // const leftHeight = contentHeight
      //     // const position = 0
      //     position -= 841.89
      //     const imgWidth = 595.28
      //     const imgHeight = 592.28 / contentWidth * contentHeight
      //     const pageData = canvas.toDataURL('image/jpeg', 1.0)
      //     PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
      //     PDF.addPage()
      //   }).then(function () {
      //     PDF.save(title + '.pdf')
      //   })
      // })
    }
    function h22p (filename, els) {
      const pdf = new JsPDF('', 'pt', 'a4')
      const flagArr = []
      for (let i = 0, len = els.length; i < len; i++) {
        flagArr.push(0)
      }
      runself(0)
      const _this = this
      function runself (index) {
        const html = els[index]
        // [...els].map((html, index) => {
        const contentWidth = html.clientWidth // 获得该容器的宽
        const contentHeight = html.clientHeight // 获得该容器的高
        const canvas = document.createElement('canvas')
        const scale = 2 // 解决清晰度问题，先放大 2倍
        canvas.width = contentWidth * scale // 将画布宽&&高放大两倍
        canvas.height = contentHeight * scale
        canvas.getContext('2d').scale(scale, scale)
        const opts = {
          // scale: scale,
          canvas: canvas,
          width: contentWidth,
          height: contentHeight,
          useCORS: true
        }
        html2Canvas(html, opts).then(canvas => {
          const pageData = canvas.toDataURL('image/jpeg', 1.0) // 清晰度 0 - 1
          const imgWidth = 555.28
          const imgHeight = (imgWidth / contentWidth) * contentHeight
          // pdf.addImage(pageData, 'JPEG', 左，上，宽度，高度)设置
          pdf.addImage(pageData, 'JPEG', 20, 20, imgWidth, imgHeight)
          pdf.addPage()
          return 1
        }).then(item => {
          flagArr[index] = item
          if (flagArr.every(f => f === 1)) {
            pdf.save('filename' + 'pdf')
            _this.loadingsisShow = false
          }
          if (index < els.length) {
            index++
            runself(index)
          }
        })
        // })
      }
    }
  }
  // install (Vue, options) {
  //   Vue.prototype.getPdf = function () {
  //     var title = this.htmlTitle
  //     html2Canvas(document.querySelector('#pdfDom'), {
  //       allowTaint: true
  //     }).then(function (canvas) {
  //       const contentWidth = canvas.width
  //       const contentHeight = canvas.height
  //       const pageHeight = contentWidth / 592.28 * 841.89
  //       let leftHeight = contentHeight
  //       let position = 0
  //       const imgWidth = 595.28
  //       const imgHeight = 592.28 / contentWidth * contentHeight
  //       const pageData = canvas.toDataURL('image/jpeg', 1.0)
  //       const PDF = new JsPDF('', 'pt', 'a4')
  //       if (leftHeight < pageHeight) {
  //         PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
  //       } else {
  //         while (leftHeight > 0) {
  //           PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
  //           leftHeight -= pageHeight
  //           position -= 841.89
  //           if (leftHeight > 0) {
  //             PDF.addPage()
  //           }
  //         }
  //       }
  //       PDF.save(title + '.pdf')
  //     }
  //     )
  //   }
  // }
}
