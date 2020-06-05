plugin.tx_seodynamictag {

  # cat=Seo Dynamic Tag - Meta Description//300;   type=string;   label= Description: Value is used in the meta tag description. You can use a list of fields, separated by a double slash. I.e: description // short // bodytext. If field or field value is empty, SEO Dynamic Tag takes the value from the default below.
  database.field.description	= description // seo_description // marginal_short // teaser_short // short // bodytext // title // header // subject
  # cat=Seo Dynamic Tag - Meta Description//501;   type=string;   label= Crop: Crop description after X chars (whole words will cropped).
  crop.description						= 200|...|1
  # cat=Seo Dynamic Tag - Meta Description//600;   type=string;    label= Default: Default description, if current record doesn't contain any description. For single views only. Leave it empty, if you don't like a default description.
  default.description					= Please configure the constant editor. Here: category [SEO DYNAMIC TAG - META DESCRIPTION]

}
