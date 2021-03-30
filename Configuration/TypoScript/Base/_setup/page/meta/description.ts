page {
		// Empty statement for proper comments only
	meta {
	}
		// EXT:seo_dynamic_tag: description
	meta =
	meta {
		description >
			// EXT:seo_dynamic_tag: cObject: 20, 30
		description = 
		description {
				// EXT:seo_dynamic_tag: 20: field = abstract // description. 30: data = register:seodynamictagDescription
			cObject = COA
			cObject {
					// if.isFalse.data = register:seodynamictagDescription: field = abstract // description
				20 = TEXT
				20 {
					if =
					if.isFalse.data = register:seodynamictagDescription
					data = levelfield:-1, description, slide
					//field = abstract // description
					crop = {$plugin.tx_seodynamictag.crop.description}
					stripHtml         = 1
					htmlSpecialChars  = 1
					ifEmpty = {$plugin.tx_seodynamictag.default.description}
					required = 1
				}
					// if.isTrue.data = register:seodynamictagDescription: data = register:seodynamictagDescription
				30 = TEXT
				30 {
					if =
					if.isTrue.data = register:seodynamictagDescription
					data = register:seodynamictagDescription
					required = 1
				}
			}
		}
	}
}