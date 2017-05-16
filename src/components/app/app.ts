import { Component, h, Ionic } from '../index';


@Component({
  tag: 'ion-app',
  styleUrls: {
    ios: 'app.ios.scss',
    md: 'app.md.scss',
    wp: 'app.wp.scss'
  },
  shadow: false
})
export class App {

  render() {
    return h(this, Ionic.theme(this, 'app'));
  }

}
