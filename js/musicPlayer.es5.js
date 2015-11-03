function MusicPlayerInfo() {
	this.nowPlaying = "Yaad kiya dil ne";
	this.next = "Hosh walo ko khabar";
	this.prev = "Hotho se chulo tum";
}

var SongTip = ng.Directive({
		selector: '[song-tip]',
		properties: [
			'label: song-tip'
		],
		host: {
			'(mouseover)': 'show()',
			'[title]': 'title'
		}
	})
	.Class({
		constructor: [MusicPlayerInfo, function (info) {
			this.info = info;
		}],
		show: function () {
			this.title = this.info[this.label];
		}
	});

var MusicPlayer = ng.Component({
		selector: 'music-player',
		bindings: [MusicPlayerInfo]
	})
	.View({
		templateUrl: 'templates/musicPlayer.html',
		directives: [SongTip]
	})
	.Class({
		constructor: [MusicPlayerInfo, function (musicInfo) {
			this.nowPlaying = musicInfo.nowPlaying;
		}]
	});

var MusicPlayerHost = ng.
	Component({
		selector: 'music-player-host'
	})
	.View({
		template: '<h2>{{message}}</h2><music-player></music-player>',
		directives: [MusicPlayer]
	})
	.Class({
		constructor: function () {
			this.message = "My music player";
		},
		onInit: function () {
			console.log('music-player-host init');
		}
	});

document.addEventListener('DOMContentLoaded', function () {
	ng.bootstrap(MusicPlayerHost);
});
