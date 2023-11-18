function sendMail(){
  (function(){
    emailjs.init("nXgrkaG8ocv4TYduj"); //Account public key
    })();

    var params = {
    senderName: document.querySelector("#senderName").value,
    message: document.querySelector("#message").value,
    senderMail: document.querySelector("#senderMail").value
  };

    var serviceID = "service_cgoz16w"; //EmailJs serive ID
    var templateID = "template_jof50d8"; // EmailJs template ID

    emailjs.send(serviceID, templateID, params)
    .then(res => {
    alert("Email sent successfully");
  })
    .catch();
}