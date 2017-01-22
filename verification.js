var str0 = new Array;
	str0[0] = "shoes.";
	str0[1] = "jacket.";
	str0[2] = "shoes.";

var path = new Array;
	path[0] = new Array("iconsmood/nike_s/",2);
	path[1] = new Array("iconsmood/thenorthface_s/",2);
	path[2] = new Array("iconsmood/van_s/",2);
	path[3] = new Array("iconsmood/nike_m/",5);
	path[4] = new Array("iconsmood/thenorthface_m/",5);
	path[5] = new Array("iconsmood/van_m/",5);
	

var temp = -1;
var state = 0;
var rec = -1;

function verification()
{
	var ques = document.getElementById("test_q");
	var pic = document.getElementById("test_img");
	var conf = document.getElementById("confirm");
	var butt = document.getElementById("button");
	butt.onclick = "";
	if(state==0)
		conf.innerHTML="<div style='font-size:14; color: -webkit-link;text-decoration: underline;cursor: hand;'  onclick='verification()'>I'm not sure</div>";
	else
	{
		conf.innerHTML="<div style='font-size:14; color:red;'>Oops, try again!</div>";
		conf.innerHTML+="<div style='font-size:14; color: -webkit-link;text-decoration: underline;cursor: hand; '  onclick='verification()'>I'm not sure</div>";
		state=0
	}
	pic.innerHTML = "";
	var j = random(2, 0);
	while(temp==j)
		j=random(2, 0);
	temp = j;
	var str1 = "Click the ";
	var str2 = str0[j];
	ques.innerHTML = str1+str2;
	var m = j+3;
	var wrongImg = new Array;
	wrongImg = randomarr(path[m][1], 1);
	var imgarr = new Array(4)
	imgarr[0] = '<div style="margin:15px 8px 0px; float: left; cursor: hand;"><img src="' + path[j][0] + ' ('+ random(path[j][1], 1) +').jpg' + '" alt = "" width = 160px height = 160px onclick="correct()"></div>';
	imgarr[1] = '<div style="margin:15px 8px 0px; float: left; cursor: hand;"><img src="' + path[m][0] + ' ('+ wrongImg[0] +').jpg' + '" alt = "" width = 160px height = 160px onclick="wrong()"></div>';
	imgarr[2] = '<div style="margin:15px 8px 0px; float: left; cursor: hand;"><img src="' + path[m][0] + ' ('+ wrongImg[1] +').jpg' + '" alt = "" width = 160px height = 160px onclick="wrong()"></div>';
	imgarr[3] = '<div style="margin:15px 8px 0px; float: left; cursor: hand;"><img src="' + path[m][0] + ' ('+ wrongImg[2] +').jpg' + '" alt = "" width = 160px height = 160px onclick="wrong()"></div>';
	imgarr.sort(randomSort);
	//pic.innerHTML="hello";
	//alert(imgarr[0]);
	//pic.innerHTML = "<div><div style="margin:15px 8px 0px; border-radius:25px; float: left; cursor: hand;"><img src='./icons/financial/ (1).jpg' alt = '' width=30px height = 30px></div></div>";
	var n=0;
	while (n<4)
	{
		//alert(imgarr[n]);
		pic.innerHTML += imgarr[n];
		n++;
	}
}

function random(i, j)
{
	var max_path=i;
	var min_path=j;
	var index = parseInt(Math.random()*(max_path-min_path+1)+min_path,10);
	//while(temp==index)
	/*{

function randomarr(i, j)
{
		index = parseInt(Math.random()*(max_path-min_path+1)+min_path,10);
	}
	var temp = index;*/
	return index;
}

function randomarr(i, j)
{
	var max_path=i;
	var min_path=j;
	var index = new Array(i);
	for(var a=0; a<i; a++)
	{
		index[a]=a+1;
	}
	index.sort(randomSort);
	return index;
}
function randomSort(a, b)
{
    return Math.random() > 0.5 ? -1 : 1;
}

function wrong()
{
	state = 1;
	verification();
}

function correct()
{
	var ques = document.getElementById("test_q");
	var pic = document.getElementById("test_img");
	var conf = document.getElementById("confirm");
	var butt = document.getElementById("button");
	ques.innerHTML = "";
	pic.innerHTML = "";
	conf.innerHTML="<div style='font-size:14; color:green;'>Correct</div>";
	butt.type = "submit";
	butt.onclick = "";
	rec = -1;
}

function recording(c)
{
	rec = c;
}