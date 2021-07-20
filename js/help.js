// Delete this if you don't want a help tab :)

let help_data = {
	r1: {
		id: "r1",
		title: "第一行",
		text: "重置、购买升级、增长点数，除此以外这个阶段并没有什么可以做的事情。",
		unlocked() { return player.a.achievements.length>0 },
	},
	r2: {
		id: "r2",
		title: "第二行",
		text: "这个时候，你会需要在增幅器和生成器之间做出一个选择，不过因为你最后会同时得到这两个层，所以这里不存在错误的选择。生成器会生成一种资源（GP）而增幅器直接提供增益，所以如果你更喜欢主动的进行游戏，那么增幅器会更适合你。<br><br>接下来持续购买增幅器和生成器的升级（在购买之前多获得一些点数，这可以使资源恢复变容易），并尽量尝试获得里程碑，它们会使你的游戏变得自动化并且更快。<br><br>当你同时解锁了两者之后，这个阶段的剩余部分就比较平顺了，只需要转生、升级、获得里程碑即可。",
		unlocked() { return player.b.unlocked || player.g.unlocked },
	},
	r3: {
		id: "r3",
		title: "第三行",
		text: "这里，你需要做出时间、增强和空间的选择，你可以以任何方式解锁它们。所有的排列方式都是可行的，但有些会更快。由于其大多基于点数，增强是其中能够最快地获得里程碑的，并且它的里程碑同时增强增幅器和生成器，所以优先选择增强可能是更好的选择。<br><br>另一方面，时间和空间可以完全自动化增幅器和生成器，所以如果你觉得重置的时候买生成器很麻烦的话，可以考虑先选择空间再选择时间。对于空间而言，你最好购买靠后的建筑（第三>第二>第一）。<br><br>当这三个层都解锁后，尝试解锁超级增幅器和超级生成器，然后等待这一阶段结束即可。",
		unlocked() { return player.t.unlocked || player.e.unlocked || player.s.unlocked || player.sb.unlocked || player.sg.unlocked },
	},
	qh: {
		id: "qh",
		title: "诡异 & 障碍",
		text: "当你解锁诡异后，只需要尽量获取尽可能多的总诡异，购买尽可能多的诡异层（产生 QE），并获取里程碑来使进度更快更自动化，直到你解锁障碍为止。确保在每一个障碍开始之前获取尽可能多的障碍灵魂，这通常会对障碍进行有很大帮助。<br><br>第一个障碍（升级荒漠）需要你非常冷静的选择购买的升级。对于声望升级，购买升级 1 2 3 6，对于增幅器升级，购买 1 2 4。这应该会很轻松地使你通过挑战。如果你不能在合理的时间内通过障碍，你可以随时退出，然后提升一点诡异和障碍灵魂，并过一会再回来挑战，这不会有任何负面影响。<br><br>通过这个挑战会解锁诡异升级，诡异升级随时间变贵，但在第四行重置时恢复价格。这意味着你需要获得更多的诡异层，然后盯着诡异升级看你是否能够支付（大约十几秒就够了）。<br><br>当你购买了第一个诡异升级后，尝试第二个障碍（速度之魔），这个障碍几乎不需要动脑子。如果在合理的时间内完不成的话，退出障碍，然后买障碍灵魂、诡异和诡异升级，再来挑战。同时，这个打法对于接下来的大部分障碍都是有效的。<br><br>当你购买了第六个诡异升级（无限可能）后，你应该就可以打过第三个挑战（空间紧缺）了（其实点五个就能打，建筑策略是第六点满然后尝试第一第二的搭配，原作者使用了不太优秀的打法）。当你购买了第八个升级（指数狂怒）后，你应该能打过第四个障碍（弱化），只需将空间全部给第一建筑就可以。<br><br>结束前四个障碍后，应该尽可能多的完成第一个可重复障碍（永恒）（全买扩展时间胶囊）。<br><br>最后，你会解锁诡异改良，会在不同的方向加快 QE 获取。结合剩下的三个诡异升级，再多打几次永恒障碍，直到可以解锁下一个层为止。",
		unlocked() { return player.q.unlocked || player.h.unlocked },
	},
	oss: {
		id: "oss",
		title: "阳光 & 子空间",
		text: "当你解锁阳光或子空间后，你可以选择其中的一个，但是这两个选择在进度上会有一点差异。阳光更偏向于是一个活跃的层，需要你保持在线，因此其比子空间进度更快，子空间需要比较长时间的挂机。在这里没有错误的选择，你选啥都能继续游戏，你之后会把这两个都解锁出来。<br><br>对于阳光而言，重置，然后购买阳光升级，不断地重复这个过程。而子空间需要你等待子空间生成，然后购买升级，然后重置。这两个层的重置都会重置建筑，所以自动建筑里程碑是非常有用的。<br><br>最后，当你将这两个都解锁了以后，你的进展应该会比较顺利，如果卡住了就去各个层检查一下有没有遗落的升级或啥的。这个过程会一直持续到你解锁魔法或平衡。",
		unlocked() { return player.q.unlocked || player.h.unlocked },
	},
	r5: {
		id: "r5",
		title: "第五行",
		text: "当你解锁第五行后，先进行魔法重置或者平衡重置都是可以的，因为你之后也会解锁另外一个。魔法有三个，你可以消耗 1 魔法来释放其中一个（持续 1 分钟），同时会给你 1 妖术作为施法奖励。首先使用加成时间基础的技能，然后等到进展足够同时使用多个技能的时候再用其他技能。平衡会根据滑条的位置产生消极和积极，同时也有一些可购买的平衡升级。使用两遍的箭头按钮来获得消极或积极的最大加成，他们的惩罚没有严重到需要只保留一种资源，所以尽量保证他们的数量相等。<br><br>一直升级两个层，直到解锁幽魂，记得一直释放魔法，并且将平衡的滑条拉到两边来增长其数量（但是要尽量让两个相等）。<br><br>当你得到了你的第一个幽魂之后，再努把力拿到你的第一个幽灵。然后尝试完成新的障碍（D 选项）尽可能多次（购买所有声望升级，尽可能购买增幅器升级）。如果你在这个障碍卡住了，可以尝试使用更多的第一建筑，因为其他的建筑都不怎么有用。<br><br>继续努力拿到第二个幽灵并解锁下一个障碍（集中狂怒）。在开始之前，你可以将平衡滑条拉到消极极限。如果你不能完成这个障碍，可以再将滑条拉到积极极限。然后按部就班到解锁下一个挑战（减产）。<br><br>当你解锁了最终挑战（减产）后，直接莽过去。如果过不去，就把所有空间给第一建筑用，或者其他的啥的。然后按部就班到解锁荣耀。",
		unlocked() { return player.m.unlocked || player.ba.unlocked },
	},
	hn: {
		id: "hn",
		title: "Honour",
		text: "Once you reach your first Honour reset, begin to go for the Honour milestones, and get as many Honour milestones/upgrades as possible. Once you get the first Honour Upgrade, be sure to visit the Prestige tab often to check if you are able to discover any of the new Prestige Upgrades. Keep pushing to get more milestones, and eventually, you will get fully automated Honour runs. In this phase of the game, there isn't really a wrong way to progress, just keep pushing until you unlock Phantom Boosters.<br><br>Phantom Boosters are almost automated, but you do need to purchase Ghost Spirit. If you feel stuck, you're probably missing a possibly discoverable Prestige Upgrade, so be sure to check all of them. Keep on pushing until you can unlock Nebula or Hyperspace.",
		unlocked() { return player.hn.unlocked },
	},
	nhs: {
		id: "nhs",
		title: "Nebula & Hyperspace",
		text: "Once you unlock Nebula & Hyperspace, you have to choose which one you want to unlock first (although eventually you will get both). Nebula is more passive/idle, whereas Hyperspace is more active/strategic.<br><br>For Nebula, begin grinding up Dust amounts, saving up for Stellar Clusters, and repeat. Once you unlock the secondary Dust effects, use the bottom one. Once you're able to have two active at once, use the top & bottom ones to get more points, but use the bottom two whenever you want to get more space energy (for hyperspace).<br><br>For Hyperspace, you'll need to employ a little strategy in choosing which buildings to boost. I would recommend the following priority order: Quinary -> Quaternary -> Secondary -> Primary -> Tertiary. Of course, if you're having trouble, mess around with the buildings and try different combinations, see what works for you. The rule of thumb is that the Tertiary Building is worse than the others, so as long as you keep that in mind, you should be alright.<br><br>Once you unlock both, continue pushing, adjusting your Secondary Dust effect & Hyper Building setups, and grinding all the Row 6 resources until you can unlock Imperium. If you are stuck, make sure you've finished all Hindrance completions if you haven't already, and check any tabs that might be missing something.",
		unlocked() { return player.n.unlocked || player.hs.unlocked },
	},
	i: {
		id: "i",
		title: "Imperium",
		text: "Once you unlock Imperium, the craziness truly begins, since you'll be able to unlock new Space Buildings & upgrades across a bunch of different layers. The new Space Buildings further complicate Hyperspace, so make sure to know this: Senary, Octonary, and Decary Buildings are always worth it to get if possible. The Nonary Building is only useful if you're pushing your Hyperspace Energy, since the Nonary Space Building boosts Hyperspace Energy gain. The Septenary Building is slightly better than the Tertiary Building, but still worse than all the others.<br><br>As for the new discoverable upgrades, make sure that whenever you are required to do a run without a certain resource, do the lowest row reset possible in order to prevent some of your higher row resources from being reset. For example, if you need to reach a certain point amount without Boosters, do a Row 3 reset after disabling the Booster automator so that Row 3+ resources aren't reset, which helps you get to that goal more easily.<br><br>Continue pushing until you unlock the discoverable Quirk Upgrades, with which you should remember that their costs increase over time but also reset on a Quirk reset, so perform a Quirk reset whenever you feel like you are stuck to check if you can afford the next Quirk Upgrade.<br><br>Keep going as far as possible. Once you get close to the requirement to unlock Mastery, there is one last push that requires you to optimize everything as much as possible. Make sure your Hyper Building setup is as good as possible, remember to grind Hyperspace Energy whenever you feel stuck, and keep on pushing until you eventually reach 100 Phantom Souls and unlock Mastery.",
		unlocked() { return player.i.unlocked },
	},
	ma: {
		id: "ma",
		title: "Mastery",
		text: "Once you unlock Mastery, begin to grind your way back to do your second reset. Once that is done, you can begin your first Mastery, which should be fairly straightforward as all you need to do is purchase Prestige Upgrades. Continue to push for more Mastery and Mastery completions. When Mastering Row 2, Mastering Boosters is generally easier, so I would recommend doing that one first. When Mastering Row 3, the order in which you complete them is not necessarily important here, just make a choice and stick with it.<br><br>The first relatively difficult spot here comes when Mastering Hindrances, as you'll need to recomplete all Hindrances, which now have much higher goals. Just stick to the same strategies you used the first time you completed them, and you should be fine. If you feel like doing more active gameplay, Master Solarity before Subspace, otherwise start with Subspace.<br><br>Keep on pushing and Mastering layers until you unlock Gears.",
		unlocked() { return player.ma.unlocked },
	},
	ge: {
		id: "ge",
		title: "Gears",
		text: `Once you unlock Gears, you'll notice that there are two buyables that cost Dust Product, which you will need to figure out which one you want more. At first, the Kinetic Energy upgrade is much stronger than the Tooth Size upgrade, but later on it will require a little calculation. To do this, take the "Multiply Kinetic Energy gain by X" display and compare it to the "Divide Tooth Size by Y". If X>Y^2, then the Kinetic Energy upgrade is more important, otherwise the Tooth Size upgrade is better. In the end, you should be able to get by without this strategy, but this will make things as efficient as possible.<br><br>You'll also be able to Master Phantom Souls during this era, which should be fairly simple to beat. Continue to push Gears and your other layers as much as possible. During this part of the game, achievements are VERY important, some of their rewards being required to progress, so be sure to keep an eye on the achievement tab for powerful achievement rewards that may just be more in reach than you think. Keep going until you eventually can Master Honour.<br><br>Mastering Honour just requires a little patience and a keen eye. Go from upgrade to upgrade, purchasing them all (they are not all possible in the normal order). Once you Master Honour, unlocking Machines should be just another push away.`,
		unlocked() { return player.ge.unlocked },
	},
	mc: {
		id: "mc",
		title: "Machines",
		text: `Once you unlock Machines, you'll see two subtabs. The Shell is something you'll wanna take time to grind out every once in a while (it is always worth it to purchase, regardless of its nerf). The Motherboard requires a little strategy. CPU is good for getting Mech-Energy, which will help get more of the other Motherboard parts. The Port helps with Gear gain, while Northbridge & Southbridge are used for normal progression (points), although Southbridge is more effective at doing so.<br><br>With enough pushing of your Row 7 layers, you'll be able to Master Nebula & Hyperspace. It doesn't matter which you master first, although it's worth mentioning that while Mastering Hyperspace, the Nonary Hyper Building is disabled, so it may be better to start with Nebula. After Mastering these layers, keep pushing (remember that achievements are VERY important in this era as well) until you can unlock The Core.<br><br>At this point, keep in mind that Northbridge is now more effective than Southbridge due to the reward of the achievement "Breaching the Barriers". Begin to purchase Core Levels and continue pushing onwards until you can Master Imperium. Mastering Imperium is a little tricky, since the Imperium Buildings make each other more expensive, but as long as you purchase all of the second building first, it should be fairly easy. At this point, the push for endgame should just be a few short pushes away, and eventually after a little grinding and pushing, you'll be able to unlock some new layers!`,
		unlocked() { return player.mc.unlocked },
	},
	ene: {
		id: "ene",
		title: "Energy & Neurons",
		text: `Once you unlock Energy or Neurons, you must choose one of the two to unlock. Energy is a more active mechanic, whereas Neurons are a more idle mechanic, so choose whichever playstyle you would rather have.<br><br>If you choose Energy, you'll need to try and get as many of each Watt type as possible. The one generated is shown by which title is in all-caps (and brightened), and is switched on every Energy reset. In addition, be sure to continually store Energy in order to get its benefit. Begin pushing for the Energy milestones, and remember to go back to your Row 7 layers and push them every once in a while to ensure you get as much progress as possible. Storing up a lot of energy, releasing it for a few seconds, and then re-storing it is a good strategy to get Watts quickly, however it has the downside of losing Stored Energy, so be aware of that. Once you get the final Energy milestone, begin to push until you can unlock Neurons as well (guide below).<br><br>If you choose Neurons, you'll need to enter The Brain and push for as many Signals & Thoughts as possible. Begin pushing for the Neuron Milestones, and similarly to the Energy path, remember to push your Row 7 layers every once in a while to keep progressing efficiently. Continue pushing Neurons & Row 7 layers until you can unlock Energy (guide above).<br><br>Once you get through both Energy & Neurons, keep pushing for achievements and more progress until you can unlock the new Row 6 layers.`,
		unlocked() { return player.en.unlocked || player.ne.unlocked },
	},
	ridai: {
		id: "ridai",
		title: "Robots, Ideas, & AI",
		text: "Once you unlock Ideas, remember that they do reset Neurons, so you'll have to build that mechanic back up on each reset until you get the Idea milestones. Try to get Reveleations as much as you can, and keep pushing Energy, Neurons, and your Row 7 layers. Push for the Idea milestones, and just keep pushing (there really isn't anything crazy in this era).<br><br>Once you unlock Robots, you'll wanna balance your Robots evenly across all 5 types of Robots to keep your Minibot cycle going well. Remember to do Robot resets every once in a while to have a Minibot active, and push for the Robot milestones. Remember to go for achievements every once in a while as well.<br><br>Once you unlock AI, things get a little trickier. Get AI Networks whenever you can. As for the AI Nodes, you need to start with Node AA at first. Then, go for either Node AB or BA, then the other of those two, and finally BB. Once you have those four, your next goal is Nodes AC & CA, then Nodes BC & CB, and then finally Node CC. If you feel stuck, there's no shame in resetting your AI Nodes and messing around with them to see what sticks though. Continue pushing progress and pushing for achievements until you can unlock Civilizations.",
		unlocked() { return player.id.unlocked },
	},
	civ: {
		id: "civ",
		title: "Civilizations",
		text: "Once you unlock Civilizations, get Civilization Power and begin pushing. You'll also be able to get more AI Nodes here, which you should do in the order: AD -> BD/DB -> CD -> DD -> DA -> DC. As for Population, you should put it into Civs 5, 4, & 3 first, then deal with the earlier ones (but doing this other ways won't punish you all that greatly). Keep going for more Row 7 stuff, and make sure that your new Row 6 layers (Robots & Ideas) are fully automated at this point.<br><br>Go for more and more points, achievements, and progress altogether. If you feel stuck, remember to adjust your AI & civ builds, and check if anything isn't automated or bought that can be. Otherwise, this push towards the current endgame should be fairly straightforward.",
		unlocked() { return player.c.unlocked },
	},
}