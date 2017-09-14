
var canvas;
var ctx;
var rot;

var c;
var lista = new Array();
var images = Array();


		
		
		

      function init()
      {
		  
		/*Mushantering */
		//document.onmousedown = mouseDown;
		/* Börjar med att läsa in diverse bilder */
		
	
		
		var bilder = "blue.png,red.png,green.png".split(",");
		
		for(i=0;i<bilder.length;i++)
		{
			img_c =new Image();
			img_c.src = bilder[i];
			images.push(img_c);
		}
		
		lista = new Array();
		var x = 0;
		var y = 0;
		for(j=0;j<13;j++)
		{
			var temp = new Array();
				for(i=0;i<13;i++)
				{
					var type = Math.round(Math.random()*2);
					var col = Math.floor(x/40);
					var row = Math.floor(y/40);
					c = new Cube(x,y,images[type],type,row,col);
					//lista[j][i] = c;
					temp.push(c);
					x+=40;
					if(x%13 == 0)
					{
						x = 0;
						y+=40;
					}
				}
				lista.push(temp);
		}
        canvas = document.createElement("canvas");
		canvas.onmousedown =mouseDown;
        canvas.setAttribute("width",520);
        canvas.setAttribute("height",520);
        ctx = canvas.getContext("2d");
        document.body.appendChild(canvas);
        rot = 0;
        setInterval("draw()",100);
      }

      function draw()
      {
        ctx.fillStyle = "#000000";
        ctx.fillRect(0,0,canvas.width,canvas.height);
		for(k=0;k<lista.length;k++)
		{
			for(j=0;j<lista[k].length;j++)
				lista[k][j].drawCube(ctx);
		}
       
	  }
	  
	  /* Callback mouseDown */
	  
	  function mouseDown(e)
	  {
		  var mx = e.pageX - canvas.offsetLeft;
		  var my = e.pageY - canvas.offsetTop;
		  
		  var col = Math.floor(mx/40);
		  var row = Math.floor(my/40);
		  
		  
		 
		 lista[row][col].kill();
		 var l = grannar(lista[row][col]);
		 alert(l.length);
		 
		 for(pp=0;pp<l.length;pp++)
		 {
				t = grannar(l[pp]);
				for(tt=0;tt<t.length;t++)
				{
					grannar(t[tt]);
				}
		 }
		// alert(lista[index].getRow()+" "+lista[index].getColumn());
		/*
		while(left(lista[row][col])!=0)
		{
			console.log("right in loop");
		}
		*/
		//right(lista[row][col],row,col);
		//north(lista[row][col],row,col);
	
		
		// grannar(lista[row][col],row,col);
		 
	  }
	  
	  function left(cube)
	  {
		  try
		  {
			  
			  if(cube.getType()== lista[cube.getRow()][cube.getColumn()-1].getType())
			  {
						lista[cube.getRow()][cube.getColumn()-1].kill();
						//right(lista[cube.getRow()][cube.getColumn()-1]);
						north(lista[cube.getRow()][cube.getColumn()-1]);
						//south(lista[cube.getRow()][cube.getColumn()-1]);
						return left(lista[cube.getRow()][cube.getColumn()-1]);
			  }
			  else
						return 0;
		  }
		  catch(error)
		  {
			  return 0;
		  }
	  }
	  
	  function right(cube)
	  {
		  try
		  {
			 if(lista[cube.getRow()][cube.getColumn()+1].getType()== cube.getType())
			 {
				 console.log("right");
				 lista[cube.getRow()][cube.getColumn()+1].kill();
				 
				 return right(lista[cube.getRow()][cube.getColumn()+1]);
			 }	
			 else
					return 0;
		  }
		  catch(error)
		  {
			  return 0;
		  }
	  }
	  
	  
	  function north(cube)
	  {
		  try
		  {
			 if(lista[cube.getRow()-1][cube.getColumn()].getType()== cube.getType())
			 {
				 
				 console.log("north");
				 lista[cube.getRow()-1][cube.getColumn()].kill();
				 
				 return north(lista[cube.getRow()-1][cube.getColumn()]);
			 }	
			 else
					return 0;
			 
		  }
		  catch(error)
		  {
			  return 0;
		  }
	  }
	  
	  function south(cube)
	  {
		  try
		  {
			 if(lista[cube.getRow()+1][cube.getColumn()].getType()== cube.getType())
			 {
				 
				 console.log("south");
				 lista[cube.getRow()+1][cube.getColumn()].kill();
				 
				 return north(lista[cube.getRow()+1][cube.getColumn()]);
			 }	
			 else
					return 0;
			 
		  }
		  catch(error)
		  {
			  return 0;
		  }
	  }
	  
	  function grannar(cube)
	  {
		  
		   var holder = new Array();
		   
		   
		   
		   
			try{
			
					if(lista[cube.getRow()-1][cube.getColumn()].getType()== cube.getType())
					{
						lista[cube.getRow()-1][cube.getColumn()].kill();
						holder.push(lista[cube.getRow()-1][cube.getColumn()]);
					}
				
			}
			catch(error){
				console.log(error);
			}
			
			try{
				
					if(lista[cube.getRow()+1][cube.getColumn()].getType()== cube.getType())
					{
						lista[cube.getRow()+1][cube.getColumn()].kill();
						holder.push(lista[cube.getRow()+1][cube.getColumn()]);
					}
			
			}
			catch(error){
				console.log(error);
			}
			
			try{
				
					if(lista[cube.getRow()][cube.getColumn()+1].getType()== cube.getType())
					{
						lista[cube.getRow()][cube.getColumn()+1].kill();
						holder.push(lista[cube.getRow()][cube.getColumn()+1]);
					}
			
				
					
			}
			catch(error){
				console.log(error);
			}
			try{
				
					if(lista[cube.getRow()][cube.getColumn()-1].getType()== cube.getType())
					{
						lista[cube.getRow()][cube.getColumn()-1].kill();
						holder.push(lista[cube.getRow()][cube.getColumn()-1]);
					}
				
			}
			catch(error){
				console.log(error);
			}
			
			return holder;
			
					
		}
	  
	  
	  

		  
