'use client';

import { FormEvent, useState } from 'react';

export default function Home() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setLoading(true);
    setError(null);
    setPreviewUrl(null);

    try {
      const res = await fetch('/api/remove-bg', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) {
        throw new Error('背景削除に失敗しました');
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setPreviewUrl(url);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-4">
      <h1 className="text-3xl font-bold">Lumina Editor</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-2">
        <input type="file" name="file" accept="image/*" required />
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
          disabled={loading}
        >
          {loading ? '処理中...' : '背景削除'}
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {previewUrl && (
        <img src={previewUrl} alt="result" className="max-w-sm" />
      )}
    </main>
  );
}
