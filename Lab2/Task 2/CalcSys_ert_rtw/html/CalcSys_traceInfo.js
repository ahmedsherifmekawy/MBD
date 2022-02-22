function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["CalcSys:1"] = "CalcSys.c:36,43,50,82&CalcSys.h:43";
	/* <Root>/In2 */
	this.urlHashMap["CalcSys:2"] = "CalcSys.c:37,44,51,57&CalcSys.h:44";
	/* <Root>/Out1 */
	this.urlHashMap["CalcSys:16"] = "CalcSys.c:35&CalcSys.h:49";
	/* <Root>/Out2 */
	this.urlHashMap["CalcSys:17"] = "CalcSys.c:42&CalcSys.h:50";
	/* <Root>/Out3 */
	this.urlHashMap["CalcSys:18"] = "CalcSys.c:49&CalcSys.h:51";
	/* <Root>/Out4 */
	this.urlHashMap["CalcSys:19"] = "CalcSys.c:81&CalcSys.h:52";
	/* <Root>/Error Flag */
	this.urlHashMap["CalcSys:20"] = "CalcSys.c:71&CalcSys.h:53";
	/* <S1>/Add */
	this.urlHashMap["CalcSys:3"] = "CalcSys.c:45";
	/* <S1>/Add1 */
	this.urlHashMap["CalcSys:4"] = "CalcSys.c:38";
	/* <S1>/Divide */
	this.urlHashMap["CalcSys:5"] = "CalcSys.c:52";
	/* <S1>/Divide1 */
	this.urlHashMap["CalcSys:6"] = "CalcSys.c:83";
	/* <S1>/If */
	this.urlHashMap["CalcSys:7"] = "CalcSys.c:56,79";
	/* <S1>/If Action
Subsystem */
	this.urlHashMap["CalcSys:8"] = "CalcSys.c:61,66";
	/* <S1>/If Action
Subsystem1 */
	this.urlHashMap["CalcSys:12"] = "CalcSys.c:68,76";
	/* <S2>/In1 */
	this.urlHashMap["CalcSys:9"] = "CalcSys.c:58&CalcSys.h:38";
	/* <S2>/Action Port */
	this.urlHashMap["CalcSys:10"] = "CalcSys.c:62";
	/* <S3>/Action Port */
	this.urlHashMap["CalcSys:13"] = "CalcSys.c:69";
	/* <S3>/Constant */
	this.urlHashMap["CalcSys:14"] = "CalcSys.c:72";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "CalcSys"};
	this.sidHashMap["CalcSys"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "CalcSys:21"};
	this.sidHashMap["CalcSys:21"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "CalcSys:8"};
	this.sidHashMap["CalcSys:8"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "CalcSys:12"};
	this.sidHashMap["CalcSys:12"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "CalcSys:1"};
	this.sidHashMap["CalcSys:1"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/In2"] = {sid: "CalcSys:2"};
	this.sidHashMap["CalcSys:2"] = {rtwname: "<Root>/In2"};
	this.rtwnameHashMap["<Root>/Subsystem"] = {sid: "CalcSys:21"};
	this.sidHashMap["CalcSys:21"] = {rtwname: "<Root>/Subsystem"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "CalcSys:16"};
	this.sidHashMap["CalcSys:16"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "CalcSys:17"};
	this.sidHashMap["CalcSys:17"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "CalcSys:18"};
	this.sidHashMap["CalcSys:18"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "CalcSys:19"};
	this.sidHashMap["CalcSys:19"] = {rtwname: "<Root>/Out4"};
	this.rtwnameHashMap["<Root>/Error Flag"] = {sid: "CalcSys:20"};
	this.sidHashMap["CalcSys:20"] = {rtwname: "<Root>/Error Flag"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "CalcSys:22"};
	this.sidHashMap["CalcSys:22"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/In2"] = {sid: "CalcSys:23"};
	this.sidHashMap["CalcSys:23"] = {rtwname: "<S1>/In2"};
	this.rtwnameHashMap["<S1>/Add"] = {sid: "CalcSys:3"};
	this.sidHashMap["CalcSys:3"] = {rtwname: "<S1>/Add"};
	this.rtwnameHashMap["<S1>/Add1"] = {sid: "CalcSys:4"};
	this.sidHashMap["CalcSys:4"] = {rtwname: "<S1>/Add1"};
	this.rtwnameHashMap["<S1>/Divide"] = {sid: "CalcSys:5"};
	this.sidHashMap["CalcSys:5"] = {rtwname: "<S1>/Divide"};
	this.rtwnameHashMap["<S1>/Divide1"] = {sid: "CalcSys:6"};
	this.sidHashMap["CalcSys:6"] = {rtwname: "<S1>/Divide1"};
	this.rtwnameHashMap["<S1>/If"] = {sid: "CalcSys:7"};
	this.sidHashMap["CalcSys:7"] = {rtwname: "<S1>/If"};
	this.rtwnameHashMap["<S1>/If Action Subsystem"] = {sid: "CalcSys:8"};
	this.sidHashMap["CalcSys:8"] = {rtwname: "<S1>/If Action Subsystem"};
	this.rtwnameHashMap["<S1>/If Action Subsystem1"] = {sid: "CalcSys:12"};
	this.sidHashMap["CalcSys:12"] = {rtwname: "<S1>/If Action Subsystem1"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "CalcSys:24"};
	this.sidHashMap["CalcSys:24"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S1>/Out2"] = {sid: "CalcSys:25"};
	this.sidHashMap["CalcSys:25"] = {rtwname: "<S1>/Out2"};
	this.rtwnameHashMap["<S1>/Out3"] = {sid: "CalcSys:26"};
	this.sidHashMap["CalcSys:26"] = {rtwname: "<S1>/Out3"};
	this.rtwnameHashMap["<S1>/Out4"] = {sid: "CalcSys:27"};
	this.sidHashMap["CalcSys:27"] = {rtwname: "<S1>/Out4"};
	this.rtwnameHashMap["<S1>/Out5"] = {sid: "CalcSys:28"};
	this.sidHashMap["CalcSys:28"] = {rtwname: "<S1>/Out5"};
	this.rtwnameHashMap["<S2>/In1"] = {sid: "CalcSys:9"};
	this.sidHashMap["CalcSys:9"] = {rtwname: "<S2>/In1"};
	this.rtwnameHashMap["<S2>/Action Port"] = {sid: "CalcSys:10"};
	this.sidHashMap["CalcSys:10"] = {rtwname: "<S2>/Action Port"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "CalcSys:11"};
	this.sidHashMap["CalcSys:11"] = {rtwname: "<S2>/Out1"};
	this.rtwnameHashMap["<S3>/Action Port"] = {sid: "CalcSys:13"};
	this.sidHashMap["CalcSys:13"] = {rtwname: "<S3>/Action Port"};
	this.rtwnameHashMap["<S3>/Constant"] = {sid: "CalcSys:14"};
	this.sidHashMap["CalcSys:14"] = {rtwname: "<S3>/Constant"};
	this.rtwnameHashMap["<S3>/Out1"] = {sid: "CalcSys:15"};
	this.sidHashMap["CalcSys:15"] = {rtwname: "<S3>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
