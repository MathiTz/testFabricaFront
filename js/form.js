const formEl = $("#formCreate"),
  inputName = $("#exampleInputName1"),
  inputEmail = $("#exampleInputEmail1"),
  inputTelephone = $("#exampleInputTelephone1"),
  inputCPF = $("#exampleInputCPF1"),
  btnSubmitForm = $("#btnSubmitForm");

formEl.submit(e => {
  e.preventDefault();

  btnSubmitForm.disable = true;

  let values = [
    inputName.val(),
    inputEmail.val(),
    inputTelephone.val(),
    inputCPF.val()
  ];

  console.log(values);
});
