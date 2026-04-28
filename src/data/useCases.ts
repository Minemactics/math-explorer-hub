import digitalFuelLogging from "@/assets/use-cases/digital-fuel-logging.png";
import tripCountDumpYard from "@/assets/use-cases/trip-count-dump-yard.png";
import bucketsPerTruck from "@/assets/use-cases/buckets-per-truck.png";

import truckCycleTime from "@/assets/use-cases/truck-cycle-time.png";
import maintenanceYardOccupancy from "@/assets/use-cases/maintenance-yard-occupancy.png";
import excavatorQueueLengths from "@/assets/use-cases/excavator-queue-lengths.png";

export type UseCaseCategory =
  | "Efficiency"
  | "Safety"
  | "Logistics"
  | "Operations Intelligence";

export type DashboardItem = {
  type: "Chart" | "Map" | "Alert" | "KPI";
  title: string;
  description: string;
};

export type UseCase = {
  slug: string;
  title: string;
  shortDescription: string;
  hoverPreview: string;
  impactStatement: string;
  category: UseCaseCategory;
  secondaryCategories?: UseCaseCategory[];
  image: string;
  problem: { intro: string; failures: string[] };
  solution: { intro: string; architecture: string[] };
  howItWorks: { title: string; detail: string }[];
  features: string[];
  dashboard: { intro: string; items: DashboardItem[] };
  impact: { metric: string; description: string }[];
  visual: { caption: string; beforeAfter?: { before: string; after: string } };
  conclusion: string;
};

