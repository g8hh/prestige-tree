const SOFTCAPS = {
	normal_layers: {
		title: "非静态层获取",
		type: "root",
		start: new Decimal("e1e7"),
		mag: new Decimal(2),
		display() { return player.p.points.gte("e1e6") },
		info() { return "开始于 "+format(this.start)+", 平方根" },
	},
	normal_layers_2: {
		title: "非静态层获取",
		type: "expRoot",
		start: new Decimal("e5e11"),
		mag: new Decimal(2),
		display() { return player.p.points.gte("ee11") },
		info() { return "开始于 "+format(this.start)+", 指数平方根" },
	},
	p12: {
		title: "声望升级 2 （声望增益）",
		type: "log",
		start() { return new Decimal("1e3500").times((hasUpgrade("hn", 12)) ? upgradeEffect("hn", 12) : 1) },
		exp: new Decimal(1),
		display() { return hasUpgrade("p", 12) && !hasChallenge("h", 22) && upgradeEffect("p", 12).gte(this.start()) },
		info() { return "开始于 "+format(this.start())+"x, 对数" },
	},
	p12_h22: {
		title: "声望升级 2 （声望增益）",
		type: "expRoot",
		start() { return new Decimal("1e3500").times((hasUpgrade("hn", 12)) ? upgradeEffect("hn", 12) : 1) },
		mag() { return new Decimal(2).sub((hasUpgrade("hn", 21)) ? upgradeEffect("hn", 21) : 0) },
		display() { return hasUpgrade("p", 12) && hasChallenge("h", 22) && upgradeEffect("p", 12).gte(this.start()) },
		info() { return "开始于 "+format(this.start())+"x，基于 " + format(this.mag()) +" 次根的指数" },
	},
	timeEnEff: {
		title: "TE 第一效果",
		type: "expRoot",
		start() { return ((Array.isArray(tmp.ma.mastered))?tmp.ma.mastered.includes("t"):false)?new Decimal("e3.1e9"):(new Decimal(player.ma.mastered.includes("b")?(player.ma.mastered.includes("g")?"e2.838e9":"e2.75e9"):"e2.5e9")) },
		mag: new Decimal(5),
		display() { return player.t.unlocked && tmp.t.enEff.gte(this.start()) },
		info() { return "开始于 "+format(this.start())+"x, 指数五次根" },
	},
	timeEnEff2: {
		title: "TE 第二效果",
		type: "root",
		start: new Decimal(1.4e6),
		mag: new Decimal(2),
		display() { return tmp.t.enEff2.gte(this.start) },
		info() { return "开始于 "+formatWhole(this.start)+", 平方根" },
	},
	epGain: {
		title: "增强获取",
		type: "expRoot",
		start: new Decimal("e1.8e9"),
		mag: new Decimal(3),
		display() { return player.e.unlocked && new Decimal(tmp.e.resetGain||0).gte(this.start) },
		info() { return "开始于 "+format(this.start)+", 指数立方根" },
	},
	enh1: {
		title: "增强子第一效果",
		type: "expRoot",
		start: new Decimal("e5e9"),
		mag: new Decimal(3),
		display() { return tmp.e.buyables[11].effect.first.gte(this.start) },
		info() { return "开始于 "+format(this.start)+"x, 指数立方根" },
	},
	e12: {
		title: "增强升级 2 （增强声望）",
		type: "root",
		start: new Decimal("1e1500"),
		mag: new Decimal(2),
		display() { return hasUpgrade("e", 12) && upgradeEffect("e", 12).gte(this.start) },
		info() { return "开始于 "+format(this.start)+"x, 平方根" },
	},
	e32: {
		title: "增强子升级（增援）",
		type: "expRoot",
		start: new Decimal(1.25e8),
		mag: new Decimal(4),
		display() { return hasUpgrade('e', 32) && upgradeEffect("e", 32).gte(this.start) },
		info() { return "开始于 "+format(this.start)+"x, 开四次方根指数" },
	},
	spaceBuilding3: {
		title: "第三建筑",
		type: "expRoot",
		start: new Decimal("e1e12"),
		mag: new Decimal(3),
		display() { return player.s.buyables[13].gt(0) && buyableEffect("s", 13).gte(this.start) },
		info() { return "开始于 "+format(this.start)+"x, 指数立方根" },
	},
	spaceBuilding4: {
		title: "第四建筑",
		type: "log",
		start: new Decimal(1e6),
		exp: new Decimal(1),
		display() { return player.s.buyables[14].gt(0) && buyableEffect("s", 14).gte(this.start) },
		info() { return "开始于 ^"+format(this.start)+", 对数" },
	},
	spaceBuilding9: {
		title: "第九建筑",
		type: "expRoot",
		start: new Decimal(7.5e5),
		mag: new Decimal(6),
		display() { return player.s.buyables[19].gt(0) && buyableEffect("s", 19).gte(this.start) },
		info() { return "开始于 "+format(this.start)+"x, 指数 6 次根" },
	},
	spaceBuilding9_2: {
		title: "第九建筑",
		type: "log",
		start: new Decimal(1e7),
		exp: new Decimal(1),
		display() { return player.s.buyables[19].gt(0) && buyableEffect("s", 19).gte(this.start) },
		info() { return "开始于 "+format(this.start)+"x, 对数" },
	},
	s13: {
		title: "空间升级 3 (运走)",
		type: "expRoot",
		start: new Decimal("e1.5e11"),
		mag: new Decimal(5),
		display() { return upgradeEffect("s", 13).gte(this.start) && hasUpgrade("s", 13) },
		info() { return "开始于 "+format(this.start)+"x, 指数 5 次根" },
	},
	hindr_base: {
		title: "障碍灵魂效果",
		type: "expRoot",
		start: new Decimal(15e4),
		mag() { return new Decimal(((Array.isArray(tmp.ma.mastered))?tmp.ma.mastered.includes("h"):false)?2.5:4) },
		spec() { return 3*(hasChallenge("h", 11)?1.2:1)*hasUpgrade("ba", 21)?8:1 },
		display() { return player.h.unlocked && tmp.h.effect.root(this.spec()).gte(this.start) },
		info() { return "开始于 "+format(this.start.pow(this.spec()))+"x, 基于 "+format(this.mag())+" 次根的指数" },
	},
	option_d: {
		title: '"D 选项" 效果',
		type: "expRoot",
		start: new Decimal(1e33),
		mag: new Decimal(3),
		display() { return tmp.h.challenges[32].unlocked && challengeEffect("h", 32).gte(this.start) },
		info() { return "开始于 "+format(this.start)+"x, 指数立方根" },
	},
	qe: {
		title: "QE 效果",
		type: "expRoot",
		start() { 
			let start = new Decimal("e1800000") 
			if (hasUpgrade("q", 15) && player.i.buyables[12].gte(6)) start = start.times(upgradeEffect("q", 15));
			if ((Array.isArray(tmp.ma.mastered))?tmp.ma.mastered.includes("q"):false) start = start.pow(1.5);
			return start;
		},
		mag: new Decimal(2),
		display() { return player.q.unlocked && tmp.q.enEff.gte(this.start()) },
		info() { return "开始于 "+format(this.start())+"x, 指数平方根" },
	},
	q14_h: {
		title: "诡异升级 4（第四列协同） - 诡异加成",
		type: "log",
		start: new Decimal("1e1000"),
		exp: new Decimal(1000/3),
		display() { return hasUpgrade("q", 14) && upgradeEffect("q", 14).q.gte(this.start) },
		info() { return "开始于 "+format(this.start)+"x, 对数但提升至 "+format(this.exp)+" 次幂" },
	},
	q14_q: {
		title: "诡异升级 4（第四列协同） - 障碍灵魂加成",
		type: "log",
		start: new Decimal("1e1100"),
		exp: new Decimal(1100/3),
		display() { return hasUpgrade("q", 14) && upgradeEffect("q", 14).h.gte(this.start) },
		info() { return "开始于 "+format(this.start)+"x, 对数但提升至 "+format(this.exp)+" 次幂" },
	},
	solPow: {
		title: "太阳能",
		type: "root",
		start: new Decimal(32),
		mag: new Decimal(3),
		display() { return player.o.unlocked && tmp.o.solPow.gte(this.start) },
		info() { return "开始于 "+format(this.start.times(100))+"%, 立方根" },
	},
	sol_eff: {
		title: "阳光效果",
		type: "expRoot",
		start: new Decimal(1e4),
		mag: new Decimal(2),
		display() { return player.o.unlocked && player.o.points.gte(this.start) },
		info() { return "开始于 "+format(this.start)+" 阳光， 指数平方根" },
	},
	solCores: {
		title: "太阳核心效果",
		type: "expRoot",
		start: new Decimal(5e4),
		mag: new Decimal(2),
		display() { return player.o.buyables[11].gte(this.start) },
		info() { return "开始于 "+format(this.start)+" 太阳核心，指数平方根" },
	},
	solCores2: {
		title: "太阳核心效果",
		type: "log",
		start: new Decimal(4.75453173647236e21),
		exp: new Decimal(3),
		goal() { return reverse_softcap("solCores", this.start) },
		display() { return player.o.buyables[11].gte(this.goal()) },
		info() { return "开始于 "+format(this.goal())+" 太阳核心, 对数但提升至立方" },
	},
	corona: {
		title: "日冕波动",
		type: "expRoot",
		start: new Decimal(4),
		mag: new Decimal(2),
		display() { return player.o.buyables[21].gt(0) && buyableEffect("o", 21).gte(this.start) },
		info() { return "开始于 "+format(this.start.times(100))+"%, 指数平方根" },
	},
	hexGain: {
		title: "妖术获取",
		type: "expRoot",
		start: new Decimal("e25000000"),
		mag: new Decimal(3),
		display() { return player.m.hexes.gte(this.start) },
		info() { return "开始于 "+format(this.start)+", 指数立方根" },
	},
	hex: {
		title: "妖术效果",
		type: "log",
		start() { return new Decimal("1e10000").times(((Array.isArray(tmp.ma.mastered))?tmp.ma.mastered.includes("m"):false)?Decimal.pow(1.00001, player.m.points.plus(1).log10()):1) },
		exp() { return new Decimal(((Array.isArray(tmp.ma.mastered))?tmp.ma.mastered.includes("m"):false)?2e3:10) },
		display() { return player.m.unlocked && tmp.m.hexEff.gte(this.start()) },
		info() { return "开始于 "+format(this.start())+"x, 对数但提升至 "+format(this.exp()) + " 次幂" },
	},
	spell1: {
		title: "第一魔法（装载增幅器）",
		type: "expRoot",
		start() { return new Decimal(1e6).times(hasUpgrade("p", 44) ? upgradeEffect("p", 44) : 1) },
		mag: new Decimal(1.5),
		display() { return player.m.unlocked && buyableEffect("m", 11).gte(this.start()) },
		info() { return "开始于 "+format(this.start())+"x, 基于  "+format(this.mag)+" 次根的指数" },
	},
	spell2: {
		title: "第二魔法（时间折跃）",
		type: "expRoot",
		start() { return new Decimal(1e6).times(hasUpgrade("p", 44) ? upgradeEffect("p", 44) : 1) },
		mag: new Decimal(2),
		display() { return player.m.unlocked && buyableEffect("m", 12).gte(this.start()) },
		info() { return "开始于 "+format(this.start())+"x, 指数平方根" },
	},
	spell3: {
		title: "第三魔法（诡异聚焦）",
		type: "root",
		start: new Decimal(45),
		mag: new Decimal(5),
		display() { return player.m.unlocked && buyableEffect("m", 13).gte(this.start) },
		info() { return "开始于 "+format(this.start)+" 免费诡异层, 基于  "+format(this.mag)+" 次根的指数" },
	},
	posBuff: {
		title: "积极效果",
		type: "root",
		start() { return new Decimal(((Array.isArray(tmp.ma.mastered))?tmp.ma.mastered.includes("ba"):false)?"1e400":1e6) },
		mag: new Decimal(3),
		display() { return player.ba.unlocked && tmp.ba.posBuff.gte(this.start()) },
		info() { return "开始于 "+format(this.start())+"x, 三次根" },
	},
	negBuff: {
		title: "消极效果",
		type: "expRoot",
		start: new Decimal("1e1500"),
		mag: new Decimal(2),
		display() { return player.ba.unlocked && tmp.ba.negBuff.gte(this.start) },
		info() { return "开始于 "+format(this.start)+"x, 指数平方根" },
	},
	ba11: {
		title: "左上角平衡升级（阴离子）",
		type: "log",
		start: new Decimal(1.5),
		exp: new Decimal(0.5),
		display() { return hasUpgrade("ba", 11) && upgradeEffect("ba", 11).gte(this.start) },
		info() { return "开始于 "+format(this.start.times(100))+"%, 对数和平方根" },
	},
	ba12: {
		title: "右上平衡升级（阳离子）",
		type: "log",
		start: new Decimal(0.75),
		exp: new Decimal(0.25),
		display() { return hasUpgrade("ba", 12) && upgradeEffect("ba", 12).gte(this.start) },
		info() { return "开始于 "+format(this.start.times(100))+"%, 对数并取 "+format(this.exp.pow(-1))+" 次根" },
	},
	ba32: {
		title: "平衡升级（实体重生）",
		type: "log",
		start: new Decimal(1e9),
		exp: new Decimal(1.6),
		display() { return hasUpgrade("ba", 32) && upgradeEffect("ba", 32).gte(this.start) },
		info() { return "开始于 "+format(this.start)+"x, 对数但提升至 "+format(this.exp)+" 次幂" },
	},
	HnG: {
		title: "荣耀获取",
		type: "root",
		start: new Decimal(1e5),
		mag: new Decimal(5),
		display() { return player.hn.unlocked && tmp.hn.getResetGain.gte(this.start) },
		info() { return "开始于 "+format(this.start)+", 五次根" },
	},
	hn12: {
		title: "第二荣耀升级（荣耀增益）",
		type: "expRoot",
		start() { return new Decimal(((Array.isArray(tmp.ma.mastered))?tmp.ma.mastered.includes("hn"):false)?Infinity:1e10) },
		mag: new Decimal(2),
		display() { return hasUpgrade("hn", 12) && upgradeEffect("hn", 12).gte(this.start()) },
		info() { return "开始于 "+format(this.start())+"x, 指数平方根" },
	},
	hsBuilds: {
		title: "超建筑",
		type: "root",
		start() { return Decimal.add(3, hasAchievement("a", 121)?player.hs.buyables[11].root(5).times(.1):0).plus(((Array.isArray(tmp.ma.mastered))?tmp.ma.mastered.includes("hs"):false)?.1:0) },
		mag: new Decimal(5),
		display() { return player.hs.unlocked && tmp.hs.buildLimit.gt(this.start()) },
		info() { return "开始于 等级 "+format(this.start().plus(1))+", 五次根" },
	},
	rotEff: {
		title: "转速效果",
		type: "expRoot",
		start: new Decimal(1e230),
		mag: new Decimal(1.7),
		display() { return tmp.ge.rotEff.gte(this.start) },
		info() { return "开始于 "+format(this.start)+"x, 指数 1.7 次方根" },
	},
}

