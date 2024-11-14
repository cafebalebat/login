document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validasi login sederhana
    if (username === 'admin' && password === '123') {
        const loginTime = new Date().getTime();
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loginTime', loginTime);
        window.location.href = 'https://cafebalebat.shop/dashboard'; // Arahkan ke halaman dashboard
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});
