import {bootstrap, Component, View} from 'angular2/angular2';
import {MusicPlayerInfo} from './MusicPlayerInfo';
import {SongTip} from './SongTip';
import {MusicPlayer} from './MusicPlayer';

@Component({
  selector:'music-player-host',
  bindings: [MusicPlayerInfo]
})
@View({
  template: '<h2>{{message}}</h2><music-player></music-player>',
  directives:[MusicPlayer]
})
class MusicPlayerHost{
  message: string;
  constructor(){
    this.message = "My music player";
  }
}

bootstrap(MusicPlayerHost);