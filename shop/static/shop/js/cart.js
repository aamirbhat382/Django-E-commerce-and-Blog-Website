LocalCart = JSON.parse(localStorage.getItem('Cart'));

if (LocalCart != null ) {
    let html = ''
    let sum = 0
    const entries =
        Object.entries(LocalCart)
    entries.forEach((element, index) => {

        priceOfProduct = element[1][2].slice(1,)
        Rate = Number(priceOfProduct)
        No_of_items = Number(element[1][0])
        let totelRate = Rate * No_of_items

        sum += totelRate
        // console.log(sum);
        html += ` <tr>
<td>${index + 1}</td>
     <td>${element[1][1]}</td>
     <td>${element[1][0]}</td>
     <td>${element[1][2]}</td>
     <td>₹ ${totelRate}</td>
    </tr>`

    });
    let ItemsTable = document.getElementById('tbodys').innerHTML = html
    document.getElementById('totelOfItems').innerHTML = `₹ ${sum}`
}

