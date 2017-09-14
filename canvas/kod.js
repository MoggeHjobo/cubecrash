
var canvas;
var ctx;
var rot;

var c;
var lista = new Array();
var images = Array();
var listamedborttagning = new Array();






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

		/* 
		skapa en lista med klickad kub.
		Om någon lika lägg till den i listan och kolla grannar på den. 

		*/
		nyaGrannar(lista[row][col]);
		console.log(listamedborttagning.length);
		


/*		 var l = grannar(lista[row][col]);
		 alert(l.length);

		 /*
		 Algoritmen nedan ska ersättas med en rekursion
		 Just nu testas tänket med ett par forloopar
		 */
/*
		 for(pp=0;pp<l.length;pp++)
		 {
				t = grannar(l[pp]);
				for(tt=0;tt<t.length;t++)
				{
					grannar(t[tt]);
				}
		 }


	  }
*/
	  function nyaGrannar(kub){
		console.log("Här inne");
		listamedborttagning.push(kub);
			try{if(lista[kub.getRow()-1][kub.getColumn()].getType()== kub.getType())
			{
				console.log("Samma");
			if(lista[kub.getRow()-1][kub.getColumn()].isAlive()){
				lista[kub.getRow()-1][kub.getColumn()].kill();
				nyaGrannar(lista[kub.getRow()-1][kub.getColumn()]);
			}
			}} catch(error){ console.log(error);}
			try{if(lista[kub.getRow()+1][kub.getColumn()].getType()== kub.getType())
			{
				console.log("Samma");
			  if(lista[kub.getRow()+1][kub.getColumn()].isAlive()){
				lista[kub.getRow()+1][kub.getColumn()].kill();
				nyaGrannar(lista[kub.getRow()+1][kub.getColumn()]);
			  }
			}} catch(error){ console.log(error);}
			try{if(lista[kub.getRow()][kub.getColumn()+1].getType()== kub.getType())
			{
				console.log("Samma");
			  if(lista[kub.getRow()][kub.getColumn()+1].isAlive()){
				lista[kub.getRow()][kub.getColumn()+1].kill();
			  nyaGrannar(lista[kub.getRow()][kub.getColumn()+1]);
			  }
			}} catch(error){ console.log(error);}
			try{if(lista[kub.getRow()][kub.getColumn()-1].getType()== kub.getType())
			{
				console.log("Samma");
			  if(lista[kub.getRow()][kub.getColumn()-1].isAlive()){
				lista[kub.getRow()][kub.getColumn()-1].kill();
			  nyaGrannar(lista[kub.getRow()][kub.getColumn()-1]);
			  }
			}} catch(error){ console.log(error);}
			

	  }

	//   function grannar(cube)
	//   {

	// 	   var holder = new Array();




	// 		try{

	// 				if(lista[cube.getRow()-1][cube.getColumn()].getType()== cube.getType())
	// 				{
	// 					lista[cube.getRow()-1][cube.getColumn()].kill();
	// 					holder.push(lista[cube.getRow()-1][cube.getColumn()]);
	// 				}

	// 		}
	// 		catch(error){
	// 			console.log(error);
	// 		}

	// 		try{

	// 				if(lista[cube.getRow()+1][cube.getColumn()].getType()== cube.getType())
	// 				{
	// 					lista[cube.getRow()+1][cube.getColumn()].kill();
	// 					holder.push(lista[cube.getRow()+1][cube.getColumn()]);
	// 				}

	// 		}
	// 		catch(error){
	// 			console.log(error);
	// 		}

	// 		try{

	// 				if(lista[cube.getRow()][cube.getColumn()+1].getType()== cube.getType())
	// 				{
	// 					lista[cube.getRow()][cube.getColumn()+1].kill();
	// 					holder.push(lista[cube.getRow()][cube.getColumn()+1]);
	// 				}



	// 		}
	// 		catch(error){
	// 			console.log(error);
	// 		}
	// 		try{

	// 				if(lista[cube.getRow()][cube.getColumn()-1].getType()== cube.getType())
	// 				{
	// 					lista[cube.getRow()][cube.getColumn()-1].kill();
	// 					holder.push(lista[cube.getRow()][cube.getColumn()-1]);
	// 				}

	// 		}
	// 		catch(error){
	// 			console.log(error);
	// 		}

	// 		return holder;


	 	}
