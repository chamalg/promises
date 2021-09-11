//Callbacks

// const array = [
//     { title: "One", description: "Item one" },
//     { title: "Two", description: "Item Two" },
//     { title: "Three", description: "Item Three" },
// ]

// const getItems = () => {
//     setTimeout(() => {
//         let output = '';
//         array.forEach((item, i) => {
//             output += `<li>${item.title} ${item.description}</li>`
//         });
//         document.getElementById('container').innerHTML = output;
//     }, 1000)
// }


// const createNewItem = (item, callback) => {
//     setTimeout(() => {
//         array.push(item);
//         callback();
//     }, 2000)
// }

// createNewItem({ title: "Four", description: "Item Four" }, getItems);


//Promises

const array = [
    { title: "One", description: "Item one" },
    { title: "Two", description: "Item Two" },
    { title: "Three", description: "Item Three" },
]

const getItems = () => {
    setTimeout(() => {
        let output = '';
        array.forEach((item, i) => {
            output += `<li>${item.title} ${item.description}</li>`
        });
        document.getElementById('container').innerHTML = output;
    }, 1000)
}


const createNewItem = (item, callback) => {
    setTimeout(() => {
        array.push(item);
        callback();
    }, 2000)
}

createNewItem({ title: "Four", description: "Item Four" }, getItems);