import { BaseComponent } from "../../core/index.js";

type PropsType = {
  src: string
}

class ProductImage extends BaseComponent<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }
  override render() {
    const container = document.createElement('figure');
    container.setAttribute('style', `background-image: url(${this.props.src})`)
    container.setAttribute('class', 'product-image');
    const image = document.createElement('img');
    image.setAttribute('src', this.props.src);
    image.setAttribute('alt', '상품이미지');
    container.append(image);
    return container;
  }
}
export default ProductImage;