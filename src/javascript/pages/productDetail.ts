import { BaseComponent } from "../core/index.js";

class ProductDetail extends BaseComponent<null> {
  constructor(props: null) {
    super(props);
  }
  override render() {
    const container = document.createElement('div');
    container.innerText = '헬로';
    return container;
  }
}

export default ProductDetail;