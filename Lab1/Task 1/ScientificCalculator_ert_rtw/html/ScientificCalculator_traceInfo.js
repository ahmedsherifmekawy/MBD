function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["ScientificCalculator:7"] = "ScientificCalculator.c:37,45,53,86&ScientificCalculator.h:43";
	/* <Root>/In2 */
	this.urlHashMap["ScientificCalculator:9"] = "ScientificCalculator.c:38,46,54,61&ScientificCalculator.h:44";
	/* <Root>/Add */
	this.urlHashMap["ScientificCalculator:1"] = "ScientificCalculator.c:47";
	/* <Root>/Add1 */
	this.urlHashMap["ScientificCalculator:3"] = "ScientificCalculator.c:39";
	/* <Root>/Divide */
	this.urlHashMap["ScientificCalculator:5"] = "ScientificCalculator.c:55";
	/* <Root>/Divide1 */
	this.urlHashMap["ScientificCalculator:6"] = "ScientificCalculator.c:87";
	/* <Root>/If */
	this.urlHashMap["ScientificCalculator:13"] = "ScientificCalculator.c:60,83";
	/* <Root>/If Action
Subsystem */
	this.urlHashMap["ScientificCalculator:14"] = "ScientificCalculator.c:65,70";
	/* <Root>/If Action
Subsystem1 */
	this.urlHashMap["ScientificCalculator:18"] = "ScientificCalculator.c:72,80";
	/* <Root>/Out1 */
	this.urlHashMap["ScientificCalculator:8"] = "ScientificCalculator.c:36&ScientificCalculator.h:49";
	/* <Root>/Out2 */
	this.urlHashMap["ScientificCalculator:10"] = "ScientificCalculator.c:44&ScientificCalculator.h:50";
	/* <Root>/Out3 */
	this.urlHashMap["ScientificCalculator:11"] = "ScientificCalculator.c:52&ScientificCalculator.h:51";
	/* <Root>/Out4 */
	this.urlHashMap["ScientificCalculator:12"] = "ScientificCalculator.c:85&ScientificCalculator.h:52";
	/* <Root>/Error Flag */
	this.urlHashMap["ScientificCalculator:22"] = "ScientificCalculator.c:75&ScientificCalculator.h:53";
	/* <S1>/In1 */
	this.urlHashMap["ScientificCalculator:15"] = "ScientificCalculator.c:62&ScientificCalculator.h:38";
	/* <S1>/Action Port */
	this.urlHashMap["ScientificCalculator:16"] = "ScientificCalculator.c:66";
	/* <S2>/Action Port */
	this.urlHashMap["ScientificCalculator:20"] = "ScientificCalculator.c:73";
	/* <S2>/Constant */
	this.urlHashMap["ScientificCalculator:23"] = "ScientificCalculator.c:76";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "ScientificCalculator"};
	this.sidHashMap["ScientificCalculator"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "ScientificCalculator:14"};
	this.sidHashMap["ScientificCalculator:14"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "ScientificCalculator:18"};
	this.sidHashMap["ScientificCalculator:18"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "ScientificCalculator:7"};
	this.sidHashMap["ScientificCalculator:7"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/In2"] = {sid: "ScientificCalculator:9"};
	this.sidHashMap["ScientificCalculator:9"] = {rtwname: "<Root>/In2"};
	this.rtwnameHashMap["<Root>/Add"] = {sid: "ScientificCalculator:1"};
	this.sidHashMap["ScientificCalculator:1"] = {rtwname: "<Root>/Add"};
	this.rtwnameHashMap["<Root>/Add1"] = {sid: "ScientificCalculator:3"};
	this.sidHashMap["ScientificCalculator:3"] = {rtwname: "<Root>/Add1"};
	this.rtwnameHashMap["<Root>/Divide"] = {sid: "ScientificCalculator:5"};
	this.sidHashMap["ScientificCalculator:5"] = {rtwname: "<Root>/Divide"};
	this.rtwnameHashMap["<Root>/Divide1"] = {sid: "ScientificCalculator:6"};
	this.sidHashMap["ScientificCalculator:6"] = {rtwname: "<Root>/Divide1"};
	this.rtwnameHashMap["<Root>/If"] = {sid: "ScientificCalculator:13"};
	this.sidHashMap["ScientificCalculator:13"] = {rtwname: "<Root>/If"};
	this.rtwnameHashMap["<Root>/If Action Subsystem"] = {sid: "ScientificCalculator:14"};
	this.sidHashMap["ScientificCalculator:14"] = {rtwname: "<Root>/If Action Subsystem"};
	this.rtwnameHashMap["<Root>/If Action Subsystem1"] = {sid: "ScientificCalculator:18"};
	this.sidHashMap["ScientificCalculator:18"] = {rtwname: "<Root>/If Action Subsystem1"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "ScientificCalculator:8"};
	this.sidHashMap["ScientificCalculator:8"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "ScientificCalculator:10"};
	this.sidHashMap["ScientificCalculator:10"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "ScientificCalculator:11"};
	this.sidHashMap["ScientificCalculator:11"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "ScientificCalculator:12"};
	this.sidHashMap["ScientificCalculator:12"] = {rtwname: "<Root>/Out4"};
	this.rtwnameHashMap["<Root>/Error Flag"] = {sid: "ScientificCalculator:22"};
	this.sidHashMap["ScientificCalculator:22"] = {rtwname: "<Root>/Error Flag"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "ScientificCalculator:15"};
	this.sidHashMap["ScientificCalculator:15"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/Action Port"] = {sid: "ScientificCalculator:16"};
	this.sidHashMap["ScientificCalculator:16"] = {rtwname: "<S1>/Action Port"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "ScientificCalculator:17"};
	this.sidHashMap["ScientificCalculator:17"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/Action Port"] = {sid: "ScientificCalculator:20"};
	this.sidHashMap["ScientificCalculator:20"] = {rtwname: "<S2>/Action Port"};
	this.rtwnameHashMap["<S2>/Constant"] = {sid: "ScientificCalculator:23"};
	this.sidHashMap["ScientificCalculator:23"] = {rtwname: "<S2>/Constant"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "ScientificCalculator:21"};
	this.sidHashMap["ScientificCalculator:21"] = {rtwname: "<S2>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
