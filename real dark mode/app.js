const canva = document.querySelector('#canvas');

canva.height = window.innerHeight;
canva.width = window.innerWidth;

canva.style.background = "#000";

const ctx = canva.getContext('2d');



function colors(value){
  return 'rgba('+value+','+value+','+value+',1)';
}
// ctx.fillStyle = "rgba()";
// ctx.fillRect( x, y, 1, 1 );

const r = 50;

var px=0,py=0;

function pick(event) {
    // const bounding = canva.getBoundingClientRect();
    const x = event.clientX;// - bounding.left;
    const y = event.clientY ;//- bounding.top;

    for(let i=1; i<r; i++){
      let ni = r-i
      ctx.beginPath();
      ctx.arc(px,py,r,0,2*Math.PI);
      ctx.fillStyle = "#000";
      ctx.fill();
      ctx.closePath();
    }

    for(let i=1; i<r; i++){
      let ni = r-i
      let valuee = 100*200/(Math.sqrt(ni)*ni);
      ctx.beginPath();
      ctx.arc(x,y,ni,0,2*Math.PI);
      ctx.fillStyle = colors(valuee);
      ctx.fill();
      ctx.closePath();
    }
    px = x;
    py = y;
  
  }
  
document.addEventListener("mousemove", (event) => pick(event));