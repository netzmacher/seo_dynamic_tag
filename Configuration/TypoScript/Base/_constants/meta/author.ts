plugin.tx_seodynamictag {

  # cat=Seo Dynamic Tag - Meta Author//100;   type=string;  label= Author:Value is used in the meta tag author. You can use a list of fields, separated by a double slash. I.e: author // actor.
  database.field.author	= author
  # cat=Seo Dynamic Tag - Meta Author//101;   type=string;  label= Crop: Crop author after X chars (whole words will cropped).
  crop.author						= 80|...|1
  # cat=Seo Dynamic Tag - Meta Author//200;   type=string;	label= Default: Default author, if current record doesn't contain any author. For single views only. Leave it empty, if you don't like a default author.
  default.author				= Please configure the constant editor. Here: category [SEO DYNAMIC TAG - META AUTHOR]

}
