

// callback! (callback)=>{callback()}

export default handler => {
    const $textBox = document.getElementById('search-text');
    const $button = document.getElementById('search-button');


$button.addEventListener('click', () => {
    if($textBox.value){
        return handler($textBox.value);
    }else{
        return;
    }
});

$textBox.addEventListener('keydown', (e) => {
    if (e.keyCode === 13 && $textBox.value){
        return handler($textBox.value);
    }
})

}