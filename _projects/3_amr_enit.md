---
layout: page
title: autonomous mobile robot that follows a target
description: As part of the European Project Semester, we developed a software solution for an AMR to follow a person while avoiding static and dynamic obstacles.
importance: 1
img: "assets/img/projects/amr_enit/folltrack_enit.png"
category: academic
related_publications: false
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/amr_enit/folltrack_enit.png" title="Pioneer LX Omron Adept" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    École Nationale D'Ingénieurs de Tarbes
</div>

<!-- ########## INTRO ########## -->

## Overview

As part of the European Project Semester at ENIT (École Nationale d’Ingénieurs de Tarbes), I collaborated with an international team to design and implement a software solution enabling the Pioneer LX mobile robot to autonomously track and follow a human while avoiding static and dynamic obstacles.

The system combined Microsoft Kinect for human detection with the robot’s embedded sensors for navigation and obstacle avoidance, using the potential field method to ensure safe, adaptive movement in real time.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/amr_enit/folltrack_pictorial_diagram.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/amr_enit/folltrack_amr.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

The project delivered a working prototype demonstrating reliable human-following behavior, documented in multiple software versions, and was validated by the client as a showcase of ENIT’s mobile robotics research capabilities.

<!-- ########## PROJECT ########## -->

## Project Requirements

The project goal was to develop a software solution enabling the Pioneer LX mobile robot to track and follow a person indoors while avoiding static and dynamic obstacles. Core requirements included:
- Reliable human tracking using Microsoft Kinect.
- Safe following distance with <1s reaction time.
- Obstacle avoidance (static and dynamic) within defined proximity limits.
- Gesture-based commands for start/stop identification.
- Delivery of software, user and designer manuals, and demonstration material

<!-- ########## ROBOT ########## -->

## Industrial Autonomous Mobile Robot

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/amr_enit/folltrack_amr_components.png" title="Pioneer LX Omron Adept" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Robot used: Pioneer LX Mobile Robot from Omron Adept®.
</div>

The system was implemented on the Pioneer LX mobile robot (Adept®), a general-purpose differential-drive platform equipped with a laser rangefinder, bumpers, and ultrasonic sensors. It runs an embedded Intel PC with Ubuntu 12.04. The development was done in C++ using Adept’s ARIA library for robot control, with simulation support through MobileSim.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/amr_enit/folltrack_sim_obstacles.png" title="MobileSim" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example simulation with MobileSim software and testing our obstacle avoidance algorithm implementation.
</div>

<!-- ########## IMPLEMENTATION ########## -->

## Solution Design and Implementation

Work was split into three parallel branches:
- Robot Control: low-level motor commands, sensor data handling, ARIA actions.
- Navigation: algorithms for path planning and obstacle avoidance.
- Target Tracking: human position detection using Microsoft Kinect and OpenNI/NITE libraries for skeleton tracking

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/amr_enit/folltrack_dev_areas.png" title="Development areas" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/amr_enit/folltrack_functional_diagram.png" title="Functional diagram" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    1) The three main development areas. 2) Functional diagram of the solution.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/amr_enit/folltrack_uml.png" title="Class UML" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Class UML diagram of the code
</div>

<!-- ########## TRACKING ########## -->

Human tracking was implemented using the Microsoft Kinect v1 as the primary sensor. The Kinect provided both RGB and depth data, which was processed with OpenNI and NITE libraries to detect a person’s skeleton and extract their position relative to the robot.

The software established a communication protocol between the Kinect and the Pioneer LX’s embedded controller, allowing the robot to continuously update the target’s coordinates. Gesture-based recognition was added to initialize and stop tracking, ensuring controlled user interaction.

This tracking module provided the input for the navigation system, enabling the robot to follow a designated human in real time with an accuracy of ~10% of the desired following distance

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/amr_enit/folltrack_tracking.png" title="Tracking human upon pose" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The robot was programmed to identify the defined posed (right image) to start the tracking and to stop tracking when that pose is detected again.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/amr_enit/folltrack_tracking_sim.png" title="Tracking as input for controlling the robot in the simulator" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Tracking as input for controlling the robot in the simulator.
</div>

<!-- ########## NAVIGATION ########## -->

## Navigation Algorithm

The navigation strategy was based on the Potential Field Method, where attractive forces guide the robot toward the human target, while repulsive forces push it away from obstacles detected by onboard sensors. This approach allowed real-time adaptation to both static and limited dynamic obstacles

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/amr_enit/folltrack_potential_field.png" title="Depiction of potential field method" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/amr_enit/folltrack_sim_obstacles.png" title="Simulation with potential field algorithm" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Representation of potential field method for the robot to decide next move given current sensor readings.
</div>

<!-- ########## RESULTS ########## -->

## Results

- **Version 1**: Basic person-following without obstacle avoidance.
- **Version 2**: Human following with static obstacle avoidance, extended to handle some dynamic obstacles.
- Achieved safe and stable human-following behavior in indoor tests.
- Delivered a working prototype validated by ENIT as a demonstration of autonomous mobile robotics capabilities

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/amr_enit/folltrack_measurements.png" title="Measurement of results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Plots of measurements during live tests of the robot following a target.
</div>

<!-- ########## MEDIA ########## -->

<div class="row justify-content-center mt-3">
    <div class="col-12 col-md-8 d-flex justify-content-center">
        {% include video.liquid path="https://www.youtube.com/embed/Q8PeI7uArbs" width="640" height="360" class="rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Tests in real world and their respective project requirements.
</div>

<!-- ########## NEXT STEPS ########## -->

## What did we miss?

Several improvements were identified to extend the system’s robustness and performance:
- State Estimation with Kalman Filter: Incorporating a Kalman filter could improve tracking stability by fusing Kinect depth data with robot odometry, reducing noise and handling temporary occlusions.
- Mitigating Target Loss: Since the Kinect sensor is fixed to the robot chassis, target loss occurs when the person exits its field of view. A possible enhancement is to mount the sensor on a pan-tilt mechanism or integrate sensor fusion with the laser scanner for wider coverage.
- Smoother Control: Current motion relies on discrete responses to position updates, which can result in jerky trajectories. Implementing continuous controllers (e.g., PID or fuzzy logic) on top of the navigation layer would enable smoother, more natural robot motion.
