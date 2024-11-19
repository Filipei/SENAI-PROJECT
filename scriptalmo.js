document.getElementById('pesquisar').addEventListener('keyup', function() {
    var searchValue = this.value.toLowerCase();
    var produtos = document.querySelectorAll('.produto');

    produtos.forEach(function(produto) {
        var produtoNome = produto.querySelector('h2').textContent.toLowerCase();
        if (produtoNome.includes(searchValue)) {
            produto.style.display = '';
        } else {
            produto.style.display = 'none';
        }
    });
});
