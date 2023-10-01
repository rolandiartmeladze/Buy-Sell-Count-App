
function message() {

  let message = document.createElement('div');
      message.className = "message";
      message.id = "message";

      let message_txt = document.createElement('div');
          message_txt.className = "message_txt";
          message_txt.id = "message_txt";

          let message_button = document.createElement('button');
              message_button.className = "message_button";
              message_button.id = "message_button";

              let close_button = document.createElement('button');
                  close_button.className = "close_button";
                  close_button.id = "close_button";
                  close_button.textContent = "Close";

                      message.append(message_txt, message_button, close_button);
                          document.body.append(message);

            function close_message() {
              let message_div = document.getElementById('message');
                  message_div.remove();
            }
              close_button.addEventListener('click', close_message);

                  let loading_div = document.getElementById('loading_div');
                      if (loading_div) { loading_div.remove(); }

}

function loading(){
let div = document.createElement('div');
div.id = "loading_div";
div.className = "loading";
div.textContent = "მუშავდება...";
document.body.append(div);
}

function gayidvis_storia() {
  fetch('history.json')
    .then(response => response.json())
    .then(data => {
        let gayiduli_produqciis_sia = data;
          let table_line_in_history = document.getElementById('table_line_in_history');
              let n = 0;
                for (let i = gayiduli_produqciis_sia.length - 1; i >= 0; i--) {
                  n+=1
                    let line = document.createElement('tr');
                      let item = document.createElement('td');
                        line.append(item);
                          item.textContent = n;
                            item.style.textAlign = "center";
                              for(j=0; j<gayiduli_produqciis_sia[i].length; j++){
                                var properties = gayiduli_produqciis_sia[i][j];
                                  let item = document.createElement('td');
                                    if(j==gayiduli_produqciis_sia[i].length-1){item.className = "saerto_fasi_history"; for(let property in properties){item.textContent = properties[property] +"  ₾.";}}
                                      else{ for (let property in properties){item.textContent = properties[property];}} line.append(item);
                              }
                                        table_line_in_history.appendChild(line);
                }

    });
}


function main(){

  let dzebna =   document.getElementById('dzebna');
  let damateba = document.getElementById('damateba');
  let tsashla =  document.getElementById('tsashla');
  let istoria = document.getElementById('istoria');
  let fasi = document.getElementById('fasi');

  

      function dzebna_f()   { window.location = "home.html"; }
      function damateba_f() { window.location = "add_item.html"; }
      function tsashla_f()  { window.location = "delete_item.html"; }
      function istoria_f()  { window.location = "history.html"; }
      function fasi_f()  { window.location = "fasi.html"; }

          dzebna.addEventListener('click',   dzebna_f)
          damateba.addEventListener('click', damateba_f)
          tsashla.addEventListener('click',  tsashla_f)
          istoria.addEventListener('click',  istoria_f)
          fasi.addEventListener('click',  fasi_f)

          function meniu_btn_mob(){
            


           let width = window.innerWidth;
              let btn = document.getElementById("meniu_btn");
              let line = document.querySelectorAll('.line');
              let nav  = document.getElementById('nav');

            if(width <= 500){
              let status = true;

              if(status){
                
              }

              btn.addEventListener("click", ()=>{
                
                if(status){
                btn.classList.add('meniu_btn_active');
                line[0].classList.add("line1");
                line[1].classList.add("line2");
                line[1].style.transition = "opacity 0.4s";
                line[2].classList.add("line3");
                nav.classList.add("nav_active");
                status = false;
                }
                else{
                  btn.classList.remove('meniu_btn_active');
                  line[0].classList.remove("line1");
                  line[1].classList.remove("line2");
                  line[1].style.transition = "opacity 1.5s";
                  line[2].classList.remove("line3");
                  nav.classList.remove("nav_active");

                  status = true;
                  }
  
  
              })


            }


          }
 

          meniu_btn_mob()

}
function shesvla(){




  let active = true;
  function toggleActive() {
    active = !active;
  }

  function getRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
  }

  const elementrbi = [

    [ ["-5%", "90%"], ["93%", "40%"], ["-4%", "-4%"], ],

    [ ["93%", "40%"], ["-4%", "-4%"], ["-5%", "90%"], ],

    [ ["-4%", "-4%"], ["-5%", "90%"], ["93%", "40%"], ],

  ];

  function login_animation_boll() {
    const boll = document.querySelectorAll('.boll');
    let randomIndex = getRandomIndex(elementrbi.length); // Generate a random index between 0 and the length of elementrbi

    for (let i = 0; i < boll.length; i++) {
      boll[i].style.top = active ? elementrbi[randomIndex][i][0] : elementrbi[randomIndex][i][0];
      boll[i].style.left = active ? elementrbi[randomIndex][i][1] : elementrbi[randomIndex][i][1];
    }
  }

  setInterval(function () { toggleActive(); login_animation_boll(); }, 8000);











  let finde_clode_btn = document.querySelector('.finde_clode_btn');
  let second = document.getElementById('second');
  let first = document.getElementById('first');
  const find_input = document.getElementById('find_input');



    function finde_close(){
        second.classList.remove('second_active');
        first.classList.remove('first_ative');
          find_input.value = "";
          find_input.classList.remove("find_input_active");
          find_input.style.transition = "border-radius 1.2s ease-in-out, width 1s ease-in-out";
          find_input.placeholder ="";
              users_table_find_result.style.display = "none";
              users_table_item.style.display = "table";
    }

        find_input.addEventListener('focus', () => {
          finde_clode_btn.style.cursor = "pointer";
            find_input.classList.add("find_input_active");
            second.classList.add('second_active');
            find_input.style.transition = "border-radius 0.3s ease-in-out, width 1s ease-in-out";
            setTimeout(() => { find_input.placeholder ="საძიებო სიტყვა"; }, 700);
            setTimeout(() => {
              first.classList.add('first_ative');
            }, 300);
        });

            find_input.addEventListener('blur', () => {
                finde_clode_btn.style.cursor = "default";
                  let simboloebi = find_input.value.length;
                    if(simboloebi<=0){ finde_close();}
              });

                finde_clode_btn.addEventListener("click", finde_close)


