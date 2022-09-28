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
    if (element.playerOneName === null || element.playerTwoName === null) {
      listRoom = listRoom + `<tr><th>${element.id}</th>
                              <td>${element.nameRoom}</td>   
                              <td>${element.playerOneName}</td>
                              <td>${element.playerTwoName}</td>
                              <td>
                                    <select id="playerChoose1">
                                      <option>Set 1</option>
                                      <option value="Rock">Rock</option>
                                      <option value="Paper">Paper</option>
                                      <option value="Scissors">Scissors</option>
                                    </select>
                                    <select id="playerChoose2">
                                      <option>Set 2</option>
                                      <option value="Rock">Rock</option>
                                      <option value="Paper">Paper</option>
                                      <option value="Scissors">Scissors</option>
                                    </select>
                                      <select id="playerChoose3">
                                      <option>Set 3</option>
                                      <option value="Rock">Rock</option>
                                      <option value="Paper">Paper</option>
                                      <option value="Scissors">Scissors</option>
                                    </select>
                              </td>
                              <td><button type="submit" class="btn btn-primary" onclick="handleGame(${element.id})">Submit</button></td>
                              <tr>`
    }
  });

  roomList.innerHTML = listRoom
}

getRoomData()

const getRecordData = async () => {
  const resp = await fetch('http://localhost:7070/playerResult', {
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem('token-login')
    }
  })
  const data = await resp.json()
  const listRoom = document.getElementById('recordlist')

  let recordList = ""
  data.forEach(element => {
    recordList = recordList + `<tr><th>${element.id}</th>
                            <td>${element.nameRoom}</td>   
                            <td>${element.playerOneName}</td>
                            <td>${element.playerTwoName}</td>
                            <td>${element.playerOneChoose}</td>
                            <td>${element.playerTwoChoose}</td>
                            <td>${element.playerOneScore}</td>
                            <td>${element.playerTwoScore}</td>
                            <td>${element.playerOneWinner}</td>
                            <td>${element.playerTwoWinner}</td>
                              <tr>`
  });

  listRoom.innerHTML = recordList
}

getRecordData()

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