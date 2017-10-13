function Drag(id) {
	box.addEventListener('mousedown',down);
    function down(ev){
        var disX = ev.clientX - this.offsetLeft;
        var disY = ev.clientY - this.offsetTop;
        function move(ev){
            box.style.left = ev.clientX - disX + 'px'; 
            box.style.top = ev.clientY - disY + 'px';
        }
        
		function up(ev){
	            document.removeEventListener('mouseup',up);
	            document.removeEventListener('mousemove',move);
	       }
        ev.preventDefault();
        
    }
}
