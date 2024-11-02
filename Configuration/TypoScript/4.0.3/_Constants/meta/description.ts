plugin.tx_seodynamictag {

  # cat=Seo Dynamic Tag - Meta Description//100;   type=string;		label= Prefix value: String will prepended to the meta tag description.
  description.prefix = 
  # cat=Seo Dynamic Tag - Meta Description//101;   type=string;		label= Prefix field:Field is prefixed the title tag. You can use a list of fields, separated by a double slash. I.e: subtitle // title
  database.field.description.prefix = 
  # cat=Seo Dynamic Tag - Meta Description//200;   type=string;   label= Devider: Devider between description and description appendix
  description.devider.value = |
  # cat=Seo Dynamic Tag - Meta Description//201;   type=string;   label= Devider wrap: No trim wrap for the description devider (TypoScript style)
  description.devider.noTrimWrap = | | |
  # cat=Seo Dynamic Tag - Meta Description//300;   type=string;   label= Description: Value is used in the meta tag description. You can use a list of fields, separated by a double slash. I.e: description // short // bodytext. If field or field value is empty, SEO Dynamic Tag takes the value from the default below.
  database.field.description = description // seo_description // marginal_short // teaser_short // short // bodytext // title // header // subject
  # cat=Seo Dynamic Tag - Meta Description//400;   type=string;   label= Appendix field:Field is appended the title tag. Example for a field: short. Example for a constant: "my short".
  database.field.description.appendix = 
  # cat=Seo Dynamic Tag - Meta Description//401;   type=string;   label= Appendix value: String will appended to the meta tag description.
  description.appendix = 
  # cat=Seo Dynamic Tag - Meta Description//501;   type=int+;     label= Crop: Crop description after X chars (whole words will cropped).
  crop.description = 200
  # cat=Seo Dynamic Tag - Meta Description//600;   type=string;     label= Default: Default description, if current record doesn't contain any description. For single views only. Leave it empty, if you don't like a default description.
  default.description = You have a bug in your SEO Dynamic Tag configuration: description is empty!

}
