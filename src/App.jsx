import React, { useState, useEffect } from 'react';
import './App.css'; // XP風のスタイルを適用するためにCSSをインポート

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
    <div className="xp-desktop">
      {/* Windowsのタスクバー風のフッター */}
      <div className="xp-taskbar">
        <button className="xp-start-button">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Windows_XP_Start_button.svg/120px-Windows_XP_Start_button.svg.png" alt="Start" className="start-icon" />
          スタート
        </button>
        <div className="xp-quick-launch"></div>
        <div className="xp-taskbar-clock">{new Date().toLocaleTimeString()}</div>
      </div>

      {/* ウィンドウ風のメインコンテンツエリア */}
      <div className="xp-window">
        <div className="xp-title-bar">
          <span className="xp-window-title">C:\Documents and Settings\omochiisidiot\My Website.html</span>
          <div className="xp-window-controls">
            <button className="xp-control-button minimize">_</button>
            <button className="xp-control-button maximize">□</button>
            <button className="xp-control-button close">X</button>
          </div>
        </div>
        <div className="xp-menu-bar">
          <span>ファイル(F)</span>
          <span>編集(E)</span>
          <span>表示(V)</span>
          <span>お気に入り(A)</span>
          <span>ツール(T)</span>
          <span>ヘルプ(H)</span>
        </div>
        <div className="xp-toolbar">
          <button>戻る</button>
          <button>進む</button>
          <button>停止</button>
          <button>最新の情報に更新</button>
          <button>ホーム</button>
        </div>
        <div className="xp-content">
          <h1>Welcome to Omochiisidiot.net</h1>
          <p>このサイトは、Cloudflare PagesとWorkers (Pages Functions) で動いています。</p>
          <p>しかし、私のサイトは<strong>自宅サーバー</strong>への情熱から生まれたものです！</p>
          <hr />

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

          <div className="xp-status-bar">
            <span>Ready.</span>
            <span>インターネット</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;