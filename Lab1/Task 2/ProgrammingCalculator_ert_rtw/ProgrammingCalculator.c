/*
 * File: ProgrammingCalculator.c
 *
 * Code generated for Simulink model 'ProgrammingCalculator'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Tue Feb 22 10:15:37 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "ProgrammingCalculator.h"
#include "ProgrammingCalculator_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_ProgrammingCalculator_T ProgrammingCalculator_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_ProgrammingCalculator_T ProgrammingCalculator_Y;

/* Real-time model */
RT_MODEL_ProgrammingCalculato_T ProgrammingCalculator_M_;
RT_MODEL_ProgrammingCalculato_T *const ProgrammingCalculator_M =
  &ProgrammingCalculator_M_;

/* Model step function */
void ProgrammingCalculator_step(void)
{
  /* Outport: '<Root>/Out1' incorporates:
   *  Inport: '<Root>/In1'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator'
   */
  ProgrammingCalculator_Y.Out1 = (uint8_T)(ProgrammingCalculator_U.In1 & 217);

  /* Outport: '<Root>/Out2' incorporates:
   *  Inport: '<Root>/In1'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator1'
   */
  ProgrammingCalculator_Y.Out2 = (uint8_T)(ProgrammingCalculator_U.In1 | 217U);

  /* Outport: '<Root>/Out3' incorporates:
   *  Inport: '<Root>/In1'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator2'
   */
  ProgrammingCalculator_Y.Out3 = (uint8_T)~ProgrammingCalculator_U.In1;

  /* Outport: '<Root>/Out4' incorporates:
   *  Inport: '<Root>/In1'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator3'
   */
  ProgrammingCalculator_Y.Out4 = (uint8_T)(ProgrammingCalculator_U.In1 ^ 217U);
}

/* Model initialize function */
void ProgrammingCalculator_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(ProgrammingCalculator_M, (NULL));

  /* external inputs */
  ProgrammingCalculator_U.In1 = 0U;

  /* external outputs */
  (void) memset((void *)&ProgrammingCalculator_Y, 0,
                sizeof(ExtY_ProgrammingCalculator_T));
}

/* Model terminate function */
void ProgrammingCalculator_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
