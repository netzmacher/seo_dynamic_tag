plugin.tx_seodynamictag {

  # cat=Seo Dynamic Tag - Meta Keywords//100;   type=string;      label= Prefix: String will prepended to the meta tag keywords.
  keywords.prefix           =
  # cat=Seo Dynamic Tag - Meta Keywords//201;   type=string;      label= Keywords CSV: Value is used in the meta tag keywords. Keywords should be a comma separated list. You can use a list of fields, separated by a double slash. I.e: keywords // seo_keywords.
  database.field.keywords           = keywords // seo_keywords
  # cat=Seo Dynamic Tag - Meta Keywords//202;   type=string;      label= Keywords phrase: Value is used in the meta tag keywords, if keywords from above is empty. Keywords should not be a comma separated list but a phrase. You can use a list of fields, separated by a double slash. I.e: keywords // seo_keywords.
  database.field.keywords.cover     = marginal_short // teaser_short // short // bodytext // title // header // subject
  # cat=Seo Dynamic Tag - Meta Keywords//300;   type=string;      label= Appendix: String will appended to the meta tag keywords.
  keywords.appendix         =
  # cat=Seo Dynamic Tag - Meta Keywords//402;   type=int+;        label= Crop: Crop keywords after X chars (whole words will cropped).
  crop.keywords         = 100

}
