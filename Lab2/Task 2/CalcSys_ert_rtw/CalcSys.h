/*
 * File: CalcSys.h
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

#ifndef RTW_HEADER_CalcSys_h_
#define RTW_HEADER_CalcSys_h_
#include <stddef.h>
#include <string.h>
#ifndef CalcSys_COMMON_INCLUDES_
# define CalcSys_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* CalcSys_COMMON_INCLUDES_ */

#include "CalcSys_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* Block signals (auto storage) */
typedef struct {
  real_T In1;                          /* '<S2>/In1' */
} B_CalcSys_T;

/* External inputs (root inport signals with auto storage) */
typedef struct {
  real_T In1;                          /* '<Root>/In1' */
  real_T In2;                          /* '<Root>/In2' */
} ExtU_CalcSys_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Out1;                         /* '<Root>/Out1' */
  real_T Out2;                         /* '<Root>/Out2' */
  real_T Out3;                         /* '<Root>/Out3' */
  real_T Out4;                         /* '<Root>/Out4' */
  real_T ErrorFlag;                    /* '<Root>/Error Flag' */
} ExtY_CalcSys_T;

/* Real-time Model Data Structure */
struct tag_RTM_CalcSys_T {
  const char_T * volatile errorStatus;
};

/* Block signals (auto storage) */
extern B_CalcSys_T CalcSys_B;

/* External inputs (root inport signals with auto storage) */
extern ExtU_CalcSys_T CalcSys_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_CalcSys_T CalcSys_Y;

/* Model entry point functions */
extern void CalcSys_initialize(void);
extern void CalcSys_step(void);
extern void CalcSys_terminate(void);

/* Real-time Model object */
extern RT_MODEL_CalcSys_T *const CalcSys_M;

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
 * '<Root>' : 'CalcSys'
 * '<S1>'   : 'CalcSys/Subsystem'
 * '<S2>'   : 'CalcSys/Subsystem/If Action Subsystem'
 * '<S3>'   : 'CalcSys/Subsystem/If Action Subsystem1'
 */
#endif                                 /* RTW_HEADER_CalcSys_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
