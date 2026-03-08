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

const navMenu = document.getElementById("navMenu");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

const hireBtn = document.getElementById("hire-btn");
const cvBtn = document.getElementById("cv-btn");
const contactSection = document.getElementById("contact");

hireBtn.addEventListener("click", () => {
  alert("Could you mail me? Let's keep in touch!");
  contactSection.scrollIntoView({
    behavior: "smooth",
  });
});
cvBtn.addEventListener("click", () => {
  alert("CV not added yet. It will be available soon. Stay tuned!");
});
