---
aliases:
- /wiki/AI-Fighters
categories:
- Game Mechanics
- NPC Ships
title: AI Fighters
---AI Fighters are a Robux exclusive feature of [Carriers]({{< ref "/categories/" >}}carriers) that allows the pilot of any Carrier to control their ship's [Fighters]({{< ref "/categories/" >}}fighters) with [AI]({{< ref "/categories/" >}}npc-ships) instead of players. They are priced at 300 Robux each, or 100,000 Credits for the first AI pilot purchased with credits (the second one is 125k, third 150k, and so on until the cost caps out at 500,000 Credits). ![Swarm of AI Fighters attacking a
ship.](AIFighterSwarm.png "Swarm of AI Fighters attacking a ship.")

AI Fighters are effective for earning money, as each fighter's combat reward will be rewarded to the carrier (provided the fighters are still alive and that the target dies) 

## Interface and Behavior 

As the name suggests, **AI Fighters** are controlled by an [AI]({{< ref "/categories/" >}}npc-ships), and can be commanded by the [Carrier's]({{< ref "/categories/" >}}carriers) pilot to do various tasks via the **Fighter Control Center**.

**AI Fighters, when attacking, or guarding a target, follow the same behavior as all [AI]({{< ref "/wiki/" >}}AI) Ships,** only having exceptions when in command. ![Fighter Control
Center.](FighterControlCenter.png "Fighter Control Center."){width="483" height="63"} Fighters that you want to command can be selected via the ▼ Button on the far left, which opens up the **Fighter Infoboxes**, just below the Fighter Control Center. If you want to select all Fighters at once, just click the **All** button beside it. AI Pilots can only control one Fighter each. ![Fighter Infobox Section of a
[Carrier]({{< ref "/wiki/" >}}Skeletal-Ghostealis).](FighterInfobox.png "Fighter Infobox Section of a Carrier."){width="481" height="53"} On the far right of the Fighter Control Center you can see the amount of AI Fighters you have and the amount of them remaining (_In-depth explanation can be found at the "Dead" Section below_), and a button to purchase additional AI Fighters.

The **Fighter Infobox Section** tells you what fighters you have selected, commanded and the statuses of these Fighters.

Fighters with a White Outline on their box tell that they are inside your [Carrier]({{< ref "/categories/" >}}carriers), on standby. While Fighters with a Blue Outline tell that they are currently being controlled by an AI Fighter and are released outside your [Carrier]({{< ref "/categories/" >}}carriers).

If you want to deselect control of a Fighter, click the Fighter with a Thick Outline to deselect it, or click _Idle_ on the far left to deselect all Fighters.

**_Note:_** Clicking Idle does not cancel whatever command they are following.

<div>
<h3 style="font-size:14pt;:">

**Fighter Commands**

</h3>

**Commands** are the basis of AI Fighters and without them, AI Fighters would be aimless on what to attack, guard or to do.

+------------+---------------------------+---------------------------+ | Command | Description | Infobox Icon | +============+===========================+===========================+ | **Attack** | If a | ![                        |
|            | [Fighter]({{< ref "/wiki/" >}}:Cate-----------|-image](FighterAttack.png) | | | gory:Fighters "wikilink") | | | | is attacking a target you | | | | selected, it's Fighter | | | | Infobox will have an icon | | | | of 2 swords beside the | | | | name of the Fighter. | | | | | | | | AI Fighters will assume | | | | normal | | | | [AI]({{< ref "/wiki/" >}}AI) | | | | attacking behavior | | | | pattern, and will try to | | | | fly to its target no | | | | matter how far away. | | +------------+---------------------------+---------------------------+ | **Guard** | If a | ! | | | [Fighter]({{< ref "/wiki/" >}}:Cate-|-[image](FighterGuard.png) | | | gory:Fighters "wikilink") | | | | is guarding a | | | | [Ship]({{< ref "/wiki/" >}}:Ca-|-|-|-|-tegory:Ships), | | | | [Starbase]({{< ref "/wiki/" >}}:Categ-|-|-|-|-ory:Starbase), | | | | or | | | | [Planet]({{< ref "/wiki/" >}}:Cate-|-|-|-|-gory:Planets), | | | | it's Fighter Infobox | | | | will have a shield icon | | | | beside the name of the | | | | Fighter. | | | | | | | | AI Fighters that are | | | | commanded to guard will | | | | fly to the designated | | | | guard point, no matter | | | | how far away, and will | | | | stay there for an | | | | indefinite amount of | | | | time. Guarding AI | | | | Fighters have a | | | | detection/aggro radius of | | | | 13k studs, same as | | | | [AI]({{< ref "/wiki/" >}}AI) | | | | Ships, **BUT** you have | | | | to be actively hostile | | | | _(e.g Recently shot at an | | | | enemy)_ in order for the | | | | guarding fighters to | | | | attack you if you're in | | | | an enemy faction. | | +------------+---------------------------+---------------------------+ | **Recall** | If a | ![                        |
|            | [Fighter]({{< ref "/wiki/" >}}:Cate-----------|-image](FighterRecall.png) | | | gory:Fighters "wikilink") | | | | is recalling, it's | | | | Fighter Infobox will have | | | | a curved line beside the | | | | name of the Fighter. | | | | | | | | Commanding Recall on | | | | fighters will immediately | | | | cancel whatever command | | | | they are following and | | | | will immediately move | | | | back to your Carrier, no | | | | matter how far away. | | | | | | | | Unlike recalling Player | | | | controlled Fighters, AI | | | | Fighters have to fly back | | | | your carrier in order | | | | teleport back to their | | | | spawn position | | | | | | | | This makes recalling **AI | | | | Fighters** extremely slow | | | | by comparison to | | | | player-controlled | | | | fighters, and is a major | | | | downside to the usage of | | | | **AI Fighters**. | | +------------+---------------------------+---------------------------+ | | | | +------------+---------------------------+---------------------------+

