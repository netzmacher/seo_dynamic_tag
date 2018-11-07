plugin.tx_seodynamictag {

  # cat=Seo Dynamic Tag - Meta Author//100;   type=string;        label= Author:Value is used in the meta tag author. You can use a list of fields, separated by a double slash. I.e: author // actor. If field or field value is empty, SEO Dynamic Tag takes the value from the author default. See [SEO DYNAMIC TAG - DEFAULT VALUES].
  database.field.author							= author
  # cat=Seo Dynamic Tag - Meta Author//101;   type=int+;          label= Crop: Crop author after X chars (whole words will cropped).
  crop.author						= 200

}
