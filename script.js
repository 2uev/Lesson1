function Container()
{
    this.id = "";
    this.className= "";
    this.htmlCode = "";
}

Container.prototype.render = function()              // function render return HTML
{
    return this.htmlCode;
}


function Menu(my_class, my_id, my_items){
    Container.call(this);
    this.className = my_class;
    this.id = my_id;
    this.items = my_items;
}
Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;
Menu.prototype.render = function(){                  // override function render to output on screen
}

// let menu = new Menu("menu_class", "menu_id", {});    //

function MenuItem(my_href, my_name, my_id){                 // Teamplate for Create new 'Menu Item'
    Container.call(this);
    this.className = "menu-item";
    this.href = my_href;
    this.itemName = my_name;
    this.id = my_id;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;
MenuItem.prototype.render = function(){
    return "<li class='"+this.className+"' id='"+this.id+"'><a href='"+ this.href +"'>" + this.itemName + "</a></li>";
}

var m_item1 = new MenuItem("#", "Главная", "main");
var m_item2 = new MenuItem("/catalogue/", "Каталог", "list");
var m_item3 = new MenuItem("/gallery/", "Галерея", "gallery");
var m_items = {0: m_item1, 1: m_item2, 2: m_item3};

var sm_item1 = new MenuItem("/sub_catalogue1", "Подраздел1", "slist1");
var sm_item2 = new MenuItem("/sub_catalogue2", "Подраздел2", "slist2");
var sm_item3 = new MenuItem("/sub_catalogue3", "Подраздел3", "slist3");
var sm_items = {0: sm_item1, 1: sm_item2, 2: sm_item3};

Menu.prototype.render = function(){                  // rendering new element + for...in
    var result = "<ul class='"+this.className+"' id='"+this.id+"'>";
    for(var item in this.items){
        if(this.items[item] instanceof MenuItem){
            result += this.items[item].render();
        }
    }
    result += "</ul>";
    return result;
}
                                                     // insert new element to <BODY> + parameters
var menu = new Menu("main_menu", "menu", m_items);
var div = document.write(menu.render());
                                                     // insert sub menu to main menu
var subMenu = new Menu("sub_menu", "list_menu", sm_items);
var smenu = document.createElement('div');
smenu.innerHTML = subMenu.render();
list.appendChild(smenu);                             // write here where you want put sub menu
                                                     // remove element by 'id'
/*DeleteElement = function(my_id) {
    let elem = document.getElementById(my_id);
    elem.remove();
}
                                                     // insert element 'id' to delete them
DeleteElement('');*/

