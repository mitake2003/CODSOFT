function deleteBackward() {
    document.getElementById('display').value = document.getElementById('display').value.toString().slice(0,-1);
}

function equals() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    }catch (error) {
        document.getElementById('display').value = 'Error';
    }
}