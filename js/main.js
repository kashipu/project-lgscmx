console.log('Hola mundo')

function toggleNav() {
    let navButton = document.querySelector('#navSide');
    let contentBox = document.querySelector('#content')
    let footerBox = document.querySelector('#footer')
    navButton.classList.toggle('show');
    contentBox.classList.toggle('show');
    footerBox.classList.toggle('show');
    console.log(navButton);
}

