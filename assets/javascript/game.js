var saber       = new Audio("assets/music/sabersounds/coolsaber.wav");
var darkMusic   = new Audio("assets/music/themes/immolation.mp3");
var battle      = new Audio("assets/music/themes/battle.mp3");
var slowSaber   = new Audio("assets/music/sabersounds/slowSabr.wav");
// var yoda     = new Audio("http://www.yodajeff.com/multimedia/sounds/episode5/use_the_force.wav");
// var emperor  = new Audio("assets/music/voices/emperor.mp3");
var vader       = new Audio("assets/music/voices/vader.wav");
var maul        = new Audio("assets/music/sabersounds/double bladed twirl.wav")
var luke        = new Audio("assets/music/voices/luke.wav");
var obi         = new Audio("assets/music/sabersounds/fx4.wav");
var vader2      = new Audio("assets/music/voices/haveyou.wav");
var healthPlayer = 100;
var healthComputer = 100;

$(document).ready(function(){
  $(".icons").hide();
  $(".darkCharacters").hide();
  $(".lightCharacters").hide();
  $(".healthVader").hide();
  $(".healthMaul").hide();
  $(".healthObi").hide();
  $(".healthLuke").hide();

  saber.play();
  darkMusic.play();
//Click function
  $(document).click(function(){

    //Changing H1 to Second Screen Tag (Still stylized on second page)
    document.getElementById("TopTag").innerHTML = "Choose Your Side";
    
    $(".icons").show();
    $("h2").hide();
    darkMusic.pause();
    battle.play(); 

    //Light Side Icon Hover
    $("#lightSideIcon").hover(function(){
      $("h1").hide();
      document.body.style.backgroundImage = "url(assets/images/light_side/light_side.gif)";
    });

    //Dark Side Icon Hover
    $("#darkSideIcon").hover(function(){
      $("h1").hide();
      document.body.style.backgroundImage = "url(assets/images/dark_side/dark_side.gif)";  
    });


  });
//Click function
    //On Click Emperor
    $("#darkSideIcon").click(function(){
      slowSaber.play();
      $("#darkSideIcon").hide();
      $("#lightSideIcon").hide();
      $(".darkCharacters").show();
    });
    //On Click Yoda
    $("#lightSideIcon").click(function(){
      slowSaber.play();
      $("#lightSideIcon").hide();
      $("#darkSideIcon").hide();
      $(".lightCharacters").show();
    });

    $("#maulIcon").hover(function(){
      document.body.style.backgroundImage = "url(assets/images/characterBackground/dark.jpg)";  
    });

    $("#vaderIcon").hover(function(){
      document.body.style.backgroundImage = "url(assets/images/characterBackground/dark.jpg)";  
    });

    $("#obiIcon").hover(function(){
      document.body.style.backgroundImage = "url(assets/images/characterBackground/light.jpg)";  
    });

    $("#lukeIcon").hover(function(){
      document.body.style.backgroundImage = "url(assets/images/characterBackground/light.jpg)";  
    });

    $("#vaderIcon").click(function(){
      vader.play();
      $("#maulIcon").hide();
      $(".lightCharacters").show();
      $("#obiIcon").hide();
      $(".playerLeft").show();
      document.querySelector("#healthComputer").innerHTML = "Health: " + healthComputer;
      document.querySelector("#healthPlayer").innerHTML = "Health: " + healthPlayer;
      });

    $("#maulIcon").click(function(){
      maul.play();
      $("#vaderIcon").hide();
      $(".lightCharacters").show();
      $("#lukeIcon").hide();
      $(".playerRight").show();
      document.querySelector("#healthComputer").innerHTML = "Health: " + healthComputer;
      document.querySelector("#healthPlayer").innerHTML = "Health: " + healthPlayer;
    });

    $("#obiIcon").click(function(){
      obi.play();
      $("#lukeIcon").hide();
      $(".darkCharacters").show();
      $("#vaderIcon").hide();
      $(".playerRight").show();
      document.querySelector("#healthComputer").innerHTML = "Health: " + healthComputer;
      document.querySelector("#healthPlayer").innerHTML = "Health: " + healthPlayer;

    });

    $("#lukeIcon").click(function(){
      luke.play();
      $("#obiIcon").hide();
      $(".darkCharacters").show();
      $("#maulIcon").hide();
      $(".playerLeft").show();
      luke.onended = function(){
        vader2.play();
      };
      document.querySelector("#healthComputer").innerHTML = "Health: " + healthComputer;
      document.querySelector("#healthPlayer").innerHTML = "Health: " + healthPlayer;
    });
    
});
