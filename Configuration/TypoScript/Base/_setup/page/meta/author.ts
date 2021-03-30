page {
		// Empty statement for proper comments only
	meta {
	}
		// EXT:seo_dynamic_tag: author
	meta =
	meta {
		author >
			// EXT:seo_dynamic_tag: cObject: 20, 30
		author = 
		author {
				// EXT:seo_dynamic_tag: 20: field = author. 30: data = register:seodynamictagAuthor
			cObject = COA
			cObject {
					// if.isFalse.data = register:seodynamictagAuthor: field = author
				20 = TEXT
				20 {
					if =
					if.isFalse.data = register:seodynamictagAuthor
					data = levelfield:-1, author, slide
					//field = author
					ifEmpty = {$plugin.tx_seodynamictag.default.author}
				}
					// if.isTrue.data = register:seodynamictagAuthor: data = register:seodynamictagAuthor
				30 = TEXT
				30 {
					if =
					if.isTrue.data = register:seodynamictagAuthor
					data = register:seodynamictagAuthor
					stripHtml         = 1
					htmlSpecialChars  = 1
					ifEmpty = {$plugin.tx_seodynamictag.default.author}
				}
			}
		}
	}
}