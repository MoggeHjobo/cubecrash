

	function Cube(x,y,img,type,row,col)
	{
		this.x = x;
		this.y = y;
		this.img = img;
		this.type = type;
		this.drawCube = drawCube;
		this.dead = false;
		this.kill = kill;
		this.row = row;
		this.col = col;
		this.getType = getType;
		this.getColumn = getColumn;
		this.getRow = getRow;
		this.isAlive = isAlive;
	}
	
	function getRow()
	{
		return this.row;
	}
	
	function getColumn()
	{
		return this.col;
	}
	
	function kill()
	{
		this.dead = true;
	}

	function isAlive()
	{
		return !this.dead;
	}
	
	function getType()
	{
		return this.type;
	}
	
	
	function drawCube(ctx)
	{
		if(!this.dead)
		ctx.drawImage(this.img,this.x,this.y);
	}