import { BaseComponent } from '../core/index.js';

class Header extends BaseComponent<null> {
  override render() {
    const header = document.createElement('header');
    header.setAttribute('class', 'header');
    const heading = document.createElement('h1');
    heading.setAttribute('class', 'website-title');
    heading.innerText = '>> New ARRIVALS 20% SALE!';
    header.append(heading);
    return header;
  }
}

export default Header;