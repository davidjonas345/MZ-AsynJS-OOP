 fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        response.json().then(data => {
            console.log(data);
            if (!response.ok) throw Error(response.statusText);
            else return data
        })
    .catch(error => console.log("Could not fetch data!", error));
 });

