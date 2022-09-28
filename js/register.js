const handleRegister = async () => {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const role = document.getElementById("role").value
    
    console.log(username)
    const resp = await fetch('http://localhost:7070/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
        role : role
      })
    })
  
    if(resp.status === 201){
      location.href = '/login'
      alert('REGISTER SUCCESS')
    }else{
      if(resp.status === 406){
        alert('CHOOSE THE ROLE!')
      }else{
        alert('REGISTER FAILED')
      }
    }
  }