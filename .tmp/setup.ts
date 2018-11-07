temp.title_og = RECORDS
temp.title_og {
  dontCheckPid = 1
  tables = tx_legimmobilien_domain_model_kaufangebot
  source.data = GP:tx_browser_pi1|immok_uid
  source.intval = 1
  conf.tx_legimmobilien_domain_model_kaufangebot = TEXT
  conf.tx_legimmobilien_domain_model_kaufangebot {
    field = title
    htmlSpecialChars = 1
  }
  wrap = <meta property="og:title" content="|" />
}

temp.bilder_og = FILES
temp.bilder_og {
  references {
    table = tx_legimmobilien_domain_model_kaufangebot
    uid.data = GP:tx_browser_pi1|immok_uid
    fieldName = bilder
  }
  begin = 0
  maxItems = 1
  renderObj = TEXT
  renderObj {
    data = file:current:publicUrl
  }
  stdWrap.noTrimWrap = |<meta property="og:image" content="https://www.standortmanagement-thueringen.de/|">|
  stdWrap.insertData = 1
}

page.headerData.99 = COA
page.headerData.99 {
  10 = TEXT
  10 {
    value (
<!-- Open Graph data -->
<meta property="og:type" content="place" /> 
<meta property="fb:app_id" content="425877094414593" />
) 
  }
  20 = TEXT
  20 < temp.title_og
  30 = TEXT
  30 < temp.bilder_og
}