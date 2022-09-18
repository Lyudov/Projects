let data = [
    {
        name: 'Leon',
        age: '30'
    },
    {
        name: 'Rob',
        age: '30'
    },
    {
        name: 'Mathew',
        age: '30'
    },
    {
        name: 'David',
        age: '30'
    },
    {
        name: 'Shon',
        age: '30'
    },
    {
        name: 'Bob',
        age: '30'
    },
];

const info = document.querySelector('#info')

let details = data.map(function (item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');
