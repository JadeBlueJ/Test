const posts = [{title: 'POST1'}];
let date;
function updateTime()
{
  return new Promise((res)=>{
    setTimeout(()=>{
      date = new Date();
      res(date);
  },1000)
})
}
function createPost() {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      posts.push({title: 'POST2'});
      resolve(posts)
    }, 1000)
  }) 
}

function deletePost(){
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      if(posts.length > 0){
        posts.pop()
        resolve(posts);
      } else {
        reject("ERROR: ARRAY IS EMPTY")
      }
    }, 1000)
  })
}

Promise.all([createPost(),updateTime()]).then((val)=>{
  console.log(val)
}).then(Promise.all([deletePost(),updateTime()]).then((val)=>{console.log(val)}))