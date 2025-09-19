---
layout: page
title: switching recommender system for music platform
description: Capstone project in recommender systems for MIT applied data science program.
importance: 2
img: "assets/img/projects/rec_system/adsp_mit_logo.png"
category: academic
related_publications: false
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/rec_system/adsp_mit_logo.png" title="Fritzing diagram of prototype" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Applied Data Science Program by MIT Professional Education with Great Learning.
</div>

<!-- ########## INTRO ########## -->

## Overview

This project consisted on developing a **music recommendation system to suggest the top 10 songs** for users based on their preferences and listening history. It tackles challenges such as overwhelming content, **sparse data**, and the **cold-start** problem. The proposed solution involves a hybrid recommendation system that adapts to user behavior, categorizing users into three groups: new, moderately active, and highly active. This approach balances **exploration and engagement**, improving user retention, increasing time spent on the platform, and offering personalized music suggestions while addressing scalability and computational costs.

For this project, I was provided with the data from **Taste Profile Subset** released by the Echo Nest as part of the [Million Song Dataset](http://millionsongdataset.com/) to fit my models.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/rec_system/adsp_summary.png" title="Executive Summary" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<!-- ########## STATEMENT ########## -->

## Problem Statement

The music industry faces overwhelming content volume, where users interact with only ~7% of songs, leading to sparse data and cold-start problems. Without strong recommendations, platforms risk losing users to competitors.

### Goals
- Retain users and increase time spent on the platform.
- Provide top-10 personalized recommendations for all user types.
- Balance engagement, exploration, and operational cost.

<!-- ########## APPROACH ########## -->

## Approach

- **Data Cleaning**: Processed raw user–song interaction logs, handled missing values, removed noise, and ensured consistency in play counts.
- **Exploratory Data** Analysis (EDA): Examined user behavior patterns, song popularity distributions, and sparsity issues to guide model selection.
- **Model Fitting**: Trained three models tailored to user groups: popularity-based, content-based, and collaborative filtering (SVD).
- **Model Improvement**: Tuned hyperparameters, optimized similarity aggregation, and validated performance with offline experiments.
- **Model Comparison**: Benchmarked approaches using Precision@k, Recall@k, F1@k, and RMSE to identify trade-offs in accuracy, diversity, and scalability.
- **Final Solution**: Designed a switching hybrid recommender system that dynamically selects the best model depending on user play history, addressing both cold-start and active-user scenarios.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/rec_system/adsp_eda.png" title="Exploratory Data Analysis" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Exploratory Data Analysis of the music data set.
</div>

<!-- ########## APPROACH ########## -->

### Tools and Technologies

- **Programming & Modeling**: Python, NumPy, Pandas, Scikit-learn, SciPy.
- **Recommendation Methods**: Popularity-based ranking, Content-based filtering (similarity matrices), Collaborative filtering with SVD (Matrix Factorization).
- **Evaluation**: Precision@k, Recall@k, F1@k, RMSE.
- **Databases & Vector Stores**: Pinecone (for embedding and similarity search).

<!-- ########## SOLUTION ########## -->

## Solution

The solution is a switching hybrid recommender system. Users are divided into three groups by their play count:
- **Group A**: No history → Popularity-based recommendations.
- **Group B**: Few plays (< median) → Content-based recommendations.
- **Group C**: Active users (≥ median) → Collaborative filtering with Matrix Factorization (SVD).

New songs with zero plays are handled by content-based similarity, ensuring catalog freshness.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/rec_system/adsp_groups.png" title="Splitting into groups" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The users are splitted into three groups, and for each group I use a different approach to recommend songs.
</div>

#### Group A: Popularity Model

- Recommends top-10 most popular tracks (above 75th percentile of play count).
- Designed for cold-start users with no history.

#### Group B: Content-Based Model

- Aggregates similarity scores from top-N user songs to rank unheard tracks.
- Offline similarity matrix computation.
- Limitation: lacks diversity and collaborative effects.

#### Group C: Collaborative Filtering

- Uses Matrix Factorization (SVD) to capture latent features.
- Achieved F1@k = 0.502, Precision@k = 0.415, Recall@k = 0.635, RMSE = 1.0141.
- Handles sparse data well; computationally expensive.

<!-- ########## RESULTS ########## -->

## Results

- Switching strategy addressed cold start (Groups A, B).
- Collaborative filtering achieved strong accuracy and engagement for active users.
- Balanced exploration and personalization, reducing churn and increasing session time.
- Business modeling showed potential monthly benefits ($3,952.50) vs. costs ($2,882).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/rec_system/adsp_metrics.png" title="Model Comparison" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Comparison of the metrics from the different models tested.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/rec_system/adsp_whatif.png" title="What If Analysis of Implementation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    What-if analysis of the proposed solution in terms of costs.
</div>

<!-- ########## NEXT STEPS ########## -->

## Suggested Next Steps

- Add onboarding questionnaire for Group A to capture preferences earlier.
- Dynamic thresholding for group classification (ɳ).
- Incorporate weighted hybrid models to smooth transitions between groups.
- Track additional metrics (play depth, skip rate).
- Invest in scalable infrastructure, CI/CD pipelines, and continuous retraining.
