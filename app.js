(function () {
'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var controller = this;

  controller.itemsToBuy =  ShoppingListCheckOffService.getItemsToBuy();
  controller.buyItem = function(index){
    ShoppingListCheckOffService.buyItem(index);
  };
  controller.isListEmpty = function () {
    return controller.itemsToBuy.length === 0;
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
    var controller = this;
    controller.boughtItems = ShoppingListCheckOffService.getBoughtItems();
    controller.isListEmpty = function () {
      return controller.boughtItems.length === 0;
    };
}

var Item = function(name, quantity){
  this.name = name;
  this.quantity = quantity;
};

  function ShoppingListCheckOffService(){
    var service = this;
    var itemsToBuy = [
      new Item('Cookies', 10),
      new Item('Milk', 3),
      new Item('Chips', 5),
      new Item('Apples', 2),
      new Item('Juice', 4)
    ];

    var boughtItems = [];

    service.getItemsToBuy = function(){
      return itemsToBuy;
    };

    service.getBoughtItems = function(){
      return boughtItems;
    };

    service.buyItem = function(index){
      if(index >= itemsToBuy.length){
        return;
      }
      boughtItems.push(itemsToBuy[index]);
      itemsToBuy.splice(index, 1);
    };
  }

})();
