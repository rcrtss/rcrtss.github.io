---
layout: page
title: 'multi-agent round table platform'
description: proof of concept for decision-support platform based in a round table discussion (work in progress)
importance: 2
category: wip
img: "assets/img/projects/mas_dss/gawain_white.png"
related_publications: false
research_areas:
  - front: "Multi-agent coordination and decision-making"
    back:  "Study of architectures and algorithms that enable multiple autonomous agents to cooperate, negotiate, or compete to reach efficient collective outcomes under uncertainty."
  - front: "Interface design for collaborative reasoning"
    back:  "Exploration of interaction paradigms that support transparent, structured reasoning among human and AI participants."
  - front: "Semantic requirements mapping"
    back:  "Development of methods to extract, structure, and align user-stated problems or goals (through Natural Language Interaction) with relevant ontologies or computational models."
  - front: "Conversation-stem tracing & provenance graphs"
    back:  "Techniques to model and visualize the logical flow of a discussion, tracking claims, evidence, and dependencies over time. Uses graph-based representations for reasoning traceability and knowledge provenance."
  - front: "Turn orchestration in conversational systems"
    back:  "Research on coordination mechanisms that govern when and how multiple conversational agents or modules contribute to dialogue. Focus on turn-taking policies, dialogue management, and synchronization for coherent multi-party interaction."
  - front: "Incentives & aggregation (game theory, mechanism design, social choice)"
    back:  "Design of mechanisms that align agent incentives and fairly aggregate preferences or beliefs in group decision processes."
  - front: "Topic classification & taxonomy design"
    back:  "Construction of adaptive classification frameworks and semantic taxonomies that organize discussions, arguments, or research domains. Combines NLP, clustering, and ontology learning."
  - front: "Argumentation theory & MCDA"
    back:  "Integration of formal argumentation frameworks with multi-criteria decision analysis to evaluate competing alternatives through structured reasoning, evidence weighting, and preference modeling."
  - front: "Hybrid human–machine decision systems & collective intelligence"
    back:  "Study of systems combining human judgment and machine intelligence to improve group decision quality. Explores coordination models, trust calibration, and emergent collective behavior in mixed teams."
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
        <div class="w-75 mx-auto">
            <video autoplay loop muted style="max-width: 100%; border-radius: 8px;">
                <source src="{{ site.baseurl }}/assets/img/projects/mas_dss/sped_up_video.mp4" type="video/mp4">
                <source src="{{ site.baseurl }}/assets/img/projects/mas_dss/sped_up_video.webm" type="video/webm">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</div>
<div class="caption">
    Actual logo and name of project to be defined.
</div>

<!-- PDF Version
<p align="center">
  ![Temporal logo of Gawain](assets/img/projects/mas_dss/gawain_white.png){ width=75% }
</p> -->

---

### Why *Gawain*?

Let’s use an analogy to introduce *Gawain*.

