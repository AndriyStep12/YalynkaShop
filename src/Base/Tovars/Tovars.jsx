let tovars = [
    {
        name: 'Ялинка1',
        price: 200,
        locationTovar: 'Львів',
        box: 'box-price0',
        id: 0,
        inputNumb: 'input0',
        nameClass: 'name0',
        urlPhoto: 'https://files.ub.ua/goods/goods-photos/468/190242_Alpine-99103194.jpg',
        type: 'Tree'
    },
    {
        name: 'Ялинка2',
        price: 178,
        locationTovar: 'Київ',
        box: 'box-price1',
        id: 1,
        inputNumb: 'input1',
        nameClass: 'name1',
        urlPhoto: 'https://www.plastmax.ua/-/uploads/ru/00/00/13/35/h-2426400761.jpg',
        type: 'Tree'
    },
    {
        name: 'Ялинка3',
        price: 245,
        locationTovar: 'Херсон',
        box: 'box-price2',
        id: 2,
        inputNumb: 'input2',
        nameClass: 'name2',
        urlPhoto: 'https://cdn.27.ua/799/2a/74/535156_8.jpeg',
        type: 'Tree'
    },
    {
        name: 'Ялинка4',
        price: 300,
        locationTovar: 'Одеса',
        box: 'box-price3',
        id: 3,
        inputNumb: 'input3',
        nameClass: 'name3',
        urlPhoto: 'https://images.prom.ua/1401016814_yalinka-shtuchna-zhozefina.jpg',
        type: 'Tree'
    },
    {
        name: 'Ялинка5',
        price: 300,
        locationTovar: 'Одеса',
        box: 'box-price4',
        id: 4,
        inputNumb: 'input4',
        nameClass: 'name4',
        urlPhoto: 'https://cdn.27.ua/sc--media--prod/default/d0/dc/0e/d0dc0edf-91b9-4aae-82a0-21ba71b5268b.jpg',
        type: 'Tree'
    },
    {
        name: 'Ялинка Creator',
        price: 250,
        locationTovar: 'Новояворівськ',
        box: 'box-price5',
        id: 5,
        inputNumb: 'input5',
        nameClass: 'name5',
        urlPhoto: 'data:image/png;base64,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',
        type: 'Tree'
    }
];

export default tovars;