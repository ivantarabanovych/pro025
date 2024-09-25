function timeToNewYear (){
    const now = new Date();

    const nextYear = now.getFullYear() + 1;
    const newYear = new Date(`January 1, ${nextYear} 00:00:00`);

    const timeD = newYear - now;

    const days = Math.floor(timeD / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeD % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeD % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeD % (1000 * 60)) / 1000);

    document.getElementById("time-table").textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`

    setTimeout(timeToNewYear, 1000)
}

timeToNewYear();