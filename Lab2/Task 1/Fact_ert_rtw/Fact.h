/*
 * File: Fact.h
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

#ifndef RTW_HEADER_Fact_h_
#define RTW_HEADER_Fact_h_
#include <stddef.h>
#ifndef Fact_COMMON_INCLUDES_
# define Fact_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* Fact_COMMON_INCLUDES_ */

#include "Fact_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* External inputs (root inport signals with auto storage) */
typedef struct {
  real_T In1;                          /* '<Root>/In1' */
} ExtU_Fact_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  uint8_T Out1;                        /* '<Root>/Out1' */
} ExtY_Fact_T;

/* Real-time Model Data Structure */
struct tag_RTM_Fact_T {
  const char_T * volatile errorStatus;
};

/* External inputs (root inport signals with auto storage) */
extern ExtU_Fact_T Fact_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_Fact_T Fact_Y;

/* Model entry point functions */
extern void Fact_initialize(void);
extern void Fact_step(void);
extern void Fact_terminate(void);

/* Real-time Model object */
extern RT_MODEL_Fact_T *const Fact_M;

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<S1>/Constant' : Unused code path elimination
 */

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
 * '<Root>' : 'Fact'
 * '<S1>'   : 'Fact/For Iterator Subsystem'
 */
#endif                                 /* RTW_HEADER_Fact_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
