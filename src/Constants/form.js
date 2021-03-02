export const email = {
  label: 'E-mail',
  name: 'email',
  placeholder: 'Masukkan e-mail',
  maxChar: 30
};

export const password = {
  label: 'Password',
  name: 'password',
  placeholder: 'Masukkan password',
  minChar: 8,
  maxChar: 12,
  matches: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*{()\\}[\]<>:;"',.?/|_+=-]{8,12}$/
};
