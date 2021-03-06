class Post{
    id;

    constructor(title, body, idNumber) {
        this.title = title;
        this.body = body;
        this.id = idNumber;
    }
    getPreview(lenght){
        return this.body.slice(lenght);
    }
}

export {Post};