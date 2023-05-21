const velocity = document.querySelector("#velocity");
const angle = document.querySelector("#angle");
const gravity = document.querySelector("#gravity");
const density = document.querySelector("#density");

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

    let projectileVelocity = velocity.value;
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
    for(let i = 1; i<=300; i++)
    {
        setTimeout(()=>
        {
            velocityY -= velocityG;

            bot_ = bot_ + velocityY;
            lef_ = lef_ + velocityX;
        
        
            projectile.style.bottom = bot_ + "px";
            projectile.style.left = lef_ + "px";
        
            console.log("Done, Iteration №" + i);
            console.log("Debug Data");
            console.log("");
            console.log("Velocity on the X axis is equal to " + velocityX);
            console.log("Velocity on the Y axis is equal to " + velocityY);
        }, 50 * i);
    }
}
