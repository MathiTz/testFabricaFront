// let people = [];

const formEl = $("#formCreate"),
  inputName = $("#exampleInputName1"),
  inputEmail = $("#exampleInputEmail1"),
  inputTelephone = $("#exampleInputTelephone1"),
  inputCPF = $("#exampleInputCPF1"),
  btnSubmitForm = $("#btnSubmitForm");

$(document).ready(() => {
  this.validateForm();
  let users = this.getPeople();
  let table =
    "<thead><tr><td>Nome</td><td>CPF</td><td>Telefone</td><td>Email</td></tr></thead><tbody>";
  for (let key in users) {
    table +=
      "<tr><td>" +
      users[key].name +
      "</td><td>" +
      users[key].cpf +
      "</td><td>" +
      users[key].telefone +
      "</td><td>" +
      users[key].email;
  }
  table += "</tbody>";
  document.getElementById("tableForm").innerHTML = table;
});

formEl.submit(e => {
  e.preventDefault();

  btnSubmitForm.disable = true;
  btnSubmitForm.innerHTML = "Loading";

  let person = {
    name: inputName.val(),
    email: inputEmail.val(),
    telefone: inputTelephone.val(),
    cpf: inputCPF.val()
  };

  this.addValues(person);
  this.resetForm();
  if (confirm("Operação realizada com sucesso!")) {
    window.location.reload();
  }
});

function addValues(data) {
  if (!data) {
    return;
  }

  let people = this.getPeople();

  people.push(data);

  localStorage.setItem("people", JSON.stringify(people));
}

function resetForm() {
  document.getElementById("formCreate").reset();

  $("#exampleModal").modal("hide");
}

function validateForm() {
  if (
    inputName.val() === "" ||
    inputCPF.val() === "" ||
    inputTelephone.val() === "" ||
    inputEmail.val() === ""
  ) {
    $("#btnSubmitForm").attr("disabled", true);
  } else {
    $("#btnSubmitForm").attr("disabled", false);
  }
}

function getPeople() {
  let person = [];

  if (localStorage.getItem("people")) {
    person = JSON.parse(localStorage.getItem("people"));
  }

  return person;
}
