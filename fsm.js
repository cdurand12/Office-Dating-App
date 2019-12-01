var fsm = [];
var WT = ["Jan", "Phyllis"];
var WA = ["Pam", "Meredith", "Erin", "Kelly"];
var WS = ["Ann", "Angela", "Holly"];
var MT = ["Jim", "Dwight", "Darryl"];
var MA = ["Stanley", "Kevin", "Creed" ];
var MS = ["Michael", "Ryan", "Toby"];

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
	whoiam(fsm);
}

/*
function option5(which, choices){
	var x = document.getElementById(which);
	x.style.color = "red";
	fsm [4] = choices;
}
function option6(which, choices){
	var x = document.getElementById(which);
	x.style.color = "red";
	fsm [5] = choices;
	//window.alert(fsm);
	whoami(fsm);
}
*/
/*function myFunction() {
    var myWindow = window.open("", "MsgWindow", "width=200, height=100");
    myWindow.document.write("<img src='img'> This is 'MsgWindow'. I am 200px wide and 100px tall!");
}*/
function whoiam(fsm){
	if(fsm[0] == "W"){
		if(fsm[1] == "T"){
			var rando = Math.floor(Math.random() * 2);
			//window.alert(WT[rando]);
    			var myWindow = window.open("", "MsgWindow", "width=200, height=100");
    			myWindow.document.write('<img src="1.jpg">'); 
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

/*
function whoami(fsm){
	if(fsm[0] == "W"){
		if(fsm[1]== "T"){
			if (fsm[2] == "H"){
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
						if(fsm[5]== "Bl"){
							window.alert("Angela");
						}else if(fsm[5] == "Br"){
							window.alert("");
						}else{

						}
					}else{
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{
						
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else{
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}
			}else if(fsm[2] == "D"){
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else{
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}
			}else{
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else{
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}
			}
		}else if(fsm[1] == "A"){
			if (fsm[2] == "H"){
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else{
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}
			}else if(fsm[2] == "D"){
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else{
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}
			}else{
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else{
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}
			}
		}else{
			if (fsm[2] == "H"){
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else{
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}
			}else if(fsm[2] == "D"){
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else{
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}
			}else{
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else if (fsm[3] == "C"){
					
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else{
					
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}
			}
		}
	}else if (fsm[0] == "M"){
		if(fsm[1]== "T"){
			if (fsm[2] == "H"){
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else{
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}
			}else if(fsm[2] == "D"){
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else{
					
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}
			}else{
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else{
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}
			}
	
		}else if(fsm[1] == "A"){

			if (fsm[2] == "H"){					
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else if (fsm[3] == "C"){
					
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else{
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}
			}else if(fsm[2] == "D"){
				
				if (fsm[3] == "E"){
					
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else if (fsm[3] == "C"){
					
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else{
					
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}
			}else{
				
				if (fsm[3] == "E"){
					
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else if (fsm[3] == "C"){
					
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else{
					
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}
			}
		}else{
			if (fsm[2] == "H"){
				
				if (fsm[3] == "E"){
					
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else if (fsm[3] == "C"){
					
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else{
					
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}
			}else if(fsm[2] == "D"){
				if (fsm[3] == "E"){
					
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else if (fsm[3] == "C"){
					
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else{
					
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}
			}else{
				if (fsm[3] == "E"){
					
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else if (fsm[3] == "C"){
					
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}else{
					
					if(fsm[4] == "C"){
					
						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}else{

						if(fsm[5]== "Bl"){

						}else if(fsm[5] == "Br"){

						}else{

						}
					}
				}
			}
		}	
	}
}
*/
