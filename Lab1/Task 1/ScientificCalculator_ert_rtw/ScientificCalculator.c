/*
 * File: ScientificCalculator.c
 *
 * Code generated for Simulink model 'ScientificCalculator'.
 *
 * Model version                  : 1.1
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Tue Feb 22 10:02:01 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "ScientificCalculator.h"
#include "ScientificCalculator_private.h"

/* Block signals (auto storage) */
B_ScientificCalculator_T ScientificCalculator_B;

/* External inputs (root inport signals with auto storage) */
ExtU_ScientificCalculator_T ScientificCalculator_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_ScientificCalculator_T ScientificCalculator_Y;

/* Real-time model */
RT_MODEL_ScientificCalculator_T ScientificCalculator_M_;
RT_MODEL_ScientificCalculator_T *const ScientificCalculator_M =
  &ScientificCalculator_M_;

/* Model step function */
void ScientificCalculator_step(void)
{
  /* Outport: '<Root>/Out1' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Sum: '<Root>/Add1'
   */
  ScientificCalculator_Y.Out1 = (0.0 - ScientificCalculator_U.In1) -
    ScientificCalculator_U.In2;

  /* Outport: '<Root>/Out2' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Sum: '<Root>/Add'
   */
  ScientificCalculator_Y.Out2 = ScientificCalculator_U.In1 +
    ScientificCalculator_U.In2;

  /* Outport: '<Root>/Out3' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Product: '<Root>/Divide'
   */
  ScientificCalculator_Y.Out3 = ScientificCalculator_U.In1 *
    ScientificCalculator_U.In2;

  /* If: '<Root>/If' incorporates:
   *  Inport: '<Root>/In2'
   *  Inport: '<S1>/In1'
   */
  if (ScientificCalculator_U.In2 > 0.0) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem' incorporates:
     *  ActionPort: '<S1>/Action Port'
     */
    ScientificCalculator_B.In1 = ScientificCalculator_U.In2;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem' */
  } else {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem1' incorporates:
     *  ActionPort: '<S2>/Action Port'
     */
    /* Outport: '<Root>/Error Flag' incorporates:
     *  Constant: '<S2>/Constant'
     */
    ScientificCalculator_Y.ErrorFlag = 1.0;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem1' */
  }

  /* End of If: '<Root>/If' */

  /* Outport: '<Root>/Out4' incorporates:
   *  Inport: '<Root>/In1'
   *  Product: '<Root>/Divide1'
   */
  ScientificCalculator_Y.Out4 = 1.0 / ScientificCalculator_U.In1 /
    ScientificCalculator_B.In1;
}

/* Model initialize function */
void ScientificCalculator_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(ScientificCalculator_M, (NULL));

  /* block I/O */
  (void) memset(((void *) &ScientificCalculator_B), 0,
                sizeof(B_ScientificCalculator_T));

  /* external inputs */
  (void) memset((void *)&ScientificCalculator_U, 0,
                sizeof(ExtU_ScientificCalculator_T));

  /* external outputs */
  (void) memset((void *)&ScientificCalculator_Y, 0,
                sizeof(ExtY_ScientificCalculator_T));
}

/* Model terminate function */
void ScientificCalculator_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
