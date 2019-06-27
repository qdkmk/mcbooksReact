import React from 'react';
import Lesson from './Lesson';

// import Lessonitem from './../../Lessonitem';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allIllust:false,
      partIllust:false,
      lisence:false,
      allJpg:false,
      partJpg:false,
      allEpsPsd:false,
      partEpsPsd:false,
      photo:false,
      font:false
    }
  }
　　　　
  handleInput(event) {
    this.setState({
      dispText: event.target.value
    })
    alert("test")
  }
  　　



handleClickTag(check){

  if(this.state[check]===true){
    this.setState({
      [check]:false
    })
  }else{
    this.setState({
      [check]:true
    })
  }
}



handleClickAlert(check){
  const newArray = this.state
  alert(newArray.allIllust)
}

//tagCheckerがダサい
HURUItagChecker(){
  if(this.state.allIllust===false && this.state.lisence===false){
    return true;
  }else if(this.state.allIllust===false && this.state.lisence===true){
    return ["lisence"]
  }else if(this.state.allIllust===true && this.state.lisence===false){
    return ["allIllust"]
  }else if (this.state.allIllust===true && this.state.lisence===true){
    return ["allIllust","lisence"]
  }
}
//ちょっとはましになったか？
tagChecker(){
  const res=[]
  if(this.state.allIllust===false && this.state.partIllust===false && this.state.lisence===false && this.state.allEpsPsd===false && this.state.allJpg===false && this.state.partEpsPsd===false && this.state.partJpg===false && this.state.photo===false && this.state.font===false){
    return true;
  }else{
    if(this.state.allIllust===true){res.push("allIllust");}
    if(this.state.partIllust===true){res.push("partIllust");}
    if(this.state.lisence===true){res.push("lisence");}
    if(this.state.allEpsPsd===true){res.push("allEpsPsd");}
    if(this.state.allJpg===true){res.push("allJpg");}
    if(this.state.partEpsPsd===true){res.push("partEpsPsd");}
    if(this.state.partJpg===true){res.push("partJpg");}
    if(this.state.photo===true){res.push("photo");}
    if(this.state.font===true){res.push("font");}

    return res;
  }
}


  render() {
    const lessonList = [
      {
        name: 'おしゃれなパターン素材集 キッズ・トイ',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41Uilbm1gFL._SX380_BO1,204,203,200_.jpg',
        introduction: 'ウェブ、ポスター、カード、布地、何をデザインするにも使える、可愛らしい柄を140点収録しました。付属のCD-ROMには、タイリング可能な素材として、EPSとJPEG形式のデータを全点収録しています。データの基本的な使い方から応用法まで、ガイドに沿って楽しみながら、簡単にものづくりができます。',
        tag:["allIllust","allEpsPsd","allJpg"]
      },
      {
        name: 'スタンダード素材集 背景・飾り罫・飾り枠・装飾パーツ',
        image: 'https://img.ips.co.jp/mdn/12/3212203013/3212203013-514x.jpg',
        introduction: 'テクスチャ・パターン、飾り罫・飾り枠、装飾パーツ、アイコン、文字など、デザインに役立つ素材を集めた素材集です。さまざまな場面で使いやすい、シンプルでベーシックな素材を満載しています。付属DVD-ROMはWindowsとMacに両対応。素材データは、色や形を自由に変えることができるIllustrator EPSと、さまざまなアプリケーションで利用できる汎用的なJPEG、背景が透明で重ねて使う際に便利なPNGの3形式（JPEG/PNGはRGBモード、解像度350dpi）で、Illustrator EPS形式で463点、JPEG・PNG形式でそれぞれ822点収録しています。商用利用も可能で、Web、雑誌や書籍などの紙媒体、雑貨など、幅広いデザインワークに役立つ素材集です。',
        tag:["partEpsPsd","lisence","allJpg"]
      },
      {
        name: '乙女のキッチン素材集　毎日ごはん★スイーツ',
        image: 'https://img.ips.co.jp/ij/10/1110101125/1110101125-520x.jpg',
        introduction: '「キッチン道具」「食材」「スイーツ」の写真・イラスト素材がいっぱい!!　Illustrator EPS、Photoshop PSD、PNG、JPEGデータを収録。写真データはパス付き、A4サイズで使える350dpiの高解像度版も収録。食育・健康関連のコンテンツにも使える、ちょっと贅沢な仕様の「おいしそうな食材と道具のデザイン素材集」です。',
        tag:["partEpsPsd","lisence","allJpg","partIllust"]
      },
      {
        name: '和 beautiful material',
        image: 'http://image.gihyo.co.jp/assets/images/cover/2012/9784774150000.jpg',
        introduction: '大好評をいただいた『和 japanese style』の第2弾です。前作以上のクオリティと，1600点を超える素材数と大幅なボリュームアップで，さまざまな媒体での和物デザインに使えます。もちろん，収録素材はすべて描き下ろしですべてオリジナル。収録ファイルは，Illustratorのaiファイル（CS以降対応）と汎用PNGファイルでの収録で，商用利用も可能とします。自由度が高く，使いやすい和の素材集です。',
        tag:["allEpsPsd","lisence","allJpg"]
      },
      {
        name: 'きらきら素材集',
        image: 'https://img.ips.co.jp/mdn/07/3207303003/3207303003-514x.jpg',
        introduction: '写真やイラストなどのグラフィックに「光り」や「輝き」を与えたり、メタリックな質感を演出したりするための素材をまとめた「きらきらを表現する」ための素材集。「クロスハッチ」や「フレア」などを中心に、「宝石」「チェーン」「ラメ」などさまざまな素材を用意しています。素材は、色や大きさを自在に変更できる「レイヤーつきPSD」と「PNG（JPEG）」をそれぞれ1,000点以上収録！！ CD-ROMはWin＆Mac対応。Photoshopの基本解説もついています！ デザイン、DTP、Web、マンガなどあらゆる制作に活用できる便利な便利な一冊です！！写真やイラストなどのグラフィックに「光り」や「輝き」を与えたり、メタリックな質感を演出したりするための素材をまとめた「きらきらを表現する」ための素材集。「クロスハッチ」や「フレア」などを中心に、「宝石」「チェーン」「ラメ」などさまざまな素材を用意しています。素材は、色や大きさを自在に変更できる「レイヤーつきPSD」と「PNG（JPEG）」をそれぞれ1,000点以上収録！！ 　CD-ROMはWin＆Mac対応。Photoshopの基本解説もついています！　デザイン、DTP、Web、マンガなどあらゆる制作に活用できる便利な便利な一冊です！！',
        tag:["allEpsPsd","lisence","allJpg"]
      },
      {
        name: 'Paper & Cloth Style ～ 紙と布の素材集',
        image: 'https://www.sbcr.jp/img/t/4797364545_m.jpg',
        introduction: 'Illustrator EPSで手作り感溢れる演出を。背景に使いやすいノートや和紙、テキスタイルから、アクセントに使えるタグやラベル、小物まで。Webデザインや雑貨作りに"使える"素材集。商用利用可能なIllustrator EPSとPNG/JPEG形式で合計1,800点以上収録！',
        tag:["partEpsPsd","lisence","allJpg"]
      },
      {
        name: "Girls' Design Materials",
        image: 'https://www.sbcr.jp/img/t/4797376692_m.jpg',
        introduction: '女性向けデザインに使えるイラストが満載！シルエットではなく、きちんと表情が描かれた人物カットイラストが400点以上。学生、働く女性、主婦、日常やイベントのシーンなど、豊富なバリエーションで取り揃えています。IllustratorEPSの素材データはパスを保持しており、加工も自由に行えます。人物以外にも、飾り罫、パターン、ガールズアイテム、可愛い生き物、植物、食べ物など、さまざまな場面で便利に使えるイラスト素材が満載です。すべての素材は透過部分を保持したPNG形式でも収録。Microsoft WoやPowerPointなどで、画像を置くだけで使うことができます。 ',
        tag:["allEpsPsd","lisence","allJpg"]
      },
      {
        name: 'エコ素材集 Green&Natural',
        image: 'https://img.ips.co.jp/ij/09/1109101022/1109101022-520x.jpg',
        introduction: 'ちょっと贅沢な自然と緑のデザイン素材集今、みんなで大切にしたいものを集めました。木々や草花、虫、水、太陽の光などの自然の恵み、そして、その自然を守るために注目される風力発電などの新しいシステム。そんな「エコっぽい素材」のIllustrator EPS、Photoshop PSD、PNG、JPEGデータを合計1,600点以上収録しました。色や大きさを自由に変更できる「イラストレーション」、組み合わせしだいでタイトルやロゴなどに使える「バックグランド」「アイコン」「フォント」、背景に使えるスウォッチ形式の「パターン」、紙面を彩るのにぴったりの「フレーム・ライン」、そして写真データはWebデザインに使いやすい72dpiの素材のほかに、A4サイズで使える350dpiの高解像度版も収録しました。DVD-ROMはWin&Macのハイブリッド。WebデザインやDTPなど、あらゆるデザインワークに活用できる、ちょっと贅沢な自然と緑のデザイン素材集です。',
        tag:["partEpsPsd","lisence","partIllust","allJpg","photo"]
      },
      {
        name: '現場で役立つイラスト・パーツ・フレーム満載！ デザイン素材×1000',
        image: 'https://www.sbcr.jp/img/t/4797364545_m.jpg',
        introduction: '本書は、プロのデザイナーをはじめ、デザインをする全ての方が使用できる、便利で役立つ素材を1000点収録した素材集です。いくつあっても嬉しいフレームやパーツ。イラストレーターに頼むほどではない小さなイラストや、タイトルまわりに使える看板イラストなど、素材を1から作成する時間がない、忙しいデザイナーさんには嬉しい素材が満載です。全ての素材は、使う場所を選ばないシンプルなデザインになっています。色を変えたり、ベクターデータのパスを動かしたり、1つの素材でも、毎回違った使い方をすることができます。なかなかデザインがまとまらない、少し紙面が寂しい、イラストを使いたいけど予算がないなどの様々な問題に、少しでも本書の素材が役に立ちましたら幸いです。',
        tag:["partEpsPsd","lisence","allJpg"]
      },
      {
        name: 'デザイン素材集　ポップスイーツ',
        image: 'http://www.seibundo-shinkosha.net/upload/save_image/03352.jpeg',
        introduction: 'かわいいスイーツをイラスト化し、アイコン、飾り罫、バックパターンとしてグラフィックデザインやWEBデザインに使えるようJPEG/EPSデータ化。約1000個を収録。',
        tag:["partEpsPsd","lisence","allJpg","allIllust"]
      },
      {
        name: 'Girly style with GOLD オシャレな質感の大人デザイン装飾素材集',
        image: 'http://www.sotechsha.co.jp/pc/image/891.jpg',
        introduction: 'かすれた味のあるラインや飾り枠、色あせた紙、アンティークレース、背景にぴったりのありそうでなかった本物の壁紙素材……こだわり質感の大人可愛いアンティークやヴィンテージ風の装飾素材や、「ガーリー」で「かわいい」ゴールドばかりを集めました。DTPやWEBの現場で活躍するPNG形式、JPEG形式で約2600点収録。「少しだけ」「ちょっと」ここにおしゃれな何かが欲しい！そんなクリエイティブなシーンで、必ず役立ちます。',
        tag:["partIllust","lisence","allJpg"]
      },
      {
        name: '装飾デザイン素材集　エレガントな花・植物・模様',
        image: 'https://img.ips.co.jp/mdn/12/3212303015/3212303015-514x.jpg',
        introduction: 'デザインを華やかに彩る花・植物・動物・模様のイラスト素材とパターン素材を集めました。幅広い層に対応できるやさしい色合いとセンスのいい絵柄が特徴です。ラグジュアリー、ロマンティック、キュート、エキゾチック、和風モダンなどのテイストにわかれており、使いやすいパーツやフレーム、飾り罫・枠などの素材のほか、かわいい動物イラストや植物パターン柄を利用したアルファベットなどもあり、素材総数は2,000点を収録しています。付属DVD-ROMはWindowsとMacに両対応。パーツ素材は、JPEG形式と背景が透明なPNG形式で、パターン素材は、そのまま使えるA4サイズのJPEG形式と継ぎ目なく並べて使えるシームレスなPNG形式で収録。収録素材は商用目的での利用も可能ですので、雑誌やカタログの誌面を飾りつけたり、グラフィックやポスターを華やかに演出したりはもちろん、Webサイトやブログ、カード・名刺・雑貨類など幅広い用途で活躍します。',
        tag:["partIllust","lisence","allJpg"]
      },
      {
        name: 'Sweets素材集(design parts collectionシリーズ)',
        image: 'http://image.gihyo.co.jp/assets/images/cover/2009/9784774138749.jpg',
        introduction: '女の子が大好きなスイーツをイラスト素材にして一冊に収録しました。人気のマカロンから巨大パフェまで見ているだけで胸いっぱいになりそうなスイーツを色々なテイストのイラストで完全網羅。女の子のあなたに，女の子じゃないあなたも，さあ召し上がれ！ DVD-ROMにPNG形式，PSD形式でそれぞれ707点収録しています。',
        tag:["partIllust","lisence","allJpg","allEpsPsd","photo"]
      },
      {
        name: 'piece of Design SWEET&CUTE かわいい素材661点',
        image: 'http://www.sotechsha.co.jp/pc/image/659.jpg',
        introduction: 'イラスト、ライン、フレーム、背景、レース、タイプなど、すぐに使えるSweetでCuteな素材を661点収録したCD-ROM付！画像は便利なパス付き！面倒な作業一切不要で、初心者でも簡単に使いこなせる素材集です。また、本書の誌面レイアウトは付属CD-ROM収録素材を使用してデザインされています。パラパラめくるだけでアイディアが広がる、デザインのヒントもいっぱいです。商業印刷はもちろん、グリーティングカードやポスター、小物など思わずそばに置いておきたくなるかわいい素材が満載。素材同士を組み合わせたり、一つの素材をシンプルに使ってみたり、使い方はあなた次第！このスウィートでキュートな素材達を、物作りを楽しむ皆様に贈ります。',
        tag:["partIllust","lisence","allJpg","allEpsPsd"]
      },
      {
        name: '和　japanese style',
        image: 'http://image.gihyo.co.jp/assets/images/cover/2008/9784774135236.jpg',
        introduction: '日本の伝統的手法を踏襲して描き上げた，「和の意匠」の超精密デジタル素材集。著作権フリーでプロでもアマでも自由に使える，イラスト，文様，デザインパーツをIllustratorのAIファイルとPNGファイルを，それぞれ600点以上，付属DVD-ROMに収録しています。紙媒体のデザインからWebデザイン，個人のブログ，年賀状と，さまざまな用途に活用できます。',
        tag:["allEpsPsd","lisence","allJpg"]
      },
      {
        name: '装飾素材集　エレガントな飾り・フレーム・パーツ',
        image: 'https://img.ips.co.jp/mdn/11/3211203001/3211203001-514x.jpg',
        introduction: '雑誌やカタログ、Webやブログなど、さまざまなデザイン制作物を優雅で上品に演出するのに最適な装飾素材を集めたデザイン素材集です。ヨーロッパ風の図案や幾何学模様、花・葉・蔦などをモチーフにしたエレガントなデザインパーツを合計1,500種類以上、DVD-ROMに収録しています。収録素材は、西欧風の模様を使ったデコラティブなフレーム、愛らしい花や植物の飾り罫をはじめ、蔦をモチーフにした豪華なオーナメント、流麗な形の文字素材、手軽に使うことのできるマーク・アイコン、華やかなパターンなど、使いやすく魅力的なものが満載です。収録データ形式は色や形を自由に変えることができるパス付きIllustrator EPS（CMYKモード）と、背景が透明で重ねて使う際に便利なPNG、さまざまなアプリケーションで利用できる汎用的なJPEGの3種類（PNG/JPEGはRGBモード、解像度350dpiで収録）。収録素材は商用目的での利用も可能ですので、雑誌やカタログの誌面を飾りつけたり、グラフィックやポスターを華やかに演出したりはもちろん、Webサイトやブログ、カード・名刺・雑貨類など幅広い用途で活躍します。 ',
        tag:["allEpsPsd","lisence","allJpg"]
      },
      {
        name: '分かりやすいプレゼン資料 1秒で伝わるビジネスイラスト集',
        image: 'https://img.ips.co.jp/ij/15/1115101115/1115101115-520x.jpg',
        introduction: 'プレゼン資料、企画書などのビジネス文書作成時や、ビジネス系デザインに本当に役立つイラスト・アイコンを超人気DLサイトの膨大な数のなかから厳選収録したビジネスイラスト集。オリジナルも多数用意し、一目瞭然のビジネス資料を即効作成！スマートな資料で作業スピードも大幅短縮でき一石二鳥！豊富なカラーやバリエーションでほしい素材が必ず見つかります。PNG／AI／EMF形式',
        tag:["allEpsPsd","lisence","allJpg"]
      },
      {
        name: '紙・布・テクスチャー素材集　DVD-ROM素材集',
        image: 'https://pie.co.jp/wp/wp-content/uploads/itemimage/4026/img1.jpg',
        introduction: '「かゆいところに手の届く」気の利いたテクスチャー素材満載！デザインをするときに意外に必要なのが、背景に敷いたり、見出しに使ったりする、紙や布などのテクスチャー素材。あったらとても便利だけれど、自分でスキャンして作るのは面倒くさい…。そんなニーズに応えた待望のデジタル素材集です。シンプルだけれど、雰囲気のよい「使える」素材を豊富なバリエーションで収録しました。 ',
        tag:["photo","lisence","allJpg"]
      },
      {
        name: '手描きイラスト＆タイポ素材集',
        image: 'https://www.sbcr.jp/img/t/4797390063_m.jpg',
        introduction: '今流行りの手描きイラスト・文字の素材集！シンプルなラインにわずかな手描き感。ペンや筆のインクの溜まり。チョークのかすれた感じ。色数は少なく、しかしそこには清潔感がたたずむ大人が使えるデザインがあります！街中のインテリアショップやカフェ、レストラン、流行りのグラフィックやWebサイトのデザインなど、今、一番見かける「手描きのイラストと文字」を集めた素材集です！付属の素材を使って・カフェ、レストラン風のデザイン・吹き出し、フレーム、矢印を使った面白アイデア・ハロウィンやクリスマス、ウェディングなど・グラフィックからWebデザインまでお洒落で目を惹く流行のデザインをつくってみてください。■この本だけのポイント・「黒」「白」に加えてワンポイントで使われている「金」の素材も付属。金は自分で作るのは難しい色なのでメリットあります。・フォントの監修者がついた文字のデザインとしてもしっかりしたオリジナル手描きフォントが30書体収録。さらにwoff形式のWebフォントとしても使えます。・素材を違う場所に複写するHow-to技も収録。DIYに使えます。',
        tag:["photo","lisence","allJpg","partEpsPsd","allIllust","font"]
      },
      {
        name: 'HAPPY＆FANCY素材DVD-ROM',
        image: 'https://www.maar.com/wp-content/uploads/2015/09/9784837307761_cover.jpg',
        introduction: '人気のハート・星・リボン・お花、丸・三角・四角・ボーダー・チェックなどのベーシックな柄、楽しく華やかなフルーツ・スイーツ モチーフ、大人かわいいアニマル・文具・小物　etc…。あしらいとしてなじみやすく、時代を問わず需要度の高いハッピーでファンシーな柄をいっぱい集めました！　全柄について、ライン・フレーム・パターンをセットで収録しているので、誰でも簡単に、統一感のあるデザインができます。',
        tag:["lisence","allJpg","allEpsPsd","partIllust","font"]
      },
      {
        name: '和風ロマン素材CD-ROM',
        image: 'https://www.maar.com/wp-content/uploads/2015/09/9784837307662_cover.jpg',
        introduction: '桜や紅葉、鞠や貝合わせなど、華やかでロマンティックな和風地紋＆素材を収録。 商用デザインから同人誌、季節のおたよりまで幅広くお使い頂ける、シンプル＆見栄えのする和柄パターンが満載です。パソコン初心者にもやさしい解説付き',
        tag:["lisence","allJpg","allEpsPsd","partIllust"]
      },
      {
        name: 'Sweet & Natural手描きでかわいいイラストとフォントの素材集',
        image: 'https://www.sbcr.jp/img/t/4797392678_m.jpg',
        introduction: '日本人の大好きな国や地域の素材をたくさん集めました。パリにはじまり、ロンドン、北欧・東欧、ハワイ・アメリカ、そして最終地点の日本へ本をめくって旅をするように素材を探してみてください。きっと使って楽しい、素敵な素材に出会えます。イラストは透明感がある手描きの水彩風のタッチです。綺麗なにじみがイラストを甘く、やさしく、ほんわかと包んでくれます。その他にも、可愛らしいオリジナルフォント14書体や旅の写真も収録しています。オリジナルフォントはイラストで文字を表現しているので、この本でしか手に入らない特別なイラスト文字です。デザイン、ホームキッチン、ケース、小物、カレンダーなどたくさんの使い方の実例写真もあるので、ぜひ参考にしてみてください。PhotoshopやIllustratorなどのグラフィックソフトをはじめ、WordやExcelなど、さまざまなソフトでご使用いただけます。',
        tag:["lisence","allJpg","photo","allIllust","font"]
      },
    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>Material Collection Books Searcher</h1>

            <h2>書籍の素材集を検索できるサイトです。</h2>
            <h3>以下より希望の条件を選択してください。</h3>
          </div>


          <div className="checklist-container">

            <input type="checkbox" id="a_ch1" />
            <label for="a_ch1"  onClick={() => {this.handleClickTag("lisence")}}>商用利用OK</label>
          	<input type="checkbox" class="check_box" id="a_ch2"/>
          	<label class ="lael" for="a_ch2" onClick={() => {this.handleClickTag("allIllust")}}>全て手描き素材</label>
            <input type="checkbox" id="a_ch3" />
          	<label for="a_ch3" onClick={() => {this.handleClickTag("partIllust")}}>一部手描き素材あり</label>
          	<input type="checkbox" id="a_ch4" />
          	<label for="a_ch4" onClick={() => {this.handleClickTag("allEpsPsd")}}>全てにai/eps/psdデータあり</label>
            <input type="checkbox" id="a_ch5" />
          	<label for="a_ch5" onClick={() => {this.handleClickTag("partEpsPsd")}}>一部のみai/eps/psdデータあり</label>
            <input type="checkbox" id="a_ch6" />
          	<label for="a_ch6" onClick={() => {this.handleClickTag("allJpg")}}>全てにjpg/pngデータあり</label>
            <input type="checkbox" id="a_ch7" />
          	<label for="a_ch7" onClick={() => {this.handleClickTag("partJpg")}}>一部のみjpg/pngデータあり</label>
            <input type="checkbox" id="a_ch8" />
          	<label for="a_ch8" onClick={() => {this.handleClickTag("photo")}}>写真データを含む</label>
            <input type="checkbox" id="a_ch9" />
          	<label for="a_ch9" onClick={() => {this.handleClickTag("font")}}>フォントデータを含む</label>

          </div>

        </div>




        <div className='lesson-container'>

          {lessonList.map((lessonItem) => {
          //全てにチェックが入っていない初期状態では、すべてを表示する。
          //デフォルト表記がこれ
          if(this.tagChecker()===true){
            return (
              <Lesson
                name={lessonItem.name}
                image={lessonItem.image}
                introduction={lessonItem.introduction}
                tag={lessonItem.tag}
              />
            );

          }else{
            let ch=true;
              //this.tagChecker()に入っている数の分だけ、someを回す。
              //テストにillust,lisenceの順番を変えてみても動いたやったー！
              for(let i=0;i <this.tagChecker().length;i++){
                ch = ch && lessonItem.tag.some(t=>t===this.tagChecker()[i]);
              }

              if(ch){
                //alert(lessonItem.tag + "タグチェッカー:" + this.tagChecker())
                return (
                  <Lesson
                    //name={lessonItem.name}
                    name={lessonItem.name}
                    image={lessonItem.image}
                    introduction={lessonItem.introduction}
                    tag={lessonItem.tag}
                  />
                );
              }
            }
          })}
          </div>
        <div class="clear"></div>
      </div>
    );
  }
}

export default Main;
