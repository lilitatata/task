import { marquee } from './marquee.js'
import { tab } from './tab.js'
tab()
marquee()

import './styles/index.css'
import './styles/index.less'

import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'

const gif = document.createElement('img')
const png = document.createElement('img')

gif.src = gifSrc
png.src = pngSrc

document.body.appendChild(gif)
document.body.appendChild(png)

import './assets/fonts/iconfont.css'

const fn= ()=>{
    console.log('你好');
}
console.log(fn);