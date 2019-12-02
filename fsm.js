var fsm = [];
/*
var WT = ["Jan", "Phyllis"];
var WA = ["Pam", "Meredith", "Erin", "Kelly"];
var WS = ["Ann", "Angela", "Holly"];
var MT = ["Jim", "Dwight", "Darryl"];
var MA = ["Stanley", "Kevin", "Creed" ];
var MS = ["Michael", "Ryan", "Toby"];
*/

function option1(which, choices){
	var x = document.getElementById(which);
	x.style.color = "red";
	fsm [0] = choices;
}
function option2(which, choices){
	var x = document.getElementById(which);
	x.style.color = "red";
	fsm [1] = choices;
}
function option3(which, choices){
	var x = document.getElementById(which);
	x.style.color = "red";
	fsm [2] = choices;
}
function option4(which, choices){
	var x = document.getElementById(which);
	x.style.color = "red";
	fsm [3] = choices;
	whoami(fsm);
}

/*function myFunction() {
    var myWindow = window.open("", "MsgWindow", "width=200, height=100");
    myWindow.document.write("<img src='img'> This is 'MsgWindow'. I am 200px wide and 100px tall!");
}*/
/*
function whoiam(fsm){
	if(fsm[0] == "W"){
		if(fsm[1] == "T"){
			var rando = Math.floor(Math.random() * 2);
			window.alert(WT[rando]);
			//var name  = "1.jpg";
    			//var myWindow = window.open("", "MsgWindow", "width=1000, height=1000");
    			myWindow.document.write('<img src="${name}">'); 
		}else if (fsm[1] == "A"){
			var rando = Math.floor(Math.random() * 4);
			window.alert(WA[rando]);
		}else{
			var rando = Math.floor(Math.random() * 3);
			window.alert(WS[rando]);	
		}
	}else{
		if(fsm[1] == "T"){
			var rando = Math.floor(Math.random() * 3);
			window.alert(MT[rando]);
		
		}else if (fsm[1] == "A"){
			var rando = Math.floor(Math.random() * 3);
			window.alert(MA[rando]);

		}else{
			var rando = Math.floor(Math.random() * 3);
			window.alert(MS[rando]);
		}

	}
		
}
*/

function whoami(fsm){
	if(fsm[0] == "W"){
		if(fsm[1]== "T"){
			if (fsm[2] == "H"){
				if (fsm[3] == "E"){
					window.alert("JAN!!!!");
				}else if (fsm[3] == "C"){
					window.alert("JAN!!!!");
				}else{
					window.alert("JAN!!!!");
				}
			}else if(fsm[2] == "D"){
				if (fsm[3] == "E"){
					window.alert("JAN!!!!");
				}else if (fsm[3] == "C"){
					window.alert("Phyllis!!!!");
				}else{
					window.alert("Phyllis!!!!");
				}
			}else{
				if (fsm[3] == "E"){
					window.alert("Phyllis!!!!");
				}else if (fsm[3] == "C"){
					window.alert("Phyllis!!!!");
				}else{
					window.alert("Phyllis!!!!");
				}
			}
		}else if(fsm[1] == "A"){
			if (fsm[2] == "H"){
				if (fsm[3] == "E"){
					window.alert("Pam!!!!");
				}else if (fsm[3] == "C"){
					window.alert("Erin!!!!");
				}else{
					window.alert("Pam!!!!");
				}
			}else if(fsm[2] == "D"){
				if (fsm[3] == "E"){
					window.alert("Pam!!!!");
				}else if (fsm[3] == "C"){
					window.alert("Kelly!!!!");
				}else{
					window.alert("Erin!!!!");
				}
			}else{
				if (fsm[3] == "E"){
					window.alert("Pam!!!!");
				}else if (fsm[3] == "C"){
					window.alert("Meredith!!!!");
				}else{
					window.alert("Erin!!!!");
				}
			}
		}else{
			if (fsm[2] == "H"){
				if (fsm[3] == "E"){
					window.alert("Angela!!!!");
				}else if (fsm[3] == "C"){
					window.alert("Angela!!!!");
				}else{
					window.alert("Holly!!!!");
				}
			}else if(fsm[2] == "D"){
				if (fsm[3] == "E"){
					window.alert("Ann!!!!");
				}else if (fsm[3] == "C"){
					window.alert("Angela!!!!");
				}else{
					window.alert("Holly!!!!");
				}
			}else{
				if (fsm[3] == "E"){
					window.alert("Ann!!!!");
				}else if (fsm[3] == "C"){
					window.alert("Ann!!!!");
				}else{
					window.alert("Holly!!!!");
				}
			}
		}
	}else if (fsm[0] == "M"){
		if(fsm[1]== "T"){
			if (fsm[2] == "H"){
				if (fsm[3] == "E"){
					window.alert("Dwight!!!!");
				}else if (fsm[3] == "C"){
					window.alert("Dwight!!!!");
				}else{
					window.alert("Jim!!!!");
				}
			}else if(fsm[2] == "D"){
				if (fsm[3] == "E"){
					window.alert("Jim!!!!");
				}else if (fsm[3] == "C"){
					window.alert("Dwight!!!!");
				}else{
					window.alert("Darryl!!!!");
				}
			}else{
				if (fsm[3] == "E"){
					window.alert("Darryl!!!!");
				}else if (fsm[3] == "C"){
					window.alert("Dwight!!!!");
				}else{
					window.alert("Jim!!!!");
				}
			}
	
		}else if(fsm[1] == "A"){

			if (fsm[2] == "H"){					
				if (fsm[3] == "E"){
					window.alert("Creed!!!!");
				}else if (fsm[3] == "C"){
					window.alert("Creed!!!!");
				}else{
					window.alert("Creed!!!!");
				}
			}else if(fsm[2] == "D"){
				if (fsm[3] == "E"){
					window.alert("Stanley!!!!");
				}else if (fsm[3] == "C"){
					window.alert("Stanley!!!!");
				}else{
					window.alert("Kevin!!!!");
				}
			}else{
				
				if (fsm[3] == "E"){
					window.alert("Creed!!!!");
				}else if (fsm[3] == "C"){
					window.alert("Stanley!!!!");
				}else{
					window.alert("Creed!!!!");
				}
			}
		}else{
			if (fsm[2] == "H"){
				if (fsm[3] == "E"){
					window.alert("Michael!!!!");
				}else if (fsm[3] == "C"){
					window.alert("Michael!!!!");
				}else{
					window.alert("Toby!!!!");
				}
			}else if(fsm[2] == "D"){
				if (fsm[3] == "E"){
					window.alert("Ryan!!!!");
				}else if (fsm[3] == "C"){
					window.alert("Michael!!!!");
				}else{
					window.alert("Toby!!!!");
				}
			}else{
				if (fsm[3] == "E"){
					window.alert("Ryan!!!!");
				}else if (fsm[3] == "C"){
					window.alert("Toby!!!!");
				}else{
					window.alert("Michael!!!!");
				}
			}
		}	
	}
}

