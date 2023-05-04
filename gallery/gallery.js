var mybutton = document.getElementById("backtotopbtn");
    window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        // selection bars
        function bgcolor2(value) {
            document.body.style.backgroundColor=value;
        }

        function txtcolor(value) {
            const para = document.getElementsByTagName("P");
            for (let i = 0; i < para.length; i++) {
                para[i].style.color = value;
            }
        }
        function txtsize(value){
            const font = document.getElementsByTagName("P");
            for (let i = 0; i < font.length; i++) {
                font[i].style.fontSize = value+"px";
            }
        }

        function imageclick(clickedId){
	        document.getElementById("imgscreen").innerHTML = document.getElementById(clickedId).innerHTML;
	        console.log("-------------------------")
            // var i;
	        // for(i = 0; i < document.getElementsByClassName("cardimage").length;i++){
		    //     document. document.getElementsByClassName("cardimage")[i].style.transform = null;
		    //     // document. document.getElementsByClassName("cardimage")[i].style.filter = null;
	        // }
            // document.getElementById(clickedId).style.transform = "scale(1.1)";
        }   

      