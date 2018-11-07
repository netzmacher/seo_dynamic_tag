plugin.tx_seodynamictag_pi1 {
  page {
			// Empty statement for proper comments only
    meta {
		}
      // seo_dynamic_tag: author
    meta =
    meta {
			author >
      author = {$plugin.tx_seodynamictag.default.author}
      author {
        override {
            // {$plugin.tx_seodynamictag.database.table}.{$plugin.tx_seodynamictag.database.field.author}
          cObject = COA
          cObject {
						  // #i0029, 180212, dwildt, 1+
						if.isTrue.data = GP:{$plugin.tx_seodynamictag.database.gp}
						10 = COA
						10 {
							if {
								isTrue = {$plugin.tx_seodynamictag.database.field.author}
							}
								// {$plugin.tx_seodynamictag.database.table}.{$plugin.tx_seodynamictag.database.field.author}
							10 = CONTENT
							10 {
								table = {$plugin.tx_seodynamictag.database.table}
								select {
									pidInList = {$plugin.tx_seodynamictag.database.pidInList}
									recursive = {$plugin.tx_seodynamictag.database.recursive}
									where {
										data        = GP:{$plugin.tx_seodynamictag.database.gp}
										noTrimWrap  = |uid = ||
									}
								}
									// {$plugin.tx_seodynamictag.database.field.author}
								renderObj = TEXT
								renderObj {
									field = {$plugin.tx_seodynamictag.database.field.author}
									crop  = {$plugin.tx_seodynamictag.crop.author} | ... | 1
									stdWrap {
										stripHtml         = 1
										htmlSpecialChars  = 1
									}
								}
							}
						}
          }
        }
      }
    }
  }
}


  ////////////////////////////////////////////////
  //
  // Global condition for the single view

[{$plugin.tx_seodynamictag.condition.single.begin}]
  page {
			// Empty statement for proper comments only
    meta {			
		}
			// seo_dynamic_tag: author
    meta =
    meta {
      author      >
				// In case of {$plugin.tx_seodynamictag.condition.single.begin}
      author      < plugin.tx_seodynamictag_pi1.page.meta.author
    }
  }
[{$plugin.tx_seodynamictag.condition.single.end}]
