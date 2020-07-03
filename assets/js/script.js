$(document).ready(function(){
    $('body').on('keydown','input', function(e){
        //backspace
        if(e.keyCode == 8){
            $("#fourChord").text("4")            
            $("#fiveChord").text("5")
        //a
        } else if(e.keyCode == 65){
            $("#fourChord").text("D")
            $("#fiveChord").text("E")
        //b
        } else if(e.keyCode == 66){
            $("#fourChord").text("E")
            $("#fiveChord").text("F#")
        //c
        } else if(e.keyCode == 67){
            $("#fourChord").text("F")
            $("#fiveChord").text("G")
        //d
        } else if(e.keyCode == 68){
            $("#fourChord").text("G")
            $("#fiveChord").text("A")
        //e
        } else if(e.keyCode == 69){
            $("#fourChord").text("A")
            $("#fiveChord").text("B")
        //f
        } else if(e.keyCode == 70){
            $("#fourChord").text("B")
            $("#fiveChord").text("C") 
        //g
        } else if(e.keyCode == 71){
            $("#fourChord").text("C")
            $("#fiveChord").text("D")
        //#
        } else if(e.keyCode == 51){
            console.log("#HASHTAG/POUND")
        }
    });   
});