function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["ProgrammingCalculator:5"] = "ProgrammingCalculator.c:34,40,46,52&ProgrammingCalculator.h:38";
	/* <Root>/Bitwise
Operator */
	this.urlHashMap["ProgrammingCalculator:1"] = "ProgrammingCalculator.c:35";
	/* <Root>/Bitwise
Operator1 */
	this.urlHashMap["ProgrammingCalculator:2"] = "ProgrammingCalculator.c:41";
	/* <Root>/Bitwise
Operator2 */
	this.urlHashMap["ProgrammingCalculator:3"] = "ProgrammingCalculator.c:47";
	/* <Root>/Bitwise
Operator3 */
	this.urlHashMap["ProgrammingCalculator:4"] = "ProgrammingCalculator.c:53";
	/* <Root>/Out1 */
	this.urlHashMap["ProgrammingCalculator:6"] = "ProgrammingCalculator.c:33&ProgrammingCalculator.h:43";
	/* <Root>/Out2 */
	this.urlHashMap["ProgrammingCalculator:7"] = "ProgrammingCalculator.c:39&ProgrammingCalculator.h:44";
	/* <Root>/Out3 */
	this.urlHashMap["ProgrammingCalculator:8"] = "ProgrammingCalculator.c:45&ProgrammingCalculator.h:45";
	/* <Root>/Out4 */
	this.urlHashMap["ProgrammingCalculator:9"] = "ProgrammingCalculator.c:51&ProgrammingCalculator.h:46";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "ProgrammingCalculator"};
	this.sidHashMap["ProgrammingCalculator"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "ProgrammingCalculator:5"};
	this.sidHashMap["ProgrammingCalculator:5"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Bitwise Operator"] = {sid: "ProgrammingCalculator:1"};
	this.sidHashMap["ProgrammingCalculator:1"] = {rtwname: "<Root>/Bitwise Operator"};
	this.rtwnameHashMap["<Root>/Bitwise Operator1"] = {sid: "ProgrammingCalculator:2"};
	this.sidHashMap["ProgrammingCalculator:2"] = {rtwname: "<Root>/Bitwise Operator1"};
	this.rtwnameHashMap["<Root>/Bitwise Operator2"] = {sid: "ProgrammingCalculator:3"};
	this.sidHashMap["ProgrammingCalculator:3"] = {rtwname: "<Root>/Bitwise Operator2"};
	this.rtwnameHashMap["<Root>/Bitwise Operator3"] = {sid: "ProgrammingCalculator:4"};
	this.sidHashMap["ProgrammingCalculator:4"] = {rtwname: "<Root>/Bitwise Operator3"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "ProgrammingCalculator:6"};
	this.sidHashMap["ProgrammingCalculator:6"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "ProgrammingCalculator:7"};
	this.sidHashMap["ProgrammingCalculator:7"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "ProgrammingCalculator:8"};
	this.sidHashMap["ProgrammingCalculator:8"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "ProgrammingCalculator:9"};
	this.sidHashMap["ProgrammingCalculator:9"] = {rtwname: "<Root>/Out4"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
