# SIGNALINK MVP-2C — Audio-to-Haptic Bridge

A hardware-aware communication experiment for converting a text/audio communication event into a simple haptic output pattern.

## Engineering question

Can SIGNALINK create a **non-audio feedback channel** using the same communication events produced by its software pipeline?

## Planned pipeline

`Communication event → token → haptic pattern → simulated actuator`

This MVP starts as a browser test space. No physical hardware is required yet.

## What we will investigate

1. How communication tokens can be represented as short haptic patterns.
2. How many distinct patterns are practical to remember.
3. Timing, pulse width, spacing, and repetition.
4. Whether the representation can later map cleanly to an MCU GPIO/PWM output.
5. What information should remain in software and what belongs in hardware.

## Initial test tokens

- HELLO
- YES
- STOP

## Hardware path

Browser simulation → ESP32 GPIO/PWM → vibration motor → wearable feedback

## Position in SIGNALINK

MVP-1: sensing and communication entry point  
MVP-1.5: temporal event detection  
MVP-2A: compact landmark representation  
MVP-2B: fixed-memory event storage  
**MVP-2C: alternate output / haptic communication path**

This is a prototype experiment, not a claim of production-ready haptic hardware.

## Engineering method

**Theory → Build → Measure → Explain → Hardware**

License: Apache-2.0
