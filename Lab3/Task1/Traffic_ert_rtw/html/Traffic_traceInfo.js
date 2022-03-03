function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Chart */
	this.urlHashMap["Traffic:1"] = "Traffic.c:19,41,107,139&Traffic.h:38,39,40,57,58,59";
	/* <Root>/Out1 */
	this.urlHashMap["Traffic:5"] = "Traffic.c:109&Traffic.h:64";
	/* <Root>/Out2 */
	this.urlHashMap["Traffic:6"] = "Traffic.c:112&Traffic.h:65";
	/* <Root>/Out3 */
	this.urlHashMap["Traffic:7"] = "Traffic.c:115&Traffic.h:66";
	/* <S1>:1 */
	this.urlHashMap["Traffic:1:1"] = "Traffic.c:57,64,84";
	/* <S1>:4 */
	this.urlHashMap["Traffic:1:4"] = "Traffic.c:78,98";
	/* <S1>:3 */
	this.urlHashMap["Traffic:1:3"] = "Traffic.c:70,92";
	/* <S1>:2 */
	this.urlHashMap["Traffic:1:2"] = "Traffic.c:53";
	/* <S1>:6 */
	this.urlHashMap["Traffic:1:6"] = "Traffic.c:66";
	/* <S1>:8 */
	this.urlHashMap["Traffic:1:8"] = "Traffic.c:80";
	/* <S1>:7 */
	this.urlHashMap["Traffic:1:7"] = "Traffic.c:94";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Traffic"};
	this.sidHashMap["Traffic"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Traffic:1"};
	this.sidHashMap["Traffic:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/Chart"] = {sid: "Traffic:1"};
	this.sidHashMap["Traffic:1"] = {rtwname: "<Root>/Chart"};
	this.rtwnameHashMap["<Root>/Lamp"] = {sid: "Traffic:2"};
	this.sidHashMap["Traffic:2"] = {rtwname: "<Root>/Lamp"};
	this.rtwnameHashMap["<Root>/Lamp1"] = {sid: "Traffic:3"};
	this.sidHashMap["Traffic:3"] = {rtwname: "<Root>/Lamp1"};
	this.rtwnameHashMap["<Root>/Lamp2"] = {sid: "Traffic:4"};
	this.sidHashMap["Traffic:4"] = {rtwname: "<Root>/Lamp2"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Traffic:5"};
	this.sidHashMap["Traffic:5"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "Traffic:6"};
	this.sidHashMap["Traffic:6"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "Traffic:7"};
	this.sidHashMap["Traffic:7"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<S1>:1"] = {sid: "Traffic:1:1"};
	this.sidHashMap["Traffic:1:1"] = {rtwname: "<S1>:1"};
	this.rtwnameHashMap["<S1>:4"] = {sid: "Traffic:1:4"};
	this.sidHashMap["Traffic:1:4"] = {rtwname: "<S1>:4"};
	this.rtwnameHashMap["<S1>:3"] = {sid: "Traffic:1:3"};
	this.sidHashMap["Traffic:1:3"] = {rtwname: "<S1>:3"};
	this.rtwnameHashMap["<S1>:2"] = {sid: "Traffic:1:2"};
	this.sidHashMap["Traffic:1:2"] = {rtwname: "<S1>:2"};
	this.rtwnameHashMap["<S1>:6"] = {sid: "Traffic:1:6"};
	this.sidHashMap["Traffic:1:6"] = {rtwname: "<S1>:6"};
	this.rtwnameHashMap["<S1>:8"] = {sid: "Traffic:1:8"};
	this.sidHashMap["Traffic:1:8"] = {rtwname: "<S1>:8"};
	this.rtwnameHashMap["<S1>:7"] = {sid: "Traffic:1:7"};
	this.sidHashMap["Traffic:1:7"] = {rtwname: "<S1>:7"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