find_input.addEventListener("input", ()=>{

  fetch('stmdata.json')
  .then(response => response.json())
  .then(data => {
    let array = data.sabrunavi_sashualebeis_sia;
        let sadziebo = find_input.value;
            let simboloebi = find_input.value.length;

                let users_table_find_result = document.getElementById("users_table_find_result");
                let users_table_item = document.getElementById('users_table_item');


    console.log(sadziebo)
    console.log(simboloebi)

    let old_line = document.querySelectorAll('.finde_result_line');
    if(old_line){
      old_line.forEach(item => {
        item.remove();
      });
    }

    array.forEach((element,index) => {
      if((element[1].saxeli.slice(0,simboloebi) === sadziebo) || (element[2].komentari.slice(0,simboloebi) === sadziebo) ){
        let line = document.createElement('tr');
            line.className = "finde_result_line";
                let elementis_saxeli = document.createElement('td'); elementis_saxeli.textContent = element[1].saxeli;
                let elementis_komentri = document.createElement('td'); elementis_komentri.textContent = element[2].komentari;
                    let elementis_maragshi = document.createElement('td'); elementis_maragshi.textContent = "კი"; elementis_maragshi.style.textAlign = "center"
            line.append(elementis_saxeli,elementis_komentri,elementis_maragshi)
    users_table_find_result.append(line)

        users_table_find_result.style.display = "table";
        users_table_item.style.display = "none";

      }

    });
    

  })

})

    find_input.addEventListener("keyup",()=>{
      let simboloebi = find_input.value.length;
        if(simboloebi<=0){ users_table_find_result.style.display = "none"; users_table_item.style.display = "table"; }
    })



    function start_f(){



      fetch('stmdata.json')
      .then(response => response.json())
      .then(data => {

        let info_item = data.sabrunavi_sashualebeis_sia;
            let users_table_item = document.getElementById('users_table_item');

    

      info_item.forEach(element => {
        let elementis_item = document.createElement('tr');
            elementis_item.className = "active_line";
            let elementis_saxeli = document.createElement('td'); elementis_saxeli.textContent = element[1].saxeli;
                let elementis_komentri = document.createElement('td'); elementis_komentri.textContent = element[2].komentari;
                    let elementis_maragshi = document.createElement('td'); elementis_maragshi.textContent = "კი"; elementis_maragshi.style.textAlign = "center"
        elementis_item.append(elementis_saxeli,elementis_komentri,elementis_maragshi);
    users_table_item.append(elementis_item);

      });




    });


    fetch('history.json')
    .then(response => response.json())
    .then(data => {


      gayiduli_produqciis_sia = data;
      let favorite_item = document.querySelectorAll('.favorite_item');

    function countOccurrences(arr) {
      const nameAndCommentCount = {};

      arr.forEach(item => {
        const name = item[1].saxeli;
        const comment = item[2].komentari;
        const key = `${name}  /  ${comment}`;
          nameAndCommentCount[key] = (nameAndCommentCount[key] || 0) + 1; }); 
          return nameAndCommentCount; }
          const nameAndCommentOccurrences = countOccurrences(gayiduli_produqciis_sia);
          const occurrencesArray = Object.entries(nameAndCommentOccurrences).map(([key, value]) => ({ nameAndComment: key, count: value, }));
                occurrencesArray.sort((a, b) => b.count - a.count);

                favorite_item.forEach((element,index) => {
                  element.textContent = occurrencesArray[index].nameAndComment;
                });


              })


    let view_elements_btn = document.getElementById('view_elements_btn');
    let active = true;

    let view_eleents = document.getElementById("view_eleents");
    let forma = document.getElementById('forma');


      let animation_block = document.getElementById("animation_block");
      let text_user_head_line = "თქვენ იმყოფებით შპს.'ს.ტემუ' - ს საინფორმაციო გვერდზე. შეგიძლიათ გადახედოთ ან მოიძიოთ თქვენთვის სასურველი დეტალი.";
      let user_view_header_line = document.getElementById('user_view_header_line');
      let user_view_conteiner_left_head = document.getElementById('user_view_conteiner_left_head');
      let find_item_text = "მოძებნეთ სასურველი დეტალი:";
      let find_item_text_conteiner = document.getElementById('find_item_text_conteiner');
      let user_view_conteiner_left_head_find = document.getElementById('user_view_conteiner_left_head_find');
      let dayovneba = (find_item_text.length -2) * 30;
      let users_table = document.getElementById('users_table');
      let contact_conteiner = document.getElementById('contact_conteiner');
      let contact_conteiner_item = document.querySelectorAll('.contact_conteiner li');
      let user_view_conteiner_left = document.getElementById('user_view_conteiner_left');
      let favorite_items = document.getElementById('favorite_items');
      let facebook_page = document.getElementById('facebook_page');
      let contact_aside_underline = document.getElementById('contact_aside_underline');

      view_elements_btn.textContent = "სისტემაში შესვლა";


          setTimeout(() => {

            animation_block.classList.add("animation_block_active_2");

                setTimeout(() => {

                        user_view_header_line.classList.add('user_view_header_line_active');
                        
                          setTimeout(() => {
                            for (let i = 0; i <= text_user_head_line.length; i++) { setTimeout(() => { user_view_header_line.textContent = text_user_head_line.slice(0, i); }, i * 10); }

                                    user_view_conteiner_left_head.classList.add('user_view_conteiner_left_head_active');

                                    setTimeout(() => {

                                      for (let i = 0; i <= find_item_text.length; i++) { setTimeout(() => { 

                                        find_item_text_conteiner.textContent = find_item_text.slice(0, i); 
                                      
                                      }, i * 30); }

                                        setTimeout(() => {
                                          
                                          user_view_conteiner_left_head_find.style.opacity = "1"; 
                                        
                                        }, dayovneba);

                                                      users_table.classList.add('users_table_active');
                                                      contact_conteiner.classList.add('contact_conteiner_active');

                                                          setTimeout(() => {

                                                            for (let i = 0; i < contact_conteiner_item.length; i++) {

                                                              setTimeout(() => {

                                                                contact_conteiner_item[i].style.opacity = "1";

                                                              }, i * 100);

                                                            }

                                                          }, 200);
                                        
                                                              user_view_conteiner_left.style.borderRight = "0.1px solid black";
                                                              favorite_items.classList.add('favorite_items_active');

                                                              setTimeout(() => {

                                                                    facebook_page.classList.add('facebook_page_active'); 
                                                                        facebook_page.style.overflow = "visible"; 
                                                                            
                                                                              setTimeout(() => { 
                                                                                
                                                                                  contact_aside_underline.classList.add('contact_aside_underline_active') 
                                                                              
                                                                              }, 500);
                          
                                                              }, 500);
                                                  
                                    }, 300);



                          }, 300);


                }, 100);
          }, 100);

          


          const contact_aside_icon = document.querySelectorAll('.contact_aside_icon');
          let contact_aside_underline_hover = document.getElementById("contact_aside_underline_hover");
          
          let color = [
            "rgb(37, 211, 102)",
            "rgb(89, 38, 124)",
            "rgb(0, 106, 255)"
          ];
          
          function removeAllChildElements(parentElement) {
            while (parentElement.firstChild) {
              parentElement.removeChild(parentElement.firstChild);
            }
          }
          
          function hover_wats() {
            removeAllChildElements(contact_aside_underline_hover);
          
            let item_one = document.createElement('samp');
            item_one.textContent = "+995 595 03-56-68";
            item_one.className = "call_watsapp_roland contact_item";
          
            let item_two = document.createElement('samp');
            item_two.textContent = "+995 595 24-07-96";
            item_two.className = "call_watsapp_murka contact_item";
          
            let item_three = document.createElement('samp');
            item_three.textContent = "+995 574 23-32-90";
            item_three.className = "call_watsapp_temo contact_item";
          
            contact_aside_underline_hover.append(item_one, item_two, item_three);
          }
          
          function hover_vib() {
            removeAllChildElements(contact_aside_underline_hover);
          
            let item_one = document.createElement('samp');
            item_one.textContent = "+995 595 03-56-68";
            item_one.className = "call_vib_roland contact_item";
          
            let item_two = document.createElement('samp');
            item_two.textContent = "+995 595 24-07-96";
            item_two.className = "call_vib_murka contact_item";
          
            let item_three = document.createElement('samp');
            item_three.textContent = "+995 574 23-32-90";
            item_three.className = "call_vib_temo contact_item";
          
            contact_aside_underline_hover.append(item_one, item_two, item_three);
          }
          
          function hover_mess() {
            removeAllChildElements(contact_aside_underline_hover);
          
            let item_one = document.createElement('samp');
            item_one.textContent = "roland artmeladze";
            item_one.className = "call_mess_roland contact_item";
          
            let item_two = document.createElement('samp');
            item_two.textContent = "murka dzirkvadze";
            item_two.className = "call_mess_murka contact_item";
          
            let item_three = document.createElement('samp');
            item_three.textContent = "temur dzirkvadze";
            item_three.className = "call_mess_temo contact_item";
          
            contact_aside_underline_hover.append(item_one, item_two, item_three);
          }
          
          contact_aside_icon.forEach((element, index) => {
            element.addEventListener('mouseover', () => {
              removeAllChildElements(contact_aside_underline_hover);
          
              setTimeout(() => {
                if (index == 0) {  setTimeout(() => {hover_wats();}, 260);}
                else if (index == 1) { setTimeout(() => {hover_vib();}, 260); }
                else if (index == 2) { setTimeout(() => {hover_mess();}, 260); }
          
                contact_aside_underline_hover.classList.add('contact_aside_underline_hover_active');
                contact_aside_underline_hover.style.transition = "0.3s ease-in-out";
              }, 200);
          
              contact_aside_underline_hover.style.backgroundColor = color[index];
            });
          
            element.addEventListener('mouseout', () => {

              removeAllChildElements(contact_aside_underline_hover);
          
              contact_aside_underline_hover.classList.remove('contact_aside_underline_hover_active');
              contact_aside_underline_hover.style.background = "none";
              contact_aside_underline_hover.style.transition = "0s";
            });
          });

          view_elements_btn.addEventListener('click', ()=>{
                if(active){

                  view_eleents.style.display = "none";

                  view_elements_btn.textContent = "პროდუქციის ნახვა";
                  animation_block.classList.remove('animation_block_active_2');

                  forma.classList.add('login_form_ative');

                  

                  view_elements_btn.classList.add('view_elements_btn_active');

                  active = false;
      
                }
                else{

                  view_eleents.style.display = "flex";
                  forma.classList.remove('login_form_ative');

                  animation_block.classList.add('animation_block_active_2');


                  view_elements_btn.textContent = "სისტემაში შესვლა";

                  view_elements_btn.classList.remove('view_elements_btn_active');
            
            
                  active = true;
            
                }

                })      

            

    }

    start_f();





        let window_width = window.innerWidth;
        if(window_width <= 500){

          function bacground(){
            
            var bg_imgs = [
              ["url(img/bg3.jpg)", "250%", "-120px", "-300px"],
              ["url(img/bg5.jpg)", "260%", "-250px", "-50px"],
              ["url(img/bg3.jpg)", "250%", "-100px", "-40px"],
              ["url(img/bg5.jpg)", "200%", "-200px", "-50px"],
              ["url(img/bg3.jpg)", "200%", "0px", "0px"],
            ];
            
            
                let elementi = bg_imgs[item];
            
                document.body.style.backgroundImage = elementi[0];
                document.body.style.backgroundSize = elementi[1];
                document.body.style.backgroundPositionX = elementi[2];
                document.body.style.backgroundPositionY = elementi[3];
            
            
                }
            
                let dayovneba = 15000;
                let dayovneba_intervale = dayovneba *5;
                    var item = 0;
            
                    function animation(){
                      setTimeout(() => { item = 1; bacground();
                        setTimeout(() => { item = 2; bacground();
                            setTimeout(() => { item = 3; bacground();
                                setTimeout(() => { item = 4; bacground();
                                    setTimeout(() => { item = 0; bacground();
            
                                    }, dayovneba);
              
                                }, dayovneba);
            
                            }, dayovneba);
            
                          }, dayovneba);
            
                     }, dayovneba);
            
                    }
            
            
                    setInterval(animation , dayovneba_intervale);
            
                bacground();
            
                    animation();
            
            
            
        }

  //  setInterval(bacground, 2000);

  let sistemashi_shesvla = document.getElementById('sistemashi_shesvla');
  sistemashi_shesvla.addEventListener('click', ()=> {
    fetch('stmdata.json')
    .then(response => response.json())
    .then(data => {

      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;
      let pass = data.shesvla[1].pass;
      let user = data.shesvla[0].user;
      if(username === user && password === pass){ window.location = "home.html";}
      else{alert("არასწორი მომხმარებელი ან პაროლი") }
    });  

    
  })
}


