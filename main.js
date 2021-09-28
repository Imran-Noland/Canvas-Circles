canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_x, last_position_y;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
mouseEvent="mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
current_position_x=e.clientX - canvas.offsetLeft;
current_position_y=e.clientY - canvas.offsetTop;
if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=1;
ctx.arc(current_position_x,current_position_y, 40, 0, 360);
ctx.stroke();
}
last_position_x=current_position_x;
last_position_y=current_position_y;
}