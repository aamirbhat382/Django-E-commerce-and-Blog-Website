// console.log('Log Message');

if (localStorage.getItem('Cart') == null) {
    var Cart = {}
    // updateCart(Cart)
} else {

    Cart = JSON.parse(localStorage.getItem('Cart'));
    document.getElementById('cart').innerHTML = Object.keys(Cart).length;
    updateCart(Cart)

}

let addToCart = document.querySelectorAll(".add-to-cart")
addToCart.forEach((btn) => {
    btn.addEventListener("click", () => {
        let Idstring = btn.id.toString()
        if (Cart[Idstring] != undefined) {
            // console.log(Cart[Idstring])
            qty = Cart[Idstring][0] + 1
            // console.log(Cart[Idstring])
        } else {
            ID = Idstring.slice(7,)
            Name = document.getElementById(`name${ID}`).innerText
            Price = document.getElementById(`price${ID}`).innerText
            qty = 1;

            Cart[Idstring] = [qty, Name, Price]

        }
        updateCart(Cart)
        location.reload()
    })


})

function updateCart(Cart) {
    for (var item in Cart) {
        // console.log(`div${item}`)
        let d = document.getElementById(`div${item}`)
        if (d) {
            d.innerHTML = `
            <button type="btn"  id='minus${item}' class="btn btn-sm bg-secondary mx-1 minus"> - </button>
            <button type="btn"  id='val${item}' class="btn btn-sm btn-outline-secondary disabled mx-1"> ${Cart[item][0]} </button>
            <button type="btn" id='plus${item}' class="btn btn-sm bg-secondary mx-1 plus"> + </button>  
        `}
    }
    localStorage.setItem('Cart', JSON.stringify(Cart));
    document.getElementById('cart').innerHTML = Object.keys(Cart).length;

}

let plusButton = document.querySelectorAll('.plus')
if (plusButton) {
    plusButton.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            // console.log(btn)
            //     // e.preventDefault
            PIdstr = btn.id.slice(4,)
            // console.log('working ', PIdstr)
            Cart[PIdstr][0] = Cart[PIdstr][0] + 1
            // console.log(Cart[PIdstr])
            c = document.getElementById(`val${PIdstr}`).innerText = Cart[PIdstr][0]
            // console.log(c);
            localStorage.setItem('Cart', JSON.stringify(Cart));
            document.getElementById('cart').innerHTML = Object.keys(Cart).length;
            // updateCart(Cart)
        })
    })
} else {
    console.log("Not");
}

let minusButton = document.querySelectorAll('.minus')
if (minusButton) {
    minusButton.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            MIdstr = btn.id.slice(5,)
            // console.log(Cart[MIdstr]);
            Cart[MIdstr][0] = Cart[MIdstr][0] - 1
            // console.log(Cart[MIdstr]);
            Cart[MIdstr][0] = Math.max(0, Cart[MIdstr][0])
            document.getElementById(`val${MIdstr}`).innerHTML = Cart[MIdstr][0]
            localStorage.setItem('Cart', JSON.stringify(Cart));
            document.getElementById('cart').innerHTML = Object.keys(Cart).length;
        })
    })
} else {
    console.log("Not");
}

