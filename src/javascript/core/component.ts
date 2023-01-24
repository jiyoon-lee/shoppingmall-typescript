export interface Component {
  setState(newState: {}): void 
  updater(): void;
  render: () => void;
  initialize(): Element;
}

export class BaseComponent<T> implements Component {
  props: T;
  state?: {}
  lastRendered?: Element;
  constructor(props: T) {
    this.props = props;
  }
  setState(newState: {}) {
    this.state = newState;
    this.updater();
  }
  updater() {
    const rendered = this.render();
    (<Element>this.lastRendered).replaceWith(rendered! as Element);
    this.lastRendered = rendered! as Element;
  }
  render() {}
  initialize() {
    const rendered = this.render();
    this.lastRendered = rendered! as Element;
    return rendered! as Element;
  }
}