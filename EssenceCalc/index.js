let essA = [
    ["soul_whip",300,200,300,400,550,750,2500,"Wither"],
    ["jerry_staff",0,5,10,25,50,100,190,"Wither"],
    ["crypt_witherlord_sword","Dungeon Item",15,25,40,60,100,240,"Wither"],
    ["bonzo_staff","Dungeon Item",5,10,25,50,100,190,"Wither"],
    ["bonzo_mask","Dungeon Item",5,10,25,50,100,190,"Wither"],
    ["stone_blade","Dungeon Item",15,25,40,60,100,240,"Wither"],
    ["adaptive_helmet","Dungeon Item",10,25,50,100,150,335,"Wither"],
    ["adaptive_chestplate","Dungeon Item",20,50,100,200,300,670,"Wither"],
    ["adaptive_leggings","Dungeon Item",10,25,50,100,200,385,"Wither"],
    ["adaptive_boots","Dungeon Item",10,25,50,100,150,335,"Wither"],
    ["silent_death","Dungeon Item",5,10,25,50,100,190,"Wither"],
    ["conjuring_sword","Dungeon Item",5,10,25,50,100,190,"Wither"],
    ["spirit_sword","Dungeon Item",20,50,100,200,300,670,"Wither"],
    ["item_spirit_bow","Dungeon Item",20,50,100,200,300,670,"Wither"],
    ["thorns_boots","Dungeon Item",20,50,100,200,300,670,"Wither"],
    ["spirit_mask","Dungeon Item",20,50,100,200,300,670,"Wither"],
    ["bone_boomerang","Dungeon Item",20,50,100,200,300,670,"Wither"],
    ["bat_wand","Dungeon Item",20,50,100,200,300,670,"Wither"],
    ["last_breath","Dungeon Item",20,50,100,200,300,670,"Wither"],
    ["shadow_assassin_helmet","Dungeon Item",20,50,100,200,300,670,"Wither"],
    ["shadow_assassin_chestplate","Dungeon Item",35,75,150,300,500,1060,"Wither"],
    ["shadow_assassin_leggings","Dungeon Item",30,60,120,250,400,860,"Wither"],
    ["shadow_assassin_boots","Dungeon Item",20,50,100,200,300,670,"Wither"],
    ["shadow_fury","Dungeon Item",50,100,200,400,800,1550,"Wither"],
    ["livid_dagger","Dungeon Item",30,60,120,250,400,860,"Wither"],
    ["flower_of_truth","Dungeon Item",50,100,200,400,800,1550,"Wither"],
    ["fel_sword","Dungeon Item",15,25,40,60,100,240,"Wither"],
    ["wither_cloak","Dungeon Item",75,150,300,600,1200,2325,"Wither"],
    ["precursor_eye","Dungeon Item",75,150,300,600,1200,2325,"Wither"],
    ["giants_sword","Dungeon Item",75,150,300,600,1200,2325,"Wither"],
    ["necromancer_lord_helmet","Dungeon Item",30,60,120,250,400,860,"Wither"],
    ["necromancer_lord_chestplate","Dungeon Item",70,150,250,450,750,160,"Wither"],
    ["necromancer_lord_leggings","Dungeon Item",35,75,150,300,500,1060,"Wither"],
    ["necromancer_lord_boots","Dungeon Item",30,60,120,250,400,860,"Wither"],
    ["necromancer_sword","Dungeon Item",70,150,250,450,750,1670,"Wither"],
    ["necron_blade","Dungeon Item",150,300,500,900,1500,3350,"Wither"],
    ["wither_helmet","Dungeon Item",50,100,200,350,500,1200,"Wither"],
    ["wither_chesplate","Dungeon Item",100,200,350,600,1000,2500,"Wither"],
    ["wither_leggings","Dungeon Item",75,150,250,400,700,1575,"Wither"],
    ["wither_boots","Dungeon Item",50,100,200,350,500,1200,"Wither"],
    ["runaans_bow",20,5,10,15,20,25,95,"Spider"],
    ["leaping_sword",20,5,10,15,20,25,95,"Spider"],
    ["silk_edge_sword",20,5,10,15,20,25,95,"Spider"],
    ["spider_hat",20,5,10,15,20,25,95,"Spider"],
    ["spider_boots",20,10,15,20,25,30,130,"Spider"],
    ["mosquito_bow",30,15,25,35,45,65,215,"Spider"],
    ["tarantula_helmet",30,15,25,35,45,65,215,"Spider"],
    ["tarantula_chestplate",30,15,25,35,45,65,215,"Spider"],
    ["tarantula_leggings",20,10,15,20,25,30,130,"Spider"],
    ["tarantula_boots",20,10,15,20,25,30,130,"Spider"],
    ["scorpion_bow",20,10,15,20,25,30,130,"Spider"],
    ["phantom_rod",500,200,300,400,500,600,2500,"Undead"],
    ["werewolf_helmet",500,200,300,400,500,600,2500,"Undead"],
    ["werewolf_chestplate",1000,400,600,800,1000,1200,5000,"Undead"],
    ["werewolf_leggings",750,300,450,600,750,900,3300,"Undead"],
    ["werewolf_boots",500,200,300,400,500,600,2500,"Undead"],
    ["pigman_sword",200,200,300,400,500,600,2200,"Undead"],
    ["undead_sword",10,20,30,40,50,60,210,"Undead"],
    ["zombie_sword",100,30,45,60,75,90,400,"Undead"],
    ["ornate_zombie_sword",100,30,45,60,75,90,400,"Undead"],
    ["florid_zombie_sword",100,30,45,60,75,90,400,"Undead"],
    ["skeleton_hat",40,20,30,40,50,60,240,"Undead"],
    ["zombie_hat",40,20,30,40,50,60,240,"Undead"],
    ["zombies_heart",100,30,45,60,75,90,400,"Undead"],
    ["zombie_chestplate",200,40,60,80,100,120,600,"Undead"],
    ["zombie_leggings",150,40,60,80,100,120,550,"Undead"],
    ["zombie_boots",120,35,50,65,80,100,450,"Undead"],
    ["skeletons_helmet",100,30,45,60,75,90,400,"Undead"],
    ["machine_gun_bow","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["soulstealer_bow","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["dreadlord_sword","Dungeon Item",10,15,20,25,30,100,"Undead"],
    ["skeleton_grunt_helmet","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["skeleton_grunt_chestplate","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["skeleton_grunt_leggings","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["skeleton_grunt_boots","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["sniper_bow","Dungeon Item",25,50,100,200,400,775,"Undead"],
    ["rotten_helmet","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["rotten_chestplate","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["rotten_leggings","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["rotten_boots","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["undead_bow","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["stone_chestplate","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["mender_helmet","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["dark_goggles","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["heavy_helmet","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["heavy_chestplate","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["heavy_leggings","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["heavy_boots","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["super_heavy_helmet","Dungeon Item",25,50,100,200,400,775,"Undead"],
    ["super_heavy_chestplate","Dungeon Item",25,50,100,200,400,775,"Undead"],
    ["super_heavy_leggings","Dungeon Item",25,50,100,200,400,775,"Undead"],
    ["super_heavy_boots","Dungeon Item",25,50,100,200,400,775,"Undead"],
    ["bouncy_helmet","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["bouncy_chestplate","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["bouncy_leggings","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["bouncy_boots","Dungeon Item",10,20,40,80,160,310,"Undead"],
    ["skeleton_master_helmet","Dungeon Item",15,30,60,120,240,465,"Undead"],
    ["skeleton_master_chestplate","Dungeon Item",15,30,60,120,240,465,"Undead"],
    ["skeleton_master_leggings","Dungeon Item",15,30,60,120,240,465,"Undead"],
    ["skeleton_master_boots","Dungeon Item",15,30,60,120,240,465,"Undead"],
    ["skeleton_soldier_helmet","Dungeon Item",15,30,60,120,240,465,"Undead"],
    ["skeleton_soldier_chestplate","Dungeon Item",15,30,60,120,240,465,"Undead"],
    ["skeleton_soldier_leggings","Dungeon Item",15,30,60,120,240,465,"Undead"],
    ["skeleton_soldier_boots","Dungeon Item",15,30,60,120,240,465,"Undead"],
    ["zombie_soldier_helmet","Dungeon Item",15,30,60,120,240,465,"Undead"],
    ["zombie_soldier_chestplate","Dungeon Item",15,30,60,120,240,465,"Undead"],
    ["zombie_soldier_leggings","Dungeon Item",15,30,60,120,240,465,"Undead"],
    ["zombie_soldier_boots","Dungeon Item",15,30,60,120,240,465,"Undead"],
    ["zombie_knight_helmet","Dungeon Item",20,40,80,160,320,620,"Undead"],
    ["zombie_knight_chestplate","Dungeon Item",20,40,80,160,320,620,"Undead"],
    ["zombie_knight_leggings","Dungeon Item",20,40,80,160,320,620,"Undead"],
    ["zombie_knight_boots","Dungeon Item",20,40,80,160,320,620,"Undead"],
    ["zombie_knight_sword","Dungeon Item",20,40,80,160,320,620,"Undead"],
    ["zombie_commander_helmet","Dungeon Item",25,50,100,200,400,775,"Undead"],
    ["zombie_commander_chestplate","Dungeon Item",25,50,100,200,400,775,"Undead"],
    ["zombie_commander_leggings","Dungeon Item",25,50,100,200,400,775,"Undead"],
    ["zombie_commander_leggings","Dungeon Item",25,50,100,200,400,775,"Undead"],
    ["zombie_commander_whip","Dungeon Item",25,50,100,200,400,775,"Undead"],
    ["zombie_lord_helmet","Dungeon Item",25,50,100,200,400,775,"Undead"],
    ["zombie_lord_chestplate","Dungeon Item",25,50,100,200,400,775,"Undead"],
    ["zombie_lord_leggings","Dungeon Item",25,50,100,200,400,775,"Undead"],
    ["zombie_lord_boots","Dungeon Item",25,50,100,200,400,775,"Undead"],
    ["skeleton_lord_helmet","Dungeon Item",25,50,100,200,400,775,"Undead"],
    ["skeleton_lord_chestplate","Dungeon Item",25,50,100,200,400,775,"Undead"],
    ["skeleton_lord_leggings","Dungeon Item",25,50,100,200,400,775,"Undead"],
    ["skeleton_lord_boots","Dungeon Item",25,50,100,200,400,775,"Undead"],
    ["skeletor_helmet","Dungeon Item",15,30,60,120,240,465,"Undead"],
    ["skeletor_chestplate","Dungeon Item",15,30,60,120,240,465,"Undead"],
    ["skeletor_leggings","Dungeon Item",15,30,60,120,240,465,"Undead"],
    ["skeletor_boots","Dungeon Item",15,30,60,120,240,465,"Undead"],
    ["zombie_soldier_cutlass","Dungeon Item",15,30,60,120,240,465,"Undead"],
    ["metal_chestplate","Dungeon Item",20,40,80,150,300,590,"Undead"],
    ["mender_fedora","Dungeon Item",20,40,80,150,300,590,"Undead"],
    ["shadow_goggles","Dungeon Item",20,40,80,150,300,590,"Undead"],
    ["super_undead_bow","Dungeon Item",20,40,80,150,300,590,"Undead"],
    ["earth_shard","Dungeon Item",50,100,200,400,600,1350,"Undead"],
    ["steel_chestplate","Dungeon Item",40,80,150,300,600,1170,"Undead"],
    ["mender_crown","Dungeon Item",40,80,150,300,600,1170,"Undead"],
    ["wither_goggles","Dungeon Item",40,80,150,300,600,1170,"Undead"],
    ["death_bow","Dungeon Item",40,80,150,300,600,1170,"Undead"],
    ["crystallized_heart",100,30,45,60,75,90,400,"Undead"],
    ["revived_heart",100,30,45,60,75,90,400,"Undead"],
    ["reaper_mask",500,200,400,600,800,1000,3500,"Undead"],
    ["reaper_scythe",200,200,300,400,500,600,2200,"Undead"],
    ["revenant_falchion",500,200,400,600,800,1000,3500,"Undead"],
    ["reaper_falchion",500,200,400,600,800,1000,3500,"Undead"],
    ["axe_of_the_shredded",500,200,400,600,800,1000,3500,"Undead"],
    ["yeti_sword",100,100,150,200,250,300,1100,"Ice"],
    ["frozen_blaze_helmet",40,10,15,25,35,60,185,"Ice"],
    ["frozen_blaze_chestplate",80,20,25,35,45,75,280,"Ice"],
    ["frozen_blaze_leggings",60,15,20,30,40,65,230,"Ice"],
    ["frozen_blaze_boots",30,50,10,20,30,55,195,"Ice"],
    ["frozen_scythe",50,10,15,20,25,30,150,"Ice"],
    ["ice_spray_wand","Dungeon Item",20,50,100,200,300,670,"Ice"],
    ["midas_staff",100,50,100,250,200,250,850,"Gold"],
    ["rogue_sword",5,1,2,3,4,5,20,"Gold"],
    ["midas_sword",100,25,50,75,125,200,575,"Gold"],
    ["super_cleaver","Dungeon Item",1,1,2,2,3,9,"Gold"],
    ["hyper_cleaver","Dungeon Item",5,10,15,20,25,75,"Gold"],
    ["giant_cleaver","Dungeon Item",10,20,30,40,50,530,"Gold"],
    ["gold_bonzo_head","Dungeon Item",50,75,125,250,500,1000,"Gold"],
    ["gold_scarf_head","Dungeon Item",50,75,125,250,500,1000,"Gold"],
    ["gold_professor_head","Dungeon Item",50,75,125,250,500,1000,"Gold"],
    ["gold_thorn_head","Dungeon Item",50,75,125,250,500,1000,"Gold"],
    ["gold_livid_head","Dungeon Item",50,75,125,250,500,1000,"Gold"],
    ["gold_sadan_head","Dungeon Item",50,75,125,250,500,1000,"Gold"],
    ["gold_necron_head","Dungeon Item",50,75,125,250,500,1000,"Gold"],
    ["aspect_of_the_dragon",150,50,100,200,300,400,1200,"Dragon"],
    ["dragon_helmet",40,20,30,50,100,150,390,"Dragon"],
    ["dragon_chestplate",70,30,50,80,120,180,530,"Dragon"],
    ["dragon_leggings",60,25,40,65,110,160,460,"Dragon"],
    ["dragon_boots",35,20,30,40,90,140,355,"Dragon"],
    ["superior_dragon_helmet",70,40,60,100,200,300,770,"Dragon"],
    ["superior_dragon_chestplate",100,160,100,160,240,360,1120,"Dragon"],
    ["superior_dragon_leggings",85,50,80,130,220,320,885,"Dragon"],
    ["superior_dragon_boots",60,40,60,80,180,280,700,"Dragon"],
    ["holy_dragon_helmet",400,50,75,100,125,150,900,"Dragon"],
    ["holy_dragon_chestplate",700,70,110,150,190,230,1450,"Dragon"],
    ["holy_dragon_leggings",600,60,90,120,150,180,1200,"Dragon"],
    ["holy_dragon_boots",350,50,75,100,125,150,850,"Dragon"],
    ["hardened_diamond_helmet",10,5,10,15,20,25,85,"Diamond"],
    ["hardened_diamond_chestplate",10,5,10,15,20,25,85,"Diamond"],
    ["hardened_diamond_leggings",10,5,10,15,20,25,85,"Diamond"],
    ["hardened_diamond_boots",10,5,10,15,20,25,85,"Diamond"],
    ["perfect_helmet",40,20,30,50,100,150,390,"Diamond"],
    ["perfect_chestplate",70,30,50,80,120,180,530,"Diamond"],
    ["perfect_leggings",60,25,40,65,110,160,460,"Diamond"],
    ["perfect_boots",35,20,30,40,90,140,355,"Diamond"],
    ["diamond_bonzo_head","Dungeon Item",50,75,125,250,500,1000,"Diamond"],
    ["diamond_scarf_head","Dungeon Item",50,75,125,250,500,1000,"Diamond"],
    ["diamond_professor_head","Dungeon Item",50,75,125,250,500,1000,"Diamond"],
    ["diamond_thorn_head","Dungeon Item",50,75,125,250,500,1000,"Diamond"],
    ["diamond_livid_head","Dungeon Item",50,75,125,250,500,1000,"Diamond"],
    ["diamond_sadan_head","Dungeon Item",50,75,125,250,500,1000,"Diamond"],
    ["diamond_necron_head","Dungeon Item",50,75,125,250,500,1000,"Diamond"]
    ]
    
    function FindInArray(array, keyword) {
        var index = undefined
        //looping through every entry is parent array
        for (var i = 0; i<array.length;i++) {
            //checking if child array includes the keyword
            if (essA[i].includes(keyword)) {
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
    
    function buildOutput(itemA, args) {
        essence = calculateEssence(Number(args[1]), Number(args[2]), essA[FindInArray(essA, args[0])])
        item = itemA[0]
        item = item.replace("_", " ")
        
        //checking if the item has a dungeonize price or not
        if (itemA[1] != "Dungeon Item") {
            Total1temp = itemA[1] + itemA[2]
            Total1 = " Total: " + Total1temp 
            Total12 = Total1temp + itemA[3]
            Total123 = Total12 + itemA[4]
            Total1234 = Total123 + itemA[5]
            Total12345 = Total1234 + itemA[6]
        } else {
            Total1 = ""
            Total12 = itemA[2] + itemA[3]
            Total123 = Total12 + itemA[4]
            Total1234 = Total123 + itemA[5]
            Total12345 = Total1234 + itemA[6]
        }
        //building the message
        ChatLib.chat("§e-------------------------------------------")
        ChatLib.chat("§aItem: " + item)
        ChatLib.chat("§6Dungeonize Cost: " + itemA[1])
        ChatLib.chat("§6✪: " + itemA[2].toString() + Total1.toString())
        ChatLib.chat("§6✪✪: " + itemA[3].toString() + " Total: " + Total12.toString())
        ChatLib.chat("§6✪✪✪: " + itemA[4].toString() + " Total: " + Total123.toString())
        ChatLib.chat("§6✪✪✪✪: " + itemA[5].toString() + " Total: " + Total1234.toString())
        ChatLib.chat("§6✪✪✪✪✪: " + itemA[6].toString() + " Total: " + Total12345.toString())
        ChatLib.chat("§1§l" + itemA[8] + " essence for Star " + args[1] + " - " + args[2] + ": " + essence.toString())
        ChatLib.chat("§e-------------------------------------------")
    }
    
    register('command', (...args) => {
        args[0] = args[0].toLowerCase()
        if (args.length >= 3) {
            if (!isNaN(args[1]) && !isNaN(args[2])) {
                if (args[1] <= 5 && args[2] <= 5 && args[1] >= 0 && args[2] >= 0) {
                    //checking if the array contains the item
                    if (FindInArray(essA, args[0]) != undefined) {
                        //calcutating the essence
                        itemArray = essA[FindInArray(essA, args[0])]
                        if (args[1] == 0 || args[2] == 0) {
                            if (itemArray[1] == "Dungeon Item") {
                                ChatLib.chat("§cThis Item does not have a Dungeonize Cost. Do not provide 0.")
                            } else {
                                buildOutput(itemArray, args)
                            }
                        } else {
                            buildOutput(itemArray, args)
                        }
                    } else {
                        ChatLib.chat("§cCould not find item.")
                    }
                } else {
                    ChatLib.chat("§cYou cannot provide a star higher than 5 or lower than 0!")
                }
            } else {
                ChatLib.chat("§cOne or more of your Stars wasn't a number!")
            }
        } else {
            ChatLib.chat("§cYou are missing one or more arguments!\n§c/essencecalc {SkyblockItemID} {1st star to apply} {2nd star to apply}")
        }
    }).setName('essencecalc')
