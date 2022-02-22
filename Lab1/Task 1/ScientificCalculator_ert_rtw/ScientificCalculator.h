/*
 * File: ScientificCalculator.h
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

#ifndef RTW_HEADER_ScientificCalculator_h_
#define RTW_HEADER_ScientificCalculator_h_
#include <stddef.h>
#include <string.h>
#ifndef ScientificCalculator_COMMON_INCLUDES_
# define ScientificCalculator_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* ScientificCalculator_COMMON_INCLUDES_ */

#include "ScientificCalculator_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* Block signals (auto storage) */
typedef struct {
  real_T In1;                          /* '<S1>/In1' */
} B_ScientificCalculator_T;

/* External inputs (root inport signals with auto storage) */
typedef struct {
  real_T In1;                          /* '<Root>/In1' */
  real_T In2;                          /* '<Root>/In2' */
} ExtU_ScientificCalculator_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Out1;                         /* '<Root>/Out1' */
  real_T Out2;                         /* '<Root>/Out2' */
  real_T Out3;                         /* '<Root>/Out3' */
  real_T Out4;                         /* '<Root>/Out4' */
  real_T ErrorFlag;                    /* '<Root>/Error Flag' */
} ExtY_ScientificCalculator_T;

/* Real-time Model Data Structure */
struct tag_RTM_ScientificCalculator_T {
  const char_T * volatile errorStatus;
};

/* Block signals (auto storage) */
extern B_ScientificCalculator_T ScientificCalculator_B;

/* External inputs (root inport signals with auto storage) */
extern ExtU_ScientificCalculator_T ScientificCalculator_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_ScientificCalculator_T ScientificCalculator_Y;

/* Model entry point functions */
extern void ScientificCalculator_initialize(void);
extern void ScientificCalculator_step(void);
extern void ScientificCalculator_terminate(void);

/* Real-time Model object */
extern RT_MODEL_ScientificCalculator_T *const ScientificCalculator_M;

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'ScientificCalculator'
 * '<S1>'   : 'ScientificCalculator/If Action Subsystem'
 * '<S2>'   : 'ScientificCalculator/If Action Subsystem1'
 */
#endif                                 /* RTW_HEADER_ScientificCalculator_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
