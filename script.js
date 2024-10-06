const endDate = new Date("5 oct 2024 10:18:00").getTime()
const startDate = new Date().getTime()



let x = setInterval(function updatetimer(){
    const currentdate = new Date().getTime()
    const distancecovered = currentdate - startDate
    const distancepending = endDate -  currentdate

    const daysinmilisec = (24*60*60*1000)
    const hoursinmilisec = (60*60*1000)
    const  minutesinmilisec = (60*1000)
    const  secinmilisec = (1000)

    const Days = Math.floor(distancepending/(daysinmilisec))
    const hours = Math.floor(distancepending%(daysinmilisec)/(hoursinmilisec))
    const minutes = Math.floor(distancepending%(hoursinmilisec)/(minutesinmilisec))
    const sec =  Math.floor(distancepending%(minutesinmilisec)/(secinmilisec))

    document.getElementById("days").innerHTML=Days
    document.getElementById("hours").innerHTML=hours
    document.getElementById("minutes").innerHTML=minutes
    document.getElementById("sec").innerHTML=sec

    const totaldistance = endDate - startDate
    const percentagedistance = (distancecovered/totaldistance)*100;


    document.getElementById("progress-bar").style.width= percentagedistance +"%";

    If(distancepending<0);{
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";

    }

}
,1000)