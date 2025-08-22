export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold">Lumina Editor</h1>
      <div className="mt-4 space-x-4">
        <button className="rounded bg-blue-500 px-4 py-2 text-white">背景削除</button>
        <button className="rounded bg-green-500 px-4 py-2 text-white">サイズプリセット</button>
        <button className="rounded bg-purple-500 px-4 py-2 text-white">書き出し</button>
      </div>
    </main>
  );
}
