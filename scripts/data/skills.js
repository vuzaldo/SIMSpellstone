"use strict"

var SKILL_DATA = {
	"absorb": {
		"desc": "Prevents this much damage taken from Skills or Statuses each round.",
		"icon": "absorb",
		"name": "Ward",
		"order": 20,
		"type": "turnStart"
	},
	"armored": {
		"desc": "Reduces damage taken from each Attack.",
		"icon": "shield",
		"name": "Armor",
		"order": 40,
		"type": "passive"
	},
	"backlash": {
		"desc": "After being targeted by an enemy creature's Skill, deals damage back.",
		"icon": "payback",
		"name": "Backlash",
		"order": 50,
		"type": "passive"
	},
	"barrage": {
		"desc": "Deal damage to random enemy creatures one damage at a time. This damage does not cause additional effects.",
		"icon": "barrage",
		"name": "Barrage",
		"order": 155,
		"type": "earlyActivation"
	},
	"bash": {
		"desc": "Increases damage dealt by the first attack each turn.",
		"icon": "empower",
		"name": "Bash",
		"order": 1,
		"type": "passive"
	},
	"berserk": {
		"desc": "After dealing Attack damage, permanently increases Attack.",
		"icon": "berserk",
		"name": "Berserk",
		"order": 280,
		"type": "onAttack"
	},
	"burn": {
		"desc": "Inflicts Scorch on the opposing creature. Stacks and deals damage at end of turn until Scorch is not inflicted for a turn.",
		"icon": "burn",
		"name": "Scorch",
		"order": 190,
		"type": "activation"
	},
	"burn2": {
		"desc": "Inflicts Scorch on the opposing creature. Stacks and deals damage at end of turn until Scorch is not inflicted for a turn.",
		"icon": "burn",
		"name": "Scorch 2",
		"order": 191,
		"type": "activation"
	},
	"burnself": {
		"desc": "Inflicts Scorch on self. Wears off if not reapplied for a turn.",
		"icon": "burn",
		"name": "Scorch Self",
		"order": 500,
		"type": "activation"
	},
	"cleanse": {
		"desc": "Every {c} turns, remove the negative states of itself or an ally.",
		"icon": "cleanse",
		"name": "Cleanse",
		"order": 310,
		"type": "earlyActivation"
	},
	"confuse": {
		"desc": "Every {c} turns, inflicts Confuse on a random enemy creature, forcing it to Attack an adjacent ally. On-hit effects also apply.",
		"icon": "confuse",
		"name": "Confuse",
		"order": 300,
		"type": "activation"
	},
	"corrosive": {
		"desc": "After taking Attack damage, inflicts Corrosive back, reducing Attack until Corrosive is not inflicted for two turns.",
		"icon": "corrosive",
		"name": "Corrosive",
		"order": 80,
		"type": "onDamaged"
	},
	"counter": {
		"desc": "After taking Attack damage, deals damage back.",
		"icon": "vengeance",
		"name": "Vengeance",
		"order": 60,
		"type": "onDamaged"
	},
	"counterburn": {
		"desc": "After taking Attack damage, inflicts Scorch back.",
		"icon": "counterburn",
		"name": "Emberhide",
		"order": 70,
		"type": "onDamaged"
	},
	"counterpoison": {
		"desc": "After taking Attack damage, inflicts Poison back.",
		"icon": "poisonhide",
		"name": "Poisonhide",
		"order": 75,
		"type": "onDamaged"
	},
	"daze": {
		"desc": "After dealing Attack damage, inflicts Daze, reducing Attack.",
		"icon": "daze",
		"name": "Daze",
		"order": 260,
		"type": "onAttack"
	},
	"devour": {
		"desc": "After dealing Attack damage, permanently increases Attack and heals self.",
		"icon": "devour",
		"name": "devour",
		"order": 285,
		"type": "onAttack"
	},
	"enfeeble": {
		"desc": "Inflicts Hex on a random enemy creature, causing it to take extra damage from Attacks and Skills.",
		"icon": "hex",
		"name": "Hex",
		"order": 160,
		"type": "activation"
	},
	"enfeeblebge": {
		"desc": "Inflicts Hex on a random enemy creature, causing it to take extra damage each time it is damaged.",
		"icon": "hex",
		"name": "Hex",
		"order": 1,
		"type": "activation"
	},
	"enhance": {
		"desc": "Increases the effect of this Skill for a random ally creature.",
		"icon": "enhance",
		"name": "Enhance",
		"order": 3,
		"type": "earlyActivation"
	},
	"enlarge": {
		"desc": "Permanently increases the Attack of a creature when played, while this creature is active",
		"icon": "empower",
		"name": "Enlarge",
		"order": 500,
		"type": "earlyActivation"
	},
	"enrage": {
		"desc": "Grants Enrage to a random ally creature, causing it to permanently increase Attack after taking Attack damage.",
		"icon": "enrage",
		"name": "Enrage",
		"order": 220,
		"type": "activation"
	},
	"evade": {
		"desc": "Avoids this many targeted enemy Skills each round.",
		"icon": "invisibility",
		"name": "Invisibility",
		"order": 10,
		"type": "turnStart"
	},
	"evadebarrier": {
		"desc": "Grants Barrier and half as much Invisibility to self and leftmost ally creature.",
		"icon": "mystic_barrier",
		"name": "Mystic Barrier",
		"order": 1,
		"type": "activation"
	},
	"fervor": {
		"desc": "At start of turn, grants self Fervor for each adjacent creature, increasing Attack.",
		"icon": "fervor",
		"name": "Fervor",
		"order": 150,
		"type": "earlyActivation"
	},
	"flurry": {
		"desc": "Every {c} turns, Attacks twice and uses other Skills twice.",
		"icon": "swiftness",
		"name": "Dualstrike",
		"order": 290,
		"type": "turnStart"
	},
	"frost": {
		"desc": "Deals damage to the opposing creature and its adjacent creatures.",
		"icon": "frostbreath",
		"name": "Frostbreath",
		"order": 180,
		"type": "activation"
	},
	"fury": {
		"desc": "This creature has Vengeance and half as much Shroud and Enraged.",
		"icon": "fury",
		"name": "Maelstrom's Fury",
		"order": 1,
		"type": "onDamaged"
	},
	"haste": {
		"desc": "Decreases the creature's delay.",
		"icon": "fury",
		"name": "Haste",
		"order": 500,
		"type": "activation"
	},
	"heal": {
		"desc": "Heals a random ally creature.",
		"icon": "heal",
		"name": "Heal",
		"order": 120,
		"type": "activation"
	},
	"heartseeker": {
		"desc": "Inflicts Heartseeker on the opposing creature, permanently increasing damage taken from Attacks.",
		"icon": "heartseeker",
		"name": "Heartseeker",
		"order": 15,
		"type": "activation"
	},
	"ignite": {
		"desc": "Increases the Scorch value on a Scorched enemy creature, or deal Scorch damage to a random enemy creature.",
		"icon": "ignite",
		"name": "Ignite",
		"order": 500,
		"type": "activation"
	},
	"imbue": {
		"desc": "Adds this Skill to a random ally creature.",
		"icon": "imbue",
		"name": "Imbue",
		"order": 2,
		"type": "earlyActivation"
	},
	"intensify": {
		"desc": "Increases the value of Scorch or Poison on an enemy creature.",
		"icon": "intensify",
		"name": "Intensify",
		"order": 500,
		"type": "activation"
	},
	"invigorate": {
		"desc": "Heals a random ally creature and grants Invigorate, permanently increasing max health. Invigorate does not stack.",
		"icon": "invigorate",
		"name": "invigorate",
		"order": 125,
		"type": "activation"
	},
	"jam": {
		"desc": "Every {c} turns, inflicts Freeze on a random enemy creature, disabling its Attack and activation Skills.",
		"icon": "freeze",
		"name": "Freeze",
		"order": 200,
		"type": "activation"
	},
	"jamself": {
		"desc": "Freezes self. Activates every {c} turns.",
		"icon": "freeze",
		"name": "Freeze Self",
		"order": 500,
		"type": "activation"
	},
	"leech": {
		"desc": "After dealing Attack damage, heals self.",
		"icon": "siphon",
		"name": "Siphon",
		"order": 270,
		"type": "onAttack"
	},
	"legion": {
		"desc": "At start of turn, grants adjacent allies Legion, increasing Attack.",
		"icon": "legion",
		"name": "Legion",
		"order": 140,
		"type": "earlyActivation"
	},
	"magicfield": {
		"desc": "This card is immune to debuffs. Opposing card is immune to any positve effects.",
		"icon": "antimagicfield",
		"name": "Anti-Magic Field",
		"order": 1,
		"type": "activation"
	},
	"mark": {
		"desc": "Marks a random target upon first activation, Hexing them for 30% of their base Attack. The creature chooses a new mark when their current mark dies. Ignores Invisibility.",
		"icon": "eagle_eye",
		"name": "Mark",
		"order": 500,
		"type": "earlyActivation"
	},
	"nullify": {
		"desc": "After dealing Attack damage, inflicts Nullify, causing the creature to avoid this many targeted ally Skills.",
		"icon": "nullify",
		"name": "Nullify",
		"order": 240,
		"type": "onAttack"
	},
	"pierce": {
		"desc": "Reduces the effect of damage reduction and prevention on Attack damage.",
		"icon": "puncture",
		"name": "Pierce",
		"order": 230,
		"type": "passive"
	},
	"poison": {
		"desc": "After dealing Attack damage, permanently inflicts Poison, dealing damage at end of turn. Poison does not stack.",
		"icon": "corrupt",
		"name": "Poison",
		"order": 250,
		"type": "onAttack"
	},
	"poisonstrike": {
		"desc": "Deals bolt damage to a random enemy creature and leaves poison.",
		"icon": "poison_bolt",
		"name": "Poisonbolt",
		"order": 500,
		"type": "activation"
	},
	"protect": {
		"desc": "Grants Barrier to a random ally creature, preventing this much damage taken.",
		"icon": "mystic_barrier",
		"name": "Barrier",
		"order": 130,
		"type": "activation"
	},
	"protect_ice": {
		"desc": "Reduces the next damage dealt to a random allied creature",
		"icon": "iceshatter",
		"name": "Iceshatter Barrier",
		"order": 500,
		"type": "activation"
	},
	"protect_seafolk": {
		"desc": "Reduces the next Damage dealt to a random allied creature",
		"icon": "mystic_barrier",
		"name": "Barrier",
		"type": "activation"
	},
	"radiance": {
		"desc": "At start of turn, grant adjacent allies Legion and half as much Barrier.",
		"icon": "radiance",
		"name": "radiance",
		"order": 145,
		"type": "earlyActivation"
	},
	"rally": {
		"desc": "At start of turn, grants Empower to a random ally creature, increasing Attack.",
		"icon": "empower",
		"name": "Empower",
		"order": 110,
		"type": "earlyActivation"
	},
	"reanimate": {
		"desc": "After dying the first time, revives self, healing and removing all effects.",
		"icon": "reanimate",
		"name": "Reanimate",
		"order": 500,
		"type": "onDeath"
	},
	"regenerate": {
		"desc": "At end of turn, heals self, even while on delay.",
		"icon": "regenerate",
		"name": "Regenerate",
		"order": 90,
		"type": "turnEnd"
	},
	"reinforce": {
		"desc": "When this creature deals Attack damage they gain a Barrier",
		"icon": "reinforce",
		"name": "Energy Shield",
		"order": 90,
		"type": "onAttack"
	},
	"resurrect": {
		"desc": "Resurrects creatures when they die.",
		"icon": "frostbreath",
		"name": "Resurrect",
		"order": 505,
		"type": "activation"
	},
	"scorchbreath": {
		"desc": "Inflicts Scorch to the opposing creature and its adjacent creatures.",
		"icon": "scorchbreath",
		"name": "Scorchbreath",
		"order": 175,
		"type": "activation"
	},
	"silence": {
		"desc": "After dealing Attack damage, inflicts Silence, disabling all Skills.",
		"icon": "silence",
		"name": "Silence",
		"order": 235,
		"type": "toggle"
	},
	"slow": {
		"desc": "Increases the creature's delay.",
		"icon": "bind",
		"name": "Slow",
		"order": 500,
		"type": "activation"
	},
	"stasis": {
		"desc": "Reduces damage taken from each Attack and Skill while on delay or Frozen.",
		"icon": "shroud",
		"name": "Shroud",
		"order": 30,
		"type": "passive"
	},
	"strike": {
		"desc": "Deals damage to a random enemy creature.",
		"icon": "arcane_shot",
		"name": "Bolt",
		"order": 170,
		"type": "activation"
	},
	"swarm": {
		"desc": "After dealing Attack damage, permanently increases Attack of the lowest Attack active ally creature.",
		"icon": "infect",
		"name": "Swarm",
		"order": 1,
		"type": "onAttack"
	},
	"taunt": {
		"desc": "Attack damage dealt to adjacent creatures is dealt to this creature instead.",
		"icon": "taunt",
		"name": "Taunt",
		"order": 25,
		"type": "toggle"
	},
	"unearth": {
		"desc": "When a non token creature dies, it spawns a Token creature with stats based on its own stats",
		"icon": "reanimate",
		"name": "Unearth",
		"order": 500,
		"type": "onDeath"
	},
	"valor": {
		"desc": "At start of each turn, permanently increases Attack if opposing creature has more Attack, even while on delay.",
		"icon": "valor",
		"name": "Valor",
		"order": 100,
		"type": "turnStart"
	},
	"vampirism": {
		"desc": "Deals damage to opposing creature, even while on delay. This damage cannot be increased. After dealing damage, heals self.",
		"icon": "vampirism",
		"name": "Vampirism",
		"order": 85,
		"type": "passive"
	},
	"venom": {
		"desc": "After dealing Attack damage, permanently inflicts Venom, increasing damage taken. Deals damage at the end of each turn.",
		"icon": "venom",
		"name": "Venom",
		"order": 500,
		"type": "onAttack"
	},
	"weaken": {
		"desc": "Inflicts Weaken on a random enemy creature, reducing Attack and preventing Attack increases.",
		"icon": "hinder",
		"name": "Weaken",
		"order": 210,
		"type": "activation"
	},
	"weakenbge": {
		"desc": "Inflicts Weaken on a random enemy creature, reducing Attack.",
		"icon": "hinder",
		"name": "Weaken",
		"order": 1,
		"type": "activation"
	},
	"weakenself": {
		"desc": "Reduces Attack of a random allied creature",
		"icon": "hinder",
		"name": "Weaken Ally",
		"order": 500,
		"type": "activation"
	},
	"wingward": {
		"desc": "Grants Barrier and half as much Invisibility to self and leftmost ally creature.",
		"icon": "avian_barrier",
		"name": "Wing Ward",
		"order": 1,
		"type": "activation"
	}
};