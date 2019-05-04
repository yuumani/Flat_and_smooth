enchant();
window.onload = function() {
    var game = new Game(600,450);
    
    var tile =16;//タイルのサイズ (デフォは16)
    game.preload('../lib/map0.gif','../lib/chara0.gif','pad.png','../lib/icon.gif','../lib/clear.png','../lib/gameover.png');
    game.fps = 60;
    game.onload = function() {      
        /*var m_data  = new Array();  //表示用マップ領域
        var m_hit   = new Array();  //衝突判定用マップ領域
        //マップの初期化
        for (i = 0; i < 19; i++){
            m_data[i] = new Array();
            m_hit[i] = new Array();
            for (ii = 0; ii < 19; ii++){
                var flag=2;
                if(i>0 && i<18 && ii>0 && ii<18){
                    if(i%2 || ii%2){
                    flag=1; 
                    }
                }
                m_data[i][ii] = flag;
                m_hit[i][ii]  = flag-1; //壁の時１、壁以外の時0を入れる。
            }       
        }
         
        //迷路作成
        dx = [1,0,-1,0];
        dy = [0,1,0,-1];
        for(i = 2;i < 18; i+=2){
            for(ii = 2;ii < 18; ii+=2){
                var r=3;
                if(i==2){r=4;}  //一番上のみ上の方向を追加。
                var rand = Math.floor(Math.random()*r);
                m_data[i+dy[rand]][ii+dx[rand]] = 2;
                m_hit[i+dy[rand]][ii+dx[rand]] = 1;
                //指定した方向の通路を壁で埋める。
            }
        }
         
        var map = new Map(16, 16);
        map.image = game.assets['map0.gif'];
        map.loadData(m_data);
        map.collisionData = m_hit;
        game.rootScene.addChild(map);
        */

       
       var backgroundMap = new Map(16,16);
       backgroundMap.image = game.assets['../lib/map0.gif'];
       backgroundMap.loadData([
        [144,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,146],
        [160,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,162],
        [160,0,0,0,0,0,0,0,7,0,7,7,0,0,0,0,0,0,0,162],
        [160,7,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,162],
        [160,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,162],
        [160,0,0,0,0,0,0,0,7,7,0,0,7,0,0,0,0,0,0,162],
        [160,0,0,0,0,0,0,0,7,0,0,0,0,0,0,7,0,0,0,162],
        [160,0,0,0,0,0,0,0,0,0,0,0,7,0,7,0,0,0,0,162],
        [160,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,162],
        [160,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,162],
        [160,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,162],
        [160,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,162],
        [160,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,162],
        [160,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,7,0,7,162],
        [160,0,0,0,7,0,0,0,0,0,0,7,7,0,0,0,0,0,0,162],
        [160,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,162],
        [160,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,162],
        [160,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,162],
        [160,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,51,162],
        [176,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,178]
    ],[
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    ]);
    backgroundMap.collisionData = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
        [1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
        [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1],
        [1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
        [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];
    
       
         game.rootScene.addChild(backgroundMap);
        //Ｐａｄ設定
        var pad = new Pad(); // Padを追加
        pad.x = 0; // x座標
        pad.y = 320; // y座標
        game.rootScene.addChild(pad); // シーンに追加
         
        
        var goal = new Sprite(16,16)
            goal.image = game.assets['../lib/map0.gif'];
            goal.x =288;
            goal.y =288;
            goal.frame = 1;

            goal.addEventListener('enterframe',function() {
                if (this.within(player,16)) {
                    game.frame=0;
                    game.pushScene(clearScene);                                       
                    
                    
                }
            });
            game.rootScene.addChild(goal);
            
            var defalt= 40;//タイマーの時間
            var willdefalt= 20;
            var shortcut = new Sprite(16,16)
            shortcut.image = game.assets['../lib/map0.gif'];
            shortcut.x =176;
            shortcut.y =64;
            shortcut.frame = 1;

            shortcut.addEventListener('enterframe',function() {
                if (this.within(player,16)) {
                    defalt=defalt*2                                      
                    
                    
                }
            });

            game.rootScene.addChild(shortcut);
//gameoverscene
           var gameOverScene = new Scene();
            gameOverScene.backgroundColor = 'black';
            var gameoverImage = new Sprite(189, 97);                   // スプライトを作る
            gameoverImage.image = game.assets['../lib/gameover.png'];  // ゲームオーバー画像を設定
            gameoverImage.x = 200;                                      // 横位置調整
            gameoverImage.y = 112;                                     // 縦位置調整
            gameOverScene.addChild(gameoverImage);                             // シーンに追加
            
            // スコアラベル設定
            var label = new Label(  '残念');            // ラベルを作る スコアを代入
            label.textAlign = 'center';                                // 文字を中央寄せ
            label.color = '#fff';                                      // 文字を白色に
            label.x = 0;                                               // 横位置調整
            label.y = 60;                                              // 縦位置調整
            label.font = '40px sans-serif';                            // 40pxのゴシック体にする
            gameOverScene.addChild(label);    
                                            // シーンに追加
                                            /*
            // リトライラベル(ボタン)設定
            var retryLabel = new Label('もう一度遊ぶ');                  // ラベルを作る
            retryLabel.color = '#fff';                                 // 文字を白色に
            retryLabel.x = 0;                                          // 横位置調整
            retryLabel.y = 300;                                        // 縦位置調整
            retryLabel.font = '20px sans-serif';                       // 20pxのゴシック体にする
            gameOverScene.addChild(retryLabel);               

             // リトライラベルにタッチイベントを設定
             retryLabel.addEventListener(Event.TOUCHSTART, function(e) {
                game.replaceScene(game.rootScene);// 現在表示しているシーンをタイトルシーンに置き換える
                //location.reload();
                });
            //return Scene;
        //};
        */
            /*
            var fin = new Label();
            fin.x = 500;
            fin.y =5;
            fin.color = 'red';
            fin.font = '14px "Arial"';
            fin.text = gameOver
            
            game.gameOverScene.addChild(fin);

*/
//clearScene
var clearScene = new Scene();
            //clearScene.backgroundColor = 'black';
            var clearImage = new Sprite(250, 97);                   // スプライトを作る
            clearImage.image = game.assets['../lib/clear.png'];  // ゲームオーバー画像を設定
            clearImage.x = 150;                                      // 横位置調整
            clearImage.y = 112;                                     // 縦位置調整
            clearScene.addChild(clearImage);                             // シーンに追加
            
            // スコアラベル設定
            var label = new Label( 'おめでとう');            // ラベルを作る スコアを代入
            label.textAlign = 'center';                                // 文字を中央寄せ
            label.color = 'orange';                                      // 文字を白色に
            label.x = 130;                                               // 横位置調整
            label.y = 60;                                              // 縦位置調整
            label.font = '40px sans-serif';                            // 40pxのゴシック体にする
            clearScene.addChild(label);    

            
        //replaytimer
        
        var untilreplay= 15; 
        var replaytimer = new Label();
        //var defalt =2;
             //変わるまでの時間
        replaytimer.x = 400;
        replaytimer.y =60;
        replaytimer.color = 'blue';
        replaytimer.font = '14px "Arial"';
        replaytimer.text = '0';
        
        replaytimer.on('enterframe',function(){
        replaytimer.text = ('リプレイまでの残り秒数<br>'+(untilreplay-((game.frame / game.fps)).toFixed(0)));
        });
        
        replaytimer.addEventListener('enterframe',function() {
            if (untilreplay==(game.frame / game.fps)) {
               // game.stop();
                //game.pullScene(game.rootScene);
               // game.replaceScene(game.rootScene);
               location.reload();
                //game.start();
              //  game.frame = 0;
               // enchant()
                
                
            }
        });
        clearScene.addChild(replaytimer);
                                            // シーンに追加
            /*// リトライラベル(ボタン)設定
            var retryLabel = new Label('もう一度遊ぶ');                  // ラベルを作る
            retryLabel.color = 'skyblue';        
            //retryLabel.backgroundColor = 'blue'                         // 文字を白色に
            retryLabel.x = 130;                                          // 横位置調整
            retryLabel.y = 300;                                        // 縦位置調整
            retryLabel.font = '20px sans-serif';                       // 20pxのゴシック体にする
            clearScene.addChild(retryLabel);               

             // リトライラベルにタッチイベントを設定
             retryLabel.addEventListener(Event.TOUCHSTART, function(e) {
                game.pushScene(rootScene);// 現在表示しているシーンをタイトルシーンに置き換える
                //location.reload();
                });
                */

        //プレイヤーの初期化
        var player = new Sprite(32,32);
        player.image = game.assets['../lib/chara0.gif'];
        player.x     = 120;
        player.y     = 32;
        game.rootScene.addChild(player);
        
         
        player.direction = 0;
        player.walk=0;
        var p_spd   = 16;            //プレイヤーの移動スピード (もとは１)
        var a_spd   = 300;            //プレイヤーのアニメーションスピード
 //当たり判定は完成
        player.addEventListener('enterframe', function(e) {
           this.xx = this.x;
           this.yy = this.y;
           // this.frame = 120;
           // this.moveTo(this.xx,this.yy);
            if (game.input.left){/*this.xx = this.x - p_spd;*/this.direction = 1;}
            if (game.input.right){/*this.xx = this.x + p_spd;*/this.direction = 2;}
            if (game.input.up) {/*this.yy = this.y - p_spd;*/this.direction = 3;}
            if (game.input.down){/* this.yy = this.y + p_spd;*/this.direction = 0;}
            
             
            //移動予定地this.xx,this.yyが壁かどうかを調べる。
            //当たり判定

            /*
           if(!backgroundMap.hitTest(this.xx+16,this.yy+16)){
               this.x=this.xx;this.y=this.yy
            };
             */
           var i= 0;
           //this.moveTo(120,120,100);

        
          while (!backgroundMap.hitTest(this.xx+16,this.yy+16)) {
            player.moveTo(this.xx,this.yy,10000,enchant.Easing.QUINT_EASEIN);
               if(this.direction==1) {
                this.xx = this.x - p_spd
               }
               if (this.direction==2) {
                this.xx = this.x + p_spd
               }
               if (this.direction==3) {
                   this.yy = this.y - p_spd
               }
               if (this.direction==0) {
                this.yy = this.y + p_spd
               }
              
               //this.moveTo(this.xx,this.yy);
            ///*
             
            };
           //*/
           
            

            if (!(game.frame % a_spd)){this.walk++;}
            if(this.walk == 3){this.walk = 0;}
            this.frame = this.direction*6 + this.walk;
        });

            
            

            var label = new Label();
            label.x = 500;
            label.y =5;
            label.color = 'red';
            label.font = '14px "Arial"';
            
          //  game.rootScene.addChild(label);
           
/*
         
        var stopwatch = 60;      //点数の初期化
        var time =
        var state = new Label();
        state.text = "Score:0";
        state.color = "#000000";
        state.x = 200;
        state.y = 350;
        game.rootScene.addChild(state);
*/


        var timer = new Label();
              //制限時間 改変
        var ransuu = Math.random()*10;
        if (ransuu<1) {
            defalt=30;
        }
        //var time =　(game.frame / game.fps).toFixed(2);
        timer.x = 400;
        timer.y =10;
        timer.color = 'red';
        timer.font = '14px "Arial"';
        timer.text = '0';
        timer.on('enterframe',function(){
        timer.text = ('残り秒数<br>'+(defalt-((game.frame / game.fps))).toFixed(2));
        });
        timer.addEventListener('enterframe',function() {
            if ((defalt==((game.frame / game.fps).toFixed(2)))) {
                game.frame=0;
                game.pushScene(gameOverScene);
                
                //game.stop();
            }
        });
        
        
        
        game.rootScene.addChild(timer);



    
        //replaytimer2
        var untilreplay2= 15; 
    var replaytimer2 = new Label();
    //var defalt =2;
         //変わるまでの時間
    replaytimer2.x = 400;
    replaytimer2.y =30;
    replaytimer2.color = 'blue';
    replaytimer2.font = '14px "Arial"';
    replaytimer2.text = '0';
    
    replaytimer2.on('enterframe',function(){
    replaytimer2.text = ('リプレイまでの残り秒数<br>'+(untilreplay2-((game.frame / game.fps)).toFixed(0)));
    });
    
    replaytimer2.addEventListener('enterframe',function() {
        if (untilreplay2==(game.frame / game.fps)) {
           // game.stop();
            //game.pullScene(game.rootScene);
            location.reload();
            //game.start();
          //  game.frame = 0;
           // enchant()
            
            
        }
    });
    gameOverScene.addChild(replaytimer2);





    }

    
    game.start();
}
