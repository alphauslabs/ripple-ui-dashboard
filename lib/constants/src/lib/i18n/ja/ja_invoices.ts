export default {
  invoicePreviewModal: {
    title: '請求書プレビュー',
    openInNewWindow: '新しいウィンドウで開く',
  },
  InvoiceListing: {
    Title: '請求書',
    SearchPlaceHolder: '請求グループ名',
    ButtonTitle: '一括操作',
    ButtonItems: {
      Generate: '請求書を作成',
      Publish: 'Waveに請求書を公開',
      Setting: '請求書設定',
      Exchange: 'サポート費用/値引き/手数料の為替レート',
      Export: '請求書PDFを出力',
      ExportAllPdf: '請求書をすべてPDFでエクスポート',
    },
    ButtonSubmenuItems: {
      Selected: '選択中の請求書',
      All: '全ての請求書',
      PublishSelected: '選択中の請求書を公開',
      UnpublishSelected: '選択中の請求書を非公開',
      PublishAll: '全ての請求書を公開',
      UnpublishAll: '全ての請求書を非公開',
    },
    Status: {
      All: '全て',
      NotCreated: '未作成',
      Created: '作成済み',
    },
    EmptyState: {
      Title: '表示できるデータがありません',
      ActionButton: '請求グループを作成',
      MoreButton: 'ドキュメントを確認',
      Subtitle:
        '請求グループが存在しない場合はデータが表示されません。お手数ですが請求グループページから請求グループの作成を実施してください。',
    },
    NoDataForMonth: {
      Title: 'この月の請求書はありません',
      Subtitle:
        '選択された月に利用可能な請求書がありません。別の月を選択するか、新しい請求グループを作成してください。',
      ActionButton: '請求グループを作成',
      MoreButton: 'ドキュメントを確認',
    },
    NoMatchingResults: {
      Title: 'フィルターに一致する結果がありません',
      Subtitle:
        '検索条件やフィルターを調整して、お探しの請求書を見つけてください。',
      ActionButton: 'すべてのフィルターをクリア',
      MoreButton: '検索のみリセット',
    },
    ApiError: {
      Title: '請求書データを読み込めません',
      Subtitle:
        '請求書データの読み込み中にエラーが発生しました。再試行するか、問題が続く場合はサポートにお問い合わせください。',
      ActionButton: '再試行',
      MoreButton: 'サポートに連絡',
    },
    Table: {
      Name: '請求グループ名',
      Company: '企業名',
      Currency: '通貨',
      Invoice: '請求書',
      Finalization: '集計状況',
      Wave: 'WavePro',
      Statuses: 'ステータス',
      WaveStatus: 'Wave公開状況',
      Dates: '日付',
      Created: '作成日',
      Updated: '更新日',
      BillingAmount: '請求金額',
      CreatedStatus: '作成済み',
      NotCreatedStatus: '未作成',
      NotPublishedStatus: '未公開',
      PublishedStatus: '公開済み',
      Total: '合計',
      ActionMenu: {
        Generate: '請求書を作成',
        Finalize: '集計を実施',
        ViewBillingGroup: '請求グループの詳細を確認',
        EditBillingGroup: '請求グループの編集',
        Export: '請求書PDFを出力',
        Publish: 'Wave に公開',
        Delete: '請求グループを削除',
        ResellerChargesSettings: 'リセラー手数料設定',
        CommonExchangeRateSettings: '共通為替レート設定',
        Preview: 'プレビュー',
        PublishToWave: 'Wave に公開',
        UnpublishFromWave: 'Wave から非公開にする',
      },
      Action: 'アクション',
      InvoiceBillingGroupTooltip: '請求書と請求グループは同じ項目です。',
    },
    CommonExchangeRate: {
      SetRateFor: '{{date}}の為替レートを設定',
      BillingGroupName: '請求グループ名',
      AllResellerCharges:
        'この為替レートは、請求グループや支払いアカウントに関係なく、すべてのリセラー手数料設定にのみ適用されます。',
      ExchangeRates: '為替レート',
    },
    ResellerCharges: {
      UseDefaultSettings: '各請求グループのデフォルト設定を使用',
      OverrideAllSettings: '選択されたすべての請求グループ設定を上書き',
      UpdateCommonExchangeRate: '共通為替レートを更新',
    },
    MoreFilters: {
      Apply: '適用',
      ClearAll: 'すべてクリア',
      Created: '作成済み',
      InProgress: '進行中',
      Completed: '完了',
      Error: 'エラー',
      NotStarted: '未開始',
      InvoiceStatus: '請求書ステータス',
      NotCreated: '未作成',
      FinalizationStatus: '集計ステータス',
      Currency: '通貨',
      WavePublishStatus: 'Wave公開ステータス',
      Published: '公開済み',
      NotPublished: '未公開',
      Vendors: 'ベンダー',
      MoreFilters: 'その他のフィルター',
      MoreFiltersTitle: 'その他のフィルター',
      Success: '成功',
      Checking: '確認中',
      Preparing: '準備中',
      Running: '実行中',
      Preview: 'プレビュー',
    },
    ConfirmModal: {
      UpdateResellerChargesTitle: 'リセラー手数料設定を更新',
      UpdateResellerChargesDetail:
        '選択した請求グループのリセラー手数料設定を更新しますか？',
      Cancel: 'キャンセル',
      YesConfirm: 'はい、確認',
    },
    WaveConfirmModal: {
      PublishSelectedTitle: '選択した請求書をWaveに公開',
      PublishSelectedDetail:
        '{{count}}件の選択した請求書をWaveに公開しますか？Waveで表示されるようになります。',
      UnpublishSelectedTitle: '選択した請求書をWaveから非公開',
      UnpublishSelectedDetail:
        '{{count}}件の選択した請求書をWaveから非公開にしますか？Waveで表示されなくなります。',
      PublishAllTitle: 'すべての請求書をWaveに公開',
      PublishAllDetail:
        'すべての{{count}}件の請求書をWaveに公開しますか？Waveで表示されるようになります。',
      UnpublishAllTitle: 'すべての請求書をWaveから非公開',
      UnpublishAllDetail:
        'すべての{{count}}件の請求書をWaveから非公開にしますか？Waveで表示されなくなります。',
      Cancel: 'キャンセル',
      YesPublish: 'はい、公開',
      YesUnpublish: 'はい、非公開',
      Publishing: '公開中...',
      Unpublishing: '非公開中...',
      InvoiceNotCreated: '一部の請求書がまだ作成されていません',
      RemoveInvalidItems:
        'Waveに公開する前に、作成されていない請求書を削除してください',
      CannotPublishAllUseSelected:
        '一部の請求書が準備できていないため、すべての請求書を公開できません。作成済みの請求書のみを選択するには「選択した項目を公開」を使用してください。',
    },
    ResellerChargesModal: {
      SaveChanges: '変更を保存',
      RevertToDefaultSettings: 'デフォルト設定に戻す',
      BillingGroupName: '請求グループ名',
      BillingGroupsSelected: '{{count}}件の請求グループが選択されています',
      ChangeSettingsDescription:
        '必要に応じて、請求グループのリセラー手数料設定または当月の為替レートを変更できます。',
      ResellerChargesSettings: 'リセラー手数料設定',
    },
    CreateInvoiceModal: {
      CreateInvoice: '請求書を作成',
      CreateInvoiceConfirmation:
        '選択した請求グループに対して{{vendors}}の請求書を作成しますか？',
      BillingGroupsSelected: '{{count}}件の請求グループが選択されています',
      CreateInvoicesFor: '{{date}}の請求書を作成',
      BillingGroupName: '請求グループ名',
      SelectVendorsDescription:
        '選択した請求グループに対して請求書を作成するベンダーを選択してください。',
      SelectVendors: 'ベンダーを選択',
      FinalizationNotSuccessful:
        '一部の請求グループのファイナライゼーションが成功していません',
      RemoveInvalidItems:
        '請求書作成前に、ファイナライゼーションが成功していない請求グループを削除してください',
    },
    CommonExchangeRateModal: {
      BillingGroupsSelected: '{{count}}件の請求グループが選択されています',
      UpdateConfirmation:
        '選択した請求グループの共通為替レートを更新しますか？',
    },
    Messages: {
      PopupBlockedError:
        'ポップアップがブロックされました。このサイトのポップアップを許可してください。',
      InvoicePreviewError: '請求書プレビューの表示エラー',
      InvoicePreviewLoadFailed: '請求書プレビューの読み込みに失敗しました',
      InvoiceCreateFailed: '{{vendor}}の請求書作成に失敗しました',
      ExchangeRateUpdated: '{{count}}グループの共通為替レートが更新されました',
      ExchangeRateUpdateFailed:
        '{{count}}グループの共通為替レートを更新できませんでした',
      InvoicePdfExportFailed: '請求書PDFのエクスポートに失敗しました',
      ResellerChargesUpdated: 'リセラー手数料設定が更新されました',
      ResellerChargesUpdateFailed: 'リセラー手数料設定を更新できませんでした',
      FinalizationNotSuccessful:
        '請求書を作成できません。請求書を作成する前に確定が成功している必要があります。',
      InvoiceNotCreated:
        'Waveに公開できません。Waveに公開する前に請求書が作成されている必要があります。',
      SomeInvoicesNotFinalized:
        '選択された請求グループの一部で確定が正常に完了していません。確定が成功した請求グループのみ請求書を作成できます。',
      SomeInvoicesNotCreated:
        '選択された請求書の一部がまだ作成されていません。作成済みの請求書のみWaveに公開できます。',
    },
    Toast: {
      MissingPreviewAll:
        'プレビューをダウンロードできません：{{count}}件の請求書にプレビューがありません。',
      MissingPreviewSelected:
        'プレビューをダウンロードできません：選択された{{count}}件の請求書にプレビューがありません。',
      MissingCreatedSelected:
        'プレビューをダウンロードできません：選択された{{count}}件の請求書がまだ作成されていません。',
      SkippedInvoices:
        '{{count}}件の請求書が作成されていないためスキップされました。',
    },
  },
};
