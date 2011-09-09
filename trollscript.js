var code = [],
	tape = [],
	tp = 0,
	cp = 0,
	outputCallback = function(output){ console.log(output); },
	inputCallback = function(){return "";}
	stdin = [],
	//           0      1      2      3      4      5      6      7      8      9
	opCodes = ["tro", "ooo", "ool", "olo", "oll", "loo", "lol", "llo", "lll", "ll."],
    ops = [ function(){ },
    		function(){ tp = (tp == (tape.length - 1) ? 0 : tp + 1); },
    		function(){ tp = (tp == 0 ? tape.length - 1 : tp - 1); },
    		function(){ tape[tp]++; },
    		function(){ tape[tp]--; },
    		function(){ outputCallback(String.fromCharCode(tape[tp])); },
    		function(){ 
		    	if(stdin.length == 0){
		    		var inpt = inputCallback();
		    		if(inpt){
		    			inpt += "";
		    			for(var i=0;i<inpt.length;i++){
		    				stdin.push(inpt[i]);
		    			}
		    		}
		    	}

		    	if(stdin.length == 0){
		    		tape[tp] = 0;
		    	}else{
		    		tape[tp] = stdin.shift();
		    	}
	    	},
    		function(){
	    		if(tape[tp] != 0){
	    			return;
	    		}
	    		var level = 1;
	    		while(cp < code.length){
	    			cp += 1;
	    			if(code[cp] == 7){
	    				level++
	    			}else if(code[cp] == 8){
	    				level--;
	    			}
	    			if(level == 0){
	    				break;
	    			}
	    		}
    		
    		},
    		function(){
	    		if(tape[tp] == 0){
	    			return;
	    		}
	    		var level = 1;
	    		while(cp >= 0){
	    			cp -= 1;
	    			if(code[cp] == 8){
	    				level++;
	    			}else if(code[cp] == 7){
	    				level--;
	    			}
	    			if(level == 0){
	    				break;
	    			}
	    		} 
    		},
    		function(){ }
    ];

for(var i=0;i<1024;i++){
	tape.push(0);
}

exports.compile = function(c){
	c = c.replace(/\s/gi, "").toLowerCase();
	for(var i=0;i<c.length;i+=3){
		var op = c.substr(i,3);
		var indx = opCodes.indexOf(op);
		if(indx != -1){
			code.push(indx);
		}
	}
}

exports.run = function(stdoutCbk, stdinCbk){
	if(typeof(stdoutCbk) == "function"){
		outputCallback = stdoutCbk;
		if(typeof(stdinCbk) == "function"){
			inputCallback = stdinCbk;
		}
	}
	while(cp < code.length){
		var op = code[cp];
		var func = ops[op];
		if(typeof(func) == "function"){
			func.call();
		}
		cp++;
	}
	cp = 0;
}

