const button = document.getElementById("refreshButton");
const result = document.getElementById("content");
function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp =>{
        if (resp.status !== 200){
            throw new Error("Ошибка получения данных")
        }
        return resp.json();
    })
    .then(json =>{
        const userList = document.createElement("ul");

        json.forEach(user =>{
            const listItem = document.createElement("li")
            listItem.textContent = user.name;
            userList.appendChild(listItem); 
        });
        while (result.firstChild){
            result.removeChild(result.firstChild);
        }
        result.appendChild(userList);
    })
    .catch(error =>{
        console.error(error);
    });
}
button.addEventListener("click", fetchData)


// const links = [
//     {
//       url: "https://wttr.in/svo",
//       params: {
//         n: "",
//         m: "",
//         MTqu: "",
//         lang: "ru",
//       },
//     },
//     {
//       url: "https://wttr.in/London",
//       params: {
//         n: "",
//         m: "",
//         MTqu: "",
//         lang: "ru",
//       },
//     },
//     {
//       url: "https://wttr.in/Череповец",
//       params: {
//         n: "",
//         m: "",
//         MTqu: "",
//         lang: "ru",
//       },
//     },
//   ];
  
//   function fetchData() {
//     const container = document.getElementById("container");
//     for (const link of links) {
//       const { url, params } = link;
//       const queryString = new URLSearchParams(params).toString();
//       fetch(`${url}?${queryString}`)
//         .then((response) => response.text())
//         .then((pageText) => {
//           const result = document.createElement("div");
//           result.innerHTML = pageText;
//           container.appendChild(result);
//         });
//     }
//   }
  
//   fetchData();