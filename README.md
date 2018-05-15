# fyrlanan

Easy to use flippable blocks

[![fyrlanan.gif](https://preview.ibb.co/kbQPvd/May_15_2018_22_45_15.gif)](https://postimg.org/image/vkp7s2hpv/)

## Usage
```html
<div>
  <div class="fyrlananBlock">
    <div>
      front
    </div>
    <div>
      back
    </div>
  </div>
</div>
```

```javascript
// Initialization
var fyrlananBlock = new Fyrlanan({selector: '.fyrlananBlock'})

// Flip from the left side
fyrlananBlock.cevir('soldan')

// Flip from the right side
fyrlananBlock.cevir('sagdan')
```

## Settings
```javascript
// Advanced initialization
var fyrlananBlock = new Fyrlanan({
  selector: '.fyrlananBlock',
  perspective: 1000,
  duration: 2,
  scale: 1.4,
  z: -750,
  ease: Expo.easeInOut,
  shadows: ["0px 60px 80px 0px rgba(0,0,0,0.16)", "0px 80px 120px 0px rgba(0,0,0,0.04)"]
})
```

## Dependencies

* GSAP TweenLite
* GSAP EasePack
* GSAP CSSPlugin
