export const ja_adjustmententry = {
  title: '調整エントリ',
  pageDescription: '請求アカウントのコスト調整を作成・管理します。',
  quickActions: 'クイックアクション',
  createAdjustment: '調整エントリを作成',
  getStarted: '開始する',

  // Search and filters
  searchPlaceholder: 'ID、BG、アカウント、説明で検索',
  monthLabel: '月:',
  addFilter: 'フィルタを追加',
  addFilterTitle: 'フィルタを追加',
  filterModalContent: 'フィルタ設定がここに実装されます。',
  notApplied: '未適用',
  applied: '適用済み',
  bulkAction: 'バルクアクション',
  export: 'エクスポート',
  otherOption: 'その他のオプション',

  // Table columns
  billingGroup: '請求グループ',
  account: 'アカウント',
  type: 'タイプ',
  service: 'サービス',
  description: '説明',
  currency: '通貨',
  amount: '金額',
  actions: 'アクション',
  apply: '適用',

  // Body content indicators
  showingDataFor: 'データ表示対象',
  entries: '件',
  noDataAvailable: 'データがありません',
  noDataDescription: '調整エントリが見つかりません',

  // Tabs
  allEntries: 'すべてのエントリ',
  autoAdjust: '自動調整',
  splitUpfrontRI: 'RI前払い分割',
  splitUpfrontSP: 'SP前払い分割',
  // Tab labels for ButtonTab component (lowercase with spaces)
  'all entries': 'すべてのエントリ',
  'auto adjust': '自動調整',
  'split upfront ri': 'RI前払い分割',
  'split upfront sp': 'SP前払い分割',

  emptyState: {
    title: 'まだ調整エントリがありません',
    description:
      '最初の調整エントリを作成して、コスト変更の管理を開始しましょう。',
  },
  navigation: {
    home: 'ホーム',
    create: 'エントリ作成',
    history: '履歴',
  },
  form: {
    title: '調整詳細',
    billingAccount: '請求アカウント',
    adjustmentType: '調整タイプ',
    amount: '金額',
    description: '説明',
    effectiveDate: '有効日',
    reason: '調整理由',
    submit: '調整を作成',
    cancel: 'キャンセル',
  },
  status: {
    pending: '保留中',
    approved: '承認済み',
    rejected: '拒否',
    applied: '適用済み',
  },
  types: {
    credit: 'クレジット',
    debit: 'デビット',
    refund: '返金',
    discount: '割引',
  },
  messages: {
    createSuccess: '調整エントリが正常に作成されました',
    createError: '調整エントリの作成に失敗しました',
    deleteSuccess: '調整エントリが正常に削除されました',
    deleteError: '調整エントリの削除に失敗しました',
  },
  rowActions: {
    edit: 'エントリを編集',
    duplicate: '複製',
    delete: '削除',
  },
  applyModal: {
    title: '適用',
    description:
      '請求グループにエントリを適用するには、以下のオプションを設定してください',
    selectedEntry: '選択されたエントリ',
    items: '件',
    searchPlaceholder: '名前、タイプで検索...',
    filterAll: 'フィルター',
    type: 'タイプ',
    monthLabel: '料金を適用する月を選択',
    dutyFree: '免税',
    setExchangeRate: '為替レートを設定',
    exchangeRateDescription: '請求書に反映する為替レートを入力してください',
    billingGroupLabel: '料金を適用する請求グループを選択',
    cancel: 'キャンセル',
    applyFee: '料金を適用',
  },
};
