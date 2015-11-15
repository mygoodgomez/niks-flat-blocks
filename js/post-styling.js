$ = jQuery;

window.colorOrder = ['red','blue','green','yellow','charcoal','purple','grey'];
window.colors = {
    red:'#e74c3c',
    blue:'#3498db',
    green:'#2ecc71',
    yellow:'#f1c40f',
    charcoal:'#34495e',
    purple:'#9b59b6',
    grey:'#95a5a6',
    chalk:'#ecf0f1'
};


$(function() {
    setPostsColors();
});

function setPostsColors() {
    var numColors = window.colorOrder.length;
    console.log(numColors);
    $('.post').each(function(i) {
        console.log(i % numColors );
        var colorToSet = window.colorOrder[i % numColors];
        console.log(colorToSet);
        $(this).addClass(colorToSet);
    });
}
