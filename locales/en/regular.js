let regular = {
  navigation: {
    regularTitle: 'Delivery Contract',
    regularTitle1: 'Delivery',
    regularTitle2: 'Regular',
    halfYear: 'Six-month',
    regularSecondTitle1: 'Delivery Contract',
    regularSecondTitle2: 'Beginner\'s Guide to Delivery Contracts',
    regularThirdTitle1: 'Contract Description',
    regularThirdTitle2: 'What is the Delivery Contract?',
    regularThirdTitle3: 'How to Trade a Delivery Contract',
    regularThirdTitle4: 'Settlement and Delivery',
    regularThirdTitle5: 'Risk Control',
    regularThirdTitle6: 'Liquidation Process',
    regularThirdTitle7: 'Apportionment Calculation',
  },
  regularContractIntro: {
    content1p1: 'Delivery  Contract, which uses digital currency as the underlying asset, is a contract of Delivery delivery and is settled in USDT in the whole process. For the convenience of trading, the Delivery contract will use the same multiplier as the USDT contract.',
    tips1: 'Note: Maker and taker fees may be subject to irregularly adjustments due to platform activities, please refer to the announcement for details.',
    content2p1: 'Unlike a perpetual contract, a Delivery Contract is a contract with settlement and delivery. Both the Delivery Contract and USDT Contract use USDT as the underlying asset, quote, and settlement currency. The price of the contract will be formed entirely by the market price mechanism. Instead of using the index, the profit and loss will be calculated using the last price.',
    content2p2: 'The current Delivery Contract is a six-month contract, and the delivery will take place after six' +
    ' months (2019/07/26).',
    content2p3: 'USDT, as both the quote currency and settlement currency, is the only asset that exists in your USDT Contract Account. You can use it to trade BTC semi-annual contract and other digital contracts directly, which can reduce the loss in multi-currency exchanges. Of course, your profit is also settled by USDT.',
    content2p4: 'Compared with BTC, EOS and other digital currencies, which may result in the increase in currency amount and the decrease in value of assets due to digital currency depreciation, USDT is relatively stable in the long term run. As both the quote currency and settlement currency, USDT can reduce the abovementioned risk in transactions.',
    content2p5: 'Currently, the Delivery Contract is a six-month contract, the settlement occurs every Friday at 17:58. The contract will be delivered at 17:58 on the last Friday after six months.',
    content3p1: 'The trading mechanism of the Delivery Contract is similar to futures trading structure, but with certain differences. All margin, profits and losses are dominated in USDT. The Delivery Contract is not quoted by the index, and the profit and loss in the market are calculated by the last price.',
    content3p2: 'Margin and Leverage',
    content3p3: 'All margins of the Delivery Contract are calculated in USDT. You can conduct two-direction trade, long or short on multiple contracts, that said, you can long or short positions in two directions.',
    content3p4: 'We offer 2x, 3x, 5x, 10x, 20x, 33x, 50x and 100x leverage. You can choose a leverage when opening a position, and this leverage cannot be adjusted after opening the position. Regardless of the leverage you use, the final leverage will be calculated based on the actual leverage (holding positions).',
    content3p5: 'Trade Example:',
    content3p6: 'If you want to long Bitcoin with 2 BTC, but the principal is not enough. Then, through Delivery Contract, you can buy (long) 10 lot BTC Delivery Contracts (1 lot = 0.002BTC) with 100x leverage. That is, you can hold a BTC long position valuing 2BTC by providing only the USDT with a value of 0.02 BTC.',
    content3p7: 'Note: Since the Delivery Contract uses a cross-margin model, the price of digital currencies can be highly volatile. Traders should be cautious and aware and select the appropriate leverage and position for trading.',
    content3p8: 'The Delivery Contract assesses the risk level by using a multi-position combined calculation to offer a better trading strategy for traders, especially for hedgers, who can realize multi-currency hedging in one account.',
    content3p9: 'For example, if you hold a BTC six-month contract position with an unrealized profit of 100 USDT and an ETH six-month contract position with an unrealized loss of 50 USDT, then the unrealized profit and loss in your account is +50 USDT.',
    content3p10: 'Before settlement, the unrealized profit of the six-month contract can be used to open new positions but cannot be withdrawn, and after settlement, this profit can be taken out.',
    content4p1: 'The settlement occurs every Friday at 17:58. All the Delivery contracts will be settled (no debt settlement in the week), at which time all the unrealized will be settled into the realized at the last transaction price. The margin and PNL of the open positions will be recalculated at the settlement price, funds can be transferred out after the settlement.',
    content4p2: 'No Debt Settlement in the Week',
    content4p3: 'Description:',
    content4p4: 'The Delivery contract uses a no debt settlement, which occurs every Friday at 17:58. The settlement is only applicable to the Delivery contracts before the settlement week. During the settlement, transactions suspended, order placing and matching will resume after the settlement. The unrealized profit and loss will be calculated according to the settlement price, base settlement price of the open positions and the amount of holding positions; in the cross margin mode, after the settlement, the base settlement price will de adjusted to the last settlement price and the unrealized profit and loss will be calculated based on the new base settlement price. If the user opens new positions after the settlement, the based settlement price will change, the realized and unrealized profit and loss, the position cost will change accordingly, but the actual equity of the user will not change.',
    content4p5: 'Example:',
    content4p6: 'A user longs BTC at a price of 3,000 USDT. When opening the position, there is a margin of 1,000 USDT in the account, and the user’s current asset is 1,000 USDT. Then the price drops to 2,800 USDT, without calculating the leverage, the unrealized PNL in the user’s account is -200 USDT and the current asset is 800 USDT, the loss of 200 USDT is caused by the price drop. (the calculation does not include the fee)',
    content4p7: "If the settlement occurs at this point, the user's unrealized PNL is settled. The base settlement" +
    " price is adjusted to 2,800 USDT, and the unrealized profit becomes 0. Then the user's current asset is 800 USDT, which is the same as the amount before settlement and does not change due to the settlement.",
    content4p8: 'If the price rises back to 3,000 USDT, and the unrealized profit becomes 200 USDT, then the current asset becomes 1,000 USDT, which is the same as the amount when the user opened the position at 3,000 USDT.',
    content4p9: 'The rising market is similar to the case above.',
    content4p10: 'Settlement Time',
    content4p11: 'The settlement occurs every Friday at 17:58 and takes 10 minutes to complete. Transactions are' +
    ' disabled in this 10 minutes and funds cannot be transferred in 10 minutes.',
    content4p12: 'Delivery',
    content4p13: "The delivery price is the arithmetic average price in the last 15 minutes of the Delivery contract. After the delivery, all of the user's positions will be closed at the delivery price and all orders will be canceled.",
    content5p1: 'Risk Control',
    content5p2: 'Delivery Contract uses a risk control mechanism similar to that of USDT Contract and measured by the risk level.',
    content5p3: 'Risk Level = (Sum of Position Value * MM / Current Equity (No Two-Direction Position)',
    content5p4: 'Calculation Formula:',
    content5p5: 'Select long or short positions with higher position value',
    content5p6: 'Risk Level = (Sum of Higher Position Value * MM) / Current Equity (With Two-Direction Position)',
    content5p7: 'Where MM (Maintenance Margin)= 0.5%',
    content5p8: 'When the Risk Level reaches 100%, which means, the asset in your account does not meet the maintenance margin requirement, then your account will enter the liquidation process.',
    // 交割合约的风控机制修改 2018-5-8
    content5p9: 'The delivery contract uses the estimated liquidation price for its risk control.',
    content5p10: 'Two-direction Positions:',
    content5p11: 'Net Positions = Long Positions – Short Positions',
    content5p12: ' If the net position = 0, then there is no liquidation price',
    content5p13: 'If the net position > 0, then',
    content5p14: 'Liquidation Price = Avg. Holding Price of Longs * (1+MM) – Account Balance/ (|Net Positions|*Multiplier)',
    content5p15: '（If the liquidation price < 0, positions will not be liquidated）',
    content5p16: ' If the net position < 0, then',
    content5p17: 'Liquidation Price = Avg. Holding Price of Shorts * (1-MM) + Account Balance/ (|Net Positions|*Multiplier)',
    content5p18: 'Where MM = Maintenance Margin = 0.5%',
    content5p19: 'As the unrealized profit can be used to open a new position, resulting in the increase in maintenance margin, therefore, your estimated liquidation price may still be liquidated when your holding position is in profit.',
    content6p1: 'In order to avoid unnecessary liquidations, 58COIN will retain the existing positions and cancel all unexecuted orders on the current contract.',
    content6p2: 'If this does not satisfy the maintenance margin requirement then the position will enter the liquidation process and place a market price liquidation order.',
    content6p3: 'If the market price does not completely consume the remaining positions in the liquidation process, the remaining funds will be added to the insurance fund, and the insurance fund will always be accumulated before settlement.',
    content6p4: 'If the market price not only completely consumes the remaining positions, but also causes debts, then the loss will be recorded and be deducted from the insurance fund when the settlement occurs. If the insurance is unable to fill the loss, the loss caused by debt will be apportioned by the profit side after liquidation.',
    content6p5: 'You will be notified if a liquidation occurs.',
    content7p1: 'Description:',
    content7p2: 'When the market fluctuates greatly, if the liquidation order cannot be executed at the liquidation price, and resulted in the loss greater than the insurance fund, the platform will adopt a “apportionment” system to apportion the debt loss to profitable accounts of this week according to the profit ratio.',
    content7p3: 'Calculation Formula:',
    content7p4: 'Accumulated Debt Loss – Insurance Fund = Debt Loss',
    content7p5: 'Apportionment Method:',
    content7p6: 'Apportionment Coefficient = Debt Loss / Sum of the Earnings of All Gainers (single contract income).',
    content7p7: 'Actual Apportionment = Profit (single currency contract) * Apportionment Coefficient.',
    content7p8: 'Example:',
    content7p9: 'At the time of settlement/delivery on Friday, the total loss of the liquidation order of BTC Delivery Contract is -10,000 USDT. The platform will first fill the loss with the insurance fund. If there is still a loss of -8,000 USDT that cannot been filled, then the gainers of BTC Delivery Contract will apportion this loss.',
    content7p10: 'Assuming that the total profit of gainers is 40,000,000 USDT, the apportionment coefficient is 8,000 USDT /40,000,000 USDT = 1:5,000. If the total profit of the Delivery contract in this week is 1,000 USDT, then the apportionment amount is 1,000* (1/5,000) = 0.2 USDT.',
    content7p11: 'Note: In order to ensure the minimum scope of the apportionment, the insurance fund and the loss of the multi-currency contract are calculated separately. That is, if the insurance fund of BTC six-month contract is enough, while the insurance fund of EOS six-month contract is insufficient, this loss will be apportioned by the EOS six-month contract instead of the BTC six-month contract, and the latter will not be affected.',
  },
  insurance: {
    p1: 'The insurance fund is the residual value management of the liquidation order after being executed at the market price. The debt loss will first be deducted from the insurance fund.'
  }
}
export default regular
