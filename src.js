let items=[
    {title: 'P1', body:'Part one'},
    {title: 'P2', body:'Part two'},
]


function getitem(){
    setTimeout(() => {
        let output = '';
        items.forEach(item => {
            output+=`<li>${item.body}</li>`;
        });
        document.body.innerHTML= output;
    }, 1000);
}



function createitem(item,callback){
    setTimeout(() => {
        items.push(item);
        callback();
    }, 2000);
}

createitem({title:'P3', body:'Part three'},getitem);

