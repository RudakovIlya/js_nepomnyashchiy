const registeredUsers = [
  ['admin', 'KoI18'],
  ['manager', 'SuperMe108'],
  ['editor', '12345'],
];

const input = document.getElementsByTagName('input');
const form = document.getElementsByTagName('form')[0];

const validateInputValue = () => {
  const inputValueArray = Array.from(input);

  const inputValue = inputValueArray.every(item => item.value.trim());

  const validatePass = registeredUsers.some((item) => item.every((item, i) => item === inputValueArray[i].value));

  if (!inputValue) {
    return alert('All fields are required')
  }
  if (!validatePass) {
    return alert('Incorrect login or password');
  }
  return validatePass;
};



form.addEventListener('submit', e => {
  e.preventDefault();
   if(validateInputValue()){
    alert("Access granted");
    form.reset();
  }
})

