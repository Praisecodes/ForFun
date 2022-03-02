const main = document.querySelector('.main');
const SplashScreen = document.querySelector('.splashscreen');

window.onload = () => {
  setTimeout(()=>{
    SplashScreen.classList.add('.fadingOut');
    setTimeout(()=>{
      SplashScreen.style.display = 'none';
      setTimeout(()=>{
        main.style.display = 'block';
      },0);
    }, 6000);
  }, 5000);
}