import { Router } from './utils/index.js';
import { ProductPage, ProductDetail } from './pages/index.js';
import { Header, Footer, Menu } from './layouts/index.js'; 
import { createComponent } from './core/index.js';
type PropsType = {
  el: string
}

class App {
  props: PropsType;
  constructor(props: PropsType) {
    this.props = props
  }
  setup(mainEl: string) {
    const router = new Router({
      '/': ProductPage,
      '/detail/:id': ProductDetail,
    });
    router.init(mainEl);
  }
  render() {
    const { el } = this.props;
    const rootElement = document.querySelector(el);
    const pageContainer = document.createElement('div');
    pageContainer.setAttribute('class', 'page');

    const header = createComponent(Header); // header
    const content = document.createElement('div'); // content
    content.setAttribute('class', 'primary');
    const menu = createComponent(Menu); // menu
    const footer = createComponent(Footer); // footer
    pageContainer.append(header, content, menu, footer);
    rootElement?.append(pageContainer);
    this.setup('.primary')
  }
}
export default App;