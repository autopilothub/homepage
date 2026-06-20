import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Proof Ledger — Physical AI for Off-Road Autopilot | AutopilotHub",
  description:
    "A dated, public log of what AutopilotHub has actually validated — and what we haven't yet.",
};

const LEDGER = [
  {
    date: "2026-06-20",
    status: "logged" as const,
    title: "Company thesis defined",
    description:
      "Physical AI for off-road autopilot, targeting collision-avoidance for mining, construction, and agriculture equipment.",
  },
  {
    date: "2026-06-20",
    status: "logged" as const,
    title: "RC-scale PoC chosen over real-machine hardware",
    description:
      "Decided to validate the perception stack on a remote-controlled testbed first, rather than mounting unproven hardware on a real excavator or tractor.",
  },
  {
    date: "2026-06-20",
    status: "logged" as const,
    title: "PoC hardware design concept defined",
    description:
      "A rock-crawler RC chassis carrying a spinning lidar and a Jetson-class edge compute unit. This is a design concept, not a built or tested unit yet.",
    image: "/images/poc-concept.png" as const,
  },
  {
    date: "2026-06-20",
    status: "logged" as const,
    title: "Solution architecture and autopilot levels published",
    description:
      "Sense → Perceive → Warn defined as the current system. Warn / Assist / Autopilot labeled NOW / NEXT / LATER so the word \"autopilot\" isn't used for anything we haven't validated.",
  },
  {
    date: "2026-06-20",
    status: "logged" as const,
    title: "Hardware roadmap published (Hub-Box, Hub-HIL Rig)",
    description:
      "Labeled explicitly as roadmap, not shipped or sold product. No customer contracts exist for either today.",
  },
  {
    date: "—",
    status: "pending" as const,
    title: "RC-scale detection results across the dust / glare / low-light matrix",
    description:
      "Not logged yet. This is the next entry — real numbers, including the ones that don't look good, as soon as we have them.",
  },
] satisfies Array<{
  date: string;
  status: "logged" | "pending";
  title: string;
  description: string;
  image?: string;
}>;

export default function ProofPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-20">
      <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Proof Ledger
      </span>
      <h1 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
        What we've actually validated, dated
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Most companies in this space lead with what they're building toward.
        We'd rather keep a running, dated log of what's actually true today,
        and add to it as it becomes true — including the entries that aren't
        flattering yet.
      </p>

      <div className="mt-12 space-y-4">
        {LEDGER.map((entry) => (
          <Card key={entry.title}>
            <CardHeader className="flex-row items-baseline justify-between gap-4 space-y-0">
              <CardTitle className="text-base">{entry.title}</CardTitle>
              <span
                className={
                  "shrink-0 font-mono text-xs " +
                  (entry.status === "logged"
                    ? "text-brand"
                    : "text-muted-foreground")
                }
              >
                {entry.date}
              </span>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {entry.description}
              {entry.image && (
                <figure className="mt-4 max-w-sm">
                  <Image
                    src={entry.image}
                    alt="Concept render of the RC-scale testbed hardware"
                    width={1376}
                    height={768}
                    className="w-full rounded-lg border"
                  />
                  <figcaption className="mt-1 text-xs">
                    Concept render, not a photo of a finished unit.
                  </figcaption>
                </figure>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
