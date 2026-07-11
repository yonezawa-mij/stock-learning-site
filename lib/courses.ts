export type LessonType = 'article' | 'quiz'

export type Lesson = {
  id: string
  title: string
  lesson_type: LessonType
  duration_minutes: number
  domain: string | null
  content: string
  quiz?: {
    question: string
    choices: string[]
    correct_answer: string
    explanation: string
  }
}

export type Course = {
  id: string
  title: string
  description: string
  icon: string
  level: string
  duration_minutes: number
  lessons: Lesson[]
}

const COURSES: Course[] = [
  {
    id: 'stock-basics',
    title: '株式投資の基礎',
    description: '株とは何か、市場の仕組み、リスクと分散まで。投資の土台を固めます。',
    icon: '📈',
    level: '初級',
    duration_minutes: 120,
    lessons: [
      {
        id: 'l1',
        title: '株式とは何か',
        lesson_type: 'article',
        duration_minutes: 15,
        domain: '基礎',
        content: `## 株式とは

株式（ストック）は、**会社の所有権の一部**を表す証券です。株を保有すると、その会社の「株主」になります。

### 株主が得られるもの
- **配当**：会社が利益の一部を株主に分配する場合がある
- **キャピタルゲイン**：株価が上がったときに売却益を得られる可能性
- **議決権**：株主総会での投票権（保有数による）

### なぜ会社は株を発行するか
資金調達のためです。銀行借入以外に、市場から資金を集めて成長投資や設備投資に使います。

> **ポイント**：株は「値が上下する資産」であり、元本保証はありません。`,
      },
      {
        id: 'l2',
        title: '市場の仕組み',
        lesson_type: 'article',
        duration_minutes: 20,
        domain: '市場',
        content: `## 証券取引所と市場参加者

日本では **東京証券取引所（東証）** が中心です。

### 主な参加者
- **個人投資家**：一般の投資家
- **機関投資家**：年金、投信、保険会社など
- **証券会社**：売買の仲介
- **市場メーカー**：流動性を提供

### 注文の基本
- **成行**：今の価格ですぐ約定
- **指値**：指定した価格になったら約定

### 取引時間（東証・目安）
平日 9:00〜15:00（昼休みあり）

> **ポイント**：価格は需給で決まります。「良い会社＝すぐ上がる」とは限りません。`,
      },
      {
        id: 'l3',
        title: '指標の読み方',
        lesson_type: 'article',
        duration_minutes: 20,
        domain: '分析',
        content: `## 初心者が押さえる指標

### PER（株価収益率）
株価 ÷ 1株利益。会社の収益力に対して株価が高いか低いかの目安。

### PBR（株価純資産倍率）
株価 ÷ 1株純資産。資産に対する株価の水準。

### 配当利回り
年間配当 ÷ 株価。インカムゲインの目安。

### 売上・利益成長率
会社が成長しているかを見る基本データ。

> **注意**：指標は単体では判断しない。業種・景気・会社のフェーズを合わせて見ます。`,
      },
      {
        id: 'l4',
        title: '基礎クイズ',
        lesson_type: 'quiz',
        duration_minutes: 10,
        domain: '基礎',
        content: '',
        quiz: {
          question: '株式を保有すると一般的に得られる権利として正しいものはどれですか？',
          choices: [
            '必ず元本が保証される',
            '議決権や配当を受け取る可能性がある',
            '銀行預金と同じ利息が必ず付く',
            '会社の借金を肩代わりする義務がある',
          ],
          correct_answer: '議決権や配当を受け取る可能性がある',
          explanation:
            '株主は議決権や配当を受け取る可能性がありますが、元本保証や固定利息はありません。投資にはリスクが伴います。',
        },
      },
    ],
  },
  {
    id: 'risk-diversification',
    title: 'リスク管理と分散投資',
    description: '損失を抑える考え方、ポートフォリオ、NISA・iDeCoの入口まで。',
    icon: '🛡️',
    level: '初級',
    duration_minutes: 90,
    lessons: [
      {
        id: 'l1',
        title: 'リスクとは何か',
        lesson_type: 'article',
        duration_minutes: 15,
        domain: 'リスク',
        content: `## 投資におけるリスク

リスクは「**想定と異なる結果が起きる可能性**」です。

### 主なリスク
- **価格変動リスク**：株価が下がる
- **信用リスク**：会社の業績悪化
- **流動性リスク**：売りたいときに売れない
- **為替リスク**：海外資産の場合

### リスク許容度
- どれだけの下落に耐えられるか
- いつまでお金を使わないか

> 自分に合ったリスク量を決めてから投資額を考えましょう。`,
      },
      {
        id: 'l2',
        title: '分散投資の考え方',
        lesson_type: 'article',
        duration_minutes: 20,
        domain: '分散',
        content: `## 分散投資

**複数の資産に分けて持つ**ことで、一つの失敗のダメージを抑えます。

### 分散の軸
- 銘柄（複数社）
- 業種（IT、金融、消費など）
- 地域（日本、米国、新興国）
- 資産クラス（株、債券、REITなど）

### 投資信託・ETF
少額から分散しやすい手段です。初心者は個別株のみより、インデックス型の活用も検討されます。

> **ポイント**：分散はリスク低減の基本。ただし「ゼロリスク」にはなりません。`,
      },
      {
        id: 'l3',
        title: 'NISA・iDeCoの入口',
        lesson_type: 'article',
        duration_minutes: 15,
        domain: '制度',
        content: `## 税制優遇の学習口座

### 新NISA（概要）
一定枠まで、投資益が非課税になる制度です。年間・生涯枠があり、対象商品は金融庁の枠組みに沿います。

### iDeCo
老後資金向けの積立制度。掛金が所得控除の対象になる場合があります。

> **注意**：制度は変更されることがあります。最新の公式情報を必ず確認してください。本サイトは一般的な学習用です。`,
      },
      {
        id: 'l4',
        title: 'リスク管理クイズ',
        lesson_type: 'quiz',
        duration_minutes: 10,
        domain: 'リスク',
        content: '',
        quiz: {
          question: '分散投資の主な目的として最も適切なものは？',
          choices: [
            '必ず利益を出すため',
            '一つの資産の損失影響を抑えるため',
            '取引手数料をゼロにするため',
            '税金を完全に免除するため',
          ],
          correct_answer: '一つの資産の損失影響を抑えるため',
          explanation:
            '分散投資はリスク低減が主目的です。利益の保証や税金ゼロを意味しません。',
        },
      },
    ],
  },
  {
    id: 'practical-analysis',
    title: '実践：銘柄リサーチ入門',
    description: '決算・ニュースの読み方、長期と短期の違い、投資判断のフレームワーク。',
    icon: '🔍',
    level: '中級',
    duration_minutes: 100,
    lessons: [
      {
        id: 'l1',
        title: '決算短信の見方',
        lesson_type: 'article',
        duration_minutes: 25,
        domain: 'リサーチ',
        content: `## 決算短信で見るポイント

上場企業は四半期ごとに業績を開示します。

### チェック項目
- 売上高・営業利益の前年比
- 通期予想の修正（上方/下方）
- キャッシュフロー（CF）
- 自己資本比率

### 注意
一四半期だけで過度に判断しない。トレンドとガイダンスを合わせて見ます。`,
      },
      {
        id: 'l2',
        title: 'ニュースと株価',
        lesson_type: 'article',
        duration_minutes: 15,
        domain: '市場心理',
        content: `## ニュースは「材料」

株価はニュースだけで動きません。**期待との差**で動くことが多いです。

### 例
- 好決算でも「期待以上ではなかった」→下落
- 悪材料でも「織り込み済み」→下落幅が小さい

> 事実＋市場の期待値をセットで考える習慣が大切です。`,
      },
      {
        id: 'l3',
        title: '長期と短期',
        lesson_type: 'article',
        duration_minutes: 15,
        domain: 'スタイル',
        content: `## 投資スタイル

| スタイル | 期間 | 着眼点 |
|---------|------|--------|
| 長期 | 数年〜 | 企業の成長・配当 |
| 中期 | 数ヶ月〜数年 | 業界トレンド |
| 短期 | 日〜週 | 値動き・需給 |

学習段階では**長期の考え方**から入ると、感情に振られにくくなります。`,
      },
      {
        id: 'l4',
        title: 'リサーチクイズ',
        lesson_type: 'quiz',
        duration_minutes: 10,
        domain: 'リサーチ',
        content: '',
        quiz: {
          question: '好決算発表後に株価が下落した場合、考えられる説明として適切なのは？',
          choices: [
            '決算は株価と無関係だから',
            '市場の期待を上回らなかった可能性があるから',
            '必ず不正があったから',
            '配当が増えたから',
          ],
          correct_answer: '市場の期待を上回らなかった可能性があるから',
          explanation:
            '株価は結果そのものより「期待との差」に反応することがあります。',
        },
      },
    ],
  },
]

export function getCourses(): (Omit<Course, 'lessons'> & { lesson_count: number })[] {
  return COURSES.map(({ lessons, ...c }) => ({ ...c, lesson_count: lessons.length }))
}

export function getCourseById(id: string): Course | null {
  return COURSES.find((c) => c.id === id) ?? null
}

export function getAllCourses(): Course[] {
  return COURSES
}
