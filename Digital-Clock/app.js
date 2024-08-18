let updateClock = () => {
    let houre = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let periods = document.getElementById('period');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let p = h >= 12 ? 'AM' : 'PM'
    
    periods.innerHTML = p;
    h = h % 12;
    h = h ? h : 12; 
    
    h = h < 10 ? '0' + h : h ;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    

    houre.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

setInterval(updateClock,1000);

updateClock();



