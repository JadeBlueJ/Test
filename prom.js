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



function createitem(item){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            error=true;
            items.push(item);
            if(!error) {resolve();}
            else {reject('Error');}
        }, 2000);
    })
}



createitem({title: 'P3', body:'Part three'}).then(getitem).then(()=>console.log('No error')).catch(err=>console.log(err))
