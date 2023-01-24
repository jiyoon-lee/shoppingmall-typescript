import { BaseComponent, createComponent } from "../core/index.js";
import { ProductCard } from '../components/ProductCard/index.js';

type PropsType = {
  el: string
}

type StateType = {
  product: []
}
class ProductPage extends BaseComponent<PropsType> {
  mainElement?: HTMLElement;
  constructor(props: PropsType) {
   super(props);
   this.state = {
    product: {},
   }
   this.getProductData()
  }
  async getProductData() {
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json();
    const products = data.products
    this.setState({product: products});
  }
  override render() {
    this.mainElement = document.createElement('main');
    this.mainElement.classList.add("product");

    if ((<StateType>this.state).product.length > 0) {
      const productList = document.createElement('ul');
    productList.setAttribute('class', 'product-list');
    
    (<StateType>this.state).product.forEach(item => {
      const productItem = document.createElement('li');
      productItem.setAttribute('class', 'product-item');
      const productCard = createComponent(ProductCard, item);
      productItem.append(productCard);
      productList.append(productItem);
    });
    this.mainElement.append(productList);
    }
    return this.mainElement;
  }
}
export default ProductPage