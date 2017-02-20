            "use strict";

            class App{
              constructor(){
                this.pipo = [
                {
                  "id": 1,
                  "name": "Reese Dela Cruz",
                  "usn":"15000871300",
                  "datein":"Jan 23, 2017",
                  "dateout":"Jan 24, 2018",
                  "description": "MSI Laptop. SN: CRKQWEK234617IOB ",
                      "image": "img/aa.jpg",
                      "approve":"img/pending.jpg",
               


                },
                  {
                  "id": 2,
                  "name": "Jason Alfar",
                  "usn":"15000489000",
                  "datein":"February 14 2017",
                  "dateout":"February 15, 2018",
                  "description": "Asus Laptop, SN: EANUCV0478664IF",
                         "image": "img/aa.jpg",
                           "approve":"img/pending.jpg",
                    

                },
                {
                  "id": 3,
                  "name": "Bernard Aguilar",
                  "usn":"15000871300",
                  "datein":"",
                  "dateout":"",
                  "description": "Acer Laptop",
                  "image": "img/aa.jpg",
                    "approve":"img/pending.jpg",
                  
                },
                {
                  "id": 4,
                  "name": "Louie Lumanta",
                  "usn":"15000871300",
                  "datein":"",
                  "dateout":"",
                  "description": "Acer Laptop",
                  "image": "img/aa.jpg",
                "approve":"img/pending.jpg",

                },
                {
                  "id": 5,
                  "name": "Jason Lam ",
                  "usn":"15000871300",
                  "datein":"",
                  "dateout":"",
                  "description": "Toshiba Laptop",
                  "image": "img/aa.jpg",
                           "approve":"img/pending.jpg",


                },    
                {
                  "id": 6,
                  "name": "Hannah Tan",
                  "usn":"15000871300",
                  "datein":"",
                  "dateout":"",
                  "description": "Asus Laptop",
                  "image": "img/aa.jpg",
                           "approve":"img/pending.jpg",


                }, 
                {
                  "id": 7,
                  "name": "April Tumala",
                  "usn":"15000871300",
                  "datein":"",
                  "dateout":"",
                  "description": " Dell Laptop",
                  "image": "img/aa.jpg",
                  "approve":"img/pending.jpg",



                },   
                {
                  "id": 8,
                  "name": "Keno Bergado",
                  "usn":"15000871300",
                  "datein":"",
                  "dateout":"",
                  "description": "Acer Laptop",
                  "image": "img/aa.jpg",
                           "approve":"img/pending.jpg",
          
                },    
                {
                  "id": 9,
                  "name": "Kent Dael",
                  "usn":"15000871300",
                  "datein":"",
                  "dateout":"",
                  "description": "Asus Laptop",
                  "image": "img/aa.jpg",
                           "approve":"img/pending.jpg",
       

                },   
                {
                  "id": 10,
                  "name": "Norberto Laudenorio",
                  "usn":"15000871300",
                  "datein":"",
                  "dateout":"",
                  "description": "Projector.",
                  "image": "img/aa.jpg",
                           "approve":"img/pending.jpg",


                },
                {
                  "id": 11,
                  "name": "Bryan Bayer",
                  "usn":"15000871300",
                  "datein":"",
                  "dateout":"",
                  "description": "Asus Rog Laptop",
                  "image": "img/aa.jpg",
                           "approve":"img/pending.jpg",

                },  
                {
                  "id": 12,
                  "name": "Finney Edbriel",
                  "usn":"15000871300",
                  "datein":"",
                  "dateout":"",
                  "description": "Asus Laptop",
                  "image": "img/aa.jpg",
                           "approve":"img/pending.jpg",


                }  
              


                ];


                this.studentpicture = [
                {
                  "pic":"img/aa.jpg",
                       "pendingpic":"img/pending.jpg",



                },
                ];
                 this.picture = [
                {
                  "idpic": 1,
                  "pic":"img/aa.jpg",
                  "approvepic":"img/approve.png",



                },
                this.login = [
                {
                  "id":1,
                "username":"1403211363",
                "password":"passinpassout01",
              },
                {
                    "id":2,
                "username":"1453234662",
                "password":"passinpassout02",
              },
                {
                   "id":3,
                "username":"1462206235",
                "password":"passinpassout03",
              },
                {
                  "id":4,
                "username":"1409921336",
                "password":"passinpassout04",
              },
              {
                  "id":5,
                "username":"15000871300",
                "password":"GDP300500",
              },

                ] 

                ];


              }




              render(html, component){

                component.innerHTML += html;
              }

              reRender(html, component){

                component.innerHTML = html;
              }

              createDesign(){
                let id = document.getElementById('base_id');
                let name = document.getElementById('coc_name');
                let description = document.getElementById('coc_description');
                let image = document.getElementById('coc_image');
                let usn = document.getElementById('coc_usn');
                let datein = document.getElementById('coc_in');
                let dateout = document.getElementById('coc_out');
                let approve = document.getElementById('coc_approve');



                let pipo = {      
                  "id": id.value,
                  "name": name.value,
                  "description": description.value,
                  "image": image.value,
                  "usn": usn.value,
                  "datein": datein.value,
                  "dateout": dateout.value,
                     "approve": approve.value,
          


                };



                this.pipo.push(pipo);


               approve.value = datein.value = dateout.value = id.value = usn.value = name.value = description.value = image.value = ''; 
               this.requestparty();
              } 

         
           

              deleteForm(key){
                let r = this.pipo;
                for(let i=0;i<r.length;i++){
                  if(r[i].id == key){
                    this.pipo.splice(i,1);
                    break;
                  }
                }   
                this.pipoList();
              }

              updatePipoForm(id){

                id = id+1;
                let baseDummy = {
                  "id" :  id,
                  "name" : $('#cocname').val(),
                  "description" : $('#cocdes').val(),
                  "usn" : $('#cocusn').val(),
                   "image" : $('#cocimg').val(),
                  "datein" : $('#cocin').val(),
                  "dateout" : $('#cocout').val(),
                   "approve" : $('#cocapprove').val(),
                }


                let r = this.pipo;
                for(let i=0;i<r.length;i++){
                  if(r[i].id == id){
                    r[i] = baseDummy;
                    break;
                  }
                }

                this.updateApproveId();
              }
               updateApproveId(id){

                id = id+1;
                let baseDummy = {
                  "id" :  id,
                     "name" : $('#cocname').val(),
                  "description" : $('#cocdes').val(),
                  "usn" : $('#cocusn').val(),
                   "image" : $('#cocimg').val(),
                  "datein" : $('#cocin').val(),
                  "dateout" : $('#cocout').val(),
                    "approve" : $('#approverequest').val(),
                }
                

                let r = this.pipo;
                for(let i=0;i<r.length;i++){
                  if(r[i].id == id){
                    r[i] = baseDummy;
                    break;
                  }
                }
                this.pipoList();
              }



              searchPipoById(id){
                let r = this.pipo;
                for(let i=0;i<r.length;i++){
                  if(id==r[i].id){
                    return r[i];
                  }
                }
              }


              searchPipoId(name){
                let objects = [];
                let r = this.pipo;
                for(let i=0;i<r.length;i++){
                  let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
                  if(expr){
                    objects.push(r[i]);
                  }
                }
                return objects;
              }



            }

            class Component extends App{
              constructor(){

                super();
              }

              baseLayout(){
                let html = `


                `;

                html+=`

                <div id="landingPage"></div>
                <div id="recentHome"></div>
                <div id="pipoView"></div>
                <div id="recentView"></div>
                <div id="adminView"></div>
                <div id="updatePipo"></div>
                <div id="pipoList"></div>
                <div id="createForm"></div>
                <div id="loginForm"></div>
                <div id="requestparty"></div>
                <div id="checkRequest"></div>
                <div id="approveView"></div>
                <div id="updateApproveId"></div>
                <div id="updateApprove"></div>
                <div id="validateForm"></div>
                <div id="logoutValidation"></div>
                <div id="submitValidation"></div>








                `;

                this.reRender(`
                  ${html}

                  `,document.getElementById("app"));
                this.recentHome();    
              }

              recentHome(){

                let html = `



                <header id="header"onclick="component.requestparty()">
                <div class="inner">
                <div class="content">  

      <h1><br><br>Welcome to <br>Pass in Pass out :*</h1>



                </div>
                
                <a href="#" class="button hidden"><span> <3 <3 </span></a>
                </div>
                </header>



                



                `;

                this.render(`   
                  ${html}
                  `,document.getElementById("recentHome"));
              }

              pipoView(id){
                let r = this.searchPipoById(id);
                let html=`
          `;
                html += `



      <section>       
            <div id="wrapper" >
            <div id="login" class="animate form">
                <div class="card">
                <div class="card-image">
                <img src="${r.image}">
                </div>
                <div class="card-stacked">
                <div class="card-content">
                <h2 class="center-align">${r.name}</h2>
                <br>
                <p><b>Date In: </b>${r.datein}</p>
                <p><b>Date Out: </b>${r.dateout}</p>
                <p><b>Item Details: </b>${r.description}</p>
                </div>
                <div class="card-action small"> 
                <div class="center-align">          
    <center <span onclick="component.checkRequest()" class="action-button shadow animate blue">Close</span></center>
                </div>            
                </div>     
                </div>   

                </div>      
                </div>
                `;

                this.reRender(`   
                  ${html}     
                  `,document.getElementById("pipoView"));
                $('#updateApproveId').hide();
                $('#pipoView').show();
                $('#adminView').hide();
                $('#recentHome').hide();
                $('#updatePipo').hide();
                $('#pipoList').hide();
                $('#createForm').hide();
                $('#loginForm').hide();
                $('#landingPage').hide();
                $('#requestparty').hide();
                $('#checkRequest').hide();
                $('#approveView').hide();
                $('#updateItems').hide();
                $('#recentView').hide();
              }
                    recentView(id){
                let r = this.searchPipoById(id);
                let html=`

                `;
                html += `




          <section>       
            <div id="wrapper" >
            <div id="login" class="animate form">
                <div class="card">
                <div class="card-image">
                <img src="${r.approve}">
                </div>
                <div class="card-stacked">
                <div class="card-content">
                <h4 class="center-align">Control #: ${r.id}</h4>
                    <h2 class="center-align">${r.name}</h2>
                <h2 class="center-align">${r.usn}</h2>

                <br>

                </div>
                <div class="card-action">         
           <center <span onclick="component.requestparty()" class="action-button shadow animate blue">Back to Home</span></center>
                     <center <span onclick="component.checkRequest()" class="action-button shadow animate orange">Proceed to List</span></center>
                </div>            
                </div>     
                </div>   

                </div>      
                </div>
                `;

                this.reRender(`   
                  ${html}     
                  `,document.getElementById("recentView"));
                $('#updateApproveId').hide();
                      $('#recentView').show(); 
                $('#pipoView').hide();
                $('#adminView').hide();
                $('#recentHome').hide();
                $('#updatePipo').hide();
                $('#pipoList').hide();
                $('#createForm').hide();
                $('#loginForm').hide();
                $('#landingPage').hide();
                $('#requestparty').hide();
                $('#checkRequest').hide();
                $('#approveView').hide();
                $('#updateItems').hide();

              }
              adminView(id){
                let r = this.searchPipoById(id);     
                let html=`
      

                `;

               html += `




          <section>       
            <div id="wrapper" >
            <div id="login" class="animate form">
                <div class="card">
                <div class="card-image">
                <img src="${r.image}">

                </div>
                <div class="card-stacked">
                <div class="card-content">
                <div class="left-align">
                   <h4 class="center-align">Control #: ${r.id}</h4>
                <h2 class="center-align">${r.name}</h2>
                     <h2 class="center-align">${r.usn}</h2>
                <br>
                </div>
                <div class="card-action ">    
            <span onclick="component.pipoList()" class="action-button shadow animate blue">Close</span>
      
             <span onclick="component.deleteForm(${r.id})" class="action-button shadow animate red">Delete Request</span>
                <br>
           <br>
            <center <span onclick="component.updateApprove(${r.id})" class="action-button shadow animate purple">Open Request</span></center>
                </div>            
                </div>     
                </div>   

                </div>      
                </div>
                `;

                this.reRender(`   
                  ${html}     
                  `,document.getElementById("adminView"));
                 $('#logoutValidation').hide();
                $('#updateApproveId').hide();
                $('#adminView').show();  
                $('#pipoView').hide();
                $('#recentHome').hide();
                $('#updatePipo').hide();
                $('#pipoList').hide();
                $('#createForm').hide();
                $('#loginForm').hide();
                $('#landingPage').hide();
                $('#requestparty').hide();
                $('#checkRequest').hide();
                $('#updateItems').hide();
                $('#recentView').hide();
              }
              approveView(id){
                let r = this.searchPipoById(id);
                let html=`
    

                `;
                html += `



             <section>       
            <div id="wrapper" >
            <div id="login" class="animate form">
                <div class="card">
                <div class="card-image">
                <img src="${r.approve}">
                </div>
                <div class="card-stacked">
                <div class="card-content">
                <h2 class="center-align">${r.name}</h2>
                <br>
                <p><b>Date In: </b>${r.datein}</p>
                <p><b>Date Out: </b>${r.dateout}</p>
                <p><b>Item Details: </b>${r.description}</p>
                </div>
                <div class="card-action small"> 
                <div class="center-align">          
    <center <span onclick="component.checkRequest()" class="action-button shadow animate blue">Close</span></center>
                </div>            
                </div>     
                </div>   

                </div>      
                </div>
                `;

                this.reRender(`   
                  ${html}     
                  `,document.getElementById("approveView"));
                $('#updateApproveId').hide();
                $('#approveView').show();  
                $('#adminView').hide();
                $('#pipoView').hide();
                $('#recentHome').hide();
                $('#updatePipo').hide();
                $('#pipoList').hide();
                $('#createForm').hide();
                $('#loginForm').hide();
                $('#landingPage').hide();
                $('#requestparty').hide();
                $('#checkRequest').hide();
                $('#updateItems').hide();
                $('#recentView').hide();
              }



              pipoList(){
                let html = `


                   <ul class="topnav" id="myTopnav">
 <li><a class="active" href="#"onclick="component.logoutValidation()"><i class="material-icons">info_outline</i>Logout</a></li> 
 <li class="icon">

  </li>
  
</ul>

                <nav>
                <div class="nav-wrapper   white accent-2">
                <form>
                <div class="input-field">       
                <input onkeyup="component.pipoItems(this.value)" id="search" type="search" placeholder="Search" required>
                <label for="search "><i class="material-icons ">search</i></label>
                <i class="material-icons"onclick="component.pipoList()">close</i>
                </div>
                </form>
                </div>
                </nav>
                <br/>

                `;

                html += `
                <div class="row" id="pipoItems">
            
                `;
                let r = this.pipo;
                for(let i=0;i<r.length;i++){
                  html+= `

                  <div class="col s6 m6">
                  <div class="card  ">
                  <div class="card-image">
                  <img src="${r[i].image}">
              <span class="card-title lime accent-1">Name: ${r[i].name}<br>Usn: ${r[i].usn}</span>

                  </div>
                  <div class="card-content">
                   <p>Control # : ${r[i].id}</p>
                  </div>
                  <div class="card-action lime accent-1">
                  <a href="#" onclick="component.adminView(${r[i].id})"><i class="material-icons">assignment</i>Students Request</a>
                  </div>
                  </div>
                  </div>
                  `;

                }

                html += `

                </div>`;

                this.reRender(`
                  ${html}
                  `,document.getElementById("pipoList"));
                     $('#logoutValidation').hide();
                $('#updateApproveId').hide();
                $('#adminView').hide();
                $('#pipoList').show();
                $('#pipoView').hide();
                $('#recentHome').hide();
                $('#updatePipo').hide();
                $('#createForm').hide();    
                $('#loginForm').hide();    
                $('#landingPage').hide();
                $('#requestparty').hide();
                $('#checkRequest').hide();
                $('#approveView').hide();
                $('#updateItems').hide();
                $('#recentView').hide();
              }
                 

              pipoItems(name){
                let html = ``;
                let r = this.searchPipoId(name);
                for(let i=0;i<r.length;i++){
                  html+= `
                  <div class="col s6 m4">
                  <div class="card ">
                  <div class="card-image">
                  <img src="${r[i].image}">
              <span class="card-title lime accent-1">Name: ${r[i].name} <br> Usn: ${r[i].usn}</span>

                  </div>
                  <div class="card-content">
                  <br>
                  </div>
                  <div class="card-action  lime accent-1">
                  <a href="#" onclick="component.adminView(${r[i].id})"><i class="material-icons">assignment</i>Students Request</a>
                  </div>
                  </div>
                  </div>
                  `;
                }   


                this.reRender(`
                  ${html}
                  `,document.getElementById("pipoItems"));
                $('#updateApproveId').hide();
                $('#pipoList').show();
                $('#adminView').hide();
                $('#pipoView').hide();
                $('#recentHome').hide();
                $('#updatePipo').hide();  
                $('#createForm').hide();
                $('#loginForm').hide();    
                $('#landingPage').hide();    
                $('#requestparty').hide();
                $('#checkRequest').hide();
                $('#approveView').hide();
                $('#updateItems').hide();
                $('#recentView').hide();
              }

              


              pipoInventory(name){
                  let html = ``;
                let r = this.searchPipoId(name);
                for(let i=0;i<r.length;i++){
                  html+= `
                 <div class="col s6 m4">
                 <div class="card">
                 <div class="card-image">
                 <img src="${r[i].image}">
                 <span class="card-title cyan accent-1">Name: ${r[i].name} <br>Usn: ${r[i].usn}</span>

                 </div>
                 <div class="card-content">
                 <br>
                 </div>
                 <div class="card-action cyan accent-1">
                 <a href="#" onclick="component.pipoView(${r[i].id})"><i class="material-icons">assignment</i>View Request</a>
                  <a href="#" onclick="component.approveView(${r[i].id})"><i class="material-icons">verified_user</i>Approval </a>

                 </div>
                 </div>
                 </div>

                 `;

               }   


               this.reRender(`
                ${html}
                `,document.getElementById("pipoInventory"));
               $('#updateApproveId').hide();
               $('#pipoList').hide();
               $('#pipoView').hide();
               $('#adminView').hide();
               $('#recentHome').hide();
               $('#updatePipo').hide();  
               $('#createForm').hide();
               $('#loginForm').hide();    
               $('#landingPage').hide();    
               $('#requestparty').hide();
               $('#checkRequest').show();
               $('#approveView').hide();
               $('#updateItems').hide();
               $('#recentView').hide();
             }
             checkRequest(){

              let html=`


<ul class="topnav" id="myTopnav">
 <li><a class="active" href="#"onclick="component.requestparty()"><i class="material-icons">lock_outline</i>Back</a></li> 
  
</ul>
              <nav>
              <div class="nav-wrapper   white accent-2">
              <form>
              <div class="input-field">       
              <input onkeyup="component.pipoInventory(this.value)" id="search" type="search" placeholder="Search" required>
              <label for="search "><i class="material-icons ">search</i></label>
              <i class="material-icons"onclick="component.checkRequest()">close</i>
              </div>
              </form>
              </div>
              </nav>
              <br/>

              `;

              html += `
              <div class="row" id="pipoInventory">
        
              `;




              let r = this.pipo;
              let count = 0;
              for(let i=(r.length-1);i>=0;i--){
                if(count++ === this.pipo)break;
                html+= `

                <div class="col s6 m6">
                <div class="card ">
                <div class="card-image">
                <img src="${this.studentpicture[0].pic}">
                <span class="card-title cyan accent-1">Name: ${r[i].name} <br> Usn: ${r[i].usn}</span>
                </div>
                <div class="card-content">
                 <h4>Control #: ${r[i].id} </h4>
                </div>
                <div class="card-action  cyan accent-1">
                <a href="#" onclick="component.pipoView(${r[i].id})"><i class="material-icons">assignment</i>View Request</a>
                <a href="#" onclick="component.approveView(${r[i].id})"><i class="material-icons">verified_user</i>Approval </a>
                </div>
                </div>
                </div>
                `;

              }
              this.reRender(`
                ${html}
                `,document.getElementById("checkRequest"));
              $('#updateApproveId').hide();
              $('#createForm').hide();
              $('#pipoList').hide();
              $('#pipoView').hide();
              $('#adminView').hide();
              $('#updatePipo').hide();
              $('#recentHome').hide(); 
              $('#loginForm').hide();  
              $('#landingPage').hide();  
              $('#requestparty').hide();
              $('#checkRequest').show();
              $('#approveView').hide();
              $('#updateItems').hide();
              $('#recentView').hide();


            }


            createForm(){

              let html = `


              `;

              for(let i=0;i<this.studentpicture.length;i++){
               html+=`

               <section>       


               <a class="hiddenanchor" id="toregister"></a>
               <a class="hiddenanchor" id="tologin"></a>
               <div id="wrapper">


               <div id="login" class="animate form">


               <h1><i class="medium material-icons right">lock_outline</i>Pass in Pass out Form</h1> 

               <input disabled value="${this.pipo.length+1}" id="base_id" type="hidden">
               <input disabled value="${this.studentpicture[i].pic}" id="coc_image" placeholder="Current Picture"type="hidden"/>
               <input disabled value="${this.studentpicture[i].pendingpic}" id="coc_approve" placeholder="Pending Approval"type="hidden"/>
               <p> 
               <label for="coc_name"required="required" ><i class="material-icons ">person_pin</i>Requesting Party </label>
               <input id="coc_name" name="coc_name" placeholder="Enter Your Name"/>
               </p>

               <p>
               <label for="coc_usn"required="required" ><i class="material-icons ">contact_phone</i> Universal Student Number (USN) </label>
               <input id="coc_usn" name="coc_usn" placeholder="Enter Your USN"/>
               </p>
                <label for="coc_description" class="textarea"required="required"><i class="material-icons ">description</i>Item Details:  </label>
               <input id="coc_description" name="coc_description" placeholder="Enter Item Details: "/></textarea>
               </p>
              
               <p>
               <label for="coc_in"required="required" ><i class="material-icons ">offline_pin</i>Date In </label>
               <input id="coc_in" name="coc_in"placeholder="Enter Date In"/>
               </p>
               <p>
               <label for="coc_out"required="required" ><i class="material-icons ">call_received</i>Date Out </label>
               <input id="coc_out" name="coc_out" placeholder="Enter Date Out"/>
               </p>

               <div align="left">

               <p class="login button"> 
               <a href="#" class="action-button shadow animate blue"onclick="component.requestparty()">Back</a>
               <a href="#" class="action-button shadow animate red"onclick="component.submitValidation()"required="required">Submit Approval</a>


               </p>
               </div>





               `;


             }
             this.reRender(`
              ${html}
              `,document.getElementById("createForm"));
             $('#updateApproveId').hide();
              $('#submitValidation').hide();
             $('#createForm').show();
             $('#adminView').hide();
             $('#pipoList').hide();
             $('#pipoView').hide();
             $('#updatePipo').hide();
             $('#recentHome').hide();  
             $('#loginForm').hide(); 
             $('#landingPage').hide();    
             $('#requestparty').hide();
             $('#checkRequest').hide();
             $('#approveView').hide();
             $('#updateItems').hide();
             $('#recentView').hide();
           }
               submitValidation(){

              
            let html =`
      

        
  `;
      let r = this.pipo;
      var a = document.getElementById("coc_name")
        var b = document.getElementById("coc_usn")
          var c = document.getElementById("coc_description")
            var d = document.getElementById("coc_out")
              var e = document.getElementById("coc_in")
            if(a.value !="" && b.value !="" && c.value != "" && d.value != "" & e.value != ""){
             alert("Request has been submitted");
              return this.createDesign();
            }
              else if(a.value =="" && b.value =="" && c.value == "" && d.value == "" & e.value == ""){
             alert("You haven't Filled up all the inputs");
              return this.createForm();
            }

            //Each Conditional Statement
            else if(a.value == ""){
              alert("Requesting Party and below must be Filled up");
               return this.createForm();
            }
            else if(b.value == ""){
              alert("USN and below must be Filled up");
               return this.createForm();
            }
             
              else if(c.value == ""){
              alert("Item Details and below must be Filled up");
               return this.createForm();
            }

                else if(e.value == ""){
              alert("Date in and below must be Filled up");
               return this.createForm();
            }
            else if(d.value == ""){
              alert("Date out and below must be Filled up");
               return this.createForm();
            }
            else{
              alert("You haven't filled up all the inputs"); 
              return this.createForm();
            }





            this.reRender(`
              ${html}
              `,document.getElementById("submitValidation"));
                  $('#submitValidation').show();
             $('#validateForm').hide();
            $('#updateApproveId').hide();
            $('#createForm').hide();
            $('#pipoList').hide();
            $('#pipoView').hide();
            $('#adminView').hide();
            $('#updatePipo').hide();
            $('#recentHome').hide(); 
            $('#loginForm').hide();  
            $('#landingPage').hide();  
            $('#requestparty').hide();
            $('#checkRequest').hide();
            $('#approveView').hide();
            $('#updateItems').hide();
            $('#recentView').hide();


          }


     validateForm()
      {
        let html=`

        `;
  let r = this.login;
  var passinInput1 = document.getElementById("username");
        var passinInput2 = document.getElementById("password");
       if (passinInput1.value == r[0].username && passinInput2.value == r[0].password || passinInput1.value == r[1].username && passinInput2.value == r[1].password || passinInput1.value == r[2].username && passinInput2.value == r[2].password || passinInput1.value == r[3].username && passinInput2.value == r[3].password || passinInput1.value == r[4].username && passinInput2.value == r[4].password) {
        alert("Login Successful! Welcome");
          return this.pipoList();

      }

       else if (passinInput1.value == "" && passinInput2.value == ""){
        alert("Username and Password must be filled up.");
          return this.loginForm();

      }
        else if (passinInput1.value == ""){
        alert("Username must be filled up.");
          return this.loginForm();

      }

        else if (passinInput2.value == ""){
        alert("Password must be filled up.");
          return this.loginForm();

     }
      
      else{
        alert("Incorrect Username or Password!. Try again");
        return this.loginForm();
      }
    

        this.reRender(`
              ${html}
              `,document.getElementById("validateForm"));
             $('#validateForm').show();
             $('#updateApproveId').hide();
             $('#createForm').hide();
             $('#adminView').hide();
             $('#pipoList').hide();
             $('#pipoView').hide();
             $('#updatePipo').hide();
             $('#recentHome').hide();  
             $('#loginForm').hide(); 
             $('#landingPage').hide();    
             $('#requestparty').hide();
             $('#checkRequest').hide();
             $('#approveView').hide();
             $('#updateItems').hide();
             $('#recentView').hide();
           }

               logoutValidation(){
        
            var logoutStatement = confirm("Are you sure you want to Log out?");
               if (logoutStatement == true) {
              alert("You have Signed Out!");
             return this.loginForm();
           } else {
              return this.pipoList();
          }
            let html =`
   
        
  `;


            this.reRender(`
              ${html}
              `,document.getElementById("logoutValidation"));
            $('#logoutValidation').show();
            $('#validateForm').hide();
            $('#updateApproveId').hide();
            $('#createForm').hide();
            $('#pipoList').hide();
            $('#pipoView').hide();
            $('#adminView').hide();
            $('#updatePipo').hide();
            $('#recentHome').hide(); 
            $('#loginForm').hide();  
            $('#landingPage').hide();  
            $('#requestparty').hide();
            $('#checkRequest').hide();
            $('#approveView').hide();
            $('#updateItems').hide();
            $('#recentView').hide();


          }




           loginForm(){
            let html =`
      

        
  `;



  html+=`
            <br>


            <section>       
            <div id="wrapper" >

            <a class="hiddenanchor" id="toregister"></a>
            <a class="hiddenanchor" id="tologin"></a>
            <div id="wrapper">
            <div id="login" class="animate form">

            <h1><i class="medium material-icons right">verified_user</i>Administrator Login </h1> 
            <p> 
            <label for="username" ><i class="material-icons left">email</i>Universal Student Number (USN) </label>
            <input id="username"  placeholder="Enter Username or Email"name="userEmail"placeholder="Enter USN"/>
            </p>
            <p> 
            <label for="password"><i class="material-icons left">info_outline</i>Password </label>
            <input id="password" type="password" placeholder="Enter Password"name="passWord"placeholder="Enter Password" /> 
            </p>

            <p class="login button"> 
            <a href="#" class="action-button shadow animate blue"onclick="component.requestparty()">Back</a>
     <a href="#" class="action-button shadow animate red"onclick="component.validateForm()">Log in</a>

            </form>
            </div>






            `;

            this.reRender(`
              ${html}
              `,document.getElementById("createForm"));
             $('#validateForm').hide();
            $('#updateApproveId').hide();
            $('#createForm').show();
            $('#pipoList').hide();
            $('#pipoView').hide();
            $('#adminView').hide();
            $('#updatePipo').hide();
            $('#recentHome').hide(); 
            $('#loginForm').hide();  
            $('#landingPage').hide();  
            $('#requestparty').hide();
            $('#checkRequest').hide();
            $('#approveView').hide();
            $('#updateItems').hide();
            $('#recentView').hide();


          }


          updatePipo(id){

            id = id - 1;

            let html = `



            <section>       
            <div id="wrapper" >



            <div id="login" class="animate form">

            <h1><i class="medium material-icons right">verified_user</i>Final Approval</h1> 
            <p> 
           <input disabled value="${this.picture[0].approvepic}"id="cocimg"type="hidden">
            </p>
            <p> 
            <label for="username"placeholder="Enter Name"><i class="material-icons center">mode_edit</i>Approve Name </label>
            <input value="${this.pipo[id].name}"id="cocname"/>
            </p>
            <p> 
            <label for="username"placeholder="Enter USN"><i class="material-icons center">contact_phone</i>Approve Usn </label>
            <input value="${this.pipo[id].usn}" id="cocusn"/>
            </p>
            <p> 
            <label for="username"placeholder="Enter Date In"><i class="material-icons center">offline_pin</i>Approve Date In </label>
            <input value="${this.pipo[id].datein}"id="cocin"/>
            </p>
            <p> 
            <label for="username"placeholder="Enter Date Out"><i class="material-icons center">call_received</i>Approve Date Out </label>
            <input value="${this.pipo[id].dateout}" id="cocout"/>
            </p>
            <p> 
            <label for="username"placeholder="Enter Item Details: "><i class="material-icons center">assignment</i>Approve Item Details: </label>
            <input value="${this.pipo[id].description}"id="cocdes"/> </p>
              <p> 
            <input disabled value="${this.picture[0].approvepic}" id="approverequest"type="hidden"/>
            </p>


            </p>



   


            </p>
            <p class="login button"> 
            <a href="#" class="action-button shadow animate blue"onclick="component.pipoList()">Close</a>
            <a href="#" class="action-button shadow animate red"onclick="component.updateApproveId(${id})">Approve Request</a>


            </form>
            </div>



            </div>
            </div>  
            </section>










            `;  
            this.reRender(`

              ${html}

              `,document.getElementById("updatePipo"));   
      $('#updateApproveId').hide();
            $('#pipoList').hide();
            $('#pipoView').hide();
            $('#updatePipo').show();
            $('#recentHome').hide();
            $('#adminView').hide();
            $('#createForm').hide();    
            $('#loginForm').hide();    
            $('#landingPage').hide();
            $('#requestparty').hide();
            $('#checkRequest').hide();
            $('#approveView').hide();
            $('#updateItems').hide();
            $('#recentView').hide();



          }
          updateApprove(id){
                let r = this.searchPipoById(id);
                id = id - 1;
               
        let html = `

             
            <section>       
            <div id="wrapper" >
            <div id="login" class="animate form">

            <h1><i class="medium material-icons right">verified_user</i>Check Request</h1> 
                <div class="card">
                <div class="card-image">
                <img src="${this.pipo[id].image}">

                </div>
                <div class="card-stacked">
                <div class="card-content">
                <div class="left-align">
                    <h4 class="center-align">Control #: ${this.pipo[id].id}</h4>
                <h2 class="center-align">${this.pipo[id].name}</h2>
                   <h2 class="center-align">${this.pipo[id].usn}</h2>
                       <br>
                <p><b>Date In: </b>${this.pipo[id].datein}</p>
                <p><b>Date Out: </b>${this.pipo[id].dateout}</p>
                <p><b>Item Details:  </b>${this.pipo[id].description}</p>
                </div>

              <p class="login button"> 
                    <br>
            <a href="#" class="action-button shadow animate blue"onclick="component.pipoList()">Back</a>
            <a href="#" class="action-button shadow animate green"onclick="component.updatePipo(${r.id})">Verify this Request?</a>
      <br>
      <br>
           <input disabled value="${this.picture[0].approvepic}"id="cocimg"type="hidden">
            <input disabled value="${this.pipo[id].name}"id="cocname"type="hidden"/>
            <input disabled value="${this.pipo[id].usn}" id="cocusn"type="hidden"/>
            <input disabled value="${this.pipo[id].datein}"id="cocin"type="hidden"/>
            <input disabled value="${this.pipo[id].dateout}" id="cocout"type="hidden"/>
            <input disabled value="${this.pipo[id].description}"id="cocdes"type="hidden"/> </p>
            <input disabled value="${this.picture[0].approvepic}" id="approverequest"type="hidden"/>



            </p>
          

            </form>
            </div>



            </div>
            </div>  
            </section>





            `;  
          
            this.reRender(`

              ${html}

              `,document.getElementById("updateApproveId"));   
       $('#updateApproveId').show(); 
            $('#pipoList').hide();
            $('#pipoView').hide();
            $('#updatePipo').hide();
            $('#recentHome').hide();
            $('#adminView').hide();
            $('#createForm').hide();    
            $('#loginForm').hide();    
            $('#landingPage').hide();
            $('#requestparty').hide();
            $('#checkRequest').hide();
            $('#approveView').hide();
            $('#updateItems').hide();
            $('#recentView').hide();


          }







          landingPage(){
            let html=`




            `;
            this.reRender(`
              ${html}
              `,document.getElementById("createForm"));
            $('#createForm').hide();
            $('#pipoList').hide();
            $('#pipoView').hide();
            $('#updatePipo').hide();
            $('#recentHome').show(); 
            $('#loginForm').hide();  
            $('#adminView').hide();
            $('#landingPage').hide();  
            $('#requestparty').hide();
            $('#checkRequest').hide();
            $('#approveView').hide();
            $('#updateItems').hide();
            $('#recentView').hide();

          }

        requestparty(){

            let html=`

<ul class="topnav" id="myTopnav">

 <li><a class="active" href="#"onclick="component.requestparty()"><i class="material-icons">lock_outline</i>Pass in Pass out App</a></li> 
  <li><a href="#"onclick="component.loginForm()"><i class="material-icons">verified_user</i>Login as Administrator</a></li>
  <li><a href="#"onclick="component.createForm()"><i class="material-icons">note_add</i>Get Pass Form</a></li>


  

  <li class="icon">
    <a href="javascript:void(0);" style="font-size:15px;" onclick="myFunction()">☰</a>

  </li>
</ul>
            <section id="home-section" class="line">
            <div class="margin">    
            <div class="s-12 l-9">


            <article class="post-2 line">                
            <div class="s-12 l-6 post-image">                   
            <a href="#"onclick="component.createForm()">
            <img src="img/pipo.png">
            </a>                
            </div>
            <div class="s-12 l-5 post-text">
            <a href="#">
            <center> <h2>Welcome to </h2></center>
            <center>  <h2> Pass in Pass out</h2></center>
            <center> <h2> App</h2></center>
            </a>
              <center><a href="#" class="action-button shadow animate grey"onclick="component.createForm()"><i class="material-icons">https</i>Get Form Now!</a></center>  
            </div>                     
            </article>

            <article class="post-6 right-align line">               
            <div class="s-12 l-6 post-image">                   
            <a href="#"onclick="component.loginForm()">
            <img src="img/login.png" alt="Fashion 2">
            </a>                
            </div>
         
            <div class="s-12 l-5 post-text">
            <a href="#">
            <h2><center>Login As Administrator</center></h2> 
            </a>
            <p>Login as Administrator here.
            </p>  
            <br>
              <center><a href="#" class="action-button shadow animate cyan"onclick="component.loginForm()"><i class="material-icons">verified_user</i>Login Here</a></center>
              
            </div>
           
            </article>

            <article class="post-3 line">      
            <div class="s-12 l-6 post-image">                   
            <a href="#"onclick="component.checkRequest()">
            <img src="img/request.png" alt="Fashion 3">
            </a>                
            </div>
              <div class="s-12 l-5 post-text">

            <a href="#">
            <h2>Check Request Form</h2>
            </a>
    
            <br>
             <center><a href="#" class="action-button shadow animate blue"onclick="component.checkRequest()"><i class="material-icons">offline_pin</i>Check Request</a></center>            
            </div>
             
            </article>

          

            </article>
            <article class="post-5 right-align line">
            </article>

               <article class="post-1 right-align line">  
               <div>
                    

    `;
      let r = this.pipo;
            let count = 0;
            for(let i=(r.length-1);i>=0;i--){
              if(count++ === 1)break;
              html+= `

                
                     <div class="s-12 l-6 post-image">
              <div class="card ">
              <div class="card-image">
                       <center> <h4>Control #: ${r[i].id}</h4></center>
              <img src="${r[i].image}">
              </div>
              <div class="card-content">
             
        <h2 class="center-align">Name: ${r[i].name} <br>Usn: ${r[i].usn}<br></h2>
        <br>

                <center><a href="#" class="action-button shadow animate purple"onclick="component.recentView(${r[i].id})"><i class="material-icons">assignment</i>Open Request</a></center>
              </div>

              </div>
              </div>
              `;

            }
    html+=`
                          
                   
            </div>

            <div class="s-12 l-4 post-text">
            <a href="#">
            <h2>Recent Request</h2>
                <h2></h2>
            </a>
            <p>This is the Latest Request that the user submbitted to the system. He/she is recommended to wait for the approval of the adminisrator so he can freely pass in and out the campus.          
            </p>
            </div>

            </article>
            <article class="post-5 right-align line">

      <div class="s-12 l-5 post-text">
            <a href="#">
            <center><h2>For More Information</h2></center>
            </a>
            <center>
            <p>Hello Guys, Thank you for Visiting my App!</p>          
             </center>
           <br>

             <center><a href="https://www.facebook.com/Aruukazorudickuru" class="action-button shadow animate green "><i class="material-icons">message</i>Message Reese!</a></center>
                 <br> 
        <center><a href="https://github.com/ChocoleytReeseDC" class="action-button shadow animate red ">  GitHub Account!</a></center>
          
            </div>
 <div class="s-12 l-7 post-image">                   
            <a href="https://www.facebook.com/Aruukazorudickuru">
            <img src="img/reese.jpg" alt="Fashion 4">
            </a>            
            </div>

           
               
            </div>      
          
       

            <div class="s-12 l-3 post-image">    
            <a href="http://www.ama.edu.ph/"target="_blank">
            <img src="img/ama.png" alt ="Fashion 4">  
                    <br> 
            </div>

            <div class="s-12 l-3 post-image"> 
            <a href="https://twitter.com/amaeducsystem/status/338875547083997184"target="_blank">
            <img src="img/hihi.jpg" alt ="Fashion 4">
                    <br>
            </div>

            <div class="s-12 l-3 post-image"> 
            <a href="http://www.amaes.edu.ph/"target="_blank">
            <img src="img/amapic.jpg" alt ="Fashion 4">  
            <br>
            </div>

            <div class="s-12 l-3 post-image"> 
            <a href="http://www.ama.edu.ph/p/online-degree.html"target="_blank">
            <img src="img/amaphoto.jpg"alt ="Fashion 4">  
                    <br>  
            </div>

            <div class="s-12 l-3 post-image"> 
            <a href="http://www.ama.edu.ph/2016/08/ama-university-ched-authorized.html"target="_blank">
            <img src="img/skul.jpg"alt ="Fashion 4">     
                    <br>     
            </div>

            <div class="s-12 l-3 post-image"> 
            <a href="http://www.ama.edu.ph/2015/08/ama-students-meets-daniel-padilla-in.html"target="_blank">
            <img src="img/ama1.png"alt ="Fashion 4">    
                    <br>    
            </div>


            <div class="s-12 l-3 post-image"> 
            <a href="http://www.ama.edu.ph/2015/10/watch-daniel-padilla-for-ama-senior-high.html"target="_blank">
            <img src="img/ama2.png"alt ="Fashion 4">     
        <br>
            </div>


           

      






            </div>
            </aside>
            </div>
            </div>
            </section>



            <div class="line">
            <footer>
            <div class="s-12 l-8">
            <p>

            <a href="https://www.facebook.com/Aruukazorudickuru">Copyright 2016, @ArrukaZorudickuru</a><br>
            <a href="https://github.com/ChocoleytReeseDC"> @Github ChocoleytReeseDc</a>
            <br>

            Visit also my Clash of Clans App
            <a href="http://decodeapp-herokudelacruz.herokuapp.com/">@Clash of Clans App!</a>
            Thanks for visiting my App <3.

            </p>
            </div>

            <div class="s-12 l-4">                                
            <a class="right" href="https://www.facebook.com/Aruukazorudickuru"target="_blank">Static-Responsive-Dynamic<br>
            by Winter Chocoleyt Dela Cruz 
            </a>              

            </div>
            </footer>




            `;


            html+=`  

            `;
            this.reRender(`
              ${html}
              `,document.getElementById("requestparty"));
            $('#createForm').hide();
            $('#pipoList').hide();
            $('#pipoView').hide();
            $('#updatePipo').hide();
            $('#recentHome').hide(); 
            $('#loginForm').hide();  
            $('#landingPage').hide();  
            $('#adminView').hide();
            $('#requestparty').show();
            $('#checkRequest').hide();
            $('#approveView').hide();
            $('#updateItems').hide();
            $('#recentView').hide();



          }



        } 
        let component = new Component();
        component.baseLayout();

                   // <div id="register" class="animate form">

                   //                            <h1><i class="medium material-icons right">library_add</i> Sign up </h1> 
                   //                            <p> 
                   //                                <label for="usernamesignup"><i class="material-icons">mode_edit</i>Username</label>
                   //                                <input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="Enter Valid Username" />
                   //                            </p>

                   //                            <p> 
                   //                                <label for="emailsignup" ><i class="material-icons ">email</i>Email Address</label>
                   //                                <input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="Enter Valid Email"/> 
                   //                            </p>
                   //                            <p> 
                   //                                <label for="passwordsignup" ><i class="material-icons ">info_outline</i>Password </label>
                   //                                <input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="Enter Valid Password"/>
                   //                            </p>
                   //                            <p> 
                   //                                <label for="passwordsignup_confirm" ><i class="material-icons ">info_outline</i>Confirm Password </label>
                   //                                <input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="Confirm Password"/>
                   //                            </p>  

                   //                            <p class="signin button"> 
                   //                              <a href="#" class="action-button shadow animate red"onclick="component.loginForm()">Sign up</a>

                   //            </p>
                   //                            <p class="change_link">  
                   //              Already a member ?
                   //              <a href="#tologin" class="to_register"> Go and log in </a>
                   //            </p>
                   //                        </form>
                   //                    </div>








