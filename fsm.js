var fsm = [];
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
}
function option5(which, choices){
	var x = document.getElementById(which);
	x.style.color = "red";
	fsm [4] = choices;
	window.alert(fsm);
}

/*
function whoami(){
	if(fsm[0] == "W"){
		if(fsm[1]== "T"){
			if (fsm[2] == "H"){
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else{
					if(fsm[4] == "C"){
					
					}else{

					}
				}
			}else if(fsm[2] == "D"){
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else{
					if(fsm[4] == "C"){
					
					}else{

					}
				}
			}else{
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else{
					if(fsm[4] == "C"){
					
					}else{

					}
				}
			}
		}else if(fsm[1] == "A"){
			if (fsm[2] == "H"){
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else{
					if(fsm[4] == "C"){
					
					}else{

					}
				}
			}else if(fsm[2] == "D"){
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else{
					if(fsm[4] == "C"){
					
					}else{

					}
				}
			}else{
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else{
					if(fsm[4] == "C"){
					
					}else{

					}
				}
			}
		}else{
			if (fsm[2] == "H"){
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else{
					if(fsm[4] == "C"){
					
					}else{

					}
				}
			}else if(fsm[2] == "D"){
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else{
					if(fsm[4] == "C"){
					
					}else{

					}
				}
			}else{
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else if (fsm[3] == "C"){
					
					if(fsm[4] == "C"){
					
					}else{

					}
				}else{
					
					if(fsm[4] == "C"){
					
					}else{

					}
				}
			}
		}
	}else if (fsm[0] == "M"){
		if(fsm[1]== "T"){
			if (fsm[2] == "H"){
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else{
					if(fsm[4] == "C"){
					
					}else{

					}
				}
			}else if(fsm[2] == "D"){
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else{
					
					if(fsm[4] == "C"){
					
					}else{

					}
				}
			}else{
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else if (fsm[3] == "C"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else{
					if(fsm[4] == "C"){
					
					}else{

					}
				}
			}
	
		}else if(fsm[1] == "A"){

			if (fsm[2] == "H"){					
				if (fsm[3] == "E"){
					if(fsm[4] == "C"){
					
					}else{

					}
				}else if (fsm[3] == "C"){
					
					if(fsm[4] == "C"){
					
					}else{

					}
				}else{
					if(fsm[4] == "C"){
					
					}else{

					}
				}
			}else if(fsm[2] == "D"){
				
				if (fsm[3] == "E"){
					
					if(fsm[4] == "C"){
					
					}else{

					}
				}else if (fsm[3] == "C"){
					
					if(fsm[4] == "C"){
					
					}else{

					}
				}else{
					
					if(fsm[4] == "C"){
					
					}else{

					}
				}
			}else{
				
				if (fsm[3] == "E"){
					
					if(fsm[4] == "C"){
					
					}else{

					}
				}else if (fsm[3] == "C"){
					
					if(fsm[4] == "C"){
					
					}else{

					}
				}else{
					
					if(fsm[4] == "C"){
					
					}else{

					}
				}
			}
		}else{
			if (fsm[2] == "H"){
				
				if (fsm[3] == "E"){
					
					if(fsm[4] == "C"){
					
					}else{

					}
				}else if (fsm[3] == "C"){
					
					if(fsm[4] == "C"){
					
					}else{

					}
				}else{
					
					if(fsm[4] == "C"){
					
					}else{

					}
				}
			}else if(fsm[2] == "D"){
				if (fsm[3] == "E"){
					
					if(fsm[4] == "C"){
					
					}else{

					}
				}else if (fsm[3] == "C"){
					
					if(fsm[4] == "C"){
					
					}else{

					}
				}else{
					
					if(fsm[4] == "C"){
					
					}else{

					}
				}
			}else{
				if (fsm[3] == "E"){
					
					if(fsm[4] == "C"){
					
					}else{

					}
				}else if (fsm[3] == "C"){
					
					if(fsm[4] == "C"){
					
					}else{

					}
				}else{
					
					if(fsm[4] == "C"){
					
					}else{

					}
				}
			}
		}	
	}
}
*/