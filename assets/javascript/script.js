const posts = [];

function savePost(){
    const title = document.getElementById('title').value;
    const resume  = document.getElementById('resume').value;    
    const publisher = document.getElementById('publisher').value;
    const date = document.getElementById('date').value;

    console.log(title, resume , publisher, date);

    if(title && resume && publisher && date){
    storePost(title, resume, publisher, date)
    }

}
function storePost(title, resume, publisher, date){
    const post = {
        title,
        resume,
        publisher,
        date
};
posts.push(post);
showposts();

}
function showposts(){
    let showcontent = "";

    posts.forEach((post ,index) => {
        showcontent += `
        <div class = "post">
        <h2>${post.title}</h2> 
        <p><strong>Resumo:</strong><p>
        <p><strong>Autor:</strong><p>
        <p><strong>Data de Publicação:</strong><p>

        <button onclick="editpost(${index})">Editar</button>
        <button onclick="removepost(${index})">Remover</button>

        
        </div>
        `
    })
    document.getElementById("list").innerHTML = showcontent

}