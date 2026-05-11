const pictograms = [
  {
    group: 'university',
    title: 'トイレ',
    location: 'キャンパス内の建物入口、構内の案内板',
    meaning: '男女別や多目的トイレを案内するピクトグラム。すぐに衛生設備を見つけられるように使われます。',
    iconSvg: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><path d="M30 112V30a8 8 0 0 1 8-8h10m34 0h10a8 8 0 0 1 8 8v82"/><path d="M34 48h18v42H34zM68 48h18v42H68zM50 24a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm40 0a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"/></svg>`
  },
  {
    group: 'university',
    title: '授業棟',
    location: '大学の案内図、校舎の入口付近',
    meaning: '教室や講義室がある建物を示す標準的なアイコン。学びの場所を示します。',
    iconSvg: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><rect x="18" y="38" width="84" height="64" rx="8"/><path d="M22 38L60 8l38 30"/><path d="M42 62h12M42 82h12M66 62h12M66 82h12"/></svg>`
  },
  {
    group: 'university',
    title: '図書館',
    location: '図書館の外壁、施設案内表示',
    meaning: '本や学習スペースがある場所を示す図書館記号。静かに学ぶ場所をわかりやすくします。',
    iconSvg: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><path d="M28 28h20l12 14 12-14h20"/><path d="M28 96h20V38H28zM52 96h20V38H52zM76 96h20V38H76z"/></svg>`
  },
  {
    group: 'university',
    title: '自転車置き場',
    location: 'キャンパスの駐輪場付近、アクセス案内',
    meaning: '自転車を置ける場所を示すアイコン。通学に自転車を使う学生に便利です。',
    iconSvg: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><circle cx="30" cy="90" r="18"/><circle cx="90" cy="90" r="18"/><path d="M30 90h18l10-18h24l8 18M66 42l12 24M54 60h18"/></svg>`
  },
  {
    group: 'university',
    title: '学生食堂',
    location: '学生食堂の入口、キャンパスマップ',
    meaning: '食事を提供する場所を示す記号。昼食や休憩所を探すときに役立ちます。',
    iconSvg: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><path d="M30 40h60v14a12 12 0 0 1-12 12H42a12 12 0 0 1-12-12V40z"/><path d="M40 76c6 8 14 12 25 12s19-4 25-12"/><path d="M62 90v20M52 106h20"/></svg>`
  },
  {
    group: 'road',
    title: '横断歩道',
    location: '道路の歩行者横断地点、信号機の近く',
    meaning: '歩行者が道路を渡る場所を示す。安全な横断地点をわかりやすく表示します。',
    iconSvg: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><rect x="22" y="30" width="76" height="60" rx="8"/><path d="M32 42h56M32 58h56M32 74h56M32 90h56"/><circle cx="60" cy="24" r="8"/></svg>`
  },
  {
    group: 'road',
    title: '自転車専用道',
    location: '自転車レーン、サイクリングロードの入口',
    meaning: '自転車が通行できる専用道を示す標識。歩行者と自転車の区別に使われます。',
    iconSvg: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><circle cx="30" cy="90" r="16"/><circle cx="90" cy="90" r="16"/><path d="M30 90h20l12-22 16 10M58 38l12 18"/><path d="M60 78v-24"/></svg>`
  },
  {
    group: 'road',
    title: '駐車場',
    location: '道路沿いの駐車場入口、案内標識',
    meaning: '自動車の駐車スペースを示す。目的地に車で向かう人に重要です。',
    iconSvg: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><rect x="28" y="28" width="64" height="64" rx="12"/><path d="M46 76v-28h12v28"/><path d="M82 76V48h-12"/></svg>`
  },
  {
    group: 'road',
    title: '危険物注意',
    location: '工事現場や危険区域の入口',
    meaning: '危険な場所や注意が必要なエリアを知らせる。安全行動を促します。',
    iconSvg: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><path d="M60 14 14 106h92L60 14z"/><path d="M60 40v30"/><circle cx="60" cy="86" r="6"/></svg>`
  },
  {
    group: 'road',
    title: 'トンネル',
    location: '道路入口付近、トンネルの案内看板',
    meaning: 'トンネルの存在を知らせる。夜間や視界が悪い状況でドライバーに注意を促します。',
    iconSvg: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><path d="M20 80c0-33 26-60 60-60s60 27 60 60"/><path d="M20 80h80v26H20z"/><path d="M42 80v26M78 80v26"/></svg>`
  },
  {
    group: 'university',
    title: '非常口',
    location: '校舎内部、講義室やホールの近く',
    meaning: '緊急時の避難経路を示すマーク。安全に建物を離れるために重要です。',
    iconSvg: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><path d="M30 92h60V50L78 32"/><path d="M64 44 44 64"/><path d="M60 20v24"/><path d="M40 84h40"/></svg>`
  },
  {
    group: 'university',
    title: '車いす対応',
    location: '出入口やトイレ、エレベーター近く',
    meaning: 'バリアフリー対応施設を意味し、車いす利用者でも使いやすい場所を示します。',
    iconSvg: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><circle cx="36" cy="26" r="12"/><path d="M42 38v18h16l10 16v14"/><circle cx="74" cy="96" r="16"/></svg>`
  },
  {
    group: 'university',
    title: 'カフェ・休憩所',
    location: '学生ラウンジ、カフェテリア、休憩スペースの案内',
    meaning: '軽食や休憩ができる場所を示すピクトグラム。授業の合間のリラックスに役立ちます。',
    iconSvg: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><path d="M30 60h60v20a16 16 0 0 1-16 16H46a16 16 0 0 1-16-16V60z"/><path d="M30 60h60M52 34h16M44 40h32"/></svg>`
  },
  {
    group: 'road',
    title: '信号機',
    location: '交差点、道路標識の近く',
    meaning: '信号機のある交差点を示す。交通の流れを安全に管理するための目印です。',
    iconSvg: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><rect x="44" y="18" width="32" height="72" rx="16"/><circle cx="60" cy="40" r="10"/><circle cx="60" cy="60" r="10"/><circle cx="60" cy="80" r="10"/><path d="M60 90v12"/></svg>`
  },
  {
    group: 'road',
    title: '速度制限',
    location: '道路沿いの標識、制限区域入口',
    meaning: '車両の速度制限を示す標識。安全運転を促し事故を防ぎます。',
    iconSvg: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><circle cx="60" cy="60" r="36"/><path d="M52 46h16M52 74h16"/><path d="M46 52h8v16"/></svg>`
  },
  {
    group: 'road',
    title: '一時停止',
    location: '交差点の手前、交差点周辺の道路標識',
    meaning: '一旦停止して安全を確認する必要がある場所を示します。事故防止に重要です。',
    iconSvg: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><path d="M32 18h56l24 24v56l-24 24H32L8 98V42L32 18z"/><path d="M44 56h32"/><path d="M40 74h40"/></svg>`
  }
];

const grid = document.getElementById('pictogramGrid');
const buttons = document.querySelectorAll('.filter-btn');

const renderPictograms = (group = 'all') => {
  grid.innerHTML = pictograms
    .filter(item => group === 'all' || item.group === group)
    .map(item => `
      <article class="card">
        <div class="card-figure">
          <div class="icon">${item.iconSvg}</div>
        </div>
        <div class="card-content">
          <h3>${item.title}</h3>
          <div class="card-meta">
            <div class="meta-item"><strong>設置場所:</strong> ${item.location}</div>
            <div class="meta-item"><strong>意味:</strong> ${item.meaning}</div>
          </div>
        </div>
      </article>
    `)
    .join('');
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    renderPictograms(button.dataset.group);
  });
});

renderPictograms();
