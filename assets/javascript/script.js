const posts = [];

function savePost(){
    const title = document.getElementById('title').value;
    const resume  = document.getElementById('resume').value;    
    const publisher = document.getElementById('publisher').value;
    const date = document.getElementById('date').value;
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
}