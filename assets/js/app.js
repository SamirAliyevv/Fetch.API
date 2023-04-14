// let input = document.querySelector('#input').value;


let users = [];
let sliceCount = 20;
const RandomAPI = async function () {
  await fetch('https://randomuser.me/api/?results=100')
    .then(response => response.json())
    .then(data => {

      users = data.results;
      
    
    

      let x = ''

      users.slice(0, sliceCount).forEach(user => {


        // if (user.gender == 'male') {
        //  card .classList.add('green')

        // }
        x += ` <div class="col-lg-3 ">
    <div class="card" id = ${user.gender === 'male' ? 'male' : 'female'} >
        <img src="${user.picture.medium}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${user.name.first}  ${user.name.last}</h5>
          <p class="card-text">${user.dob.age}</p>
          <a href="#" class = "a" >${user.email}</a>
          <a href="#" class="btn btn-success">Contact us</a>
         

        </div>
      </div>
</div>`

      });
      document.querySelector('#list').innerHTML = x;
      // let card =  document.querySelector('.card') 

    })

    .catch(err => console.log(err));
    

}
RandomAPI();

input.onkeyup = function () {
  let value = this.value
  let filteredUser = users.filter(x => x.name.first.toLowerCase().includes(value.toLowerCase()));
  let x = ''
  filteredUser.forEach(user => {
    x += ` <div class="col-lg-3 ">
  <div class="card" id = ${user.gender === 'male' ? 'male' : 'female'} >
      <img src="${user.picture.medium}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${user.name.first}  ${user.name.last}</h5>
        <p class="card-text">${user.dob.age}</p>
        <a href="#" class="btn btn-success">Contact Us</a>
      </div>
    </div>
</div>`



  });
  document.querySelector('#list').innerHTML = x;




}


 const Update = function () {
  let select = document.getElementById('gender');
 
  let value = select.value;
 
   if (value == 'male') {
      let findgender= users.filter(x => x.gender == 'male')
      let x=''
      findgender.forEach( user =>{
       x += ` <div class="col-lg-3 ">
        <div class="card" id = ${user.gender === 'male'} >
            <img src="${user.picture.medium}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${user.name.first}  ${user.name.last}</h5>
              <p class="card-text">${user.dob.age}</p>
              <a href="#" class="btn btn-success">Contact Us</a>
            </div>
          </div>
      </div>`
      document.querySelector('#list').innerHTML = x;
      })
      
    
  }
  else{
    let findgender2= users.filter(x => x.gender == 'female')
    let x=''
    findgender2.forEach( user =>{
     x += ` <div class="col-lg-3 ">
      <div class="card" id = ${user.gender === 'male'} >
          <img src="${user.picture.medium}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${user.name.first}  ${user.name.last}</h5>
            <p class="card-text">${user.dob.age}</p>
            <a href="#" class="btn btn-success">Contact Us</a>
          </div>
        </div>
    </div>`
    document.querySelector('#list').innerHTML = x;
    })
   

  }
 

}
Update()


let button = document.querySelector('#more')

button.addEventListener('click', function () {
   sliceCount += 20
  let x = '';
  if (sliceCount > users.length) {
    sliceCount = users.length
   

  } else {
    sliceCount+=20
  }
  



  users.slice(0, sliceCount).forEach(user => {



    // if (user.gender == 'male') {
    //  card .classList.add('green')

    // }
    x += ` <div class="col-lg-3 ">
<div class="card" id = ${user.gender === 'male' ? 'male' : 'female'} >
    <img src="${user.picture.medium}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${user.name.first}  ${user.name.last}</h5>
      <p class="card-text">${user.dob.age}</p>
      <a href="#" class = "a" >${user.email}</a>
      <a href="#" class="btn btn-success">Contact us</a>
     

    </div>
  </div>
</div>`

  });
  document.querySelector('#list').innerHTML = x;

})
