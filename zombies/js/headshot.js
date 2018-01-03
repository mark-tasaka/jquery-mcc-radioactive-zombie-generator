/*Array to hold zombieHeadShots */
var zombieArrayHeadShot = [];

/*Randomly generates the headshot of the Zombie*/
function headshot(){
    var zombie = [
        {"image": "01"},
        {"image": "02"},
        {"image": "03"},
        {"image": "04"},
        {"image": "05"},
        {"image": "06"},
        {"image": "07"},
        {"image": "08"},
        {"image": "09"},
        {"image": "10"},
        {"image": "11"},
        {"image": "12"},
        {"image": "13"},
        {"image": "14"},
        {"image": "15"},
        {"image": "16"},
        {"image": "17"},
        {"image": "18"},
        {"image": "19"},
        {"image": "20"},
        {"image": "21"},
        {"image": "22"},
        {"image": "23"},
        {"image": "24"},
        {"image": "25"},
        {"image": "26"},
        {"image": "27"},
        {"image": "28"}
    ];
    
    var isDuplicate = false;
    
    for(; ;)
        {
            
		var zombieOneHeadShot = zombie[Math.floor(Math.random() * zombie.length)]; 
            isDuplicate = false;
            
            for(var i = 0; i < zombieArrayHeadShot.length; i++ )
                {
            
                    if(zombieOneHeadShot.image === zombieArrayHeadShot[i].image)
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

        zombieArrayHeadShot.push(zombieOneHeadShot);

        return zombieOneHeadShot;


}

