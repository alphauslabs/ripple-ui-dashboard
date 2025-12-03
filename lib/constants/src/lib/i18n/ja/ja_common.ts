import jaError from './ja_error';
import jaValidator from './ja_validator';
import jaNotification from './ja_notification';
import jaComponent from './component';
import jaBillinggroups from './ja_billinggroups';
import jaDashboard from './ja_dashboard';
import jaInvoices from './ja_invoices';
import { ja_costfinalization } from './ja_costfinalization';
import { currencyLangJa } from '../../currency';

export default {
  ...jaError,
  ...jaValidator,
  ...jaNotification,
  ...jaComponent,
  ...jaBillinggroups,
  ...jaDashboard,
  ...currencyLangJa,
  ...jaInvoices,
  ...ja_costfinalization,

  // Adjustment Entry Tab Labels (used by ButtonTab component)
  'all entries': 'すべてのエントリ',
  'auto adjust': '自動調整',
  'split upfront ri': 'RI前払い分割',
  'split upfront sp': 'SP前払い分割',

  // New Common messages. shared messageで使用する。
  Name: '名前',
  Length: '期間',
  Expire: '期限',
  'Billing Group': '請求グループ',
  'Billing Groups': '請求グループ',
  'Created date': '作成日',
  'Update date': '更新日',
  'Wave for Reseller': 'Wave for Reseller',

  // common
  null: '',
  Version: 'バージョン',
  'User name': 'ユーザー名',
  'Billing group id': '請求グループID',
  'Option Setting': 'オプション設定',
  'Billing group name': '請求グループ名',
  //'Billing group (Name/ID)': '請求グループ（名/ID）',
  //'Add billing group': '請求グループの追加',
  'Company name': '企業名',
  'Resource type': 'リソースタイプ',
  Cancel: 'キャンセル',
  Update: '更新する',
  'Delete billing group': '請求グループの削除',
  //'Edit billing group': '請求グループの編集',
  'Edit tag settings': 'タグ設定の編集',
  'Phone number': '電話番号',
  'e.g. : 03-0000-0000': '例）03-0000-0000',
  'Phone number value is invalid.': '電話番号を正しく入力してください',
  'Postal code': '郵便番号',
  'Street address': '会社住所',
  'Address name': '宛名',
  'Billing title': '請求書タイトル',
  'Invoice language': '請求書の言語',
  'Aggregation type': '集計タイプ',
  Currency: '支払いタイプ',
  'How to request support': 'サポート料請求方法',
  'Agency fee claim method': '代行手数料請求方法',
  'Agent fee (fixed)': '代行手数料（固定）',
  'Billing agent service calculation target': '請求代行サービス計算対象',
  'Subject to billing agency service': '請求代行サービス対象',
  'Claim proxy service calculation method': '請求代行サービス計算方法',
  'Change invoice setting': '請求書設定の変更',
  ATTENTION: '注意',
  //'Recalculate contact': '再計算の連絡',
  //'Contact for recalculation is complete.': '再計算の連絡が完了しました。',
  'Discount target': '値引き対象',
  'Discount calculation method': '値引き計算方法',
  'Sale tax': '消費税',
  'Report billing finalization': '請求データ確定の連絡',
  Save: '保存',
  Close: '閉じる',
  'Billing amount': '請求金額',
  'Support fee': 'サポート料',
  'Invoice number': '請求番号',
  'Updated at': '最終作成更新日時',
  'Sales tax rate percent': '消費税率（％）',
  'Substitution fee percent': '代行手数料（%）',
  'Misc.': 'その他費用',
  Download: 'ダウンロード',
  Export: 'エクスポート',
  'Exporting...': 'エクスポート中...',
  'Billing group': '請求グループ',
  account_name: 'アカウント名',
  account_id: 'アカウントID',
  Service: 'サービス',
  Action: 'アクション',
  instance_type: 'インスタンスタイプ',
  Family: 'ファミリー',
  'Unused usage quantity': '未使用の時間',
  Region: 'リージョン',
  'Payer account': '支払いアカウント',
  'Search ri': 'リザーブドインスタンス',
  'Add account': 'アカウントの追加',
  'Delete payer account': '支払いアカウントの削除',
  //'Add payer account': '支払いアカウントの追加',
  'S3 bucket registration information': 'S3バケット登録情報',
  'S3 bucket': 'S3バケット',
  Prefix: 'プレフィックス',
  'Report name': 'レポート名',
  //'Updated information': '更新情報（対象月 - 更新日時）',
  'Role ARN': 'IAMロールARN',
  Registered: '登録済み',
  Unregistered: '未登録',
  //'S3 bucket registered': 'S3バケット登録済み',
  //'S3 bucket unregistered': 'S3バケット未登録',
  'Register / change S3 bucket': 'S3バケットの登録/変更',
  //'Register S3 bucket': 'S3バケットを登録する',
  //'S3 bucket has been registered.': 'S3バケットを登録しました。',
  'Digit rounding': '端数丸め処理',
  // 'Consumption tax concentration level': '消費税集約レベル', // コメントされてる
  'Round up': '切り上げ',
  'Round down': '切り捨て',
  Rounding: '四捨五入',
  'Billing group unit': '請求グループ単位',
  'Account unit': 'アカウント単位',
  'Service unit': 'サービス単位',
  'Change this invoice setting': '請求書設定を変更する',
  'Changed invoice setting.': '請求書の設定を変更しました。',
  'Email address': 'メールアドレス',
  'Not been set.': '設定されていません。',
  'Change password': 'パスワードの変更',
  'Delete account': 'アカウントの削除',
  'Change the password': 'パスワードを変更する',
  'Automatically generate passwords': 'パスワードを自動で生成する',
  'Delete the above account.': '上記のアカウントを削除します。',
  'This operation can not be canceled.': 'この操作は取り消しができません。',
  'Delete the account': 'アカウントを削除する',
  'Size flexible': 'サイズフレキシブル',
  'Payer account name': '支払いアカウント名',
  'Deleted account': 'アカウントを削除しました。',
  'Added account': 'アカウントを追加しました。',
  Account: 'アカウント',
  account: 'アカウント',
  //'Create invoice': '請求書の作成',
  All: 'すべての',
  Reset: 'リセット',
  'Show 25 items': '25件表示',
  'Show 50 items': '50件表示',
  'Show 100 items': '100件表示',
  'Show 150 items': '150件表示',
  'Show 200 items': '200件表示',
  'Show all items': 'すべて表示',
  Remark: '備考',
  'Conversion rate setting': '為替レート設定',
  Change: '変更',
  Edit: '編集',
  Premium: '割増',
  Discount: '割引',
  'Setting per service': 'サービス毎の設定',
  'Calculation target': '計算対象',
  //'CSV download': 'CSVダウンロード',
  'Please enter a display name.': '表示名を入力してください。',
  'Please enter your password.': 'パスワードを入力してください。',
  'Please enter your e-mail address.': 'メールアドレスを入力してください。',
  //'Enter your {number} digit Payer account ID.':
  //  '{number}桁の支払いアカウントIDを入力してください。',
  //'Enter your 12 digit AWS account ID.': '12桁のAWSアカウントIDを入力してください。',
  //'Both discount rate and premium rate {rangeMin} ~ {rangeMax}. You can specify in the range of. (unit:%)':
  //  '割引率・割増率ともに<strong>{rangeMin}〜{rangeMax}</strong>の範囲で指定ができます。（単位：%）',
  'Exchange rate': '為替レート',
  'Master exchange rate': 'マスターの為替レート',
  'Reserved Instances': 'コストマネジメント',
  'Cost Management': 'コストマネジメント',
  'Billing statement': '請求明細',
  'You can specify whether to display the Reserved Instances page.':
    '「リザーブドインスタンス」ページの表示・非表示を設定できます。',
  'You can specify whether to show or hide the Usage Detail page.':
    '「ご利用明細」ページの表示・非表示を設定できます。',
  'Please enter the billing group name.': '請求グループ名を入力してください。',
  'Please enter your company name.': '企業名を入力してください。',
  'Updated billing group information.': '請求グループ情報を更新しました。',
  'Discount rate percent': '値引率（％）',
  'Support discount fee percent': 'サポート料の割引率（％）',
  Support: 'サポート',
  'Billing agency': '請求代行',
  'Set an 8- to 32-character password that combines letters, numbers, and symbols.':
    '英字、数字、記号を組み合わせた8文字から32文字のパスワードを設定してください。',
  Status: 'ステータス',
  Required: '必須',
  'This input is Required.': 'この項目は必須です。',
  //'Enable setting': '設定を有効にする',
  JPY: '日本円',
  USD: '米ドル',
  jpy: '日本円',
  usd: '米ドル',
  '¥{jpy}/$1': '{jpy}円/1ドル',

  'Change settings': '設定を変更',
  'Changed the setting.': '設定を変更しました。',
  Notes: 'メモ',
  //Expire: '期限',
  Scope: 'スコープ',
  //'Access to Wave': 'Waveの閲覧',
  'E-mail': 'Eメール',
  'Project code': 'プロジェクトコード',
  Remarks: '備考欄',
  not_created: '未作成',
  Created: '作成済み',
  Preview: 'プレビュー中',
  Published: '公開済み',
  'This email is exists': 'このメールアドレスはすでに登録済みです',
  Plan: 'プラン',
  'Change plan': 'プランの変更',
  'Target billing group': '対象の請求グループ',
  Tag: 'タグ',
  tag: 'タグ',
  'Payer account ID': '支払いアカウントID',
  Recommendation: 'レコメンデーション',
  Cost: 'コスト',
  'Password changed.': 'パスワードを変更しました。',
  'Please enter the {name}.': '{name}を入力してください。',
  'Please enter range characters.': '{min}文字〜{max}文字で入力してください。',
  'Please enter {min}-{max} characters.':
    '{min}文字〜{max}文字で入力してください。', //全てこのKeyに直す
  'Within any characters': '{count}文字以内',
  'Please enter within any characters.': '{count} 文字以内で入力してください。',
  'Please enter within {count} characters.':
    '{count} 文字以内で入力してください。', //全てこのKeyに直す
  //'Please enter within 20 characters.': '20文字以内で入力してください。',
  'Please enter within 40 characters.': '40文字以内で入力してください。',
  'Please enter within 60 characters.': '60文字以内で入力してください。',

  'Payment option': '支払いオプション',
  Back: '戻る',
  Logout: 'ログアウト',
  'Register Exchange Rate': '為替レートの登録',
  'Dashboard graph': 'ダッシュボードグラフ',
  'Display the entire monthly usage trend on the dashboard.':
    'ダッシュボードに全体の月中利用推移を表示します。',
  'Account graph': 'アカウントグラフ',
  'Display monthly usage trend on account report.':
    'アカウントのレポートに月中利用推移を表示します。',
  'Account budget': 'アカウント予算',
  'Enable budget notification settings on an account basis.':
    'アカウント単位で予算通知設定を使用可能にします。',
  //'Cloud vendor': 'クラウドベンダー',
  //'Subscription ID': 'サブスクリプションID',
  //'Please Enter your Microsoft Azure Subscription ID.':
  //  'Microsoft AzureのサブスクリプションIDを入力してください。',
  'Please Enter your Microsoft Azure payer account ID.':
    'Microsoft Azureの支払いアカウントIDを入力してください。',
  'Purchase date': '購入日',
  'Account / Customer': 'アカウント / お客様',
  'Organize invoices': '請求書をまとめる',
  'Combine billing for each cloud vendor into a single bill.':
    '各クラウドベンダーの請求を1枚の請求書にまとめます。',
  'Error Occurred': 'エラーが発生しました',
  'Revert to billing group settings': '請求グループの設定に戻す',
  'Not supported yet.': 'この機能はまだサポートしていません。',

  // COMPONENTS
  // ---CustomDataTable - Details---
  'Support cost of calculation target': 'サポート費の計算対象',
  'Substitution fee': '代行手数料',
  'Setting discount and premium rates for each account':
    'アカウント毎の割引・割増率の設定',
  'Reflecting settings': '設定の反映',
  'Bulk discount and premium rate': '一括割引・割増率',
  'Individual service settings': '個別サービスの設定',
  'Discount rate': '値引率',
  'Usage fee subject to discount': '値引き対象の利用料',
  Or: 'または',
  '(Fixed)': '(固定)',
  'Corporate intelligence': '企業情報',
  'Addressed to': '宛',
  'Invoice details': '請求書詳細',
  '{type} are enabled. Discount setting for Cloud service usage fee will use the amount in {type}, thus setting in this section will be ignored.':
    '{type}による値引設定が有効になっています。クラウドサービス利用料に対する値引の設定は{type}で設定した値が優先され、ここでの設定は無効になります。',
  'Account setting': '「アカウントの設定」',
  'Batch setting': '「一括設定」',
  'Check accounts': 'アカウントを確認',
  'Account Name / ID': 'アカウント名/ID',

  Details: '詳細',
  'Creation date and time': '作成日時',
  // 'Download date': 'ダウンロード日', // コメントされてる
  'Registered account': '登録アカウント',
  'Number of accounts': 'アカウント数',
  'Account not registered.': 'アカウントが登録されていません。',
  '1 dollar': '1ドル',
  Yen: '円',

  // ---CustomDataTable - Filters---
  'All instance types': 'すべてのインスタンスタイプ',

  'Add filter': 'フィルターを追加',

  // ---MultipleSelector---
  'Tag value': 'タグバリュー',
  'No data.': 'データがありません。',
  'Active tag': 'アクティブなタグ',

  // ------ServiceRateSetting------
  Uniformity: '一律',
  'Do you want to reset the batch settings?': '一括の設定をリセットしますか?',
  'To reset': 'リセットする',
  //'If you want to change the discount rate and premium rate for each account, please enable the setting.':
  //  'サービス毎で割引率・割増率を変更する場合、設定を有効にしてください。',
  //'Allow setting per account': 'アカウント毎の設定の許可',
  //'Allows you to set discount / premium of service for each account.':
  //  'サービスの割引・割増をアカウント毎に設定できるように許可します。',
  //'Setting permission': '設定許可',
  //'Setting of collective discount rate and collective premium rate': '一括割引率・一括割増率の設定',
  //'Setting up individual service': '個別サービスの設定',
  //'In addition to batch setting, you can set for each service. If you set it separately, the settings for each service will take precedence.':
  //  '一括の設定以外にサービス毎での設定ができます。個別に設定した場合はサービス毎の設定が優先されます。',
  //'Changed the setting of the service.': 'サービスの設定を変更しました。',
  //'Service setting failed.': 'サービス設定に失敗しました。',

  Delete: '削除',
  'Do you want to delete the service settings?':
    'サービスの設定を削除しますか？',
  'To delete': '削除する',

  'Add to': '追加',
  'Add service': 'サービスを追加',

  // --------uikit---------
  'Setting value': '設定時の値',
  'Invoice value': '請求書の値',
  'Please select': '選択してください',

  //  LAYOUTS
  // --------Header---------
  'There is no new notification.': '新しい通知はありません。',
  'Mark all as read': 'すべて既読にする',

  'Sub user management': 'サブユーザーの管理',
  Documentation: 'ドキュメント',

  // --------Calculations status---------
  //'View Batch Calculation': '集計ステータス',
  //preparing: '準備中',
  //running: '集計中',
  //checking: '確認中',
  //done: '完了',
  //error: 'エラー',
  //'Batch calculation failed.': 'バッチの計算に失敗しました。',
  //'The team is currently fixing the problem.': 'サポートチームが問題を調査中です。',
  //'Customer Support is currently reviewing the completed calculation.': '集計結果を確認中です。',

  // --------Navigation---------
  Dashboard: 'ダッシュボード',
  'Cost finalization': 'コスト確定',
  'Cost Forecast': 'Cost Forecast',
  'Coverage Ratio': '適用比率グラフ',
  'Budgets and forecasts': '予算管理・予測',
  'Budget Configurations': '予算設定',
  'Collapse sidebar': 'サイドバーを折りたたむ',
  'Expand sidebar': 'サイドバーを展開',
  Invoices: '請求書',
  'Invoice templates': '請求設定テンプレート',
  'Invoice recalculation summary': '再計算請求データ一覧',
  'RI Management': 'RI管理',
  'RI Utilization': 'RI適用率',
  'RI Recommendation': 'RIレコメンデーション',
  'RI Unused': '未使用のRI',
  'Recommendation (BETA)': 'レコメンデーション（BETA)',
  'Right Sizings': 'サイズ最適化',

  'Account and Group': 'アカウントとグループ',
  //'Billing Group': '請求グループ',
  //'Wave for Reseller': 'Wave for Reseller',
  'RI Marketplace': 'マーケットプレイス',
  'Spot History': 'スポットヒストリー',
  Tools: 'ツール',
  Preferences: '環境設定',
  'User Setting': 'ユーザー設定',
  'Identity Provider Setting': 'IdP 設定',
  'Notification Setting': '通知設定',
  'Payer Account Setting': '支払いアカウント設定',
  'Invoice Setting': '請求書設定',

  // --------Lib---------
  // upfrontType
  'Standard 1 year Partial upfront': 'スタンダード１年間・一部前払い',
  'Standard 1 year Full upfront': 'スタンダード１年間・全額前払い',
  'Standard 1 year No upfront': 'スタンダード１年間・前払いなし',
  'Standard 3 years Partial upfront': 'スタンダード３年間・一部前払い',
  'Standard 3 years Full upfront': 'スタンダード３年間・全額前払い',
  'Standard 3 years No upfront': 'スタンダード３年間・前払いなし',
  'Convertible 1 year Partial upfront': 'コンバーティブル１年間・一部前払い',
  'Convertible 1 year Full upfront': 'コンバーティブル１年間・全額前払い',
  'Convertible 1 year No upfront': 'コンバーティブル１年間・前払いなし',
  'Convertible 3 years Partial upfront': 'コンバーティブル３年間・一部前払い',
  'Convertible 3 years Full upfront': 'コンバーティブル３年間・全額前払い',
  'Convertible 3 years No upfront': 'コンバーティブル３年間・前払いなし',
  'Standard 1 year Medium': 'スタンダード１年間・中度使用',
  'Standard 1 year Heavy': 'スタンダード１年間・重度使用',
  'Standard 3 years Medium': 'スタンダード３年間・中度使用',
  'Standard 3 years Heavy': 'スタンダード３年間・重度使用',
  'Convertible 1 year Medium': 'コンバーティブル１年間・中度使用',
  'Convertible 1 year Heavy': 'コンバーティブル１年間・重度使用',
  'Convertible 3 years Medium': 'コンバーティブル３年間・中度使用',
  'Convertible 3 years Heavy': 'コンバーティブル３年間・重度使用',

  //word
  'Uniform%': '一律%',
  Developer: '開発者',
  Business: 'ビジネス',
  Enterprise: 'エンタープライズ',
  'Enterprise On-Ramp': 'エンタープライズ On-Ramp',
  'Account-based support plan': 'アカウント毎にサポートプランを設定',
  'Percentage of usage fee': '利用料に対する割合',
  'No Support': 'No Support',
  'Developer (AWS fee table)': '開発者',
  'Business (AWS fee table)': 'ビジネス',
  'Enterprise (AWS tariff table)': 'エンタープライズ',
  'Fixed fee': '固定費',
  Automatic: '自動',
  'Percentage to usage fee': '利用料に対する割合',
  'Percentage to usage fee (%)': '利用料に対する割合（%）',
  'Percentage or fixed amount, whichever is greater':
    '割合と固定金額のいずれか大きい方',
  'Account summary': 'アカウント集計',
  'Tag aggregation': 'タグ集計',
  'Cloud usage fee only': 'クラウド利用料のみ',
  'Cloud usage fee + Maintenance service': 'クラウド利用料＋サポート料',
  'Subtotal (usage fee + billing agency service) discounted':
    '小計（利用料＋請求代行サービス）から値引',
  'Discount from usage fee': '利用料から値引',
  'Apply before discount': '値引き前を適用',
  'Apply after discount': '値引き後を適用',
  'Account totalization': 'アカウント合算',
  'Marketplace Fee': 'Marketplace Fee',
  'RI Upfront Fee': 'RI Upfront Fee',
  'Support Fee': 'サポート費用',
  'Support rate': 'サポートレート',
  'Domain Name Fee': 'Domain Name Fee',
  'Other Fees': 'Other Fees',
  'Price table': '利用料テーブルから算出',
  Item: '項目',
  //'Any items': '最大{count}項目',
  //'Unit cost': '単価',
  // Quantity: '個数',
  // Total: '合計',
  //'Add item': '追加する',

  percent: 'パーセント%',

  //  PAGES
  // --------Account---------
  // AccountManagement
  'Search account': 'アカウントを検索',
  'Edit account': 'アカウントを編集',
  'Please enable settings from environment setting':
    '環境設定から設定を有効にしてください',
  // 'View reports': 'レポートの閲覧', //コメントされてる
  'Login information is missing. Please create a user from Wave for Reseller.':
    'ログイン情報がありません。Wave for Resellerよりユーザーを作成してください。',

  //'Display account name': '表示アカウント名',
  //'AWS account ID': 'AWSアカウントID',
  //'Add the account': 'アカウントを追加',
  'Please select a billing group.': '請求グループを選択してください。',
  //'Please enter your AWS account.': 'AWSアカウントを入力してください。',
  //'Please enter your 12 digit ID.': '12桁のIDを入力してください。',
  //'Please select a payer account.': '支払いアカウントを選択してください。',
  //'Customer ID already exists.': 'このアカウントIDはすでに登録済みです',

  'Account edit': 'アカウントの編集',
  'Account display name': 'アカウント表示名',
  Memo: '備考',
  'Update account information': 'アカウント情報を更新',
  'Account information updated.': 'アカウント情報を更新しました。',

  'Set discount / premium rate for each account':
    'アカウント毎の割引・割増率の設定',

  // -------Auth-------
  Login: 'ログイン',
  Password: 'パスワード',
  'Please enter your user ID.': 'ユーザーIDを入力してください。',
  'Failed to login, please check your username and password.':
    'ログインに失敗しました。ユーザー名とパスワードをご確認ください。',

  // -------BillingGroups-------
  // Management
  'Search billing groups': '請求グループを検索...',
  'Select resource type': 'リソースタイプを選択',
  'Select vendors': 'ベンダーを選択',
  'AWS setting': 'AWS設定',
  'AZURE setting': 'AZURE設定',

  'You can specify any billing group ID. It is also possible to generate ID automatically.':
    '任意の請求グループIDを指定できます。IDを自動で生成することも可能です。',
  //'Automatically generate ID': 'IDを自動生成する',
  'Registration billing group': '請求グループを登録',
  'Please enter a billing group ID.': '請求グループIDを入力してください。',
  'Added billing group.': '請求グループを追加しました。',

  'Delete the above billing group.': '上記の請求グループを削除します。',
  'Delete this billing group': '請求グループを削除する',
  'Deleted billing group': '請求グループを削除しました。',

  'Update billing group information': '請求グループ情報を更新',

  'Support percent': 'サポート（％）',

  'Changed the setting': '設定を変更しました',
  'If exchange rate has already been set': '為替レートをすでに設定済みの場合',
  'It is necessary to reset the invoice from "Invoicing page".':
    '「請求書作成ページ」より請求書の再設定が必要です。',

  'Update tag settings': 'タグの設定を更新',

  //'The billing group with the same payer account will also be recalculated.':
  //  '同じ支払いアカウントを持つ請求グループも再計算されます。',

  'Basic information': '基本情報',
  'Resource setting': 'リソース設定',
  'Free format setting': 'その他費用',

  Others: 'その他',
  //'Select account': 'アカウントの選択',
  //'Selected account(s)': '選択中のアカウント',
  'Select tag': 'タグの選択',
  'Supported only AWS': 'AWSのみサポート',
  'Selected resources to include in billing group':
    '請求グループに含める対象のリソース',
  'Include untagged resources': 'タグのついていないリソースを含める',
  'Add tags': 'タグの追加',
  'Add tag': 'タグを追加',
  'Search tag': 'タグを検索',
  'Tag does not exist.': 'タグがありません。',
  'Target tag does not exist.': '対象のタグがありません。',
  'You can add tags to combine with "AND".':
    '「AND」で結合するタグを追加できます。',
  'Tag to remove': '削除するタグ',
  'Remove tag': 'タグを削除します',
  'Resource allocation': 'リソースの割り当て',
  'Set resource amount': 'リソースの割合を設定',
  'Automatically allocated according to usage fee':
    '利用料に応じて自動的に割り振る',
  '{number}% of resources are already allocated to other billing groups.':
    '{number}%のリソースが、すでに他の請求グループに割り当てられています。',
  'Can be set from $0.01 to $10,000,000':
    '0.01ドル〜10,000,000ドルまで設定できます',
  Remaining: '残り',
  'Support fee setting': 'サポート設定',
  'Discount setting': '値引き設定',
  //'Confirm the settings': '設定内容の確認',
  'Create billing group': '請求グループを作成する',
  'Creating billing group...': '請求グループを作成中...',
  'Billing group created': '請求グループを作成しました',
  'Failed to create billing group': '請求グループの作成に失敗しました',
  'Save settings': '設定を保存する',
  Confirm: '確定',

  // -------Custom fields-------
  'Custom fields': 'カスタムフィールド',
  'Field name': 'フィールド名',
  'You can set up to {number} custom fields. The set field can be added as a column to the CSV of the billing group.':
    '最大{number}個のカスタムフィールドを設定できます。設定したフィールドは請求グループのCSVにカラムとして追加することができます。',
  'Create new custom field': '新しいフィールドの作成',
  'Custom field created.': 'カスタムフィールドを作成しました。',
  'Custom field updated.': 'カスタムフィールドを更新しました。',
  'Add custom field': 'カスタムフィールドの追加',
  'Add custom fields': 'カスタムフィールドを追加する',
  'Add new custom field': 'カスタムフィールドを追加',
  'Add field(s)': 'フィールドを追加する',
  'Select custom field(s)': '追加するカスタムフィールドの選択',
  'Delete field': 'フィールドを削除',
  'Delete custom field': 'カスタムフィールドを削除',
  'Deleted custom field.': 'カスタムフィールドを削除しました。',
  'Add a custom field to the billing group.':
    '請求グループにカスタムフィールドを追加します。',
  'The added custom field will be displayed in the billing group details and billing group CSV data.':
    '追加したカスタムフィールドは請求グループの詳細、および請求グループCSVデータに表示されます。',
  'There are no custom fields to add.':
    '追加できるカスタムフィールドがありません。',
  'Create a custom field from Preferences> Billing group settings.':
    '環境設定 > 請求グループ設定よりカスタムフィールドを作成してください。',
  'This field name already exists. Set another field name.':
    'フィールド名がすでに存在しています。他のフィールド名を設定してください。',

  // -------Project-------
  Project: 'プロジェクト',
  'Project description': 'プロジェクトの説明',
  'Project ID': 'プロジェクトID',
  'Add project': 'プロジェクトを作成',
  'Add the project': '新しいプロジェクトを作成する',
  'Creating project...': 'プロジェクトを作成しています...',
  'Created a new project.': '新しいプロジェクトを作成しました。',
  'Edit project': 'プロジェクトを編集',
  'Update project': 'プロジェクトを更新する',
  'Delete project': 'プロジェクトを削除',
  'Delete this project': 'プロジェクトを削除する',
  'Search project': 'プロジェクトを検索',
  Label: 'ラベル',
  Total: '合計',
  Profit: '利益',
  'Profit rate': '利益率',
  Stock: '仕入',
  'Stock cost': '仕入金額',
  Sales: '売上',
  //'Sales amount': '売上金額',
  '(Total/Details)': '（合計/内訳）',
  'Currency type': '通貨タイプ',
  'Updated project.': 'プロジェクトを更新しました。',
  'Delete the above project.': '上記のプロジェクトを削除します。',
  'Deleted project.': 'プロジェクトを削除しました。',
  'Please enter a project code.': 'プロジェクトコードを入力してください。',
  'Please enter a label.': 'ラベルを入力してください。',
  'You can only use letters, numbers, _ (underscore) and -(hyphen).':
    '半角英数字・ハイフン（-）・アンダースコア（_）が使用可能です。',
  'This project code is already exist.':
    'すでに存在するプロジェクトコードは使用できません。',

  // -------QR Code-------
  Configured: '設定済み',
  'QR Code': '請求用QRコード',
  'QR Code setting': '請求用QRコードの設定',
  'Update QR Code': 'QRコードを更新する',
  'Updated QR Code': 'QRコードを更新しました',
  'Please press the "Update QR Code" button to update.':
    '必ず「QRコードを更新する」ボタンを押して更新してください。',
  'Unsupported file type. (Only {type})':
    'サポートされていないファイルタイプです。({type}のみ)',
  'Remove file': 'ファイルを削除',
  'QR Code image': 'QRコード画像',
  'Drop the {title} file {supported} file here, or click to upload.':
    '{title}ファイル{supported}をここにドロップするか、クリックしてアップロードします。',

  // -------Dashboard-------
  //'Billing finalization reported': '確定連絡済み',

  //'Final contact has been completed': '確定連絡が完了しました',
  //'Please check whether each payer account has received the AWS invoice email.':
  //  '各請求アカウントにAWS請求メールが届いているか確認してください。',
  //'Please check whether each payer account has received the Azure invoice email.':
  //  '各請求アカウントにAzure請求メールが届いているか確認してください。',
  'Report finalization': '請求確定',

  // Revenue
  "Last month's Revenue": '先月の売上',
  "Last month's Cost": '先月のコスト',
  "Last month's Profit": '先月の利益',
  'Revenue Breakdown': '利益の内訳',

  // -------Error-------
  'You do not have access': 'アクセス権限がありません',
  'Access is not allowed.': 'アクセスが許可されていません。',

  'This page does not exist': 'このページは存在しません',

  // -------Invoice-------
  // ExchangeSetting
  'Search Exchange Rate': '為替レートを検索',
  Month: '月',
  Year: '年',

  //'Set month': '設定する月',
  //'Please enter exchange rate.': '為替レートを入力してください。',
  Register: '登録する',
  'Registered Exchange Rate.': '為替レートを登録しました。',

  // ManagementInvoice
  'Search invoice': '請求書を検索',
  'Recreate invoice': '請求書の再作成',
  'Confirmation of billing statement': '請求明細の確認',

  'There is a difference between the invoice setting data and the contents of the invoice. Please re-create the invoice.':
    '請求書設定データと請求書の内容に相違があります。請求書を再度作成してください。',

  'Check invoice': '請求書を確認',
  Mismatch: 'データ相違あり',

  'Invoice setting': '請求書設定',
  //'Invoice creation': '請求書作成',
  //'Create for selected items': '選択中アイテムのみ作成',
  //'Bulk create for all items': 'すべての請求書を作成',
  //'Bulk download': '一括ダウンロード',

  //'Please create an "exchange rate" to create an invoice.':
  //  '請求書を作成するためには「為替レート」を登録してください。',
  //'Exchange rate setting': '為替レートの設定',

  //'You can download the CSV by selecting from CSV format of Account Unit, Account / Service Unit.':
  //  'アカウント単位、アカウント/サービス単位のCSVフォーマットから選択してCSVをダウンロードすることができます。',
  //'Download format': 'ダウンロードフォーマット',
  //'CSV does not exist. You can download from here only if you have created the invoice batch creation.':
  //  'CSVが存在しません。請求書一括作成を実行した場合のみ、ここからダウンロードすることができます。',
  //'Account / service unit': 'アカウント/サービス単位',
  //'Tag unit': 'タグ単位',

  'Support fee (%)': 'サポート費（%）',
  'Support fee (fixed)': 'サポート費（固定）',
  'Support maintenance service Calculation target': 'サポート料計算対象',
  Other: 'その他',

  //'Bulk invoice creation': '請求書一括作成',
  //'Create invoice(s).': '請求書を作成します。',
  //'Quantity to create: ': '作成数: ',
  //'Create invoices for all billing groups. The creation may take several minutes.':
  //  '全ての請求グループの請求書を作成します。作成には数分かかる場合があります。',
  //'Create a batch': '一括作成する',

  'Your invoice has been created.': '請求書が作成されました。',

  'Batch change invoice settings': '請求書設定の一括変更',
  'Content change item': '内容変更項目',
  'Show All': 'すべて表示',
  'Reduce the display': '表示を減らす',
  'Billing method': '請求方法',
  'Billing agent fee': '請求代行手数料',
  'Method of calculation': '計算方法',
  'Service charge percent': '手数料 (%)',
  'Fee (fixed)': '手数料（固定）',
  'Account calculation method': 'アカウントの計算方法',
  Target: '対象',

  'AWS invoice total (purchase)': 'AWS請求総額（仕入）',
  'Invoice total (sales)': '請求総額（売上）',

  //'Request creation of bulk invoice PDF': '一括請求書PDFの作成をリクエスト',
  'Download bulk PDF': '一括PDFのダウンロード',
  //'You can download the invoice from the button below.':
  //  '下のボタンより請求書のダウンロードができます。',
  //'[Attention] Due to Ripple specifications, the billing date will be the execution date of the batch PDF creation request.':
  //  '[注意] Rippleの仕様上、請求日の記載は一括PDF作成リクエストの実行日になります。',
  //'PDF has not been created. Depending on the number of billing groups, PDF creation can take an hour or more.':
  //  'PDFが作成されていません。請求グループの数により、PDF作成に1時間もしくはそれ以上かかる場合があります。',
  'AWS setting is common.': 'AWSの設定が共通の設定となります。',
  'Changing the exchange rate is not supported.':
    '為替レートの変更はサポートしていません。',
  'Set to 0 to use the master exchange rate.':
    'マスターの為替レートを使用する場合は0を設定してください。',
  'The following billing groups do not have exchange rates set. Create an invoice using the master exchange rate.':
    '下記の請求グループには為替レートが設定されていません。マスターの為替レート使用して請求書を作成します。',
  //'Cloud vendors': '対象のクラウドベンダー',
  //'Checking exchange rate settings...': '為替レートの設定を確認中...',
  //'Checking configuration data...': '設定データをチェック中...',
  //'Creating invoice...': '請求書を作成中...',
  'An error occurred while checking data.':
    'データのチェック中にエラーが発生しました。',
  'No graph data. Try updating the date range.':
    'グラフが見れない状態です。　データ幅を更新してみてください。',

  'Request failed.': 'リクエストに失敗しました。',
  //'Request completed.': 'リクエストが完了しました。',
  //'Requested a batch PDF creation of invoices. When the creation is completed, an email will be sent to the registered Email address. You can download the batch PDF from the URL in the email. Depending on the number of billing groups, PDF creation may take an hour or more.':
  //  '請求書の一括PDF作成をリクエストしました。作成が完了すると登録したEmailアドレスにメールが届きます。メールに記載のURLより一括PDFをダウンロードしてください。請求グループの数により、PDF作成に1時間もしくはそれ以上かかる場合があります。',
  //'In addition, due to the specifications of Ripple, the billing date is the execution date of the batch PDF creation request.':
  //  'また、Rippleの仕様上、請求日の記載は一括PDF作成リクエストの実行日になります。',

  // Recalculations
  'Search for lump sum': '一時金を検索',
  Type: 'タイプ',
  Description: '説明',
  Amount: '金額',
  'Duty free': '免税',
  'Fee type': 'Feeタイプ',

  //'Operation method: After selecting the fee to be applied, execute from the action button.':
  //  '操作方法：適用させたい一時金を選択後、アクションボタンから実行してください。',
  //'Not applied': '未適用',
  //Applied: '適用済み',

  'Select the data selected in the following month':
    '下記の月に選択したデータを含める',
  'Do not include selected data in the following month':
    '下記の月に選択したデータを含めない',
  'Change exchange rate': '為替レート変更する',
  'Duty-free setting': '免税設定',
  'Make the selected item unapplied.': '選択したアイテムを未適用にします。',
  'Selected items': '選択したアイテム',
  'There are no selected items.': '選択されたアイテムがありません。',
  Run: '実行する',
  'Changed the setting of temporary money data.':
    '一時金データの設定を変更しました。',

  // Invoice templates
  'Template name': 'テンプレート名',
  'Search invoice templates': 'テンプレートの検索',
  'Edit template': 'テンプレートの編集',
  'Delete template': 'テンプレートの削除',
  //'Add invoice template': 'テンプレートの作成',
  //'Template setting': 'テンプレート設定',
  'Connected billing group': '対象の請求グループ',
  'Billing group setting': '請求グループ設定',
  //'No billing group has been set.': '請求グループが設定されていません。',
  'No billing groups.': '請求グループがありません。',
  //'Selected billing group': '選択中の請求グループ',
  'Creating template...': 'テンプレートを作成中...',
  'Template created.': 'テンプレートを作成しました。',
  'Creating a template failed.': 'テンプレートの作成に失敗しました。',
  //'Editing the template failed.': 'テンプレートの変更に失敗しました。',
  'Deleting the template failed.': 'テンプレートの削除に失敗しました。',
  'Used in {number} billing groups.':
    '{number}つの請求グループで使用されています。',
  'Select template': 'テンプレートを選択してください',

  // -------ReservedInstance-------
  // Purchased
  Moved: '移動済み',
  'Active RI': 'アクティブなRI',
  Expired: '期限切れ',
  'RI edit': 'RIの編集',
  Rollback: '変更を戻す',
  Quantity: '数量',
  'RI status': 'RIの状態',
  Original: 'オリジナル',
  Changed: '変更済',

  'RI Details': 'リザーブドインスタンス詳細',
  'Upfront value': '前払い金額',
  'Original account ID': '移動元のアカウントID',

  'Move Reserved Instance': 'リザーブドインスタンスを移動する',
  'Specify the account ID of the move destination.':
    '移動先のアカウントIDを指定してください。',
  'Specify the number of Reserved Instances to move.':
    '移動するリザーブドインスタンスの数を指定してください。',
  'Maximum number of movable': '移動可能数最大',
  'Move count': '移動数',
  Moving: '移動する',
  'The RI move is complete.': 'RIの移動が完了しました。',

  'Return Reserved Instance': 'リザーブドインスタンスを戻す',
  From: '移動元',
  To: '移動先',
  'Revert this Reserved Instance change.':
    'このリザーブドインスタンスの変更を元に戻す。',
  'Revert change': '変更を戻す',
  'Changed back': '変更を戻しました',

  // Recommendation
  // Conditions
  Class: 'クラス',
  Term: '期間',
  Standard: 'スタンダード',
  Convertible: 'コンバーティブル',
  standard: 'スタンダード',
  convertible: 'コンバーティブル',
  'All Upfront': '全額前払い',
  'Partial Upfront': '一部前払い',
  'No Upfront': '前払いなし',
  '1 year': '1年',
  '3 years': '3年',
  '1yr': '１年間',
  '3yr': '３年間',

  'Reduction cost': '削減コスト',
  'Reduction rate': '削減率',

  'Instance details': 'インスタンス詳細',

  'On demand cost': 'オンデマンドコスト',
  'Discounted cost': '削減後のコスト',
  'Average monthly discounted cost': '月平均削減コスト',
  'Average yearly discounted cost': '年間削減コスト',

  // Utilization
  'Occupancy rate': '稼働率',

  'Availability zone': 'アベイラビリティゾーン',
  'Total uptime': '総稼働時間',
  // 'Application rate': '適用率', // コメントされてる

  // Savings Plans
  'Savings Plans': 'Savings Plans',
  Commitment: 'コミットメント',
  'Instance Family': 'インスタンスファミリー',
  'Upfront Cost': '前払いコスト',
  'Monthly Recurring Charges': '毎月の定額料金',
  'Purchase term': '期間',
  'Active SP': 'アクティブなSP',
  'Search savings plan type': 'Savings Planを検索',
  'EC2 Instance on': 'EC2 インスタンス',
  Compute: 'コンピューティング',
  Hour: '時間',
  hrs: '時間',
  Day: '日',
  'Account name': 'アカウント名',
  'Account ID': 'アカウントID',
  EC2InstanceSavingsPlans: 'EC2 Instance',
  ComputeSavingsPlans: 'Compute',

  // -------Settings-------
  // InvoiceSetting
  // InvoiceSetting - BasicSetting
  'Basic setting': '基本設定',

  'Please select fractional part rounding method.':
    '小数点の端数丸め処理方法を選択してください。',
  'Allocation settings for untagged resources':
    'タグの付いていないリソースの割り振り設定',
  'Automatically allocate according to usage fee':
    '利用料に応じて自動で割り振る',
  'Manually set the allocation ratio': '割り振る割合を手動で設定する',
  // 'Please select consumption tax consolidation level.':
  //   '消費税集約レベルを選択してください。', // コメントされてる

  // InvoiceSetting - Appearance
  Appearance: '表示設定',
  'Due Date': 'お支払い期限',
  'Month of Due Date': 'お支払い期限月',
  'Day of Due Date': '期限日',
  'Set the month, from when the invoice is created, it will be due.':
    '請求書を作成した日付から当月、翌月、翌々月を設定することができます。',
  'If you set 30 or 31, the date at the end of each month will be automatically adjusted.':
    '30,31日を指定した場合、各月末の日付は自動で調整されます。',
  'This month': '当月',
  'Next month': '翌月',
  'Month after next': '翌々月',
  'Beginning of month': '月初',
  'End of month': '月末',
  Custom: 'カスタム',
  'Beginning of the month': '当月月初',
  'End of the month': '当月末日',
  '{day} of the current month': '当月{day}',
  'Beginning of the next month': '翌月月初',
  'End of the next month': '翌月末日',
  '{day} of the next month': '翌月{day}',
  'Beginning of the second month': '翌々月初',
  'End of the the second month': '翌々月末日',
  '{day} of the second month': '翌々月{day}',

  // Invoice Filter
  'Invoice report create': '自動適用ルールの作成',
  'Invoice report edit': '',
  'select related account': 'アカウントを選択してください',
  Config: '設定',
  // InvoiceSetting - ServiceSetting

  // PayerSetting
  'Search for payer account': '支払いアカウントの検索',
  Vendor: 'ベンダー',

  'Please Enter your Subscription ID.':
    'サブスクリプションIDを入力してください',
  'Please enter your account ID.': 'アカウントIDを入力してください。',
  'Please enter your account name.': 'アカウント名を入力してください。',
  'Added payer account.': '支払いアカウントを追加しました。',

  'Delete the above payer account.': '上記の支払いアカウントを削除します。',
  'Delete this payer account': '支払いアカウントを削除する',
  'Payer account deleted.': '支払いアカウントを削除しました。',
  'Payment account not registered.': '支払いアカウントが未登録です',

  // UserSetting
  //'Lang Setting': '言語 (Language)',
  'Language changed': '言語を変更しました',
  Language: '言語',
  ja: '日本語',
  en: '英語',

  'Notification settings': '通知の設定',
  'Change notification settings': '通知の設定を変更する',
  'Changed notification settings.': '通知の設定を変更しました。',

  'Current password': '現在のパスワード',
  'Please enter your password again for confirmation.':
    '確認用にパスワードを再度入力してください',
  'It does not match the new password. Input correctly.':
    '新しいパスワードと一致しません。正しく入力してください。',
  'Please enter your current password.': '現在のパスワードを入力してください。',
  'Please enter a new password.': '新しいパスワードを入力してください。',
  'Set a password with 8 characters to 30 characters.':
    '8文字~30文字でパスワードを設定してください。',
  'New password': '新しいパスワード',
  'New password (confirmation)': '新しいパスワード（確認）',
  'Please enter the correct password.': '正しいパスワードを入力してください。',
  'An error has occurred.': 'エラーが発生しました。',

  Notification: '通知',
  'Create notification settings': '通知設定の登録',

  Profile: 'プロフィール',

  'Partner Earned Rate Credit': 'パートナー獲得クレジット',
  'discount rate of': 'のすべての使用量に',
  'applied across all usage and will apply to all Billing Groups.':
    'の割引率が適用され、すべての請求グループに適用されます。',

  'Auto apply Recalculations to invoice settings':
    '請求書設定に再計算を自動適用',
  'Partner Earned Credit Discount': 'Partner Earned Credit割引',
  'Software Licences': 'ソフトウェアライセンス',
  'Enable setting': '設定を有効にする',
  'Adjusting Entries Auto-Apply Settings': 'エントリの調整自動適用設定',
  Marketplace: 'マーケットプレイス',
  'Display Settings': 'ディスプレイの設定',
  'Marketplace Azure Plan ID': 'マーケットプレイスAzureプランID',
  'Usage Azure Plan ID': '使用法AzureプランID',
  'Invoice Calculation Settings': '請求書計算設定',
  'Apply Free Tier': '無料利用枠を適用する',
  'Use MSRP price for software reservations':
    'ソフトウェア費用に「MSRP」価格を利用したい場合にはファイルをアップロードしてください。',
  'Use ERP price for software licenses':
    'ソフトウェアライセンスにERP価格を使用する',
  'Use New Commerce ERP price for software reservations':
    'ソフトウェア予約にNewCommerceERP価格を使用する',

  // Billing Group setting
  'Billing group Setting': '請求グループ設定',

  // -------WaveForReseller-------
  'Search users': 'ユーザーを検索',
  //'E-mail/Login ID': 'Eメール/ログインID',
  //'Created date': '作成日',
  //'Update date': '更新日',
  //'Password update date': 'パスワード更新日',
  //'Trial Period': '試用期間',
  //'E-mail address change': 'メールアドレスの変更',
  //'Change Wave Visibility': '表示メニューの変更',
  Activate: 'アクティブ',
  Deactivate: '紐付けを解除',
  Verify: '確認',
  'Not set': '未設定',

  //'Add Wave account': 'Waveアカウントの追加',

  'Reseller account': 'リセラーアカウント',
  //'Download reseller info(.txt)': 'リセラー情報のダウンロード(.txt)',
  'Display items': '表示項目',
  'Change display items': '表示項目を変更',
  'Login failed.': 'ログイン出来ませんでした。',

  'Activate Reseller for Wave account':
    'Waveアカウントのリセラーをアクティブにする',
  'Activate account': 'アカウントをアクティブにする',
  //'Notify changes': '変更を通知する',

  'Notify of password change': 'パスワードの変更を通知する',
  'Please set a password of 8 to 18 characters.':
    '8~18文字のパスワードを設定してください。',

  'Add Reseller for Wave account': 'Reseller for Wave アカウントの追加',
  //'The same email address can not be registered more than once.':
  //  '同じメールアドレスを複数回登録することはできません。',
  'Setting Wave Display Menu': 'Wave表示メニューの設定',
  //'Notify the registered e-mail address': '登録したメールアドレスに通知する',

  'Register account': 'アカウントを登録',
  // 'RI Page': 'RIページ', //コメントされてる
  // 'Invoice Page': '請求書ページ', //コメントされてる
  'Please enter the correct email address.':
    '正しいメールアドレスを入力してください。',

  'Update email address': 'メールアドレスの更新',
  'New mail address': '新しいメールアドレス',
  'Notify of change of email address': 'メールアドレスの変更を通知する',
  'Update the email address': 'メールアドレスを更新する',
  'Email address updated.': 'メールアドレスを更新しました。',

  'Change Wave menu visibility': '表示メニューの変更',
  'Resellers can enable / disable certain functionalities for their Wave customers':
    'リセラーアカウントがWaveへログインした際のページの表示項目の表示・操作等が変更されます。',
  'Representation project': '表示項目',
  'Make settings for enabling / disabling invoice page display.':
    '請求明細ページ表示の有効・無効化の設定を行います。',
  'Update wave display menu': '表示メニューを更新する',
  'Wave display menu updated.': '表示メニューを更新しました。',

  'Expiration date': '有効期限',
  'Trial plan sets the expiration date. * Add the number of days entered from the current expiration date.':
    'Trialプランは有効期限を設定します。＊現在の有効期限から入力された日数を加算します。',
  'Please select a plan.': 'プランを選択してください。',
  'Changed plan': 'プランを変更しました。',

  // Export Original cost
  'Export original cost (.csv)': '原価データの出力（.csv）', // Changed
  'Register exchange rate for original cost CSV in JPY.':
    '日本円でCSVを出力する際の為替レートを登録してください。',
  'Exporting original cost': '原価データの一括出力', // Changed
  'Export in JPY': '日本円で出力',
  'Export in USD': '米ドルで出力',
  'Rounding Figures': '小数点の丸め処理',
  'Search invoice ID': 'Invoice IDを検索',
  'Selected Invoice ID': '選択中のInvoice ID',
  'Change before': '変更前',
  'Exporting data in American dollars or Japanese yen. Exporting Japanese data you need to fill in  exchange rate in each invoice.':
    'ドルもしくは日本円に換算したデータのエクスポートができます。日本円に換算したデータをエクスポートするには、すべてのInvoice IDに対して為替レートの設定が必要です。',
  'Please fill in exchange rate in each invoice id.':
    'すべてのInvoice IDに対して為替レートの登録が必要です。',

  // API access tokens
  //'API Access Tokens': 'API アクセストークン',
  //'Search token': 'トークンを検索',
  //'Generating token...': 'トークンを作成しています...',
  //'Generate a token. Take care when handling the token.':
  //  'トークンを作成します。トークンの取り扱いには十分注意してください。',
  //'Generated token': 'トークンを作成しました',
  //
  //'Delete token': 'トークンの削除',
  //'Deleting...': '削除しています...',
  //'Deleted token': 'トークンを削除しました',
  //'Client ID': 'Client ID',
  //'Client Secret': 'Client Secret',

  // Untagged Groups
  'Untagged Groups': 'ノンタグ グループ',
  'Untagged group name': 'グループ名',
  'Group name': 'グループ名',
  'Search Untagged group': 'グループを検索',
  'Create Untagged group': 'グループを作成',
  'Untagged group created.': 'グループを作成しました',
  'Creating the untagged group failed.': 'グループを作成に失敗しました。',
  'Edit untagged group': 'グループの編集',
  'Changed untagged group setting.': 'グループの設定を変更しました。',
  'Changing the untagged group setting failed.':
    'グループの設定の変更に失敗しました。',
  'Delete untagged group': 'グループの削除',
  'Deleted untagged group.': 'グループを削除しました。',
  'Deleting the untagged group failed.': 'グループの削除に失敗しました。',
  'Target untagged group': '対象のグループ',
  'Resource percentage': 'リソースの割合',
  'Manually allocate resources': 'リソースの割合設定',
  'Allocate resources': '割合設定',
  'Resource Available': '利用可能なリソース',
  'Type of allocation': 'リソースの割り当て方法',
  'Number of selected accounts': '選択中のアカウント数',
  'Fixed fee is processed first.': '固定費の方が優先的に先に処理されます。',

  //rimarket
  Seller: '販売者',
  rimarlet_Term: '期間',
  'Upfront Price': '前払い価格',
  'Effective Rate': '実質レート',
  'Hourly Rate': '時間毎レート',
  'Availability Zone': 'ゾーン',
  'Payment Option': '支払いオプション',
  'Offering Class': '提供クラス',
  'Quantity Available': '提供可能数量',
  label_Platform: 'プラットフォーム',
  label_Reserve_Capacity: 'キャパシティ予約のある',
  label_Tenancy: 'テナンシー',
  label_Offering_Class: '提供クラス',
  label_Instance_Type: 'インスタンスタイプ',
  label_Payment_Option: '支払いオプション',
  label_Availability_Zone: 'ゾーン',
  'Search MarketPlace': 'マーケットプレイスを検索',

  //spot
  REGION: 'ゾーン',
  PRODUCT: '製品',
  'INSTANCE TYPE': 'インスタンスタイプ',
  'DATE RANGE': '期間',
  'si.date': '日付',
  'si.availability_zone': 'アベイラビリティーゾーン',
  'si.price': '価格',
  'si.no_data': 'まだデータがありません',
  search_instance: '検索インスタンスタイプ',

  // MFA
  'Multi-factor authentication': '2段階認証',

  // Option setting
  'Option Settings': 'オプション設定',
  resource_group: 'リソースグループ',
  apply_campaign_pricing: 'キャンペーン価格を適用する',
  apply_pc_earned_credit: 'パートナー獲得クレジットを適用する=',
  Modifiers: 'コスト変数',
  'Feature Management': 'Wave・Aqua デフォルト設定',
  Username: 'ユーザー名',
  'Enter your username here': 'ここにユーザー名を入力してください',
  'Enter your password here': 'ここにパスワードを入力してください',
  'Forgot password?': 'パスワードをお忘れですか？',
  'Forgot password is only available in production environment':
    'パスワードリセットはAPI環境が本番に設定されている場合のみ利用可能です',
  copy_right: 'Copyright © 2024 Alphaus Inc. 全著作権所有',
  term_of_service: '利用規約',
  privacy_policy: 'プライバシーポリシー',
  information_security_policy: '情報セキュリティポリシー',

  // Cost Finalization
  'Original invoice listing': '請求書ID一覧',
  'Bulk set exchange rate': '為替レートを一括設定',
  'Export as CSV': 'CSVとしてエクスポート',
  'Invoice ID': '請求書ID',
  'Payer ID': '支払者ID',
  'Unblended cost': 'Unblended費用',
  'Not available': '利用不可',
  'This vendor is not supported yet':
    'このベンダーはまだサポートされていません',
  CONFIRMED: '確認済み',
  UNCONFIRMED: '未確認',
  'Invoice unavailable': '請求書利用不可',
  'There is no invoice for the selected month':
    '選択された月の請求書がありません',
  'Loading invoice data...': '請求書データを読み込み中...',
  'Pick a date': '日付を選択',
  'Place Holder for Original Invoice Listing': '請求書ID一覧のプレースホルダー',
  Search: '検索',
  'Select month': '月を選択',
  Confirmed: '確認済み',
  Unconfirmed: '未確認',
  'Azure invoice is not confirmed yet, please try later':
    'Azure請求書がまだ確認されていません。後でお試しください',
  "Before you proceed please confirm you've already received Google Cloud invoices for each payer account":
    '続行する前に、各支払いアカウントのGoogle Cloud請求書をすでに受け取っていることを確認してください',
  'Please verify information before proceeding':
    '続行する前に情報を確認してください',
  'Amazon Web Services': 'Amazon Web Services',
  'Google Cloud': 'Google Cloud',
  'Microsoft Azure': 'Microsoft Azure',
  'Reseller Charge Setting': 'リセラー手数料設定',
  Apply: '適用',
  'Clear all': 'すべてクリア',
  'List of invoice IDs being finalized from the selected month':
    '選択された月から確定される請求書IDのリスト',
  'No invoice data available for the selected month':
    '選択された月の請求書データはありません',
  Retry: '再試行',

  // Table Pagination
  'Showing {{startItem}} - {{endItem}} of {{totalItems}} results':
    '{{totalItems}}件中 {{startItem}} - {{endItem}}件を表示',
  'Records per page:': '1ページあたりの件数:',

  // Status Type Translations (for various status enums)
  StatusTypes: {
    NotStarted: '未開始',
    Preparing: '準備中',
    Running: '実行中',
    Checking: '確認中',
    Success: '成功',
    Error: 'エラー',
    Confirmed: '確認済み',
    Unconfirmed: '未確認',
    Created: '作成済み',
    NotCreated: '未作成',
    InProgress: '進行中',
    Completed: '完了',
    Preview: 'プレビュー',
    Published: '公開済み',
    NotPublished: '未公開',
  },

  // General UI
  Loading: '読み込み中',

  // Error Boundary
  'Module unavailable': 'モジュールが利用できません',
  '{{appName}} is unavailable': '{{appName}}が利用できません',
  'This service is currently experiencing technical difficulties.':
    'このサービスは現在技術的な問題が発生しています。',
  Refresh: '更新',
  'Report Issue': '問題を報告',

  // Timezone
  UTC: 'UTC',
  JST: 'JST',
};
