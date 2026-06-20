import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Research — Physical AI for Off-Road Autopilot | AutopilotHub",
  description:
    "The external research AutopilotHub's roadmap thinking is grounded in — off-road autonomy, agricultural perception, and world models for physical AI.",
};

type Paper = {
  title: string;
  venue: string;
  href: string;
  tldr: string;
  method: string;
  finding: string;
  relevance: string;
};

type Category = {
  name: string;
  description: string;
  papers: Paper[];
};

const CATEGORIES = [
  {
    name: "Off-road control & physical AI",
    description:
      "Unlike highway driving, off-road control has to handle unmapped terrain and unpredictable physical dynamics like slip and traction loss.",
    papers: [
      {
        title: "Off-road Autonomous Driving via Guided Reinforcement Learning",
        venue: "CMU Robotics Institute — MSR Thesis (Vedant Mundheda), 2025",
        href: "https://publications.ri.cmu.edu/storage/publications/2025/08/Vedant_Mundheda_MSR_Thesis.pdf",
        tldr:
          "A lightweight runtime controller, guided during training by a heavier planner, drives unmapped off-road terrain without needing that heavy planner at inference time.",
        method:
          "An MPPI (Model Predictive Path Integral) teacher policy generates dense waypoint guidance during training. A separate, much cheaper student policy (the thesis's TADPO approach) learns to track sparse waypoints directly, so the expensive online planner doesn't have to run at runtime.",
        finding:
          "Deployed on CMU's Sabrecat off-road platform, the guided approach navigated unmapped, variable terrain and performed evasive obstacle avoidance (including around barrels) using a controller cheap enough to run onboard in real time.",
        relevance:
          "We are at the Warn level today — this is research background for what an Assist or Autopilot level would eventually need: a runtime-cheap controller, not a heavy planner, on Jetson-class edge compute. We have not implemented anything like this.",
      },
    ],
  },
  {
    name: "Agricultural machinery & motion control",
    description:
      "Agricultural autonomy has its own literature, distinct from automotive ADAS, built around navigation reliability and vehicle-implement coordination.",
    papers: [
      {
        title:
          "Autonomous Driving in Agricultural Machinery: Advancing the Frontier of Precision Agriculture",
        venue: "Actuators (MDPI), 2025 — systematic review of 506 publications",
        href: "https://www.mdpi.com/2076-0825/14/9/464",
        tldr:
          "A 506-paper review organizes agricultural autonomy around three recurring problems: navigation reliability, vehicle-implement motion coordination, and actuator fault-tolerance.",
        method:
          "Systematic literature review across GNSS-based, machine-vision-based, and lidar-based navigation approaches, plus the motion-control mechanisms that coordinate a tractor with whatever implement (planter, sprayer) is attached to it.",
        finding:
          "Coordinating the tractor's own motion with its attached implement — not just navigating the field — is one of the field's persistent open problems, alongside detecting and tolerating actuator faults in harsh field conditions.",
        relevance:
          "This maps directly onto the Hub-Box → ISOBUS item on our hardware roadmap: the tractor-implement communication problem this review describes is exactly what that interface would need to solve. It also places lidar as an established agricultural navigation modality, consistent with our own PoC sensor choice — though we didn't choose lidar because of this paper.",
      },
    ],
  },
  {
    name: "World models & simulation",
    description:
      "A world model predicts how an environment will change in response to actions, rather than only classifying what's in the current frame — relevant to anything beyond a pure warning system.",
    papers: [
      {
        title:
          "The Role of World Models in Shaping Autonomous Driving: A Comprehensive Survey",
        venue: "Tu, Zhou, Liang, Jiang, Zhang, Li, Bai — arXiv:2502.10498, 2025",
        href: "https://arxiv.org/abs/2502.10498",
        tldr:
          "Surveys \"Driving World Models\" — systems that predict how a driving scene will evolve, grouped by whether they predict in image space, point-cloud space, or occupancy space.",
        method:
          "Reviews the supporting ecosystem of simulators, datasets, and evaluation metrics for Driving World Models (DWM), and categorizes methods by predictive modality: image-based, point-cloud-based, and occupancy-based.",
        finding:
          "DWMs let an autonomous driving system anticipate how a scene will change next, instead of only reacting to the current frame — positioned as an emerging paradigm rather than a solved problem.",
        relevance:
          "Our system today (Warn) reacts to the current frame only. This is background reading on the kind of prediction layer an Assist or Autopilot level would eventually need — not something in our current stack.",
      },
      {
        title: "A Comprehensive Survey on World Models for Embodied AI",
        venue: "Li, He, Zhang, Liu — arXiv:2510.16732, 2025",
        href: "https://arxiv.org/abs/2510.16732",
        tldr:
          "Proposes a three-axis taxonomy for classifying world models — by function, by how they model time, and by how they represent space — across robotics, driving, and video.",
        method:
          "Defines a unified taxonomy along three axes: functionality (decision-coupled vs. general-purpose), temporal modeling (sequential simulation vs. global difference prediction), and spatial representation (latent vector, token sequence, spatial latent grid, or decomposed rendering).",
        finding:
          "World models act as internal simulators that support forward and counterfactual rollouts — letting an embodied agent ask \"what happens if I do X\" before doing it.",
        relevance:
          "A useful shared vocabulary for evaluating any prediction layer we might eventually build, rather than inventing our own categories. We are not building a world model today.",
      },
      {
        title: "Cosmos World Foundation Model Platform for Physical AI",
        venue: "NVIDIA — arXiv:2501.03575, 2025 (platform now at Cosmos 3, 2026)",
        href: "https://arxiv.org/abs/2501.03575",
        tldr:
          "A platform for generating physics-aware synthetic video and simulation data, so teams can manufacture rare or dangerous scenarios instead of having to film them.",
        method:
          "World Foundation Models (WFMs) — pretrained models plus tokenizers and guardrails — generate physics-aware video from text, image, video, or robot sensor/motion-data inputs. Cosmos 3 adds a mixture-of-transformers architecture combining vision reasoning, world generation, and action prediction.",
        finding:
          "The platform is built to accelerate physical-AI data curation and training by synthesizing scenarios — specific lighting, weather, edge cases — that would otherwise require physically staging them.",
        relevance:
          "Directly relevant to how a future off-road simulator could eventually generate synthetic dusty or low-light mining scenes. We have not built or licensed anything on this platform — what we have actually tested is logged separately in the Proof Ledger.",
      },
    ],
  },
] satisfies Category[];