const STATIC_SCALE_DATA = [
	{
		start: new Decimal(12),
		start_adj: {
			"2": function() { 
				let start = new Decimal(12);
				if (hasUpgrade("q", 31)) start = start.plus(upgradeEffect("q", 31));
				return start;
			},
			"3": function() { 
				let start = new Decimal(12);
				if (hasUpgrade("q", 31)) start = start.plus(upgradeEffect("q", 31));
				return start;
			},
		},
		exp: new Decimal(2),
	}, {
		start: new Decimal(1225),
		start_adj: {
			"2": function() {
				let start = new Decimal(1225);
				if (hasUpgrade("t", 34) && player.i.buyables[12].gte(4)) start = new Decimal(1400);
				if (inChallenge("h", 42)) start = new Decimal(1);
				return start;
			},
			"3": function() {
				let start = new Decimal(1225);
				if (inChallenge("h", 42)) start = new Decimal(1);
				return start;
			},
			"4": function() {
				let start = new Decimal(1225);
				if (inChallenge("h", 42)) start = new Decimal(1);
				return start;
			},
		},
		exp: new Decimal(10),
	},
]

function softcapActive(name, val) {
	if (!SOFTCAPS[name]) return false;
	else return Decimal.gte(val, getSoftcapData(name, "start"));
}

