const list = [];
const br=[];
function User(name) {
    const inn = document.getElementById('inn').value;
    const newMsg = {
        user_name : name,
        text: inn
    }
    list.push(newMsg)

    if(name == 'Banana'){
        br.push(0);
    } else {
        br.push(1);
    }
    DisplayChat()

    // const list = document.getElementById('bananaprint');
    // const newMessage = document.createElement('li');
    // const newline = "\n"
    // newMessage.textContent = `${name}: ${inn}`; 
    // list.appendChild(newMessage);
    document.getElementById('inn').value = '';

    // console.log(list)
    // console.log(br)

}

function DisplayChat(){
    let allBanana ='';
    let allGoogle ='';


       

        for(let i = 0; i<list.length; i++){
            if(br[i] == 0  && list[i].user_name == 'Banana'){
                allBanana += `<div class="textbox"> <img src="./imgs/banana.jpeg" alt=""> <div class="textstyle"> ${list[i].text} </div> </div>`;
                allGoogle += '<br>'
                console.log(allBanana)
                document.getElementById('inn').value = '';
            } 

            if(br[i] == 1  && list[i].user_name == 'Google'){
                allGoogle+= ` <div class="textbox">  <div class="textstyle"> ${list[i].text} </div> </div> `;
                allBanana += '<br>'
                console.log(allGoogle)
                document.getElementById('inn').value = '';

            }
        }



    document.getElementById('bananaprint').innerHTML = allBanana
    document.getElementById('googleprint').innerHTML = allGoogle
}

// function spacebanana(){
//     const list = document.getElementById('googleprint');
//     const newMessage = 'w';
//     newMessage.textContent = '';
//     list.appendChild(newMessage);

// }
