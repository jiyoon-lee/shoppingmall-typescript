import { BaseComponent } from '../../core/index.js';

type PropsType = {
  name: string;
  price: number,
  discountPercentage: number;
}
class ProductImage extends BaseComponent<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }
  override render() {
    const container = document.createElement('div');
    const productName = document.createElement('h3');
    productName.setAttribute('class', 'product-name');
    productName.innerText = this.props.name;

    const productPrice = document.createElement('h5');
    productPrice.setAttribute('class', 'product-price');

    const unit = document.createElement('span');
    unit.setAttribute('class', 'unit')
    unit.innerText = '$';

    const discountPrice = document.createElement('span');
    discountPrice.setAttribute('class', 'price');
    discountPrice.innerText = String(Math.floor(this.props.price - this.props.price * (0.01*this.props.discountPercentage)));


    const originPrice = document.createElement('span');
    originPrice.setAttribute('class', 'origin');
    originPrice.innerText = `\$${this.props.price}`;

    const discountPercentage = document.createElement('span');
    discountPercentage.setAttribute('class', 'discount-rate');
    discountPercentage.innerText = `${this.props.discountPercentage}%`

    productPrice.append(unit, discountPrice, originPrice, discountPercentage);
    container.append(productName, productPrice);
    return container;
  }
}
export default ProductImage;