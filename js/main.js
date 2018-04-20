var dd = 2;
var cnt = 0;
        function chng() {

            var rotator = document.getElementById('mainpic');  // change to match image ID
            var imageDir = 'img/';                          // change to match images folder


            var images = ['goku.gif', 'vegeta.gif'];

            
            cnt++;

            var len = images.length;
            if (cnt < dd) {
                mainpic.src = imageDir + images[cnt];
            }
            else if (cnt == len) {
                mainpic.src = imageDir + images[0];
                cnt = 0;
            }
        }

