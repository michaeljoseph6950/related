let items = [];

var table1 = jQuery('#example1').DataTable();

if(!localStorage.getItem('banklogs') || ((JSON.parse(localStorage.getItem('banklogs')).length) < 1)) {
    document.getElementById('predat').style.display = 'flex';
} else {
    document.getElementById('predat').style.display = 'none';
}

if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)){

    items = JSON.parse(localStorage.getItem('banklogs'));
    document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);

    items.map(data=>{
        var image = `<td><img src=${data.image}></td>`
        var balance =`<td class="btn-balance">${data.balance}</td>`
        var account = `<td>${data.account}</td>`
        var remove = `<td><button class="btn-cloze btn-remove"></button></td>`
        var price = `<td class="btn-price">${data.price}</td>`
        var website = `<td>${data.website}</td>`
        var info1 = `<td>${data.info1}</td>`
        var info2 = `<td>${data.info2}</td>`
        var info3 = `<td>${data.info3}</td>`
        var info4 = `<td>${data.info4}</td>`
        var info5 = `<td>${data.info5}</td>`
        var info6 = `<td>${data.info6}</td>`
        var theid = `<td>${data.theid}</td>`
        
        table1.row.add([
            image,
            balance,      
            account,   
            remove,
            price,
            info1,   
            info2,   
            info3,   
            info4,   
            info5,   
            info6,   
            website,    
            theid  
        ]).draw();
    });

    for(var i = 0; i < items.length; i++) {
        console.log('boa' + (items[i].theid).substring((items[i].theid).indexOf('0') + 1));
        console.log('chase' + (items[i].theid).substring((items[i].theid).indexOf('0') + 1));
        console.log('chime' + (items[i].theid).substring((items[i].theid).indexOf('0') + 1));
        console.log('citi' + (items[i].theid).substring((items[i].theid).indexOf('0') + 1));
        console.log('hunt' + (items[i].theid).substring((items[i].theid).indexOf('0') + 1));
        console.log('nfcu' + (items[i].theid).substring((items[i].theid).indexOf('0') + 1));
        console.log('pnc' + (items[i].theid).substring((items[i].theid).indexOf('0') + 1));
        console.log('truist' + (items[i].theid).substring((items[i].theid).indexOf('0') + 1));
        console.log('wells' + (items[i].theid).substring((items[i].theid).indexOf('0') + 1));
        console.log('wood' + (items[i].theid).substring((items[i].theid).indexOf('0') + 1));


        var cartRow3 = document.createElement('div');
        cartRow3.classList.add('col-lg-3', 'col-xl-2', 'col-md-4', 'col-6');
        var cartItems3 = document.getElementsByClassName('xenon4')[0];
        var cartRowContents3 = `
            <div class="pricing-list">
                <div class="pricing-list-price">
                    <h2 id="boa1">boa</h2>
                    <img src="img/partners/banklogo.png" class="borderp">
                </div>
                <ul>
                    <li>https://secure.bankofamerica.com/auth/</li>
                    <li>Username + Password</li>
                    <li>Account& Routing No</li>
                    <li>Social Security No.</li>
                    <li>Date of Birth</li>
                    <li>ClientIP + UserAgent</li>
                    <li>Name+ Email access</li>
                    <li>Bank of America <br> [SAVINGS ACCOUNT]</li>
                    <button type="submit" class="butn" id=${items[i].theid}>
                        boa
                    </button>
                </ul>
            </div>
        `;
        cartRow3.innerHTML = cartRowContents3;
        cartItems3.prepend(cartRow3);


        var cartRow3 = document.createElement('div');
        cartRow3.classList.add('col-lg-3', 'col-xl-2', 'col-md-4', 'col-6');
        var cartItems3 = document.getElementsByClassName('xenon4')[0];
        var cartRowContents3 = `
            <div class="pricing-list">
                <div class="pricing-list-price">
                    <h2 id="boa1">chime</h2>
                    <img src="img/partners/banklogo.png" class="borderp">
                </div>
                <ul>
                    <li>https://secure.bankofamerica.com/auth/</li>
                    <li>Username + Password</li>
                    <li>Account& Routing No</li>
                    <li>Social Security No.</li>
                    <li>Date of Birth</li>
                    <li>ClientIP + UserAgent</li>
                    <li>Name+ Email access</li>
                    <li>Bank of America <br> [SAVINGS ACCOUNT]</li>
                    <button type="submit" class="butn" id=${items[i].theid}>
                        chime
                    </button>
                </ul>
            </div>
        `;
        cartRow3.innerHTML = cartRowContents3;
        cartItems3.prepend(cartRow3);

        


        if((items[i].account).includes('CHECKING') || (items[i].account).includes('SPENDING')){
            var cartRow3 = document.createElement('div');
            cartRow3.classList.add('col-lg-3', 'col-xl-2', 'col-md-4', 'col-6');
            var balance2 = items[i].balance;
            var price2 = items[i].price;
            var balance3 = balance2.replace('Balance: ', '');
            var price3 = price2.replace('Price: ', 'In Cart: ');
            var cartItems3 = document.getElementsByClassName('xenon3')[0];
            var cartRowContents3 = `
                <div class="pricing-list highlight">
                    <div class="pricing-list-price">
                        <h2 class="text-white">${balance3}</h2>
                        <img src=${items[i].image} class="borderp">
                    </div>
                    <ul>
                        <li class="text-white">${items[i].website} </li>
                        <li class="text-white">${items[i].info1} </li>
                        <li class="text-white">${items[i].info2} </li>
                        <li class="text-white">${items[i].info3} </li>
                        <li class="text-white">${items[i].info4} </li>
                        <li class="text-white">${items[i].info5} </li>
                        <li class="text-white">${items[i].info6} </li>
                        <li class="text-white">${(items[i].account).replace('[','<br>[').replace(']',' ACCOUNT]')}</li>
                        <button type="submit" class="butn white">
                            ${price3}
                        </button>
                    </ul>
                </div>
            `;
            cartRow3.innerHTML = cartRowContents3;
            cartItems3.prepend(cartRow3);
        } else {
            var cartRow3 = document.createElement('div');
            cartRow3.classList.add('col-lg-3', 'col-xl-2', 'col-md-4', 'col-6');
            var balance2 = items[i].balance;
            var price2 = items[i].price;
            var balance3 = balance2.replace('Balance: ', '');
            var price3 = price2.replace('Price: ', 'In Cart: ');
            var cartItems3 = document.getElementsByClassName('xenon3')[0];
            var cartRowContents3 = `
                <div class="pricing-list">
                    <div class="pricing-list-price">
                        <h2>${balance3}</h2>
                        <img src=${items[i].image} class="borderp">
                    </div>
                    <ul>
                        <li>${items[i].website} </li>
                        <li>${items[i].info1} </li>
                        <li>${items[i].info2} </li>
                        <li>${items[i].info3} </li>
                        <li>${items[i].info4} </li>
                        <li>${items[i].info5} </li>
                        <li>${items[i].info6} </li>
                        <li>${(items[i].account).replace('[','<br>[').replace(']',' ACCOUNT]')}</li>
                        <button type="submit" class="butn">
                            ${price3}
                        </button>
                    </ul>
                </div>
            `;
            cartRow3.innerHTML = cartRowContents3;
            cartItems3.prepend(cartRow3);
        }
    }



    document.getElementById('iboa01').innerText = "Buy: $"+parseFloat((localStorage.getItem("boa1").replace("$","").replace(",","")/25).toFixed(0)).toLocaleString();
    document.getElementById('ichase01').innerText = "Buy: $"+parseFloat((localStorage.getItem("chase1").replace("$","").replace(",","")/25).toFixed(0)).toLocaleString();
    document.getElementById('ichime01').innerText = "Buy: $"+parseFloat((localStorage.getItem("chime1").replace("$","").replace(",","")/25).toFixed(0)).toLocaleString();
    document.getElementById('iciti01').innerText = "Buy: $"+parseFloat((localStorage.getItem("citi1").replace("$","").replace(",","")/25).toFixed(0)).toLocaleString();
    document.getElementById('ihunt01').innerText = "Buy: $"+parseFloat((localStorage.getItem("hunt1").replace("$","").replace(",","")/25).toFixed(0)).toLocaleString();
    document.getElementById('infcu01').innerText = "Buy: $"+parseFloat((localStorage.getItem("nfcu1").replace("$","").replace(",","")/25).toFixed(0)).toLocaleString();
    document.getElementById('ipnc01').innerText = "Buy: $"+parseFloat((localStorage.getItem("pnc1").replace("$","").replace(",","")/25).toFixed(0)).toLocaleString();
    document.getElementById('itruist01').innerText = "Buy: $"+parseFloat((localStorage.getItem("truist1").replace("$","").replace(",","")/25).toFixed(0)).toLocaleString();
    document.getElementById('iwells01').innerText = "Buy: $"+parseFloat((localStorage.getItem("wells1").replace("$","").replace(",","")/25).toFixed(0)).toLocaleString();
    document.getElementById('iwood01').innerText = "Buy: $"+parseFloat((localStorage.getItem("wood1").replace("$","").replace(",","")/25).toFixed(0)).toLocaleString();

    document.getElementById('iboa1').innerText = localStorage.getItem('boa1');
    document.getElementById('ichase1').innerText = localStorage.getItem('chase1');
    document.getElementById('ichime1').innerText = localStorage.getItem('chime1');
    document.getElementById('iciti1').innerText = localStorage.getItem('citi1');
    document.getElementById('ihunt1').innerText = localStorage.getItem('hunt1');
    document.getElementById('infcu1').innerText = localStorage.getItem('nfcu1');
    document.getElementById('ipnc1').innerText = localStorage.getItem('pnc1');
    document.getElementById('itruist1').innerText = localStorage.getItem('truist1');
    document.getElementById('iwells1').innerText = localStorage.getItem('wells1');
    document.getElementById('iwood1').innerText = localStorage.getItem('wood1');


    updateCartTotal();

    var removeFromCartButtons = document.getElementsByClassName('btn-remove');
    for(var i = 0; i <removeFromCartButtons.length; i++){
        var button = removeFromCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }
} else {
    document.getElementById('logsection').style.display = 'none';
    document.getElementById('logsection2').style.display = 'none';
    document.getElementById('logsection3').style.display = 'none';
    document.getElementById('cartlength').style.display = 'none';
}