export const useCases: UseCase[] = [
  {
    slug: "digital-fuel-logging",
    title: "Digital Fuel Logging",
    shortDescription:
      "Real-time, automated fuel consumption capture across trucks and machinery, with anomaly detection on every transaction.",
    hoverPreview:
      "Tap-and-snap fuel capture at the bowser, reconciled live against asset, operator, and shift, no paper, no transcription.",
    impactStatement:
      "Replace paper fuel cards with a reconciled, audit-ready fuel ledger that closes the same shift it was filled.",
    category: "Efficiency",
    secondaryCategories: ["Operations Intelligence"],
    image: digitalFuelLogging,
    problem: {
      intro:
        "Most mining and heavy-industry sites still capture fuel transactions on paper or in a spreadsheet at the bowser. Cards are lost, totals are mis-keyed, and the fuel-per-tonne number that lands in the management review is at best a week old and at worst quietly wrong. Worse, leakage and pilferage are almost impossible to detect because the baseline itself is noisy.",
      failures: [
        "Paper bowser cards get lost, soaked, or transcribed incorrectly at end of shift.",
        "Fuel issued is reconciled against asset hour-meters days later, by which time disputes are unresolvable.",
        "Manual capture cannot detect a 50 litre over-issue or a slow leak hiding inside daily totals.",
        "Fuel-per-tonne, the single most important efficiency KPI, is computed from data nobody fully trusts.",
      ],
    },
    solution: {
      intro:
        "Mineoptic Fuel digitises the bowser transaction itself. Bowser operators tap the asset, capture the meter and dispensed volume, and the transaction is signed, time-stamped, and reconciled in real time against the fleet, the operator, and the shift. Anomaly models flag impossible burn-rates, repeated over-issues, and missed reconciliations the moment they happen.",
      architecture: [
        "Rugged tablet or phone at every bowser with offline-first capture.",
        "Asset and operator identified via tag, QR, or manual selection.",
        "Edge sync to the central fuel ledger when connectivity returns.",
        "Anomaly detection layer scoring every transaction against burn-rate baselines.",
      ],
    },
    howItWorks: [
      { title: "Capture", detail: "Bowser operator taps the asset, snaps the meter, and confirms the dispensed volume." },
      { title: "Process", detail: "Transaction is reconciled against asset, operator, shift, and previous burn-rate." },
      { title: "Predict", detail: "Anomaly models flag impossible rates, repeated short-pours, or unusual issuing patterns." },
      { title: "Output", detail: "Fuel ledger updates live, with alerts to the supervisor and a clean trail for finance." },
    ],
    features: [
      "Offline-first bowser capture, syncs when on-network.",
      "Asset and operator identification by tag, QR, or selection list.",
      "Live fuel-per-tonne and fuel-per-hour reconciliation.",
      "Anomaly alerts for over-issue, leakage, and missed reconciliations.",
      "Audit-ready ledger export for finance and compliance.",
    ],
    dashboard: {
      intro:
        "The Fuel dashboard turns every bowser transaction into a live, drill-down view of where fuel is going and why.",
      items: [
        { type: "Chart", title: "Fuel usage trend", description: "Litres per asset per shift, with a rolling 7-day baseline overlay." },
        { type: "KPI", title: "Fuel-per-tonne", description: "Live efficiency KPI per fleet, face, and crew, with plan-vs-actual delta." },
        { type: "Alert", title: "Anomaly stream", description: "Real-time alerts for over-issue, missed reconciliation, and burn-rate spikes." },
        { type: "Chart", title: "Bowser throughput", description: "Transactions per bowser per hour, exposing queueing and shift hand-over gaps." },
      ],
    },
    impact: [
      { metric: "Reconciliation variance", description: "Bowser-to-tank variance closes from days to within the same shift." },
      { metric: "Leakage detection", description: "Slow leaks and repeated over-issues surface in hours instead of months." },
      { metric: "Trusted KPIs", description: "Fuel-per-tonne becomes a number the management review can act on." },
      { metric: "Admin time saved", description: "End-of-shift transcription is eliminated entirely." },
    ],
    visual: {
      caption: "Bowser capture on the left, reconciliation in the middle, the live fuel ledger and anomaly alerts on the right.",
      beforeAfter: {
        before: "Fuel cards are collected at end of shift, transcribed on Monday, and reconciled by Friday.",
        after: "Every bowser transaction is reconciled live, with anomalies flagged before the next shift starts.",
      },
    },
    conclusion:
      "Digital fuel logging is the cleanest, fastest win available to most mines. It removes paper from the bowser, closes the reconciliation loop in real time, and finally makes fuel-per-tonne a number worth managing.",
  },
  {
    slug: "trip-count-at-dump-yard",
    title: "Trip Count at Dump Yard",
    shortDescription:
      "AI-based vehicle detection that automatically counts every truck entering and exiting the dump yard, in real time.",
    hoverPreview:
      "Vision-based virtual trip-line at the dump yard logs every truck, every direction, with timestamp and asset identity.",
    impactStatement:
      "Stop counting trips on a clipboard, every entry and exit at the dump yard is now logged automatically.",
    category: "Logistics",
    secondaryCategories: ["Operations Intelligence"],
    image: tripCountDumpYard,
    problem: {
      intro:
        "Dump-yard trip counts are one of the most disputed numbers on a mine. Marshals tally trucks on paper, totals are radioed in, and reconciliation against dispatch is rarely clean. The result is unclear utilisation per truck, unclear payback per face, and contractor disputes that drag for weeks.",
      failures: [
        "Manual trip counting at the dump yard is error-prone and impossible to audit.",
        "Paper tallies cannot be reconciled live against dispatch or weighbridge data.",
        "Marshals miss trips during shift change, breaks, or low visibility.",
        "Contractor billing disputes consume hours of management time per month.",
      ],
    },
    solution: {
      intro:
        "Mineoptic Visual deploys edge cameras at each dump yard entry and exit. A trained vision model recognises haul trucks, identifies asset class, and logs every crossing of the virtual trip-line with direction, timestamp, and confidence. Counts reconcile automatically against dispatch and weighbridge.",
      architecture: [
        "Rugged edge camera covering the dump yard entry and exit corridor.",
        "On-device vehicle detection and direction classification model.",
        "Virtual trip-line logic with deduplication and confidence scoring.",
        "Reconciliation layer matching visual counts to dispatch trips and weighbridge tickets.",
      ],
    },
    howItWorks: [
      { title: "Capture", detail: "Edge camera continuously watches the dump-yard entry and exit corridor." },
      { title: "Process", detail: "Vision model detects each truck, classifies direction, and logs a trip event." },
      { title: "Predict", detail: "Hourly trip projections forecast end-of-shift totals against the production target." },
      { title: "Output", detail: "Live trip count, utilisation rate, and reconciled view against dispatch and weighbridge." },
    ],
    features: [
      "Vision-based trip detection at entry and exit, no manual marshalling required.",
      "Asset class and direction classification.",
      "Deduplication for trucks that linger or reverse on the trip-line.",
      "Reconciliation with dispatch trips and weighbridge tickets.",
      "Auditable event log for contractor billing.",
    ],
    dashboard: {
      intro:
        "The Trip Count dashboard gives operations and contracts teams a single, indisputable view of dump-yard activity.",
      items: [
        { type: "KPI", title: "Trips per hour", description: "Live counter with shift target and projected end-of-shift trips." },
        { type: "Chart", title: "Trip distribution", description: "Trips per truck, per shift, per face, with utilisation ranking." },
        { type: "Map", title: "Yard activity heatmap", description: "Top-down dump-yard view with entry, exit, and dwell visualisation." },
        { type: "Alert", title: "Reconciliation gap", description: "Real-time alert when visual count and dispatch diverge beyond threshold." },
      ],
    },
    impact: [
      { metric: "Counting accuracy", description: "Manual tally errors eliminated, every crossing is logged with evidence." },
      { metric: "Utilisation visibility", description: "Trips-per-truck-per-shift becomes a live operational number." },
      { metric: "Billing transparency", description: "Contractor disputes resolved against an auditable event trail." },
      { metric: "Marshal redeployment", description: "Yard marshals freed for safety and traffic-control duties." },
    ],
    visual: {
      caption: "Edge camera at the dump yard feeds vision-based trip events into the operations canvas, reconciled live against dispatch.",
      beforeAfter: {
        before: "Trip counts are radioed in from clipboards and reconciled the next day, often disputed by contractors.",
        after: "Every trip is detected, time-stamped, and reconciled live, with a video event trail for any dispute.",
      },
    },
    conclusion:
      "Trip Count at Dump Yard converts the noisiest number on the mine into the cleanest. It ends contractor disputes, exposes true truck utilisation, and frees marshals for the work that actually requires a human.",
  },
  {
    slug: "buckets-count-per-truck-load",
    title: "Buckets Count per Truck Load",
    shortDescription:
      "Computer vision that measures excavator bucket loads per truck in real time, exposing true payload and cycle efficiency.",
    hoverPreview:
      "Bucket-by-bucket counting at the loading face, reconciled against weighbridge tonnes for a true load-quality view.",
    impactStatement:
      "Move from estimated payloads to measured ones, bucket by bucket, truck by truck.",
    category: "Efficiency",
    secondaryCategories: ["Operations Intelligence"],
    image: bucketsPerTruck,
    problem: {
      intro:
        "Payload per truck is usually estimated from average cycles and rule-of-thumb bucket factors. The result is over-trucking on light cycles, under-loading on the rest, and a fleet sized to averages that nobody can defend with real data. Loaders are blamed for cycle losses they did not cause, and tippers leave the face under-loaded without anyone knowing.",
      failures: [
        "Bucket counts per truck are estimated from operator memory at end of shift.",
        "Payload variance per excavator is invisible until weighbridge reconciliation.",
        "Loader operators are blamed for cycle losses that originated upstream.",
        "Fleet sizing per face is based on averages that have no measured baseline.",
      ],
    },
    solution: {
      intro:
        "Mineoptic Visual deploys a face-side camera that watches the loading sequence. The model counts each bucket cycle, times the swing and dump, and aggregates a per-truck load with bucket count and cycle distribution. Counts reconcile against weighbridge tonnes for a true load-quality view.",
      architecture: [
        "Edge camera at the loading face with a clear view of the excavator and tipper.",
        "On-device cycle-detection model counting each bucket and timing the swing.",
        "Truck identification by on-vehicle tag, number plate, or visual cue.",
        "Reconciliation layer matching bucket counts to weighbridge tonnes per load.",
      ],
    },
    howItWorks: [
      { title: "Capture", detail: "Camera watches the excavator, with each bucket cycle detected at the dump phase." },
      { title: "Process", detail: "Cycle counter aggregates buckets per truck, with swing time and dump time per cycle." },
      { title: "Predict", detail: "Per-load efficiency models flag short-loads, over-loads, and slow cycles in real time." },
      { title: "Output", detail: "Per-truck bucket count, average cycle time, and weighbridge reconciliation in the canvas." },
    ],
    features: [
      "Bucket-level counting with sub-second cycle timing.",
      "Per-truck load aggregation with bucket count and total cycle.",
      "Short-load and over-load detection.",
      "Reconciliation with weighbridge tonnes for load-quality view.",
      "Operator-level cycle distributions for fair performance review.",
    ],
    dashboard: {
      intro:
        "The Bucket Count dashboard exposes the loading face as the most measured station on the mine.",
      items: [
        { type: "KPI", title: "Average buckets per truck", description: "Per face, per excavator, per shift, with target band overlay." },
        { type: "Chart", title: "Cycle time distribution", description: "Histogram of swing and dump times, exposing the worst 20 percent of cycles." },
        { type: "Alert", title: "Short-load alert", description: "Notifies the supervisor when a truck leaves under-loaded by more than threshold." },
        { type: "Chart", title: "Load reconciliation", description: "Bucket count vs weighbridge tonnes per truck, exposing payload variance." },
      ],
    },
    impact: [
      { metric: "Load efficiency", description: "Short-loads detected and corrected within the shift, not at month-end." },
      { metric: "Cycle optimisation", description: "Worst-case cycles surfaced for coaching and fleet rebalancing." },
      { metric: "Fair operator review", description: "Performance assessed on measured cycles, not on perception." },
      { metric: "Defensible fleet sizing", description: "Tipper-per-excavator decisions backed by measured bucket and cycle data." },
    ],
    visual: {
      caption: "Edge camera at the face feeds bucket counts into the production canvas, reconciled against weighbridge tonnes per load.",
      beforeAfter: {
        before: "Payload is estimated and disputed, the planner sizes the fleet from a six-month-old study.",
        after: "Payload is measured per load, the planner rebalances the fleet within a shift on real cycle data.",
      },
    },
    conclusion:
      "Counting buckets per truck is the simplest way to make the loading face honest. It surfaces the bottleneck, defends the fleet plan, and gives operators a fair, measured view of their own performance.",
  },
  {
    slug: "truck-cycle-time-analysis",
    title: "Truck Cycle Time Analysis",
    shortDescription:
      "End-to-end truck cycle visibility from loading to dumping, with stage-level timing and bottleneck identification.",
    hoverPreview:
      "Every cycle broken down into load, haul, queue, dump, and return, with bottleneck flags per excavator and route.",
    impactStatement:
      "Stop guessing where the cycle time goes, see every stage, every truck, every shift.",
    category: "Operations Intelligence",
    secondaryCategories: ["Efficiency", "Logistics"],
    image: truckCycleTime,
    problem: {
      intro:
        "Cycle time is the central productivity number on a mine, yet most sites only know the average. Where the time actually goes, queueing at the loader, slow haul on a degraded segment, dwell at the dump, is hidden inside that average. As a result, fleet rebalancing decisions are guesses, and the same bottleneck repeats week after week.",
      failures: [
        "Dispatch reports trip counts but not stage-level cycle composition.",
        "Average cycle time hides the bottleneck inside the worst 20 percent of cycles.",
        "Queue time at the loader is invisible until trucks miss the production target.",
        "Bottlenecks repeat week after week because the data to attack them is missing.",
      ],
    },
    solution: {
      intro:
        "Mineoptic time-stamps every truck movement at the loading face, the dump yard, and key route waypoints. Each cycle is decomposed into load, haul, queue, dump, and return stages, and the longest stage per route is flagged as the bottleneck. The result is a live, stage-level view of where every minute is going.",
      architecture: [
        "Event capture at face, dump yard, and waypoint zones via vision and on-vehicle tags.",
        "Cycle assembly engine grouping events into per-truck, per-cycle records.",
        "Stage-level decomposition (load, haul, queue, dump, return).",
        "Bottleneck detection layer flagging the longest stage per route per shift.",
      ],
    },
    howItWorks: [
      { title: "Capture", detail: "Vision and tag events time-stamp each truck at face, dump, and route waypoints." },
      { title: "Process", detail: "Events are assembled into per-truck cycle records with stage-level timing." },
      { title: "Predict", detail: "Bottleneck models flag the slowest stage per route and forecast end-of-shift impact." },
      { title: "Output", detail: "Live cycle dashboard with stage breakdown, bottleneck flags, and route comparisons." },
    ],
    features: [
      "Per-truck cycle records with load, haul, queue, dump, and return stages.",
      "Per-route and per-excavator cycle distribution.",
      "Bottleneck flagging with end-of-shift production impact.",
      "Drill-down from cycle to underlying timestamp events.",
      "Comparison views across faces, crews, and shifts.",
    ],
    dashboard: {
      intro:
        "The Cycle Time dashboard gives operations a stage-by-stage view of where every minute of every cycle is going.",
      items: [
        { type: "Chart", title: "Cycle breakdown", description: "Stacked bar per route showing load, haul, queue, dump, and return time." },
        { type: "KPI", title: "Average cycle time", description: "Per route and per excavator, with shift target and projected end-of-shift delta." },
        { type: "Alert", title: "Bottleneck flag", description: "Live alert when a stage on a route exceeds its target by the configured threshold." },
        { type: "Chart", title: "Worst 20 percent cycles", description: "Distribution of the slowest cycles, with cause attribution per stage." },
      ],
    },
    impact: [
      { metric: "Bottleneck visibility", description: "The slowest stage on each route is named, not buried in the average." },
      { metric: "Fleet rebalancing", description: "Tipper allocation is corrected within the shift on measured queue and cycle data." },
      { metric: "Shift target accuracy", description: "End-of-shift forecasts based on live cycle data instead of dispatch averages." },
      { metric: "Continuous improvement", description: "Repeating bottlenecks finally have a measured baseline to attack." },
    ],
    visual: {
      caption: "Stage-level timeline of every cycle, with the bottleneck stage flagged per route per shift.",
      beforeAfter: {
        before: "Cycle time is reported as a single average, with no view into where the time goes.",
        after: "Cycle time is decomposed per stage, per route, per truck, with bottlenecks flagged live.",
      },
    },
    conclusion:
      "Truck Cycle Time Analysis turns the most-quoted number on the mine into the most actionable. Once every minute is accounted for, fleet rebalancing and bottleneck attack become routine, not heroic.",
  },
  {
    slug: "maintenance-yard-occupancy-analysis",
    title: "Maintenance Yard Occupancy Analysis",
    shortDescription:
      "Real-time occupancy of maintenance bays and equipment availability, with turnaround analytics across the workshop.",
    hoverPreview:
      "Live bay-by-bay occupancy view with turnaround time per asset class, exposing yard utilisation gaps.",
    impactStatement:
      "Run the workshop on a live occupancy view, not on a whiteboard updated twice a day.",
    category: "Operations Intelligence",
    secondaryCategories: ["Efficiency"],
    image: maintenanceYardOccupancy,
    problem: {
      intro:
        "Maintenance yards are typically run from a whiteboard or a printed schedule, neither of which reflects what is physically in the bays right now. Assets queue outside while bays sit empty, parts arrive at the wrong bay, and turnaround time per job is a number nobody can produce on demand. The hidden cost is fleet availability.",
      failures: [
        "Bay occupancy is tracked on a whiteboard updated by hand, often hours stale.",
        "Assets queue outside the workshop while bays sit empty inside.",
        "Turnaround time per asset class is impossible to compute from current systems.",
        "Parts and tools arrive at the wrong bay because nobody knows which job is where.",
      ],
    },
    solution: {
      intro:
        "Mineoptic combines spatial sensing (vision or short-range tags) with the maintenance schedule to produce a live, bay-by-bay occupancy view of the workshop. Every entry, exit, and bay change is logged. Turnaround time, free vs occupied bays, and queue-outside metrics become live dashboard tiles.",
      architecture: [
        "Bay-level sensing via overhead cameras or short-range tags on assets.",
        "Integration with the maintenance schedule to associate bay with active job.",
        "Event log of every entry, exit, and inter-bay move.",
        "Analytics layer computing occupancy, turnaround, and queue metrics live.",
      ],
    },
    howItWorks: [
      { title: "Capture", detail: "Bay sensors detect each asset on entry, exit, and bay change inside the workshop." },
      { title: "Process", detail: "Events are matched to active jobs, producing a live bay-by-bay occupancy state." },
      { title: "Predict", detail: "Turnaround models forecast bay free time and surface jobs at risk of overrun." },
      { title: "Output", detail: "Live workshop floor plan, occupancy KPIs, and a queue-outside view for the supervisor." },
    ],
    features: [
      "Live bay-by-bay occupancy state.",
      "Turnaround time per asset class and per job type.",
      "Queue-outside metric showing assets waiting on a free bay.",
      "Inter-bay move log for parts and tool dispatch.",
      "Integration with the maintenance schedule for plan-vs-actual.",
    ],
    dashboard: {
      intro:
        "The Maintenance Yard dashboard turns the workshop floor into a live, measurable operation.",
      items: [
        { type: "Map", title: "Bay occupancy floor plan", description: "Top-down workshop view with each bay marked occupied (with asset) or free." },
        { type: "KPI", title: "Occupied vs free", description: "Live count of occupied and free bays, with target utilisation band." },
        { type: "Chart", title: "Turnaround by asset class", description: "Median turnaround per asset class and job type, over the last 30 days." },
        { type: "Alert", title: "Queue-outside alert", description: "Notifies the workshop supervisor when assets queue while bays remain free." },
      ],
    },
    impact: [
      { metric: "Workshop utilisation", description: "Free bays surfaced live, queue-outside resolved within the shift." },
      { metric: "Turnaround visibility", description: "Per-job turnaround becomes a defensible KPI for planning and improvement." },
      { metric: "Parts dispatch accuracy", description: "Parts and tools delivered to the correct bay first time." },
      { metric: "Fleet availability", description: "Faster, measured turnaround returns assets to production sooner." },
    ],
    visual: {
      caption: "Live workshop floor plan with bay occupancy, turnaround analytics, and queue-outside alerts.",
      beforeAfter: {
        before: "Workshop is run from a whiteboard, with no live view of who is where and for how long.",
        after: "Workshop is run from a live floor plan, with measured turnaround and queue-outside alerts.",
      },
    },
    conclusion:
      "Maintenance Yard Occupancy Analysis turns the workshop into a measured, schedulable operation. The result is faster turnaround, less queueing, and more hours back into production.",
  },
  {
    slug: "queue-lengths-at-excavators",
    title: "Queue Lengths at Excavators",
    shortDescription:
      "Vision-based queue detection that tracks the line of trucks waiting at each excavator, with live waiting-time analytics.",
    hoverPreview:
      "Per-excavator queue length and waiting time, surfaced live so the dispatcher can rebalance before idle hours pile up.",
    impactStatement:
      "Catch the queue forming, not the production target missing.",
    category: "Logistics",
    secondaryCategories: ["Efficiency", "Operations Intelligence"],
    image: excavatorQueueLengths,
    problem: {
      intro:
        "A queue at the excavator is the most expensive form of idle time on a mine. Trucks burn fuel, operators burn shifts, and the production target slips, all while the dispatcher operates from delayed averages. By the time a queue is reported, the cost is already locked in.",
      failures: [
        "Queue length at the excavator is not measured, only inferred from missed targets.",
        "Dispatchers see average cycle time, not live queue formation.",
        "Idle time is recorded after the fact in operator timesheets, never in time to act.",
        "Tipper rebalancing decisions happen at end of shift, when the cost is locked in.",
      ],
    },
    solution: {
      intro:
        "Mineoptic Visual deploys an edge camera at each excavator with a clear view of the loading approach. The model detects each truck in the approach zone, measures the queue length in real time, and tracks waiting time per truck. Queue trends and waiting-time KPIs are surfaced live to the dispatcher.",
      architecture: [
        "Edge camera at each excavator covering the loading approach zone.",
        "Vision model counting trucks in the queue and measuring per-truck wait.",
        "Queue-length and waiting-time analytics layer.",
        "Live integration with the dispatcher view for in-shift rebalancing.",
      ],
    },
    howItWorks: [
      { title: "Capture", detail: "Edge camera continuously watches the loading approach zone of each excavator." },
      { title: "Process", detail: "Vision model counts trucks in the queue and tracks each truck from arrival to load." },
      { title: "Predict", detail: "Queue trend models forecast tipper starvation or oversupply over the next hour." },
      { title: "Output", detail: "Live per-excavator queue length, waiting time, and a dispatcher rebalancing prompt." },
    ],
    features: [
      "Live queue length per excavator.",
      "Per-truck waiting time from arrival to load.",
      "Queue trend forecasting over the next hour.",
      "Dispatcher rebalancing prompts when queues exceed threshold.",
      "Per-shift idle-time aggregation per truck and per crew.",
    ],
    dashboard: {
      intro:
        "The Queue Length dashboard gives the dispatcher an early-warning view of every excavator on the mine.",
      items: [
        { type: "KPI", title: "Live queue length", description: "Per-excavator queue counter, color-coded against threshold." },
        { type: "Chart", title: "Waiting time trend", description: "Average and worst-case wait per excavator over the last 4 hours." },
        { type: "Alert", title: "Queue threshold alert", description: "Notifies the dispatcher when queue exceeds threshold or trend forecasts starvation." },
        { type: "Chart", title: "Idle-time aggregation", description: "Per-truck and per-crew idle hours over the shift, ranked by impact." },
      ],
    },
    impact: [
      { metric: "Truck idle reduction", description: "Queues caught and rebalanced in-shift, not at end-of-shift review." },
      { metric: "Production target protection", description: "Dispatcher acts on a live queue view, not on stale averages." },
      { metric: "Fuel saved", description: "Less time idling at the loader translates directly into fuel savings." },
      { metric: "Operator fairness", description: "Idle time attributed to queues, not to operator performance." },
    ],
    visual: {
      caption: "Live queue counters and waiting-time trends per excavator, with dispatcher rebalancing prompts.",
      beforeAfter: {
        before: "Queues are noticed when the production target is missed and the shift is already over.",
        after: "Queues are flagged as they form, with the dispatcher rebalancing tippers within the hour.",
      },
    },
    conclusion:
      "Measuring queue length at the excavator is the most direct way to attack truck idle time. It moves the dispatcher from reactive to proactive, and turns a hidden cost into a managed one.",
  },
];

export const useCaseCategories: UseCaseCategory[] = [
  "Efficiency",
  "Safety",
  "Logistics",
  "Operations Intelligence",
];

export function getUseCase(slug: string): UseCase | undefined {
  return useCases.find((u) => u.slug === slug);
}
