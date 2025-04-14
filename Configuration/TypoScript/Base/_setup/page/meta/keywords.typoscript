page {
  // Empty statement for proper comments only
  meta {
  }
  // EXT:seo_dynamic_tag: keywords
  meta = 
  meta {
    keywords >
    // EXT:seo_dynamic_tag: cObject: 20, 30
    keywords = 
    keywords {
      // EXT:seo_dynamic_tag: 20: field = abstract // keywords. 30: data = register:seodynamictagKeywords
      cObject = COA
      cObject {
        // if.isFalse.data = register:seodynamictagKeywords: field = abstract // keywords
        20 = TEXT
        20 {
          if.isFalse.data = register:seodynamictagKeywords
          data = levelfield:-1, keywords, slide
          //field = abstract // keywords
          crop = {$plugin.tx_seodynamictag.crop.keywords}
          stripHtml = 1
          htmlSpecialChars = 1
          ifEmpty = {$plugin.tx_seodynamictag.default.keywords}
          required = 1
        }
        // if.isTrue.data = register:seodynamictagKeywords: data = register:seodynamictagKeywords
        30 = TEXT
        30 {
          if.isTrue.data = register:seodynamictagKeywords
          data = register:seodynamictagKeywords
          required = 1
        }
      }
    }
  }
}
