function Drag(id) {
<<<<<<< HEAD
	box.addEventListener('mousedown',down);
    function down(ev){
        var disX = ev.clientX - this.offsetLeft;
        var disY = ev.clientY - this.offsetTop;
        function move(ev){
            box.style.left = ev.clientX - disX + 'px'; 
            box.style.top = ev.clientY - disY + 'px';
        }
        
        ev.preventDefault();
        
    }

	

}
