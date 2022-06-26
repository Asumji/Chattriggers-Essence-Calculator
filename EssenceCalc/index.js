let wither = [
["soul_whip",300,200,300,400,550,750,2500],
["jerry_staff",0,5,10,25,50,100,190],
["crypt_witherlord_sword","Free",15,25,40,60,100,240],
["bonzo_staff","Free",5,10,25,50,100,190],
["bonzo_mask","Free",5,10,25,50,100,190],
["stone_blade","Free",15,25,40,60,100,240],
["adaptive_helmet","Free",10,25,50,100,150,335],
["adaptive_chestplate","Free",20,50,100,200,300,670],
["adaptive_leggings","Free",10,25,50,100,200,385],
["adaptive_boots","Free",10,25,50,100,150,335],
["silent_death","Free",5,10,25,50,100,190],
["conjuring_sword","Free",5,10,25,50,100,190],
["spirit_sword","Free",20,50,100,200,300,670],
["item_spirit_bow","Free",20,50,100,200,300,670],
["thorns_boots","Free",20,50,100,200,300,670],
["spirit_mask","Free",20,50,100,200,300,670],
["bone_boomerang","Free",20,50,100,200,300,670],
["bat_wand","Free",20,50,100,200,300,670],
["last_breath","Free",20,50,100,200,300,670],
["shadow_assassin_helmet","Free",20,50,100,200,300,670],
["shadow_assassin_chestplate","Free",35,75,150,300,500,1060],
["shadow_assassin_leggings","Free",30,60,120,250,400,860],
["shadow_assassin_boots","Free",20,50,100,200,300,670],
["shadow_fury","Free",50,100,200,400,800,1550],
["livid_dagger","Free",30,60,120,250,400,860],
["flower_of_truth","Free",50,100,200,400,800,1550],
["fel_sword","Free",15,25,40,60,100,240],
["wither_cloak","Free",75,150,300,600,1200,2325],
["precursor_eye",	"Free",75,150,300,600,1200,2325],
["giants_sword","Free",75,150,300,600,1200,2325],
["necromancer_lord_helmet","Free",30,60,120,250,400,860],
["necromancer_lord_chestplate","Free",70,150,250,450,750,160],
["necromancer_lord_leggings","Free",35,75,150,300,500,1060],
["necromancer_lord_boots","Free",30,60,120,250,400,860],
["necromancer_sword","Free",70,150,250,450,750,1670],
["necron_blade","Free",150,300,500,900,1500,3350],
["wither_helmet","Free",50,100,200,350,500,1200],
["wither_chesplate","Free",100,200,350,600,1000,2500],
["wither_leggings","Free",75,150,250,400,700,1575],
["wither_boots","Free",50,100,200,350,500,1200],
]

function FindInArray(array, keyword) {
    var index = undefined
    //looping through every entry is parent array
    for (var i = 0; i<array.length;i++) {
        //checking if child array includes the keyword
        if (wither[i].includes(keyword)) {
            index = i
        }
    }
    return index
}

function calculateEssence(firstStar, lastStar, item) {
    var requiredEssence = 0
    //looping through every star eg. 1 2 3 4 5
    for (var i = firstStar; i <= lastStar;i++) {
        requiredEssence += item[i + 1]
    }
    return requiredEssence
}

register('command', (...args) => {
    if (args.length >= 3) {
        if (args[1] <= 5 && args[2] <= 5) {
            //checking if the array contains the item
            if (FindInArray(wither, args[0]) != undefined) {
                //calcutating the essence
                essence = calculateEssence(Number(args[1]), Number(args[2]), wither[FindInArray(wither, args[0])])
                itemArray = wither[FindInArray(wither, args[0])]
                item = itemArray[0]
                item = item.replace("_", " ")

                Total12 = itemArray[2] + itemArray[3]
                Total123 = Total12 + itemArray[4]
                Total1234 = Total123 + itemArray[5]
                Total12345 = Total1234 + itemArray[6]

                ChatLib.chat("§e-------------------------------------------")
                ChatLib.chat("§aItem: " + item)
                ChatLib.chat("§6Dungeonize Cost: " + itemArray[1])
                ChatLib.chat("§6✪: " + itemArray[2].toString())
                ChatLib.chat("§6✪✪: " + itemArray[3].toString() + " Total: " + Total12.toString())
                ChatLib.chat("§6✪✪✪: " + itemArray[4].toString() + " Total: " + Total123.toString())
                ChatLib.chat("§6✪✪✪✪: " + itemArray[5].toString() + " Total: " + Total1234.toString())
                ChatLib.chat("§6✪✪✪✪✪: " + itemArray[6].toString() + " Total: " + Total12345.toString())
                ChatLib.chat("§1§lEssence for Star " + args[1] + " - " + args[2] + ": " + essence.toString())
                ChatLib.chat("§e-------------------------------------------")

            } else {
                ChatLib.chat("§cCould not find item.")
            }
        } else {
            ChatLib.chat("§cYou cannot provide a star higher than 5!")
        }
    } else {
        ChatLib.chat("§cYou are missing one or more arguments!\n§c/essencecalc {SkyblockItemID} {1st star to apply} {2nd star to apply}")
    }
}).setName('essencecalc')




//let testarray = ["ello", "test", "32", "80"]

// register("command", () => {
// ChatLib.chat(testarray)
// ChatLib.chat(testarray.includes("not thest"))
// }).setName("test")