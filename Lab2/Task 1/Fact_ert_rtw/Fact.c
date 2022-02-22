/*
 * File: Fact.c
 *
 * Code generated for Simulink model 'Fact'.
 *
 * Model version                  : 1.7
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Tue Feb 22 11:00:06 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "Fact.h"
#include "Fact_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_Fact_T Fact_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Fact_T Fact_Y;

/* Real-time model */
RT_MODEL_Fact_T Fact_M_;
RT_MODEL_Fact_T *const Fact_M = &Fact_M_;

/* Model step function */
void Fact_step(void)
{
  int8_T s1_iter;
  uint8_T UnitDelay_DSTATE;

  /* Outputs for Iterator SubSystem: '<Root>/For Iterator Subsystem' incorporates:
   *  ForIterator: '<S1>/For Iterator'
   */
  /* InitializeConditions for UnitDelay: '<S1>/Unit Delay' */
  UnitDelay_DSTATE = 1U;

  /* Constant: '<Root>/Constant' */
  for (s1_iter = 1; s1_iter < 6; s1_iter++) {
    /* Outport: '<Root>/Out1' incorporates:
     *  Product: '<S1>/Prod'
     *  UnitDelay: '<S1>/Unit Delay'
     */
    Fact_Y.Out1 = (uint8_T)(s1_iter * UnitDelay_DSTATE);

    /* Update for UnitDelay: '<S1>/Unit Delay' */
    UnitDelay_DSTATE = Fact_Y.Out1;
  }

  /* End of Constant: '<Root>/Constant' */
  /* End of Outputs for SubSystem: '<Root>/For Iterator Subsystem' */
}

/* Model initialize function */
void Fact_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Fact_M, (NULL));

  /* external inputs */
  Fact_U.In1 = 0.0;

  /* external outputs */
  Fact_Y.Out1 = 0U;
}

/* Model terminate function */
void Fact_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
