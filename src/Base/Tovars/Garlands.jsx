let tovars = [
    {
        name: 'Garlands1',
        price: 30,
        locationTovar: 'Lviv',
        box: 'box-price0',
        id: 0,
        inputNumb: 'input0',
        nameClass: 'name0',
        urlPhoto: 'https://www.textures4photoshop.com/tex/thumbs/christmas-lights-png-thumb20.png',
        type: 'Garlands'
    },
    {
        name: 'Garlands2',
        price: 50,
        locationTovar: 'Lviv',
        box: 'box-price1',
        id: 1,
        inputNumb: 'input1',
        nameClass: 'name1',
        urlPhoto: 'https://png.pngtree.com/png-clipart/20211202/ourmid/pngtree-christmas-luminous-effect-lamp-string-png-image_4048227.png',
        type: 'Garlands'
    },
    {
        name: 'Garlands3',
        price: 28,
        locationTovar: 'Lviv',
        box: 'box-price2',
        id: 2,
        inputNumb: 'input2',
        nameClass: 'name2',
        urlPhoto: 'data:image/png;base64,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',
        type: 'Garlands'
    },
    {
        name: 'Garlands4',
        price: 100,
        locationTovar: 'Lviv',
        box: 'box-price3',
        id: 3,
        inputNumb: 'input3',
        nameClass: 'name3',
        urlPhoto: 'https://static.vecteezy.com/system/resources/previews/013/219/941/original/cute-christmas-lights-png.png',
        type: 'Garlands'
    }
];

export default tovars;