function dzebna(){

    // var start_active = true;

  // function home_animation_boll() {
  //   const home_animation_boll1 = document.getElementById('home_animation_boll1');
  //   const home_animation_boll = document.getElementById('home_animation_boll');



  
  //  setTimeout(() => {
  
  //     if (start_active) {

  //       home_animation_boll1.classList.add('home_animation_boll1_active');
  //       home_animation_boll.classList.add('home_animation_boll_active');
  //       home_animation_boll1.style.top = "55px";
  //       home_animation_boll1.style.left = "2%";

  //     setTimeout(() => {
  //       home_animation_boll1.classList.remove('home_animation_boll1_active');
  //       home_animation_boll.classList.remove('home_animation_boll_active');
  
  //       home_animation_boll1.style.borderTopLeftRadius = "0%";
  //       home_animation_boll1.style.borderBottomRightRadius = "100%";

  //       home_animation_boll.style.borderBottomRightRadius = "0%";
  //       home_animation_boll.style.borderTopLeftRadius = "100%";
                
  //       home_animation_boll1.style.top = "55px";
  //       home_animation_boll1.style.left = "2%";

  //       let width = window.innerWidth;

  //       if(width >=500){
                        
  //                       home_animation_boll.style.top = "83%";
  //                       home_animation_boll.style.left = "96%";
                        
  //                     }
  //       else {

  //             home_animation_boll.style.top = "80%";
  //             home_animation_boll.style.left = "90%";

  //             }



  //     }, 2500);

  //       start_active = false;
  //     } 
  //     else if(!start_active){

  //       home_animation_boll1.classList.add('home_animation_boll1_active');
  //       home_animation_boll.classList.add('home_animation_boll_active');
  //       home_animation_boll.style.top = "55px";
  //       home_animation_boll.style.left = "2%";

  //       setTimeout(() => {

  //         home_animation_boll1.classList.remove('home_animation_boll1_active');
  //         home_animation_boll.classList.remove('home_animation_boll_active');
          
  //         home_animation_boll1.style.borderTopLeftRadius = "100%";
  //         home_animation_boll1.style.borderBottomRightRadius = "0%";
  
  //         home_animation_boll.style.borderBottomRightRadius = "100%";
  //         home_animation_boll.style.borderTopLeftRadius = "0%";
  
  


  //         let width = window.innerWidth;

  //         if(width >=500){
                          
  //                         home_animation_boll1.style.top = "83%";
  //                         home_animation_boll1.style.left = "96%";

  //                       }
  //         else {

  //               home_animation_boll1.style.top = "80%";
  //               home_animation_boll1.style.left = "90%";

  //               }
  
          
  
  //       }, 2500);

  

  //       start_active = true;
  //     }

  //   }, 2800);
  // }
  


  // setInterval(home_animation_boll, 15000);

  
  // produqtis_dasaxeleba_active




  

  




  

  let view_more = document.getElementById('view_more');

  view_more.addEventListener('click', ()=>{ location = "history.html";})


  //დღის შედეგი
 function dgis_gayidvis_istoria() {

  fetch('history.json')
  .then(response => response.json())
  .then(data => {

 
    let istoria_list = data;
    const currentDate = new Date();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
    const day = currentDate.getDate().toString().padStart(2, '0');
    const year = currentDate.getFullYear().toString();
    const data_time = month + "/" + day + "/" + year;
  
  
    let dgis_shedegi = null;
  let dgevandeli_gayidvis_istoria = document.getElementById('dgevandeli_gayidvis_istoria');
  let dgis_shedegi_list = [];

    istoria_list.forEach((shedegi, index) => {
      if (shedegi[0].data_time == data_time) {
        dgis_shedegi += istoria_list[index][5].fasi_total;
        let elementi = [
          [
          istoria_list[index][1].saxeli,
          istoria_list[index][3].raodenoba,
          istoria_list[index][5].fasi_total + "₾"
        ]
        ]
        dgis_shedegi_list.push(...elementi);
      }
    });

    let dgis_shedegi_txt = document.getElementById('dgis_shedegi_txt');
    dgis_shedegi_txt.textContent ="ჯამში: " + dgis_shedegi + " ₾. ";
    let n = null;

      let pirveli = true;
    for(let i = dgis_shedegi_list.length - 1; i >= 0; i--){

      n +=1;
      let line = document.createElement('tr');

      if(pirveli){
        line.className = "dgis_shedegi_pirveli_line";
        pirveli = false;
      }
      let item = document.createElement('td');
      item.textContent = n;
      line.append(item);

      for(j=0; j<dgis_shedegi_list[i].length; j++){
        let item = document.createElement('td');
        item.textContent = dgis_shedegi_list[i][j];
        line.append(item);
      }

      dgevandeli_gayidvis_istoria.append(line);
    }
    console.log(dgis_shedegi_list, dgis_shedegi)
  })

  }

  dgis_gayidvis_istoria();

  //დღის შედეგი end



fetch('stmdata.json')
  .then(response => response.json())
  .then(data => {




    


    //_N1 // ძირითადი მონაცემების გამოტანა ეკრანზე __ძებნა 
    var gasayidi_saxeli = document.getElementById('gasayidi_saxeli');
    let gasayidi_komentari = document.getElementById('gasayidi_komentari');
    let gasayidi_adgili = document.getElementById('gasayidi_adgili');
    let gasayidi_raodenoba = document.getElementById('gasayidi_raodenoba');
    let gasayidi_fasi = document.getElementById('gasayidi_fasi');

      let sabrunavi_sashualebeis_sia = data.sabrunavi_sashualebeis_sia;
      let head_line_content = data.head_line_content;
          let table_header_line = document.getElementById('table_header_line');
          let produqtis_dasaxeleba = document.getElementById('produqtis_dasaxeleba');
          let productis_komentari = document.getElementById('productis_komentari');
          let result_table = document.getElementById('result_table');
          let result = document.getElementById('result');
          let _first_table = document.getElementById('_first_table');
          let table_body = document.getElementById('table_body');








          var gasayidi_produqtis_pozicia = null;



          //_N2  // ძირითადი მონაცემების გამოტანა ეკრანზე __ძებნა საინფორმაციო ხაზი 
              for (let i = 0; i < head_line_content.length; i++) {
                let table_header_line_item = document.createElement('td');
                    table_header_line_item.style.fontWeight = "bolder";
                    table_header_line_item.textContent = head_line_content[i];
                    table_header_line.appendChild(table_header_line_item);
              } 
          //_N2

          let bolo_jami = 0



              //_N3  // ძირითადი მონაცემების გამოტანა ეკრანზე __ძებნა  მონაცემების ჩამონათვალი
                  for (let i = 0; i < sabrunavi_sashualebeis_sia.length; i++) {
                      let table_product_line = document.createElement('tr');
                        table_body.append(table_product_line);

                        for (let j = 0; j < sabrunavi_sashualebeis_sia[i].length +1; j++) {
                          let table_product_line_item = document.createElement('td');
                            table_product_line.appendChild(table_product_line_item);
                              var properties = sabrunavi_sashualebeis_sia[i][j];
                                var table_property_item = document.createElement('div');

                          if(j==0){ 
                            for (let property in properties) { 
                              table_property_item.textContent = properties[property]+(i+1); 
                              table_product_line_item.appendChild(table_property_item); 
                              table_product_line_item.style.textAlign = "center";

                            } 
                          }
                          else if( j == sabrunavi_sashualebeis_sia[i].length -1){ 
                            for (let property in properties) {
                              let jami = sabrunavi_sashualebeis_sia[i][j-1].fasi * sabrunavi_sashualebeis_sia[i][j-2].raodenoba + " ₾.";

                              let saboloo = sabrunavi_sashualebeis_sia[i][j-1].fasi * sabrunavi_sashualebeis_sia[i][j-2].raodenoba;

                                table_property_item.style.fontWeight = "bolder";
                                  table_property_item.textContent = properties[property] +" "+ jami;
                                    table_product_line_item.appendChild(table_property_item);
                           
                                    saerto_jami = saboloo;

                                  }
                          }
                          else if( j == sabrunavi_sashualebeis_sia[i].length){ 


                            table_property_item.textContent = "არჩევა";
                            table_property_item.className = "select_btn";
                                    table_product_line_item.appendChild(table_property_item);
                          }
                          else{ 
                                for (let property in properties) { 
                                  table_property_item.textContent = properties[property];  
                                  table_product_line_item.appendChild(table_property_item); 
                                } 
                              } 
                          }
                          bolo_jami += saerto_jami;

                  }
                                      let table_product_line = document.createElement('div');



                  let table_product_line_item1 = document.createElement('samp');

                  table_product_line_item1.className = "saboloo_jami";

                  table_product_line_item1.style.fontWeight = "none";
                  // table_product_line_item1.style.fontSize = "8px";
                  table_product_line_item1.style.color = "red";
                  
                  

                  


                  let saerto_girebuleba_view = document.getElementById('saerto_girebuleba_view');

                  let saerto_girebuleba_btn = document.getElementById('saerto_girebuleba_btn');

                  let saerto_girebuleba = document.getElementById('saerto_girebuleba');

                  let giregulebis_chveneba = false;

                  saerto_girebuleba_btn.addEventListener('click', ()=>{

                    if (!giregulebis_chveneba) {
                    saerto_girebuleba.textContent = String(bolo_jami).substring(0, 10) + " ₾.";
                    giregulebis_chveneba = true;
                    saerto_girebuleba_view.src = "img/hide.png";

                  }
                  else{
                    saerto_girebuleba.textContent = "******" + " ₾.";
                    giregulebis_chveneba = false;
                    saerto_girebuleba_view.src = "img/view.png";

                  }

                  })



                  // saerto_girebuleba.textContent = String(bolo_jami).substring(0, 10) + " ₾.";
                  // table_product_line_item1.textContent = "საერთო ღირებულებ = " + String(bolo_jami).substring(0, 10) + " ₾.";

                  // table_product_line_item1.textContent = table_product_line_item1.textContent.substring(0, 6) + "₾.";

                  table_product_line.appendChild(table_product_line_item1);


                                    table_body.append(table_product_line);




              //_N3

      //_N1



  //_N4  // გასაყიდი პროდუქტის არჩევა ძიების შედეგიდან დაწყება
  function gasayidi_produqtis_archeva_dzebnis_shedegidan(){

    let select_btn = document.getElementsByClassName("select_btn");
    var archeuli_elementis_index = document.querySelectorAll('.archeuli_elementis_index');
        for (let b = 0; b < select_btn.length; b++) {
          let selected_item = select_btn[b];
              function gayidva_f() {
                let elementi = archeuli_elementis_index[b].textContent -1;
                gasayidi_produqtis_pozicia = elementi;

                let archeuli_produqti = sabrunavi_sashualebeis_sia[elementi];
                    gasayidi_saxeli.textContent = archeuli_produqti[1].saxeli;
                    gasayidi_komentari.textContent = archeuli_produqti[2].komentari;
                    gasayidi_adgili.textContent = archeuli_produqti[3].lokacia;
                    gasayidi_raodenoba.textContent = archeuli_produqti[4].raodenoba;
                    gasayidi_fasi.textContent = archeuli_produqti[5].fasi;
              }
          selected_item.addEventListener("click", gayidva_f);
        }
    }
  //_N4

      //_N5    // გასაყიდი პროდუქტის არჩევა ძირითადი ცხრილიდან
      function archeva(){

        let select_btn = document.getElementsByClassName("select_btn");
            for (let b = 0; b < select_btn.length; b++) {
                let selected_item = select_btn[b];
                let archeuli_produqti = sabrunavi_sashualebeis_sia[b];
                    function gayidva_f() {

                        const gayiduli_raodenoba = document.getElementById('gayiduli_raodenoba');
                        const misagebi_tanxa = document.getElementById('misagebi_tanxa');
                              misagebi_tanxa.textContent = archeuli_produqti[5].fasi * 1 +" ₾. ";
                      
                              gayiduli_raodenoba.focus();
                              gayiduli_raodenoba.select();
                      
                                      gayiduli_raodenoba.addEventListener('input', ()=> {
                                          let input = gayiduli_raodenoba.value;
                                              misagebi_tanxa.textContent = archeuli_produqti[5].fasi * input +" ₾. ";
                                      })




                      gasayidi_produqtis_pozicia = b;
                        gasayidi_saxeli.textContent = archeuli_produqti[1].saxeli;
                        gasayidi_komentari.textContent = archeuli_produqti[2].komentari;
                        gasayidi_adgili.textContent = archeuli_produqti[3].lokacia;
                        gasayidi_raodenoba.textContent = archeuli_produqti[4].raodenoba;
                        gasayidi_fasi.textContent = archeuli_produqti[5].fasi;                       
                      
                    }
                      selected_item.addEventListener("click", gayidva_f);

            }
            
        }
      //_N5



      function archeuli_produqtis_gayidva() {


                      let sabrunavi_sashualebeis_sia = data.sabrunavi_sashualebeis_sia;
                       let gasayidia = gasayidi_produqtis_pozicia;
                      let gasayidi_produqti = sabrunavi_sashualebeis_sia[gasayidia];

        let raodenoba = gasayidi_produqti[4].raodenoba;
        var gayiduli_raodenoba = document.getElementById('gayiduli_raodenoba').value;
        let shedegi = raodenoba - gayiduli_raodenoba;
        let jamshi_fasi = gayiduli_raodenoba * gasayidi_produqti[5].fasi;

        function istoriashi_damateba(){


        
         const currentDate = new Date();
         const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
         const day = currentDate.getDate().toString().padStart(2, '0');
         const year = currentDate.getFullYear().toString();
         let data_time = month +"/"+day+"/"+year;

              const elementinhistory = [
                {"data_time": data_time},
                {"saxeli": gasayidi_produqti[1].saxeli},
                {"komentari": gasayidi_produqti[2].komentari},
                {"raodenoba": gayiduli_raodenoba},
                {"fasi": gasayidi_produqti[5].fasi},
                {"fasi_total": jamshi_fasi}
              ];


const xhr = new XMLHttpRequest();
xhr.open('POST', 'add_in_history.php', true);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send(JSON.stringify(elementinhistory));

xhr.onload = function() {
if (xhr.status === 200) {
} else {
  console.error('Error saving data:', xhr.status);
}
};

        }





        if (shedegi == 0) {



          fetch('stmdata.json')
            .then(response => response.json())
            .then(data => {
      
              if (gasayidia >= 0 && gasayidia < sabrunavi_sashualebeis_sia.length) {
                let deletedItem = sabrunavi_sashualebeis_sia[gasayidia];
                    sabrunavi_sashualebeis_sia.splice(gasayidia, 1);
                let updatedData = { sabrunavi_sashualebeis_sia: sabrunavi_sashualebeis_sia };
      
                fetch('gayidva.php', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(updatedData)
                })
                  .then(response => {  if (!response.ok) { throw new Error('Network response was not ok'); } return response.json(); })
                  .then(data => { istoriashi_damateba(); loading(); setTimeout(() => { location.reload(); }, 3000); })
                  .catch(error => { console.error('Error deleting item:', error); });
              } 
              else { console.log('Invalid index'); }
            })
            .catch(error => { console.error('Error reading JSON file:', error); });


        } 
            else if (shedegi < 0) {
                message();
                let message_txt = document.getElementById('message_txt');
                    message_txt.textContent = "საწყობში არ არის ამდენი ეთეული";
                    let message_button = document.getElementById("message_button");
                        message_button.textContent = "გასაგებია";
                          message_button.addEventListener('click',()=>{ let message_div = document.getElementById('message'); message_div.remove(); })
            } 
                else if (gayiduli_raodenoba<=0){
                  message();
                  let message_txt = document.getElementById('message_txt');
                      message_txt.textContent = "გასაყიდი რაოდენობა უნდა იყოს 1 ან მეტი!!";
                      let message_button = document.getElementById("message_button");
                          message_button.textContent = "გასაგებია";
                            message_button.addEventListener('click',()=>{ let message_div = document.getElementById('message'); message_div.remove(); })

                }
                    else {
                        let delete_number = gasayidia;
                        let sabrunavi_sashualebeis_sia = data.sabrunavi_sashualebeis_sia;
                        let gasayide_produqti = sabrunavi_sashualebeis_sia[delete_number];
                        
                        var produqtis_saxeli = document.getElementById('gasayidi_saxeli');
                        var produqtis_komentari = document.getElementById('gasayidi_komentari');
                        var gasayidi_adgili = document.getElementById('gasayidi_adgili');
                        var produqtis_fasi = document.getElementById('gasayidi_fasi');


                        const newelement = [
                          {"nomeri": " "},
                          {"saxeli": produqtis_saxeli.textContent},
                          {"komentari": produqtis_komentari.textContent},
                          {"lokacia": gasayidi_adgili.textContent},
                          {"raodenoba": shedegi},
                          {"fasi": produqtis_fasi.textContent},
                          {"fasi_total": ""}
                        ];


                        



                        fetch('stmdata.json')
                          .then(response => response.json())
                          .then(data => {
                            
                            let shedegia = false;
                      
                            if(shedegia) {alert('გთხოვთ შეიტანოთ ცვლილება') }
                      
                            else{
                      
                              fetch('stmdata.json')
                              .then(response => response.json())
                              .then(data => {

                            if (delete_number >= 0 && delete_number < sabrunavi_sashualebeis_sia.length) {
                              let deletedItem = sabrunavi_sashualebeis_sia[delete_number];
                                sabrunavi_sashualebeis_sia.splice(delete_number, 1);
                                  let updatedData = { sabrunavi_sashualebeis_sia: sabrunavi_sashualebeis_sia };
                                      fetch('delete_item.php', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json', },
                                        body: JSON.stringify(updatedData), })
                                        .then(response => {
                                          if (!response.ok) { throw new Error('Network response was not ok');}
                                            return response.json();
                                        })
                                        .then(data => { console.log('Item deleted:', deletedItem); 
                                        istoriashi_damateba();
                                              loading();
                                                    const xhr = new XMLHttpRequest();
                                                          xhr.open('POST', 'update.php', true);
                                                          xhr.setRequestHeader('Content-type', 'application/json');
                                                          xhr.send(JSON.stringify(newelement));
                                                          xhr.onload = function() {
                                                              if (xhr.status === 200) { setTimeout(() => { location.reload();}, 4000); } 
                                                              else {console.error('Error saving data:', xhr.status); }
                                                          };        
                                        })

                                        .catch(error => { console.error('Error deleting item:', error); });
                                    }  
                                    else { console.log('Invalid index'); }
                                  })
                                  .catch(error => { console.error('Error reading JSON file:', error); });
                            }

                          });
                      





                


                    }
        gayidva_reset();
      }
      
      let produqtis_gayidva = document.getElementById('produqtis_gayidva');
      produqtis_gayidva.addEventListener('click', archeuli_produqtis_gayidva);
      


      //_N6 // ძიების შედეგი პროდუქტის სახელის საშუალებით
          function dziebis_shedegi_produqtis_saxelit(){
          let kay_numb = produqtis_dasaxeleba.value.length;
            if (kay_numb <= 0) { gayidva_reset(); }
                result_table.innerHTML = '';
                    let head_row = document.createElement('tr'); head_row.style.fontWeight = "bolder";
                    let namb = document.createElement('td'); namb.textContent = "N.";
                    let nam = document.createElement('td'); nam.textContent = "სახელი";
                    let komen = document.createElement('td'); komen.textContent = "კომენტარი";
                    let locat = document.createElement('td'); locat.textContent = "ადგილი";
                    let raoden = document.createElement('td'); raoden.textContent = "რაოდენობა";
                    let fas = document.createElement('td'); fas.textContent = "ფასი";
                        head_row.append(namb,nam,komen,locat,raoden,fas); 
                        result_table.appendChild(head_row);
              sabrunavi_sashualebeis_sia.forEach((element, index) => {
                let saxeli = element.find(item => item.hasOwnProperty('saxeli'))?.saxeli;
                    if (saxeli && saxeli.slice(0, kay_numb) === produqtis_dasaxeleba.value.slice(0, kay_numb)) {
                      result.style.opacity = "1"; result.style.display = "flex"; _first_table.style.opacity = '0';  _first_table.style.display = 'none';
                        let result_row = document.createElement('tr');
                          var index_cell = document.createElement('td');
                          index_cell.className = "archeuli_elementis_index";
                            index_cell.textContent = index + 1;
                              result_row.appendChild(index_cell);
                          element.slice(1, 6).forEach(item => { 
                            let table_data = document.createElement('td');
                              table_data.textContent = Object.values(item).join(' ');
                                result_row.appendChild(table_data);
                          });
                                let select_btn = document.createElement('td');
                                  var table_property_item = document.createElement('span');
                                    table_property_item.textContent = "არჩევა";
                                      table_property_item.className = "select_btn";
                                        select_btn.append(table_property_item)
                                          result_row.appendChild(select_btn);
                                            result_table.appendChild(result_row);
                    }
              });

          produqtis_dasaxeleba.addEventListener("keyup", () => {    
              if (produqtis_dasaxeleba.value.length == 0) { 
                  result.style.opacity = "0"; 
                  result.style.display = "none"; 
                  _first_table.style.opacity = '1'; 
                  _first_table.style.display = 'table'; 
              }
          });

            }
          //_N6

              //_N7 // ძიების შედეგი პროდუქტის კომენტარის საშუალებით
              function dziebis_shedegi_komentarit(){
                  let kay_numb = productis_komentari.value.length;
                    if(kay_numb <=0){ gayidva_reset(); }
                        result_table.innerHTML = '';          
                          let head_row = document.createElement('tr'); head_row.style.fontWeight = "bolder";
                          let namb = document.createElement('td'); namb.textContent = "N.";
                          let nam = document.createElement('td'); nam.textContent = "სახელი";
                          let komen = document.createElement('td'); komen.textContent = "კომენტარი";
                          let locat = document.createElement('td'); locat.textContent = "ადგილი";
                          let raoden = document.createElement('td'); raoden.textContent = "რაოდენობა";
                          let fas = document.createElement('td'); fas.textContent = "ფასი";
                            head_row.append(namb,nam,komen,locat,raoden,fas); result_table.appendChild(head_row);
                sabrunavi_sashualebeis_sia.forEach((element, index) => {
                  let komentari = element.find(item => item.hasOwnProperty('komentari'))?.komentari;
                    if (komentari && komentari.slice(0, kay_numb) === productis_komentari.value.slice(0, kay_numb)) {
                      result.style.opacity = "1"; result.style.display = "flex";  _first_table.style.opacity = '0'; _first_table.style.display = 'none';
                    let result_row = document.createElement('tr');
                      let index_cell = document.createElement('td');
                      index_cell.className = "archeuli_elementis_index";
                          index_cell.textContent = index +1;
                            result_row.appendChild(index_cell);
                    element.slice(1, 6).forEach(item => {
                      let table_data = document.createElement('td');
                          table_data.textContent = Object.values(item).join(' ');
                            result_row.appendChild(table_data);
                    }); 
                  let select_btn = document.createElement('td');
                    var table_property_item = document.createElement('span');
                        table_property_item.textContent = "არჩევა";
                        table_property_item.className = "select_btn";
                          select_btn.append(table_property_item)
                            result_row.appendChild(select_btn);
                              result_table.appendChild(result_row); }
                });
                  productis_komentari.addEventListener("keyup", () => {
                    if(productis_komentari.value.length ==0){
                        result.style.opacity = "0";
                        result.style.display = "none";
                        _first_table.style.opacity = '1';
                        _first_table.style.display = 'table';
                      }
                  });
                }
              //_N7

      //_N8 // ძიების შედეგი პროდუქტის სახელის საშუალებით F
      function dzebna_saxelit() {

          // ძიების შედეგი პროდუქტის სახელის საშუალებით
              dziebis_shedegi_produqtis_saxelit();

              // გასაყიდი პროდუქტის არჩევა ძიების შედეგიდან დაწყება
                  gasayidi_produqtis_archeva_dzebnis_shedegidan();

        }
        //_N8

          //_N9 // ძიების შედეგი პროდუქტის კომენტარის საშუალებით F
          function dzebna_komentarit(){

              // ძიების შედეგი პროდუქტის კომენტარის საშუალებით
                  dziebis_shedegi_komentarit();

                  // გასაყიდი პროდუქტის არჩევა ძიების შედეგიდან დაწყება
                      gasayidi_produqtis_archeva_dzebnis_shedegidan();

          }
          //_N9

        produqtis_dasaxeleba.addEventListener('keypress', dzebna_saxelit);
        produqtis_dasaxeleba.addEventListener('input', dzebna_saxelit);
        productis_komentari.addEventListener('input', dzebna_komentarit);
        productis_komentari.addEventListener('keypress', dzebna_komentarit);





          function gayidva_reset() {
            gasayidi_produqtis_pozicia = null;
            gasayidi_saxeli.textContent = "";
            gasayidi_komentari.textContent = "";
            gasayidi_adgili.textContent = "";
            gasayidi_raodenoba.textContent = "";
            gasayidi_fasi.textContent = "";
            document.getElementById('gayiduli_raodenoba').value = "1";

          }
        

           archeva();

        });

      
        
}