function getSoftcapData(name, id) {
	let data = SOFTCAPS[name][id]
	if (isFunction(data)) return data();
	else return data;
}

function softcap(name, val) {
	val = new Decimal(val);
	if (!softcapActive(name, val)) return val;
	let type = getSoftcapData(name, "type");
	let start = getSoftcapData(name, "start");
	if (type=="root") {
		let mag = getSoftcapData(name, "mag");
		return val.times(start.pow(mag.sub(1))).root(mag);
	} else if (type=="expRoot") {
		let mag = getSoftcapData(name, "mag");
		return Decimal.pow(10, val.log10().root(mag).times(start.log10().pow(Decimal.sub(1, mag.pow(-1)))));
	} else if (type=="log") {
		let exp = getSoftcapData(name, "exp");
		return val.log10().pow(exp).times(start.div(start.log10().pow(exp)));
	} else return val;
}

function reverse_softcap(name, val) {
	val = new Decimal(val);
	if (!softcapActive(name, val)) return val;
	let type = getSoftcapData(name, "type");
	let start = getSoftcapData(name, "start");
	if (type=="root") {
		let mag = getSoftcapData(name, "mag");
		return val.pow(mag).div(start.pow(mag.sub(1)));
	} else if (type=="expRoot") {
		let mag = getSoftcapData(name, "mag");
		return Decimal.pow(10, val.log10().div(start.log10().pow(Decimal.sub(1, mag.pow(-1)))).pow(mag));
	} else if (type=="log") {
		let exp = getSoftcapData(name, "exp");
		return Decimal.pow(10, val.div(start.div(start.log10().pow(exp))).root(exp));
	} else return val;
}

