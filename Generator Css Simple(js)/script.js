// CLASS
// let btn1 = document.getElementById('btn1');
// let carsList = document.getElementById('carsList');
// let color1 = document.getElementById('color1');
// let btn2 = document.getElementById('btn2');


// // btn1.onclick = function () {
// //     alert(carsList.value)
// //     console.log(carsList.selectedIndex)
// //     alert(carsList.options[carsList.selectedIndex].text)
// // }

// // carsList.onchange = function () {
// //     console.log(carsList.value)
// // }

// // btn2.onclick = function () {
// //     console.log(color1.value)
// //     document.body.style.backgroundColor = color1.value
// // }


// color1.oninput = function () {
//     // console.log(color1.value)
//     document.body.style.backgroundColor = color1.value
// }



// Home
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});


let copyText = document.getElementById("myInput");
let showResult = document.getElementById('showResult')
let rangeColor1 = document.getElementById('rangeColor1');
let rangeColor2 = document.getElementById('rangeColor2');
let rangeColor3 = document.getElementById('rangeColor3');

let rangeBorderTopLeft = document.getElementById('rangeBorderTopLeft')
let rangeBorderTopRight = document.getElementById('rangeBorderTopRight')
let rangeBorderBottomLeft = document.getElementById('rangeBorderBottomLeft')
let rangeBorderBottomRight = document.getElementById('rangeBorderBottomRight')

let rangeWidth = document.getElementById('rangeWidth')
let rangeHeight = document.getElementById('rangeHeight')

let rangeScale = document.getElementById('rangeScale')
let rangeRotate = document.getElementById('rangeRotate')
let rangeTranslateX = document.getElementById('rangeTranslateX')
let rangeTranslateY = document.getElementById('rangeTranslateY')

