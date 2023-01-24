import { createComponent } from '../core/index.js';

type Routes = {
  [key: string]: any
}

type RouteParam = {
  [routeName: string]: string
}

class Router {
  routes: Routes;
  rootElementId?: string;
  routeParam?: RouteParam;
  constructor(routes: Routes) {
    if (!routes) {
      console.error("Can not initialize routes, need routes!");
    }
    this.routes = routes;
    for (const key in routes) {
      const route = routes[key];
      if (key.indexOf(":") > -1) {
        const [_, routeName, param] = key.split("/");
        if (routeName) {
          this.routeParam = {
            [routeName]: param?.replace(":","")! as string
          }
          this.routes["/"+routeName] = route;
          delete this.routes[key];
        }
      }
    }
  }
  init(rootElementId: string) {
    if (!rootElementId) {
      console.error("Can not initialize Route, not define rootElementId");
      return null;
    }
    this.rootElementId = rootElementId;
    this.routing(window.location.pathname);

    window.addEventListener('click', (e) => {
      if ((<Element>e.target).closest('a')) {
        e.preventDefault();
        this.routePush((<HTMLAnchorElement>(<Element>e.target).closest('a')).href);
      }
    })
  }
  routePush(pathname: string) {
    window.history.pushState({}, '', pathname);
    this.routing(window.location.pathname);
  }
  routing(pathname: string) {
    const [_, routeName, param] = pathname.split("/");
    let page;
    if (this.routes[pathname]) {
      page = createComponent(this.routes[pathname]);
    } else if (param) {
      if (routeName && this.routeParam) {
        const routeParam = {
          [this.routeParam[routeName]! as string]: param
        };
        page = createComponent(this.routes["/" + routeName], routeParam);
      }
    }
    if (page) {
      this.render(page);
    }
  }
  render(page: Node) {
    const rootElement = document.querySelector(this.rootElementId! as string);
    (<HTMLElement>rootElement).innerHTML = "";
    (<HTMLElement>rootElement).appendChild(page);
  }
}
export default Router;