export default function ResearchPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-20">
      <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Research
      </span>
      <h1 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
        What our thinking is grounded in
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        We didn't run any of the studies below — they're external, published
        work that informs how we think about off-road physical AI. Citing
        them is not a claim that we've built what they describe. Our own
        validated claims live in the{" "}
        <a href="/proof" className="underline underline-offset-4">
          Proof Ledger
        </a>
        .
      </p>

      <div className="mt-14 space-y-14">
        {CATEGORIES.map((category) => (
          <section key={category.name}>
            <h2 className="text-xl font-medium tracking-tight">
              {category.name}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              {category.description}
            </p>
            <Accordion type="single" collapsible className="mt-6">
              {category.papers.map((paper) => (
                <AccordionItem key={paper.title} value={paper.title}>
                  <AccordionTrigger>
                    <span className="flex flex-col items-start gap-1 text-left">
                      <span className="font-medium">{paper.title}</span>
                      <span className="text-xs font-normal uppercase tracking-wider text-muted-foreground">
                        {paper.venue}
                      </span>
                      <span className="mt-1 text-sm font-normal text-foreground/80">
                        {paper.tldr}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pl-1">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                          Method
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {paper.method}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                          Key finding
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {paper.finding}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                          Relevance to our roadmap
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {paper.relevance}
                        </p>
                      </div>
                      <a
                        href={paper.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm underline underline-offset-4"
                      >
                        Read the source →
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}
      </div>
    </div>
  );
}