<div>
<h3 style="font-size:14pt;:">

**Fighter Statuses**

</h3>

**Statuses** are important icons that tell you how much health your Fighter has, or if it's dead. Statuses are separate from commands and both icons can appear at once.

+--------------+--------------------------+--------------------------+ | Status | Description | Infobox Icon | +==============+==========================+==========================+ | **Idle** | If a | ! | | | [Fighter]({{< ref "/wiki/" >}}:Categ-|-[image](FighterIdle.png) | | | ory:Fighters "wikilink") | | | | is idle, it's Fighter | | | | Infobox will have no | | | | icons. | | | | | | | | Idle state usually | | | | happens after it's | | | | designated target or | | | | guard point is | | | | destroyed. | | | | | | | | Released idle Fighters | | | | will move away from its | | | | former target position | | | | indefinitely, but will | | | | still attack any hostile | | | | ship that comes close to | | | | them, usually following | | | | the same behavior as | | | | wandering | | | | [AI]({{< ref "/wiki/" >}}AI) | | | | Ships. | | +--------------+--------------------------+--------------------------+ | **Damaged** | If a | ![im                     |
|              | [Fighter]({{< ref "/wiki/" >}}:Categ---------|-age](FighterDamaged.png) | | | ory:Fighters "wikilink") | | | | is damaged, it's | | | | Fighter Infobox will | | | | tell how much | | | | [Shi | | | | eld]({{< ref "/wiki/" >}}Shields) | | | | and | | | | [Hull]({{< ref "/wiki/" >}}Hull) | | | | it has, much like how | | | | damaged your ships are | | | | in the "Spawn Ship" | | | | section. | | +--------------+--------------------------+--------------------------+ | **Dead** | If a | ! | | | [Fighter]({{< ref "/wiki/" >}}:Categ-|-[image](FighterDead.png) | | | ory:Fighters "wikilink") | | | | is dead, it will grey | | | | out the Fighter Infobox | | | | of that Fighter. | | | | | | | | If any **AI Fighter** | | | | dies _(e.g 4 out 12 of | | | | AI Fighters die, you | | | | will be left with 8 | | | | usable AI Pilots),_ you | | | | have to respawn the | | | | carrier to regain the | | | | **AI Fighters** that | | | | died. The "Remaining" | | | | AI Pilots found on the | | | | far right of the | | | | **Fighter Control | | | | Center** tells how much | | | | "AI Pilots" are on | | | | your disposal inside | | | | your carrier, as said | | | | before, you have to | | | | respawn your carrier in | | | | order to regain the AI | | | | Fighters that you lost. | | +--------------+--------------------------+--------------------------+ | **Occupied** | If a | ![ima                    |
|              | [Fighter]({{< ref "/wiki/" >}}:Categ---------|-ge](FighterOccupied.png) | | | ory:Fighters "wikilink") | | | | is occupied by another | | | | player, it will show as | | | | a red outline over the | | | | **Fighter Infobox** that | | | | the other player is | | | | currently piloting. | | | | | | | | These Fighters can still | | | | be overridden by giving | | | | the Fighter an AI Pilot | | | | command, but the player | | | | piloting the Fighter | | | | will be kicked out of | | | | the pilot seat and will | | | | fall off. Be wary of | | | | this status when you | | | | have players controlling | | | | many of your Fighters. | | +--------------+--------------------------+--------------------------+ | | | | +--------------+--------------------------+--------------------------+

