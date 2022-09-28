//PLAYER LIST//

//GET PLAYER DATA//
const getPlayerData = async () => {
  const resp = await fetch('http://localhost:7070/playerList', {
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem('token-login')
    }
  })
  const data = await resp.json()
  const playerList = document.getElementById('playerlist')

  let listPlayer = ""
  data.forEach(element => {
    listPlayer = listPlayer + `<tr><th>${element.id}</th>
                                <td>${element.username}</td>   
                                <td>${element.role}</td>
                                <td><button type="submit" class="btn btn-danger" onclick="handleDeletePlayer(${element.id})">Delete</button></td>
                               <tr>`
  });

  playerList.innerHTML = listPlayer
}

//DELETE PLAYER DATA//
const handleDeletePlayer = async (idplayer) => {
  const resp = await fetch(`http://localhost:7070/deletePlayer/${idplayer}`, {
    method: 'DELETE',
    headers: {
      Authorization: localStorage.getItem('token-login')
    }
  })
  console.log(resp.status)
  if (resp.status === 200) {
    location.reload()
  } else {
    alert("Failed delete the player data")
    console.log(resp.status)
  }
}

getPlayerData()


//ROOM LIST//

//GET ROOM DATA//
const getRoomData = async () => {
  const resp = await fetch('http://localhost:7070/roomList', {
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem('token-login')
    }
  })
  const data = await resp.json()
  const roomList = document.getElementById('roomlist')

  let listRoom = ""
  data.forEach(element => {
    listRoom = listRoom + `<tr><th>${element.id}</th>
                              <td>${element.nameRoom}</td>   
                              <td>${element.playerOneName}</td>
                              <td>${element.playerOneChoose}</td>
                              <td>${element.playerOneScore}</td>
                              <td>${element.playerTwoName}</td>
                              <td>${element.playerTwoChoose}</td>
                              <td>${element.playerTwoScore}</td>
                              <td>${element.playerOneWinner}</td>
                              <td>${element.playerTwoWinner}</td>
                              <td><button type="submit" class="btn btn-danger" onclick="handleDeleteRoom(${element.id})">Delete</button></td>
                              <tr>`
  });

  roomList.innerHTML = listRoom
}

//ADD ROOM DATA//
const handleAddRoom = async () => {
  const serverRoom = document.getElementById("roomName").value
  const resp = await fetch('http://localhost:7070/create-room', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token-login')
    },
    body: JSON.stringify({
      nameRoom: serverRoom
    })
  })

  if (resp.status !== 201) {
    alert('Failed create room name')
  } else {
    alert('Success create room name')
  }
  location.reload()
}

//DELETE ROOM DATA//
const handleDeleteRoom = async (idroom) => {
  const resp = await fetch(`http://localhost:7070/deleteRoom/${idroom}`, {
    method: 'DELETE',
    headers: {
      Authorization: localStorage.getItem('token-login')
    }
  })
  console.log(resp.status)
  if (resp.status === 200) {
    location.reload()
  } else {
    alert("Failed delete the room data")
    console.log(resp.status)
  }
}

getRoomData()

//VALIDATE PAGE//
const validatePage = () => {
  const data = localStorage.getItem('token-login')
  if(data === null){
    location.href = '/login'
  }
}

validatePage()

//LOGOUT PAGE//
const handleLogout = () => {
  localStorage.removeItem('token-login')
  location.href = '/login'
}



