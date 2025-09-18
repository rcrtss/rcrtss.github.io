---
layout: page
title: controller for liquid mixing station
description: Embedded control system for the Festo MPS® PA mixing station, replacing traditional PLCs with a cost-effective Arduino-based solution.
importance: 2
img: "assets/img/projects/festo_control/festo_friz.png"
category: academic
related_publications: false
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/festo_control/festo_friz.png" title="Fritzing diagram of prototype" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Prototype circuit for the final project for Embedded Systems course as part of the Mechatronics Engineering Bachelor's degree.
</div>

<!-- ########## INTRO ########## -->

## Overview

The objective was to design and implement an embedded control system for the Festo MPS® PA mixing station, replacing traditional PLCs with a cost-effective Arduino-based solution. Requirements included:
- Control of dosing tanks, pumps, and valves for automatic liquid mixing.
- User interaction via a Human-Machine Interface (HMI) to select recipes, volumes, and operation parameters.
- Accurate flow and level measurement through capacitive sensors and flow detectors.
- Step-response testing and validation through simulation and physical experiments .

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/festo_control/festo_station_diagram_1.png" title="Festo Liquid Station 1" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    Festo MPS® PA academic liquid mixing station
</div>  

<!-- ########## SYSTEM ########## -->

## System Description

The station consisted of three dosing tanks and one main mixing tank, controlled by pumps and two-way ball valves. Sensors included capacitive level detectors and a paddle-wheel flow detector with a frequency-to-voltage converter.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/festo_control/festo_station_diagram_2.png" title="Festo Liquid Station 2" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    Festo MPS® PA station piping and instrumentation diagram
</div>  

Control was implemented with an Arduino board programmed in C/C++, interfacing with the sensors and actuators via designed conditioning circuits. The Arduino acted as the embedded controller, handling real-time process logic, while the HMI allowed recipe selection and process monitoring .

<!-- ########## IMPLEMENTATION ########## -->

## Solution Design and Implementation

The implementation was divided into four parts, which are listed below.

### 1. HMI Controller (Arduino 1)

- Implemented using a 16x2 LCD and 4 push-buttons (Enter, Return, +, –).
- Allowed operator to input recipe, target volume, and pump voltage.
- Displayed process state in real time (filling, mixing, recirculation, error conditions).
- Communicated with the control Arduino via serial + parallel signaling.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/festo_control/festo_prototype.png" title="Test for HMI with integration to process controller" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    HMI integration prototype to test interaction.
</div>

### 2. Process Controller (Arduino 2)

- Executed real-time process logic (sequence of filling, mixing, draining).
- Received parameters from HMI Arduino and drove pumps/valves.
- Implemented discrete On-Off control based on sensor feedback.
- Generated PWM signals to regulate pump voltage.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/festo_control/festo_proteus_2.png" title="Measurement of results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Proteus simulation of control circuit.
</div>

### 3. Measurement and Instrumentation

- Capacitive sensors detected liquid levels (min/max thresholds).
- Flowmeter + frequency-to-voltage converter provided continuous flow rate measurement.
- Custom signal conditioning circuits (relay-based interfaces, op-amp buffers) adapted 24V sensor outputs to 5V inputs.
- Calibration and step-response tests established accurate flow vs. voltage curves.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/festo_control/festo_circuit.png" title="Measurement of results" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/festo_control/festo_integration.png" title="Measurement of results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Integration of the two controllers to the system through interfaces.
</div>

### 4. LabVIEW Dashboard

- Designed a live monitoring panel in LabVIEW.
- Displayed sensor states (capacitive level detection) and real-time flow data.
- Included a graphical plot of flow vs. time for process analysis.
- Interfaced with the control Arduino via serial communication for data acquisition.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/festo_control/festo_labview_1.png" title="LabVIEW 1" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/festo_control/festo_labview_2.png" title="LabVIEW 1" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    LabVIEW was used as a visual tool for the user (replacing the actual SCADA of the station).
</div>

<!-- ########## CONTROL ########## -->

## Control Method

The dosing and mixing process was governed by a PI control strategy:

- **Proportional factor (P)**: Pump voltage (via PWM duty cycle) was tuned experimentally to achieve a flow response proportional to the set point requirements. This allowed adjustment of flow rate for different recipes.
- **Integral factor (I)**: The system continuously integrated flow sensor pulses into cumulative milliliters. Once the accumulated volume exceeded the recipe set point, the controller shut off the pump, ensuring accurate dosing without steady-state error.

Further improvements could be achieved by refining tuning or extending the algorithm to full PID for smoother transient behavior.

<!-- ########## CODE ########## -->

## Code

> The code can be found in [this GitHub repository](https://github.com/rcrtss/liquid-mix-control-system/tree/main/src).

<!-- ########## RESULTS ########## -->

## Results

- Functional automatic mixing with three predefined recipes.
- HMI Arduino successfully controlled parameters and guided the operator.
- Correct operation of all sensors and actuators was verified.
- LabVIEW dashboard provided real-time visibility of process variables.
- System demonstrated feasibility of replacing PLCs with embedded controllers in small-scale or didactic setups.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/festo_control/festo_test.png" width="640px" title="Measurement of results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Plots of measurements during the execution of a recipe.
</div>

<!-- ########## MEDIA ########## -->

<!-- ########## NEXT STEPS ########## -->

## Next Steps

- Implement PID control for smoother liquid dosing.
- Improve sensor fusion and calibration to reduce error.
- Replace dual-Arduino setup with a single higher-performance microcontroller, such as STM32 or Renesas (Eg. Cortex M4).
- Integrate communication protocols (e.g., Modbus, Ethernet) for industrial scalability, and possibly integrate with SCADA system.
- Enhance LabVIEW dashboard with historical logging and alarms.
