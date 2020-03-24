$(document).ready(function(){

    var magicball = {};
    magicball.answers = ["yes", "no", "maybe so", "ask again", "choose your own destiny"];
    magicball.ask = function () {
        $("#answer").fadeIn(4000);
        var randnum = Math.floor(Math.random() * this.answers.length);
        $("#8ball").effect( "shake" );
        $("#answer").text( this.answers[randnum] );
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
    };

    $("#answer").hide();

    var onClick = function() {

        $("#answer").hide();

        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

        //wait half a second before showing prompt
        setTimeout(
            function() {
                //show prompt
                var question = prompt("Ask a YES or NO question!");
                magicball.ask();
            }, 500);
    };

    $("#questionButton").click( onClick );

});
