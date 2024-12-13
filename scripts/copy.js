function copyEmail() {
    const emailElement = document.getElementById('email');
    const textToCopy = emailElement.textContent;
  
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        emailElement.style.color = '#e0afff';
        setTimeout(() => {
          emailElement.style.color = '';
        }, 250);
      })
      .catch(err => {
        console.error('Chyba při kopírování: ', err);
      });
  }
  