const DRINK_RESULTS = {
    // 基础结果定义
    'BLACK_SUGAR': {
        name: '黑糖波波铁观音',
        description: '你的灵魂住着传统茶艺大师！选择宅家+手作的你，像慢火熬煮的黑糖珍珠，越沉淀越有味道～',
        emoji: '🫖'
    },
    'COLD_BREW': {
        name: '香草氮气冷萃',
        description: '成分党本党！选择极简生活的你，和这杯四重过滤的冷萃一样——纯粹得让人上头',
        emoji: '❄️'
    },
    'DIRTY_MATCHA': {
        name: '麻薯豆乳dirty',
        description: '豆乳系温柔人类样本！选择画油画做甜品的你，正在实践「用柔软征服世界」的哲学',
        emoji: '🍵'
    },
    'MANGO_ICE': {
        name: '椰云芒芒冰萃',
        description: '视觉系特优生！你的选择证明：好喝必须好看，人生需要分层特效',
        emoji: '🥭'
    },
    'MINT_COCO': {
        name: '斑斓薄荷生打椰',
        description: '角落艺术家认证！像这杯混搭特调，你在安静观察中酝酿着惊艳创意',
        emoji: '🥥'
    },
    'PEPPER_AMERICANO': {
        name: '藤椒柠檬美式',
        description: '反常规体验家！敢选全B的你，值得这杯暗黑系美式带来的颅内高潮',
        emoji: '☕'
    },
    'CHESTNUT_MILK': {
        name: '焦糖栗子麻薯牛乳',
        description: '终极舒适追求者！这杯冬日限定的绵密感，完美复刻你选择的安全区',
        emoji: '🌰'
    },
    'OOLONG_CREAM': {
        name: '山茶花乌龙奶盖',
        description: '矛盾美学大师！正如奶盖与清茶的碰撞，你在理性与感性间找到了完美平衡点',
        emoji: '🍶'
    },
    'DIRTY_MELON': {
        name: '冰博客dirty+蜜瓜冻',
        description: '控场技术流！选择质感面料又爱主导话题的你，像这杯dirty一样——表面冷静实则层次丰富',
        emoji: '🍈'
    },
    'OSMANTHUS': {
        name: '桂花酒酿冰吸生椰',
        description: '跨界创新体！你的选择模式过于独特，建议直接品尝这杯非遗混搭黑科技的特调',
        emoji: '🌸'
    }
};

function getResult() {
    const answers = [
        localStorage.getItem('q1'),
        localStorage.getItem('q2'),
        localStorage.getItem('q3'),
        localStorage.getItem('q4'),
        localStorage.getItem('q5')
    ];
    
    // 计算A的数量
    const countA = answers.filter(a => a === 'A').length;
    
    // 判断逻辑
    if (answers.every(a => a === 'A')) {
        return DRINK_RESULTS.CHESTNUT_MILK;
    }
    if (answers.every(a => a === 'B')) {
        return DRINK_RESULTS.PEPPER_AMERICANO;
    }
    if (answers.join('') === 'ABABA' || answers.join('') === 'BABAB') {
        return DRINK_RESULTS.OOLONG_CREAM;
    }
    if (countA >= 3) {
        return DRINK_RESULTS.BLACK_SUGAR;
    }
    if (answers[0] === 'A' && answers[2] === 'A') {
        return DRINK_RESULTS.DIRTY_MATCHA;
    }
    if (answers[1] === 'A' && answers[4] === 'A') {
        return DRINK_RESULTS.MANGO_ICE;
    }
    if (answers[0] === 'B' && answers[3] === 'B') {
        return DRINK_RESULTS.MINT_COCO;
    }
    if (answers[1] === 'B' && answers[3] === 'A') {
        return DRINK_RESULTS.DIRTY_MELON;
    }
    
    // 默认返回创新特调
    return DRINK_RESULTS.OSMANTHUS;
} 