var text_arr=[" a Web Developer"," a Learner"," a CS student"," an Engineer"];
var part=0;
var part_index=0;
var interval_val;
var element=document.getElementById("text");
var cur=document.getElementById("cursor");
function Type()
{
    var type =text_arr[part].substring(0,part_index+1);
    element.innerHTML=type;
    part_index++;
    if(type === text_arr[part])
     {
        clearInterval(interval_val);
        setTimeout(function() {
			interval_val = setInterval(Delete, 200);
		}, 500);
    }

}
function Delete()
{
    var type =text_arr[part].substring(0,part_index-1);
    element.innerHTML=type;
    part_index--;
    if(type === '')
     {
        clearInterval(interval_val);
        if(part == (text_arr.length - 1))
			part = 0;
		else
			part++;
		
		part_index = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			cur.style.display = 'inline-block';
			interval_val = setInterval(Type, 200);
		}, 500);
    }

}
interval_val = setInterval(Type, 200);