function removeCartItem(event) {
    var buttonClicked = event.target
    var cartItem = buttonClicked.parentElement.parentElement;
    var price = cartItem.children[4].innerText;
    var balance = cartItem.children[1].innerText;
    var account = cartItem.children[2].innerText;
    var website = cartItem.children[11].innerText;
    var image = cartItem.children[0].children[0].src;
    var info1 = cartItem.children[5].innerText;
    var info2 = cartItem.children[6].innerText;
    var info3 = cartItem.children[7].innerText;
    var info4 = cartItem.children[8].innerText;
    var info5 = cartItem.children[9].innerText;
    var info6 = cartItem.children[10].innerText;
    var theid = cartItem.children[12].innerText;
    removeItemFromCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6,theid);
    buttonClicked.parentElement.parentElement.remove();
}


function removeItemFromCart(price, balance,account,website,image,info1,info2,info3,info4,info5,info6,theid){
    let item = {
        price: price,
        balance: balance,
        account: account,
        website: website,
        image: image,
        info1: info1,
        info2: info2,
        info3: info3,
        info4: info4,
        info5: info5,
        info6: info6,
        theid: theid
    }
    function checkAdult(items) {
        return JSON.stringify(items) !== JSON.stringify(item)
    }
    localStorage.setItem('time-left',600);
    localStorage.setItem('banklogs', JSON.stringify(items.filter(checkAdult)));
    items = items.filter(checkAdult);
    window.location.reload()
}


