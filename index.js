window.onload = function () {
  let buttons = document.querySelectorAll('.option-button')
  let justify = document.querySelectorAll('.option-justify')
  let selects=document.querySelectorAll('.option-select')
  
  // 当点击按钮以后，会有背景色
  function changeBac(classname) {
    classname.forEach(val => {
      val.onclick = function () {
        if (this.style.backgroundColor !== 'rgb(238, 238, 238)') {
          this.style.backgroundColor='#eeeeee'
        } else {
          this.style.backgroundColor='#ffffff'
        }
        
      }
    });
  }
  changeBac(buttons)

  function taggleBac(classname) {
    classname.forEach(val => {
      val.onclick = function () {
        // 如果没有选上的话
        if (this.style.backgroundColor !== 'rgb(238, 238, 238)') {
          // 先将每个的样式给取消
          classname.forEach(val => {
            val.style.backgroundColor='#ffffff'
          })
          // 将自己的样式给显示出来
          this.style.backgroundColor='#eeeeee'
        } else {
          // 如果已经选上了的，需要取消自己
          this.style.backgroundColor='#ffffff'
        }
      }
    })
  }

  taggleBac(justify)

  // 对字体样式做操作
  let fontList = [
    'Arial',
    'Verdana',
    'Times New Roman',
    'Garamond'
  ]
  let fontstyle=document.querySelector('#fontname')
  fontList.map(val => {
    let option = document.createElement('option')
    option.value = val
    option.innerHTML = val
    fontstyle.appendChild(option)
  })

  let fontsize=document.querySelector('#fontsize')
  // 对字体字号
  for (let i = 1; i <= 7; i++){
    const option = document.createElement('option')
    option.value = i
    option.innerHTML = i
    fontsize.appendChild(option)
  }
  // 默认字体为3
  fontsize.value=3
   
  const modifyText = (commond, defaultUi, value) => {
    document.execCommand(commond,defaultUi,value)
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      modifyText(button.id,false,null)
    })
  })

  justify.forEach(justify => {
    justify.addEventListener('click', () => {
      modifyText(justify.id,false,null)
    })
  })
  selects.forEach(sel => {
    sel.addEventListener('change', () => {
      modifyText(sel.id,false,sel.value)
    })
  })
}