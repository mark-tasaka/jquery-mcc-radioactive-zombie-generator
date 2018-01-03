/*Randomly generate Zombie attacks*/

var zombieAttackArray = [];

function zombieAttack(){
    var attack = [
        {"name": "Infectious Bite.", "value1": "Atk bite +" + Math.floor(Math.random() * 3 + 2) + " melee (1d6+infection), Act 1d20",
        "value2": "Atk bite +" + Math.floor(Math.random() * 6 + 4) + " melee (1d6+infection), Act 1d20",
        "description": "The zombie has a mouth full of dirty, slim covered teeth. The victim of an successful attack must pass a DC 12 Fort Save, or develop a fever.  The fever causes the victim’s attack rolls, saving throws and checks to be reduced by -1d.  At the start of each day, the victim will make a DC 12 Fort Save; once this saving throw is passed, the effects of the fever are over."},
        
        {"name": "Razor Sharp Claws.", "value1": "Atk claws +" + Math.floor(Math.random() * 3 + 2) + " melee (1d6), 2d20",
        "value2": "Atk claws +" + Math.floor(Math.random() * 6 + 4) + " melee (1d6), 2d20",  
        "description": "The zombie possesses long, sharp claws, allowing the zombie to make two attacks per turn (2d20) without -1d penalty for two weapon fighting."},
        
        {"name": "Disgusting Vomit.", "value1": "Atk claws +" + Math.floor(Math.random() * 3 + 2) + " melee (1d3), 2d16 or vomit (see below) missle",
        "value2": "Atk claws +" + Math.floor(Math.random() * 6 + 4) + " melee (1d4), 2d16 or vomit (see below) missle",
        "description": "The zombie has the option of making a vomit attack (missile).  The vomit attack has a range of 15’. The target must pass a DC 10 Ref Save to avoid being hit by the vomit. If the target fails this save, they are cover with sticky foul-smelling vomit. Only after combat is over can the victim wash the vomit off.  Once covered in vomit, the victim must pass a DC 15 Fort Save. A failed saving throw results in the victim’s attack rolls, saving throws, checks reduced by -1d.  One saving throw is required per successful vomit attack."},
        
        {"name": "Nasty Headbutt. ", "value1": "Atk headbutt +" + Math.floor(Math.random() * 3 + 2) + " melee (1d3), 1d20 or Atk claws +" + Math.floor(Math.random() * 3 + 2) + " melee (1d3), 2d16",
        "value2": "Atk headbutt +" + Math.floor(Math.random() * 6 + 4) + " melee (1d4), 1d20 or Atk claws +" + Math.floor(Math.random() * 6 + 4) + " melee (1d4), 2d16",
        "description": "The zombie possesses a thick misshapen forehead, and has the option of making a headbutt melee attack.  If the attack succeeds, the victim must pass a DC 10 Ref Save to avoid being knocked prone.  If the victim is not wearing a helmet (or head protection), they must also make a DC 8 Fort Save. A failed save will result in the victim failing unconscious for 2d6 rounds."},
        
        {"name": "Cleaver & Knives.", "value1": "Atk cleaver +" + Math.floor(Math.random() * 3 + 2) + " melee (1d6+1), Act 1d20 or knives +" + Math.floor(Math.random() * 3 + 2) + " missile (1d4), Act 1d20",
        "value2": "Atk cleaver +" + Math.floor(Math.random() * 6 + 4) + " melee (1d6+1), Act 1d20 or knives +" + Math.floor(Math.random() * 6 + 4) + " missile (1d4), Act 1d20",
        "description": "The zombie has a large meat cleaver and several kitchen knives.  The cleaver is used for melee attacks while the knives (range 20’) are used for missile attacks.  The knives and the cleaver are coated in filth, and a victim hit by these weapons must make a DC 10 Fort Save.  A failed save will result in the victim suffering an addition 1d4 points of damage."},
        
        {"name": "Filthy Finger Nails. ", "value1": "Atk claws +" + Math.floor(Math.random() * 3 + 2) + " melee (1d3 +paralyzation), Act 2d16 or bite +" + Math.floor(Math.random() * 3 + 2) + " melee (1d6), 1d20.",
        "value2": "Atk claws +" + Math.floor(Math.random() * 6 + 4) + " melee (1d3 +paralyzation), Act 2d16 or bite +" + Math.floor(Math.random() * 6 + 4) + " melee (1d6), 1d20.",
        "description": "The zombie’s finger nails are covered in vile filth.  A victim hit by the claw attacks must pass a DC 10 Fort Save, or be paralyzed for 2d4 rounds.  Once the victim is paralyzed, the zombie will start to devour the victim with it’s sharp teeth."}
        
    ];
    
        var isDuplicate = false;
    
        for(; ;)
            {
            
		var zombieAttackElement = attack[Math.floor(Math.random() * attack.length)]; 
                   isDuplicate = false;
            
            for(var i = 0; i < zombieAttackArray.length; i++ )
                {
            
                    if(zombieAttackElement.name === zombieAttackArray[i].name)
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

        zombieAttackArray.push(zombieAttackElement);

        return zombieAttackElement;
}


