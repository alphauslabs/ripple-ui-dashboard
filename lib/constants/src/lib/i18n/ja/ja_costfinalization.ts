export const ja_costfinalization = {
  CostFinalization: {
    // Page titles and headers
    PageTitle: 'コスト確定',
    OriginalInvoiceListingTitle: '請求書ID一覧',
    ModalTitle: '{{vendor}}のコスト確定',
    ReturnButtonText: 'コスト確定に戻る',

    // Feature availability
    FeatureNotAvailable:
      'この機能はこのクラウドプロバイダーではまだ利用できません。',

    // Dashboard
    LastFinalizationDate: '最終確定日',
    AutomationStatus: '自動化設定',
    Progress: '進捗',

    // Status types specific to cost finalization
    StatusTypes: {
      // Calculation statuses
      Preparing: '準備中',
      Running: '実行中',
      Checking: '確認中',
      Success: '成功',
      Error: 'エラー',

      // Invoice statuses
      Confirmed: '確認済み',
      Unconfirmed: '未確認',

      // General statuses
      Created: '作成済み',
      InProgress: '進行中',
      Completed: '完了',
      NotStarted: '未開始',
      Preview: 'プレビュー',
      Published: '公開済み',
      NotPublished: '未公開',
    },

    // Actions
    Actions: {
      Finalize: '確定',
      Cancel: 'キャンセル',
      Retry: 'リトライ',
      View: '表示',
      Edit: '編集',
      ConfirmAndFinalize: '確定',
      ChangeAutomationDate: '自動化日を変更',
      Save: '保存する',
      StartFinalization: '確定開始',
    },

    // Messages
    Messages: {
      FinalizationInProgress: '確定処理が実行中です...',
      FinalizationComplete: '確定処理が正常に完了しました',
      FinalizationError: '確定処理中にエラーが発生しました',
      NoDataAvailable: '確定可能なデータがありません',
      LoadingInvoiceData: '請求書データを読み込み中...',
      NoInvoiceDataAvailable: '選択した月の請求書データがありません',
      PlaceholderOriginalInvoiceListing: '請求書ID一覧のプレースホルダー',
      NotAvailable: '利用不可',
      ComingSoon: '近日公開',
      StillChecking: '確定処理完了、チェック中',
      StillCheckingSpecific:
        '{{vendor}} {{month}}のコスト確定処理完了、チェック中',
      MultipleStillChecking:
        '{{vendor}}の{{count}}件のコスト確定処理がチェック中',
    },

    // Banner messages
    BannerMessages: {
      InformationalBanner:
        '正確なコストデータで請求書を生成するには、Rippleが各CSPでコストを確定する必要があります。これらのコストを確定する時期をRippleに通知する自動化を設定してください。目安として、AWSとGCPは通常月の5日にデータをリリースし、Azureは9日にリリースします。',
      TooltipInfo:
        'RippleはAWSとGCPについて5日に、Azureについて9日にコストを確定します。',
      AwsInstructions: {
        Step1:
          '各支払いアカウントのAWS請求書をすでに受信していることを確認してください',
        Step2:
          'すべてのアカウントがそれぞれの請求グループにマッピングされていることを確認してください',
        Step3:
          'この月の請求書確定を開始する前にCURが登録されていることを確認してください',
        Step4:
          'この月の請求書が確定された後にCURが登録された場合、コストと使用量データが反映されない可能性があります',
      },
      AzureMessage:
        'Azure請求書はまだ確認されていません。後でもう一度お試しください',
      GcpMessage:
        '続行する前に、各支払いアカウントのGoogle Cloud請求書をすでに受信していることを確認してください',
      DefaultMessage: '続行する前に情報を確認してください',
    },

    // Form labels and instructions
    FormLabels: {
      SelectMonthToFinalize: '確定する月を選択してください',
      SelectResourcesToCalculate: '計算するリソースを選択してください',
      ListOfInvoiceIds: '選択した月から確定される請求書IDのリスト',
      Required: '*',
    },

    // Date picker placeholders
    DatePickerPlaceholders: {
      SelectMonth: '月を選択',
      SelectDate: '日付を選択',
    },

    // Resource selection
    ResourceSelection: {
      Account: 'アカウント',
      Tags: 'タグ',
      TagsDescription:
        'タグ（タグオプションはタグ請求グループタイプがある場合にのみ適用されます）',
    },

    // Table headers
    TableHeaders: {
      InvoiceId: '請求書ID',
      PayerId: '支払者ID',
      Name: '名前',
      Cost: 'コスト',
    },

    // Dropdown menu items
    DropdownItems: {
      FinalizeCost: 'コストを確定',
    },

    // Invoice listing related
    InvoiceListing: {
      Search: '検索',
      SelectMonth: '月を選択',
      InvoiceUnavailable: '請求書利用不可',
      NoInvoiceForSelectedMonth: '選択した月の請求書がありません',
      LoadingInvoiceData: '請求書データを読み込み中...',
      NotAvailable: '利用不可',
      VendorNotSupported: 'このベンダーはまだサポートされていません',
      Status: 'ステータス',
    },

    // Automation modal
    AutomationModal: {
      Title: '集計の自動化設定',
      BannerDescription:
        '正確なコストデータで請求書を生成するには、Rippleが各CSPでコストを確定する必要があります。これらのコストを確定する時期をRippleに通知する自動化を設定してください。目安として、AWSとGCPは通常月の5日にデータをリリースし、Azureは9日にリリースします。',
    },

    // Automation schedule UI
    AutomationSchedule: {
      MonthlyFinalizationDay: '月次集計の実施タイミング',
      EditingSchedule: 'スケジュールを変更',
      EditingScheduleDescription: '自動化設定のスケジュールを変更できます。',
      DayOfMonth: '日にち',
      SpecialOptions: '', // User requested to not show this title
      EndOfMonth: '月末',
      DayOfMonthLabel: '', // User requested to not show this title
      Time: '時間',
      Cancel: 'キャンセル',
      Save: '保存する',
      Close: '閉じる',
      ProcessWillRun: '', // User requested to not show this, just show the setting date in JP
    },

    // Vendor names
    VendorNames: {
      AWS: 'AWS',
      Azure: 'Azure',
      GCP: 'GCP',
    },
  },
};
