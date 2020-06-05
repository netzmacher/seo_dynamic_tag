plugin.tx_seodynamictag {

  # cat=Seo Dynamic Tag - Meta Keywords//201;   type=string;      label= Keywords field: Field, which contains the keywords. Keywords should be a comma separated list. You can use a list of fields, separated by a double slash. I.e: keywords // seo_keywords.
  database.field.keywords       = keywords // seo_keywords
  # cat=Seo Dynamic Tag - Meta Keywords//202;   type=string;      label= Phrase field: If keywords from above are empty, keywords will generated from this field. Value should not be a comma separated list but a phrase. You can use a list of fields, separated by a double slash. I.e: title // header
  database.field.keywords.cover	= title // header
  # cat=Seo Dynamic Tag - Meta Keywords//402;   type=string;      label= Crop: Crop keywords after X chars
  crop.keywords									= 100||1
  # cat=Seo Dynamic Tag - Meta Keywords//500;   type=string;			label= Default: Default value, if current record doesn't contain any keyword. For single views only. Leave it empty, if you don't like default keywords.
  default.keywords							= Please configure the constant editor. Here: category [SEO DYNAMIC TAG - META KEYWORDS]

}
