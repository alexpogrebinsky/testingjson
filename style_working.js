

var xhr = new XMLHttpRequest();


xhr.onload = function getThings() {
    if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);

        var newContent = "";
        for (var i = 0; i < responseObject.things.length; i++) {
            newContent += '<div class="test">';
            newContent += '<br> <p class="loc">' + '<b>' + responseObject.things[i].location + '</p></b>';
            newContent += '<p class="desc">    ' + responseObject.things[i].description+'</p>';
            newContent += '<img src="' + responseObject.things[i].pictures + '"';
            newContent += '</div>';
        }

        document.getElementById('content').innerHTML = newContent;
    }
};



xhr.open('GET', './data/entities.json', true);
xhr.send(null);

$(function () {
    $("#btn1").click(function () {
        $(".content").fadeIn(2000);

    });
});