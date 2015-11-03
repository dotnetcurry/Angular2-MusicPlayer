import {Component, Directive, View} from 'angular2/angular2';
import {MusicPlayerInfo} from './MusicPlayerInfo';
import {SongTip} from './SongTip';

@Component({
	selector:'music-player'
})
@View({
	templateUrl :'templates/musicPlayer.html',
	directives:[SongTip]
})
export class MusicPlayer{
	public nowPlaying: string;
	
	constructor(info: MusicPlayerInfo){
		this.nowPlaying = info.nowPlaying;
	}
}