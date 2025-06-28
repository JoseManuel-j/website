function ubahTema() {
  const sidebar = document.querySelector('.sidebar');
  const main = document.querySelector('.main-content');
  const isDark = sidebar.style.backgroundColor === 'rgb(52, 73, 94)' || sidebar.style.backgroundColor === '';

  if (isDark) {
    sidebar.style.backgroundColor = '#f0f0f0';
    sidebar.style.color = '#333';
    main.style.backgroundColor = '#34495e';
    main.style.color = '#f9f9f9';
  } else {
    sidebar.style.backgroundColor = '#34495e';
    sidebar.style.color = 'white';
    main.style.backgroundColor = 'white';
    main.style.color = '#333';
  }
}
