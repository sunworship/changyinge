$(document).ready(function(){
	$("#jquery_jplayer_1").jPlayer({
		ready: function (event) {
			$(this).jPlayer("setMedia", {
				mp3:"林忆莲 - 盖亚.mp3" //mp3的播放地址
			});
		},
		timeupdate: function(event) {
			if(event.jPlayer.status.currentTime==0){
				time = "";
			}else {
				time = event.jPlayer.status.currentTime;
			}
		},
		play: function(event) {
			//点击开始方法调用lrc。start歌词方法 返回时间time
			$.lrc.start($('#lrc_content').val(), function() {
				return time;
			});
		},
		ended:function(event){
			$("#lrc_list").removeAttr("style").html("<li>歌曲播放完毕！</li>");
		},
		swfPath: "/js",  		//存放jplayer.swf的决定路径
		solution:"html, flash", //支持的页面
		supplied: "mp3",		//支持的音频的格式
		wmode: "window"
	});
});