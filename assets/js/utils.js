function printLine(length) {
	let line = "";
	let tempLength;
	length = prompt("Please, enter the length of the line");
	tempLength = length;
	while (length > 0)
	{
		line += "*";
		length --;
	}
	console.log("Input length: " + tempLength + "\n\n" + "Shape:" + "\n" + line);
}

function printBox(width, height) {
	
	let line = "";
	let tempHeight, tempWidth ;
	height = prompt("Please, enter the height of the rectangle");
	width = prompt("Please, enter the width of the rectangle");
	tempHeight = height;
	tempWidth = width;
	
	while (tempHeight > 0)
	{
		tempWidth = width;
		while (tempWidth > 0)
		{
			
			line += "*";
			tempWidth --;
		}
		line += "\n";
		tempHeight--;
	}
	console.log("Input width: " + width + "\n" + "Input height: " + height + "\n\n" + "Shape:" + "\n" + line);
}
	
    



function printCheckerboard(width, height) {
	
	let line = "";
	let tempHeight, tempWidth ;
	let i = 0;
	height = prompt("Please, enter the height of the rectangle");
	width = prompt("Please, enter the width of the rectangle");
	tempHeight = height;
	tempWidth = width;
	
	while (tempHeight > 0)
	{
		
		tempWidth = width;
		if (width % 2 == 0)
			tempWidth = width / 2;
		else
		{
			if (i % 2 == 0)
				tempWidth = parseInt(width / 2) + 1;
			else
				tempWidth = parseInt(width / 2);
		}
			
		while (tempWidth > 0)
		{
			
			if (i % 2 == 0)
				line += "* ";
			else
				line += " *";
				
			tempWidth --;
			
		}
			line += "\n";
			tempHeight--;
			i++;
	}
	console.log("Input width: " + width + "\n" + "Input height: " + height + "\n\n" + "Shape:" + "\n" + line);
}



function printCross(length) {
	
	let i, k, line;
	
	i = 0;
	line = "*";
	
	length = prompt("Please, enter the length of the cross");
	k = length;
	
	if (length % 2 == 0)
	{
	
		//upper part of cross
		while (i < length/2)
		{
			for (let j = 0; j < (k - 1); j++)
				line += " ";
			line += "*\n";
			for (let m = 0; m < (i + 1); m++)
			{
				if (m == (length/2 - 1))
					line += "*";
				else
					line += " ";
			}
		
			if (i < (length/2 - 1))
				line += "*";
			k -= 2;
			i++;
		}
	
		//lower part of cross
		k = 3;
		line += " *\n";
	
		while (i > 1)
		{
			for (let m = 0; m < (i - 2); m++)
				line += " ";
			line += "*";
			for (let j = 0; j < k; j++)
				line += " ";
			line += "*\n";
		
			k += 2;
			i--;
		}
	}
	
	else
	{
		//upper part of cross
		while (i < parseInt(length/2))
		{
			for (let j = 0; j < (k - 1); j++)
				line += " ";
			line += "*\n";
			for (let m = 0; m < (i + 1); m++)
				line += " ";
			
			line += "*";
			k -= 2;
			i++;
		}
		
		//lower part of cross
		line += "\n";
		while (i > 0)
		{
			for (let m = 0; m < (i - 1); m++)
				line += " ";
			line += "*";
			for (let j = 0; j < (k + 1); j++)
				line += " ";
			line += "*\n";
			k += 2;
			i--;
		}
			
	}
		
	console.log("Input length: " + length + "\n\n" + "Shape:" + "\n" + line);
}
		



function printLowerTriangle(length) {
    
	let k = 0;
	let line = "";
	
	length = prompt("Please, enter the length of the triangle");
	
	while (k < length)
	{
		for (let i = 0; i < (k + 1); i++)
			line += "*";
		line += "\n";
		k++;
	}
	console.log("Input length: " + length + "\n\n" + "Shape:" + "\n" + line);
}

function printUpperTriangle(length) {
    
	let m = 0;
	let line = "";
	
	length = prompt("Please, enter the length of the triangle");
	let k = length;
	
	while (k > 0)
	{
		for (let j = 0; j < m; j++)
			line += " ";
		
		for (let i = 0; i < k; i++)
			line += "*";
		
		line += "\n";
		
		m++;
		k--;
	}
	console.log("Input length: " + length + "\n\n" + "Shape:" + "\n" + line);
}

function printUpsideDownTrapezoid(width, height) {
    
	width = prompt("Please, enter the width of the trapezoid");
	height = prompt("Please, enter the height of the trapezoid");
	let line = "";
	
	if (width / 2 < height)
		console.log ("Input width: " + width + "\n" + "Input height: " + height + "\n\n" + "Impossible shape!");
	
	else
	{
		let h = 0;
		let w, sw;
		w = sw = width;
		
		while (h < height)
		{
			for (let i = width; i > sw; i--)
				line += " ";
			for (let i = 0; i < w; i++)
				line += "*";
			
			line += "\n";
			
			h++;
			sw--;
			w -= 2;
		}
		
		console.log("Input width: " + width + "\n" + "Input height: " + height + "\n\n" + "Shape:" + "\n" + line);
	}
	
	
		
}