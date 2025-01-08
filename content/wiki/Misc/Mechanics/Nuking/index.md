---
aliases:
  - /wiki/Nuking
categories:
  - Game Mechanics
title: Nuking
---

{{< notices/outdatedInfo >}}

If you haven't already seen the summary of this strategy on the [Strategies]({{< ref "/wiki/" >}}Strategies) page, please click [here]({{< ref "/wiki/" >}}Strategies#Nuking). In short: **Nuking** is the act of purposefully using ships with high explosion values to destroy the ship, and to use the nuke upon ship explosion to try to take other ships with you.

### Nuking Damage Mechanics

Currently, nuke damage works as stated below: (Excerpt from Update Log channel in Galaxy Official Discord:)"--Nuke Changes 1) Resistance now applies to nukes. 2) Max nuke damage (0% resistance) is Radius x 4. (WAS Radius x 2 tho ignored resistance) 3) Shield takes 50% nuke damage 4) Bases take 50% nuke damage 5) Nuke damage is also proportional to range (e.g. 2k range, if 1k out will recieve 50% of the damage) 6) ALL Base Nukes Deal extra 2x nuke damage (Nuke radius x 8 = max damage)" The information below was sourced from a Galaxy Developer ([yname]({{< ref "/wiki/" >}}User:Wingy)):

ai (alien, pirate, etc.) = 15% shield, 40% hull

base (starbase, mothership, etc.) = 60% shield, 100% hull

other (players) = 50% shield, 90% hull

If you didn't understand this all the above information, an explanation may help(the explosion of a base or ship upon destruction will be referred to as "nuke" from this point onward on this page): A [base]({{< ref "/wiki/" >}}Starbase)'s or [ship]({{< ref "/wiki/" >}}Ships)'s damage resistance(dependent on its class), object type(AI (NPC)Ship, Base/Planet, Player ship), Shields, range at which the nuke did damage to a ship/base/planet, the explosion value of the ship or base that the nuke originated from, if the object taking damage is a base, and if the nuke originated from a base are all factors of how nuke damage is calculated. Let's start with an example, like the [Nyx]({{< ref "/wiki/" >}}Nyx). It's explosion value is 1250: The explosion value of a ship or base determines its explosion radius size, displayed as a scaled down value by a factor of 9(i.e. an Explosion Value[Listed as "Explosion Radius" in the :shipinfo command] translates to an explosion radius of 11,250 studs). The damage that a nuke does is calculated by how large the explosion radius is, with the value multiplied by 4(i.e. Nyx's nuke has a base damage of 50,000 HP[12,500×4=50,000]). Nuke damage also scales with distance. Say that the Nyx's nuke damaged a [Nemesis]({{< ref "/wiki/" >}}Nemesis) from 6,250 studs away. The nuke would do exactly half of the damage(25,000), and that's not even having accounted for additional resistances; such as Class resistance(which in the case of [Dreadnoughts]({{< ref "/categories/" >}}dreadnoughts) is 50%), and [Shields]({{< ref "/wiki/" >}}Shields)(Shield health on ships and bases have an additional 50% resistance to nuke damage). In which case, the total damage that the Nemesis receives if it tanked the nuke at full health would be 6,250 damage(which is in excess of its total shield health, so we're gonna have to do conversion here[6,250-5650=600,600÷0.5 <Note:This is because the damage resistance of dreadnoughts is 50%, still have to account for that> = 1,200 --> 1,200×0.9 <Nukes only deal 90% of their damage to the hull of player ships> = 1,080]), which results in the Nemesis being left on only 4,920 [Hull]({{< ref "/wiki/" >}}Hull) health. Pretty nasty damage. Anyways, now that you (probably) have a decent understanding of how nuke damage is calculated, let's go over where nukes are most effective. <span style="color:yellow">**Note: This section is outdated. The maximum damage of a nuke is 69-times the value of the explosion radius (i.e. explosion radius value of 1000 has a maximum damage of 69,000). Additionally, instant explosions (which currently are unable to occur) cause the maximum damage of a nuke to be multiplied by 1.2 (i.e. 69,000 maximum damage is increased to 82,800 if it is an instant explosion). The section below is possibly also outdated for the same reason, please take the information on this page with a grain of salt. See the image below for reference:**</span> ![Image of
configuration settings for explosions in an in-game script by
yname](NukeDmgConfig.png "Image of configuration settings for explosions in an in-game script by yname")

### Nuking Effectively

For starters, nuking bases is a bad idea. On top of them having decently high resistance to damage, they also have an extra 50% resistance against nuke damage. Throwing Nyx nukes at a level 5 [Starbase]({{< ref "/wiki/" >}}Starbase) even from point blank makes it take a very long time to destroy it with nukes alone(would take 4 point-blank Nyx nukes to just destroy the shield!). Likewise, base nukes are dangerous because they do twice the damage of ship nukes(Explosion Radius×8). For example, a level 5 [Mothership]({{< ref "/wiki/" >}}Mothership) nuke comes out to an astonishing total damage of 114,320 base damage(14,290×8=114,320). Even tanking the nuke from half of the maximum distance is enough to kill any Dreadnought in the game instantly regardless of being full health; it is only [Super Capitals]({{< ref "/categories/" >}}super-capital-ships), and durable [Carriers]({{< ref "/categories/" >}}carriers) that are able to tank the nuke from half of the maximum range. With that out of the way, here are a few points about nuking:

- **Only nuke as a last resort if you know your ship is going to be destroyed.** Nuking is no-where near cost-effective in most cases, and it is very expensive to do it at a scale where it is dangerous to other [Capital Ships]({{< ref "/categories/" >}}capital-ships).
- [Warp]({{< ref "/wiki/" >}}Warp-Drive) away from large size nukes, **especially [Base]({{< ref "/wiki/" >}}Starbase) nukes**, as they do a lot of damage.
- If you find a crippled capital ship trying to limp back home and it's obvious that the pilot isn't paying much attention to their surroundings, you can try to nuke them using a cheap throw-away nuke like the [M Class]({{< ref "/wiki/" >}}M-Class). However, it's more effective to use a combat ship to destroy said crippled ship in most cases.

## Version History

- Explosion radius size was changed from explosion radius value × 10, to explosion radius value × 9 (i.e. a value of 1000 for explosion radius has 9000 range now, not 10,000) in an unknown version.

## Trivia

- Mothership nukes have a notorious reputation for destroying the ships of unfortunate victims who were either not paying attention or failed to warp out in time.

[ship with a focus on kinetic armament]({{< ref "/wiki/" >}}Category:Hull-breaker)
