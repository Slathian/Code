document.getElementById('price1').innerHTML = `$${Steak.price} ${Steak.name}`;
document.getElementById('description1').innerHTML = `${Steak.details}`;
document.getElementById('price2').innerHTML = `$${Salmon.price} ${Salmon.name}`;
document.getElementById('description2').innerHTML = `${Salmon.details}`;
document.getElementById('price3').innerHTML = `$${Burger.price} ${Burger.name}`;
document.getElementById('description3').innerHTML = `${Burger.details}`;
document.getElementById('steak-additive-price1').innerHTML = `$${Steak.additives.first.addedPrice} ${Steak.additives.first.name}`;
document.getElementById('steak-additive-price2').innerHTML = `$${Steak.additives.second.addedPrice} ${Steak.additives.second.name}`;
document.getElementById('steak-additive-price3').innerHTML = `$${Steak.additives.third.addedPrice} ${Steak.additives.third.name}`;
document.getElementById('steak-subtract-price1').innerHTML = `-$${Steak.subtractions.first.subtractedPrice} ${Steak.subtractions.first.name}`;
document.getElementById('steak-subtract-price2').innerHTML = `-$${Steak.subtractions.second.subtractedPrice} ${Steak.subtractions.second.name}`;
document.getElementById('steak-subtract-price3').innerHTML = `-$${Steak.subtractions.third.subtractedPrice} ${Steak.subtractions.third.name}`;

document.getElementById('salmon-additive-price1').innerHTML = `$${Salmon.additives.first.addedPrice} ${Salmon.additives.first.name}`;
document.getElementById('salmon-additive-price2').innerHTML = `$${Salmon.additives.second.addedPrice} ${Salmon.additives.second.name}`;
document.getElementById('salmon-additive-price3').innerHTML = `$${Salmon.additives.third.addedPrice} ${Salmon.additives.third.name}`;
document.getElementById('salmon-subtract-price1').innerHTML = `-$${Salmon.subtractions.first.subtractedPrice} ${Salmon.subtractions.first.name}`;
document.getElementById('salmon-subtract-price2').innerHTML = `-$${Salmon.subtractions.second.subtractedPrice} ${Salmon.subtractions.second.name}`;
document.getElementById('salmon-subtract-price3').innerHTML = `-$${Salmon.subtractions.third.subtractedPrice} ${Salmon.subtractions.third.name}`;

document.getElementById('burger-additive-price1').innerHTML = `$${Burger.additives.first.addedPrice} ${Burger.additives.first.name}`;
document.getElementById('burger-additive-price2').innerHTML = `$${Burger.additives.second.addedPrice} ${Burger.additives.second.name}`;
document.getElementById('burger-additive-price3').innerHTML = `$${Burger.additives.third.addedPrice} ${Burger.additives.third.name}`;
document.getElementById('burger-subtract-price1').innerHTML = `-$${Burger.subtractions.first.subtractedPrice} ${Burger.subtractions.first.name}`;
document.getElementById('burger-subtract-price2').innerHTML = `-$${Burger.subtractions.second.subtractedPrice} ${Burger.subtractions.second.name}`;
document.getElementById('burger-subtract-price3').innerHTML = `-$${Burger.subtractions.third.subtractedPrice} ${Burger.subtractions.third.name}`;