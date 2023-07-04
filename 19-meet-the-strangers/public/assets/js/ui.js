export const updatePersonalCode = (personalCode) => {
  const personalCodeParagraph = document.getElementById("personal_code_paragraph");
  personalCodeParagraph.innerText = personalCode;
}