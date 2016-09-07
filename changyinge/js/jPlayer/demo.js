$(document).ready(function(){
  var desJson=[];
  var imgItem=document.getElementsByClassName('r r-2x img-full');
  var songItem=document.getElementsByClassName('songName');
  var singgerItem=document.getElementsByClassName('text-ellipsis text-xs text-muted');
  
  $.ajax({
    type:"GET",
    url:"http://123.206.69.201:8080/song/selectbyhot/0/12",
    dataType:"json",
    success:function(data){
        for(var i=0;i<12;i++){
                  var obj = {};
                  obj.title = data[i].songName;
                  obj.artist=data[i].singgerName;
                  obj.poster=data[i].albumpicBig;
                  obj.m4a=data[i].m4a;
                  desJson[i]=obj;
                  imgItem[i].setAttribute('src',obj.poster);
                  songItem[i].innerHTML=obj.title;
                  singgerItem[i].innerHTML=obj.artist;
        }
       
        var myPlaylist = new jPlayerPlaylist({jPlayer: "#jplayer_N",
                          cssSelectorAncestor: "#jp_container_N"},desJson,
                          {
                            playlistOptions: {
                              enableRemoveControls: true,
                              autoPlay: false
                            },
                            swfPath: "js/jPlayer",
                            supplied: "webmv, ogv, m4v, oga, mp3, m4a",
                            smoothPlayBar: true,
                            keyEnabled: true,
                            audioFullScreen: false
                          });

        $(document).on($.jPlayer.event.pause, myPlaylist.cssSelector.jPlayer,  function(){
          $('.musicbar').removeClass('animate');
          $('.jp-play-me').removeClass('active');
          $('.jp-play-me').parent('li').removeClass('active');
        });

        $(document).on($.jPlayer.event.play, myPlaylist.cssSelector.jPlayer,  function(){
          $('.musicbar').addClass('animate');
        });

        $(document).on('click', '.jp-play-me', function(e){
          e && e.preventDefault();
          var $this = $(e.target);
          if (!$this.is('a')) $this = $this.closest('a');

          $('.jp-play-me').not($this).removeClass('active');
          $('.jp-play-me').parent('li').not($this.parent('li')).removeClass('active');

          $this.toggleClass('active');
          $this.parent('li').toggleClass('active');
          if( !$this.hasClass('active') ){
            myPlaylist.pause();
          }else{
            var i = Math.floor(Math.random() * (1 + 7 - 1));
            myPlaylist.play(i);
          }         
        });

        $(document).on('click','.jp-play-the-song',function(e){
          var i=$('.jp-play-the-song').index(this);
          e&&e.preventDefault();
          var $this=$(e.target);
          if (!$this.is('a')) $this = $this.closest('a');

          $('.jp-play-the-song').not($this).removeClass('active');
          $('.jp-play-the-song').parent('div').not($this.parent('div')).removeClass('active');

          $this.toggleClass('active');
          $this.parent('div').toggleClass('active');
          if( !$this.hasClass('active') ){
            myPlaylist.pause();
          }else{          
            myPlaylist.play(i);
          }
          });
          },
          error:function(jqXHR){
            alert("发生错误:"+jqXHR.status);
          }
        });
});
