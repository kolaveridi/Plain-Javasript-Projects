

document.getElementById('myForm').addEventListener('submit',saveBookmark);
function saveBookmark(e){
  e.preventDefault();
  //Get form values
  var sitename=document.getElementById('siteName').value;
  var siteUrl=document.getElementById('siteUrl').value;
  var bookmark={
    sitename,
    siteUrl
  };
  
  if(localStorage.getItem('bookmarks')===null){
    var bookmarks=[];
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
  }
  else{
    var bookmarks=  JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
  } 
  fetchBookmarks();
}
function deleteBookmark(url){
 console.log('url',url);
 var bookmarks=  JSON.parse(localStorage.getItem('bookmarks'));
 console.log("bookmarks to loop",bookmarks);
 for(var i=0;i<bookmarks.length;i++){
  
  if(url===bookmarks[i].siteUrl){
    alert('url matched');
   bookmarks.splice(i,1);
   console.log('sliced url',url);
  }
}
localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
// again fetch
fetchBookmarks();
}

function fetchBookmarks(){
  var bookmarks=  JSON.parse(localStorage.getItem('bookmarks'));
  console.log(bookmarks);

  var bookmarksResults=document.getElementById('bookmarksResults');
  //Build Output
  bookmarksResults.innerHTML='';
  
  for(var i=0;i<bookmarks.length;i++){
    var name=bookmarks[i].sitename;
    var url=bookmarks[i].siteUrl;
    bookmarksResults.innerHTML += '<div class="well">'+
                                  '<h3>'+name+
                                  ' <a class="btn btn-default" target="_blank" href="'+(url)+'">Visit</a> ' +
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                  '</h3>'+
                                  '</div>';
  }


}

