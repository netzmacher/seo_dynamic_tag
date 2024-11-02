plugin.tx_seodynamictag {

  # cat=Seo Dynamic Tag - Meta Title//100;   type=string;					label= Field: Title field. You can use a list of fields, separated by a double slash. I.e: title // header // subject
  database.field.title = title // header // subject
  # cat=Seo Dynamic Tag - Meta Title//200;   type=string;					label= Devider: Devider between title prefix and title appendix
  title.devider.value = :
  # cat=Seo Dynamic Tag - Meta Title//201;   type=string;					label= Devider wrap: No trim wrap for the title devider (TypoScript style)
  title.devider.noTrimWrap = || |
  # cat=Seo Dynamic Tag - Meta Title//400;   type=string;         label= Appendix field:Field is appended the title tag. Example for a field: short. Example for a constant: "my short".
  database.field.title.appendix = subtitle // short // bodytext
  #  # cat=Seo Dynamic Tag - Meta Title//401;   type=options[default,strftime];  label= Appendix case:Default or strftime
  #  database.case.title.appendix			= default
  #  # cat=Seo Dynamic Tag - Meta Title//402;   type=string;  label= Appendix strftime:date format in case of strftime (see above).
  #  database.strftime.title.appendix	= %x %H:%M h
  # cat=Seo Dynamic Tag - Meta Title//503;   type=string;         label= Crop: Crop title after X chars (whole words will cropped).
  crop.title = 60|...|1
  # cat=Seo Dynamic Tag - Meta Title//600;   type=string;					label= Rootpage label (en): Default english label, if root page is selected.
  title.rootpage.en = Home
  # cat=Seo Dynamic Tag - Meta Title//601;   type=string;					label= Rootpage label (de): Default german label, if root page is selected.
  title.rootpage.de = Home

}
