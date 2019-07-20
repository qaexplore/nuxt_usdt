// 중문 언어백
import guide from './ko/ko-guide.js'
import handbook from './ko/ko-handbook'
import direct from './ko/direct.js'
import reference from './ko/ko-reference.js'
import entrust from './ko/ko-entrust.js'
import wallet from './ko/ko-wallet.js'
// 交割合约
import regular from './ko/regular.js'
let ZH = {
  common: {
    success: '조작 완료',
    noData: '데이터 없음',
    more: '더보기',
    tip: '알림'
  },
  header: {
    power: '비트코인 해시',
    index: '메인 화면',
    deposit: '입금',
    withdraw: '출금',
    // notice: '공지사항',
    login: '로그인',
    register: '회원가입',
    asset: '자산',
    user: '계정 정보',
    logout: '로그아웃',
    trade: '디지털 계약',
    usdtTrade: 'USDT 계약',
    regularContract: '납기 계약',
    guide: '계약 가이드',
    reference: '참고 정보',
    information: '자산 정보',
    newPlayer: '초보자 가이드',
    userShow: '계약서 공유',
    changeOldVersion: '버전 전환',
    userSafe: '계정 보안',
    devTool: '개발자 도구',
    invite: '나의 초대',
    userAuth: '신분 인중',
    safeExit: '로그아웃',
    lastLogin: '이전 로그인 지점',
    marketableAssets: '자산 상당액（{current}）',
    tradeHistory: '거래 내역'
  },
  footer: {
    products: '시리즈 제품',
    about_us: '우리에 관래',
    about_us_1: '회사 소개',
    about_us_2: '팀 소개',
    about_us_3: '고객센터',
    about_us_4: '공지사항',
    service_support: '서비스 지원',
    service_support_1: 'API 문서',
    service_support_2: '도움말 센터',
    service_support_3: '디지털 자산 소개',
    service_support_4: '코인 상장 신청 및 설명',
    service_support_5: 'SMARTChain',
    official_community: '커뮤니티',
    official_community_1: 'Telegram',
    official_community_2: 'Wechat',
    official_community_3: 'QQ 그룹',
    downLoad: '다운로드',
    downLoad_1: 'iOS App',
    downLoad_2: 'Android App',
    downLoad_3: 'Google Play',
    follow: '소셜 미디어',
    global: '58COIN GLOBAL'
  },
  // 未登录
  noSign: {
    sign_in: '로그인',
    sign_up: '회원가입',
    no_sign: '계정 로그인을 진행하여 주세요\n',
    please: '',
    deal: '후 거래를 진행하여 주세요'
  },
  // 위탁 제출
  trade: {
    titleName: '위탁 제출',
    placeOrderDefault: '장',
    placeOrderBTC: '비트코인',
    unitChange: '단위 전환',
    orderType: '주문 유형',
    limit: '지정 가격',
    market: '시장 가격',
    entrustPlan: '위탁 계획',
    price: '가격',
    triggerPrice: '발동 가격',
    executePrice: '집행 가격',
    quantity: '포지션',
    buy: '매수',
    long: '공매수',
    input: '입력하여 주세요',
    sell: '매수',
    short: '공매도',
    cost: '개시 마진',
    layerCost: '유지 마진',
    orderValue: '위탁 가격',
    availableBalance: '사용 가능 금액',
    // 팝업 창에 올라온 메시지
    markPrice: '지정 가격',
    positionAfter: '거래 완료 후 포지션 수량',
    title: '위탁 확인',
    transfer: '자금 이체',
    buyIn: '매수',
    doMore: '공매수',
    sellOut: '매도',
    doNull: '공매도',
    openPosition: '진입',
    closePosition: '결산',
    error300016: '조작 오류, $  후 재시도 바랍니다',
    leverage: '레버리지', // 0528
    latestDeal: '최신 거래 가격',
    timeDeal: '실시간 거래 가격',
    depth: '합병 심도',
    latestPrice: '최신 가격',
    gains: '상승폭',
    // sizeMaxError: '주문 수량 초과',
    sizeMaxError: '사용 가능 잔액 부족',
    sizeMinError: '주문 수량이 거래 최소 단위보다 작습니다',
  },
  tradePrompt: {
    price: '格정확한 가격을 입력하여 주쉐요',
    size: '정확한 포지션을 입력하여 주세요',
    triggerPrice: '정확한 발동 가격을 입력하여 주세요',
    doPrice: '정확한 집행 가격을 입력하여 주세요'
  },
  transform: {
    from: '에서',
    turnOutAccount: '이체 계정 선택',
    transferTo: '까지',
    transferAccount: '이체 수량',
    swapAccount: 'USTD 계약 계정',
    inputAccount: '이체 수량 입력',
    maxTransform: '최대 이체 금액 ',
    allTransform: '전부',
    transform: '이체',
    internalTransfer: '내부 이체는 수수료를 부과하지 않습니다.',
    tips: '알림：포지션 보유 상태에서 자금 이체할 경우在持仓状态下转出后',
    strongLevel: '포지션 청산 기준은 다시 계산됩니다.',
    tipsContent: '보다 많은 금액을 이체하게 되면 포지션이 청산될 위험율이 증가될 수 있습니다.\n' +
    '          불 필요한 손실을 피면하기 위해 계정에 충분한 보증금을 보류하여 시세 변동에 대응하여 주십시오.\n' +
    '          보지션 보유 상태에서 잔액의 {percentage} 자금을 이체할 수 있으며 보지션을 보유하지 않은 상태에서는 전액 이체 가능합니다.',
    same: '출금 계정과 입금 계정이 동일합니다.',
    "transferUsdtTip": "참고: 포지션 보유 상태에서 자금 이체를 하시면 위험도는 다시 계산됩니다. 이체 금액이 클수록 청산될 가능성도 높습니다. 불 필요한 손실을 방지하기 위하여 충분한 자금을 남겨주시기 바랍니다. 포지션 보유 시 자금은 최대  80%  이체 가능하며  이익금은 사용할 수 있으나 출금할 수 없습니다.",
    "transferRegularTip": "알림: 포지션 보유 상태에서 출금하면 위험도는 다시 계산됩니다. 출금액이 많을수록 포지션이 청산될 위험도 증가합니다. 불 필요한 손실을 피면하기 위해 계정에 충분한 보증금을 예치하여 시세 파동에 대비하십시오. 포지션 보유 상태에서 원금의 80%를 출금할 수 있으며 손익금은 사용 가능하나 출금할 수 없습니다. 포지션 미 보유 상태에서는 전액 출금 가능합니다. 실현된 손익은 원금 계산 완료 후 전액 출금 가능합니다."

  },
  // 레버리지 변경
  leverage: {
    title: '보유 포지션',
    contract: '계약',
    ROE: '수익율',
    all: '교차 마진 ',
    leverage: '레버리지',
    fundingRatio: '펀딩',
    cross: '교차 마진 레버리지', // 0515
    crossTimes: '교차 마진{times}X', // 0515
    tip1: '공매수 = (1 – 진입 가격/지정 가격) * 레버리지',
    tip2: '공매도 = (진입 가격/지정 가격 - 1) * 레버리지',
    low: '낮음', // 0515
    high: '높음', // 0515
    risk: '포지션 위험' // 0515
  },
  // 참고 정보
  referenceInfo: {
    title: '참고 정보',
    more: '자료 더보기',
    exchange: '거래소 가이드',
    contract: '계약 가이드',
    markPrice: '공정 가격(시장 평균가)',
    earnLoss: '이익/손해 가이드',
    fee: '수수료',
    questions: '자주 묻는 질문',
  },
  // 시장 정보
  productInfo: {
    markPrice: '지정 가격',
    lastPrice: '최신 거래 가격',
    increase: '상승폭',
    price: '미 청산 계약 가치',
    feeRatio: '펀딩',
    size: '24 시간 거래 수량',
    sizeBTC: '24 시간 거래 수량',
    highPrice: '최고가',
    lowPrice: '최저가',
    fundingRate: '펀딩',
    prompt: '±0.03% 범위 내에서는 펀딩이  이루어지지 않습니다.'
  },
   // 委托
   createdEntrust: {
    submitOrder: '주문 제출',
    limit: '지정가',
    market: '시장가',
    price: '가격',
    positions: '포지션',
    lot: '장',
     leverageInfo: "레버리지: 현재 다양한 레버리지를 제공하고 있사오니 신중하게 이용하여 주시기 바랍니다",
    limitInfo: '지정가: 집행 시 반드시 지정한 가격 또는 더 좋은 가격에 거래가 진행됩니다.지정가의 지령을 내릴 때 반드시 구체적인 가격 위치를 지정해야 합니다.',
    buyable: '매수 가능',
    salable: '매도 가능',
    openlong: '공매수',
    closelong: '결산',
    openshort: '공매도',
    closeshort: '결산',
    // 确认委托弹出框
    A_confirmOrder : '확인',
    A_buy: '매수',
    A_contract: '계약',
    A_leverage: '레버리지',
    A_direction: '유형',
    A_market: '시가',
    A_type: '주문 방식',
    A_price: '주문 가격',
    A_Amount: '주문 수량',
    A_margin: '격리된 마진',
    A_riskLevel: '현재 위험도',
    A_ror: '수익율',
    A_sell: '매도',
    A_limit: '지저가',
    A_buy_title: '{name}계약 <span style="color:{color};">{num}</span>장 매수',
    A_sell_title: '{name}계약 <span style="color:{color};">{num}</span>장 매도',
    A_buy_flat: '매수',
    A_sell_flat: '매도',
     marketInfo: '시장가: 주문 조작 오류로 손실을 피면하기 위하여 지수 가격의 ±3%로 제한되고 있으며 해당 가격 초과 시 거래는 완료될수 없습니다.',
    positiveNum: '정수를 입력하여 주세요',
    positiveInteger: '양의 정수를 입력하여 주세요',
    importPrice: '가격을 입력하여 주세요',
    contractHand: '계약 장수를 입력하여 주세요',
    noLeveling: '포지션 정보 없음',
    limitNum: '주문 수량 초과',
    positions_tips: '포지션 합 * MM / 현재 권익(위험도 100%알 경우 청산 절차로 진입됩니다)',
    hand: '거래 단위(장): 계약 규모라고도 불리웁니다. 거래소에서 거래되는 매 계약의 거래 수량을 의미합니다.<span style="display: block">eg: 1{hand}{name} = {value}{tableName}</span>',
     explosion: '해당 가격으로 시장에서 주문 시 청산될 수 있습니다. 우선 주문서를 확인하시고 신중하게 거래하여 주시기 바랍니다.',
    explosionConfirm: '계속 주문',
    explosionProof: '청산 방지 열기',
    positionValue: '포지션 가치',
  },

  // 币种列表，最新成交列表
  tradeList: {
    latestPrice: '최신 가격',
    gains: '상승폭',
    latestDeal: '최신 거래 가격',
    timeDeal: '실시간 거래 가격',
  },
  // 用户资产信息  我的合约资产
  asset: {
    fundLeverage: '자금 레버리지',
    fundUtilizationRate: '자금 사용률',
    contractAsset: '나의 계약 자산',
    currentAssets: '현재 자산',
    availableAssets: '사용 가능 자산',
    margin: '격리된 마진',
    frozenDeposit: '동결 마진',
    unRelease: '미 실현 손익',
    alreadyRealized: '당일 실현 손익',
    commissionFee: '당일 수수료',
    riskDegree: '위험도',
    riskDegreeInfo: '위험률 100%일 경우 청산 절차로 진입하게 됩니다. 본인의 위험률 수준을 주의하십시오.',
    transform: '자금 이체',
    transfer: '이체'
  },
   // 列表
   transactionList: {
    elpTips1: '예산 청산가：',
    elpTips2: '예상 가격은 실제 청산 가격을 대표할 수 없으니 참고만 해주시기 바랍니다.',
    elpTips3: '다양한 종류의 포지션은 반드시 모든 화폐의 청산 가격을 만족해야만 청산이 이루어집니다. 시스템은 다양한 포지션을 보유하고 있는 상태에서 개별 화폐 종류에 대하여  청산 처리를 진행하지 않습니다.',
    strongParity: '청산 예산가',
    returnPrice: '촉발 가격에 의해 수익',
    lossPirce: '촉발 가격으로 결산 시 손실이 발생합니다.',
    returnPrice1: '집행 가격으로 결산 시 이익',
    lossPirce1: '집행 가격으로 결산 시 손실',
    emptyBill: '매도',
    moreBill: '매수',
    profitDeficit: '손익 제어',
    profitLoss: '손익',
    triggerPrice: '촉발 가격',
    mode: '방식',
    executionPrice: '집행 가격',
    number: '수량',
    stopProfit: '이익 제어',
    stopLoss: '손실 제어',
    triggerOrder: '주문 계획',
    newOrder: '미 촉발',
    SuccTrigger: '촉발 완료',
    canceled: '취소 완료',
    triggerFailed: '촉발 실패',
    liquidationCancel: '취소',
    reorder: '재 주문',
    all: '전체',
    chongzhi: '재설정',
    queding: '확인',
    zdjc: '자동자산청산',
    qpwt: '청산 주문',
    positions: '포지션',
    currentEntrustment: '현재 주문',
    excuted: '거래 내역',
    records: '취소 내역',
    closeAll: '원터치 결산',
    batchCancel: '대량 취소',
    prompt: '전체 결산은 시장가 주문에서만 가능합니다.(포지션 보유), 비교적 큰 위험률을 초래할 수 있으니 신중하게 사용하여 주시기 바랍니다.',
    currency: '화폐 종류',
    openLeve: '결산',
    commissionPrice: '주문 가격',
    commissionAmount: '주문 수량',
    retractable: '취소 가능',
    dealDone: '거래 내역',
    status: '상태',
    time: '시간',
    operate: '조작',
    type: '유형',
    reamaining: '잔여량',
    excutedPrice: '거래 가격',
    excutedAmount: '거래 수량',
    fee: '수수료',
    totalPosition: '총 포지션',
    available: '사용 가능',
    avgPrice: '포지션 평균 가격',
    actualLeverage: '실제 레버리지',
    pnl: '손익',
    occupationMargin: '격리된 마진',
    unrealisedPNL: '미 실현 손익',
    profitability: '이익율',
    closePosition: '결산',
    total: '총계',
    expand: '펼치기',
    collapse: '접기',
    noPosition: '데이터 없음',
    noData: '데이터 없음',
    more: '공매수',
    less: '공매도',
    buy: '매수',
    Sell: '매도',
    // S_***  列表中用到的状态
    S_openPosition: '개시',
    S_closePosition: '결산',
    S_Unfilled: '미 완료',
    S_PartialDeal: '부분 완료',
    S_DealDone: '거래 완료',
    S_Revoked: '취소 완료',
    S_failure: '실패',
    S_LimitPrice: '지정가',
    S_MarketPrice: '시장가',
    // A_**** 弹出框中用到的
    A_Confirm: '확인',
    A_Cancel: '취소',
    A_One_Title: '해당 주문서를 취소하시겠습니까?',
    A_One_Info: '집행 시 해당 주문은 취소 처리됩니다.',
    A_All_FullFlat_Title: '결산을 진행하시겠습니까?',
    A_All_FullFlat_Info: '투자자의 모든 포지션은 시장 가격으로 결산 처리되며 발생한 손익은 시장 심도의 영향을 받게 되오니 신중하게 사용하여 주시기 바랍니다.',
    A_All_Cancel_Title: '모두 주문서를 취소하시겠습니까?',
    A_All_Cancel_Info: '집행 시 모든 주문은 취소 처리됩니다.',
    A_Close: '결산',
    A_LimitPrice: '지정가',
    A_MarketPrice: '시장가',
    A_Price: '가격',
    A_Amount: '결산 수량',
    A_Hand: '장',
  },
  // 주문 상황
  tradeDetailList: {
    position: '포지션',
    current: '현재 주문',
    already: '거래 내역',
    record: '취소 내역',
    planOrder: '위탁 계획',
    currencyPlan: '현재 계획',
    historyPlan: '계획 내역',
    information: '자산 정보',
    contract: '계약',
    contractTip: '포지션 계약 코드',
    positionQty: '현재 포지션 수량',
    orderValue: '가치',
    positionOrderValue: '포지션 가치',
    positionOrderValueTip: '나의 계약 가치',
    entryPrice: '진입 가격',
    entryPriceTip: '매수/매도 평균 가격',
    markPrice: '규정 가격',
    markPriceTip: '해당 가격은 계약의 최신 지정 가격입니다. 이 가격은 손익 및 마진 계산에 사용되며 계약의  최신 거래 가격과 차이가 있어서 시장 조작을 피면할 수 있습니다. 하지만 결산에는 영향이 없습니다.',
    liquidationPrice: '청산 가격',
    liquidationPriceTip: '만약 지정 가격이 공매수 가격보다 낮거나 혹  공매도 가격보다 높으면 해당 계약은 청산됩니다.',
    margin: '마진',
    ratio: '이익율 %',
    ratioTip1: '공매수 = (1 – 진입 가격/지정 가격) * 레버리지',
    ratioTip2: '공매도 = (진입 가격/지정 가격 - 1) * 레버리지',
    realised: '실현 손익',
    unrealised: '미 실현 손익',
    unrealisedTip1: '미 실현 손익(공매수) = 포지션 수량 * （1/진입 가격 - 1/지정 가격)',
    unrealisedTip2: '미 실현 손익(공매도) = 포지션 수량 * （1/지정 가격 - 1/진입 가격)',
    more: '(매수)',
    less: '(매도)',
    piece: '장',
    operate: '조작',
    revocation: '취소',
    size: '수량',
    price: '가격',
    completeDeal: '거래 완료',
    surplus: '잔어량',
    value: '위탁 가치',
    dealPrice: '거래 가격',
    entrustPrice: '위탁 가격',
    executePrice: '집행 가격',
    triggerPrice: '발동 가격',
    type: '유형',
    status: '상태',
    date: '시간',
    dealSize: '거래 수량',
    closed: '청산',
    closedMark: '(결산)', // 0528
    market: '시장 가격',
    limit: '지정 가격',
    batchRevocation: '대량 취소',
    noPosition: '포지션 정보 없음',
    changeMargin: '마진 조정',
    closePosition: '청산하기',
    textPosition: '보유한 포지션 위탁 청산 중입니다',
    error300016: '조작 오류, {time} 초 후 재시도 바랍니다',
    revocationSuccess: '주문 취소 완료',
    // 자산 정보
    walletBalance: '지갑 잔액',
    walletBalanceTip: '지갑 잔액 = 사용 가능 금액 + 유지 마진 + 포지션 마진',
    marginBalance: '마진 잔액',
    usefulBalance: '사용 가능 금액',
    usefulBalanceTip: '포지션 진입 마진', // 0601
    userEquity: '사용자 권익',
    userEquityTip: '무기한 계약의 총 권익',
    positionMargin: '포지션 유지 마진', // 0601
    positionMarginTip: '유지 마진',
    noData: '자산 정보 없음',
    // 0515
    closedLimit: '지정가 결산',
    closedMarket: '시장가 결산',
    none: '정보 없음.'
  },
  // information-list 심도
  entrustList: {
    lastPrice: '최신 거래 가격',
    size: '수량',
    BTC: '수량',
    price: '가격',
    amount: '총 수량',
    indexPrice: '지수 가격',
    fairPrice: '지정 가격',
    deep: '합병 심도',
    bit: '자리'
  },
  // history-list 거래 내역
  historyList: {
    title: '실시간 거래 내역',
    size: '수량',
    price: '가격',
    date: '시간'
  },
  // 팝업 창 버튼
  layerButton: {
    cancel: '취소',
    confirm: '확인'
  },
  // 위탁(거래) 팝업 창
  layerTrade: {
    all: '교차 100X',
    leverage: '레버리지',
    title: '위탁 확인',
    limit: '지정 가격',
    market: '시장 가격',
    buy: '매수',
    sell: '매도',
    cross: '교차',
    textType1Coin: '{side}{price}가격{size}개{name}',
    textType1: '{side}{price}가격{size}장{name}계약',
    textType2Coin: '{type}{side}{size}개{name}',
    textType2: '{type}{side}{size}장{name}계약',
  },
  // 청산 팝업 창
  layerClosed: {
    limit: '지정 가격',
    market: '시장 가격',
    buy: '매수',
    sell: '매도',
    textType1Coin: '{side}{price}가격{size}개{name}',
    textType1: '{side}{price}가격{size}장{name}계약',
    textType2Coin: '{type}{side}{size}개{name}',
    textType2: '{type}{side}{size}장{name}계약',
    text3: '실행 시 나의 포지션을 청산하게 됩니다.',
    text4: '*집행 시 모든 주문서는 취소 처리됩니다.',
    text5: '*집행 시 해당 주문서는 취소 처리됩니다.'
  },
  layerMargin: {
    add: '마진 증가',
    reduce: '마진 감소',
    position: '나의 포지션',
    usefulMargin: '사용 가능 마진',
  },
  // 청산 팝업 창 0515
  layerPositionClosed: {
    placeHolderPrice: '가격을 입력하여 주세요',
    placeHolderSize: '수량을 입력하여 주세요',
    all: '전체',
    surplus: '남은 포지션 수량',
    closed: '청산 처리',
    tip1: '현재 주문이 기타 포지션 취소 메커니즘을 발동할 수 있습니다. 취소하겠습니까?' // 0528
  },
  // 수익 계산기
  calculate: {
    title: '수익 계산기',
    profitCal: '수익 계산',
    goalPriceCal: '목표가 계산',
    liquidationCal: '청산가 계산',
    contract: '계약',
    type: '유형',
    leverage: '레버리지',
    unit: '단위',
    openPrice: '개시 가격',
    closePrice: '청산 가격',
    amount: '개시 수량',
    balance: '계약 잔액',
    goalProfit: '목표 수익',
    useProfit: '예상 수익',
    useProfitRate: '예상 수익율',
    calculate: '시작',
    result: '결과',
    margin: '보증금',
    profit: '수익',
    profitRate: '수익율',
    goalClosePrice: '목표 청산 가격(USDT)',
    liquidationPrice: '청산 가격(USDT)',
    more: '공매수',
    less: '공매도',
    piece: '장',
    tips: '주의사항：실제 거래에서는 수수료와 금액 비율이 있으므로 계산 결과와 거래 결과가 일치하지 않을 수 있습니다',
    warningTips1: '합리적인 법위 초과, 여러 주문 상황하에 예상 수익률은 개시 수량보다 작아야 합니다',
    warningTips2: '합리적인 법위 초과, 여러 주문 상황하에 예상 수익률은 레버리지 배수를 초과하지 말아야 합니다',
    positionROR: '포지션 수익률',
    principalROR: '원금 수익률'
  },

  // 右侧工具栏
  toolbar: {
    ewm: 'APP 다운로드',
    ztqh: '주제 전환',
    userCenter: '개인 계정',
    announcement: '공지사항',
    jsq: '계산기',
    yhfk: '문의 등록',
    lxkf: '고객 센터',
    hyzn: '계약 가이드',
    ewCode: 'QR 코드'
  },
  // 公告弹窗
  layerAnnouncement: {
    title: '공지'
  },
  panel: {
    text: '무기한'
  },
  // 팝업 창 푸시 0515
  emerge: {
    prompt: '알림',
    limit: '지정 가격',
    market: '시장 가격',
    buy: '매수',
    sell: '매도',
    leverage: '레버리지',
    margin: '마진',
    adjustLeverage: '레버리지 조정',
    adjustMargin: '마진 조정',
    entrustSend: '위탁 완료',
    entrustSuccess: '주문 완료',
    entrustPart: '일부분 위탁 완료',
    entrustAll: '전체 위탁 완료',
    entrustFailed: '위탁 실패',
    marketEntrustPart: '시장 가격 일부분 거래 완료',
    revocationSuccess: '주문 취소 완료',
    revocationBachSuccess: '취소 완료',
    revocationFailed: '주문 취소 실패',
    text1: '{type}{price}{side}{size}'
  },
  // trade index 0515
  index: {
    usdt_title: '선형 계약',
    swap: 'SWAP-',
    titlePart: '-전 세계 디지털 화폐 거래 플랫폼 페이스 메이커',
    titleAll: 'SWAP-전 세계 디지털 화폐 거래 플랫폼 페이스 메이커',
    "spot": "화폐 거래",
    "cloudy": "운산력 거래",
    "otc": "C2C 거래",
    "swap": "스왑 계약 거래",
    "spot_trading": "현물 거래",
    "futures": "선물 거래",
    "mine_pool": "광산 거래",
    "sign_in": "로그인",
    "sign_up": "회원가입",
    "logout": "로그아웃",
    "user": "계정 정보",
    "product-title1": "담보 대출",
    "product-title2": "무기한 계약",
    "product-title3": "레버리지 거래",
    "product-title4": "화폐 거래",
    "product-title5": "법화 OTC 거래",
    "product_title1_c_1": "디지털 자산 활성화",
    "product_title1_c_2": "높은 담보율",
    "product_title1_c_3": "낮은 금리",
    "product_title1_c_4": "중복 대출 가능",
    "product_title1_c_5": "자금 용도 무제한",
    "product_title1_c_6": "자금 순환 문재 해결",
    "product_title2_c_1": "인간적인 계약 디자인",
    "product_title2_c_2": "지정가 청산 무",
    "product_title2_c_3": "손실 분담 무",
    "product_title2_c_4": "납기 기일 무",
    "product_title2_c_5": "포지션 보유 수수료 무",
    "product_title2_c_6": "최적의 심도 및 유동성",
    "product_title3_c_1": "최고 3배 레버리지",
    "product_title3_c_2": "업계 최저 금리",
    "product_title3_c_3": "원금 레비러지 추가",
    "product_title3_c_4": "수익 공간 확대",
    "product_title3_c_5": "양 방향 매매 지원",
    "product_title4_c_1": "디지털 자산 교환 지원",
    "product_title4_c_2": "낮은 수수료",
    "product_title4_c_3": "수백 가지 거래 유형",
    "product_title4_c_4": "가치 있는 화폐",
    "product_title4_c_5": "효율적인 거래 중재",
    "product_title5_c_1": "법화 외 디지털 자산 지원",
    "product_title5_c_2": "거래 수수료 무료",
    "product_title5_c_3": "플랫폼 보장",
    "product_title5_c_4": "광고 비용 무료",
    "product_title5_c_5": "매매 쌍방 이익 모두 보장",
    "btn": "자세사항 보기",
    "service_title": "58COIN 원스톱 디지털 자산 서비스 플랫폼",
    "service_title1": "제품 창조성 일류",
    "service_title1_content1": "무기한 계약 창시",
    "service_title1_content2": "담보 대출 창시",
    "service_title2": "자금 풍부",
    "service_title2_content1": "전 세계 10위권 마이닝 풀 보유",
    "service_title2_content2": "수만 BTC 보유",
    "service_title3": "최첨단 기술 보장",
    "service_title3_content1": "핵심 멥버 모두 BAT、OKEx 등 출신",
    "service_title3_content2": "다중 암호화, 고도 안전, 최고 효율",
    "service_title4": "24h 고객센터",
    "service_title4_content1": "백만 사용자 신속 응답",
    "service_title4_content2": "여러 국가 언어 지원. 소통 국경 제한 무",
    "down_load_title": "언제 어디서나 유창한 거래",
    "down_load_content1": "실시간 거래 중재 · 신속한 입출금 서비스",
    "down_load_content2": "계약, 러베러지, 담보 대출 · 손 끝 체험",
    "products": "시리즈 제품",
    "about_us": "우리에 대해",
    "about_us_1": "회사 소개",
    "about_us_2": "팀 소개",
    "about_us_3": "고객센터",
    "about_us_4": "공지사항",
    "service_support": "서비스 지원",
    "service_support_1": "API",
    "service_support_2": "도우말 센터",
    "service_support_3": "디지털 자산 소개",
    "service_support_4": "코인 상장 신청 및 설명",
    "official_community": "커뮤니티",
    "official_community_1": "Telegram",
    "official_community_3": "QQ 그룹",
    "official_community_4": "Wechat 그룹",
    "official_community_5": "API 교류 그룹",
    "follow": "소셜 미디어",
    "weChat": "스캔하여 위챗 그룹 가입",
    "api": "스캔하여 API 교류 그룹 가입",
    "fee": "HOT ! ! !",
    "hot": "HOT",
    "returnTop": "Top",
    "see_more": "더 보기",
    "downLoad": "다운로드",
    "addSuccess": "추가 완료"
  },
  // 입금 상태
  depositStates: {
    WAIT: '입금 대기 중',
    WAIT_CONFIRM: '입금 대기 중',
    SUCCESSED: '입금 완료',
    FAILED: ' 입금 실패'
  },
  source: {
    PC: '웹 페이지',
    API: 'API',
    IOS: 'IOS',
    Android: 'Android'
  },
  // 주문 상태
  orderStatusList: {
    // name1: '전체',
    name2: '미 완료',
    name3: '주문 실패',
    name4: '주문 완료',
    name5: '취소 완료'
  },
  // 주문 상태—위탁 계획
  planOrderStatusList: {
    name1: '미 발동',
    name2: '발동 완료',
    name3: '취소'
  },
  // 주문 유형
  orderTypeList: {
    'limit': '지정 가격',
    'market': '시장 가격',
    'plan': '계획'
  },
  // 청산 유형
  orderLiquidationList: {
    'liquidation': '청산 위탁',
    'ADL': '자동자산청산',
  },
  confirm: {
    cancel: '취소',
    determine: '확인'
  },
  filter: {
    onPage: '이전 페이지',
    nextPage: '다음 페이지',
    select: '거래 선택',
    status: '거래 상태',
    noData: '데이터 없음',
    undo: '취소',
    buy: '매수',
    sell: '매도',
    marketPrice: '시장 가격',
    withdrawal: '주문 취소',
    withdrawalAll: '전체 주문 취소',
    viewHistoryWithdrawal: '위탁 내역 조회',
    determineWithdrawal: '주문을 취소 하겠습니까?',
    cancelAll: '전체 주문을 취소하시겠습니까?',
    wattNotCompletedListOne: '위탁 시간',
    wattNotCompletedListTwo: '유형',
    wattNotCompletedListThree: '위탁 가격',
    wattNotCompletedListFour: '평균 거래 가격',
    wattNotCompletedListFive: '위탁 수량',
    wattNotCompletedListSix: '거래 수량',
    wattNotCompletedListSeven: '위탁 출처',
    wattNotCompletedListEight: '상태',
    wattNotCompletedListNine: '조작',
    wattNotCompletedListTen: '일부분 거래 완료',
    wattNotCompletedListEleven: '거래 구역',
    type: '주문 유형',
    remainAmount: '잔여량',
    volume: '거래 수량',
    entrustHistory: '위탁 내역',
    entrust: '미 완료 위탁'
  },
  errorCode: {
    // '10': '로그인 실패',
    // '110': '로그인 해주세요',
    // '101': 'TOKEN 무효',
    // '102': '잠시 후 재시도 바랍니다',
    // '103': '재시도 회수 초과',
    // '115': '거래 비밀번호 미 설정',
    // '201': '파라미터 없음: {parameter}',
    // '202': '파라미터 비여있음: {parameter}',
    // '203': '파라미터 너무 잛음: {parameter}',
    // '204': '파라미터 너무 길음: {parameter}',
    // '205': '파라미터 격식 혹 유형 오류: {parameter}',
    // '314': '거래 비밀번호 오류 회수 초과',
    // '315': '거래 비밀번호 잠금',
    // '316': '거래 비밀번호 오류',
    // '9999': '시스템 오류',
    // '10000': '네트워크 오류, 잠시 후 재시도 바랍니다.',
    // '30004': '가격 및 수량은 반드시 0 이상으로 입력해 주세요',
    // '30005': '주문 수량은 거래 최소 단위보다 작아야 합니다',
    // '30006': '잔액 부족',
    // '30018': '주문 개수는 100 이상 초과하지 마세요',
    // '30019': '가격은 최대 1000 이상 초과하지 마세요',
    // '30023': '주문 실패',
    // '30024': '주문 실패',
    // '0002': '주문 취소 완료',
    // '0003': '주문 제출 완료',
    // '00010': '로그인 해주세요',
    // '100000': "계약 정보 업음",
    601: "해당 화폐 유형을 지원하지 않습니다.",
    602: "잔액 부족",
    603: "입금 계정과 출금 계정이 동일합니다.",
    604: "0원 이상부터 출금 가능합니다",
    605: "일일 출금 회수 초과",
    606: "청산 포지션 보유 중이므로 출금 불가합니다",
    607: "화폐 유형을 지정해 주세요.",
    608: "이 인터페이스는 해당 사이트를 지원하지 않습니다.",
    611: "이체 처리 대기. 사용 가능 금액 부족",
    612: "화폐 유형 오류",
    9999: "시스템 오류",
    0: "조작 완료",
    100000: "계약 정보 없음",
    200000: "시장 정보 없음",
    300000: "주문 방향 오류",
    300001: "주문 유형 오류",
    300002: "가격이 작거나 0 입니다",
    300003: "주문 수량이 거래 최소 단위보다 작습니다",
    300004: "주문 상태 오류",
    300005: "시간 유형 오류",
    300006: "ORDER_FROM 오류",
    300007: "Order 주문 수량은 10000000을 초과하지 마세요",
    300008: "가격은 100000을 초과하지 마세요",
    300009: "청산 개수는 포지션 수량을 초과할 수 업습니다.", // 0515
    300010: "청산 가격이 자산자동차감 가격을 발동하였습니다",
    300011: "청산 중, 거래 중지",
    300012: "주문 정보 없음",
    300013: "주문 가격 오류",
    300014: "주문 수량 오류",
    300015: "지정 거래 시간이 아닙니다. 거래를 진행할 수 없습니다. ",
    400000: "보유 포지션 없음",
    400001: "포지션 유형 없음",
    400002: "해당 조작 시 포지션의 자산자동감소 가격을 촉발할 수 있습니다",
    400003: "마진 증가 혹 감소의 최소 단위는 0.0001입니다",
    400004: "교차 시 포지션 마진을 변경할 필요가 없습니다.",
    400005: "포지션 마진 부족으로 마진을 감소할 수 없습니다.",
    400008: '포지션을 보유하거나 주문 대기 중 일 경우 레버리지를 조정할 수 업습니다', // 0515
    500000: "로그인 실패",
    500001: "로그인 시간 초과",
    500002: "로그인 해주세요",
    500003: "계정 잠금 상태. 고객센터로 문의하십시오.",
    500004: "계정 사용 가능 잔액 부족",
    500005: "등록된 사용자는 주문 사용자가 아닙니다",
    600000: "화폐 종류 없음",
    700000: "그로인 비밀번호 오류 회수 초과",
    700001: "거래 비밀번호 잠금",
    700002: "거래 비밀번호 인증 실패, 거래 비밀번호 오류",
    800000: "k선 유형 오류",
    900000: "파라미터 없음",
    900001: "파라미터 격식 혹 유형 오류",
    999999: "시스템 오류",
    100: '이체 완료',
    101: '이체 실패',
    151: '계정 잠금. 고객센터로 문의하십시오.',
    300: '주문',
    301: '돌아가기',
    302: '개별 주문 취소',
    303: '대량 주문 취소',
    304: '진입 완료',
    305: '결산 완료',
    306: '취소 완료',
    307: '취소 완료',
    400: '청산',
    401: '청산 완료',
    500: '자동자산청산',
    600: '격야비 수취',
    700: '자금 이체',
    10100000: "데이터 없음",
    10100001: "데이터 없음",
    10200000: "로그인하여 주세요",
    10200001: "사용 가능 잔액 부족",
    10200002: "로그인 계정은 주문 계정이 아닙니다.",
    10200003: "거래 비밀번호 잠금",
    10200006: "계정 정보 없음",
    10200007: "계정 잠금 상태. 고객센터로 문의하십시오.",
    10200008: "사용자 잠금",
    10300000: "제한 수량 초과",
    10300001: "가격 변동률은 지수 가격의 +/- 50%를 초과할 수 없습니다.",
    10300002: "제한 수량 초과",
    10300003: "결산 수량은 포지션 수량을 초과할 수 없습니다. ",
    10300004: "주문 상태 오류",
    10300005: "시간 유형 오류",
    10300006: "ORDER_FROM 오류",
    10300007: "데이터 없음",
    10300008: "취소 실패, 취소 가능 수량 0 ",
    10300009: "자금 이체 중, 일시적으로 거래를 진행할 수 없습니다.",
    10300011: "주문 수량은 보유 수량을 초과했습니다. 사용 가능한 포지션 수량이 부족합니다.",
    10300012: "일부 주문이 완료되지 않았습니다. 사용 가능한 포지션 수량이 부족합니다.",
    10300013: "결산 가능한 매수 포지션이 존재하지 않습니다.",
    10300014: "결산 가능한 매도 포지션이 존재하지 않습니다.",
    10400000: "보유한 포지션 정보 없음",
    10400002: "해당 조작 시 포지션의 청산을 촉발할 수 있습니다. ",
    10500001: "데이터가 이미 존재합니다",
    10500002: "데이터 입력 실패",
    10900006: "서버 오류",
    900000: "파라미터 부족",
    900001: "파라미터 격식 혹 유형 오류",
    999999: "시스템 오류",
    10900002: "조작 오류",
    10900007: "시스템 오류, 잠시 후 재시도 바랍니다.",
    614: '결산/납기 중, 출금 일시 중지',
    10300010: "거래 일시 중지"
  },
  // 오류 코드 푸시
  wsErrorCode: {
    // 20001: '주문 실패, 사용 가능 잔액 부족',
    // 20002: '사용 가능 잔액 부족',
    // 20003: '청산이 촉발되여 거래를 진행할 수 업습니다',
    // 20004: '이체 실패, 잔액 부족',
    // 20005: '포지션 마진 부족으로 감소할 수 없습니다',
    // 30006: '시장 가격 주문 거래 불가',
    // 30007: '청산 수량은 포지션 수량을 초과할 수 없습니다', //  0515
    // 30008: '지정 가격 주문 실패, 주문 가격이 청산자 가격을 촉발하였습니다',
    // 30009: '위탁 수량이 청산 수량에 만족하여 청산 주문서를 제출할 수 없습니다',
    // 30010: '청산 수량 한도 초과. 시스템에서 자동으로 일부분 주문을 취소합니다.',
    // 40000: '포지션 정보 없음',
    // 40003: '포지션을 보유하거나 주문 대기 중 일 경우 레버리지를 조정할 수 업습니다', //  0515
    100: '이체 완료',
    101: '이체 실패',
    151: '계정 잠금. 고객센터로 문의하십시오.',
    300: '주문',
    301: '돌아가기',
    302: '개별 주문 취소',
    303: '대량 주문 취소',
    304: '진입 완료',
    305: '결산 완료',
    306: '취소 완료',
    307: '취소 완료',
    400: '청산',
    401: '청산 완료',
    500: '자동자산청산',
    600: '격야비 수취',
    700: '자금 이체',
    10100000: "데이터 없음",
    10100001: "데이터 없음",
    10200000: "로그인하여 주세요",
    10200001: "사용 가능 잔액 부족",
    10200002: "로그인 계정은 주문 계정이 아닙니다.",
    10200003: "거래 비밀번호 잠금",
    10200006: "계정 정보 없음",
    10200007: "계정 잠금 상태. 고객센터로 문의하십시오.",
    10200008: "사용자 잠금",
    10300000: "제한 수량 초과",
    10300001: "가격 변동률은 지수 가격의 +/- 50%를 초과할 수 없습니다.",
    10300002: "제한 수량 초과",
    10300003: "결산 수량은 포지션 수량을 초과할 수 없습니다. ",
    10300004: "주문 상태 오류",
    10300005: "시간 유형 오류",
    10300006: "ORDER_FROM 오류",
    10300007: "데이터 없음",
    10300008: "취소 실패, 취소 가능 수량 0 ",
    10300009: "자금 이체 중, 일시적으로 거래를 진행할 수 없습니다.",
    10300011: "주문 수량은 보유 수량을 초과했습니다. 사용 가능한 포지션 수량이 부족합니다.",
    10300012: "일부 주문이 완료되지 않았습니다. 사용 가능한 포지션 수량이 부족합니다.",
    10300013: "결산 가능한 매수 포지션이 존재하지 않습니다.",
    10300014: "결산 가능한 매도 포지션이 존재하지 않습니다.",
    10400000: "보유한 포지션 정보 없음",
    10400002: "해당 조작 시 포지션의 청산을 촉발할 수 있습니다. ",
    10500001: "데이터가 이미 존재합니다",
    10500002: "데이터 입력 실패",
    900000: "파라미터 부족",
    900001: "파라미터 격식 혹 유형 오류",
    999999: "시스템 오류",
    614: '결산/납기 중, 출금 일시 중지',
    10300010: "거래 일시 중지"
  },
  productList: {
    name1: '보통',
    text1: '지정 가격',
    name2: 'IOC',
    text2: '지정 가격(IOC)',
    name3: 'FOK',
    text3: '지정 가격(FOK)',
    name4: 'Post-only',
    text4: '지정 가격(Po)'
  },
  errorMessage: {
    error1: '0 이상 숫자를 입력하여 주세요',
    error2: '최대 포함을 입력하여 주세요',
    error3: '소숫점 아래의 숫자',
    error4: '매수 가능 최대 수량',
    error5: '매도 가능 최대 수량',
    error6: "정확한 금리율을 입력하여 주세요",
    error7: "최소 수량 입력",
    error8: "정확한 수량을 입력하여 주세요",
    error9: "2~30일 사이에서 입력하여 주세요",
    error10: "6자리 자금 비밀번호를 입력하여 주세요",
    error11: "최대 수량 입력",
    error12: "입력된 최대 가격은",
    error13: "주문 수량은 상한가를 초과할 수 없습니다，",
    error14: "주문 수량은 하한가를 초과할 수 없습니다，",
    turnOutAccount: "출금 계정를 선택하여 주세요",
    accountAddressDifferent: "입금 계정과 출금 계정이 동일합니다.",
    turnIntoAccount: "출금 계정을 선택하여 주세요",
    transferAmount: "정확한 금액을 입력하여 주세요",
    amount1: "출금 금액은 0 이상으로 입력하여 주세요",
    amount2: "출금 금액은 최대 사용 가능 금액을 초과할 수 없습니다."
  },
  // 0608
  kLineType: {
    buttonName: '시분할',
    min: '분',
    hours: '시간',
    day: '일',
    week: '주',
  },
  tradeHistory: {
    all: '전체',
    text: '거래 선택',
    selectContract: '거래 명칭',
    selectSite: '웹사이트 조회',
    contract: '계약',
    size: '계약 수량(장)',
    dealSize: '거래 수량',
    residue: '잔여량',
    dealPrice: '거래 가격',
    dealValue: '거래 가격',
    type: '유형',
    entrustTime: '주문 시간',
    side: '매수/매도',
    closeType: '개시/결산',
    more: '매수',
    less: '매도',
    open: '개시',
    close: '결산',
    entrustPrice: '주문 가격',
    entrustSize: '주문 수량',
    status: '상태',
    present: '잔액',
    in: '입금',
    out: '출금',
    date: '시간'
  },
  // 계약 가이드
  guide: guide,
  // 合约指南新版
  handbook: handbook,
  // 合约新手指导
  direct: direct,
  // 참고 정보
  reference: reference,
  // 주문 내역
  entrust: entrust,
  // 잔액
  wallet: wallet,
  // 交割合约
  regular: regular,
  // 주문 내역
  orderDetail: {
    title: '위탁 내역',
    status1: '거래 완료',
    status2: '위탁 내역',
    done: '거래 내역',
    cancel: '취소내역',
    asset: '자산 내역',
  },
  // 合约赢家秀
  show: {
    text1: '수익 내역을 공유해 봅시다!',
    text2: '스캔하여 공',
    spread: '더 보기>',
    backTop: '위로 돌아가',
    getMore: '더 불러오기'
  }

}

export default ZH