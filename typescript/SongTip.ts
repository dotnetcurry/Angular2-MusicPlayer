import {Directive} from 'angular2/angular2';
import {MusicPlayerInfo} from './MusicPlayerInfo';

@Directive({
  selector:'[song-tip]',
  properties: [
    'label: song-tip'
  ],
  host: {
    '(mouseover)': 'show()',
    '[title]':'title'
  }
})
export class SongTip{
  title: string;
  label: string;
  constructor(private musicPlayerInfo: MusicPlayerInfo){}

  show(){
    this.title = this.musicPlayerInfo[this.label];
  }
}
