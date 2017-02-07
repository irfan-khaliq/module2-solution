var app  = angular.module('ShoppingListCheckOff',[]);


app.controller('ToBuyController',ToBuyController);
app.controller('AlreadyBoughtController',AlreadyBoughtController);
app.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService)
{
  var ctrl1= this;
  ctrl1.itemsToBuy = ShoppingListCheckOffService.getItemToBuy();
  ctrl1.remove = function(item)
  {
    ShoppingListCheckOffService.checkOff(item);
  }
}
function AlreadyBoughtController(ShoppingListCheckOffService)
{
  var ctrl2 = this;
  ctrl2.alreadyBought = ShoppingListCheckOffService.getBoughtItems();
}
function ShoppingListCheckOffService()
{
  var toBuy = [{ name: "cookies", quantity: 10 },
              { name: "water", quantity: 8 },
              { name: "apples", quantity: 15 },
              { name: "Bananas", quantity: 10 },
              { name: "milk", quantity: 5 }];
  var bought = [];
  var service = {};
  service.getItemToBuy = function()
  {
    return toBuy;
  };
  service.getBoughtItems = function()
  {
    return bought;
  };
  service.checkOff = function(item)
  {
    var index = toBuy.indexOf(item);
    toBuy.splice(index, 1);
    bought.push(item);
  };
  return service;
}
