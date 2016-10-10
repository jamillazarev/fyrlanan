var fyrlananBlock = new Fyrlanan({
  selector: '.fyrlananBlock',
  perspective: 1000,
  duration: 2,
  scale: 1.4,
  z: -750,
  ease: Expo.easeInOut,
  shadows: ["0px 60px 80px 0px rgba(0,0,0,0.16)", "0px 80px 120px 0px rgba(0,0,0,0.04)"]
});

function toggleCevir(){
  var el = this;
  return [
    function() { fyrlananBlock.cevir('soldan')},
    function() { fyrlananBlock.cevir('sagdan')}
  ][el.tog^=1]();
};

document.querySelector(".fyrlananBlock").addEventListener('click', toggleCevir);
