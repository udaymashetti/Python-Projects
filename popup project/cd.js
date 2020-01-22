var idleTime = 0;
            console.log("jjjjjjjjjjjjjj");
            $(document).ready(function () {


                
$("#myBtn").click(function(){
    
    $("#myModal").css("display", "block");
  });


  // When the user clicks on <span> (x), close the modal

  $("#sp").click(function(){
    $("#myModal").css("display", "none");
  });


                //Increment the idle time counter every minute.
                // alert("document readycalled");
                var idleInterval = setInterval(timerIncrement, 60000); // 1 minute
            
                //Zero the idle timer on mouse movement.
                $(this).mousemove(function (e) {
                    idleTime = 0;
                });
                $(this).keypress(function (e) {
                    idleTime = 0;
                });
            });
            
            function timerIncrement() {
                idleTime = idleTime + 1;
                if (idleTime > 1) { // 20 minutes
                    alert('Hihi session timeout');
                }
            }



            // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");








// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}