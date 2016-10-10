<h1>fyrlanan</h1>

<p>JS module for easy to use flippable blocks</p>

[![fyrlanan.gif](https://s21.postimg.org/yesd5ijw7/fyrlanan.gif)](https://postimg.org/image/vkp7s2hpv/)

<h2>Usage</h2>
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

<h2>Settings</h2>
```javascript
// Advanced initialization
var fyrlananBlock = new Fyrlanan({
  selector: '.fyrlananBlock',
  perspective: 1000,
  duration: .8,
  scale: 1.4,
  z: -500,
  ease: "Power3.easeInOut",
  shadows: ["0px 60px 80px 0px rgba(0,0,0,0.16)", "0px 80px 120px 0px rgba(0,0,0,0.04)"]
})
```

<h2>Dependencies</h2>

* GSAP TweenLite
* GSAP EasePack
