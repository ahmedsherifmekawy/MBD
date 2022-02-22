/*
 * File: CalcSys.c
 *
 * Code generated for Simulink model 'CalcSys'.
 *
 * Model version                  : 1.2
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Tue Feb 22 11:05:46 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "CalcSys.h"
#include "CalcSys_private.h"

/* Block signals (auto storage) */
B_CalcSys_T CalcSys_B;

/* External inputs (root inport signals with auto storage) */
ExtU_CalcSys_T CalcSys_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_CalcSys_T CalcSys_Y;

/* Real-time model */
RT_MODEL_CalcSys_T CalcSys_M_;
RT_MODEL_CalcSys_T *const CalcSys_M = &CalcSys_M_;

/* Model step function */
void CalcSys_step(void)
{
  /* Outport: '<Root>/Out1' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Sum: '<S1>/Add1'
   */
  CalcSys_Y.Out1 = (0.0 - CalcSys_U.In1) - CalcSys_U.In2;

  /* Outport: '<Root>/Out2' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Sum: '<S1>/Add'
   */
  CalcSys_Y.Out2 = CalcSys_U.In1 + CalcSys_U.In2;

  /* Outport: '<Root>/Out3' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Product: '<S1>/Divide'
   */
  CalcSys_Y.Out3 = CalcSys_U.In1 * CalcSys_U.In2;

  /* If: '<S1>/If' incorporates:
   *  Inport: '<Root>/In2'
   *  Inport: '<S2>/In1'
   */
  if (CalcSys_U.In2 > 0.0) {
    /* Outputs for IfAction SubSystem: '<S1>/If Action Subsystem' incorporates:
     *  ActionPort: '<S2>/Action Port'
     */
    CalcSys_B.In1 = CalcSys_U.In2;

    /* End of Outputs for SubSystem: '<S1>/If Action Subsystem' */
  } else {
    /* Outputs for IfAction SubSystem: '<S1>/If Action Subsystem1' incorporates:
     *  ActionPort: '<S3>/Action Port'
     */
    /* Outport: '<Root>/Error Flag' incorporates:
     *  Constant: '<S3>/Constant'
     */
    CalcSys_Y.ErrorFlag = 1.0;

    /* End of Outputs for SubSystem: '<S1>/If Action Subsystem1' */
  }

  /* End of If: '<S1>/If' */

  /* Outport: '<Root>/Out4' incorporates:
   *  Inport: '<Root>/In1'
   *  Product: '<S1>/Divide1'
   */
  CalcSys_Y.Out4 = 1.0 / CalcSys_U.In1 / CalcSys_B.In1;
}

/* Model initialize function */
void CalcSys_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(CalcSys_M, (NULL));

  /* block I/O */
  (void) memset(((void *) &CalcSys_B), 0,
                sizeof(B_CalcSys_T));

  /* external inputs */
  (void) memset((void *)&CalcSys_U, 0,
                sizeof(ExtU_CalcSys_T));

  /* external outputs */
  (void) memset((void *)&CalcSys_Y, 0,
                sizeof(ExtY_CalcSys_T));
}

/* Model terminate function */
void CalcSys_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
