"user strict";

const ajaxSend = async (formData) => {
  const fetchResp = await fetch("telegram.php", {
    method: "POST", 
    body: formData,
  });
  if (!fetchResp.ok) {
    throw new Error(`Ошебка по адресу ${url}, статус ошибки ${fetchResp.status}`);
  }
  return await fetchResp.text();
};

const forms = document.querySelectorAll("form");
forms.forEach((form) => {
  form.addEventListener("submit", function (e){
    e.preventDefault();
    const formData = new FormData(this);

    ajaxSend(formData)
    .then((response) => {
      modalTitle.innerHTML = "Спасибо,<br> заявку получили";
      form.reset();
    })
    .catch((err) => console.error(err));
    });
  });