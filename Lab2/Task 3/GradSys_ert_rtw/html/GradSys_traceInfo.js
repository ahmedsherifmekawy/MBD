function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["GradSys:1"] = "GradSys.c:33&GradSys.h:38";
	/* <Root>/If */
	this.urlHashMap["GradSys:5"] = "GradSys.c:32,87";
	/* <Root>/If Action
Subsystem */
	this.urlHashMap["GradSys:6"] = "GradSys.c:76,84";
	/* <Root>/If Action
Subsystem1 */
	this.urlHashMap["GradSys:12"] = "GradSys.c:36,44";
	/* <Root>/If Action
Subsystem2 */
	this.urlHashMap["GradSys:39"] = "GradSys.c:46,54";
	/* <Root>/If Action
Subsystem3 */
	this.urlHashMap["GradSys:43"] = "GradSys.c:56,64";
	/* <Root>/If Action
Subsystem4 */
	this.urlHashMap["GradSys:47"] = "GradSys.c:66,74";
	/* <Root>/Out1 */
	this.urlHashMap["GradSys:2"] = "GradSys.c:39&GradSys.h:43";
	/* <Root>/Out2 */
	this.urlHashMap["GradSys:51"] = "GradSys.c:49&GradSys.h:44";
	/* <Root>/Out3 */
	this.urlHashMap["GradSys:52"] = "GradSys.c:59&GradSys.h:45";
	/* <Root>/Out4 */
	this.urlHashMap["GradSys:53"] = "GradSys.c:69&GradSys.h:46";
	/* <Root>/Out5 */
	this.urlHashMap["GradSys:54"] = "GradSys.c:79&GradSys.h:47";
	/* <S1>/In1 */
	this.urlHashMap["GradSys:7"] = "GradSys.c:80";
	/* <S1>/Action Port */
	this.urlHashMap["GradSys:8"] = "GradSys.c:77";
	/* <S2>/In1 */
	this.urlHashMap["GradSys:13"] = "GradSys.c:40";
	/* <S2>/Action Port */
	this.urlHashMap["GradSys:14"] = "GradSys.c:37";
	/* <S3>/In1 */
	this.urlHashMap["GradSys:40"] = "GradSys.c:50";
	/* <S3>/Action Port */
	this.urlHashMap["GradSys:41"] = "GradSys.c:47";
	/* <S4>/In1 */
	this.urlHashMap["GradSys:44"] = "GradSys.c:60";
	/* <S4>/Action Port */
	this.urlHashMap["GradSys:45"] = "GradSys.c:57";
	/* <S5>/In1 */
	this.urlHashMap["GradSys:48"] = "GradSys.c:70";
	/* <S5>/Action Port */
	this.urlHashMap["GradSys:49"] = "GradSys.c:67";
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
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "GradSys:2"};
	this.sidHashMap["GradSys:2"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "GradSys:51"};
	this.sidHashMap["GradSys:51"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "GradSys:52"};
	this.sidHashMap["GradSys:52"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "GradSys:53"};
	this.sidHashMap["GradSys:53"] = {rtwname: "<Root>/Out4"};
	this.rtwnameHashMap["<Root>/Out5"] = {sid: "GradSys:54"};
	this.sidHashMap["GradSys:54"] = {rtwname: "<Root>/Out5"};
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
