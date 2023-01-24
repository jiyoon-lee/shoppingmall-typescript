import { BaseComponent } from "../core/index.js";

class Menu extends BaseComponent<null> {
  override render() {
    const container = document.createElement('aside');
    container.setAttribute('class', 'secondary');
    const heading = document.createElement('h1');
    heading.setAttribute('class', 'heading-title')
    heading.innerHTML = 'Apple - mind<br>Store';

    const menu = document.createElement('ul');
    const menuItem = document.createElement('li');
    const menuLink = document.createElement('a');
    menuLink.setAttribute('href', window.location.origin);
    menuLink.innerText = 'ALL PRODUCT';

    menuItem.append(menuLink);
    menu.append(menuItem);
    container.append(heading, menu)

    return container;
  }
}

export default Menu;