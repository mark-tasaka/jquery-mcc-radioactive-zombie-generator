/*Randomly generate Zombie traits*/

var zombieTraitsArray = [];

function zombieTraits(){
    var traits = [
        
        {"name": "Bleeder. ", "description": "The zombie bleeds acid blood.  Each time the zombie is hit by a melee attack, the attacker must make a DC 8 Ref Save to avoid being ‘splashed’ by the zombie’s blood.  A failed save will result in 1d4 points of damage.  When the zombie is killed, it will explode, spraying blood in a 5’ radius.  All creatures within 5’ of the zombie must make a DC 10 Ref Save, or take 1d6 points of damage."},
        
        {"name": "Stinker. ", "description": "The zombie reeks of decay.  All living creatures (i.e. non-zombies, non-androids) within 10’ of the zombie must make a DC 10 Fort Save.  A failed save will result in the victim developing nausea.  The victim must forgo all their actions for following turn (as they are busy throwing up), and any attacks made against the victim that round gain +1d attack bonus.  The victim’s actions will return to normal the subsequent turn.  When a victim has either passed their initial saving throw, or has ‘thrown up their guts’ due to the foul stench, no more saving throws (vs the zombie’s odor) are required for that specific zombie."},
        
        {"name": "Hard Shell.", "description": "A hard exoskeleton of bone grows from the zombie’s body.  This added protection gives the zombie an Armour Class of 18."},
        
        {"name": "Absorption.", "description": "A layer of absorbing fat lies directly beneath the zombie’s rotting flesh.  When a successful melee attack is made against the zombie, the attacker must make a DC 10 strength check to pull their weapon free from the zombie’s body.  A failed check will result in the weapon being stuck in the zombie’s body.  Once a weapon is stuck inside the zombie’s body it can only be retrieved once the zombie is slain."},
        
        {"name": "Explosion.  ", "description": "When the zombie is killed, it’s body will explode, sending fragments of bone and body parts flying everywhere.  All creatures within a 10’ radius of the explosion must make a DC 8 Ref Save.  A failed saving throw will result in 2d6 points of damage (half damage for successful saves)."},
        
        {"name": "Regeneration. ", "description": "Whenever the zombie injured, at the beginning of their turn they will regenerate 1d6 hit points, up to their maximum hit point value.  When this occurs, the characters will witness the recently inflicted wounds on the zombie’s body heal. The process of regeneration will occur at the start of each round until the zombie is fully healed."}
        
        
    ];
        
        var isDuplicate = false;
    
        for(; ;)
            {
            
		var zombieTraitsElement = traits[Math.floor(Math.random() * traits.length)]; 
                   isDuplicate = false;
            
            for(var i = 0; i < zombieTraitsArray.length; i++ )
                {
            
                    if(zombieTraitsElement.name === zombieTraitsArray[i].name)
                        {
                            isDuplicate = true;
                            /*break the inner loop*/
                            break;
                        }

                }
        
            if(isDuplicate === false)
                {
                    /*break the outer loop*/
                    break;
                }
        }

        zombieTraitsArray.push(zombieTraitsElement);

        return zombieTraitsElement;
}