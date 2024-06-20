function sendMails() {
    var params = {
      emails: document.getElementById("emails").value,
    };
    const serviceID = "service_7rzbdyc";
    const templateID = "template_o1kvchv";
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("emails").value = "";
        console.log(res);
        alert("Your Message Send Successfull");
      })
      .catch((err) => console.log(err));
  }
  