function updateCartTotal() {
    let items3 = (JSON.parse(localStorage.getItem('banklogs')));
    var total = 0;
    items3.map(data=>{
        var price4 = data.price.replace('Price: ','').replace(',','').replace('$','');
        total = total + (price4 * 1);
    });

    if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
        document.getElementById('showtoasts').innerHTML = `
            Download 1 Bank Log
            <img src="img/partners/check.png">
        `;
        document.getElementById('modal-amount').innerHTML = `
            Send $ <span id="omanyala" class="countup">${parseInt(total).toLocaleString()}</span> 
        `;
        document.getElementById('titlelogs2').innerText = `Cart: ${JSON.parse(localStorage.getItem('banklogs')).length}, Total: $${total.toLocaleString()}`
    } else if(JSON.parse(localStorage.getItem('banklogs')).length > 1) {
        document.getElementById('showtoasts').innerHTML = `
            Download ${JSON.parse(localStorage.getItem('banklogs')).length} Bank Logs
            <img src="img/partners/check.png">
        `;
        document.getElementById('modal-amount').innerHTML = `
            Send $ <span id="omanyala" class="countup">${parseInt(total).toLocaleString()}</span> 
        `;
        document.getElementById('titlelogs2').innerText = `Cart: ${JSON.parse(localStorage.getItem('banklogs')).length}, Total: $${total.toLocaleString()}`
    } 
    localStorage.setItem('banktotal',total);
}