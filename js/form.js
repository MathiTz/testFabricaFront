let people = [];

const formEl = $("#formCreate"),
  inputName = $("#exampleInputName1"),
  inputEmail = $("#exampleInputEmail1"),
  inputTelephone = $("#exampleInputTelephone1"),
  inputCPF = $("#exampleInputCPF1"),
  btnSubmitForm = $("#btnSubmitForm");

formEl.submit(e => {
  e.preventDefault();

  btnSubmitForm.disable = true;

  // let people = [];

  let values = [
    inputName.val(),
    inputEmail.val(),
    inputTelephone.val(),
    inputCPF.val()
  ];

  this.addValues(values);
  this.resetForm();

  // people.push(values);

  // localStorage.setItem("people", JSON.stringify(people));
});

function addValues(data) {
  if(!data) {
    return;
  }

  people.unshift(data);

  localStorage.setItem("people", JSON.stringify(people));
}

function resetForm() {
  inputName.val() = "";
  inputEmail.val() = "";
  inputTelephone.val() = "";
  inputCPF.val() = "";
}

// function addLine(data) {

// }
