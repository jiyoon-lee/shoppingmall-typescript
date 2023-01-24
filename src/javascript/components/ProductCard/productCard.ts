import { BaseComponent, createComponent } from "../../core/index.js";
import { ProductType } from '../../types.js';
import {
  ProductImage,
  ProductDescription,
  ProductAction,
} from './index.js';

class ProductCard extends BaseComponent<ProductType> {
  constructor(props: ProductType) {
    super(props)
  }
  override render() {
    console.log(this.props)
    const container = document.createElement('a');
    container.setAttribute('href', `/detail/${this.props.id}`);

    const productImage = createComponent(ProductImage, {
      src: this.props.thumbnail
    })

    const productDescription = createComponent(ProductDescription, {
      name: this.props.title,
      price: this.props.price,
      discountPercentage: this.props.discountPercentage,
    })

    const producctAction = createComponent(ProductAction, {})

    container.append(productImage, productDescription, producctAction)
    return container;
  }

}
export default ProductCard;