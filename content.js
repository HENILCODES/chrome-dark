const style = document.createElement('style');
style.textContent = `
/* Your custom CSS code here */
body , *{
  background-color: #0a0d10 !important;
  color:white !important;
}
input, textarea{
    color:dark !important;
}
`;

document.head.appendChild(style);
