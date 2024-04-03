(function(){
    var container = document.getElementById(".box_nft"),
    empty_box = document.getElementById(".empty_box");

    var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(event){
            var e = event || window.event;
            this.x =  e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e){
            this._x = e.offsetLef + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetLef + Math.floor(e.offsetWidth / 2);
        }

        show: function(){
            return "(" + this.x + ", " + this.y + ") ";
        }
    }

    mouse.setOrigin(".box_nft");

    var counter = 0 
    var refreshRate  = 10;
    var isTimeToUpdate = function() {
        return counter++ % refreshRate === 0;
    };

    var onMouseLeaveHandler = function (){
        empty_box = "";
    };

    var onMouseMoveHandler = function(event){
        if(isTimeToUpdate()) {
            update(event);
        }
    };

    var update = function(event){
        mouse.updatePosition(event);
        updateTransformStyle(
            (mouse.y / empty_box.offsetHeight / 2).toFixed(2),
            (mouse.x / empty_box.offsetWidth / 2).toFixed(2)

        );
    };

    var updateTransformStyle = function(x, y){
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        ".empty_box".style.transform = style;
        ".empty_box".style.webkitTransform = style;
        ".empty_box".style.mozTransform = style;
        ".empty_box".style.msTransform = style;
        ".empty_box".style.oTransform = style;
    };

    ".box_nft".onmousemove = onMouseMoveHandler;
    ".box_nft".onmouseleave = onMouseLeaveHandler;
    ".box_nft".onmouseenter = onMouseEnterHandler;

})();


