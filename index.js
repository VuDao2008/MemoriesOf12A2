function myFunction() {
         
      document.getElementById("Text").innerHTML = "";
      document.getElementById("Link1").innerHTML = "";
      document.getElementById("Link2").innerHTML = "";
      document.getElementById("Link3").innerHTML = "";
      document.getElementById("Link4").innerHTML = "";
      document.getElementById("Link5").innerHTML = "";
      document.getElementById("Link6").innerHTML = "";
      document.getElementById("Link7").innerHTML = "";
      document.getElementById("Link8").innerHTML = "";  
      document.getElementById("Link9").innerHTML = "";
      document.getElementById("Link11").innerHTML = "";   
      document.getElementById("Link12").innerHTML = "";

         var text;
         var person;
         var LinkCheck = document.getElementById("name").value;

         switch(LinkCheck) {
            case "Long Hoàng":
                  person = "Người được chọn: Hoàng Long";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link1").innerHTML = text;
            break;

            case "Lê Hồng":
                  person = "Người được chọn: Hồng Ánh";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link2").innerHTML = text;
            break;

            case "Vannie Vũ":
                  person = "Người được chọn: Vân Anh";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link3").innerHTML = text;
            break;

            case "Phạm Nguyễn Trí Dũng":
                  person = "Người được chọn: Dũng";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link4").innerHTML = text;
            break;

            case "Hien Vu":
                  person = "Người được chọn: Hiển";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link5").innerHTML = text;
            break;

            case "Thuỳ Linh Nguyễn":
                  person = "Người được chọn: cô Linh chú Dũng ";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link6").innerHTML = text;
            break;

            case "Bùi Nga":
                  person = "Người được chọn: Nga & Khôi";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link7").innerHTML = text;
            break;

            case "Khôi Bùi":
                  person = "Người được chọn: Nga & Khôi";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link7").innerHTML = text;
            break;

            case "Duc Dao":
                  person = "Người được chọn: anh Đức & chị Hoàng Anh";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link8").innerHTML = text;
            break;

            case "Hoang Anh Nguyen":
                  person = "Người được chọn: anh Đức & chị Hoàng Anh";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link8").innerHTML = text;
            break;

            case "Thanhhuyen Nguyen":
                  person = "Người được chọn: bố Bình & mẹ Huyền";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link9").innerHTML = text;
            break;

            case "Binh DQ":
                  person = "Người được chọn: bố Bình & mẹ Huyền";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link9").innerHTML = text;
            break;
            
            case"Trang Nguyễn":
                  person = "Người được chọn: Trang";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link11").innerHTML = text;
            break;

            case"Vũ Đào":
                  person = "Người được chọn: Vũ Đào";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link12").innerHTML = text;
            break;

            case "":
                  person = "Bạn không phải người được chọn!";
                  text = "Máy đang bị virus tấn công...";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Text").innerHTML = text;
            break;
            
            default:
                  text = "Bạn không phải người được chọn!! Virus đang được cài vô máy...";
                  document.getElementById("Text").innerHTML = text;
            break;
         }
      }
