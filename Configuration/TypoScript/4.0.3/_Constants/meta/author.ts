plugin.tx_seodynamictag {

  # cat=Seo Dynamic Tag - Meta Author//100;   type=string;  label= Author:Value is used in the meta tag author. You can use a list of fields, separated by a double slash. I.e: author // actor.
  database.field.author = author
  # cat=Seo Dynamic Tag - Meta Author//101;   type=int+;    label= Crop: Crop author after X chars (whole words will cropped).
  crop.author = 200
  # cat=Seo Dynamic Tag - Meta Author//200;   type=string;	label= Default: Default author, if current record doesn't contain any author. For single views only. Leave it empty, if you don't like a default author.
  default.author = Author default by TYPO3 SEO Dynamic Tag (seo_dynamic tag)

}
