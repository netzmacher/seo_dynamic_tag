plugin.tx_seodynamictag {

  # cat=Seo Dynamic Tag - Conditions*//200;   type=string;        label= Single view begin*:*Obligate! Global condition beginning for the single view. Without outer square brackets (!). Replace 'xxx' with the id of the page with your plugin for the single view. You can use PIDinRootline among others but this is dangerous. Example: globalVar = GP:tx_ttnews|tt_news > 0] && [globalVar = TSFE:id = 123
  condition.single.begin  = globalVar = GP:table|field > 0] && [globalVar = TSFE:id = xxx
  # cat=Seo Dynamic Tag - Conditions*//201;   type=string;        label= Single view end*:*Obligate! Global condition ending. Without outer square brackets (!). Usually: global
  condition.single.end    = global
}
