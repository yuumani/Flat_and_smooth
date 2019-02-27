var LabelTime = Class.create(Label, {
    initialize: function(){
        Label.call(this);
        this.moveTo(SCREEN_WIDTH/2-64, SCREEN_HEIGHT/2-32);
        this.font = "64px 'メイリオ', 'Osaka' ";
        this.color = "#fff";
        this.opacity = 0.6;
        startTime = new Date().getTime();
        this.update = this.countdown;
    },
    reset: function(){
        startTime = new Date().getTime();
        this.update = this.countdown;
    },
    countdown: function(){
        nowTime = new Date().getTime();
        var leftTime = COUNTDOWN - (nowTime - startTime)/1000;
        leftTime = Math.round(leftTime);
        this.text = leftTime + "秒";
        if(leftTime &lt;= 0){
            this.update = this.stop;
        }
    },
    stop: function(){
    },
    onenterframe: function(){
        this.update();
    },
});