function damateba(){


  fetch('stmdata.json')
    .then(response => response.json())
    .then(data => {
      let sabrunavi_sashualebeis_sia = data.sabrunavi_sashualebeis_sia;
        let head_line_content = data.head_line_content;
        let table_header_line = document.getElementById('table_header_line');
        let table_body = document.getElementById('table_body');
          for (let i = 0; i < head_line_content.length; i++) {
            let table_header_line_item = document.createElement('td');
            table_header_line_item.style.fontWeight = "bolder";
            table_header_line_item.textContent = head_line_content[i];
            table_header_line.appendChild(table_header_line_item);
          }
              for (let i = 0; i < sabrunavi_sashualebeis_sia.length; i++) {
                let table_product_line = document.createElement('tr');
                  table_body.append(table_product_line);
                  for (let j = 0; j < sabrunavi_sashualebeis_sia[i].length; j++) {
                    let table_product_line_item = document.createElement('td');
                      table_product_line.appendChild(table_product_line_item);
                        var properties = sabrunavi_sashualebeis_sia[i][j];
                          var table_property_item = document.createElement('span');
                    if(j==0){  for (let property in properties) { 
                        table_property_item.textContent = properties[property]+(i+1); 
                        table_product_line_item.appendChild(table_property_item); 
                      } 
                    }
                      else if( j == sabrunavi_sashualebeis_sia[i].length -1){ 
                        for (let property in properties) {
                          let jami = sabrunavi_sashualebeis_sia[i][j-1].fasi * sabrunavi_sashualebeis_sia[i][j-2].raodenoba + " ₾.";
                            table_property_item.style.fontWeight = "bolder";
                              table_property_item.textContent = properties[property] +" "+ jami;
                                table_product_line_item.appendChild(table_property_item);
                        }
                      }
                        else{ for (let property in properties) { 
                            table_property_item.textContent = properties[property];  
                            table_product_line_item.appendChild(table_property_item); 
                          } 
                        } 
                    }
  }
  
  
  let add_btn = document.getElementById('add_btn');

  let add_produqti = document.getElementById('add_produqti');

  let add_dasaxeleba = document.getElementById('add_dasaxeleba');




  let add_komentari = document.getElementById('add_komentari');

  let add_lokacia = document.getElementById('add_lokacia');
  
  let add_raodenoba = document.getElementById('add_raodenoba');
  let add_fasi = document.getElementById('add_fasi');



  fetch('fasi.json')
  .then(response => response.json())
  .then(data => {
    const fasi = data;
    const add_dasaxeleba = document.getElementById('add_dasaxeleba'); 

    add_dasaxeleba.addEventListener('input', () => {
      let shedegi = document.querySelectorAll('.result_line');


      shedegi.forEach(element => {
        element.remove();
      });
      

      const dasaxeleba = add_dasaxeleba.value;

       let fasi_result = document.getElementById('fasi_result');


      const savaraudo_fasi = document.getElementById('savaraudo_fasi');

      const numb = dasaxeleba.length; 

      for (const [index, element] of fasi.entries()) {
        if(numb < 1){
          fasi_result.style.display = "none";
         }
  else{
        fasi_result.style.display = "flex";
}

        const saxeli = element[1].saxeli;
        if (saxeli.slice(0, numb) === dasaxeleba) {
          let line = document.createElement("tr");
          line.className = "result_line";

          let item_saxeli = document.createElement('td');
              item_saxeli.textContent = element[1].saxeli
          let item_komentari = document.createElement('td');
              item_komentari.textContent = element[2].komentari;

          let item_fasi = document.createElement('td');
              item_fasi.textContent = element[3].fasi + "/" + index;

              let point = document.createElement("samp")
              point.textContent = index;
              point.className = "point";

          line.append(item_saxeli, item_komentari, item_fasi,point);

          savaraudo_fasi.prepend(line)
          console.log(element[1].saxeli);


        }
      }



      let result_line = document.querySelectorAll('.result_line');
      let point = document.querySelectorAll('.point');

      result_line.forEach((element,index) => {

        element.addEventListener('click', ()=>{
         let archeuli = point[index].textContent;
         let archeuli_elementi = fasi[archeuli];

         add_dasaxeleba.value = archeuli_elementi[1].saxeli;
         add_dasaxeleba.style.backgroundColor = "rgb(255, 0, 0, 0.3)";

         add_komentari.value = archeuli_elementi[2].komentari;
         add_komentari.style.backgroundColor = "rgb(255, 0, 0, 0.3)";

          add_fasi.value = archeuli_elementi[3].fasi;
          add_fasi.style.backgroundColor = "rgb(255, 0, 0, 0.3)";

         fasi_result.style.display = "none";

          add_raodenoba.focus();

        })
      });


    });
  });

  add_komentari.addEventListener('focus', ()=>{
    let fasi_result = document.getElementById('fasi_result');
    fasi_result.style.display = "none";

  })

  function add_item() {


    function fasi() {
      const add_dasaxeleba = document.getElementById('add_dasaxeleba');
      const add_komentari = document.getElementById('add_komentari');
      const add_fasi = document.getElementById('add_fasi');
      

                      const element_fasi = [
                        {"nomeri": " "},
                        {"saxeli": add_dasaxeleba.value},
                        {"komentari": add_komentari.value},
                        {"fasi": add_fasi.value},
                      ];
    
      fetch('fasi.json')
        .then(response => response.json())
        .then(data => {




          const xhr = new XMLHttpRequest();
          xhr.open('POST', 'add_fasi.php', true);
          xhr.setRequestHeader('Content-type', 'application/json');
          xhr.send(JSON.stringify(element_fasi));
    
          xhr.onload = function() {
            if (xhr.status === 200) {
              location.reload();
            } else {
              console.error('Error saving data:', xhr.status);
            }
          };
          // console.log(element_fasi);
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
    }
    

    add_btn.addEventListener('click', () => {
      if (
        add_dasaxeleba.value.length <= 0 ||
        add_komentari.value.length <= 0 ||
        add_lokacia.value.length <= 0 ||
        add_raodenoba.value.length <= 0 ||
        add_fasi.value.length <= 0
      ) {
        alert("გთხოვთ შეავსოთ ყველა ველი");
        return;
      }

      fetch('fasi.json')
      .then(response => response.json())
      .then(data => {
          let arsebuli_fasi = data;
          let dasaxeleba = document.getElementById('add_dasaxeleba').value;
          let komentari = document.getElementById('add_komentari').value;
          let archeuli_fasi = document.getElementById('add_fasi').value;
    
          let found = false; 
    
          arsebuli_fasi.forEach(element => {
              if (element[1].saxeli === dasaxeleba && element[2].komentari === komentari && element[3].fasi === archeuli_fasi) {
                  console.log("daemtxva");
                  found = true; 
                  return;
              } else {
                  console.log(element[1].saxeli);
                  // fasi();
              }
          });
    
          if (!found) {
              console.log("aitvirta");
              fasi();
          }
      });
    
    
    // Call fasi() only once after the fetch and loop
    
  
      const element = [
        {"nomeri": " "},
        {"saxeli": add_dasaxeleba.value},
        {"komentari": add_komentari.value},
        {"lokacia": add_lokacia.value},
        {"raodenoba": add_raodenoba.value},
        {"fasi": add_fasi.value},
        {"fasi_total": ""}
      ];
  
      
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'save_data.php', true);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.send(JSON.stringify(element));
  
      xhr.onload = function() {
        if (xhr.status === 200) {
          location.reload();
        } else {
          console.error('Error saving data:', xhr.status);
        }
      };
  
      setTimeout(() => {
        
      add_produqti.reset(); 
         }, 1000);

    });
  }
  
  add_item();
        }) 
}

function tsashla(){



// Select the container element that holds your item_1 elements





fetch('stmdata.json')
.then(response => response.json())
.then(data => {

  let sabrunavi_sashualebeis_sia = data.sabrunavi_sashualebeis_sia;
    let head_line_content = data.head_line_content;

    let table_header_line = document.getElementById('table_header_line');
    let table_body = document.getElementById('table_body');

      for (let i = 0; i < head_line_content.length; i++) {
        let table_header_line_item = document.createElement('td');
        table_header_line_item.style.fontWeight = "bolder";
        table_header_line_item.textContent = head_line_content[i];
        table_header_line.appendChild(table_header_line_item);
      }
          for (let i = 0; i < sabrunavi_sashualebeis_sia.length; i++) {
            let table_product_line = document.createElement('tr');
            table_product_line.style.cursor = "pointer";
            table_product_line.className = "table_product_line";

              table_body.append(table_product_line);

              for (let j = 0; j < sabrunavi_sashualebeis_sia[i].length; j++) {
                let table_product_line_item = document.createElement('td');
                  table_product_line.appendChild(table_product_line_item);
                    var properties = sabrunavi_sashualebeis_sia[i][j];
                      var table_property_item = document.createElement('span');
                if(j==0){ 
                  for (let property in properties) { 
                    table_property_item.textContent = properties[property]+(i+1); 
                    table_product_line_item.appendChild(table_property_item); 
                  } 
                }
                  else if( j == sabrunavi_sashualebeis_sia[i].length -1){ 
                    for (let property in properties) {
                      let jami = sabrunavi_sashualebeis_sia[i][j-1].fasi * sabrunavi_sashualebeis_sia[i][j-2].raodenoba + " ₾.";
                        table_property_item.style.fontWeight = "bolder";
                          table_property_item.textContent = properties[property] +" "+ jami;
                            table_product_line_item.appendChild(table_property_item);
                    }
                  }
                    else{ 
                      for (let property in properties) { 
                        table_property_item.textContent = properties[property];  
                        table_product_line_item.appendChild(table_property_item); 
                      } 
                    } 
                }
}



let produqtis = document.querySelectorAll('.table_product_line');

for (let v = 0; v < produqtis.length; v++) {
  let select_produqt = produqtis[v];


  function select_item() {    



    function only_one_select(){
      for (let i = 0; i < produqtis.length; i++) {
        let select_produqt = produqtis[i];
        if (select_produqt.classList.contains('produqtis_active')) {
          select_produqt.classList.remove('produqtis_active');
        }
      }
  }
  only_one_select();

    select_produqt.classList.add('produqtis_active');

      var produqtis_saxeli = document.getElementById('dasaxeleba');
      var produqtis_komentari = document.getElementById('komentari');
      var produqtis_lokacia = document.getElementById('add_lokacia');
      var produqtis_raodenoba = document.getElementById('raodenoba');
      var produqtis_fasi = document.getElementById('fasi');
      var pozicia = document.getElementById('pozicia');

      
function item_in_form(){


  pozicia.value = v + 1;
    let properties = sabrunavi_sashualebeis_sia[v];
        let saxeli = properties[1].saxeli;
        let komentari = properties[2].komentari;
        let add_lokacia = properties[3].lokacia;
        let raodenoba = properties[4].raodenoba;
        let fasi = properties[5].fasi;
        
            produqtis_saxeli.value = saxeli;
            produqtis_komentari.value = komentari;
            produqtis_lokacia.value = add_lokacia;
            produqtis_raodenoba.value = raodenoba;
            produqtis_fasi.value = fasi;
}

    function item_in_form_kayprass(){
      pozicia.value = index +1;
          let properties = sabrunavi_sashualebeis_sia[index];
              let saxeli = properties[1].saxeli;
              let komentari = properties[2].komentari;
              let raodenoba = properties[3].raodenoba;
              let fasi = properties[4].fasi;
                  produqtis_saxeli.value = saxeli;
                  produqtis_komentari.value = komentari;
                  produqtis_raodenoba.value = raodenoba;
                  produqtis_fasi.value = fasi;
    }

      var index = v;

          document.addEventListener("keydown", (event) => {

              if (event.key === 'ArrowDown') {
                if (index >= 0 && index < produqtis.length) { produqtis[index].classList.remove('produqtis_active'); index++; 
                    if (index < produqtis.length) { only_one_select();
                          produqtis[index].classList.add('produqtis_active');
                    } 
                          else {  produqtis[produqtis.length-1].classList.add('produqtis_active'); 
                                  index = produqtis.length-1;
                                }
                  } item_in_form_kayprass();
              } 
                          
                  else if (event.key === 'ArrowUp') { only_one_select();
                          if (index >= 0 && index < produqtis.length) {   
                              produqtis[index].classList.remove('produqtis_active');  
                              index--;
                            if (index >= 0) {
                                produqtis[index].classList.add('produqtis_active');
                            } 
                              else {  produqtis[0].classList.add('produqtis_active'); 
                                      index = 0;
                                    }
                          } item_in_form_kayprass();

                        }
          });
    item_in_form();
  }
  
  select_produqt.addEventListener("click", select_item);

}


function delete_f() {
  let pozicia = document.getElementById('pozicia');
  var delete_number = pozicia.value - 1;

  fetch('stmdata.json')
    .then(response => response.json())
    .then(data => {
      let sabrunavi_sashualebeis_sia = data.sabrunavi_sashualebeis_sia;

      if (delete_number >= 0 && delete_number < sabrunavi_sashualebeis_sia.length) {
        let deletedItem = sabrunavi_sashualebeis_sia[delete_number];
          sabrunavi_sashualebeis_sia.splice(delete_number, 1);
            let updatedData = { sabrunavi_sashualebeis_sia: sabrunavi_sashualebeis_sia };

                fetch('delete_item.php', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json', },
                  body: JSON.stringify(updatedData), })

                  .then(response => {
                    if (!response.ok) { throw new Error('Network response was not ok');  }
                      return response.json();
                  })
                  .then(data => { console.log('Item deleted:', deletedItem); })
                  .catch(error => { console.error('Error deleting item:', error); });
              } 
              else { console.log('Invalid index'); }
            })
            .catch(error => { console.error('Error reading JSON file:', error); });
  }

let delete_item_btn = document.getElementById('delete_item_btn');
    delete_item_btn.addEventListener('click', () => { delete_f(); setTimeout(() => { location.reload(); }, 2000); });



function edit_f() {
  let pozicia = document.getElementById('pozicia');
  let delete_number = pozicia.value - 1;

  fetch('stmdata.json')
    .then(response => response.json())
    .then(data => {

      let sabrunavi_sashualebeis_sia = data.sabrunavi_sashualebeis_sia;

      var produqtis_saxeli = document.getElementById('dasaxeleba');
      var produqtis_komentari = document.getElementById('komentari');
      var produqtis_lokacia = document.getElementById('add_lokacia');
      
      var produqtis_raodenoba = document.getElementById('raodenoba');

      var produqtis_fasi = document.getElementById('fasi');

      const element = [
        {"nomeri": " "},
        {"saxeli": produqtis_saxeli.value},
        {"komentari": produqtis_komentari.value},
        {"lokacia": produqtis_lokacia.value},
        {"raodenoba": produqtis_raodenoba.value},
        {"fasi": produqtis_fasi.value},
        {"fasi_total": ""}
      ];
      let shedegia = true;

      let archeuli = sabrunavi_sashualebeis_sia[delete_number];

      let pirveli = [
        archeuli[1].saxeli,
        archeuli[2].komentari,
        archeuli[3].lokacia,        
        archeuli[4].raodenoba,
        archeuli[5].fasi
      ];

      let meore = [
        element[1].saxeli,
        element[2].komentari,
        element[3].lokacia,
        element[4].raodenoba,
        element[5].fasi
      ];

      let shedegi = [];

      for (let i = 0; i < 5; i++) {
        if (pirveli[i] == meore[i]) { shedegi.push(pirveli[i]); } 
          else {shedegi.push(meore[i]); shedegia = false}
      }

      var newelement = [
        {"nomeri": " "},
        {"saxeli": shedegi[0]},
        {"komentari": shedegi[1]},
        {"lokacia": shedegi[2]},
        {"raodenoba": shedegi[3]},
        {"fasi": shedegi[4]},
        {"fasi_total": ""}
      ];

      if(shedegia) {alert('გთხოვთ შეიტანოთ ცვლილება') }

      else{

        fetch('stmdata.json')
        .then(response => response.json())
        .then(data => {
    
      if (delete_number >= 0 && delete_number < sabrunavi_sashualebeis_sia.length) {
        let deletedItem = sabrunavi_sashualebeis_sia[delete_number];
          sabrunavi_sashualebeis_sia.splice(delete_number, 1);
            let updatedData = { sabrunavi_sashualebeis_sia: sabrunavi_sashualebeis_sia };
                fetch('delete_item.php', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json', },
                  body: JSON.stringify(updatedData), })
                  .then(response => {
                    if (!response.ok) { throw new Error('Network response was not ok');}
                      return response.json();
                  })
                  .then(data => { console.log('Item deleted:', deletedItem); })
                  .catch(error => { console.error('Error deleting item:', error); });
              }  else { console.log('Invalid index'); }

              setTimeout(() => {

                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'update.php', true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.send(JSON.stringify(newelement));
                xhr.onload = function() {
                  if (xhr.status === 200) { location.reload(); } 
                  else {console.error('Error saving data:', xhr.status); }
                };
            
          


              }, 500);
            })
            .catch(error => { console.error('Error reading JSON file:', error); });
      }
      console.log(newelement);
    });
}

  let edit_item_btn = document.getElementById('edit_item_btn');
      edit_item_btn.addEventListener('click', edit_f );

});




}

function fasebi(){
  fetch('fasi.json')
  .then(response => response.json())
  .then(data => {




      let fasebi = data;


      let table_line_fasi = document.getElementById('table_line_fasi');

            let _n = 1;
      for(i = fasebi.length -1; i>=0; i--){
        let line = document.createElement('tr');

        let item_n = document.createElement('td');
        item_n.textContent = _n;

        let item_name = document.createElement('td');
        item_name.textContent = fasebi[i][1].saxeli;

        let item_koment = document.createElement('td');
        item_koment.textContent = fasebi[i][2].komentari;

        let item_fasi = document.createElement('td');
        item_fasi.textContent = fasebi[i][3].fasi + " ₾.";

        _n ++;
        line.append(item_n,item_name,item_koment,item_fasi);
        table_line_fasi.append(line);
      }

    })
    
    
}

