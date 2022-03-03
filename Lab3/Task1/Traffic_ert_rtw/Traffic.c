/*
 * File: Traffic.c
 *
 * Code generated for Simulink model 'Traffic'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Thu Mar 03 18:57:15 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "Traffic.h"
#include "Traffic_private.h"

/* Named constants for Chart: '<Root>/Chart' */
#define Traffic_IN_NO_ACTIVE_CHILD     ((uint8_T)0U)
#define Traffic_IN_S1                  ((uint8_T)1U)
#define Traffic_IN_S2                  ((uint8_T)2U)
#define Traffic_IN_S3                  ((uint8_T)3U)

/* Block signals (auto storage) */
B_Traffic_T Traffic_B;

/* Block states (auto storage) */
DW_Traffic_T Traffic_DW;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Traffic_T Traffic_Y;

/* Real-time model */
RT_MODEL_Traffic_T Traffic_M_;
RT_MODEL_Traffic_T *const Traffic_M = &Traffic_M_;

/* Model step function */
void Traffic_step(void)
{
  /* Chart: '<Root>/Chart' */
  if (Traffic_DW.temporalCounter_i1 < 3U) {
    Traffic_DW.temporalCounter_i1++;
  }

  /* Gateway: Chart */
  /* During: Chart */
  if (Traffic_DW.is_active_c3_Traffic == 0U) {
    /* Entry: Chart */
    Traffic_DW.is_active_c3_Traffic = 1U;

    /* Entry Internal: Chart */
    /* Transition: '<S1>:2' */
    Traffic_DW.is_c3_Traffic = Traffic_IN_S1;
    Traffic_DW.temporalCounter_i1 = 0U;

    /* Entry 'S1': '<S1>:1' */
    Traffic_B.out1 = 1U;
    Traffic_B.out2 = 0U;
    Traffic_B.out3 = 0U;
  } else {
    switch (Traffic_DW.is_c3_Traffic) {
     case Traffic_IN_S1:
      /* During 'S1': '<S1>:1' */
      if (Traffic_DW.temporalCounter_i1 >= 1U) {
        /* Transition: '<S1>:6' */
        Traffic_DW.is_c3_Traffic = Traffic_IN_S3;
        Traffic_DW.temporalCounter_i1 = 0U;

        /* Entry 'S3': '<S1>:3' */
        Traffic_B.out2 = 1U;
        Traffic_B.out3 = 0U;
        Traffic_B.out1 = 0U;
      }
      break;

     case Traffic_IN_S2:
      /* During 'S2': '<S1>:4' */
      if (Traffic_DW.temporalCounter_i1 >= 1U) {
        /* Transition: '<S1>:8' */
        Traffic_DW.is_c3_Traffic = Traffic_IN_S1;
        Traffic_DW.temporalCounter_i1 = 0U;

        /* Entry 'S1': '<S1>:1' */
        Traffic_B.out1 = 1U;
        Traffic_B.out2 = 0U;
        Traffic_B.out3 = 0U;
      }
      break;

     default:
      /* During 'S3': '<S1>:3' */
      if (Traffic_DW.temporalCounter_i1 >= 1U) {
        /* Transition: '<S1>:7' */
        Traffic_DW.is_c3_Traffic = Traffic_IN_S2;
        Traffic_DW.temporalCounter_i1 = 0U;

        /* Entry 'S2': '<S1>:4' */
        Traffic_B.out3 = 1U;
        Traffic_B.out2 = 0U;
        Traffic_B.out1 = 0U;
      }
      break;
    }
  }

  /* End of Chart: '<Root>/Chart' */

  /* Outport: '<Root>/Out1' */
  Traffic_Y.Out1 = Traffic_B.out1;

  /* Outport: '<Root>/Out2' */
  Traffic_Y.Out2 = Traffic_B.out2;

  /* Outport: '<Root>/Out3' */
  Traffic_Y.Out3 = Traffic_B.out3;
}

/* Model initialize function */
void Traffic_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Traffic_M, (NULL));

  /* block I/O */
  (void) memset(((void *) &Traffic_B), 0,
                sizeof(B_Traffic_T));

  /* states (dwork) */
  (void) memset((void *)&Traffic_DW, 0,
                sizeof(DW_Traffic_T));

  /* external outputs */
  (void) memset((void *)&Traffic_Y, 0,
                sizeof(ExtY_Traffic_T));

  /* SystemInitialize for Chart: '<Root>/Chart' */
  Traffic_DW.temporalCounter_i1 = 0U;
  Traffic_DW.is_active_c3_Traffic = 0U;
  Traffic_DW.is_c3_Traffic = Traffic_IN_NO_ACTIVE_CHILD;
  Traffic_B.out1 = 0U;
  Traffic_B.out2 = 0U;
  Traffic_B.out3 = 0U;
}

/* Model terminate function */
void Traffic_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