function getStaticScaleStart(scale, r) {
	let adjData = STATIC_SCALE_DATA[scale].start_adj;
	if (adjData) return adjData[String(r)]?adjData[String(r)]():STATIC_SCALE_DATA[scale].start;
	else return STATIC_SCALE_DATA[scale].start;
}

function getStaticScaleExp(scale, r) {
	let adjData = STATIC_SCALE_DATA[scale].exp_adj;
	if (adjData) return adjData[String(r)]?adjData[String(r)]():STATIC_SCALE_DATA[scale].exp;
	else return STATIC_SCALE_DATA[scale].exp;
}

function scaleStaticCost(gain, row) {
	for (let scale=STATIC_SCALE_DATA.length-1;scale>=0;scale--) {
		let start = getStaticScaleStart(scale, row+1)
		let exp = getStaticScaleExp(scale, row+1)
		if (gain.gte(start)) gain = gain.pow(exp).div(start.pow(exp.sub(1)));
	}
	return gain;
}

function softcapStaticGain(gain, row) {
	for (let scale=0;scale<STATIC_SCALE_DATA.length;scale++) {
		let start = getStaticScaleStart(scale, row+1)
		let exp = getStaticScaleExp(scale, row+1)
		if (gain.gte(start)) gain = gain.times(start.pow(exp.sub(1))).root(exp);
	}
	return gain;
}