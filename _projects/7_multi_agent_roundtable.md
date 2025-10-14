---
layout: page
title: 'multi-agent round table platform'
description: proof of concept for decision-support platform based in a round table discussion (work in progress)
importance: 2
category: wip
img: "assets/img/projects/mas_dss/gawain_header.png"
related_publications: false
---

<div style="text-align: center; font-size: 0.85rem; font-style: italic; margin-top: 1rem;">
    "Merlin made the Round Table in tokening of roundness of the world (...)"
    <br>
    — Malory, Thomas. <em>Le Morte d’Arthur. Book XX, Chapter XVI</em>
</div>

---

<!-- ########## INTRO ########## -->

## Introduction

*Gawain* (tentative project name) is a **collaborative decision-support platform** where various multi-model AI agents, each with unique role and focus, debate and cooperate under a structured set of rules to help the user reach better, more transparent decisions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/mas_dss/gawain_logo_1.png" title="Temporal logo of *Gawain*" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Actual logo and name of project to be defined.
</div>

---

### What is *Gawain*?

Let’s use an analogy to introduce *Gawain*.

Imagine a kingdom where the King wants to **solve a problem** —say, 

*How to negotiate peace among distant lands*. 
  - The kingdom is vast, inhabited by many kinds of beings: mages, elves, and merfolk. 
  - Each knows their own **domain** deeply, but the King doesn’t understand their world well enough to decide alone. 
  - So, instead of relying on a single advisor, the King convenes a **Round Table**: a forum where the most capable experts discuss, challenge, and refine one another’s ideas until the best solution **emerges**.

*Gawain* works the same way: you (the user) define your problem, and a team of specialized AI agents collaborate, under the rules of the Round Table, to provide structured, multi-perspective reasoning while a run-time summary of the discussion is provided to you.

---

#### You, The King!

As the King, your goal is to solve complex problems in your “kingdom” (organization, research, or project). You want insight that is grounded, balanced, and efficient.

You could try several approaches:

* **Think alone.** You may miss critical factors or domain knowledge.
* **Consult real experts.** Effective, but expensive and time-consuming.
* **Ask a single LLM.** Useful if you can prompt well and validate results, but risky—one model might hallucinate or overlook key perspectives.

These options often fail to capture the diversity of reasoning needed for real-world problems.  
That’s why the King needs a **Round Table**.

---

#### Round Table

The Round Table is the central coordination mechanism of *Gawain*. It’s where AI agents exchange ideas through structured rounds of discussion, guided by the **rules engine**. Each round refines the collective reasoning, converging on higher-quality, multi-perspective solutions.  
The Round Table embodies collaborative intelligence—agents debate, challenge, and vote according to the scenario’s context.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/mas_dss/gawain_02.jpg" title="System Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

##### Gatekeeper (Fairy)

The **Gatekeeping Agent** is the first entity you meet when starting a new project.  
It acts as a facilitator between the King and the rest of the system.

Responsibilities:

* Interpret the user’s problem statement.
* Ask clarifying questions to ensure complete understanding.
* Identify the most relevant expert roles for the task (e.g., Mage, Elf, Mermaid—each representing an LLM or model specialized in a domain).
* Confirm the proposed agent lineup with the user.
* Once approved, **instantiate** the team—each agent receives a role, a system prompt, and the user’s problem context.

In essence, the Gatekeeper transforms an open-ended idea into a well-defined, multi-agent session.

---

##### Expert Agents

Expert Agents are autonomous LLM-based participants with specific roles and knowledge domains. Each agent:

* Thinks and reasons within its defined expertise.
* Reads all messages from the communication channel (user, other agents).
* Participates in multiple **comment rounds**, contributing unique insights and critiques.
* Votes or expresses confidence on emerging solutions.

Their interaction is governed by the **Round Table Rules Engine**, ensuring that each round proceeds in an organized manner (e.g., discussion, rebuttal, voting, summarization).

Agents can come from different models (e.g., ChatGPT, Claude, Ollama) to combine diverse reasoning styles and knowledge sources.

---

##### Notary Agent

The **Notary Agent** observes every interaction at the table.  
It specializes in:

* Summarizing discussion threads into structured, readable outputs.
* Monitoring conversation dynamics (e.g., detecting loops, low-quality exchanges, or convergence).
* Triggering events in the rules engine—like early stopping when consensus is reached.
* Sending consolidated summaries and metadata to the **Royal Dashboard** for user review.

It acts as the official record keeper of the Round Table.

---

##### Rules-Engine

The **Round Table Rules Engine** is a finite-state machine (FSM) that governs the logic of every session.  
It orchestrates:

* The transition between phases (setup → discussion → voting → summary).
* The timing and flow of turns within each round.
* The events triggered by the Notary or Gatekeeper (e.g., agent replacement, early stop, session end).
* The consistency and reproducibility of the debate process.

This ensures that every project follows a transparent, repeatable reasoning protocol—avoiding chaos or overtalk among agents.

---

##### Dashboard

The **Royal Dashboard** is the user interface connecting you to the entire system.

From here, you can:

* Interact with the agents through **Royal Chat**, sending and receiving messages transparently.
* Access the full conversation history, including metadata and reasoning traces.
* Visualize conversation graphs grouped by topics or domains.
* Monitor performance metrics, confidence levels, and vote distributions from each agent.
* Track the evolution of proposed solutions and summaries.
* Manage projects, sessions, and configuration options.

The dashboard brings transparency and control to the user, making AI collaboration auditable and interpretable.

---

##### Real World Example

Suppose a **tech startup** wants to decide whether to migrate from local servers to the cloud.  
Here’s how *Gawain* operates:

1. The CEO (the King) describes the problem: *“Should we move our infrastructure to the cloud?”*
2. The **Gatekeeper** clarifies questions about company size, security needs, and cost constraints.
3. It proposes three expert agents:
   * **FinOps Agent** – specialized in financial trade-offs and cost projections.
   * **DevOps Agent** – expert in deployment, scalability, and performance.
   * **Data Governance Agent** – focused on compliance, privacy, and data control.
4. The King approves the setup.
5. The **Round Table** begins its first discussion round. Each agent presents arguments based on its expertise.
6. The **Rules Engine** coordinates multiple rounds of discussion, rebuttals, and voting.
7. The **Notary Agent** summarizes the consensus: a structured recommendation balancing cost, scalability, and risk.
8. The King reads the report in the **Royal Dashboard**, reviews confidence metrics, and makes an informed decision.

*Gawain* thus provides structured, multi-perspective reasoning that is explainable, auditable, and ready for real-world decision-making.

---
