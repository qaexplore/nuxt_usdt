let direct = {
  handbook: {
    headerTitle: '币本位合约新手指南',
    headerP: '3分钟教您玩转永续合约',
    title1: '永续合约',
    paragraph1: {
      p1: '从交易的角度来讲，类似于传统的期货合约，但又有些不同之处，它没有到期或结算日，只要你喜欢，你可以随便持有多久。\u2029通过资金费用机制来保证其价格紧跟标的价格。有人要问了，永续合约跟期货合约有什么不同呢？',
      p2: '58coin永续合约和币圈常见合约不同点:',
      p3: '尽管永续合约的入门及第一次交易很容易，但是还有很多需要学习的地方，不过只需3分钟哟，让您稳坐钓鱼台。开始我们的学习之旅吧！'
    },
    theadList1: ['项目', '58COIN永续合约', '币圈合约'],
    tbodyList1: [
      ['交易品种', 'BTC', '品牌多样化'],
      ['交割日期', '无', '某一特定日期'],
      ['杠杆', '2倍、3倍、5倍、10倍、20倍、33倍、50倍、100倍等多种选择', '最高20倍'],
      ['1张合约价值', '1USD', '100USD'],
      ['合约损失机制', '自动减仓', '所有账户分散损失'],
      ['强平价格指标', '标记价格指数', '标记价格指数'],
      ['资金费率', '有', '无']
    ],
    title2: '登录',
    paragraph2: {
      p1: '登录58COIN交易所官网www.58coin.com，点击"币本位永续合约",进入交易界面。'
    },
    title3: '交易流程',
    subhead3: '下面一起进入交易之旅吧!',
    paragraph3: {
      text1: '交易品种',
      p1: '目前只有比特币，后续会开放更多币种，您值得期待。',
      text2: '杠杆倍数',
      p2: '58 Swap 为用户提供多档可调节杠杆，2倍-100倍。',
      p3: '如果您是套保客户，您可以选择2-10倍风险较低的杠杆率',
      p4: '如果您是风险爱好者，您可以选择10-100倍杠杆，以谋取更高收益。',
      text3: '全仓保证金',
      p5: '也被称为 “跨期保证金”，是指利用所有的可用余额来避免强制平仓。这种方法对于套保已有仓位的投资者很有用，并且也适用于套利者，他们不想由于强平而将仓位暴露于风险中。',
      text4: '限价委托',
      p6: '限价委托用来指定交易者想要买／卖的最高／最低价格. 交易者使用这种类型来减少他们的交易成本，然而如果委托价格远离当前的市场价格，那么委托有可能不会被成交。用户输入仓位数量以及限价。',
      text5: '市价委托',
      p7: '市价委托将在当前市场中立刻成交。当交易者想要紧急成交委托，会选择这种类型。选择此类型时请注意委托列表，否则一个巨大的市价委托可能“击穿列表”，造成市场冲击成本。',
      text6: '资金费率',
      p8: '这是永续合约的一个特色，资金费用每隔一段时间（北京时间：00:00、08:00、16:00）在多仓和空仓的持有者之间进行交换。在你的交易历史中，正数意味着多方在此时段支付资金给空方；负数意味着空方在此时段支付资金给多方。58 COIN不支付或收取任何资金费用。<span style="color:red;">（平台已于香港时间2018年12月17日18:00 起无限期关闭互换补偿机制！）</span>',
      text7: '买入做多',
      p9: '如果看涨就做多，买入一定数量的合约',
      text8: '卖出做空',
      p10: '如果看跌就做空，卖出一定数量的合约',
      p11: '恭喜您，这个时候您已经交易成功了。'
    },
    title4: '交易信息',
    subhead4: '在这里呢，还要多给您补充一些知识，拿起板凳好好听哟！',
    paragraph4: {
      text1: '合理价格标记',
      p1: '独特设计的合理价格标记系统，以避免在高杠杆产品上发生不必要的强制平仓。 如果没有这个系统，那么标记价格可能会由于市场被操纵或是缺乏流动性而与价格指数发生不必要的偏差，从而导致不必要的强制平仓。 此系统将标记价格设置为合理价格而非最新交易价格，由此避免不必要的强平。',
      p2: '所有的自动减仓合约都使用合理价格标记方法。 此外请注意，此方法只影响强平价格以及未实现盈亏，它并不影响已实现盈亏。',
      p3: '注意：这意味着当你的委托执行后，你可能立即会看到正的或负的未实现盈亏。 发生这种情况的原因是合理价格与成交价格的略微偏差。 这是正常现象，并不意味着你损失了资金，但一定要留意你的强平价格，避免过早地被强制平仓。',
      text2: '自动减仓机制',
      p4: '当投资者被强制平仓时，他们的剩余仓位将被强平系统接管。如果强平仓位未能够在市场平仓，并且当标记价格达到破产价格时，自动减仓系统将会对持有反方向仓位的投资者进行减仓。减仓的先后顺序将根据杠杆和盈利比率决定。自动减仓将根据强平仓位的破产价格进行平仓。'
    },
    title5: '用了永续合约后投资收益会有什么不同呢',
    paragraph5: {
      p1: '假设小五和小八同时买/卖出58COIN永续合约，小五开通100倍杠杆，小八直接购买现货（等同于不开杠杆），且开仓时1个BTC为8000美金，开仓价值均为100BTC。（备注：1份合约=1USD）',
      text1: '做多案例',
      p2: '假定，BTC价格上涨到8300美金，那么我们来算算小五和小八的收益情况：',
      text2: '做空案例',
      p3: '假定，BTC价格下降到7700美金，那么我们来算算小五和小八的收益情况：',
      p4: '通过上述案例可以看到，小五开100倍杠杆只需要小八1/100的保证金，就可以获得相同的收益，以小博大。'
    },
    theadList2: ['项目', '小五', '小八'],
    tbodyList2: [
      ['开仓价值', '8,000,000份合约（100BTC）', '100 BTC'],
      ['杠杆倍数', '100 倍', '无杠杆（1倍）'],
      ['仓位保障金', '1 BTC', '100 BTC'],
      ['收益金额', '≈3.6144 BTC', '≈3.6144 BTC'],
      ['收益率', '361.44%', '3.6144%']
    ],
    theadList3: ['项目', '小五', '小八'],
    tbodyList3: [
      ['开仓价值', '8,000,000份合约（100BTC）', '100 BTC'],
      ['杠杆倍数', '100 倍', '无杠杆（1倍）'],
      ['仓位保障金', '1 BTC', '100 BTC'],
      ['收益金额', '≈3.896 BTC', '≈3.6144 BTC'],
      ['收益率', '389.6%', '3.896%']
    ],
    paragraph6: {
      p1: '有任何问题请咨询工作人员',
      p2: '鼠标点击浏览-',
      p3: '互换补偿率历史'
    }
  },
  navigation: {
    title1: '币本位永续合约',
    secondaryTitle0: '币本位合约止盈止损新手指导',
    secondaryTitle1: '币本位合约新手指导',
    secondaryTitle2: '币本位合约说明',
    title2Content1: '什么是永续合约',
    title2Content2: '如何交易永续合约',
    title2Content3: '永续合约的风控机制',
    title2Content4: '永续合约的防爆机制',
    title2Content5: '锚定现货价格',
    secondaryTitle3: '互换补偿历史',
    secondaryTitle4: '保险基金历史',
    title2: 'USDT合约',
    secondaryTitle5: 'USDT合约新手指导',
    secondaryTitle50: 'USDT合约止盈止损新手指导',
    secondaryTitle6: 'USDT合约说明',
    secondaryTitle7: '交割合约说明',
    title6Content1: '什么是USDT合约',
    title6Content2: '如何交易USDT合约',
    title6Content3: 'USDT合约的风控机制',
    title6Content4: 'USDT合约的防爆机制',
    title6Content5: '锚定现货价格-互换补偿',
    title3: '名词解释',
    title4: '指数价格',
    goTop: '返回顶部'
  },
  instructions: {
    tableHeader1: '合约名称',
    tableHeader2: '合约乘数',
    tableHeader3: '报价单位',
    tableHeader4: '合约的价值',
    tableHeader5: '交易方式',
    tableHeader6: '交易时间',
    tableHeader7: '维持保证金率',
    tableHeader8: 'maker',
    tableHeader9: 'taker',
    paragraph1: '合约的标的物为数字货币的合约,为方便交易,对每个对应数字货币的交易单位进行了调整,参见下表。',
    tips1: '注释：手续费maker和taker可能因为平台活动做不定期的调整，具体情况以公告信息为准。',
    paragraph2: '永续合约是以持有币种为计价单位和结算单位的数字货币合约。与期货合约不同，永续合约没有到期日期，因此不会发生结算。目前永续合约支持BTCUSD,EOSUSD等合约双向交易，并提供多倍杠杆，目的是容许高杠杆情况下复制现货市场的情况。该合约不会结算，并能够通过锚定机制跟紧标的参考的指数价格。',
    paragraph3: '永续合约的报价：',
    paragraph4: '永续的合约标的价格为多家头部交易所指数，详情参考指数价格。所有保证金和盈亏都以持有币种计价。报价参考合约说明。',
    paragraph5: '希望通过数字货币/美元价格上升而获利的投资者会做多永续合约；相反，相信价格会下跌的就会做空该合约。',
    paragraph6: '保证金和杠杆：',
    paragraph7: '所有保证金都以持有币种计算，您可以在该币种合约上进行双向交易，买多或卖空。',
    paragraph8: '杠杆提供2倍、3倍、5倍、10倍、20倍、33倍、50倍、100倍。您可以在开仓时选择使用的杠杆，开仓后杠杆无法二次调节。（多合约之间杠杆相互不受影响。）',
    paragraph9: '交易示例：',
    paragraph10: '投资者做多 100 BTC 等值的比特币，价格为 6,000 美元，他就做多了 100BTC * 6,000 USD = 600,000 张合约，几天后合约价格上升到 7000 美元。',
    paragraph11: '投资者的利润将是︰ 600,000 * 1 * (1/6,000 - 1/7,000) = 14.286 BTC',
    paragraph12: '如果价格实际上已经下降到 5,000 美元，投资者的损失将会是︰ 600,000 * 1 * (1/6,000-1/5,000) =-20 BTC。 由于合约的倒数和非线性性质，损失也较大。',
    paragraph13: '相反，对于做空的投资者来说，以比特币计算的话，下跌的利润将会比同样幅度上升所导致的亏损较大。',
    tips2: '注释：杠杆越高，价格波动产生的影响越大，请在您可承受的范围内选择适当的杠杆进行交易。',
    paragraph14: '爆仓价机制',
    paragraph15: '永续合约的风控使用爆仓价机制，爆仓价以指数价格为计算基准。当价格触发爆仓价时，则进入爆仓流程。',
    paragraph16: '爆仓价的产生：',
    paragraph17: '对于所有的仓位，其所需的维持保证金额 = {MM * 合约数量 * (乘数 / 开仓价格)}',
    paragraph18: '这是保持仓位所需的最小保证金额，若低于此金额，你的仓位会被强制平仓。我们会根据此值，计算出仓位的爆仓价。',
    paragraph19: '其中mm=维持保证金率=0.5%。',
    paragraph20: '爆仓流程',
    paragraph21: '为保证不发生不必要的爆仓，我们将保留现有仓位，并取消此合约的所有未成交委托。',
    paragraph22: '如果此时还未能满足维持保证金要求，此仓位将进入爆仓流程被强平引擎于破产价格接管。',
    paragraph23: '如果爆仓流程中，得到了比破产价格更好的价格平仓，那么额外的资金将被加入保险基金。',
    paragraph24: '如果爆仓流程中，以破产价格平仓依然无法满足平仓条件，那么我们将花费保险基金并继续在市场中进行委托平仓操作。 如果仍然无法清理强平委托，这将导致自动减仓事件。',
    paragraph25: '如果发生爆仓，您将会获得通知。',
    paragraph26: '自动减仓',
    paragraph27: '自动减仓是指在注入保险基金或保险基金消耗殆尽后无法处理的强平仓位。',
    paragraph28: '按照市场原则，交易必须是有对手盘的交易。如果对手盘消失（市场中无法获得），市场中的对手仓位也将会相应减少。',
    tips3: '注释：仅该品种合约受到影响，不影响其它合约的持仓。',
    paragraph29: '自动减仓顺序：根据盈利和杠杆计算。盈利更多以及更高杠杆的交易员会被首先减仓。',
    paragraph30: '排序计算如下︰',
    paragraph31: '排序 = 盈利百分比 * 有效杠杆 (如果盈利)= 盈利百分比 / 有效杠杆 (如果亏损)',
    paragraph32: '其中有效杠杆 = abs(标记价值) / (标记价值 - 破产价值)',
    paragraph33: '盈利百分比 = (标记价值 - 平均开仓价值) / abs(平均开仓价值)',
    paragraph34: '标记价值 = 位于标记价格时的仓位价值',
    paragraph35: '破产价值 = 位于破产价格时的仓位价值',
    paragraph36: '平均开仓价值 = 位于平均开仓价格时的仓位价值',
    paragraph37: '系统将多空双方分开由高之低排序。',
    paragraph38: '如果被自动减仓，您将会获得通知。',
    paragraph39: '为了避免人为控盘，导致的连锁爆仓反应对客户造成无端损失。平台采用锚定指数价格的方式对市场价格进行锚定，并以合理标的价格作为盈亏的计算价格，而非平台价格。',
    paragraph40: '合理标记价格的产生：合理标记价格=指数价格*（1+互换补偿率基差率。）',
    paragraph41: '互换补偿率基差率的计算请参考锚定现货价格',
    paragraph42: '交易过程中按照平台价格进行成交，（开仓与平仓过程，您必须和平台的对手盘产生。）',
    paragraph43: '未实现盈亏计算过程中按照合理标的价格进行计算，所以您可能在开仓瞬间迅速看到您的盈利和亏损（这是按合理标的价格进行计算产生的结果）。因您的爆仓计算是按照合理标的价格进行计算的，所以，无论平台内部价格产生怎样的波动，只要合理标的价格未变化，您的未实现盈亏就不会产生变化，进而避免“被穿针”“被爆仓”。',
    paragraph44: '例如：现在BTCUSD平台价为7000，合理标的价格为7005，您在开仓时只能和7000成交，但是您的未实现盈亏将按照7005进行计算。',
    paragraph45: '如果下一时刻，平台价由于某种原因大幅变化为6000，而合理标的价格依然为7005（合理标的价格没有变化），则您的未实现盈亏依然按照7005进行计算，不会受到平台价变化的影响。但是如果此时您进行平仓操作，您的成交价将会是6000，因为成交过程中的价格必须和平台内对手盘产生。',
    paragraph46: '锚定现货价格-互换补偿率',
    paragraph47: '永续合约的标的资产是BTC等数字货币现货资产，为了保持平台价格紧跟现参考价格，我们将使用互换补偿率机制作为现货价格锚定机制。',
    paragraph48: '互换补偿率在持有仓位的用户之间进行互换，平台不收取任何费用。',
    paragraph49: '互换补偿率由溢价和折价构成，每天进行1次互换，为香港时间18：00',
    paragraph50: '互换补偿率的计算方式：互换补偿率由利率和折价/溢价组成。',
    paragraph501: '互换补偿率在±0.03%范围内，不进行互换。',
    paragraph502: '互换补偿率机制目前处于关闭状态，即不进行互换。',
    paragraph51: '利率的构成：',
    paragraph52: '每分合约由两种货币构成：基础货币和计价货币。利率是这两种货币之间的利率函数，利率指数对应相应币种的借贷市场。',
    paragraph53: '折价/溢价的构成：',
    paragraph54: '当平台价格相较于指数价格有明显的溢价或折价，溢价指数将用于提高或降低下一个资金费率，使其符合目前平台合约交易的水平。',
    paragraph55: '溢价指数=深度加权中间价/指数价格-1',
    paragraph56: '互换补偿率根据每8小时的利率和折价/溢价部分计算得出，添加+/-0.03%缓冲。',
    paragraph57: '互换补偿率=溢价指数+clamp{利率-溢价指数，0.03%,-0.03%}',
    paragraph58: '计算结果将用于计算交易员的仓位价值，然后在相应时间戳算出互换的费用。',
    paragraph59: '互换补偿率的限额',
    paragraph60: '为了保证最高杠杆的使用，我们对互换补偿率进行了封顶限制，',
    paragraph61: '(1) 绝对的互换补偿率上限 （起始保证金-维持保证金）*75%。如果起始保证金为1%，维持保证金为0.5%，最大的互换补偿率将为75%*（1-0.5%）=0.375%。',
    paragraph62: '(2) 互换补偿率在资金间隔区间不得变化大于维持保证金的75%。'
  },
  usdtHandbook: {
    headerTitle: 'USDT永续合约操作指南',
    headerP: '从0到1，搞定USDT永续合约',
    title1: 'USDT永续合约',
    paragraph1: {
      p1: '历经四个月精耕细作后， USDT永续合约于北京时间2018年11月28日正式与投资者见面。这是一款基于币本位永续合约（原永续合约），进行了二度创新的升级版永续合约，全程以USDT标的、计价、结算。',
      p2: '除了继承无定点爆仓、无摊平亏损、无交割日期、低持仓成本的优势下，还拥有以下四大独有设计:',
      p3: '1、支持多空双向持仓；',
      p4: '2、浮盈可灵活支配；',
      p5: '3、USDT交易全币种合约；',
      p6: '4、全品种全仓位一个风险度合算。',
      p7: '接着，我们就一起来看下如何操作这样一款风险更低、玩法更多、体验更爽的合约产品吧！',
    },
    title2: '1、进入交易界面',
    paragraph2: {
      p1: '首先，登录您的58COIN账户，并确保您已通过“初级认证”和“高级认证”。然后首页点击“永续合约”→“USDT永续合约”，即可进入交易界面。'
    },
    title3: '2、创建仓位',
    paragraph3: {
      p1: '在左侧选择您要交易的品种之后，在右下方的“下单区”即可操作下单：具体输入“杠杆”、“价格”、“仓位”（手数）后，点击“开多”或“开空”，便成功提交了买卖委托单。',
      p2: '提交委托单后，若未立刻成交，可在K线区正下方的“资产区”——“当前委托”看到订单明细，若即刻成交，则成功开仓，“已成交”中查看交易明细，“仓位”中查看当前仓位的“持仓均价”“占用保证金”“未实现盈亏”等信息。',
      p3: '注：',
      p4: '1）目前支持的合约品类有7个：BTC、EOS、ETH、XRP、LTC、DASH、ETC。',
      p5: '2）USDT合约支持单个品种的多空双向持仓，累计开同一方向的仓位会进行累加，“开仓价格”会相应变为“持仓均价”。',
      p6: '3）输入“仓位（手）”时，点击仓位旁边的“！”可初步了解对应币种一手所指代的币量。（各品类“手”的明细见下方）。',
      p7: '4）订单成交，会产生手续费，taker收取万六，maker收取万三。<span style="color: red;">（平台已于香港时间2018年12月8日13：00下调USDT合约taker/maker手续费率为0.015%。）</span>',
    },
    title4: '3、监控风险',
    paragraph4: {
      p1: '“资产区”右侧是合约资产明细，除了“当前资产”“可用资产”等信息，您需要特别注意的是最上方的“风险度”。当风险度>50%,风险度显示条将由绿色变为红色，当风险度>90%,您将收到预警短信，当风险度=100%，即您账户中的资产已经不足以满足维持保证金时，您的账户将进入爆仓流程。',
      p2: '注：',
      p3: '1）USDT合约采用全仓位全品种一个风险度合算，即不再针对单个仓位而是全部仓位进行风险评估。',
      p4: '2）无单币种双向持仓的情况下，风险度=（仓位价值之和*MM）/当前权益 。',
      p5: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有单币种双向持仓的情况下，风险度=（大边头寸仓位价值之和*MM）/当前权益',
      p6: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MM即维持保证金率=0.5%，当前权益=可用余额+占用保证金+未实现盈亏',
      p7: '3）USDT合约依然是全仓保证金模式，且未实现盈亏自动计入保证金。图中虽然为亏损状态，但由于可用余额足够多，几乎没有风险，故风险度显示为0。',
    },
    title5: '4、平仓',
    paragraph5: {
      p1: '若您想要平仓，进入资产区点击“仓位”，即可选择单个“平仓”或“一键平仓”。',
    },
    title6: '补充说明',
    paragraph6: {
      p1: '1）每个品类各自的“一手”所指代的币量不同，具体如下：',
      p2: '2）为平衡场内多空势力，使场内价格锚定标记价格，每天香港时间18：00多空之间会进行一次互换补偿费用的交换，互换补偿率通常维持在（-0.375%——+0.375%），平台已免除（-0.03—— +0.03%） 之间的费用交换。互换补偿率以“互换率”的形式显示在K线上方。<span style="color: red;">（平台已于香港时间2018年12月17日18:00 起无限期关闭互换补偿机制！）</span>',
      p3: '3）平台已重资注入保险基金，会帮助承担爆仓用户可能会产生的穿仓损失，且头部盈利玩家不必担心被自动减仓。',
      p4: '以上就是USDT永续合约整个操作流程了，总之时刻注意慎用高杠杆、轻仓入场、紧盯风险度。最后，祝您投资愉快~ ',
    },
    usdtTable: {
      type: '合约类型',
      multiple: '合约乘数',
      unit: '报价单位',
      method: '交易方式',
      time: '交易时间',
      rate: '维持保证金率',
    }
  },
  usdtContract: {
    secondaryTitle2: 'USDT合约说明',
    paragraph1: 'USDT永续合约是标的物为数字货币、全程USDT计价结算的数字货币合约，简称“USDT合约”,为方便交易,对每个对应数字货币的交易单位进行了调整,参见下表。',
    tips1: '注释：手续费maker和taker可能因为平台活动做不定期的调整，具体情况以公告信息为准',
    paragraph2: 'USDT永续合约是以USDT为计价单位和结算单位的数字货币合约。目前USDT永续合约支持BTCUSDT,EOSUSDT等合约的双向交易，并提供多倍杠杆，目的是容许高杠杆情况下复制现货市场的情况。该合约不会结算，并能够通过锚定机制跟紧标的参考的指数价格。',
    paragraph3: 'USDT作为计价单位和结算单位，您无需持有其他数字货币、仅需持有USDT一种数字货币即可交易BTCUSDT等多种数字货币合约，这样基本告别了多币种转换过程中的损耗。当然，您的盈利也是以USDT进行结算。您的USDT合约账户中将只有USDT一种资产。',
    paragraph4: '因在数字货币中，USDT长期表现相对稳定，所以在以USDT作为计价单位和结算单位的交易过程中，可以降低持有BTC、EOS等数字货币自身贬值带来的风险。避免交易结果产生币量增加，资产下降的风险。',
    paragraph5: 'USDT永续合约与币本位永续合约（原永续合约）一样，没有到期日，不会结算。合约的具体信息请查看“合约说明”。',
    paragraph6: 'USDT的交易机制模仿了商品期货交易的结构，但是与商品期货相比又存在一定的差异。',
    paragraph7: 'USDT合约的报价：',
    paragraph8: 'USDT的合约标的价格为多家头部交易所指数，详情参考指数价格。所有保证金和盈亏都以USDT计价。USDT永续合约报价单位请参考合约说明。',
    paragraph9: '保证金和杠杆：',
    paragraph10: '所有保证金都以USDT计算，您可以在多个合约上进行双向交易，买多或卖空。',
    paragraph11: '杠杆提供2倍、3倍、5倍、10倍、20倍、33倍、50倍、100倍。您可以在开仓时选择使用的杠杆，无论您使用何种杠杆，最后的杠杆都将按实际杠杆（持仓部分）进行计算，开仓后杠杆无法手动调节。',
    paragraph12: '交易示例',
    paragraph13: '假设您计划以2个BTC来做多比特币，但本金不足，那么通过USDT永续合约，你可以选择买入（做多）10手BTCUSDT合约（1手=0.002BTC），同步开100倍杠杆即可。',
    paragraph14: '狭义来讲，此举您只需提供0.02BTC价值的USDT，即可拥有2BTC价值的比特币多仓。',
    tips2: '注意：由于USDT永续合约是全仓保证金模式，价格波动产生的影响也较大，请在您可承受的范围内选择适当的杠杆、仓位进行交易.',
    paragraph15: 'USDT合约采用多品种同时计算的方式，让交易员可以更好的采用交易策略，尤其对于套期保值者，可以在一个账户内多品种对冲。',
    paragraph16: '例如：您持有BTCUSDT仓位未实现盈利100usdt，持有ETHUSDT仓位未实现亏损50usdt，则您账户内全部未实现盈亏为+50usdt。',
    paragraph17: 'USDT合约的盈利可用不可取，即可以用于开新仓位，但是不可取出。',
    paragraph18: 'USDT合约的风控机制',
    paragraph19: '风险度',
    paragraph20: 'USDT永续合约的风控目前采用和币本位永续合约（原永续合约）相似的风控制度，不同之处仅在于所有仓位仅需要合算一个风险度。',
    paragraph21: '风险度=（仓位价值之和*MM）/当前权益 （无双向持仓）',
    paragraph22: '风险度计算公式：',
    paragraph23: '多仓数量与空仓数量之中选择仓位价值较大一侧',
    paragraph24: '风险度=（大边头寸仓位价值之和*MM）/当前权益（有双向持仓）',
    paragraph25: 'MM=维持保证金率=0.5%',
    paragraph26: '当您账户内的风险度=100%，即您账户中的资产已经不足以满足维持保证金时，您的账户将进入爆仓流程。',
    paragraph27: '爆仓流程',
    paragraph28: '为保证不发生不必要的爆仓，我们将保留其现有仓位，并同步取消此合约的所有未成交委托。',
    paragraph29: '如果此时还未能满足维持保证金要求，此仓位将进入爆仓流程即被“强平引擎”于破产价格接管。',
    paragraph30: '如果爆仓流程中，得到了比破产价格更好的价格平仓，那么额外的资金将被加入保险基金。',
    paragraph31: '如果爆仓流程中，以破产价格平仓依然无法满足平仓条件，那么我们将花费保险基金并继续在市场中进行委托平仓操作。 如果仍然无法清理强平委托，这将导致自动减仓事件。',
    paragraph32: '如果发生爆仓，您将会获得通知。',
    paragraph33: '自动减仓',
    paragraph34: '自动减仓是指在注入保险基金或保险基金消耗殆尽后无法处理的强平仓位。',
    paragraph35: '按照市场原则，交易必须是有对手盘的交易。如果对手盘消失（市场中无法获得），市场中的对手仓位也将会相应减少。',
    paragraph36: '自动减仓顺序',
    paragraph37: '自动减仓顺序将根据杠杆与盈利进行：',
    paragraph38: '盈利率（多）：（平仓价格-开仓价格）/开仓价格*100%*杠杆',
    paragraph39: '盈利率（空）：（开仓价格-平仓价格）/开仓价格*100%*杠杆',
    paragraph40: '如果被自动减仓，您将会获得通知。',
    paragraph60: '保险基金',
    paragraph61: 'USDT永续合约使用保险基金来避免投资者的仓位被自动减仓。该基金用来改进未被执行的强平委托的价格，以避免它们被自动减仓系统接管。保险基金额的增长来自强平委托在市场上于优于破产价的价格成交。',
    paragraph62: '特别提醒:为了更好的保证客户的权益，目前保险基金将全部由平台进行垫资支付，这将避免由于保险基金不足而导致的自动减仓事件的发生。',
    paragraph41: '为了避免人为控盘，导致的连锁爆仓反应对客户造成无端损失。平台采用锚定指数价格的方式对市场价格进行锚定，并以指数价格作为盈亏的计算价格，而非场内价格。指数价格的选取与权重，请参考“指数价格”。',
    paragraph42: '交易过程中按照平台价格进行成交，（开仓与平仓过程，您必须和平台内的对手盘产生。）',
    paragraph43: '未实现盈亏计算过程中按照指数价格进行计算，所以您可能在开仓瞬间迅速看到您的盈利和亏损（这是按指数价进行计算产生的结果）。因您的爆仓计算是按照指数价格进行计算的，所以，无论平台内部价格产生怎样的波动，只要指数价格未变化，您的未实现盈亏就不会产生变化，进而避免“被爆仓” “被穿针”。',
    paragraph44: '例如：现在BTCUSDT平台价为7000，指数价为7005，您在开仓时只能和7000成交，但是您的未实现盈亏将按照7005进行计算。',
    paragraph45: '如果下一时刻，平台价由于某种原因大幅变化为6000，而指数依然为7005（指数价没有变化），则您的未实现盈亏依然按照7005进行计算，不会受到平台价变化的影响。但是如果此时您进行平仓操作，您的成交价将会是6000，因为成交过程中的价格必须和平台内对手盘产生。',
    paragraph46: 'USDT合约的标的资产是BTC等数字货币现货资产，为了保持平台行情与现货行情的稳定性，我们将使用互换补偿率机制作为现货价格锚定机制。',
    paragraph47: '互换补偿率在持有仓位的用户之间进行互换，平台不收取任何费用。',
    paragraph48: '互换补偿率',
    paragraph49: '由溢价和折价构成，每天进行1次互换，为香港时间18：00',
    paragraph50: '互换补偿费用=仓位价值之和*互换补偿率',
    paragraph51: '资金费率=溢价指数+clamp（利率-溢价指数，-0.03%，0.03%）',
    paragraph52: '每分合约由两种货币构成：基础货币和计价货币。利率是这两种货币之间的利率函数，利率指数对应相应币种的借贷市场。目前利率为=0.03%',
    paragraph53: '溢价指数=深度加权中间价/指数价格-1',
    paragraph501: '互换补偿率在±0.03%范围内，不进行互换。',
    paragraph502: '互换补偿率机制目前处于关闭状态，即不进行互换。',
    paragraph54: '合理基差=指数价格*（深度加权中间价/指数价格-1）',
    paragraph55: '互换补偿率的限制机制',
    paragraph56: '为了保证最高杠杆的使用，我们对互换补偿率进行了封顶限制，',
    paragraph57: '(1) 绝对的互换补偿率上限 （起始保证金-维持保证金）*75%。如果起始保证金为1%，维持保证金为0.5%，最大的互换补偿率将为75%*（1-0.5%）=0.375%。',
    paragraph58: '(2) 互换补偿率在资金间隔区间不得变化大于维持保证金的75%。'
  },
  nounExplanation: {
    paragraph1: '名词解释',
    paragraph2: '双向交易',
    paragraph3: '交易者既可以买入建仓（或称开仓），即通过买入合约开始交易；可以卖出合约建仓，即通过卖出合约开始交易',
    paragraph4: '保证金',
    paragraph5: '交易者在买卖合约时按照合约价值的一定比例缴纳保证金作为履约保证，即可进行数倍于保证金的交易,本处是指已被合约占用的保证金',
    paragraph6: '未实现盈亏',
    paragraph7: '持仓状态下的盈利和亏损',
    paragraph8: '交易单位',
    paragraph9: '交易的最小价值，币本位永续合约按“张”进行计算，目前1张=1美元；USDT永续合约按照“手”进行计算，每个品种的手数有其对应的币量。',
    paragraph10: '互换补偿率',
    paragraph11: '为了锚定现货价格，通过多空之间的互换补偿进行调节。互换补偿率在持有仓位的用户之间进行互换，平台不收取任何费用。互换补偿率由溢价和折价构成，每天进行1次互换，为香港时间18：00',
    paragraph12: '最小变动价位',
    paragraph13: '是指在交易所进行公开竞价过程中，对合约每计量单位报价的最小变动数值，在交易中，每次报价的最小变动数值必须是最小变动价位的整倍数',
    paragraph14: '维持保证金',
    paragraph15: '保持仓位可以存在的最低保证金额度，低于此额度将进入爆仓流程',
    paragraph16: '标记价格',
    paragraph17: '标记价格=指数价格*（1+互换补偿率）；以此价格作为盈亏的标准',
    paragraph18: '市价',
    paragraph19: '按当时市场价格即刻成交的指令。您在下达这种指令时无需指明具体的价位，而是要求以当时市场上可执行的最好价格达成交易',
    paragraph20: '限价',
    paragraph21: '执行时必须按照限定价格或更好的价格成交的指令。下达限价指令时，您必须指明具体的价位',
    paragraph22: '开仓价格',
    paragraph23: '开仓时的价格',
    paragraph24: '指数价格',
    paragraph25: '指数跟踪现货价格，取多家头部交易所现货报价，代表市场整体价格水平',
    paragraph26: '仓位价值',
    paragraph27: '目前持仓的合约张数或手数（数字货币数量）',
    paragraph28: '计划委托',
    paragraph29: '用户在交易前对行情进行预判，并根据预判的结果进行有计划的交易。设置触发价格和执行价格，当触发价格达到设置的触发价格时，将会以执行价格向市场发起委托。计划委托不保证成交',
    paragraph30: '可用余额',
    paragraph31: '可以用于开新仓和转出的资金部分，不包含占用保证金部分',
    paragraph32: '用户权益',
    paragraph33: '用户的全部资金，包括用户的可用余额和占用保证金部分'
  },
  insurance: {
    title1: '保险基金',
    paragraph1: '保险基金是爆仓后，爆仓单在市场委托处理后的残值管理。爆仓时如果委托不成功，则会注入保险基金继续委托。',
    paragraph2: '保险基金根据客户的交易情况增多或者减少，保险基金的累计和使用会减少减仓事件的发生。',
    theadList: [ '时间', '保险基金历史' ]
  },
  compensate: {
    title1: '互换补偿率',
    paragraph1: '互换补偿率在持有仓位的用户之间进行互换，平台不收取任何费用。',
    paragraph2: '互换补偿率由溢价和折价构成，每天进行1次互换，为香港时间18：00',
    paragraph3: '互换补偿率费用=仓位价值*互换补偿率',
    paragraph4: '详情请参考“锚定现货价格”',
    paragraph5: '互换补偿率暂定为0，即不进行互换',
    paragraph51: '互换补偿率在±0.03%范围内，不进行互换。',
    paragraph52: '互换补偿率机制目前处于关闭状态，即不进行互换。',
    theadList: [ '时间', '互换补偿率' ]
  },
  usdtInsurance: {
    title1: '保险基金',
    paragraph1: '保险基金是爆仓后，爆仓单在市场委托处理后的残值管理。爆仓时如果委托不成功，则会注入保险基金继续委托。',
    paragraph2: '保险基金根据客户的交易情况增多或者减少，保险基金的累计和使用会减少减仓事件的发生。',
    theadList: [ '时间', '保险基金历史' ]
  },
  usdtCompensate: {
    title1: '互换补偿率',
    paragraph1: '互换补偿率在持有仓位的用户之间进行互换，平台不收取任何费用。',
    paragraph2: '互换补偿率由溢价和折价构成，每天进行1次互换，为香港时间18：00',
    paragraph3: '互换补偿率费用=仓位价值*互换补偿率',
    paragraph4: '详情请参考“锚定现货价格”',
    paragraph501: '互换补偿率在±0.03%范围内，不进行互换。',
    paragraph502: '互换补偿率机制目前处于关闭状态，即不进行互换。',
    theadList: [ '时间', '互换补偿率' ]
  },
  price: {
    title1: '指数价格',
    paragraph1: '指数明细',
    paragraph2: '1、58指数机制的运转逻辑',
    paragraph3: '指数机制系58交易所在亚洲地区首推，指数机制的关键指标就是指数价格。指数价格用来代表BTC、ETH等在全球现货市场上的合理价格，具有一定的指导意义，也作为永续合约计算浮动盈亏和判定仓位风险的关键指标。',
    paragraph4: '当前58永续合约（USDT合约、数字合约）的指数价格取币安、火币现货价格的加权平均数，权重占比为“币安70%、火币30%”。',
    paragraph5: '58指数机制中，指数价格按照一定频率进行抓取，前台推送指数价格为抓取周期内最后时间点（精确至秒）的指数价格（该价格已综合锚定平台的现货价格）。',
    paragraph6: '2、58指数价格机制在极端情况下的处理方式',
    paragraph7: '1）若某一数源据异常，则会从指数成分中剔除异常数据源，同时将另一数据源的权重自动调整为100%，作为当时的指数价格。',
    paragraph8: '2）若两大数据源（币安70%、火币30%）均异常，则启用备用数据源（OKEx100%）作为当时的指数价格。',
    paragraph9: '3）若当前指定数据源及备用数据源同一时间均异常，我们将不得不暂停所涉合约品类的服务，等待恢复。',
    paragraph10: '以上情况，有任一数据源恢复，都将按照“指定成分为先”的原则，重新调整当前指数价格策略。需要特别强调的是：由于各个数据源客观上存在差异，指数成分调整时可能会出现大幅波动，从而对持仓账户带来较大风险，请注意提前防范。',
    theadList: [ '时间', '指数价格' ]
  },
  regularHandbook: {
    headerTitle: '交割合约操作指南',
    headerP: '手把手教你玩转交割合约',
    title1: '交割合约',
    paragraph1: {
      p1: '交割合约（原定期合约）于北京时间2019年1月23日正式与投资者见面。交割合约全程以USDT标的、计价、结算，被视为传统交割合约的改良版，拥有易操作、无需换币、高资金利用率、杜绝人为操纵等优势。目前交割合约为半年期合约，将于半年后的最后一周的周五17:58进行交割，期间每周五17:58会进行无负债结算。',
      p2: '相比于传统交割合约，拥有以下五点不同：',
      p3: '1、支持多空双向持仓；',
      p4: '2、浮盈可开仓交易；',
      p5: '3、USDT交易全币种合约；',
      p6: '4、双向开仓仅收一侧保证金；',
      p8: '5、最高支持100倍杠杆。',
      p7: '接着，我们就一起进入操作指南吧！',
    },
    title2: '1、进入交易界面',
    paragraph2: {
      p1: '首先，登录您的58COIN账户，并确保您已通过“初级认证”和“高级认证”。然后首页点击 “交割合约”，即可进入交易界面。'
    },
    title7: '2、资金划转',
    paragraph7: {
      p1: '创建仓位前，需要点击“资金转入”将资金划转至“交割合约账户”，因为使用USDT标的计价结算，所以只需持有USDT就可以交易其他币种合约了，所以只需转入USDT即可。由于交割合约采用逐仓保证金模式，如果计划做某一币种合约，还需要特别注意，提前点击“资金分配”将交割合约账户内的资金提前划转至相应币种的子账户中。'
    },
    title3: '3、创建仓位',
    paragraph3: {
      p1: '在左侧选择您要交易的品种之后，在右下方的“下单区”即可操作下单：具体输入“杠杆”、“价格”、“仓位”（手数）后，点击“开多”或“开空”，便成功提交了买卖委托单。请注意下单前已切换至目标品类，后续操作需要同步注意切换。',
      p2: '提交委托单后，若未立刻成交，可在K线区正下方的“资产区”——“当前委托”看到订单明细，若即刻成交，则成功开仓，“已成交”中查看交易明细，“仓位”中查看当前仓位的“持仓均价”“占用保证金”“未实现盈亏”等信息，并支持“止盈”“止损”操作（“如何进行止盈止损”同永续合约）。',
      p3: '注：',
      p4: '（1）目前支持的合约品类有9个：BTC、EOS、ETH、XRP、LTC、ETC、TRX、BNB、HT。',
      p5: '（2）交割合约支持单个品种的多空双向持仓，累计开同一方向的仓位会进行累加，“开仓价格”会相应变为“持仓均价”。',
      p6: '（3）输入“仓位（手）”时，点击仓位旁边的“！”可初步了解对应币种一手所指代的币量。（各品类“手”的明细见下方）。',
      p7: '（4）订单成交，会产生手续费，taker、maker均为0.02%。',
      p8: '（5）交割合约每周五会进行无负债结算，其未实现盈亏支持开仓交易，如想转出当前账户需在结算之后。',
    },
    title4: '4、监控风险',
    paragraph4: {
      p1: '“资产区”右侧是合约资产明细，除了“当前资产”“可用资产”等信息，您需要特别注意的是下方的“预估强平价”。在接近爆仓时，系统会提前发送预警短信，如果想追加保证金以降低风险，可点击“资金分配”添加即可。一旦触及“预估强平价”，即代表账户中的资产已不足以满足维持保证金，您的账户将进入爆仓流程，系统同步发送爆仓短信。',
      p2: '注：',
      p3: '（1）定期合约采用逐仓保证金模式，各个币种仓位互不干扰。',
      p4: '（2）预估强平价公式如下',
      p5: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;若净头寸量>0, 强平价格 =多头持仓均价*（1+MM）-账户余额/(|净头寸量|*乘数)',
      p6: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;若净头寸量<0, 强平价格=空头持仓均价*(1-MM)+账户余额/(|净头寸量|*乘数)',
      p7: '（3）补充说明',
      p8: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;净头寸量=多头持仓量-空头持仓量',
      p9: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MM=维持保证金率=0.5%',
      p10: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;净头寸量=0，则无强平价格。',
      p11: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;若强平价格小于0，则表示不会爆仓。',
    },
    title5: '5、平仓',
    paragraph5: {
      p1: '若您想要平仓，进入资产区点击“仓位”，即可选择单个“平仓”或“一键平仓”，平仓所得的已实现盈亏也需要等待结算后方可转出当前账户。',
    },
    title6: '补充说明',
    paragraph6: {
      p1: '（1）每个品类各自的“一手”所指代的币量不同，具体如下：',
      p2: '（2）交割合约结算与交割制度明细如下：',
      p3: '（3）交割合约的未实现盈亏不再参照指数价格，仅参照最新成交价。',
      p5: '（4）当市场行情波动较大，用户强制平仓后，按照强平价格无法成交时，导致亏损范围大于保险基金。平台采用“分摊”制度，从本周盈利的账户中，每个账户按盈利等比分摊穿仓部分的损失。',
      p6: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客户真实分摊（单币种）=盈利*（客户所有穿仓损失累加-保险基金）/盈利账户收益之和',
      p7: '（5）平台已重资注入保险基金，会帮助承担爆仓用户可能会产生的穿仓损失，盈利玩家不必担心被平摊亏损。',
      p4: '以上就是交割合约整个操作流程了，提醒您慎用高杠杆、轻仓入场、紧盯“预估强平价”。祝您投资愉快~',
    },
    
    usdtTable: {
      type: '合约类型',
      multiple: '合约乘数',
      unit: '报价单位',
      method: '交易方式',
      time: '交易时间',
      rate: '维持保证金率',
    },
    systemDetails: {
      td1: "交割合约结算与交割制度",
      td2: "项目",
      td3: "明细",
      td4: "结算时间",
      td5: "每周五17:58",
      td6: "结算方式",
      td7: "当周无负债结算",
      td8: "结算对象",
      td9: "全部交割合约产品",
      td10: "结算进行中的状态",
      td11: "10分钟之内不可交易、不可划转资金",
      td12: "结算时长",
      td13: "10分钟",
      td14: "结算后状态",
      td15: "1、未实现盈亏变成已实现。",
      td16: "2、持有仓位以结算价格重新进行占用保证金，盈亏等的计算。",
      td17: "3、结算后的资金可用于转出。",
      td18: "4、用户权益不发生变化。",
      td19: "交割时间",
      td20: "到期后的最后一个周五17:58（香港时间）",
      td21: "交割价格",
      td22: "最后15分钟的算术平均价",
      td23: "交割进行中的状态",
      td24: "所有持仓将按照交割价格进行平仓，且撤销所有挂单，不可交易",
      td25: "交割时长",
      td26: "10分钟",
      td27: "交割后状态",
      td28: "1、没有仓位。",
      td29: "2、未实现盈亏变已实现盈亏。",
      td30: "注意：当周交割合约不参与当周无负债结算。",
    }
  }
}
export default direct