let offX = document.getElementById('offX')
let offY = document.getElementById('offY')
let blurRadius = document.getElementById('blurRadius')
let spreadRadius = document.getElementById('spreadRadius')
let colorShadow = document.getElementById('colorShadow')
// --------------------RGB
rangeColor1.oninput = function () {
    showResult.style.backgroundColor = `rgb(${rangeColor1.value},${rangeColor2.value},${rangeColor3.value})`
    copyText.value = `Background-color: rgb(${rangeColor1.value},${rangeColor2.value},${rangeColor3.value})`
}
rangeColor2.oninput = function () {
    showResult.style.backgroundColor = `rgb(${rangeColor1.value},${rangeColor2.value},${rangeColor3.value})`
    copyText.value = `Background-color: rgb(${rangeColor1.value},${rangeColor2.value},${rangeColor3.value})`

}
rangeColor3.oninput = function () {
    showResult.style.backgroundColor = `rgb(${rangeColor1.value},${rangeColor2.value},${rangeColor3.value})`
    copyText.value = `Background-color: rgb(${rangeColor1.value},${rangeColor2.value},${rangeColor3.value})`

}
// --------------------BORDER-RADIUS
rangeBorderTopLeft.oninput = function () {
    showResult.style.borderTopLeftRadius = `${rangeBorderTopLeft.value}px`
    copyText.value = `Border-radius:${rangeBorderTopLeft.value}px,${rangeBorderTopRight.value}px,${rangeBorderBottomLeft.value}px,${rangeBorderBottomRight.value}px`
}
rangeBorderTopRight.oninput = function () {
    showResult.style.borderTopRightRadius = `${rangeBorderTopRight.value}px`
    copyText.value = `Border-radius:${rangeBorderTopLeft.value}px,${rangeBorderTopRight.value}px,${rangeBorderBottomLeft.value}px,${rangeBorderBottomRight.value}px`
}
rangeBorderBottomLeft.oninput = function () {
    showResult.style.borderBottomLeftRadius = `${rangeBorderBottomLeft.value}px`
    copyText.value = `Border-radius:${rangeBorderTopLeft.value}px,${rangeBorderTopRight.value}px,${rangeBorderBottomLeft.value}px,${rangeBorderBottomRight.value}px`
}
rangeBorderBottomRight.oninput = function () {
    showResult.style.borderBottomRightRadius = `${rangeBorderBottomRight.value}px`
    copyText.value = `Border-radius:${rangeBorderTopLeft.value}px,${rangeBorderTopRight.value}px,${rangeBorderBottomLeft.value}px,${rangeBorderBottomRight.value}px`
}
// --------------------WIDTH AND HEIGHT
rangeWidth.oninput = function () {
    showResult.style.width = `${rangeWidth.value}px`
    copyText.value = `Width:${rangeWidth.value}px,Height:${rangeHeight.value}px`
}
rangeHeight.oninput = function () {
    showResult.style.height = `${rangeHeight.value}px`
    copyText.value = `Width:${rangeWidth.value}px,Height:${rangeHeight.value}px`
}
// --------------------SCALE-RORATE-TRANSLATE(X)-TRANSLATE(Y)
rangeScale.oninput = function () {
    showResult.style.width = '200px'
    showResult.style.height = '200px'
    showResult.style.transform = `scale(${rangeScale.value})`
    copyText.value = `Scale:(${rangeScale.value}),Rotate:(${rangeRotate.value}deg),TranslateX:(${rangeTranslateX.value}px),TranslateY:(${rangeTranslateY.value}px)`
}
rangeRotate.oninput = function () {
    showResult.style.transform = `rotate(${rangeRotate.value}deg)`
    copyText.value = `Scale:(${rangeScale.value}),Rotate:(${rangeRotate.value}deg),TranslateX:(${rangeTranslateX.value}px),TranslateY:(${rangeTranslateY.value}px)`
}
rangeTranslateX.oninput = function () {
    showResult.style.transform = `translateX(${rangeTranslateX.value}px)`
    copyText.value = `Scale:(${rangeScale.value}),Rotate:(${rangeRotate.value}deg),TranslateX:(${rangeTranslateX.value}px),TranslateY:(${rangeTranslateY.value}px)`
}
rangeTranslateY.oninput = function () {
    showResult.style.transform = `translateY(${rangeTranslateY.value}px)`
    copyText.value = `Scale:(${rangeScale.value}),Rotate:(${rangeRotate.value}deg),TranslateX:(${rangeTranslateX.value}px),TranslateY:(${rangeTranslateY.value}px)`
}
// --------------------
offX.oninput = function () {
    showResult.style.boxShadow = `${offX.value}px ${offY.value}px ${blurRadius.value}px ${spreadRadius.value}px ${colorShadow.value}`
    copyText.value = `Box-shadow:${offX.value}px ${offY.value}px ${blurRadius.value}px ${spreadRadius.value}px ${colorShadow.value}`
}
offY.oninput = function () {
    showResult.style.boxShadow = `${offX.value}px ${offY.value}px ${blurRadius.value}px ${spreadRadius.value}px ${colorShadow.value}`
    copyText.value = `Box-shadow:${offX.value}px ${offY.value}px ${blurRadius.value}px ${spreadRadius.value}px ${colorShadow.value}`
}
blurRadius.oninput = function () {
    showResult.style.boxShadow = `${offX.value}px ${offY.value}px ${blurRadius.value}px ${spreadRadius.value}px ${colorShadow.value}`
    copyText.value = `Box-shadow:${offX.value}px ${offY.value}px ${blurRadius.value}px ${spreadRadius.value}px ${colorShadow.value}`
}
spreadRadius.oninput = function () {
    showResult.style.boxShadow = `${offX.value}px ${offY.value}px ${blurRadius.value}px ${spreadRadius.value}px ${colorShadow.value}`
    copyText.value = `Box-shadow:${offX.value}px ${offY.value}px ${blurRadius.value}px ${spreadRadius.value}px ${colorShadow.value}`
}
colorShadow.oninput = function () {
    showResult.style.boxShadow = `${offX.value}px ${offY.value}px ${blurRadius.value}px ${spreadRadius.value}px ${colorShadow.value}`
    copyText.value = `Box-shadow:${offX.value}px ${offY.value}px ${blurRadius.value}px ${spreadRadius.value}px ${colorShadow.value}`
}


// ------Функція копіювання значень
function myFunction() {
    copyText.select()
    navigator.clipboard.writeText(copyText.value)
}
copyBtn.onclick = myFunction;
// --------------------------------