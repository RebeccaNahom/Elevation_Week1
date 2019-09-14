const turnToKing = function(name, money){
    let increaseByNameLength = function(name, money){
        return money = name.length * money
    }
    let makeRegal = function(name){
        return "His Royal Highness, " + name
    }
    name = name.toUpperCase()
    money = increaseByNameLength(name, money)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"



