$(document).ready(function addPhoto() {      
  $("button[name='add_photo']").click(function addPhoto() {   
   var text_photo = document.getElementById("event_photo").value;
   var time_photo = document.getElementById("time_photo").value;  
   var img = document.getElementById("imageResult").src; 
   // console.log(img); 
   if(time_photo != "" && text_photo !="" && img.includes("/Agile/RaportLink/raport_building.php") != true && img !="")
   {   
      var time_stamp = new Date(); 
      var date = time_stamp.getFullYear()+'-'+(time_stamp.getMonth()+1)+'-'+time_stamp.getDate()+' '+time_stamp.getHours()+':'+time_stamp.getMinutes()+':'+time_stamp.getSeconds();
      var domElement = $('<div class="event event_img"><h3><i class="far fa-clock"></i> '+time_photo+'</h3><br>'+text_photo+'<div class="raport_img"><img src='+img+'></img><p class="time_stamp">'+date+'<button type="button" name="delete_event" id="del_btn" class="btn btn-danger" onclick="removeElement(this)"><i class="fas fa-trash fa-lg"></i></button></p></div>');           
      $("div[id='Raport_footer']").before(domElement);        
      // console.log(img);
      var raportHTML = document.getElementById("Raport");
      var raport = JSON.stringify(raportHTML.innerHTML);     
      document.getElementById("time_photo").value="";
      document.getElementById("event_photo").value="";   
      document.getElementById('alert').style.display = 'none';
      document.getElementById('open-editor').hidden = 1;
      img = document.getElementById("imageResult").src = "";     
      sessionStorage.setItem(sessionStorage.getItem("currentRaport"), raport);     
   }else
   {
    document.getElementById('alert').style.display = 'block';
    window.scrollTo(0,0);
   }

  });
 });
