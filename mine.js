var allData=[];
var category="general";
 getData(category)
var links=Array.from(document.querySelectorAll(".nav-link"));
for(var i=0;i<links.length;i++)
{
    links[i].addEventListener("click",function(e){
        category=(e.target.text);
        getData(category)
    })
}


function getData(category){
var httpReq= new XMLHttpRequest();
httpReq.open("GET","http://newsapi.org/v2/top-headlines?country=eg&category="+category+"&apiKey=4433c45cb21646b8a2285f5e46e5c5a5");
httpReq.send();



httpReq.onreadystatechange=function()
{
  if(httpReq.readyState==4 && httpReq.status==200){
  
      allData=JSON.parse(httpReq.response).articles;
      display()
      console.log(allData)
  }
}} ;


function display()
{
    var temp=``;
    for(var i=0 ; i<allData.length;i++)
    {
        temp +=`
            <div class="col-lg-4 col-md-6 py-3">
            <div class="item">
            <img class="img-fluid" src="`+allData[i].urlToImage+`">
            <a href="`+allData[i].url+`"><h4>`+allData[i].title+`</h4></a>
            
            <p>`+allData[i].description+`</p>
            </div>
            </div>
        `
    }
    document.getElementById("rowData").innerHTML=temp
}

function search(term)
{
    var temp=``;
    for(var i=0 ; i<allData.length;i++)
    {
        if(allData[i].title.includes(term))
        temp +=`
            <div class="col-md-4 py-3">
            <div class="item">
            <img class="img-fluid" src="`+allData[i].urlToImage+`">
            <a href="`+allData[i].url+`"><h4>`+allData[i].title+`</h4></a>
            
            <p>`+allData[i].description+`</p>
            </div>
            </div>
        `
    }
    document.getElementById("rowData").innerHTML=temp
}