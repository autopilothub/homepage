import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Solution — Physical AI for Off-Road Autopilot | AutopilotHub",
  description:
    "How AutopilotHub's physical AI senses, perceives, and warns — and the roadmap from warning to off-road autopilot.",
};

const HOW_IT_WORKS = [
  {
    title: "Sense",
    description:
      "A spinning lidar paired with a Jetson-class edge compute unit is retrofitted onto existing equipment — no new vehicle purchase required.",
  },
  {
    title: "Perceive",
    description:
      "Perception AI trained on dusty, low-light, off-road footage detects people and obstacles in the machine's blind spots.",
  },
  {
    title: "Warn",
    description:
      "The operator gets a real-time alert before a collision happens, with logs that feed safety reporting.",
  },
];

const AUTOPILOT_LEVELS = [
  {
    stage: "NOW",
    title: "Warn",
    description:
      "The system detects people and obstacles and alerts the operator. The operator still does all the driving and braking — this is what we have built and are testing today.",
  },
  {
    stage: "NEXT",
    title: "Assist",
    description:
      "The system intervenes for the operator in narrow, well-validated cases — for example, automatically slowing the machine when a collision is imminent and the operator hasn't reacted.",
  },
  {
    stage: "LATER",
    title: "Autopilot",
    description:
      "The system handles defined maneuvers on its own within a constrained site or task. This is the destination the company is named for — not a capability we are claiming today.",
  },
];

const ROADMAP = [
  {
    stage: "NOW",
    title: "Perception software + RC-scale PoC",
    description:
      "Validate detection accuracy in dust, glare, and low light on a remote-controlled testbed before any real-machine hardware is built.",
  },
  {
    stage: "NEXT",
    title: "Hub-Box: retrofit edge hardware",
    description:
      "An on-board lidar and Jetson-class compute unit running our perception models, ruggedized for heat, vibration, and dust, and built to interface with existing equipment electronics.",
  },
  {
    stage: "LATER",
    title: "Hub-HIL Rig: validation infrastructure for OEMs",
    description:
      "A hardware-in-the-loop rig that lets equipment manufacturers test our perception stack against their own control systems before adopting it at scale — the kind of infrastructure conservative OEMs need before they trust a new supplier.",
  },
];

const MARKETS = [
  {
    title: "Mining & quarrying",
    description:
      "Haul trucks, excavators, and loaders operating in dust and low visibility, where blind-spot collisions are a leading cause of site fatalities.",
  },
  {
    title: "Construction",
    description:
      "Sites where workers on foot and heavy equipment share tight, constantly changing space.",
  },
  {
    title: "Agriculture",
    description:
      "Tractors and combines, an almost entirely unaddressed market as rural operators age and ADAS adoption sits near zero.",
  },
];

export default function SolutionPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20">
      <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Solution
      </span>
      <h1 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
        Physical AI for the world's hardest job sites
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        The hardware is commodity. The defensible part is the AI that turns
        lidar and edge-compute data into a reliable collision warning in
        conditions where consumer and automotive ADAS fail — dust, glare,
        and unpaved, irregular terrain. We call the destination "autopilot."
        Today, we are at the first, most honest step of it.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {HOW_IT_WORKS.map((step, i) => (
          <Card key={step.title} className="relative">
            <CardHeader>
              <span className="font-mono text-xs text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <CardTitle className="mt-2">{step.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {step.description}
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-16" />

      <h2 className="text-2xl font-medium tracking-tight">
        Levels of autopilot
      </h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        "Autopilot" implies the system acts on its own. We only want to use
        that word for what we have actually validated, so here is the path
        from where we are to what the name promises.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {AUTOPILOT_LEVELS.map((level) => (
          <Card key={level.stage}>
            <CardHeader>
              <span className="font-mono text-xs text-brand">
                {level.stage}
              </span>
              <CardTitle className="mt-2">{level.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {level.description}
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-16" />

      <h2 className="text-2xl font-medium tracking-tight">Target markets</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        We are validating which of these markets to prioritize first based on
        proof-of-concept results and operator interviews.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {MARKETS.map((market) => (
          <Card key={market.title}>
            <CardHeader>
              <CardTitle>{market.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {market.description}
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-16" />

      <h2 className="text-2xl font-medium tracking-tight">
        Proof of concept: an RC-scale testbed
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Mounting unproven hardware on a multi-ton excavator is slow and
        expensive. Instead, we run our sensor stack and perception models on
        a remote-controlled car scaled down to the same proportions, which
        lets us iterate quickly on:
      </p>
      <figure className="mt-6 max-w-md">
        <Image
          src="/images/poc-concept.png"
          alt="Concept render of the RC-scale testbed: a rock-crawler chassis with a spinning lidar unit and a Jetson-class edge compute module mounted on a carbon-fiber plate."
          width={1376}
          height={768}
          className="w-full rounded-lg border"
        />
        <figcaption className="mt-2 text-xs text-muted-foreground">
          Concept render — design reference for the build, not a photo of a
          finished unit.
        </figcaption>
      </figure>
      <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-6 text-sm text-muted-foreground">
        <li>Detection accuracy in dust, glare, and low light.</li>
        <li>
          Cost-versus-performance tradeoffs across different lidar and
          edge-compute configurations.
        </li>
        <li>
          Demo footage we can bring to safety managers and equipment makers
          before committing to full-scale hardware integration.
        </li>
      </ul>

      <Separator className="my-16" />

      <h2 className="text-2xl font-medium tracking-tight">
        Hardware roadmap
      </h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        This is where we are heading, not what we have shipped or sold today.
        We are labeling it as a roadmap on purpose.
      </p>
      <p className="mt-4 max-w-2xl border-l-2 border-brand pl-4 text-sm text-foreground/80">
        Today: lidar and our Jetson-class edge compute feed our AI, which
        sends a warning to the operator. Next: the same AI sends a control
        signal through the equipment's own electronics (e.g. ISOBUS on a
        tractor) instead of a screen alert.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {ROADMAP.map((phase) => (
          <Card key={phase.stage}>
            <CardHeader>
              <span className="font-mono text-xs text-brand">
                {phase.stage}
              </span>
              <CardTitle className="mt-2">{phase.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {phase.description}
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-16" />

      <h2 className="text-2xl font-medium tracking-tight">
        Our approach to safety
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        We are an early-stage company. Nothing below is a certification claim
        — it is how we are building toward one, and we would rather say that
        plainly than overstate where we are. We track the dated specifics in
        our{" "}
        <Link href="/proof" className="underline underline-offset-4">
          Proof Ledger
        </Link>
        .
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>What we test today</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            On the RC-scale testbed, we run detection trials across a
            deliberate matrix of dust, glare, and low-light conditions, and
            track false-negative and false-positive rates for each — not just
            a single demo run under good lighting.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>What still has to be proven</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Vibration, sensor mounting, power delivery, and real machine
            geometry are not yet validated — RC-scale results do not transfer
            automatically to a multi-ton excavator or tractor. That transfer
            is the next phase of testing, not something we claim to have
            solved already.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
