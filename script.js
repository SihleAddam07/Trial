document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("age87tMWFLFMgADR1");

    document.getElementById("valentineForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (!selectedAnswer) {
            alert("Please select Yes or No.");
            return;
        }

        let response = selectedAnswer.value;
        let params = {
            to_email: "sihleaddam07@gmail.com",
            from_name: "Chloë",
            message: `Chloë's response: ${response}`
        };

        emailjs.send("service_h21k3pl", "template_29q8esn", params)
            .then(function(response) {
                document.getElementById("responseMessage").innerText = "Response sent! Thank you, Chloë!";
            }, function(error) {
                document.getElementById("responseMessage").innerText = "Oops! Something went wrong.";
            });
    });
});