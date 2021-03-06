var invertedRacer = {};

invertedRacer.Boot = function (game) {};

invertedRacer.Boot.prototype = {
    preload: function() {
        this.load.image('titlescreen', 'assets/titlescreen.png');
        this.load.image('startGameText', 'assets/startGameText.png');
        this.load.image('candyVan', 'assets/Candy_van.png');
        
        this.load.image('wKey', 'assets/w key.png');
        this.load.image('sKey', 'assets/s key.png');
        this.load.image('dKey', 'assets/d key.png');
        this.load.image('aKey', 'assets/a key.png');
    },
    
    create: function() {
        this.input.maxPointers = 1;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 343;
        this.scale.minHeight = 470;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.stage.forcePortrait = true;
        this.scale.setScreenSize(true);

        this.input.addPointer();
        
        this.state.start('Preloader');

    }
};
