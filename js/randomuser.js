const loadData = () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => showData(data.results))

}
loadData()

const showData = (friends) => {
    console.log(friends)
    const friendsField = document.getElementById('friends')
    for (const friend of friends) {
        console.log(friend.location)

        let p = document.createElement('p');
        p.innerHTML = `

        <img src="${friend.picture.large}" > <br>
        
        Name : ${friend.name.title} ${friend.name.first} ${friend.name.last}
        <br>
        Email :${friend.email} <br> 
        Phone : ${friend.phone}<br>
        Address :${friend.location.state} ${friend.location.country}
        
        `;
        friendsField.appendChild(p);


    }



}