Imagine you are a King who wants to **solve a problem** —say, *to negotiate peace among distant lands*. 
- Your kingdom is vast, inhabited by many kinds of beings, for example: mages, elves, and merfolk.
- Each knows their own **domain** deeply.
- You, on the other hand, don't understand their world well enough to decide alone.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div class="w-50 mx-auto">
            {% include figure.liquid loading="eager" path="assets/img/projects/mas_dss/gawain_king.png" title=" " class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

<!-- PDF Version
<p align="center">
  ![ ](assets/img/projects/mas_dss/gawain_king.png){ width=50% }
</p> -->

So, instead of relying on a single advisor, the King convenes a **Round Table**: a forum where the most capable experts discuss, challenge, and refine one another’s ideas until the best solution **emerges**.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div class="w-75 mx-auto">
            {% include figure.liquid loading="eager" path="assets/img/projects/mas_dss/gawain_kingdom.png" title=" " class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

<!-- PDF Version
<p align="center">
  ![ ](assets/img/projects/mas_dss/gawain_kingdom.png){ width=75% }
</p> -->

#### _Gawain_ works the same way:

- You define your problem.
- A team of specialized AI agents is spawned to **collaborate** by taking part in a structured **multi-perspective dialogue**.
- Throughout the session, the user can interact with the agents via a **Round Table Dashboard**.

_Gawain_ provides you with access to diverse perspectives, structured reasoning, and transparent decision-making support.

> In a nutshell, _Gawain_ hopes to bring the power of **collaborative intelligence** to real-world decision-making problems.

---

#### You, The King!

As the King, your goal is to solve complex problems in your “kingdom” (organization, research, or project). You want insight that is grounded, balanced, and efficient.

You could try several approaches:

* **Think alone.** You may miss critical factors or domain knowledge.
* **Consult real experts.** Effective, but expensive and time-consuming.
* **Ask a single LLM.** Useful if you can prompt well and validate results, but risky: one model might hallucinate or overlook key perspectives.

These options often fail to capture the diversity of reasoning needed for real-world problems.  
That’s why the King needs a **Round Table**.

---

#### Round Table

The Round Table is the central coordination mechanism of *Gawain*. It’s where AI agents exchange ideas through structured rounds of discussion, guided by the **rules engine**. Each round refines the collective reasoning, converging on higher-quality, multi-perspective solutions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div class="w-75 mx-auto">
            {% include figure.liquid loading="eager" path="assets/img/projects/mas_dss/gawain_roundtable.jpg" title=" " class="img-fluid rounded z-depth-1" %}    
        </div>
    </div>
</div>

<!-- PDF Version
<p align="center">
  ![ ](assets/img/projects/mas_dss/gawain_roundtable.png){ width=75% }
</p> -->

The Round Table embodies collaborative intelligence: agents debate, challenge, and vote according to the scenario’s context.

---

##### Gatekeeper

The **Gatekeeping Agent** is the first entity you meet when starting a new project, which acts as a facilitator between the King and the rest of the system.

The first task of the Gatekeeper is to **understand** your problem statement. If information is missing, it asks clarifying questions to ensure sufficient context.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div class="w-100 mx-auto">
            {% include figure.liquid loading="eager" path="assets/img/projects/mas_dss/gawain_gatekeeper.png" title=" " class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

<!-- PDF Version
<p align="center">
  ![ ](assets/img/projects/mas_dss/gawain_gatekeeper.png){ width=100% }
</p> -->

Then, it identifies the most relevant expert roles for the task (e.g., Mage, Elf, Mermaid—each representing an LLM or model specialized in a domain). Normally, 2-4 agents are selected to ensure diversity without overwhelming complexity.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div class="w-100 mx-auto">
            {% include figure.liquid loading="eager" path="assets/img/projects/mas_dss/gawain_roundtable_card.png" title=" " class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>
<div class="caption">
    Mockup of Round Table session card in the User Interface.
</div>

<!-- PDF Version
<p align="center">
  ![Round Table session card mockup](assets/img/projects/mas_dss/gawain_roundtable_card.png){ width=100% }
</p> -->

Finally, it waits for your confirmation of the proposed agent lineup and your validation of the whole setup.

Once approved, the Gatekeeper **instantiates** the team: each agent receives a role, a system prompt, and the user’s problem context.

> In essence, the Gatekeeper transforms an open-ended idea into a well-defined, multi-agent session.

---

##### Expert Agents

Expert Agents are autonomous LLM-based participants with specific roles and knowledge domains. Each agent:

* Thinks and reasons within its defined expertise.
* Reads all messages from the communication channel (user, other agents).
* Participates in multiple **comment rounds**, contributing unique insights and critiques.
* Votes or expresses confidence on emerging solutions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div class="w-75 mx-auto">
            {% include figure.liquid loading="eager" path="assets/img/projects/mas_dss/gawain_experts_interaction.png" title=" " class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>
<div class="caption">
    Mockup of Expert Agents interacting at the Round Table.
</div>

<!-- PDF Version
<p align="center">
  ![Expert Agents interaction mockup](assets/img/projects/mas_dss/gawain_experts_interaction.png){ width=75% }
</p> -->

Their interaction is governed by the **Round Table Rules Engine**, ensuring that each round proceeds in an organized manner (e.g., discussion, rebuttal, voting, summarization).

Agents can come from different models (e.g., ChatGPT, Claude, Ollama) to combine diverse reasoning styles and knowledge sources.

---

##### Notary Agent

The **Notary Agent** observes every interaction at the table.  
It specializes in:

* Summarizing discussion threads into structured, readable outputs.
* Monitoring conversation dynamics (e.g., detecting loops, low-quality exchanges, or convergence).
* Triggering events in the rules engine—like early stopping when consensus is reached.
* Sending consolidated summaries and metadata to the **Dashboard** for user review.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div class="w-75 mx-auto">
            {% include figure.liquid loading="eager" path="assets/img/projects/mas_dss/gawain_notary.png" title=" " class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

<!-- PDF Version
<p align="center">
  ![Notary Agent](assets/img/projects/mas_dss/gawain_notary.png){ width=75% }
</p> -->

It acts as the official record keeper of the Round Table.

---

##### Rules-Engine

The **Round Table Rules Engine** governs the logic of every session.

It orchestrates:

* The transition between phases (e.g. setup → discussion → voting → summary).
* The timing and flow of turns within each round.
* The events triggered by the Notary or Gatekeeper (e.g., agent replacement, early stop, session end).
* The consistency and reproducibility of the debate process.

This ensures that every project follows a transparent, repeatable reasoning protocol—avoiding chaos or overtalk among agents.

---

##### Dashboard

The core of _Gawain_ is the **Dashboard**, the user interface connecting you to the entire system. It is the bridge between you (the King) and the Round Table, and is the _support_ part of the decision-making process.

Here is where the King can follow the discussion, analyze conversation traces, interact with agents, and review results.

Particularly, the Dashboard allows you to:

* Interact with the agents through the **chat**, sending and receiving messages transparently.
* Access the full conversation history, including metadata and reasoning traces.
* Visualize conversation graphs grouped by topics or domains.
* Monitor performance metrics, confidence levels, and vote distributions from each agent.
* Track the evolution of proposed solutions and summaries.
* Manage projects, sessions, and configuration options.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div class="w-75 mx-auto">
            {% include figure.liquid loading="eager" path="assets/img/projects/mas_dss/gawain_dashboard.png" title=" " class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>
<div class="caption">
    Minimalist mockup of the Round Table Dashboard interface.
</div>

<!-- PDF Version
<p align="center">
  ![Dashboard mockup](assets/img/projects/mas_dss/gawain_dashboard.png){ width=75% }
</p> -->


> The dashboard brings transparency and control to the user, making AI collaboration auditable and interpretable.

#### Putting It All Together

_Gawain_ sets up a structured environment where multiple AI agents collaborate under human supervision to help tackle complex problems.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div class="w-100 mx-auto">
            {% include figure.liquid loading="eager" path="assets/img/projects/mas_dss/gawain_02.png" title=" " class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>
<div class="caption">
    Minimalist overview of the Gawain multi-agent decision-support system.
</div>

<!-- PDF Version
<p align="center">
  ![ ](assets/img/projects/mas_dss/gawain_02.jpg){ width=100% }
</p> -->

> A team of experts at your hands. Structured, multi-perspective reasoning. Transparency and control.

---

##### Real World Example

Suppose a **tech startup** wants to decide whether to migrate from local servers to the cloud.  
Here’s how *Gawain* operates:

1. The CEO describes the problem: *“Should we move our infrastructure to the cloud?”*
2. The **Gatekeeper** clarifies questions about company size, security needs, and cost constraints.
3. It proposes three expert agents:
   * **FinOps Agent** – specialized in financial trade-offs and cost projections.
   * **DevOps Agent** – expert in deployment, scalability, and performance.
   * **Data Governance Agent** – focused on compliance, privacy, and data control.
4. The user approves the setup.
5. The **Round Table** begins its first discussion round. Each agent presents arguments based on its expertise.
6. The **Rules Engine** coordinates multiple rounds of discussion, rebuttals, and voting.
7. The **Notary Agent** summarizes the consensus: a structured recommendation balancing cost, scalability, and risk.
8. The user reads the report in the **Dashboard**, reviews confidence metrics, and makes an informed decision.

---

## Next Steps

**I.** Perform research on key areas to inform design and implementation.
> The implementation of this project requires research in several areas. Below is a list of the proposed topics to investigate. Insights in any of these will contribute to the realization of the project.

{% include flip_cards.liquid areas=page.research_areas %}

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap');
.flip-card{background:transparent;width:100%;height:180px;perspective:1000px;cursor:pointer;margin-bottom:.5rem;transition:transform .3s;border-radius:8px}
.flip-card:hover{transform:scale(1.05)}
.flip-card-inner{position:relative;width:100%;height:100%;text-align:center;transition:transform .8s;transform-style:preserve-3d;border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,.2)}
.flip-card.flipped .flip-card-inner{transform:rotateY(180deg)}
.flip-card-front,.flip-card-back{font-family: "Rubik", sans-serif;position:absolute;width:100%;height:100%;backface-visibility:hidden;border-radius:8px;padding:1rem;display:flex;align-items:center;justify-content:center}
.flip-card-front{background:var(--global-divider-color);border:1px solid var(--global-border-color);font-weight:bold}
.flip-card-back{background:var(--global-theme-color-light);color:#fff;transform:rotateY(180deg)}
.flip-card-back p {font-size: 0.85rem;line-height: 1.3;margin: 0}
@media (max-width:768px){.flip-card{height:150px}}
</style>

<script>
document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('.flip-card').forEach(function(card){
    card.addEventListener('click',function(){ card.classList.toggle('flipped'); });
  });
});
</script>

**II.** Design the system architecture and components.

**III.** Develop a minimal viable prototype (MVP) to validate core functionalities.

**IV.** Test with real-world scenarios and gather user feedback.

**V.** Iterate and refine based on insights and performance metrics.

---

<!-- 
To export to pdf, run:
```bash
pandoc _projects/7_multi_agent_roundtable.md \
  -o gawain.pdf \
  --pdf-engine=xelatex \
  --resource-path=. \
  --embed-resources
```
 -->

Rodrigo Cortés Sánchez
MIT License © 2024
Last updated: October 2025
