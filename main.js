console.log(items);

var answerSections = document.querySelectorAll('.answer');

function addObjectTitlesToAnswer(answerField, answerArray)
{
  var target = document.querySelector('.' + answerField);

  answerArray.forEach(function(item, i, arr)
  {  
    target.innerHTML +=
    '<br>' + item.title + '<br>';
  });
}



// find average price of all items
function averagePrice() {
  var total = 0;
  items.forEach(function(item, i, arr){
    total += item.price;
  });
  return Math.round((total/items.length) * 100) / 100;
}
document.querySelector('.answer1 p').innerHTML =
  'the average price is ' + averagePrice();


// log FILTER BY PRICE:
console.log('\n\n::::::::FILTER BY PRICE::::::::');

// return an array of items that cost between $14.00 and $18.00 USD
function filterByPrice(min, max) {
  var filteredItems = items.filter(function(item, i, arr){
    var price = item.price;
    return (price >= min && price <= max);
  });
  return filteredItems;
}

var filteredItems = [];
// var titlesOfFilteredItems = [];
filterByPrice(14,18).forEach(function(item, i, arr){
  console.log('logging item.title in forEach:\n' + item.title);
  filteredItems.push(item);
  // titlesOfFilteredItems.push(item.title);
});
document.querySelector('.answer2 p').innerHTML =
  '<pre>' + filterByPrice + '</pre>';
addObjectTitlesToAnswer('answer2', filteredItems);


// filteredItems.forEach(function(item, i, arr){
//   document.querySelector('.answer2 p').innerHTML +=
//     '<br>' + item.title + '<br>';
// });

console.log('\nfiltered by price: ' + filterByPrice(14, 18));
console.log('\nfilterByPrice(14,18):\n' + filterByPrice(14,18));
console.log('\nfilteredItems:\n' + filteredItems);
// console.log('\ntitlesOfFilteredItems:\n' + titlesOfFilteredItems);



// find GBP
// var gbpItems = [];
gbpItems = items.filter(function(item, i, array) {
  return item.currency_code === 'GBP';
});
addObjectTitlesToAnswer('answer3', gbpItems);
// gbpItems.forEach(function(item, i, array){
//     document.querySelector('.answer3 p').innerHTML +=
//     '<br>' + item.title + '<br>';
// });



woodenItems = items.filter(function(item, i, array)
{
  return (item.materials.indexOf('wood') >= -1);
});
addObjectTitlesToAnswer('answer4', woodenItems);
// woodenItems.forEach(function(item, i, arr){
//   document.querySelector('.answer4 p').innerHTML +=
//   '<br>' + item.title + '<br>';
// });








itemsWithMoreThan8Materials = items.filter(function(item, i, array)
{
  return ( item.materials.length >= 8 );
});

var target8plus = document.querySelector('.answer5');
itemsWithMoreThan8Materials.forEach(function(item, i, arr)
{
  target8plus.innerHTML +=
  '<h3>' + item.title + '</h3><ul>' ;
  item.materials.forEach(function(material, i, array){
    target8plus.innerHTML +=
    '<li>' + material + '</li>' ;
  });
  target8plus.innerHTML += '</ul>' ;
});
//addObjectTitlesToAnswer('answer5', itemsWithMoreThan8Materials);


itemsMadeBySellers = items.filter(function(item, i, array)
{
  return ( item.who_made === 'i_did' || item.who_made === 'collective' );
});

document.querySelector('.answer6 p').innerHTML +=
  itemsMadeBySellers.length + ' items made by sellers (including collectives).';
//
