import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MARKETS = [
  {
    title: "Mining",
    description:
      "Dust, low light, and large blind spots make haul trucks and excavators among the riskiest machines on a site.",
  },
  {
    title: "Construction",
    description:
      "Workers on foot share space with heavy equipment, where a single missed near-miss can be fatal.",
  },
  {
    title: "Agriculture",
    description:
      "Aging rural labor and reversing tractors create a fast-growing, almost entirely unaddressed safety gap.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <Image
          src="/images/poc-blueprint.png"
          alt="Blueprint-style concept render of the RC-scale testbed, annotated with a lidar module, stereo depth cameras, edge compute unit, battery pack, and comms module."
          fill
          priority
          className="object-cover opacity-40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50"
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/70">
            Physical AI for off-road autopilot
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            An autopilot for the machines that build, mine, and feed the
            world.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            AutopilotHub builds physical AI — AI that has to sense and reason
            about the real world, not just text or images — starting with
            collision-avoidance autopilots for heavy equipment in the dust,
            low light, and rough terrain ordinary ADAS was never built for.
          </p>
          <div className="mt-10 flex gap-4">
            <Link
              href="/solution"
              className="inline-flex h-11 items-center rounded-md bg-brand px-6 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90"
            >
              See the solution
            </Link>
            <Link
              href="/about#contact"
              className="inline-flex h-11 items-center rounded-md border border-white/20 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Talk to us
            </Link>
          </div>
        </div>
        <p className="relative px-6 pb-4 text-right text-xs text-white/40 sm:absolute sm:right-6 sm:bottom-4 sm:px-0">
          PoC design concept — not a finished unit
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <p className="max-w-2xl text-sm font-medium uppercase tracking-wider text-brand">
          Physical AI
        </p>
        <h2 className="mt-2 text-3xl font-medium tracking-tight">
          Built for off-road, not the highway
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Most AI ships as a chatbot or a model behind an API. Physical AI
          has to work in the real world — dust, vibration, glare, machines
          that weigh forty tons — where being wrong has physical
          consequences. Most ADAS is also built for paved roads and new
          vehicles. We focus on the equipment and sites everyone else
          ignores.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {MARKETS.map((market) => (
            <Card key={market.title} className="border-t-2 border-t-brand">
              <CardHeader>
                <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {market.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/80">
                {market.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <Card className="border-dashed">
          <CardContent className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Currently validating with an RC-scale testbed
              </h2>
              <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                Before mounting hardware on real machines, we are proving out
                the perception stack on a low-cost RC-car platform.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <Link
                href="/proof"
                className="inline-flex h-10 items-center rounded-md border px-5 text-sm font-medium transition-colors hover:bg-accent"
              >
                Proof Ledger
              </Link>
              <Link
                href="/about"
                className="inline-flex h-10 items-center rounded-md border px-5 text-sm font-medium transition-colors hover:bg-accent"
              >
                Read our story
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
