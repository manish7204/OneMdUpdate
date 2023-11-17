
const apiUrl = 'http://localhost:3000/users';

let start = 0;
let limit = 2;

let totalItems = 0;
let loadedItems = 0;



function fetchCrad(start, limit) {
    let btn = document.getElementsByClassName('LoadMore');
    fetch(`${apiUrl}?_start=${start}&_limit=${limit}`)
        .then(response => response.json())
        .then(data => {
            totalItems = data.length;
            const container = document.querySelector('.Container');
            console.log(data)

            if (totalItems === 0) {
                alert("data is empty")
            }

            // <img class="Delbtn" src="assets/delete (2).png" width="22px" height="19px">
            // <img class="Componentsiconsvisibility_off" src="assets/time.png" width="22px" height="19px">


            data.forEach(doctor => {
                let allCard = document.getElementById("allCards")
                console.log(doctor)
                const card = document.createElement('div');
                card.classList.add('cards');


                const graduationYear = new Date(doctor.dateOfGraduation).getFullYear();
                const cureentdate = new Date().getFullYear();

                const Experience = cureentdate - graduationYear;
                card.innerHTML = `

                <button style="display:inline-block" class="Delbtn">
                <img src="assets/delete (2).png" width="22px" height="19px">
              </button>

              


                <div class="crad1">
                <div class="img">
                        <img class="ProfilePic" id="profile"  alt="Profile Picture" src="assets/avatar.png"
                        >
                        
                    </div>
                    <div class="otherInfo">
                        <h6 id="DocName">Dr.${doctor.fullName}</h6>
                        <p id="deg"> ${doctor.degreeOne} , ${doctor.degrees}</p>
                        <p id="time">Next Slot:11 AM</p>
                        <img class="Componentsiconsvisibility_off" src="assets/time.png" width="22px" height="19px">
                      
                    </div>
                
                
                </div>

                <div class="card2">
                   
                <div class="exp">
                    <p id="pTag">Experience</p>
                    <p id="pTag">${Experience}</p>
                    </div>
                    <div class="fess">
                        <h3>Fees</h3>
                        <p>'&#x20b9'  ${doctor.onlineFee} Online Consult</p>
                        <p>&#x20b9'  ${doctor.inPersonFee} In-Person Cousult</p>
                       
                    </div>
                </div>


                <div class="card3">
                   
                <div class="book">
                    
                  
                        <button class="bookBtn" src="assets/time.png" >Book Appointment</button>
                    </div>
                </div>
                    

                    
                   
                `;

                allCard.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function loadData() {
    start += limit;
    fetchCrad(start, limit);
    console.log("clickkkkkkkk");
}

loadData();