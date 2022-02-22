/*
 * File: GradSys.c
 *
 * Code generated for Simulink model 'GradSys'.
 *
 * Model version                  : 1.4
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Tue Feb 22 11:27:47 2022
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
  /* If: '<Root>/If' incorporates:
   *  Inport: '<Root>/In1'
   */
  if (GradSys_U.In1 > 90) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem1' incorporates:
     *  ActionPort: '<S2>/Action Port'
     */
    /* Outport: '<Root>/Out1' incorporates:
     *  Inport: '<S2>/In1'
     */
    GradSys_Y.Out1 = GradSys_U.In1;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem1' */
  } else if (GradSys_U.In1 > 75) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem2' incorporates:
     *  ActionPort: '<S3>/Action Port'
     */
    /* Outport: '<Root>/Out2' incorporates:
     *  Inport: '<S3>/In1'
     */
    GradSys_Y.Out2 = GradSys_U.In1;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem2' */
  } else if (GradSys_U.In1 > 65) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem3' incorporates:
     *  ActionPort: '<S4>/Action Port'
     */
    /* Outport: '<Root>/Out3' incorporates:
     *  Inport: '<S4>/In1'
     */
    GradSys_Y.Out3 = GradSys_U.In1;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem3' */
  } else if (GradSys_U.In1 > 50) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem4' incorporates:
     *  ActionPort: '<S5>/Action Port'
     */
    /* Outport: '<Root>/Out4' incorporates:
     *  Inport: '<S5>/In1'
     */
    GradSys_Y.Out4 = GradSys_U.In1;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem4' */
  } else {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem' incorporates:
     *  ActionPort: '<S1>/Action Port'
     */
    /* Outport: '<Root>/Out5' incorporates:
     *  Inport: '<S1>/In1'
     */
    GradSys_Y.Out5 = GradSys_U.In1;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem' */
  }

  /* End of If: '<Root>/If' */
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
  (void) memset((void *)&GradSys_Y, 0,
                sizeof(ExtY_GradSys_T));
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
