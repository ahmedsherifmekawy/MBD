function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["Fact:1"] = "Fact.h:37";
	/* <Root>/Constant */
	this.urlHashMap["Fact:15"] = "Fact.c:41,53";
	/* <Root>/For Iterator
Subsystem */
	this.urlHashMap["Fact:3"] = "Fact.c:35,54";
	/* <Root>/Out1 */
	this.urlHashMap["Fact:11"] = "Fact.c:43&Fact.h:42";
	/* <S1>/Constant */
	this.urlHashMap["Fact:14"] = "msg=rtwMsg_SimulationReducedBlock&block=Fact:14";
	/* <S1>/For Iterator */
	this.urlHashMap["Fact:7"] = "Fact.c:36";
	/* <S1>/Prod */
	this.urlHashMap["Fact:13"] = "Fact.c:44";
	/* <S1>/Unit Delay */
	this.urlHashMap["Fact:9"] = "Fact.c:38,45,49";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Fact"};
	this.sidHashMap["Fact"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Fact:3"};
	this.sidHashMap["Fact:3"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "Fact:1"};
	this.sidHashMap["Fact:1"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "Fact:15"};
	this.sidHashMap["Fact:15"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/For Iterator Subsystem"] = {sid: "Fact:3"};
	this.sidHashMap["Fact:3"] = {rtwname: "<Root>/For Iterator Subsystem"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Fact:11"};
	this.sidHashMap["Fact:11"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "Fact:4"};
	this.sidHashMap["Fact:4"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "Fact:14"};
	this.sidHashMap["Fact:14"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/For Iterator"] = {sid: "Fact:7"};
	this.sidHashMap["Fact:7"] = {rtwname: "<S1>/For Iterator"};
	this.rtwnameHashMap["<S1>/Prod"] = {sid: "Fact:13"};
	this.sidHashMap["Fact:13"] = {rtwname: "<S1>/Prod"};
	this.rtwnameHashMap["<S1>/Unit Delay"] = {sid: "Fact:9"};
	this.sidHashMap["Fact:9"] = {rtwname: "<S1>/Unit Delay"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "Fact:10"};
	this.sidHashMap["Fact:10"] = {rtwname: "<S1>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