### Additional Info 

- Fighters that are controlled by AI will have their fighter name prefix be the owner of the Carrier _(e.g CarrierMain6969 Wraith)_, while the Fighters that are controlled by Players will have their fighter name prefix be the faction the Carrier is in. _(e.g Galaxy Defenders Wraith)_

<!-- -->

- If a Fighter is exceptionally powerful, _(e.g [A - Bionicle]({{< ref "/wiki/" >}}A---Bionicle), [Elanis]({{< ref "/wiki/" >}}Elanis), or [Hunter]({{< ref "/wiki/" >}}Hunter)),_ it may be better to put a player instead, as they can use the fighter's full potential unlike [AI]({{< ref "/wiki/" >}}AI).
- AI Fighters have a massive weakness, where if it gets too close to its target, it will turn around, possibly losing most, if not **All** of its firepower, until it turns around again after moving a moderate distance away from its target. _(This Behavior is explained in detail in the page [AI]({{< ref "/wiki/" >}}AI))_.
- AI Fighters will automatically recall to your carrier if they are farther than 50,000 studs away from your ship, or if you are docking/docked.
  - Additionally, you cannot deploy AI Fighters while within 1,500 studs of any [base]({{< ref "/categories/" >}}base).
- Sometimes, your AI Fighters will lose interest/wander off the target that they are attacking/guarding, so be sure to click the Attack/Guard command often even if the command is set.
- It is not recommended to leave your [Carrier's]({{< ref "/categories/" >}}carriers) pilot seat, as the AI Fighters can possibly have their set commands be removed.
- When an AI-Controlled Fighter attacks an enemy, you will be put into a "Hostile" state whether your Carrier has attacked or not, at any distance away. Interestingly though, this does not happen with Player-Controlled Fighters when they attack an enemy.
- Combat Reward is given in full to the Carrier owner when an AI-Controlled Fighter with accumulated CR destroys a ship. But the accumulated CR will be lost if the AI-Fighter carrying it is destroyed before it's target is destroyed. For Player-Controlled Fighters, the Combat Reward is instead given to the Pilot of the Fighter instead of the Captain of the Carrier that houses it.
- Fighters on a carrier take 60 seconds to re-spawn upon being destroyed.

### Known Bugs 

- AI Fighters sometimes forget their commands when they destroy a ship. Best example of this is when an AI Pilot destroys a ship during a guard command, afterwards it will wander off from its guard spot aimlessly.
- AI Fighters that are recalled are known to cause a bug where the [carrier]({{< ref "/categories/" >}}carriers) goes up to the recalled [fighter's]({{< ref "/categories/" >}}fighters) top speed (e.g. [Nimitz]({{< ref "/wiki/" >}}Nimitz) having [Interceptor F's]({{< ref "/wiki/" >}}Interceptor-F) top speed), caused by getting on a recalled AI Fighter, and then the pilot getting in the seat.
- When a Player-controlled Fighter is recalled, via the Recall Fighters button separate from the Fighter Control Center, and the Pilot inside the Fighter stays, the next time the Captain sets a command to the occupied Fighter, it will move and execute the command despite being occupied and the Player-Pilot may be left stuck welded on the carrier or fall off. It is also not shown the red border despite being occupied in that state.
- When an AI Controlled Fighter returns to it's Carrier and becomes docked, it will be impossible for a player to pilot that Fighter as it will keep booting you out of the seat, even though no AI is controlling the fighter anymore.

