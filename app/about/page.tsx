import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CONTACT_EMAIL = "contact@autopilothub.com";

export const metadata: Metadata = {
  title: "About — Physical AI for Off-Road Autopilot | AutopilotHub",
  description:
    "Why AutopilotHub is building physical AI for off-road autopilot, starting with collision-avoidance for heavy equipment — and how to get in touch.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-20">
      <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        About
      </span>
      <h1 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
        Why AutopilotHub exists
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Most of the AI built in the last few years lives on a screen — it
        reads text, writes text, looks at images. Physical AI is different:
        it has to perceive a real environment and be right about it, because
        being wrong has physical consequences. Self-driving research has
        spent over a decade pointing that kind of AI at the highway.
        Meanwhile, the machines doing the most dangerous work — excavators on
        a mine bench, dump trucks on a construction site, tractors on a
        family farm — still rely entirely on an operator's eyes and a mirror.
        We think that gap is where physical AI can save lives fastest.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>The problem we see</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Off-road sites mix heavy equipment with people on foot, in dust,
            low light, and uneven terrain that standard automotive ADAS was
            never designed for. Regulation is pushing site operators to
            invest in safety, but there is no off-the-shelf system built for
            their environment.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Why "autopilot"</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            We named the company for the destination, not the current state.
            An autopilot starts as something that watches and warns, and
            earns its way toward acting — one validated step at a time. Our
            product today is the first step: warning, not control.
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Our approach</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Rather than building bespoke hardware first, we pair an
            off-the-shelf lidar and a Jetson-class edge compute unit with
            perception AI tuned for dust, glare, and irregular terrain — and
            we are validating that AI on an RC-scale testbed before it ever
            touches a real machine.
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">Where we are today</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          AutopilotHub is an early-stage, founder-led company. We are running
          a proof-of-concept on an RC-car platform to validate our detection
          algorithms in dusty, low-light, off-road conditions, while talking
          to safety managers in mining, construction, and agriculture to
          confirm where the system creates the most value first.
        </p>
      </div>

      <div id="contact" className="mt-16 scroll-mt-20 border-t pt-12">
        <h2 className="text-xl font-semibold tracking-tight">Get in touch</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Whether you run safety for a mine, a construction site, or a fleet
          of farm equipment — or you are an investor or partner interested in
          off-road physical AI — we want to hear from you.
        </p>
        <Card className="mt-6 max-w-md">
          <CardHeader>
            <CardTitle>Email us</CardTitle>
          </CardHeader>
          <CardContent>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-lg font-medium underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              We typically reply within a few business days.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
