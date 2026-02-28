export default function Now() {
  const sections = [
    {
      title: "current focus",
      icon: "◉",
      content: (
        <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed">
          learning machine learning and deep learning through hands-on coursework and implementation.
        </p>
      ),
    },
    {
      title: "learning",
      icon: "⚡",
      content: (
        <ul className="space-y-3 text-base md:text-lg text-muted-foreground/90">
          {[
            "end-to-end machine learning with scikit-learn",
            "regression, classification, SVMs, trees, and ensemble methods",
            "model evaluation, regularization, and feature selection",
            "deep learning models: CNNs, RNNs, LSTMs, and transformers",
            "generative models: autoencoders, GANs, diffusion models, and LLM fine-tuning",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "reading",
      icon: "📖",
      content: (
        <p className="text-base md:text-lg text-muted-foreground/90 italic">
          Hands-On Machine Learning with Scikit-Learn & PyTorch — Aurélien Géron
        </p>
      ),
    },
    {
      title: "personal",
      icon: "✦",
      content: (
        <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed">
          cutting down on distractions, maintaining a personal knowledge base, and playing games.
        </p>
      ),
    },
  ];

  return (
    <div className="max-w-2xl mx-auto pt-24 md:pt-32 pb-20 px-6 md:px-8">
      <div className="mb-10 animate-fade-in-up">
        <h1 className="text-xl md:text-3xl font-bold tracking-tight text-gradient-subtle">now</h1>
        <p className="text-sm text-muted-foreground/50 mt-1 font-mono">what i&apos;m focused on these days</p>
      </div>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className="card p-6 animate-fade-in-up"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg">{section.icon}</span>
              <h2 className="text-base md:text-lg font-semibold text-accent">
                {section.title}
              </h2>
            </div>
            {section.content}
          </div>
        ))}
      </div>

      <div className="divider mt-10 mb-4" />
      <p className="text-xs text-muted-foreground/40 font-mono animate-fade-in-up" style={{ animationDelay: '600ms' }}>
        last updated — january 20, 2026
      </p>
    </div>
  );
}