## Acquisition

- **AI Fighters** costs 300 robux each, or Credits. To purchase an AI Fighter pilot with robux, you must do so through the Robux shop menu (the button for it is right next to the [Codes]({{< ref "/wiki/" >}}Codes) button). Purchasing an AI Fighter with Credits requires that you have the Fighter Command Center visible, and click on the green plus-shaped button. Once bought, it acts as a permanent "slot" able to be used with any Carrier's Fighters and will remain if the Fighter it's controlling is destroyed. In terms of purchasing **AI Fighters** with Credits, the first purchase with Credits cost 100,000. Every subsequent purchase of an **AI Fighter** with Credits will have the cost increased by 25,000 Credits (**_only for the first 5 purchases, see the cost tables below_**), until the cost reaches its maximum of 500,000. Note that you can continue to buy AI Fighters with credits even after you have reached the maximum Credit cost. <span style="color:yellow">**AI Fighters purchased with Robux do not count towards the Credit cost increase.**</span>
- The [VIP Gamepass]({{< ref "/wiki/" >}}Galaxy-VIP-Gamepass) gives its owner 1 **AI Fighter**.
  - Users who owned the [Ship Stereo System Gamepass]({{< ref "/wiki/" >}}Ship-Stereo-System-Gamepass) before it was retired are also given 1 **AI Fighter**.

Amount Robux

---

1 300 2 600 3 950 4 1200 5 1500 6 1800 7 2100 8 2400 9 2700 10 3000 11 3300 12 3600 13 3900

: AI Fighters per Robux

Amount Credits

---

1 100,000 2 125,000 3 150,000 4 175,000 5 200,000 6 300,000 7 400,000 8+ 500,000

: AI Fighters per Credit

## Version History 

- Available in version .73f for a short time, and was quickly removed.
- Re-added in version .74a.
- Price increased from 250 -> 300 Robux in version .76c1.

<!-- -->

- AI Fighters made available for Credits in version .76d39.

## Trivia

- Before **AI Fighters** were released in version .74a, it was common for [rcouret]({{< ref "/wiki/" >}}rcouret) to test **AI Fighters**, but when **AI Fighters** were being used in that situation, any players that joined that same server would be unable to join any faction no matter what.
- There is no limit to the amount of **AI Fighter** pilots that you can own, but having more than the amount of fighters that your carrier is equipped with allows you to re-deploy fighters as they respawn after being destroyed, until you run out of **AI Fighter** pilots.
- The **AI Fighters** feature is somewhat controversial among the Galaxy community, as it is seen as a way to "Pay-2-Win" [Carriers]({{< ref "/categories/" >}}carriers) such as the [Nyx]({{< ref "/wiki/" >}}Nyx), [Prometheus]({{< ref "/wiki/" >}}Prometheus), [Kapisi]({{< ref "/wiki/" >}}Kapisi), [Hailstorm]({{< ref "/wiki/" >}}Hailstorm), and [Retro Nyx]({{< ref "/wiki/" >}}Retro-Nyx); because it turns those ships from strategic tools dependent on in some cases an entire team to function effectively, to monstrous flagships capable of easily overwhelming the defenses of bases, destroying them or any ship unfortunate enough to be on warp cooldown while near such a ship equipped with AI Fighters.
- A planned way to acquire AI Fighters without Robux was to trade 1 [Red Diamond]({{< ref "/wiki/" >}}Red-Diamond) to a computer in the Sales Floor of [Mega Base]({{< ref "/wiki/" >}}Mega-Base). It is unknown on whether this will be released or is cancelled.
  - AI Fighters are currently obtainable through purchasing them with Credits, though it is unconfirmed whether Red Diamonds will ever have an actual use.

AIFighterRedDiamond.png|The supposed computer where you exchange Red Diamonds for AI Pilots. AIFighterCredit.png|An example of what it looks like to purchase an AI Fighter with Credits.