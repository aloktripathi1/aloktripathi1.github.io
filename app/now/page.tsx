export default function Now() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-start pt-16 md:pt-20 pb-10 px-4 md:px-8 animate-in fade-in duration-700">
      <section className="space-y-8 md:space-y-10">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
            now
          </h1>
          {/* <p className="text-sm text-muted-foreground/70">
            what i&apos;m focused on these days
          </p> */}
        </div>

        <div className="space-y-8">
          {/* Current Focus */}
          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-semibold text-accent">
              current focus
            </h2>
            <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed">
              learning machine learning and deep learning through hands-on coursework and implementation.
            </p>
          </div>

          {/* Learning */}
          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-semibold text-accent">
              learning
            </h2>
            <ul className="space-y-2 text-base md:text-lg text-muted-foreground/90">
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>end-to-end machine learning with scikit-learn</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>regression, classification, SVMs, trees, and ensemble methods</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>model evaluation, regularization, and feature selection</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>deep learning models: CNNs, RNNs, LSTMs, and transformers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>generative models: autoencoders, GANs, diffusion models, and LLM fine-tuning</span>
              </li>
            </ul>
          </div>

          {/* Reading */}
          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-semibold text-accent">
              reading
            </h2>
            <p className="text-base md:text-lg text-muted-foreground/90 italic">
              Hands-On Machine Learning with Scikit-Learn & PyTorch — Aurélien Géron
            </p>
          </div>

          {/* Personal */}
          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-semibold text-accent">
              personal
            </h2>
            <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed">
               cutting down on distractions, maintaining a personal knowledge base, and playing games.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-border/40">
          <p className="text-sm text-muted-foreground/60">
            this page was last updated on january 20, 2026.
          </p>
        </div>
      </section>
    </div>
  );
}
