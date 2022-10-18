
const handleSubmit = (event) => {
    event.preventDefault(event);

    const name = document.querySelector('input[name=nome').value;
    const email = document.querySelector('input[name=email').value;
    const telefone = document.querySelector('input[name=telefone').value;
    const empresa = document.querySelector('input[name=empresa').value;
    const contato = document.querySelector('input[name=contato').value;

    fetch('https://api.sheetmonkey.io/form/wxVzRHndWQzD9BkbXfd84J', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, telefone, empresa, contato})
    }).then((result) => alert('Dados salvos'))
}
document.querySelector('form').addEventListener('submit', handleSubmit)