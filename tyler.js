document.getElementById('googleForm').style.display = 'none';
document.getElementById('RSVP').onclick=function(){
  // Remove any element-specific value, falling back to stylesheets
    if(document.getElementById('googleForm').style.display == 'none'){
        document.getElementById('googleForm').style.display='';
    } else {
        document.getElementById('googleForm').style.display='none';
    }    
};
