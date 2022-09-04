let listFigure = []
let listFrames = []

// função responsável pela separação dos produtos pelo type
function separaItens(list){

    for(let i = 0; i < list.length; i++){

        let listaDeProdutos = list[i];
        
        if(listaDeProdutos.type === 'frames'){
            
            listFrames.push(listaDeProdutos);

        }else{

            listFigure.push(listaDeProdutos);
        }

    }
}separaItens(itens)

// selecionando classe no html
const sectionFrames        = document.querySelector('.secao-painting')
const sectionActionFigures = document.querySelector('.secao-figures')

// função responsável por percorrer as listas e inserí-las no html
function listarItens(list, html){

    for(let i = 0; i < list.length; i++){

        let produtos = list[i];

        templatePronto = gerarTemplate(produtos);

        html.appendChild(templatePronto);
        
    }
    
}listarItens(listFrames, sectionFrames);
listarItens(listFigure, sectionActionFigures);

function gerarTemplate(produto){

    let imagem    = produto.image;
    let nome      = produto.name;
    let preco     = produto.price;
    let qualTipo  = produto.type;

    let tagLi     = document.createElement('li');
    let tagDiv    = document.createElement('div');
    let tagImg    = document.createElement('img');
    let tagH3     = document.createElement('h3');
    let tagP      = document.createElement('p');
    let tagButton = document.createElement('button');

    //criando classes
    tagLi.classList.add('cards-products');
    tagDiv.classList.add('image-product');
    tagButton.classList.add('buy');

    //inserindo informações nas tags e condicional para filtrar as imagens
    if(qualTipo === 'frames'){
        tagImg.src      = `./assets/img/painting/${imagem}`; 
    }
    else{
        tagImg.src      = `./assets/img/actions/${imagem}`; 
    }

    tagImg.alt          = nome;
    tagH3.innerText     = nome;
    tagP.innerText      = preco;
    tagButton.innerHTML = 'Description';

    //inserindo as tags no html
    tagLi.appendChild(tagDiv);
    tagDiv.appendChild(tagImg);
    tagLi.append(tagH3,tagP,tagButton);

    return tagLi;
}
