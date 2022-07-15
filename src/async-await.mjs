import fetch from "node-fetch";
const LoadData = async() => {
    try{
        const url = "https://jsonplaceholder.typicode.com/todos/1";
        const url2 = "https://jsonplaceholder.typicode.com/todos/2";
        const url3 = "https://jsonplaceholder.typicode.com/todos/3";
        const results = await Promise.all([
            fetch(url),
            fetch(url2),
            fetch(url3)
        ])
        const finalData = await Promise.all(results.map(result=>result.json()));
        return finalData;

    }
    catch(error){
        console.log(error);
    }
}

(async() => {
    const data = await LoadData();
    console.log(data);
})();

/*LoadData().then(data => {
    console.log(data);
})*/