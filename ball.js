var gravity = 0.1;

function Ball(x,y){
	
	this.x = x;
	this.y = y;
	this.yspeed = 0;
	this.r = 255;
	this.g = 255;
	this.b = 255;
	
	
this.display = function(){
	
	fill(this.r,this.g,this.b);
	noStroke();
	ellipse(this.x, this.y , 10,10);
}	
this.update = function(){
	var change = true;
	this.y+= this.yspeed;
	this.yspeed+=gravity;
	if(this.y >= height){
		//change = true;
		if(change)
		{
			this.colChange();
			change = false;
		}
		this.y = height;
		this.yspeed*= -0.9;
	}
this.colChange = function(){
	this.r = random(255);
	this.g = random(255);
	this.b = random(255);
}
}

	
	
}