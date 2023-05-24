const force = document.querySelector("#force");
const angle = document.querySelector("#angle");
const gravity = document.querySelector("#gravity");
const density = document.querySelector("#density");
const mass = document.querySelector("#mass");
const surfaceArea = Math.PI * 35/2 * 35/2;
const Cf = 0.47;

const projectile = document.querySelector(".projectile");

const launch = document.querySelector(".launch");

launch.addEventListener("click", runSim);

function runSim()
{
    let lef_ = projectile.style.left;
        lef_ = lef_.substring(0, lef_.length - 2);
        lef_ -= 0;
    let bot_ = projectile.style.bottom;
        bot_ = bot_.substring(0, bot_.length - 2);
        bot_ -= 0;

    let projectileVelocity = force.value / mass.value;
    let projectileAngle = angle.value;
        projectileVelocity -= 0
        projectileAngle -= 0;

    let velocityX = Math.cos(projectileAngle) * projectileVelocity;
    let velocityY = Math.sin(projectileAngle) * projectileVelocity;
    let velocityG = gravity.value;
    velocityG -= 0;

    positionCalc(velocityY, velocityX, velocityG, bot_, lef_);
}

function positionCalc(velocityY, velocityX, velocityG, bot_, lef_){
    for(let i = 1; i<=900; i++)
    {
        setTimeout(()=>
        {
            let resistanceY = (Cf * ((density.value * velocityY) / 2 )* surfaceArea) / mass.value;
            let resistanceX = (Cf * ((density.value * velocityX) / 2 )* surfaceArea) / mass.value;

            resistanceX *= 0.001;
            resistanceY *= 0.001;

            velocityY -= velocityG;

            bot_ = bot_ + velocityY - resistanceY;
            lef_ = lef_ + velocityX - resistanceX;
        
        
            projectile.style.bottom = bot_ + "px";
            projectile.style.left = lef_ + "px";
        
            console.log("Done, Iteration №" + i);
            console.log("Debug Data");
            console.log("");
            console.log("Velocity on the X axis is equal to " + velocityX);
            console.log("Velocity on the Y axis is equal to " + velocityY);
            console.log("Resitance on the X axis is equal to " + resistanceX);
            console.log("Resistance on the Y axis is equal to " + resistanceY);
        }, 50 * i);
    }
}
