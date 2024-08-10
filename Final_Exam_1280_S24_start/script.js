// get the date from the input field
function getDate() {
    const countDownDate = new Date("birthday").getTime();

}

// start the countdown
function start() {

    const dated = document.getElementById('birthday').value;

    // Set the date we're counting down to
    const countDownDate = new Date(dated).getTime();
    // Update the count down every 0.1 second
        const x = setInterval(start, 100)
        // Get today's date and time
        const now = new Date().getTime();
        // Find the distance between now and the count down date
        const distance = countDownDate - now
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var ds = Math.floor ((distance % (1000)) / 1);
        // Output the result in an element with id="demo"
        document.getElementById('demo').innerHTML = days + " days " + hours + " hrs " + minutes + " mins "
        + seconds + " secs " + ds + "  dicsecs";

        document.getElementById('demo').style.color = "red"




        // If the count down is over, write some text 
        if (distance<0){
            document.getElementById('demo').innerHTML = "expired :(";
        
        }
}

start();

