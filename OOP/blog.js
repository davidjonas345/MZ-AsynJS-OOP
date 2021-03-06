//import {Post} from "./post.js";
class Blog {
    #title;
    #author;
    #posts;
    constructor(title, author) {
        this.fetchPosts();
        this.#title = title;
        this.#author = author;
        this.#posts = [];
    }

    fetchPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                response.json().then(data => {
                    if (!response.ok) return this.#posts;
                    else data.forEach(posts => {
                        this.#posts.push(posts);
                    })
                })
            })
    }

    addPost(post) {
        this.#posts.push(post);
    }

    deletePost(postId) {
    for (let i = 0; i < this.#posts.length; i++){
        if (this.#posts[i].id === postId){
            this.#posts.splice(i,1);
            return true;
         }else  return false;
      }
    }
    getPostById(postId){
        for (let i = 0; i < this.#posts.length; i++){
            if (this.#posts[i].id === postId){
                return this.#posts[i];
            }return null;
        }
    }
}



export {Blog};