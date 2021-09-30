import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import fetch from 'fetch';

export default class RouteRouterComponent extends Component {
  @tracked router;

  constructor() {
    super(...arguments);

    fetch('/routers').then((data) => {
      this.router = data;
    });
  }
}
