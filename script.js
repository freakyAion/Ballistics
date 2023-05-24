const force = document.querySelector("#force");
const angle = document.querySelector("#angle");
const gravity = document.querySelector("#gravity");
const density = document.querySelector("#density");
const mass = document.querySelector("#mass");
const surfaceArea = (Math.PI * 35/2 * 35/2) / 100;
const Cf = 0.47;

let environmentalDensity = density.value;
let projectileMass = mass.value

const borderX = document.querySelector(".sim").offsetWidth;
const borderY = document.querySelector(".sim").offsetHeight;

let debugHorisontal = document.querySelector(".horisontal").style.translate;
let debugVertical = document.querySelector(".vertical").style.translate;

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

    let projectileAcceleration = force.value / mass.value;
    let projectileAngle = angle.value;
        projectileAcceleration -= 0
        projectileAngle -= 0;

    let accelerationX = Math.cos((projectileAngle * Math.PI) / 180) * projectileAcceleration;
    let accelerationY = Math.sin((projectileAngle * Math.PI) / 180) * projectileAcceleration;
    let accelerationG = gravity.value;
    accelerationG -= 0;

    let velocityX = 0;
    let velocityY = 0;

    environmentalDensity -= 0;
    projectileMass -= 0;

    positionCalc(velocityX, velocityY, accelerationX, accelerationY, accelerationG, bot_, lef_, environmentalDensity, projectileMass);
}

function positionCalc(velocityY, velocityX, accelerationX, accelerationY, accelerationG, bot_, lef_, environmentalDensity, projectileMass){
    for(let i = 1; i<=100; i++)
    {
        setTimeout(()=>
        {
            // // //
            // Basically, acceleration is not 0 at start. 
            // As in, it should be zero after starting, 
            // so that it wouldn't affect the projectiles movement in the future, 
            // but it is not yet implemented. 
            // Sadge.
            // // //
            let resistanceY = (Cf * ((environmentalDensity * velocityY) / 2 )* surfaceArea) / projectileMass;
            let resistanceX = (Cf * ((environmentalDensity * velocityX) / 2 )* surfaceArea) / projectileMass;

            resistanceX *= 0.01;
            resistanceY *= 0.01;

            accelerationY -= accelerationG;

            accelerationX -= resistanceX;
            accelerationY -= resistanceY;

            velocityX += accelerationX;
            velocityY += accelerationY;
        
        
            lef_ += velocityX;
            bot_ += velocityY;

            projectile.style.bottom = bot_ + "px";
            projectile.style.left = lef_ + "px";
        
            console.log("Done, Iteration №" + i);
            console.log("Debug Data");
            console.log("");
            console.log("Velocity on the X axis is equal to " + velocityX);
            console.log("Velocity on the Y axis is equal to " + velocityY);
            console.log("Acceleration on the X axis is equal to " + accelerationX);
            console.log("Acceleration on the Y axis is equal to " + accelerationY);
            console.log("Resitance on the X axis is equal to " + resistanceX);
            console.log("Resistance on the Y axis is equal to " + resistanceY);

            console.log("");
            console.log("");
            console.log("");

        }, 2000 * i);
    }
}
