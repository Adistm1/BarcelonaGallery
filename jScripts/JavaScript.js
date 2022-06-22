//משתנה גלובלי- רלוונטי לכל הפונקציות
var photoIndex = 1;

// שליטה בחצים
function arrowPhotos(y) {
  showPhotos(photoIndex += y);
}

// שליטה תמונות סרגל תחתון
function currentPhoto(x) {
  showPhotos(photoIndex = x);
}


function showPhotos(n) {
  //יצירת מערך מכל מה שנמצא ,תחת class - myPhotos  וclass down -
    var photos = document.getElementsByClassName("myPhotos"); 
    var downPhoto = document.getElementsByClassName("down"); 
    var photoText = document.getElementById("photoTitel"); //כותרת התמונה
  
    //שני התנאים מתייחסים ללחיצה על החצים כדי ליצור את המעגליות
    // במידה והגעתי למספר 5 במערך (התמונה האחרונה) יש לחזור לתמונה 1
    if (n > photos.length)
    {
      photoIndex = 1
    }
      // במידה והגעתי למספר 1 במערך (התמונה הראשונה) יש לחזור לתמונה 6
    if (n < 1) 
    {
      photoIndex = photos.length
    }
    //לולאה שעוברת על כל התמונות הגדולות ופנייה לcss לא להציג אותן 
    for (i = 0; i < photos.length; i++) {
      photos[i].style.display = "none";
    }
      //לולאה שעוברת על כל התמונות בסרגל התחתון ומבטלת להן את class:"active"
  //כדי שאם יש תמונה שהיא לחוצה וכרגע בשקיפות מלאה להחזיר אותה לשקיפות נמוכה.
    for (i = 0; i < downPhoto.length; i++) {
      downPhoto[i].className = downPhoto[i].className.replace("active", ""); 
    }
    //המיקום במערך מתחיל מ0 ולכן מורידים באחד
    photos[photoIndex-1].style.display = "block"; //הצגת התמונה שנבחרה
    downPhoto[photoIndex-1].className += " active";//להציג את התמונה גם בסרגל התחתון בשקיפות מלאה
    photoText.innerHTML = downPhoto[photoIndex-1].alt; //החלפת הכותרת של התמונה
  
  }
  
