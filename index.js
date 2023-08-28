/*
 * @Descripttion: 
 * @version: 
 * @Author: WangPeng
 * @Date: 2023-08-28 11:35:49
 * @LastEditors: WangPeng
 * @LastEditTime: 2023-08-28 11:35:50
 */
function hexToRGB(hex) {
  var r = parseInt(hex.substring(1, 3), 16);
  var g = parseInt(hex.substring(3, 5), 16);
  var b = parseInt(hex.substring(5, 7), 16);
  return [r, g, b];
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function createPaletteItem(item,dom,clickFunc) {
    var colorBox = document.createElement('div');
    colorBox.style.backgroundColor = item.rgb;
    colorBox.className = 'palette-item';
    if(clickFunc){
        colorBox.onclick = () => clickFunc(item)
    }
    dom.appendChild(colorBox);
}
