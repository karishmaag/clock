setInterval(() => {
    d = new Date(); 
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2;
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
    am_pm = "AM";
    if (hr > 12) {
      hr -= 12;
      am_pm = "PM";
  }
  if (hr == 0) {
      hr = 12;
      am_pm = "AM";
  }
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
    let currentTime = hr + ":"+ min + ":" + sec + "  " + am_pm;
    document.getElementById("time").innerHTML = currentTime;
    const dy = new Date();
        var weekday = Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
        const day =weekday[dy.getDay()];
        var yearmonth = Array('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');
        const month = yearmonth[dy.getMonth()];
        today = day + ", " + dy.getDate() + "th " + month;
        document.getElementById("date").innerHTML = today;
  }, 1000);
  function change()
  {
    document.body.classList.toggle("dark-mode");
  }