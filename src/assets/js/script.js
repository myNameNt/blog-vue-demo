export default {
  fullpage () {
    var scrollHeight = document.body.scrollHeight
    const fatherDom = document.querySelector('.scrollContainer')
    var nowState = 0
    const aSelect = fatherDom.querySelectorAll('section')
    let len = aSelect.length
    var isScrolling = false
    init()
    fatherDom.style.display = 'block'
    function init () {
      let scrollHeight = document.body.scrollHeight
      fatherDom.style.height = scrollHeight * len + 'px'
      for (let i = 0; i < aSelect.length; i++) {
        aSelect[i].style.height = `${scrollHeight}px`
      }
    }
    class MoveStyle {
      constructor () {
        this.startTime = 0
        this.endTime = 0
      }
      pre () {
        if (nowState >= 0) return
        nowState++
        this.move(nowState)
      }
      next (auto) {
        if (nowState <= -(len - 1)) return
        if (!auto) { nowState-- }// 判断是否为 autoMouseWheelHandle 方法调用
        this.move(nowState)
        console.log(nowState, 'state')
      }
      move () {
        MoveStyle.startTime = +new Date()
        isScrolling = true
        let nextIndex = nowState * scrollHeight + 'px'
        fatherDom.style.transform = `translateY(${nextIndex})`
      }
      moveEnd () {
        this.endTime = +new Date()
        let moveTime = this.endTime - MoveStyle.startTime
        console.log(moveTime)
        isScrolling = false
      }
    };

    function mouseWheelHandle (ev) {
      if (isScrolling) return
      var wheelDelta = ev.wheelDelta
      if (wheelDelta < 0) {
        page.next()
      } else if (wheelDelta > 0) {
        page.pre()
      }
    }
    function autoMouseWheelHandle () {
      let now = document.body.scrollHeight
      // 放大 缩小之后屏幕不适配问题！
      if (nowState <= -(len - 1)) {
        init()
        page.pre()
        page.next()
      } else if (now !== scrollHeight) {
        init()
        page.next('auto')
      }
    }
    var page = new MoveStyle()
    document.addEventListener('mousewheel', mouseWheelHandle)
    window.addEventListener('resize', setTimeout(() => {
      autoMouseWheelHandle()
    }, 300))
    fatherDom.addEventListener('webkitTransitionEnd', () => {
      page.moveEnd()
      // 这里需要注意this的指向 不使用箭头函数时 this指向 fatherDom
      // 这个事件是当css动画时间 transition 结束之后 自动调用该函数
    })
  }
}
