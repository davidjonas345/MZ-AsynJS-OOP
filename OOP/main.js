import {Blog} from "./blog.js";
import {Users} from "./users.js";
import {Post} from "./post.js";

let newBlog = new Blog("My Blog", "Jonas")
console.log(newBlog);
let newUser = new Users("David", "Jonsa", "valami@gmail.com");
console.log(newUser);
console.log(newUser.getFullName, newUser.getEmail);
let newPost = new Post("Story of my life", "lorem ipsum", 1)
console.log(newPost);
let newPost2 = new Post("I don't understand OOP!", "lorem ipsum, lorem", 2)
console.log(newPost2);
newBlog.addPost(newPost );
newBlog.addPost(newPost2 );
console.log(newBlog);
newBlog.deletePost(1);
console.log(newBlog);
console.log(newBlog.getPostById(2));
console.log(newPost2.getPreview(10));





