canvas=document.getElementById("MC");
ctx=canvas.getContext("2d");
rw=100;
rh=90;
rx=10;
ry=10;
rn=Math.floor(Math.random()*6);
bia=["ns1.jfif","ns2.jfif","ns3.jfif","ns4.jfif","ns5.jpg","ns6.jpg"];
bi=bia[rn];
ri="rover-right.png";
function add() {
    bit=new Image();
    bit.onload=uploadBg;
    bit.src=bi;
    rit=new Image();
    rit.onload=uploadRbg;
    rit.src=ri;  
}
function uploadBg() {
    ctx.drawImage(bit,0,0,canvas.width,canvas.height);
}
function uploadRbg() {
    ctx.drawImage(rit,rx,ry,rw,rh);
}
window.addEventListener("keydown",mkp);
function mkp(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed===87) {
        up();
        console.log("up pressed");
    }
    else if (keypressed===83) {
        down();
        console.log("down pressed");
    }
    else if (keypressed===65) {
        left();
        console.log("left pressed");
    }
    else if (keypressed===68) {
        right();
        console.log("right pressed");
    }
}
function up() {
    if (ry>0) {
        ry=ry-10;
        console.log(ry);
        ri="rover-up.png";
        add();
    }
}
function down() {
    if (ry<=400) {
        ry=ry+10;
        console.log(ry);
        ri="rover-down.png";
        add();
    }
}
function left() {
    if (rx>0) {
        rx=rx-10;
        console.log(rx);
       ri="rover-left.png";
       add();
    }
}
function right() {
    if (rx<=700) {
        rx=rx+10;
        console.log(rx);
        ri="rover-right.png";
        add();
    }
}

