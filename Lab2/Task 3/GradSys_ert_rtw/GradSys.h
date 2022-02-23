/*
 * File: GradSys.h
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

#ifndef RTW_HEADER_GradSys_h_
#define RTW_HEADER_GradSys_h_
#include <stddef.h>
#ifndef GradSys_COMMON_INCLUDES_
# define GradSys_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* GradSys_COMMON_INCLUDES_ */

#include "GradSys_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* External inputs (root inport signals with auto storage) */
typedef struct {
  uint8_T In1;                         /* '<Root>/In1' */
} ExtU_GradSys_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  uint8_T Out1;                        /* '<Root>/Out1' */
} ExtY_GradSys_T;

/* Real-time Model Data Structure */
struct tag_RTM_GradSys_T {
  const char_T * volatile errorStatus;
};

/* External inputs (root inport signals with auto storage) */
extern ExtU_GradSys_T GradSys_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_GradSys_T GradSys_Y;

/* Model entry point functions */
extern void GradSys_initialize(void);
extern void GradSys_step(void);
extern void GradSys_terminate(void);

/* Real-time Model object */
extern RT_MODEL_GradSys_T *const GradSys_M;

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
 * '<Root>' : 'GradSys'
 * '<S1>'   : 'GradSys/If Action Subsystem'
 * '<S2>'   : 'GradSys/If Action Subsystem1'
 * '<S3>'   : 'GradSys/If Action Subsystem2'
 * '<S4>'   : 'GradSys/If Action Subsystem3'
 * '<S5>'   : 'GradSys/If Action Subsystem4'
 */
#endif                                 /* RTW_HEADER_GradSys_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
