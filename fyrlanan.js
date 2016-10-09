var Fyrlanan = Fyrlanan = (function() {
  function Fyrlanan(arg) {
    var ref, ref1, ref2, ref3, ref4, ref5;
    this.selector = arg.selector, this.perspective = (ref = arg.perspective) != null ? ref : 1000, this.duration = (ref1 = arg.duration) != null ? ref1 : 1.2, this.scale = (ref2 = arg.scale) != null ? ref2 : 1.4, this.z = (ref3 = arg.z) != null ? ref3 : -500, this.ease = (ref4 = arg.ease) != null ? ref4 : Power3.easeInOut, this.shadows = (ref5 = arg.shadows) != null ? ref5 : ["0px 60px 80px 0px rgba(0,0,0,0.16)", "0px 80px 120px 0px rgba(0,0,0,0.04)"];
    CSSPlugin.defaultTransformPerspective = this.perspective;
    TweenLite.defaultEase = this.ease;
    this.canimate = true;
    this.directions = {
      "soldan": "+=180",
      "sagdan": "-=180"
    };
    this.obj = document.querySelector(this.selector);
    this.currentSide = this.obj.firstElementChild;
    this.nextSide = this.obj.lastElementChild;
    this.sides = [this.currentSide, this.nextSide];
    TweenLite.set(this.obj, {
      "transform-style": "preserve-3d",
      "backface-visibility": "hidden"
    });
    TweenLite.set(this.sides, {
      boxShadow: this.shadows[0],
      position: "absolute"
    });
    TweenLite.set(this.nextSide, {
      rotationY: this.directions["soldan"],
      z: this.z
    });
  }

  Fyrlanan.prototype.cevirmek = function(direction) {
    var current, next;
    if (this.canimate) {
      this.canimate = false;
      TweenLite.to(this.sides, this.duration * .5, {
        scale: this.scale,
        boxShadow: this.shadows[1]
      });
      TweenLite.to(this.sides, this.duration * .5, {
        scale: 1,
        boxShadow: this.shadows[0],
        delay: this.duration * .5
      });
      TweenLite.to(this.currentSide, this.duration, {
        z: this.z
      });
      TweenLite.to(this.nextSide, this.duration, {
        z: 0
      });
      TweenLite.to(this.sides, this.duration, {
        rotationY: this.directions[direction],
        onComplete: (function(_this) {
          return function() {
            _this.canimate = true;
          };
        })(this)
      });
      current = this.currentSide;
      next = this.nextSide;
      this.currentSide = next;
      this.nextSide = current;
    }
  };

  return Fyrlanan;

})();
