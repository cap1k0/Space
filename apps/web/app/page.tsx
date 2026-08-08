import Link from "next/link";
import Logo from "./components/Logo";
import CookieBanner from "./components/CookieBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-8">
        {/* Nav */}
        <nav className="mb-20 flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <a href="#product" className="hover:text-neutral-900">
              Product
            </a>
            <a href="#research" className="hover:text-neutral-900">
              Research
            </a>
            <a href="/docs" className="hover:text-neutral-900">
              Docs
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block rounded-md bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
            beta
          </span>

          <h1 className="mb-4 text-4xl font-medium leading-tight sm:text-5xl">
            A model built for how research is actually written
          </h1>

          <p className="mb-6 text-base leading-relaxed text-neutral-600">
            Bruca is an ecosystem of models and datasets built by a diverse team of developers, 
            with a focus on fairness and diversity in AI development,
            as well as building post-AI systems and vertical AI for specialized domains.

          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://ai.bruca.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border-2 border-blue-600 bg-blue-50 px-5 py-2.5 font-medium text-blue-800"
            >
              Try the editing agent →
            </a>

            <a
              href="#research"
              className="rounded-md border border-neutral-300 px-5 py-2.5 font-medium text-neutral-700"
            >
              Read the research
            </a>
          </div>
        </section>

        {/* Product preview */}
        <section
          id="product"
          className="mb-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
        >
          <div className="mb-4 flex items-center gap-2 text-xs text-neutral-500">
            <span>draft.docx</span>
          </div>

          <p className="text-base leading-relaxed">
            The results{" "}
            <span className="bg-red-100 text-red-800 line-through">
              indicate that
            </span>{" "}
            <span className="bg-green-100 text-green-800">
              suggest
            </span>{" "}
            a significant correlation between the two variables, which{" "}
            <span className="bg-red-100 text-red-800 line-through">
              was not expected by us
            </span>{" "}
            <span className="bg-green-100 text-green-800">
              we did not anticipate
            </span>
            .
          </p>
        </section>

        {/* Model development space */}
        <section
          id="research"
          className="mb-16 rounded-xl border border-neutral-200 p-6"
        >
          <h2 className="mb-2 text-lg font-medium">
            Model development space
          </h2>

          <p className="mb-4 max-w-2xl text-sm leading-relaxed text-neutral-600">
            Where we train and evaluate the models behind Bruca, including
            our ongoing research into how professional and AI-generated
            edits differ in scholarly publications, and how academic writers
            actually engage with AI-assisted language editing.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Model 1 */}
            <a
              href="https://huggingface.co/undertakingroad/AIessaydetectionModel"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-neutral-50 p-4 transition-colors hover:bg-neutral-100"
            >
              <p className="mb-1 text-xs text-neutral-500">
                Model
              </p>

              <p className="font-medium">
                AI Essay Detection Model →
              </p>

              <p className="mt-2 text-xs text-neutral-500">
                Hugging Face
              </p>
            </a>

            {/* Model 2 */}
            <div className="rounded-lg bg-neutral-50 p-4">
              <p className="mb-1 text-xs text-neutral-500">
                Model
              </p>

              <p className="font-medium">
                در حال توسعه
              </p>

              <p className="mt-2 text-xs text-neutral-500">
                Coming soon
              </p>
            </div>

            {/* Model 3 */}
            <div className="rounded-lg bg-neutral-50 p-4">
              <p className="mb-1 text-xs text-neutral-500">
                Model
              </p>

              <p className="font-medium">
                در حال توسعه
              </p>

              <p className="mt-2 text-xs text-neutral-500">
                Coming soon
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex items-center justify-between border-t border-neutral-200 pt-4 text-sm text-neutral-500">
          <span>© 2026</span>

          <Link
            href="/terms"
            className="hover:text-neutral-800"
          >
            Terms of service
          </Link>
        </footer>
      </div>

      <CookieBanner />
    </main>
  );
}
