import { content } from './content'
import { GlassButton } from './components/GlassButton'
import { GlassCard } from './components/GlassCard'
import { GlassPanel } from './components/GlassPanel'

function App() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-10 sm:px-8">
      <GlassPanel className="mb-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-700/80 dark:text-slate-200/80">
          Hackathon Showcase
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          Liquid Glass Landing Experience
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-700/90 sm:text-lg dark:text-slate-200/90">
          A polished landing page for your demo video and pitch deck, with subtle
          glass depth, smooth motion, and clean typography.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <GlassButton href="#video">Watch Demo</GlassButton>
          <GlassButton href="#pitch" variant="secondary">
            Open Pitch Deck
          </GlassButton>
        </div>
      </GlassPanel>

      <section id="video" className="mb-8">
        <GlassPanel title="Video Demo" subtitle="Share your product walkthrough in a focused, elegant frame.">
          <GlassCard className="overflow-hidden p-0">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={content.videoEmbedUrl}
                title="Hackathon video demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </GlassCard>
          <p className="mt-3 text-sm text-slate-700/90 dark:text-slate-200/90">
            Need to swap the video quickly? Update <code>src/content.js</code>.
          </p>
        </GlassPanel>
      </section>

      <section id="pitch">
        <GlassPanel title="Pitch Slides" subtitle="Embed your narrative and keep a fallback link for reliability.">
          <GlassCard className="overflow-hidden p-0">
            <div className="h-[28rem] w-full">
              <iframe
                className="h-full w-full"
                src={content.pitchDeckEmbedUrl}
                title="Pitch slides"
                allowFullScreen
              />
            </div>
          </GlassCard>
          <div className="mt-4 flex flex-wrap gap-3">
            <GlassButton href={content.pitchDeckOpenUrl} external>
              Open Slides
            </GlassButton>
            <GlassButton href={content.videoOpenUrl} external variant="secondary">
              Open Video Link
            </GlassButton>
          </div>
        </GlassPanel>
      </section>
    </main>
  )
}

export default App
