function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["GradSys:1"] = "GradSys.c:36&GradSys.h:37";
	/* <Root>/If */
	this.urlHashMap["GradSys:5"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=GradSys:5";
	/* <Root>/If Action
Subsystem */
	this.urlHashMap["GradSys:6"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=GradSys:6";
	/* <Root>/If Action
Subsystem1 */
	this.urlHashMap["GradSys:12"] = "GradSys.c:32,40";
	/* <Root>/If Action
Subsystem2 */
	this.urlHashMap["GradSys:39"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=GradSys:39";
	/* <Root>/If Action
Subsystem3 */
	this.urlHashMap["GradSys:43"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=GradSys:43";
	/* <Root>/If Action
Subsystem4 */
	this.urlHashMap["GradSys:47"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=GradSys:47";
	/* <Root>/Merge */
	this.urlHashMap["GradSys:55"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=GradSys:55";
	/* <Root>/Out1 */
	this.urlHashMap["GradSys:2"] = "GradSys.c:35&GradSys.h:42";
	/* <S2>/Action Port */
	this.urlHashMap["GradSys:14"] = "GradSys.c:33";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "GradSys"};
	this.sidHashMap["GradSys"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "GradSys:6"};
	this.sidHashMap["GradSys:6"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "GradSys:12"};
	this.sidHashMap["GradSys:12"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "GradSys:39"};
	this.sidHashMap["GradSys:39"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "GradSys:43"};
	this.sidHashMap["GradSys:43"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "GradSys:47"};
	this.sidHashMap["GradSys:47"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "GradSys:1"};
	this.sidHashMap["GradSys:1"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/If"] = {sid: "GradSys:5"};
	this.sidHashMap["GradSys:5"] = {rtwname: "<Root>/If"};
	this.rtwnameHashMap["<Root>/If Action Subsystem"] = {sid: "GradSys:6"};
	this.sidHashMap["GradSys:6"] = {rtwname: "<Root>/If Action Subsystem"};
	this.rtwnameHashMap["<Root>/If Action Subsystem1"] = {sid: "GradSys:12"};
	this.sidHashMap["GradSys:12"] = {rtwname: "<Root>/If Action Subsystem1"};
	this.rtwnameHashMap["<Root>/If Action Subsystem2"] = {sid: "GradSys:39"};
	this.sidHashMap["GradSys:39"] = {rtwname: "<Root>/If Action Subsystem2"};
	this.rtwnameHashMap["<Root>/If Action Subsystem3"] = {sid: "GradSys:43"};
	this.sidHashMap["GradSys:43"] = {rtwname: "<Root>/If Action Subsystem3"};
	this.rtwnameHashMap["<Root>/If Action Subsystem4"] = {sid: "GradSys:47"};
	this.sidHashMap["GradSys:47"] = {rtwname: "<Root>/If Action Subsystem4"};
	this.rtwnameHashMap["<Root>/Merge"] = {sid: "GradSys:55"};
	this.sidHashMap["GradSys:55"] = {rtwname: "<Root>/Merge"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "GradSys:2"};
	this.sidHashMap["GradSys:2"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "GradSys:7"};
	this.sidHashMap["GradSys:7"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/Action Port"] = {sid: "GradSys:8"};
	this.sidHashMap["GradSys:8"] = {rtwname: "<S1>/Action Port"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "GradSys:9"};
	this.sidHashMap["GradSys:9"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/In1"] = {sid: "GradSys:13"};
	this.sidHashMap["GradSys:13"] = {rtwname: "<S2>/In1"};
	this.rtwnameHashMap["<S2>/Action Port"] = {sid: "GradSys:14"};
	this.sidHashMap["GradSys:14"] = {rtwname: "<S2>/Action Port"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "GradSys:15"};
	this.sidHashMap["GradSys:15"] = {rtwname: "<S2>/Out1"};
	this.rtwnameHashMap["<S3>/In1"] = {sid: "GradSys:40"};
	this.sidHashMap["GradSys:40"] = {rtwname: "<S3>/In1"};
	this.rtwnameHashMap["<S3>/Action Port"] = {sid: "GradSys:41"};
	this.sidHashMap["GradSys:41"] = {rtwname: "<S3>/Action Port"};
	this.rtwnameHashMap["<S3>/Out1"] = {sid: "GradSys:42"};
	this.sidHashMap["GradSys:42"] = {rtwname: "<S3>/Out1"};
	this.rtwnameHashMap["<S4>/In1"] = {sid: "GradSys:44"};
	this.sidHashMap["GradSys:44"] = {rtwname: "<S4>/In1"};
	this.rtwnameHashMap["<S4>/Action Port"] = {sid: "GradSys:45"};
	this.sidHashMap["GradSys:45"] = {rtwname: "<S4>/Action Port"};
	this.rtwnameHashMap["<S4>/Out1"] = {sid: "GradSys:46"};
	this.sidHashMap["GradSys:46"] = {rtwname: "<S4>/Out1"};
	this.rtwnameHashMap["<S5>/In1"] = {sid: "GradSys:48"};
	this.sidHashMap["GradSys:48"] = {rtwname: "<S5>/In1"};
	this.rtwnameHashMap["<S5>/Action Port"] = {sid: "GradSys:49"};
	this.sidHashMap["GradSys:49"] = {rtwname: "<S5>/Action Port"};
	this.rtwnameHashMap["<S5>/Out1"] = {sid: "GradSys:50"};
	this.sidHashMap["GradSys:50"] = {rtwname: "<S5>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
