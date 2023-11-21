const form = document.getElementById("form");
const btn = document.getElementById("btn");
const input1 = document.getElementById("inp1");
const input2 = document.getElementById("inp2");
const input3 = document.getElementById("inp3");
const input4 = document.getElementById("inp4");



btn.addEventListener("click",function(event){
    event.preventDefault();

    axios.post("https://655c846525b76d9884fd70e4.mockapi.io/products", {
        name: input1.value,
        surname: input2.value,
        id: input4.value,
        age: input3.value,
        
    })
        .then(response => {
            console.log(response.data);
            form.reset();
        })
});









