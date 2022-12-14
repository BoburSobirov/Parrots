const template = document.querySelector('.template');

const renderParrot = function (parrot) {
    const {
        id,
        title,
        img,
        price,
        birthDate,
        sizes,
        isFavourite,
        features,
    } = parrot;
    
    const parrotRow = template.content.cloneNode(true);
    
    const parrotImg = parrotRow.querySelector(`.parrots__img`);
    parrotImg.src = img;
    parrotRow.querySelector('.parrots__title').textContent = title;
    parrotRow.querySelector('.parrots__mark').textContent = price;
    parrotRow.querySelector('.parrots__date').textContent = birthDate;
    parrotRow.querySelector('.parrots__subtitle').textContent = `${sizes.width}sm x ${sizes.height}sm`;
    parrotRow.querySelector('.list-unstyled').textContent = features
   

    const parrotsEditBtn = parrotRow.querySelector('.parrots__edit-btn')

    const parrotsDeleteBtn = parrotRow.querySelector('.parrots__edit-btn')

    return parrotRow
}

let showParrots = products.slice()

const parrotsTable = document.querySelector('.parrots')
const parrotsTableBody = parrotsTable.querySelector('.col-6');
const elCount = document.querySelector('.count');

const renderParrots = function () {

    parrotsTable.innerHTML = "";

    elCount.textContent = `Count: ${showParrots.length}`

    const parrotFragment = document.createDocumentFragment()
    showParrots.forEach((parrot)=>{
        const parrotRow = renderParrot(parrot);
        parrotFragment.append(parrotRow)
    })
    parrotsTable.append(parrotFragment)
}

renderParrots()


