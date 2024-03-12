---
title: "Causal-story: Local causal attention utilizing parameter-efficient tuning for visual story synthesis"
collection: International Conference on Acoustics, Speech and Signal Processing(ICASSP 2024)
date: 2023-12-14
paperurl: '[Causal-story: Local causal attention utilizing parameter-efficient tuning for visual story synthesis.pdf](https://arxiv.org/abs/2309.09553)'

---

The excellent text-to-image synthesis capability of diffusion models has driven progress in synthesizing coherent visual stories. The current state-of-the-art method combines the features of historical captions, historical frames, and the current captions as conditions for generating the current frame. However, this method treats each historical frame and caption as the same contribution. It connects them in order with equal weights, ignoring that not all historical conditions are associated with the generation of the current frame. To address this issue, we propose Causal-Story. This model incorporates a local causal attention mechanism that considers the causal relationship between previous captions, frames, and current captions. By assigning weights based on this relationship, Causal-Story generates the current frame, thereby improving the global consistency of story generation. We evaluated our model on the PororoSV and FlintstonesSV datasets and obtained state-of-the-art FID scores, and the generated frames also demonstrate better storytelling in visuals.
