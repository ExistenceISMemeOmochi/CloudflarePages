import React, { useState, useEffect } from 'react';
import './App.css'; 
// 注意: このCSSはXP風のデザイン要素をターゲットにしているため、
// 後続のCSS修正を適用しないとデザインが崩れる可能性があります。

function App() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  // APIからデータを取得するロジック（そのまま使用）
  useEffect(() => {
    fetch('/api/hello')
      .then(response => {
        if (!response.ok) {
          throw new Error('API呼び出しに失敗しました');
        }
        return response.json();
      })
      .then(data => {
        setApiData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("フェッチエラー:", error);
        setLoading(false);
      });
  }, []);

  return (
    // 以前の 'xp-desktop' や 'xp-window' は削除し、シンプルなコンテナに置き換えます
    <div className="simple-site-container"> 
      
      {/* XPウィンドウのコンテンツエリア風のスタイルを流用 */}
      <div className="xp-content-simple">
        
        {/* コンテンツタイトル */}
        <h1>Welcome to Omochiisidiot.net</h1>
        <p>このサイトは、Cloudflare PagesとWorkers (Pages Functions) で動いています。</p>
        <p>しかし、私のサイトは<strong>自宅サーバー</strong>への情熱から生まれたものです！</p>
        <hr />

        {/* 自宅サーバーの詳細 */}
        <h2>⚙️ 自宅サーバーへのこだわり ⚙️</h2>
        <div className="server-details">
          <p><strong>OS:</strong> なんかごちゃごちゃしたLinuxディストリビューション</p>
          <p><strong>CPU:</strong> どこかから掘り出してきたIntel Core i5 (第3世代くらい)</p>
          <p><strong>RAM:</strong> 8GB (足りない)</p>
          <p><strong>ストレージ:</strong> 余ったHDDとSSDの寄せ集め</p>
          <p><strong>ネットワーク:</strong> ISPのルーターを無理やり開放</p>
          <p>夜な夜なコマンドを叩き、ルーターの設定と格闘し、いつ来るか分からない停電に怯えながら運用しています。</p>
          <p>このサイトも、本当は全部自宅サーバーで動かしたい気持ちでいっぱいです。</p>
          <p>どこかで謎のポートが開いているかもしれません。</p>
        </div>
        <hr />

        {/* 動的なWorkersからのメッセージ */}
        <h2>Cloudflare Workersからのメッセージ</h2>
        {loading ? (
          <p className="xp-status-bar">データを受信中...</p>
        ) : apiData ? (
          <div className="api-info">
            <p><strong>メッセージ:</strong> {apiData.message}</p>
            <p><strong>時刻:</strong> {apiData.time}</p>
            <p><strong>ステータス:</strong> {apiData.status}</p>
          </div>
        ) : (
          <p className="xp-status-bar error">データの取得に失敗しました。</p>
        )}

      </div>
      
    </div>
  );
}

export default App;