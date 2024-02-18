const allSeats = document.getElementsByClassName('seat-name');

// const a1 = document.getElementById('a1');
// const a2 = document.getElementById('a2');
// const b1 = document.getElementById('b1');
// const b2 = document.getElementById('b2');
// const a3 = document.getElementById('a3');
// const a4 = document.getElementById('a4');
// const b3 = document.getElementById('b3');
// const b4 = document.getElementById('b4');


const perTicketPrice = 550;

for (let seat of allSeats) {
    seat.addEventListener('click', function () {
        //Button color change
        seat.style.backgroundColor = '#1DD100';
        seat.style.color = 'white';

        //Decrement seat
        const availableSeat = document.getElementById('available-seat');
        let availableSeatText = availableSeat.innerText;
        let availableSeatValue = parseInt(availableSeatText);
        availableSeat.innerText = availableSeatValue - 1;
        console.log(availableSeat.innerText);

        //Purchase seat count
        const purchaseTicketCount = document.getElementById('purchaseTicketCount');
        let purchaseTicketCountText = purchaseTicketCount.innerText;
        let purchaseTicketCountValue = parseInt(purchaseTicketCountText);
        purchaseTicketCount.innerText = purchaseTicketCountValue + 1;

        //Purchase history add
        const purchaseHistory = document.getElementById('purchaseHistory');
        const economoy = document.getElementById('economoy');

        //Create p tags and append
        const p = document.createElement('p');
        p.innerText = seat.innerText;
        p.setAttribute('class', 'new-class')
        purchaseHistory.childNodes[1].appendChild(p, economoy)

        const p2 = document.createElement('p');
        p2.innerText = 'Economoy';
        p2.setAttribute('class', 'p2')
        purchaseHistory.childNodes[1].appendChild(p2, economoy)

        const p3 = document.createElement('p');
        p3.innerText = '550';
        p3.setAttribute('class', 'p3')
        purchaseHistory.childNodes[1].appendChild(p3, economoy)


        //Show purchase history
        purchaseHistory.classList.remove('hidden');

        //Total price add
        let totalPrice = document.getElementById('totalPrice');
        let totalPriceText = totalPrice.innerText;
        let totalPriceValue = parseInt(totalPriceText);
        console.log(totalPriceValue);
        totalPrice.innerText = perTicketPrice + totalPriceValue;


        ///////////////////////////////


        //Grand total price add
        let grandTotalPrice = document.getElementById('grandTotal');
        let grandTotalPriceText = grandTotalPrice.innerText;
        let grandTotalPriceValue = parseInt(grandTotalPriceText);
        grandTotalPrice.innerText = totalPrice.innerText





        seat.disabled = true;
    })




}


// a1.addEventListener('click', function () {
//     //Button color change
//     a1.style.backgroundColor = '#1DD100';
//     a1.style.color = 'white';

//     //Decrement seat
//     const availableSeat = document.getElementById('available-seat');
//     let availableSeatText = availableSeat.innerText;
//     let availableSeatValue = parseInt(availableSeatText);
//     availableSeat.innerText = availableSeatValue - 1;
//     console.log(availableSeat.innerText);

//     //Purchase seat count
//     const purchaseTicketCount = document.getElementById('purchaseTicketCount');
//     let purchaseTicketCountText = purchaseTicketCount.innerText;
//     let purchaseTicketCountValue = parseInt(purchaseTicketCountText);
//     purchaseTicketCount.innerText = purchaseTicketCountValue + 1;

//     //Purchase history add
//     const purchaseHistory = document.getElementById('purchaseHistory');
//     const economoy = document.getElementById('economoy');

//     //Create p tag
//     const p = document.createElement('p');
//     p.innerText = a1.innerText;
//     purchaseHistory.insertBefore(p, economoy);

//     //Show purchase history
//     purchaseHistory.classList.remove('hidden');


//     //Total price add
//     let totalPrice = document.getElementById('totalPrice');
//     let totalPriceText = totalPrice.innerText;
//     let totalPriceValue = parseInt(totalPriceText);
//     console.log(totalPriceValue);
//     totalPrice.innerText = perTicketPrice + totalPriceValue;


//     //Grand total price add
//     let grandTotalPrice = document.getElementById('grandTotal');
//     let grandTotalPriceText = grandTotalPrice.innerText;
//     let grandTotalPriceValue = parseInt(grandTotalPriceText);
//     grandTotalPrice.innerText = totalPrice.innerText














//     a1.disabled = true;
// })

