const handleLogin = async () => {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    // console.log("Im clicked")
    const resp = await fetch('http://localhost:7070/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
  
    if(resp.status === 200){
      const data = await resp.json()
      localStorage.setItem('token-login', data.token)
      console.log(data.token)
      if(data.user.role === 'admin'){
        location.href = '/admin-dashboard'
      }else{
        location.href = '/main-dashboard'
      }
    }else{
      alert('WRONG USERNAME OR PASSWORD')
      location.reload()
    }
    
  }