import antiCollision from "@/assets/use-cases/anti-collision.png";
import selfServiceBi from "@/assets/use-cases/self-service-bi.png";
import visualAnalytics from "@/assets/use-cases/visual-analytics.png";
import tagFinder from "@/assets/use-cases/tag-finder.png";
import geoMapping from "@/assets/use-cases/geo-mapping.png";
import smartPpe from "@/assets/use-cases/smart-ppe.png";
import assetTracking from "@/assets/use-cases/asset-tracking.png";
import workerTracking from "@/assets/use-cases/worker-tracking.png";
import incidentReplay from "@/assets/use-cases/incident-replay.png";

export type UseCaseCategory =
  | "Safety"
  | "Tracking"
  | "Analytics"
  | "Computer Vision"
  | "Operations Intelligence";

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
  impact: { metric: string; description: string }[];
  visual: { caption: string; beforeAfter?: { before: string; after: string } };
  conclusion: string;
};

export const useCases: UseCase[] = [
  {
    slug: "anti-collision-warning",
    title: "Anti-Collision Warning Systems",
    shortDescription:
      "Proximity intelligence that warns operators of haul trucks, light vehicles, and personnel before a near-miss becomes an incident.",
    hoverPreview:
      "Real-time proximity detection across mixed fleets, with in-cab alerts that scale by closing speed and asset class.",
    impactStatement:
      "Stop the next haul-truck collision before it starts, with proximity intelligence that lives in the cab, not in a report.",
    category: "Safety",
    secondaryCategories: ["Tracking"],
    image: antiCollision,
    problem: {
      intro:
        "Open-pit mines run mixed fleets of haul trucks, dozers, water tankers, light vehicles, and personnel inside the same pit, often through dust, glare, blind benches, and night shifts. Most sites still depend on radio discipline, traffic management plans, and operator vigilance to avoid collisions. When that discipline fails, even by a few seconds, the consequences are catastrophic: equipment write-offs, fatalities, regulatory shutdowns, and weeks of production lost.",
      failures: [
        "Standard GPS trackers update every 10 to 30 seconds, far too slow to warn an operator about a vehicle closing at 40 km/h.",
        "Radio-based proximity systems do not differentiate between a parked light vehicle and an oncoming haul truck on the same ramp.",
        "Camera-only solutions lose the target in dust, low light, or sharp ramp curvature exactly when proximity risk is highest.",
        "Traffic management plans are static documents, they do not adapt to a blocked ramp or a stalled tipper in real time.",
      ],
    },
    solution: {
      intro:
        "Mineoptic Anti-Collision fuses on-vehicle ranging with the mines own connectivity fabric to deliver sub-second proximity awareness directly to the operator. Instead of relying on public GPS, the system uses time-of-flight ranging and short-range radio between vehicles, with a central layer that understands asset class, speed, and bearing. The result is a warning that escalates intelligently, a haul truck approaching another haul truck at speed gets a different alert from a light vehicle creeping into a loading zone.",
      architecture: [
        "On-vehicle ranging units measure peer-to-peer distance and relative bearing several times a second.",
        "Edge logic on the unit classifies the encounter by asset class, closing speed, and zone.",
        "In-cab visual and audible alerts escalate from advisory to critical without operator interaction.",
        "Encounter events stream to Mineoptic Canvas for safety review, near-miss reporting, and rule tuning.",
      ],
    },
    howItWorks: [
      { title: "Capture", detail: "Each fitted asset broadcasts identity, class, and motion vector, while listening for peers within range." },
      { title: "Process", detail: "Edge logic computes time-to-contact for every detected peer and applies zone-aware rules from the central canvas." },
      { title: "Predict", detail: "Closing-speed and bearing models flag encounters likely to result in a near-miss within the configured warning horizon." },
      { title: "Output", detail: "Operator gets a directional in-cab alert, supervisors get a live map view, and safety teams get a replayable encounter log." },
    ],
    features: [
      "Sub-second peer-to-peer ranging that does not depend on public GPS coverage.",
      "Asset-class-aware alert tiers (haul truck, light vehicle, dozer, personnel beacon).",
      "Zone-aware rules for ramps, intersections, loading zones, and dump points.",
      "Audit-ready encounter logs with timestamp, severity, and operator response.",
      "Integrates with Mineoptic Canvas for site-wide near-miss analytics.",
    ],
    impact: [
      { metric: "Near-miss visibility", description: "Encounters that previously went unreported now surface automatically with full context." },
      { metric: "Operator response time", description: "Directional cab alerts reduce reaction lag compared to radio-based traffic management." },
      { metric: "Insurance and audit posture", description: "A reviewable encounter trail strengthens safety case submissions and incident defence." },
      { metric: "Production protection", description: "Avoiding a single major collision protects weeks of haulage capacity and millions in equipment value." },
    ],
    visual: {
      caption: "System flow: peer-to-peer ranging on each asset feeds edge logic, which raises a tiered cab alert and streams the event to the safety canvas.",
      beforeAfter: {
        before: "Operators rely on radio chatter, mirrors, and line-of-sight, near-misses are reported only when someone speaks up.",
        after: "Every encounter is detected, ranked, logged, and replayable, with the operator warned in the cab in time to act.",
      },
    },
    conclusion:
      "Anti-collision is the single highest-leverage safety investment a mine can make, and it only works if the warning reaches the operator faster than the operator could reach the brake. Mineoptic delivers that latency, on the mines own network, with an audit trail safety teams can defend.",
  },
  {
    slug: "self-service-bi",
    title: "Self-Service BI for Mining Operations",
    shortDescription:
      "Drag-and-drop dashboards built on the mines live operational data, no SQL, no IT ticket, no week-long wait.",
    hoverPreview:
      "Operations leaders compose their own shift, weekly, and monthly views from a governed semantic layer, in minutes.",
    impactStatement:
      "Put the answer in the operations leaders hands, the same shift the question is asked.",
    category: "Analytics",
    secondaryCategories: ["Operations Intelligence"],
    image: selfServiceBi,
    problem: {
      intro:
        "Mining operations leaders ask sharp, time-sensitive questions: which crew is under-performing this week, why is fuel-per-tonne up, which excavator is starving its tipper fleet. The answers usually live across dispatch, weighbridge, fuel, and maintenance systems, each owned by a different team. Getting a combined view means raising a ticket with IT or a vendor, and waiting days, by which time the shift is over and the question has changed.",
      failures: [
        "Vendor BI tools are locked to a single data source and cannot reconcile across dispatch, weighbridge, and fuel.",
        "Excel dashboards depend on one analyst, become stale within a week, and are impossible to audit.",
        "Generic BI platforms have no mining semantic layer, so every chart starts with re-explaining what a bucket, a cycle, or a face is.",
        "Heavy IT-led BI rollouts deliver dashboards months after the operational question has changed.",
      ],
    },
    solution: {
      intro:
        "Mineoptic Canvas ships a mining-aware semantic layer on top of the mines reconciled operational data. Operations leaders compose dashboards from pre-modelled entities (face, crew, route, asset, shift, bowser) using drag-and-drop, while data ownership stays inside the mines own infrastructure. IT governs the model, operations consumes it, and dashboards stop being a backlog item.",
      architecture: [
        "Connectors ingest dispatch, weighbridge, fuel, and Mineoptic field data into a governed reconciliation layer.",
        "A mining semantic model exposes faces, crews, assets, shifts, and routes as first-class entities.",
        "A drag-and-drop canvas composes charts, tables, and KPI tiles against the semantic model.",
        "Role-based access controls who can author, view, and export, with full lineage on every metric.",
      ],
    },
    howItWorks: [
      { title: "Capture", detail: "Operational data flows in continuously from Mineoptic field modules and connected source systems." },
      { title: "Process", detail: "The semantic layer reconciles overlapping events (a weighbridge ticket and a Visual count) into a single trusted truth." },
      { title: "Predict", detail: "Pre-built calculations expose plan-vs-actual, fuel-per-tonne, fleet utilisation, and queue analytics out of the box." },
      { title: "Output", detail: "Users compose dashboards by drag-and-drop, schedule them to email or screen, and drill from KPI to the underlying event." },
    ],
    features: [
      "Mining-native semantic layer (face, crew, route, shift, bowser, asset).",
      "Drag-and-drop chart, KPI, and table composition with no SQL required.",
      "Cross-source reconciliation between dispatch, weighbridge, fuel, and Mineoptic.",
      "Row-level security and full metric lineage for audit.",
      "Scheduled distribution to operations rooms, mobile, and email.",
    ],
    impact: [
      { metric: "Question to answer time", description: "Operational questions resolved within the same shift instead of next week." },
      { metric: "BI backlog", description: "IT no longer holds a queue of dashboard requests, governance shifts to the model layer." },
      { metric: "Decision quality", description: "Leaders act on reconciled numbers, not on three contradictory spreadsheets." },
      { metric: "Adoption", description: "Operations teams own their views, so the dashboards actually get opened." },
    ],
    visual: {
      caption: "Governed semantic model in the middle, source systems on the left, a freely composed operations canvas on the right.",
      beforeAfter: {
        before: "A shift question routes to IT, waits in a queue, and returns as a static PDF after the question has gone stale.",
        after: "The shift manager drags three tiles onto a canvas, gets the answer in five minutes, and shares it before the next pre-shift.",
      },
    },
    conclusion:
      "Self-service BI is not about giving everyone a database, it is about giving operations leaders a trusted, mining-aware model they can interrogate themselves. That is the difference between a dashboard that gets used and one that gets ignored.",
  },
  {
    slug: "visual-analytics",
    title: "Visual Analytics for Production Cycles",
    shortDescription:
      "Computer vision at the loading face that counts every bucket, times every cycle, and measures every queue.",
    hoverPreview:
      "Bucket counts, load times, and queue durations captured automatically, no operator input, no transcription.",
    impactStatement:
      "Replace cycle estimates with measured truth, bucket by bucket, truck by truck.",
    category: "Computer Vision",
    secondaryCategories: ["Analytics", "Operations Intelligence"],
    image: visualAnalytics,
    problem: {
      intro:
        "Production planning depends on cycle-time inputs, how long a truck waits, how long an excavator loads, how many buckets per truck. Most mines use averages from dispatch software or rule-of-thumb estimates from the planner. Those numbers are wrong often enough to misallocate the tipper fleet, oversize loaders, and miss daily targets, but the gap is invisible until the month-end reconciliation.",
      failures: [
        "Dispatch software reports trip counts, not bucket counts, so load efficiency is invisible.",
        "Operators self-report cycle issues only when they are blamed for missed targets.",
        "Stopwatch studies are done once a year and become outdated within a quarter.",
        "Average cycle times mask the bottleneck, the real problem is the worst 20 percent of cycles.",
      ],
    },
    solution: {
      intro:
        "Mineoptic Visual deploys ruggedised cameras at the loading face and key choke points. Computer vision models trained on mining scenes count buckets per truck, time each load, measure queue lengths, and detect unusual idle periods. Every event is tagged with truck identity, excavator, face, and shift, then streamed to the Canvas for shift-level analytics.",
      architecture: [
        "Ruggedised edge cameras at loading face, weighbridge approach, and crusher feed.",
        "On-device computer-vision models for bucket counting, load timing, and queue measurement.",
        "Local buffer for offline operation, with sync to the central data layer when connectivity returns.",
        "Reconciliation against dispatch and weighbridge for a single trusted production view.",
      ],
    },
    howItWorks: [
      { title: "Capture", detail: "Cameras at the face record every loading event, with vehicle identity inferred from on-truck tags or visual cues." },
      { title: "Process", detail: "Edge models count buckets, time each one, and measure queue length at the excavator and downstream choke points." },
      { title: "Predict", detail: "Cycle-time distributions surface which excavator is under-fed and which is starving its tippers." },
      { title: "Output", detail: "Shift dashboards expose bucket counts, load times, and queue durations by face, crew, and asset." },
    ],
    features: [
      "Bucket-level counting with sub-second timing.",
      "Queue-length measurement at excavator, weighbridge, and crusher.",
      "Idle and dwell detection with configurable thresholds.",
      "Reconciliation with weighbridge tonnes for a load-quality view.",
      "Works offline, syncs when on-network.",
    ],
    impact: [
      { metric: "Tipper fleet sizing", description: "Calculable from real bucket and queue data instead of rule-of-thumb." },
      { metric: "Production transparency", description: "Every bucket, every truck, every shift, with no operator input." },
      { metric: "Bottleneck detection", description: "Queues at the choke point flagged as they form, not at the end of the week." },
      { metric: "Reconciliation effort", description: "Visual counts close the gap between dispatch and weighbridge automatically." },
    ],
    visual: {
      caption: "Edge cameras at the face feed bucket counts and load times into the production canvas, reconciled against dispatch and weighbridge.",
      beforeAfter: {
        before: "Cycle time is an average from a six-month-old study, the planner sizes the fleet from instinct.",
        after: "Cycle time is a live distribution per excavator, the planner re-balances the fleet within a shift.",
      },
    },
    conclusion:
      "Visual analytics turns the loading face from a black box into the most measured station on site. That is what makes the difference between planning the fleet on instinct and planning it on truth.",
  },
  {
    slug: "tag-finder",
    title: "Tag Finder for Industrial Assets",
    shortDescription:
      "AirTag-style finders for tools, drums, cables, and consumables, with directional pinpointing inside the yard.",
    hoverPreview:
      "Walk towards the asset with a directional arrow on the phone, no GPS required, even inside a workshop or container.",
    impactStatement:
      "Stop losing two hours a shift to the question, where is that tool.",
    category: "Tracking",
    secondaryCategories: ["Operations Intelligence"],
    image: tagFinder,
    problem: {
      intro:
        "Mines lose enormous time and money to misplaced consumable and semi-mobile assets, hand tools, drum sets, cable reels, instrument boxes, PPE caches, sample bags. They are too low-value to put on a full GPS tracker but too important to lose. Every shift, supervisors and workshop teams spend hours walking the yard, calling on radio, and re-buying items that already exist somewhere on site.",
      failures: [
        "Asset registers are static spreadsheets that never reflect physical location.",
        "GPS trackers are too power-hungry and expensive for low-value assets.",
        "Barcode and check-out logs depend on human discipline that breaks under shift pressure.",
        "Once an asset is lost inside a workshop or container, GPS cannot find it anyway.",
      ],
    },
    solution: {
      intro:
        "Mineoptic Tag Finder uses low-power Bluetooth and ultra-wideband tags, similar in principle to consumer item finders but ruggedised for mine yards. Tags report presence to fixed gateways across the site and to mobile readers carried by supervisors. When an asset is needed, the user opens a directional finder on a phone or rugged tablet and walks towards it.",
      architecture: [
        "Long-life Bluetooth and UWB tags attached to the asset.",
        "Fixed gateways at workshop, store, lay-down yard, and gate.",
        "Mobile readers on supervisor phones for last-metre directional finding.",
        "Mineoptic Canvas presence layer for site-wide search and audit.",
      ],
    },
    howItWorks: [
      { title: "Capture", detail: "Tags broadcast presence to nearby gateways and mobile readers, with battery life measured in years." },
      { title: "Process", detail: "Gateway data resolves the asset to a zone (workshop bay, store rack, container, vehicle)." },
      { title: "Predict", detail: "Movement patterns flag tags leaving site, entering restricted areas, or going dormant unexpectedly." },
      { title: "Output", detail: "A search returns a zone, a phone reader gives a directional arrow for the final approach." },
    ],
    features: [
      "Multi-year battery life on Bluetooth tags.",
      "UWB option for sub-metre directional finding.",
      "Zone resolution via fixed gateways across yard, workshop, and stores.",
      "Geofence alerts for tags leaving designated areas.",
      "Audit-ready presence history per tag.",
    ],
    impact: [
      { metric: "Search time", description: "Hours per shift recovered from looking for tools, drums, and instruments." },
      { metric: "Re-purchase spend", description: "Consumables previously written off as lost are found and reused." },
      { metric: "Theft and loss", description: "Tags leaving site without a movement order are flagged at the gate." },
      { metric: "Workshop throughput", description: "Maintenance crews start jobs on time because their tools are where the system says they are." },
    ],
    visual: {
      caption: "Tags on assets, gateways across the yard, directional finder on the phone, all unified in the Canvas presence view.",
      beforeAfter: {
        before: "Supervisor walks the yard with a radio, asking three crews if they have seen the cable reel.",
        after: "Supervisor types the asset name, sees zone equals container 4, walks straight to it with an arrow on the phone.",
      },
    },
    conclusion:
      "Tag Finder turns the long tail of low-value assets into a searchable inventory, without any of the cost or power overhead of GPS. It is the kind of capability that pays for itself in the first month, in time alone.",
  },
  {
    slug: "local-geo-mapping",
    title: "Local Geo Mapping with Time-of-Flight",
    shortDescription:
      "Distance and bearing between mine assets without satellite GPS, using time-of-flight radio in the dead zones.",
    hoverPreview:
      "Trucks know where they are relative to each other and to fixed beacons, even at the back of the pit where GPS dies.",
    impactStatement:
      "Keep the pit visible when GPS goes dark.",
    category: "Tracking",
    secondaryCategories: ["Safety", "Operations Intelligence"],
    image: geoMapping,
    problem: {
      intro:
        "Standard GPS was designed for vehicles on public roads, not for the deepest bench of an open-pit mine, the underground drive, or the back-of-pit bowser shadowed by a high wall. Public-network GPS trackers report stale or zero positions exactly where positional truth matters most: in the pit floor, near the loading face, and around stationary equipment. The operations manager either tolerates a blind spot or stops trusting the tracker entirely.",
      failures: [
        "GSM-backed GPS drops out in the deepest pit and underground.",
        "Stationary assets sync late or appear to teleport when they wake.",
        "Public satellite GPS lacks the precision needed for proximity decisions between two haul trucks.",
        "Adding a private cellular tower fixes connectivity but not satellite line-of-sight.",
      ],
    },
    solution: {
      intro:
        "Mineoptic Local Geo Mapping uses time-of-flight radio between vehicles and fixed beacons on benches, ramps, and dump points. Each asset measures distance and bearing to its neighbours and to known anchors, building a local positional fabric that does not depend on satellite line-of-sight. The result is a continuous, sub-metre-class position even where GPS reports nothing.",
      architecture: [
        "On-vehicle ranging units that measure ToF distance to peers and anchors.",
        "Fixed anchor beacons on benches, ramps, and dump points.",
        "Edge fusion layer that combines ToF, IMU, and (where available) GPS into a single position estimate.",
        "Position stream to Mineoptic Canvas and to the Anti-Collision logic on the same vehicle.",
      ],
    },
    howItWorks: [
      { title: "Capture", detail: "Vehicles range to anchors and to each other several times per second using time-of-flight radio." },
      { title: "Process", detail: "Edge fusion combines ranging with on-vehicle IMU to estimate position even between anchor sweeps." },
      { title: "Predict", detail: "When GPS is available it is fused in as one input among many, otherwise the local fabric carries the position." },
      { title: "Output", detail: "A continuous positional stream feeds the operations canvas, anti-collision logic, and replay." },
    ],
    features: [
      "Sub-metre-class ranging that does not require satellite line-of-sight.",
      "IMU fusion for smooth position between ranging updates.",
      "Anchor configuration via Canvas, including bench-by-bench moves.",
      "Compatible with GPS where available, independent where not.",
      "Feeds anti-collision and replay with the same position stream.",
    ],
    impact: [
      { metric: "Pit-floor visibility", description: "The blind zone at the back of the pit becomes a tracked zone." },
      { metric: "Position precision", description: "Sub-metre accuracy enables anti-collision and lane-level traffic management." },
      { metric: "Operator trust", description: "The manager opens the fleet view because it shows reality, not stale satellite fixes." },
      { metric: "Underground readiness", description: "The same fabric extends into underground drives where GPS does not exist." },
    ],
    visual: {
      caption: "Anchors on benches, ranging between vehicles, fused with IMU, output as a continuous local position.",
      beforeAfter: {
        before: "GPS drops out below the third bench, the manager stops opening the live map at all.",
        after: "Position stays continuous through the deepest cut, the live map becomes the primary operational screen again.",
      },
    },
    conclusion:
      "Local geo mapping is the foundation under everything else, anti-collision, replay, queue analytics, all of it depends on knowing where assets actually are. Time-of-flight makes that possible in exactly the places where GPS gives up.",
  },
  {
    slug: "smart-ppe-detection",
    title: "Smart PPE Detection with Computer Vision",
    shortDescription:
      "Camera-based detection of helmets, vests, gloves, and boots at gates, control rooms, and high-risk zones.",
    hoverPreview:
      "Compliance is verified at the boundary, not by a clipboard at shift start, with audit-ready evidence.",
    impactStatement:
      "Verify PPE at the boundary of every high-risk zone, automatically, every entry.",
    category: "Computer Vision",
    secondaryCategories: ["Safety"],
    image: smartPpe,
    problem: {
      intro:
        "PPE compliance is a regulatory and contractual baseline on every mine, but enforcement is overwhelmingly manual. Supervisors check at shift start, then trust everyone for the next twelve hours. Workers move between zones with different PPE requirements (helmet only in office, full set in pit, additional gloves in workshop) and the only check is line-of-sight from a colleague. Incidents and audits regularly find non-compliance that the daily process never caught.",
      failures: [
        "Shift-start PPE checks miss everyone who removes a glove or vest later in the shift.",
        "Manual zone-entry checks slow down operations and get skipped under pressure.",
        "Photographic evidence of compliance is rare, so audits rely on the absence of incidents instead of presence of compliance.",
        "Zone-specific PPE rules are not enforced because there is no boundary check.",
      ],
    },
    solution: {
      intro:
        "Mineoptic Smart PPE Detection uses cameras at zone boundaries (pit gate, workshop entrance, control room, refuelling bay) running computer vision models trained on PPE classes. The system verifies that each person crossing the boundary is wearing the gear that zone requires, logs the event with timestamp, image, and detected gear, and alerts a supervisor or barrier when compliance fails.",
      architecture: [
        "Edge cameras at zone boundaries with on-device PPE detection.",
        "Zone configuration in Canvas defining required PPE per zone.",
        "Compliance event log with timestamp, image, and detected items.",
        "Optional barrier or alert integration for hard enforcement.",
      ],
    },
    howItWorks: [
      { title: "Capture", detail: "Camera at the boundary captures every entry and exit of personnel." },
      { title: "Process", detail: "On-device model detects helmet, vest, gloves, boots, and other configured PPE." },
      { title: "Predict", detail: "Compliance compared against the zones configured PPE rule, with confidence scoring." },
      { title: "Output", detail: "Compliant entries are logged silently, non-compliant entries trigger alert, supervisor message, or barrier." },
    ],
    features: [
      "Per-zone PPE rule configuration.",
      "Edge inference, no streaming of personnel video off-site.",
      "Audit-ready compliance log with thumbnail evidence.",
      "Confidence-scored detection with human review for edge cases.",
      "Integration with gates, turnstiles, and access systems.",
    ],
    impact: [
      { metric: "Compliance rate", description: "Continuous boundary checks lift measured compliance well above shift-start sampling." },
      { metric: "Audit readiness", description: "Every entry has a timestamped compliance record with image evidence." },
      { metric: "Supervisor load", description: "Manual checks replaced by automated boundary verification." },
      { metric: "Incident exposure", description: "Non-compliance caught and corrected before exposure to high-risk activity." },
    ],
    visual: {
      caption: "Camera at the zone boundary, on-device detection, zone-specific rule, logged event with thumbnail.",
      beforeAfter: {
        before: "PPE is checked once at shift start, then assumed for the next twelve hours.",
        after: "PPE is verified at every boundary crossing, with image evidence stored against the workers shift record.",
      },
    },
    conclusion:
      "Smart PPE Detection makes compliance a continuous property of the worker, not a moment-in-time tick on a clipboard. That is the difference between a safety system that documents incidents and one that prevents them.",
  },
  {
    slug: "high-value-asset-tracking",
    title: "High-Value Asset Tracking",
    shortDescription:
      "Continuous location, geofencing, and audit trail for drilling rigs, transformers, generators, and other capex-class assets.",
    hoverPreview:
      "Capex-class assets get continuous location, geofence alerts, and a tamper-evident movement history.",
    impactStatement:
      "Always know where the rig is, who moved it, and whether it is where the plan says it should be.",
    category: "Tracking",
    secondaryCategories: ["Operations Intelligence"],
    image: assetTracking,
    problem: {
      intro:
        "High-value assets like drilling rigs, transformers, mobile generators, and specialised loaders move between pits, contractors, and workshops over weeks and months. Their position is critical for utilisation, billing, insurance, and audit, yet most mines rely on contractor reports, paper movement orders, and the occasional radio call. When an audit asks where an asset was on a specific date, the answer is usually no one is sure.",
      failures: [
        "Movement orders are paper-based and reconciled monthly, if at all.",
        "Contractors report utilisation in their own format, on their own schedule.",
        "When an asset is idle, no one knows whether it is between jobs or actually parked and forgotten.",
        "Audit and insurance evidence is reconstructed after the fact from incomplete records.",
      ],
    },
    solution: {
      intro:
        "Mineoptic Asset Tracking puts a power-managed tracker on each high-value asset, sized for assets that move slowly and may sit dormant for weeks. The Canvas exposes location, geofence transitions, dwell time per zone, and a complete movement history. Movement orders link to actual movement events for tamper-evident audit.",
      architecture: [
        "Long-life trackers with cellular and LoRa fallback for mine-edge coverage.",
        "Geofence layer in Canvas configured per pit, workshop, and contractor compound.",
        "Movement-order linkage so planned and actual movements reconcile automatically.",
        "Tamper and dwell alerts surface anomalies for the asset owner.",
      ],
    },
    howItWorks: [
      { title: "Capture", detail: "Tracker reports position on schedule and on movement, with low-power dormancy when stationary." },
      { title: "Process", detail: "Position resolves to a known zone (pit, workshop, contractor compound, transit)." },
      { title: "Predict", detail: "Dwell time, idle pattern, and unplanned movement flagged against the assets expected schedule." },
      { title: "Output", detail: "Asset owner sees current zone, full movement history, geofence events, and reconciled utilisation." },
    ],
    features: [
      "Long-life trackers sized for capex-class assets.",
      "Geofence alerts for unplanned exits or entries.",
      "Dwell-time analytics for utilisation review.",
      "Movement-order reconciliation with planned versus actual.",
      "Audit-ready movement history per asset.",
    ],
    impact: [
      { metric: "Asset utilisation", description: "Idle dormant assets surface for redeployment instead of being forgotten." },
      { metric: "Contractor billing", description: "Utilisation hours independently verified against contractor invoices." },
      { metric: "Audit response", description: "Asset location on any historical date answered from the system, not from memory." },
      { metric: "Insurance posture", description: "Movement and dwell evidence strengthens claims and reduces premiums." },
    ],
    visual: {
      caption: "Trackers on assets, zones in Canvas, movement orders linked to events, audit trail per asset.",
      beforeAfter: {
        before: "Asset register is a spreadsheet, last updated three months ago, no one trusts it.",
        after: "Asset register is live, every movement is timestamped, the audit and the invoice agree.",
      },
    },
    conclusion:
      "High-value asset tracking is not about knowing a coordinate, it is about knowing the story of the asset, where it has been, why, and whether it earned its keep. That is what turns trackers into asset intelligence.",
  },
  {
    slug: "worker-tracking",
    title: "Worker Tracking, Safety and Attendance",
    shortDescription:
      "Zone-aware presence tracking for personnel, combining attendance, safety zoning, and mustering on a single platform.",
    hoverPreview:
      "Personnel presence resolved to zone, with attendance, safety, and mustering on the same trusted source of truth.",
    impactStatement:
      "Know who is on site, where, and whether they are safe, in one source of truth.",
    category: "Safety",
    secondaryCategories: ["Tracking", "Operations Intelligence"],
    image: workerTracking,
    problem: {
      intro:
        "Mines need to know, at any moment, who is on site, where they are, and whether they are safe. Most operations split this across multiple disconnected systems: turnstile attendance, manual zone sign-ins, paper mustering rolls, and supervisor radio calls. In a real evacuation, those systems do not reconcile fast enough, and the muster point cannot confirm everyone is accounted for.",
      failures: [
        "Turnstile attendance only confirms entry to site, not zone-by-zone presence.",
        "Manual sign-in sheets at restricted zones are skipped under shift pressure.",
        "Mustering relies on paper rolls and verbal confirmation, slow and error-prone in an evacuation.",
        "There is no single number for who is currently in the pit, the workshop, or underground.",
      ],
    },
    solution: {
      intro:
        "Mineoptic Worker Tracking uses ruggedised personal beacons (tag, lanyard, or helmet-mounted) that report presence to gateways across site. The Canvas exposes attendance, zone occupancy, and live muster state on one screen. Restricted-zone entries are logged, lone-worker timeouts are alerted, and an evacuation can be reconciled against expected occupancy in seconds.",
      architecture: [
        "Personal beacons on every worker, contractor, and visitor.",
        "Gateways at gates, zone boundaries, muster points, and high-risk areas.",
        "Canvas presence layer fed by gateway events.",
        "Muster, lone-worker, and zone-violation logic in the same data layer.",
      ],
    },
    howItWorks: [
      { title: "Capture", detail: "Beacons report to gateways at boundaries, presence resolves to a zone." },
      { title: "Process", detail: "Canvas maintains a live count of occupants per zone and per shift." },
      { title: "Predict", detail: "Lone-worker timeouts, restricted-zone entries, and overdue muster surface as alerts." },
      { title: "Output", detail: "One screen for attendance, occupancy, and muster, available to safety, operations, and security." },
    ],
    features: [
      "Multi-form-factor beacons (lanyard, helmet, tag).",
      "Live zone occupancy and shift attendance.",
      "Lone-worker and restricted-zone alerts.",
      "Muster reconciliation against expected occupancy.",
      "Audit-ready presence log per person.",
    ],
    impact: [
      { metric: "Muster time", description: "Evacuation reconciled in seconds instead of minutes of paper roll-call." },
      { metric: "Attendance accuracy", description: "True on-site hours per worker, reconciled against payroll and contractor billing." },
      { metric: "Safety zoning", description: "Restricted zones enforced by exception, not by hope." },
      { metric: "Lone-worker exposure", description: "Timeouts surface a missing worker before the next radio check." },
    ],
    visual: {
      caption: "Beacons on people, gateways at zones, Canvas presence layer, single muster and attendance screen.",
      beforeAfter: {
        before: "Three different systems for attendance, zone sign-in, and mustering, none of them agree.",
        after: "One presence layer answers attendance, zone occupancy, and muster, in real time.",
      },
    },
    conclusion:
      "Worker tracking, done right, is the safety net that lets a mine answer the most important question on a bad day, is everyone accounted for. Built on a continuous presence layer, that answer is instant and trustworthy.",
  },
  {
    slug: "incident-replay",
    title: "Incident Replay and Root Cause Analysis",
    shortDescription:
      "Replay any near-miss or incident frame-by-frame across vehicles, personnel, fuel, and dispatch on one timeline.",
    hoverPreview:
      "Pull a timeline scrubber across the incident and watch every asset, alert, and event play back together.",
    impactStatement:
      "Replay any incident frame-by-frame, across every system, on a single timeline.",
    category: "Operations Intelligence",
    secondaryCategories: ["Safety", "Analytics"],
    image: incidentReplay,
    problem: {
      intro:
        "When a near-miss or incident happens, the investigation starts by gathering data from every system involved, dispatch, GPS, fuel, video, radio, the supervisor log. Each system has its own clock, its own format, and its own gaps. Reconstructing the minute around the incident takes days, witnesses fade, and the root cause is often guessed rather than proven.",
      failures: [
        "System clocks are not synchronised, so events cannot be aligned to the second.",
        "Video is stored locally on cameras and overwritten before investigators arrive.",
        "GPS gaps in the dead zone hide exactly the moment that matters.",
        "Witness statements are reconstructed days later from memory.",
      ],
    },
    solution: {
      intro:
        "Mineoptic Incident Replay records every event from every connected source onto a single time-synchronised timeline. Investigators scrub to the moment of interest and watch positions, alerts, fuel events, dispatch states, and PPE compliance play back together. Root cause analysis becomes evidence-based, repeatable, and shareable.",
      architecture: [
        "Time-synchronised event ingestion from Mineoptic modules and connected sources.",
        "Continuous retention with configurable resolution per event class.",
        "Timeline scrubber in Canvas with multi-asset playback.",
        "Investigation workspace with annotation, export, and sharing.",
      ],
    },
    howItWorks: [
      { title: "Capture", detail: "Every event from every source is timestamped at capture and at upload, with offline buffering as needed." },
      { title: "Process", detail: "The Canvas reconciles all sources onto a single mine-wide timeline." },
      { title: "Predict", detail: "Pre-built incident templates highlight likely contributing events around the moment of interest." },
      { title: "Output", detail: "Investigators scrub the timeline, annotate findings, and export a reviewable report." },
    ],
    features: [
      "Multi-source playback (position, alert, fuel, dispatch, PPE, video markers).",
      "Time-synchronised event ledger with capture and upload timestamps.",
      "Incident templates for common scenarios (haul-truck near-miss, ramp incident, refuelling event).",
      "Annotation workspace with shareable export.",
      "Audit-ready evidence chain.",
    ],
    impact: [
      { metric: "Investigation time", description: "Root cause established in hours instead of days." },
      { metric: "Evidence quality", description: "Reconstruction is timestamped and reviewable, not narrated from memory." },
      { metric: "Recurrence prevention", description: "Repeatable analysis of similar incidents across sites." },
      { metric: "Regulatory posture", description: "Reportable incidents come with a defensible evidence chain." },
    ],
    visual: {
      caption: "Time-synchronised event stream, multi-asset timeline, investigation workspace, exportable evidence chain.",
      beforeAfter: {
        before: "Investigation depends on three system exports and four witness interviews, completed a week later.",
        after: "Investigator opens the timeline, scrubs to the second of interest, and finishes the report the same day.",
      },
    },
    conclusion:
      "Incident replay turns mining safety review from narrative reconstruction into evidence-based analysis. Once a site has it, no one wants to investigate without it again.",
  },
];

export const useCaseCategories: UseCaseCategory[] = [
  "Safety",
  "Tracking",
  "Analytics",
  "Computer Vision",
  "Operations Intelligence",
];

export function getUseCase(slug: string): UseCase | undefined {
  return useCases.find((u) => u.slug === slug);
}
