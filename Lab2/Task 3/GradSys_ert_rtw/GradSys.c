/*
 * File: GradSys.c
 *
 * Code generated for Simulink model 'GradSys'.
 *
 * Model version                  : 1.5
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Wed Feb 23 11:21:31 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "GradSys.h"
#include "GradSys_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_GradSys_T GradSys_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_GradSys_T GradSys_Y;

/* Real-time model */
RT_MODEL_GradSys_T GradSys_M_;
RT_MODEL_GradSys_T *const GradSys_M = &GradSys_M_;

/* Model step function */
void GradSys_step(void)
{
  /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem1' incorporates:
   *  ActionPort: '<S2>/Action Port'
   */
  /* Outport: '<Root>/Out1' incorporates:
   *  Inport: '<Root>/In1'
   */
  GradSys_Y.Out1 = GradSys_U.In1;

  /* End of Outputs for SubSystem: '<Root>/If Action Subsystem1' */
}

/* Model initialize function */
void GradSys_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(GradSys_M, (NULL));

  /* external inputs */
  GradSys_U.In1 = 0U;

  /* external outputs */
  GradSys_Y.Out1 = 0U;
}

/* Model terminate function */
void GradSys_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
