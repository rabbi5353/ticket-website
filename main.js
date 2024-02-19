const allSeats = document.getElementsByClassName('seat-name');

const perTicketPrice = 550;
let totalAvailableSeats = 8;
let seatLimitCount = 0;


for (let seat of allSeats) {

    seat.addEventListener('click', function () {

        //Button color change
        seat.style.backgroundColor = '#1DD100';
        seat.style.color = 'white';

        //Decrement seat
        let availableSeat = document.getElementById('available-seat');
        let availableSeatText = availableSeat.innerText;
        let availableSeatValue = parseInt(availableSeatText);
        availableSeat.innerText = availableSeatValue - 1;
        totalAvailableSeats = availableSeatValue - 1;
        console.log(availableSeat.innerText);

        if (totalAvailableSeats < 4) {
            availableSeat.innerText = 4;
        }


        //Purchase seat count
        const purchaseTicketCount = document.getElementById('purchaseTicketCount');
        let purchaseTicketCountText = purchaseTicketCount.innerText;
        let purchaseTicketCountValue = parseInt(purchaseTicketCountText);
        purchaseTicketCount.innerText = purchaseTicketCountValue + 1;
        seatLimitCount = purchaseTicketCountValue + 1

        if (seatLimitCount > 4) {
            alert("Your limit cross");
            seat.style.backgroundColor = '#f7f8f8';
            seat.style.color = '#0307127f';
            purchaseTicketCount.innerText = 4;
            return;
        }


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
        totalPrice.innerText = perTicketPrice + totalPriceValue;
        // console.log(totalPriceValue);


        //Grand
        const grandTotal = document.getElementById('grandTotal');
        grandTotal.innerText = totalPrice.innerText;



        //Coupon Button Functionality
        const couponBtn = document.getElementById('couponBtn');
        couponBtn.addEventListener('click', function () {
            const couponInput = document.getElementById('couponInput');
            const couponInputValue = couponInput.value;

            if (couponInputValue === 'NEW15') {

                const discountDiv = document.getElementById('discountDiv');


                couponBtn.parentNode.classList.add('hidden')
                discountDiv.classList.remove('hidden');


                const discountPercent = perTicketPrice - (perTicketPrice * (15 / 100));
                const discountPrice = discountPercent * seatLimitCount;

                const grandTotal = document.getElementById('grandTotal');
                grandTotal.innerText = discountPrice;


                const totalPrice = document.getElementById('totalPrice');
                const totalPriceValue = parseInt(totalPrice.innerText)


                const discountAmount = document.getElementById('discountAmount');
                const discountAmountCalculate = totalPriceValue - discountPrice;
                discountAmount.innerText = discountAmountCalculate

            }

            else if (couponInputValue === 'Couple 20') {

                const discountDiv = document.getElementById('discountDiv');


                couponBtn.parentNode.classList.add('hidden')
                discountDiv.classList.remove('hidden');

                const discountPercent = perTicketPrice - (perTicketPrice * (20 / 100));
                const discountPrice = discountPercent * seatLimitCount;

                const grandTotal = document.getElementById('grandTotal');
                grandTotal.innerText = discountPrice;


                const totalPrice = document.getElementById('totalPrice');
                const totalPriceValue = parseInt(totalPrice.innerText)


                const discountAmount = document.getElementById('discountAmount');
                const discountAmountCalculate = totalPriceValue - discountPrice;
                discountAmount.innerText = discountAmountCalculate
            }

            else {
                alert('Invalid Coupon. Please check again your coupon spelling')
            }
        })


        seat.disabled = true;
    })
}



//Form validation and Popup page show
document.getElementById('next-btn').addEventListener('click', function () {
    const numberInput = document.getElementById('numberInput').value;
    const numberValue = parseInt(numberInput);

    if (typeof numberValue === 'number' && numberValue >= 0) {
        const header = document.getElementById('header');
        header.classList.add('hidden');

        const main = document.getElementById('main');
        main.classList.add('hidden');

        const popup = document.getElementById('popup');
        popup.classList.remove('hidden')

        document.body.backgroundColor = 'red';
    }

    else {
        alert('You must fill up Number box');
    }
})
