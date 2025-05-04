function autenticarUsuario() {
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');
  
    if (login && senha) {
      localStorage.setItem('autenticado', 'true');
      window.location.href = 'index.html';
    } else {
      mensagem.textContent = 'Usuário não autenticado';
    }
  }
  
  function verificarAutenticacao() {
    const autenticado = localStorage.getItem('autenticado');
    const usuarioInfo = document.getElementById('usuarioInfo');
  
    if (!autenticado || autenticado !== 'true') {
      usuarioInfo.textContent = 'Usuário não autenticado';
    } else {
      usuarioInfo.textContent = 'Usuário autenticado';
    }
  }