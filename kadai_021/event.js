const button = document.getElementById('btn');

const textarea = document.getElementById('text')

button.addEventListener('click', () => {

    setTimeout(() => {
        textarea.textContent ='ボタンをクリックしました';
    },2000);

});