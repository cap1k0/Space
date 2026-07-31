import Link from "next/link";

export default function HowBrucaEditsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link href="/docs" className="mb-8 inline-block text-sm text-neutral-500 hover:text-neutral-800">
          ← Back to docs
        </Link>

        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-500">
          Getting started
        </p>
        <h1 className="mb-8 text-3xl font-medium">How Bruca edits</h1>

        <div className="space-y-4 text-base leading-relaxed text-neutral-700">
          <p>
            {/* TODO: replace this placeholder text with the real article */}
            Write the article content here.
          </p>
        </div>
      </div>
    </main>
  );
}
