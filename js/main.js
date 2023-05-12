// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2: Organizzare i singoli membri in card/schede


// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
const teamMembersNameArray = ["Wayne Barnett", "Angela Caroll", "Walter Gordon", "Angela Lopez", "Scott Estrada", "Barbara Ramos"];
const teamMembersRoleArray = ["Founder & CEO", "Chief Editor", "Office Manager", "Social Media Manager", "Developer", "Graphic Designer"];
const teamMemberPhotoArray = ["wayne-barnett-founder-ceo.jpg", "angela-caroll-chief-editor.jpg", "walter-gordon-office-manager.jpg", "angela-lopez-social-media-manager.jpg", "scott-estrada-developer.jpg", "barbara-ramos-graphic-designer.jpg"];
let elSelector = document.getElementById("contenitore");

// Creare l’array di oggetti con le informazioni fornite.
let teamMembersArray = [];
let newTeamMemberObj = {};
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < teamMembersNameArray.length; i++){
    newTeamMemberObj = {
        "name" : teamMembersNameArray[i],
        "role" : teamMembersRoleArray[i],
        "photo" : teamMemberPhotoArray[i]
    };
    teamMembersArray.push(newTeamMemberObj);
    // Stampare le stesse informazioni su DOM sottoforma di stringhe
    for(let key in newTeamMemberObj){
        elSelector.innerHTML += `<span> ${newTeamMemberObj[key]} </span>`;
        elSelector.append();
    }

    console.log(teamMembersArray);
}




