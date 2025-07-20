function sendMail(){
    var params = {
        name:document.getElemmentById("name").value,
        email:document.getElemmentById("email").value,
        message:document.getElemmentById("message").value,
    };


    const serviceID="service_8ggrmxn";
const templateID="template_dr9chjn";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message send successfully");
    })
    .catch((err)=>console.log(err));
}

