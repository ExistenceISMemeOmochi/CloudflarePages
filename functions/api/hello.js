// これは Pages Functions (Cloudflare Workers) のコードです。

// GETリクエストがこのエンドポイントに送られたときに実行されます。
export async function onRequest(context) {
  // context.request からリクエストの詳細を取得できますが、今回はシンプルなJSONを返します。
  
  const data = {
    message: "動的なAPIがCloudflare Workers (Pages Functions) で動作しています！",
    time: new Date().toISOString(),
    status: "Success (Free Plan)"
  };

  // Reactアプリが読み取れるようにJSON形式で応答を返します。
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}