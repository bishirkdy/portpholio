emailjs.init("sJIt45JfJnGVA_e4-");

const form = document.getElementById("contact-input");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_wbh20rj", "template_126vnxt", data)
    .then((res) => {
      console.log("Email sent successfully", res);

      form.reset();
    })
    .catch((err) => {
      console.log("Error sending email", err);
    });
});