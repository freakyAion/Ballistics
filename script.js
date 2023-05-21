const velocity = document.querySelector("#velocity");
const angle = document.querySelector("#angle");
const gravity = document.querySelector("#gravity");
const density = document.querySelector("#density");

const projectile = document.querySelector(".projectile");

const launch = document.querySelector(".launch");

launch.addEventListener("click", runSim);

function runSim()
{
    for(let i = 0; i<=300; i++)
    {
        setTimeout(() => {
        }, 10 * i);
    }
}

function positionCalc(){
    let lef_ = projectile.style.left;
        lef_ = lef_.substring(0, lef_.length - 2);
    let bot_ = projectile.style.bottom;
        bot_ = bot_.substring(0, bot_.length - 2);
    bot_ = bot_ + 1 - 1;
    let projectileVelocity = velocity.value;
    projectileVelocity = projectileVelocity + 1 - 1;
    bot_ = bot_ + projectileVelocity;
    console.log(bot_);
    projectile.style.bottom = bot_ + "px";
    console.log(projectile.style.bottom);

}
