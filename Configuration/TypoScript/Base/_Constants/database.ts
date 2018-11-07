plugin.tx_seodynamictag {

  # cat=Seo Dynamic Tag - Database*//100;   type=string;          label= Table*:*Obligate! The from table in the SQL query. Example: tt_news
  database.table              =
  # cat=Seo Dynamic Tag - Database*//101;   type=string;          label= Pid list*:*Obligate! Page id of the folder, which contains the records. This can be a comma seperated list of page ids. I.e: 124, 148, 304
  database.pidInList          =
  # cat=Seo Dynamic Tag - Database*//102;   type=int+;          label= Recursive:Number of recursivity levels for the pidInList.
  database.recursive          = 999
  # cat=Seo Dynamic Tag - Database*//201;   type=string;          label= GP parameter for uid*:*Obligate! The GP parameter with the uid. Example: tx_ttnews|tt_news
  database.gp                 =

}
