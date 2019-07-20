let handbook = {
    menu: [
        {
            name: '無期限契約',
            children: [
                {name: '初心者ガイド', url: '/direct', mark: 'swapContractsGuide'},
                {name: '仮想通貨契約説明', url: '/handbook/instructions#text', mark: '#text'},
                {name: '仮想通貨契約とは', url: '/handbook/instructions#text1', mark: '#text1'},
                {name: 'どう取引する？', url: '/handbook/instructions#text2', mark: '#text2'},
                {name: 'リスク制御システム', url: '/handbook/instructions#text3', mark: '#text3'},
                {name: 'オーバーレバ防せシステム', url: '/handbook/instructions#text4', mark: '#text4'},
                {name: 'アンカー現物価格―資金調達', url: '/handbook/instructions#text5', mark: '#text5'},
                {name: '資金調達料金履歴', url: '/handbook/compensate/1', mark: 'compensate'},
                {name: '保険基金履歴', url: '/handbook/insurance/1', mark: 'insurance'},
            ]
        },
        {
            name: '無期限契約',
            children: [
                {name: '専門用語解釈', url: '/handbook/nounExplanation', mark: 'nounExplanation'},
                {name: 'インデックス価格', url: '/handbook/price/1', mark: 'price'}
            ]
        }
    ],
    instructions: {
        title: '初心者ガイド',
        paragraph1: {
            title: '契約説明：',
            p1: '無期限契約とは原資産が仮想通貨の契約のことである。取引しやすいよう、各仮想通貨の取引単位を調整することになった。詳細は下記のエクセルをご参考ください。',
            p2: '注意：makerとtakerの手数料はプラットフォームイベントで不定期に調整するため、詳しい情報は公告メッセージにご参考ください。'
        },
        theadList: ['契約名称', 'BTC', 'EOS', 'BCH', 'ETH', 'LTC', 'XRP', 'ETC', 'DASH'],
        tbodyList: [
            ['契約定数', '1', '1', '1' ,'1', '1', '1', '1','1'],
            ['オファー単位', 'USD', 'USD', 'USD' ,'USD', 'USD', 'USD', 'USD','USD'],
            ['契約の価値', '1USD/BTCUSD', '1USD/EOSUSD', '1USD/BCHUSD' ,'1USD/ETHUSD', '1USD/LTCUSD', '1USD/LTCUSD', '1USD/LTCUSD','1USD/DASHUSD'],
            ['取引方法', 'T+0', 'T+0', 'T+0' ,'T+0', 'T+0', 'T+0', 'T+0','T+0'],
            ['取引時間', '24H', '24H', '24H' ,'24H', '24H', '24H', '24H','24H'],
            ['維持証拠金率', '0.5%', '0.5%', '0.5%' ,'0.5%', '0.5%', '0.5%', '0.5%','0.5%'],
            ['maker', '0.03%', '0.03%', '0.03%' ,'0.03%', '0.03%', '0.03%', '0.03%','0.03%'],
            ['taker', '0.06%', '0.06%', '0.06%' ,'0.06%', '0.06%', '0.06%', '0.06%','0.06%'],
        ],
        text1: '無期限契約とは',
        paragraph2: {
            p1: '無期限契約は既に保有している銘柄を価格計算及び決済の単位として使われる仮想通貨契約であって、先物契約と違って、期限日がないので決済は発生しない。高額レバレッジをかかっている場合での先物市場をコピーできるよう、現在の無期限契約はBTCUSD、EOSUSD等の双方向取引等を支持する上に、多種のレバレッジ倍数も維持する。無期限契約は決済しないだけでなく、アンカーシステムで原資産の参考<a href="/handbook/price/1" style="color: #597ab9;">インデックス価格</a>を追跡することもできる。'
        },
        text2: '無期限契約は　どう取引する？',
        paragraph3: {
            p1: '無期限契約のオファー：',
            p2: '無期限契約の価格はいくつかのトップ取引所の現物インデックスであって、詳細は参考インデックス価格をご参考<a href="/handbook/price/1" style="color: #597ab9;">ください</a>。全ての証拠金と損益は保有している銘柄で計算される。取引単位は契約説明にご参考<a href="#text" style="color: #597ab9;">ください。</a>',
            p3: '仮想通貨/ドル価格の上昇を信じる投資者が無期限契約を買い持ちになるが、下落と判断する投資者が逆の操作を取る。',
            p4: '証拠金とレバレッジ：',
            p5: '全ての証拠金は保有している銘柄で計算され、その銘柄の契約で双方向の取引（ロング又はショート）をできる。',
            p6: 'レバレッジ倍数に2倍、3倍、5倍、10倍、20倍、33倍、50倍、100倍がある。参入後は二次調整ができないため、市場に参入する際、慎んでお選びください。（違う契約の間にレバレッジの影響がない。）',
            p7: '取引例示：',
            p8: '100BTCと同価値のビットコインをロングする場合、参入価格が6,000ドルで、100BTC * 6,000 USD = 600,000枚の契約となる。何日後、契約の価格が7000ドルと上がる場合。',
            p9: '投資者の利益が：600,000 * 1 * (1/6,000 - 1/7,000) = 14.286 BTC',
            p10: '5000ドルへ下落の場合、投資者の損失が600,000 * 1 * (1/6,000-1/5,000) =-20 BTC。 契約の逆数とノンリニアリティ性質のため、損失も拡大する。',
            p11: '逆に、ショートする投資者に対して、ビットコインで計算する場合、下落の利益は同じ幅で上昇することによる損失と比べて、損失の方が大き。',
            p12: '注釈：レバレッジ倍数が高くなるほど、価格変動による影響が大きくなるため、ご自身が受けられる範囲でレバレッジ倍数をお選びください。'
        },
        text3: 'リスクコントロールシステム',
        paragraph4: {
            p1: 'オーバーレバレッジシステム',
            p2: '無期限契約のリスク防せシステムはオーバーレバレッジシステムを使用する。レバレッジ価格がインデクシング価格を計算基準として、オーバーレバレッジ価格を達する場合、オーバーレバレッジ手順を始める',
            p3: 'オーバーレバレッジ価格の発生：',
            p4: '全てのポジションに対して、必要の維持証拠金金額＝(MM * 契約数量 *乗数/ 参入価格)',
            p5: 'これはポジションを保有するために必要な最小保証金額である。この金額以下の場合、清算されるため、我々はこの金額でオーバーレバレッジ価格を計算する。',
            p6: 'その中MM =維持証拠金率=0.5%。',
            p7: 'オーバーレバレッジ手順',
            p8: '不必要なオーバーレバレッジを発生しないように、現有ポジションを保留し、当契約の全ての未約定注文をキャンセルする。',
            p9: '上記の操作でも必要な維持証拠金がたりない場合、オーバーレバレッジ手順が初めて、当ポジションが破産価格で清算エンジンシステムが引き継がれる。',
            p10: 'オーバーレバレッジ手順の中で、破産価格よりいい価格で決済できる場合、余った資金を<a href="/handbook/insurance/1" style="color: #597ab9;">保険基金に入れる。</a>',
            p11: 'もし破産価格で決済しても決済の条件を達せないの場合、保険基金を使って市場で注文決済の作業を続く。それでも清算注文を処理できないのなら、自動レバレッジを発生してしまう。',
            p12: 'オーバーレバレッジが発生したら、ユーザーに通知する。',
            p13: '自動レバレッジ',
            p14: '自動レバレッジシステムは保険基金を注入するや保険基金を使ってもまだ清算できないポジションが処理対象となる。',
            p15: '市場ルールによれば、取引は必ず相手がある取引でなければならない。相手が消えたら（市場にない）、市場での相手ポジションも相応に減る。',
            p16: '注釈：当種類の契約だけ影響し、ほかの契約の未決済契約に影響しない。',
            p17: '自動レバレッジ順序：利益とレバレッジで計算する。利益が多い又はレバレッジが高い取引者が先に自動レバレッジをかけられる。',
            p18: '順序の計算︰',
            p19: '順序＝利益のパーセント*　有効レバレッジ（利益の場合） = 利益のパーセント/　有効レバレッジ（損失の場合）',
            p20: 'その中',
            p21: '有効レバレッジ＝abs(マーク価値) / (マーク価値 – 破産価値)',
            p22: '利益パーセント＝（マーク価値 –　平均参入価格）/ abs（平均参入価格）',
            p23: 'マーク価値＝マーク価格になる際のポジション価額',
            p24: '破産価値＝破産価格になる際のポジション価額',
            p25: '平均参入価値　=　平均参入価格になる際のポジション価額',
            p26: 'システムはショートとロングを分けて、高い方から低い方へ順序を付ける。',
            p27: '自動レバレッジが発生したら、ユーザーに通知する。'
        },
        text4: 'オーバーレバレッジの防ぐシステム',
        paragraph5: {
            p1: '人為的な操縦で連続のオーバーレバレッジを起こっしユーザーに無理由の損失を起きないように、プラットフォームはインデックス価格をアンカーする方法で市場価格を追跡する。その上に、プラットフォーム価格のではなく、公正原資産価格を損益の計算価格となる。',
            p2: '公正マーク価格：公正マーク価格＝インデックス価格*（1+資金調達率ベーシスレート）',
            p3: '資金調達率ベーシスレートの計算はアンカー現物価格<a href="#text5" style="color: #597ab9;">にご参考ください</a>',
            p4: '取引中にプラットフォーム価格で約定する、（参入とポジションを手仕舞う際、プラットフォームの相手と一緒に協議しなければならない。）',
            p5: '未実現損益は公正マーク価格で計算するため、参入する瞬間で素早くユーザーの利益と損失を把握できる（公正マーク価格で計算する結果である）。オーバーレバレッジは公正マーク価格で計算するため、プラットフォーム内部の価格はどんなに変動しても、未実現損益に変換がないことで、“オーバーレバレッジ”を避ける。',
            p6: '例示：BTCUSDのプラットフォーム平台价が7000、公正マーク価格は7005の場合、参入価格は7000で約定しなければならないだが、未実現損益は7005で計算する。',
            p7: 'もし、次はある原因でプラットフォーム平台价が6000に変わって、公正マーク価格は7005（公正マーク価格に変化がない）の場合、ユーザーの未実現損益は相変わらず7005で計算する。しかし、もしこの場合で、ポジションを手仕舞ったら、約定過程の価格は必ずリアルの相手で協議し決まるため、約定価格は6000となる。'
        },
        text5: 'アンカー現物価格―資金調達',
        paragraph6: {
            p1: '無期限契約の原資産はBTC等の仮想通貨（現物資産）であるため、プラットフォーム価格はリアルタイムの参考価格に追いつけるように、資金調達料金システムを現物価格のアンカーシステムにする。',
            p2: '資金調達料金はポジションを保有するユーザーの間に交換され、プラットフォームは料金を一切取らない。',
            p3: '資金調達料金は金利、プレミアムとディスカウントで構成され、毎日3回交換される。時間は：8：00   ， 16：00   ， 24：00 。',
            p4: '資金調達料金の計算：',
            p5: '金利とプレミアム/ディスカウントで構成する。',
            p6: '金利の構成：',
            p7: '各契約は二種るの通貨でできる：ペース通貨と計算通貨。金利はこの二種類の通貨の間の金利関数。金利インデックスが相応銘柄の貸借市場とマーチングする。',
            p8: 'プレミアム/ディスカウントの構成：',
            p9: 'プラットフォーム価格はインデックス価格に比べれて明らかにプレミアム或はディスカウントする場合、プレミアムインデックスは次の資金調達料金を上がらる又は下がることで、その時点のプラットフォームの契約取引の価格ラインにふさわしい方へ調整する。',
            p10: 'プレミアムインデックス＝{max（0，インパクトビッド価格-インデックス価格）-max（0, インデックス価格-インパクトビッド価格）}/インデックス価格+公正ベーシス',
            p11: '最終資金調達料金の計算',
            p12: '資金調達料金は8時間ごとの金利とプレミアム/ディスカウントの部分で計算される。+/-0.05%のバッファーを加える。',
            p13: '資金調達料金＝プレミアムインデックス+ clamp{金利-プレミアムインデックス、0.05%,-0.05%}',
            p14: '取引者のポジション価額の計算にその計算の結果を使われて、相応時間に調達の費用を計算される。',
            p15: '互换补偿率的限额',
            p16: '資金調達料金の制限金額、',
            p17: '1、絶対上限は（当初証拠金-維持証拠金）*75%。当初証拠金は1％、維持証拠金が0.5％の場合、最大の資金調達料金は75%*（1-0.5%）=0.375%。',
            p18: '2、資金調達料金の変化区間は維持証拠金の75％以下でなければならない。'
        }
    },
    compensate: {
        title: '資金調達料金',
        paragraph1: {
            title: '契約説明：',
            p1: '資金調達料金はポジションを保有するユーザーの間に交換され、プラットフォームは料金を一切取らない。',
            p2: '資金調達料金は金利、プレミアムとディスカウントで構成され、毎日3回交換される。時間は：8：00    16：00    24：00 。',
            p3: '資金調達料金費用＝ポジション価額*資金調達料金率',
            p4: '詳しい情報は“アンカー現物価格” <a  style="color: #597ab9;">にご参考ください</a>'
        },
        theadList: ['時間', '資金調達料金']
    },
    insurance: {
        title: '保険基金',
        paragraph1: {
            title: '保険基金',
            p1: '保険基金はオーバーレバレッジが発生したら、オーバーレバする注文は市場で処理を委託した後の差額管理のことである。オーバーレバレッジする際、もし注文の委託は成功しない場合、保険基金に注入し委託し続ける。',
            p2: '保険基金はユーザーの取引状況によって増加又は減少する。保険基金の累計と使用は自動レバレッジを発生を制限することができる。'
        },
        theadList: ['時間', '残高']
    },
    noun: {
        title: '専門用語解釈',
        paragraph1: {
            title: '保険基金',
            p1: '双方向取引：取引者が契約を購入で参入し取引を始める。契約を売約して参入し取引を始めることもできる。',
            p2: '証拠金：取引者が契約を購入/売約する際に、契約価値の比率で証拠金を払って契約を果たす保証することで、証拠金の数倍の取引ができる。ここは契約の必要証拠金と指す。',
            p3: '未実現損益：未決済契約を保有する状態での利益と損失。ここの利益はまだ操作できる状態。',
            p4: '取引単位：取引の最小価値、”枚”で計算する。現在1枚＝１ドル。',
            p5: '資金調達料金：現物価格をアンカーできるために、ロングとショートの間に資金の調達交換で調整する。資金調達料金はポジションを保有するユーザーの間に交換され、プラットフォームは料金を一切取らない。',
            p6: '資金調達料金は金利、プレミアムとディスカウントで構成され、毎日3回交換される。時間は：8：00    16：00    24：00 。 ',
            p7: '最小の変動価格：取引所で行う公開価格セリで、契約の一計算単位に相場を付ける時、最小の変動数値のことである。取引で毎回のオファーは最小の変動価格の整数倍数でなければならない。',
            p8: '維持証拠金：ポジションの存在を保証する最小証拠金金額のことである。この金額以下になったらオーバーレバレッジ手順を始めてしまう。',
            p9: 'マーク価格：マーク価格＝インデックス価格*（1+資金調達料金）；この価格は損益の標準となる。',
            p10: '成行：当時の市場価格で即時約定する指令である。ユーザーが具体的な価格を決める必要がなく、当時市場で最もいい価格で執行され約定する要求を出してだけで十分。',
            p11: '参入価格：市場に参入する時の価格。',
            p12: 'インデックス価格：インデックスが現物価格を追跡する。Bitfinex、Bitstamp、GDAX等いくつのトップ取引所の現物オファーによって、市場全体の価格レベルを表す。',
            p13: '指値：執行する際、指定する価格或はもっといい価格で約定しなければならない指令のことである。指値指令を出す際に、必ず具体的な価値を教えなければならない。',
            p14: 'ポジション価額：現在保有している未決済契約の枚数（仮想通貨数量）。',
            p15: '予備注文：取引者は取引する前に相場を事前に判断し、判断の結果によって、計画的に取引する。事前に触発価格と執行価格を設置し、市場の触発価格は設置した価格に達する場合、設置した執行価格で市場に注文を展示する。予備注文は約定することを保証できない。',
            p16: '利用可能残高：新しい契約の参入と出金する資金に使える。必要証拠金の部分は含めていない。',
            p17: '未決済契約料金：無し',
            p18: 'ユーザー権益：ユーザーのフル資産。（利用可能残高と必要証拠金を含める）',
            p19: '保険基金：投資者のポジションが自動レバレッジを掛かられないために、58COIN無期限契約が設置したものである。保険基金はまだ清算を執行していない注文の価格をよりいい価格になって、清算エンジンシステムに引き継がれないように使われる。清算注文の約定価格は破産価格より高いことは保険基金の伸びになる。'
        },
    },
    price: {
        title: 'インデックス価格',
        paragraph1: {
            p1: 'インデックス明細',
            p2: 'インデックスは１分間ごとに現物価格にアンカーする。58 Swapインデックス最後の価格で計算し、いろんな画面のトップにリアル時間のビットコイン価格として展示する。',
            p3: 'インデックスはBinance（40%）Huobi（30%）和BitFinex（30%）計3個の取引所のビットコイン/ドル(BTC/USD)価格の同様加重インデックスを使用する。',
            p4: '当インデックスは総合指数で、多数の取引所から価格を収集する意味である。取引所の詳しい情報は下記の“総合インデックス分解”をご参考ください。もしある取引所がサービスを停止して、15分以上も取引を発表しない場合、サービスを再開するまで、弊社はインデックスシステムからその取引所を取り除く。'
        },
        theadList: ['時間', '契約', '価格インデックス'],
    }

}
export default handbook