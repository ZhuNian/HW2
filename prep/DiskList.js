$(document).ready(function () {
	addProduct(disks);

});
function addProduct(disks)
{
	$("#container").empty();
	var diskDivs = _.map(disks,function(disk){
		return diskDiv(disk);
	});
	_.each(diskDivs,function(div){
	$("#container").append(div);	
	});
}
//20141201 添加删除按钮并添加响应函数,根据图片的名字来删除对象的，所以每幅图像的名字必须唯一
function diskDiv(disk)
{
	//添加删除按钮，响应函数里面过滤掉要删除的对象，为什么响应函数在响应的时候仍然可
	//和这个函数的形参disk相比较？这个形参不会过时吗？
	var btn= $("<input type='button' value = '删除' >").click(function(){
		var result = _.filter(disks,function(disktemp){
		return disktemp.name != disk.name;
		})
	//修改全局对象为删除后的对象
		disks = result;
		addProduct(disks);//显示过滤后的对象
	});
	return $("<div>")
	.attr("class","disk1")
	.append(diskTitle(disk.name))
	.append(diskImg(disk.img))
	.append(diskDesc(disk.desc))
	.append(btn);//添加按钮
	//$(button#delete).hide();
}
function addBtnEvent(id){
     $("#"+id).bind("click",function(){
     console.log("hlll");
     });
}

function diskTitle(title){
	//return $("<h3>").html(title);
	return $("<h3>").html(title);
}


function diskImg(img){
	return $("<img>").attr("src",img);
}


function diskDesc(desc){
	return $("<p>").html(desc);
}
function add(){
	var newProduct = {
		name: $("#ProductName").val(),
		img:  $("#ProductImg").val(),
		desc: $("#ProductDesc").val()
	}
	disks.push(newProduct);
	addProduct(disks);
}
function search()
{
	var keyword = $("#ProductSearch").val();
	var result = _.filter(disks,function(disk){
		return disk.name.indexOf(keyword)!=-1
	})

	addProduct(result);
}