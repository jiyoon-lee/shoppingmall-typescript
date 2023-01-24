import { BaseComponent } from "../core/index.js";

class Footer extends BaseComponent<null> {
  override render() {
    const footer = document.createElement("footer");
    footer.setAttribute('class', 'footer');
    footer.innerText = '©2023. made by jiyoontyan'
    return footer;
  }

}
export default Footer;